var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `hPsW-TmIboA-`,
  _ = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`,
  _ = _();
function _(_) {
  let [_, _] = _.useState(!1);
  return {
    bShowSeeMoreHint: _,
    panelProps: {
      onFocusWithin: _.useCallback((_) => _(_ && !!_), [_]),
      onOptionsButton: _.useCallback(() => {
        _ && _.length !== 0 && (window.location.href = _);
      }, [_]),
    },
  };
}
function _(_) {
  let { label: _, shown: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _ && `_2OCGxajf8LE-`),
    children: [
      (0, _.jsx)(`img`, {
        src: _,
        alt: `Y`,
      }),
      (0, _.jsx)(`div`, {
        children: _,
      }),
    ],
  });
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
var _ = `n1ftODQrdaw-`,
  _ = `yKAVLJay3nI-`,
  _ = `aHXx0lKGo-8-`,
  _ = `sjWOEJA1QkA-`,
  _ = `HiexgIews38-`,
  _ = `mSI4ayPGjeI-`,
  _ = `_9JqNH0-xWx0-`,
  _ = `dOjVs5KHnEY-`,
  _ = `HUVm6gYmSvc-`,
  _ = `LKGYTCAhXb4-`,
  _ = `TAEFsnAzHTE-`,
  _ = `N79GDijrcAg-`,
  _ = `e0cguMiMb2k-`,
  _ = `_1m-Llg5ufgY-`,
  _ = `_-2jXTZVfhpc-`,
  _ = `T18IHa9Wd7U-`,
  _ = `_61kArL09wi4-`,
  _ = `T849dg1FIoA-`,
  _ = `LxwT-CePiE8-`,
  _ = `uclcreR53eo-`,
  _ = `_0pazGw7V24Q-`,
  _ = `KKYQVB-KQqo-`,
  _ = `_7d0hMWLJ9hM-`,
  _ = `V4IQwIOm01E-`,
  _ = `ntCdv8rKSq8-`,
  _ = `-MH3s8EMW-8-`,
  _ = `baamcHK6K2Q-`,
  _ = {
    logo_left: _,
    logo_top: _,
    event_capsule: _,
  };
function _(_) {
  let { promotedSaleEvent: _, children: _, nItemsToFeature: _ } = _,
    _ = _?.strSaleURL;
  return (0, _.jsxs)(_, {
    ..._,
    className: _,
    children: [
      (0, _.jsx)(_, {
        promotedSaleEvent: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            promotedSaleEvent: _,
          }),
          (0, _.jsx)(_, {
            nItemsToFeature: _,
            strSaleURL: _,
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { promotedSaleEvent: _, children: _, nItemsToFeature: _ } = _,
    _ = _?.strSaleURL;
  return (0, _.jsxs)(_, {
    ..._,
    className: _,
    children: [
      (0, _.jsx)(_, {
        promotedSaleEvent: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            promotedSaleEvent: _,
          }),
          (0, _.jsx)(_, {
            nItemsToFeature: _,
            strSaleURL: _,
            children: _,
          }),
        ],
      }),
    ],
  });
}
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
          className: `_0kFHv-3IQ9E-`,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `rp4SoW5BHLY-`,
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
                  className: `LxwT-CePiE8-`,
                  children: _(`#Sale_CrossPromoSale_NowThrough`, _),
                }),
            ],
          }),
          _ &&
            !_ &&
            !_ &&
            (0, _.jsx)(_, {
              url: _,
              className: _(`vYsQr-r2W-s-`, `lE-0nCjjdaw-`),
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
              className: `e0cguMiMb2k-`,
              bFocusable: !!_,
              children: [
                (0, _.jsx)(`img`, {
                  src: _,
                  alt: ``,
                }),
                _ &&
                  (0, _.jsx)(`div`, {
                    className: `_6Se0juYB8OE-`,
                    children: (0, _.jsx)(`div`, {
                      className: `ynfXJbaoYqM-`,
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
          className: _(`u5Mn9Wdc3og-`, _ && `_54U-RZzMfnE-`),
          children: (0, _.jsx)(_, {
            url: _,
            className: `vYsQr-r2W-s-`,
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
              className: _(`vYsQr-r2W-s-`, `lE-0nCjjdaw-`),
              fnCanTakeFocus: _,
              children: _(`#Sale_CrossPromoSale_ExploreEvent`),
            }),
        ],
      }),
      _,
      _ &&
        (0, _.jsx)(`div`, {
          className: `u5Mn9Wdc3og-`,
          children: (0, _.jsx)(_, {
            url: _,
            className: `vYsQr-r2W-s-`,
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
function _(_) {
  let { promotedSaleEvent: _ } = _;
  if (!_) return null;
  let { strBackgroundURL: _, strScrimColor: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    style: _
      ? {
          "--cross-promo-scrim-color": _,
        }
      : void 0,
    children:
      _ &&
      (0, _.jsx)(`div`, {
        className: `ukD3VkOhf4M-`,
        style: {
          backgroundImage: `url(${_})`,
        },
      }),
  });
}
function _(_) {
  let { promotedSaleEvent: _ } = _;
  return _?.strLogoURL
    ? (0, _.jsx)(_, {
        url: _.strSaleURL,
        className: _,
        bFocusable: !1,
        children: (0, _.jsx)(`img`, {
          src: _.strLogoURL,
          alt: _.strName,
        }),
      })
    : null;
}
