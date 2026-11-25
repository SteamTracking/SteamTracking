import { _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _, _, _ } from "./chunk~1fa4b8f2ff.js";
import { _, _, _, _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _ } from "./chunk~e70aabe4d7.js";
import { _ } from "./chunk~7b4b9eb713.js";
import { _ } from "./chunk~fc8a9e4879.js";
import { _ } from "./chunk~3f4314f3b4.js";
var _ = _(_(), 1);
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
function _(_) {
  return (_ ?? []).slice(0, 48).map((_) => ({
    appid: _,
  }));
}
var _ = `Es-UANTRhdg-`,
  _ = `dv9UZEOxkuA-`,
  _ = `FsYxDNcAXaI-`,
  _ = `cSFkUHyVW24-`,
  _ = `yT92BfNEvpw-`,
  _ = `gxh8RxFKhr8-`,
  _ = `AZSEWyNPfhc-`,
  _ = `gZNFN-cKUHw-`,
  _ = _();
_.createContext(!1);
var _ = _.createContext(void 0);
(_.createContext(!1), _.createContext(null));
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
    _ = _.useContext(_),
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
                _ === void 0
                  ? _ &&
                    (0, _.jsx)(`div`, {
                      className: `_6iUHDist0Jc-`,
                      children: _(`#Sale_CrossPromoSale_NowThrough`, _),
                    })
                  : _ &&
                    (0, _.jsx)(`div`, {
                      className: `_6iUHDist0Jc-`,
                      children: _,
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
  return _(
    _
      ? `#Sale_CrossPromoCreator_Visit_${_}`
      : `#Sale_CrossPromoSale_ExploreEvent`,
  );
}
