var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `hPsW-TmIboA-`,
  _ = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`,
  _ = _();
function _(_, _ = `Y`) {
  let [_, _] = _.useState(!1),
    _ = _.useCallback((_) => _(_ && !!_), [_]),
    _ = _.useCallback(() => {
      _ && _.length !== 0 && (window.location.href = _);
    }, [_]);
  return {
    bShowSeeMoreHint: _,
    panelProps:
      _ == `X`
        ? {
            onFocusWithin: _,
            onSecondaryButton: _,
          }
        : {
            onFocusWithin: _,
            onOptionsButton: _,
          },
  };
}
function _(_) {
  let { label: _, shown: _, button: _ = `Y` } = _;
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _ && `_2OCGxajf8LE-`),
    children: [
      _ == `X`
        ? (0, _.jsx)(_, {
            button: `X`,
            "aria-label": `X`,
          })
        : (0, _.jsx)(`img`, {
            src: _,
            alt: `Y`,
          }),
      (0, _.jsx)(`div`, {
        children: _,
      }),
    ],
  });
}
function _(_, _) {
  return !_?.creator_clan_id || !_.appids
    ? null
    : {
        clanAccountID: _.creator_clan_id,
        strEventGID: ``,
        strName: _.name ?? ``,
        strCapsuleURL: _.avatar_url_full_size || void 0,
        strSaleURL: _(_, _ === `creator` ? null : _),
        eCreatorRole: _,
        rgCreatorAppIDs: _.appids,
      };
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
function _(_) {
  return _(_) ? (_(_)[0]?.capsules ?? []).flatMap((_) => _(_) ?? []) : [];
}
function _(_, _) {
  let _ = _(),
    _ = _({
      queries: _.map((_) => {
        let _ = _(_),
          _ = _(_);
        return _
          ? {
              ..._,
              enabled: !1,
            }
          : _;
      }),
    }),
    _ = _.map(_),
    _ = _({
      queries: _.flat().map((_) => {
        let _ = _(_, _);
        return _
          ? {
              ..._,
              enabled: !1,
            }
          : _;
      }),
    }),
    _ = 0;
  return _.map((_, _) => {
    let _ = _[_].length,
      _ = _.slice(_, _ + _);
    _ += _;
    let _ = _(_);
    if (!_)
      return {
        data: void 0,
        bPending: !1,
      };
    let _ = _[_];
    if (_.isPending || _.some((_) => _.isPending))
      return {
        data: void 0,
        bPending: !0,
      };
    let _ = _(
      _,
      _.map((_) => _.data),
    );
    return {
      data: _(_.data, _),
      bPending: !1,
    };
  });
}
var _ = `n1ftODQrdaw-`,
  _ = `yKAVLJay3nI-`,
  _ = `aHXx0lKGo-8-`,
  _ = `sjWOEJA1QkA-`,
  _ = `HiexgIews38-`,
  _ = `mSI4ayPGjeI-`,
  _ = `HUVm6gYmSvc-`,
  _ = `LKGYTCAhXb4-`,
  _ = `TAEFsnAzHTE-`,
  _ = `N79GDijrcAg-`,
  _ = `e0cguMiMb2k-`,
  _ = `_1m-Llg5ufgY-`,
  _ = `_-2jXTZVfhpc-`,
  _ = `T18IHa9Wd7U-`,
  _ = `_61kArL09wi4-`,
  _ = `LxwT-CePiE8-`,
  _ = `uclcreR53eo-`,
  _ = `_0pazGw7V24Q-`,
  _ = `vudAFh2mz8w-`,
  _ = `sznx5kmodN4-`,
  _ = `v05PMkQcjms-`,
  _ = `KKYQVB-KQqo-`,
  _ = `_7d0hMWLJ9hM-`,
  _ = `V4IQwIOm01E-`,
  _ = `ntCdv8rKSq8-`,
  _ = `-MH3s8EMW-8-`,
  _ = `baamcHK6K2Q-`,
  _ = _.createContext(!1),
  _ = {
    logo_left: _,
    logo_top: _,
    event_capsule: _,
  };
function _(_) {
  let { promotedSaleEvent: _, children: _, nItemsToFeature: _, section: _ } = _,
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
            strExploreLabel: _(_),
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { promotedSaleEvent: _, children: _, nItemsToFeature: _, section: _ } = _,
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
            strExploreLabel: _(_),
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
      section: _,
    } = _,
    { bShowSeeMoreHint: _, panelProps: _ } = _(_ ? _?.strSaleURL : void 0, `X`);
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
      _ &&
        !_ &&
        (0, _.jsx)(`div`, {
          className: `_0kFHv-3IQ9E-`,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: _(`rp4SoW5BHLY-`, _ && `C5e6Tszj32k-`),
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
      _ &&
        (0, _.jsx)(_, {
          rgAppIDs: _?.rgCreatorAppIDs,
          strAvatarURL: _,
        }),
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `mY4HngfShnc-`),
        children: [
          _ &&
            _ &&
            (0, _.jsx)(_, {
              url: _,
              className: `venmVbunedo-`,
              bFocusable: !1,
              children: (0, _.jsx)(`img`, {
                src: _,
                alt: ``,
              }),
            }),
          !_ &&
            (0, _.jsxs)(`div`, {
              className: `T18IHa9Wd7U-`,
              children: [
                (0, _.jsx)(`div`, {
                  className: `_61kArL09wi4-`,
                  children: (0, _.jsx)(_, {
                    url: _,
                    className: `T849dg1FIoA-`,
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
            !_ &&
            (0, _.jsx)(_, {
              url: _,
              className: _(`vYsQr-r2W-s-`, `lE-0nCjjdaw-`),
              fnCanTakeFocus: _,
              children: _,
            }),
          _ &&
            _ &&
            (0, _.jsx)(_, {
              label: _,
              shown: !!_,
              button: `X`,
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `msXvMv46vqg-`),
        children: [
          _ &&
            (0, _.jsxs)(_, {
              url: _,
              className: _(`e0cguMiMb2k-`, _ && `_8sI4SnaiFhI-`),
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
        !_ &&
        (0, _.jsx)(`div`, {
          className: _(`u5Mn9Wdc3og-`, _ && `_54U-RZzMfnE-`),
          children: (0, _.jsx)(_, {
            url: _,
            className: `vYsQr-r2W-s-`,
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
              className: `eGR4J5GJB3o-`,
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
  let { children: _, nItemsToFeature: _, strSaleURL: _, eCreatorRole: _ } = _,
    _ = _.useContext(_),
    _ = !_ && !_,
    _ = _ || !_.strExploreLabel ? _(_) : _.strExploreLabel,
    _ = _.logged_in
      ? _.Localize(_.strSignedIn)
      : _.LocalizePlural(_.strSignedOut, _ ?? 0);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (_ || _) &&
        (0, _.jsxs)(`div`, {
          className: `_9JqNH0-xWx0-`,
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `dOjVs5KHnEY-`,
                children: _,
              }),
            _ &&
              (0, _.jsx)(_, {
                url: _,
                className: _(`vYsQr-r2W-s-`, `lE-0nCjjdaw-`),
                fnCanTakeFocus: _,
                children: _,
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
var _ = [1e3, 500, 250, 100, 50, 20];
function _(_) {
  let _ = _.sale_page_cross_promo_sales?.[0]?.total_items ?? 0,
    _ = _.find((_) => _ >= _);
  return _
    ? _(`#Sale_CrossPromoSale_ExploreItems`, _(_))
    : _(`#Sale_CrossPromoSale_ExploreEvent`);
}
