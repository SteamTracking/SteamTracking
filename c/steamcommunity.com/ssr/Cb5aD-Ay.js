var _ = _(_(), 1),
  _ = _(),
  _ = `TfblJ5tKSxE-`,
  _ = `WKTlRhRMaac-`,
  _ = `yLiBlmqdKqY-`,
  _ = `_87DKe4yICYk-`,
  _ = _(_(), 1);
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(_, {
    rows: `subgrid`,
    gridRow: `span 3`,
    gap: `0`,
    cursor: `pointer`,
    padding: `3`,
    background: `dull-6`,
    radius: `sm`,
    ..._,
    className: (0, _.default)(_, _),
  });
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(_, {
    flexGrow: `1`,
    className: _,
    children: (0, _.jsx)(_, {
      size: `4`,
      weight: `heavy`,
      lineClamp: 2,
      contrast: `title`,
      children: _,
    }),
  });
}
function _(_) {
  let { color: _ = `var(--color-dull-10)` } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    style: {
      "--item-color": _,
    },
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `3`,
    truncate: !0,
    contrast: `description`,
    children: _.children,
  });
}
function _(_) {
  let { src: _, dim: _, size: _ } = _;
  return (0, _.jsx)(_, {
    minHeight: `160px`,
    width: `100%`,
    justify: `center`,
    align: `center`,
    children: (0, _.jsx)(`div`, {
      className: (0, _.default)(_, _ && `fzZbv9LVpWo-`),
      style: {
        "--bg-image": `url(${_})`,
        "--image-size-override": _ ? `${_}px` : void 0,
      },
    }),
  });
}
function _(_) {
  let { labelToken: _, value: _ } = _;
  return (0, _.jsx)(_, {
    contrast: `description`,
    truncate: !0,
    children: _.LocalizeReact(
      _,
      (0, _.jsx)(_, {
        children: _,
      }),
    ),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    background: `dull-8`,
    align: `center`,
    justify: `center`,
    padding: `2`,
    radius: `sm`,
    marginTop: `2`,
    children: _.children,
  });
}
function _(_) {
  let { icon: _, name: _ } = _;
  return (0, _.jsxs)(_, {
    align: `center`,
    gap: `1`,
    children: [
      (0, _.jsx)(`img`, {
        src: _,
        alt: ``,
        style: {
          width: `18px`,
          height: `18px`,
        },
      }),
      (0, _.jsx)(_, {
        truncate: !0,
        weight: `medium`,
        children: _,
      }),
    ],
  });
}
var _ = Object.assign(_, {
  Title: _,
  Subtitle: _,
  PrimaryImage: _,
  Attribute: _,
  Action: _,
  AppInfo: _,
  ItemColor: _,
  Header: _,
  Body: (_) =>
    (0, _.jsx)(_, {
      position: `relative`,
      ..._,
    }),
  Footer: _,
});
function _(_) {
  return (0, _.jsx)(_, {
    direction: `column`,
    justify: `end`,
    ..._,
  });
}
var _ = `tTW8H6l2CzQ-`,
  _ = `NiiZNQWFFJM-`,
  _ = `iKQ8iZU8-LI-`;
function _(_) {
  let { className: _, beforeContent: _, children: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    cursor: `pointer`,
    className: (0, _.default)(_, _),
    ..._,
    children: [
      _,
      (0, _.jsx)(_, {
        flexGrow: `1`,
        columns: `max-content 1fr max-content`,
        alignContent: `center`,
        alignItems: `center`,
        gapX: `3`,
        gapY: `0`,
        background: `dull-6`,
        radius: `sm`,
        children: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `4`,
    weight: `heavy`,
    lineClamp: 2,
    contrast: `title`,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `3`,
    truncate: !0,
    contrast: `description`,
    children: _.children,
  });
}
function _(_) {
  let { src: _, dim: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _ && `LG7ujKf6P-c-`),
    style: {
      "--bg-image": `url(${_})`,
    },
  });
}
function _(_) {
  let { labelToken: _, value: _ } = _;
  return (0, _.jsx)(_, {
    contrast: `description`,
    truncate: !0,
    children: _.LocalizeReact(
      _,
      (0, _.jsx)(_, {
        children: _,
      }),
    ),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    color: `dull`,
    children: (0, _.jsx)(_, {
      contrast: `title`,
      children: _.children,
    }),
  });
}
function _(_) {
  let { color: _ = `var(--color-dull-10)` } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    style: {
      "--item-color": _,
    },
  });
}
var _ = Object.assign(_, {
  Title: _,
  Subtitle: _,
  PrimaryImage: _,
  Attribute: _,
  Action: _,
  AppInfo: _.AppInfo,
  ItemColor: _,
  Body: (_) =>
    (0, _.jsx)(_, {
      direction: `column`,
      gap: `1`,
      flexGrow: `1`,
      minWidth: `0`,
      ..._,
    }),
});
function _(_) {
  let { color: _ = `currentColor`, warningColor: _ = `currentColor`, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: _,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M16.5074 9.71331C16.0849 10.3253 15.8234 11.0515 15.7827 11.8345L15.777 12.0501L15.7827 12.2656C15.8979 14.4811 17.7786 16.243 20.0817 16.243C21.2082 16.2429 22.2328 15.8204 23 15.1304V20H1V5H15.7999L16.5074 9.71331ZM4.78841 17.8571H17.9884L14.2931 13.7012L12.7484 15.4367L9.83724 12.1429L4.78841 17.8571ZM5.21667 7.5C4.68181 7.5 4.16902 7.7071 3.79082 8.07547C3.41262 8.44385 3.2 8.94333 3.2 9.46429C3.2 9.85274 3.31862 10.2322 3.54017 10.5552C3.76174 10.8782 4.07622 11.1306 4.44466 11.2793C4.81307 11.4279 5.21872 11.4666 5.60983 11.3909C6.00103 11.3151 6.36048 11.1278 6.64251 10.8531C6.92455 10.5784 7.11685 10.2283 7.19466 9.84724C7.2724 9.46629 7.23268 9.07118 7.08008 8.71233C6.92743 8.35346 6.66832 8.04715 6.33672 7.83133C6.0051 7.61554 5.61548 7.5 5.21667 7.5Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: _ ?? _,
        _: `M18.6944 8.77897L18 4H22L21.3294 8.77897H18.6944Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: _ ?? _,
        _: `M20.0133 14C20.954 14 21.7166 13.2324 21.7166 12.2855C21.7166 11.3387 20.954 10.5711 20.0133 10.5711C19.0726 10.5711 18.3101 11.3387 18.3101 12.2855C18.3101 13.2324 19.0726 14 20.0133 14Z`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    warningColor: `yellow`,
    ..._,
  });
}
function _(_) {
  let { color: _ = `currentColor`, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 20 20`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M15.2779 13.3334C16.3874 11.738 16.8596 9.78503 16.6013 7.85895C16.3431 5.93287 15.3732 4.17324 13.8825 2.92647C12.3919 1.6797 10.4885 1.03612 8.5471 1.12243C6.6057 1.20874 4.76694 2.01868 3.39281 3.39281C2.01868 4.76694 1.20874 6.6057 1.12243 8.5471C1.03612 10.4885 1.6797 12.3919 2.92647 13.8825C4.17324 15.3732 5.93287 16.3431 7.85895 16.6013C9.78503 16.8596 11.738 16.3874 13.3334 15.2779L16.8112 18.7612L17.0112 18.5612L18.5779 16.9945L18.7779 16.7945L15.2779 13.3334ZM8.88897 13.889C7.90006 13.889 6.93336 13.5957 6.11112 13.0463C5.28887 12.4969 4.64801 11.716 4.26957 10.8024C3.89113 9.88875 3.79212 8.88342 3.98504 7.91352C4.17797 6.94361 4.65417 6.0527 5.35343 5.35343C6.0527 4.65417 6.94361 4.17797 7.91352 3.98504C8.88342 3.79212 9.88875 3.89113 10.8024 4.26957C11.716 4.64801 12.4969 5.28887 13.0463 6.11112C13.5957 6.93336 13.889 7.90006 13.889 8.88897C13.889 10.2151 13.3622 11.4868 12.4245 12.4245C11.4868 13.3622 10.2151 13.889 8.88897 13.889V13.889Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
  });
}
var _ = (0, _.createContext)({});
function _() {
  return (0, _.useContext)(_);
}
function _(_) {
  let { focusedWear: _, children: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        focusedWear: _,
      }),
      [_],
    );
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _(_) {
  let {
      listing: { asset: _, description: _, enhanced_appearances: _, bMine: _ },
      expectEnhancedAppearance: _,
    } = _,
    _ = _ && _.length > 0,
    _ = _ && !_,
    { market_name: _ = ``, type: _ } = _,
    _ = _(_.listing),
    _ = _?.asset_accessories || [],
    _ = _?.asset_properties || [],
    _ = _?.amount === 0;
  return {
    color: _(_),
    rgAccessories: _,
    rgProperties: _,
    strPrimaryImageURL: _,
    bWarnMissingAppearance: _,
    strType: _,
    strName: _,
    bMine: _,
    bAvailable: !_,
  };
}
function _(_) {
  let { appid: _, properties: _ } = _;
  if ((_(), !_(_))) return null;
  let _ = _.find(({ propertyid: _ }) => _ === 2);
  return _
    ? (0, _.jsx)(_, {
        marginY: `2`,
        children: (0, _.jsx)(_, {
          buckets: _,
          value: _.float_value,
          focusedBucket: void 0,
          min: 0,
          max: 1,
        }),
      })
    : null;
}
function _(_) {
  let {
    accessory: { description: _ },
  } = _;
  if (!_) return null;
  let _ = _(_),
    _ = _.name;
  return (0, _.jsx)(_, {
    toolTipContent: (0, _.jsx)(_, {
      ..._,
    }),
    children: (0, _.jsx)(_, {
      objectFit: `contain`,
      src: _,
      alt: _,
      maxHeight: `40px`,
      maxWidth: `100%`,
    }),
  });
}
function _(_) {
  let {
      mine: _,
      available: _,
      listing: { strSubtotal: _, description: _ },
      children: _,
      ..._
    } = _,
    _ = (0, _.jsx)(_, {
      weight: `medium`,
      size: `3`,
      title: _.Localize(`#Listing_NotAvailable`),
      children: _.Localize(`#Listing_NotAvailable_Short`),
    }),
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          contrast: `title`,
          children: _,
        }),
        !_(_) &&
          !_ &&
          (0, _.jsx)(_, {
            color: `green`,
            size: `1`,
            children: _.Localize(`#Button_Buy`),
          }),
      ],
    }),
    _ = (0, _.jsx)(_, {
      color: `accent-9`,
      children: _.Localize(`#Listing_MyListing`),
    });
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `4`,
    align: `end`,
    children: [
      (0, _.jsxs)(_, {
        justify: `end`,
        align: `center`,
        gap: `2`,
        ..._,
        children: [!_ && _, _ && _, _ && _],
      }),
      _,
    ],
  });
}
function _(_) {
  let { accessory: _ } = _;
  if (!_.description) return null;
  let _ = _.parent_relationship_properties || [],
    _ = _.standalone_properties || [];
  return (0, _.jsx)(_.Root, {
    description: _.description,
    bInteractable: !1,
    children: (0, _.jsxs)(_, {
      direction: `column`,
      gap: `2`,
      children: [
        (0, _.jsx)(_, {
          lineClamp: 3,
          contrast: `note`,
          size: `4`,
          children: _.description.name,
        }),
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _.description.appid,
              property: _,
            },
            _.propertyid,
          ),
        ),
        _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _.description.appid,
              property: _,
            },
            _.propertyid,
          ),
        ),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    size: {
      initial: `1`,
      _: `2`,
    },
    contrast: `note`,
  });
}
var _ = Object.assign(_, {
  Root: _,
  Content: _,
  SoldContent: _,
  BucketContent: _,
});
function _(_) {
  let { listing: _, expectEnhancedAppearance: _, ..._ } = _;
  return (0, _.jsx)(_.Root, {
    ..._,
    children: (0, _.jsx)(_.Content, {
      listing: _,
      expectEnhancedAppearance: _,
    }),
  });
}
function _(_) {
  let {
      listing: { asset: _ },
      name: _,
      handle: _,
      children: _,
    } = _,
    {
      bWarnMissingAppearance: _,
      color: _,
      rgAccessories: _,
      rgProperties: _,
      strPrimaryImageURL: _,
      strType: _,
      strName: _,
      bMine: _,
      bAvailable: _,
    } = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        color: _,
        type: _,
        itemName: _,
        name: _,
      }),
      (0, _.jsxs)(_.Body, {
        children: [
          (0, _.jsx)(_.PrimaryImage, {
            src: _,
            dim: _,
          }),
          (0, _.jsx)(_, {
            justify: `end`,
            align: `end`,
            position: `absolute`,
            inset: `0`,
            children:
              _ &&
              (0, _.jsx)(`div`, {
                title: _.Localize(`#Listing_EnhancedAppearance_Missing`),
                children: (0, _.jsx)(_, {
                  width: `18px`,
                }),
              }),
          }),
        ],
      }),
      (0, _.jsxs)(_.Footer, {
        children: [
          _.length > 0 &&
            (0, _.jsx)(_, {
              align: `center`,
              minHeight: `0`,
              children: _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    accessory: _,
                  },
                  _,
                ),
              ),
            }),
          (0, _.jsx)(_, {
            wrap: `wrap`,
            gap: `2`,
            marginTop: `2`,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  appid: _.appid,
                  property: _,
                  size: `2`,
                  color: `dull-11`,
                  truncate: !0,
                },
                _.propertyid,
              ),
            ),
          }),
          (0, _.jsx)(_, {
            appid: _.appid,
            properties: _,
          }),
          (0, _.jsxs)(_, {
            handle: _,
            children: [
              (0, _.jsx)(_, {
                mine: _,
                available: _,
                listing: _.listing,
                gap: `3`,
              }),
              _,
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
    sold: { description: _, strSoldPrice: _ },
    name: _,
    handle: _,
    children: _,
  } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        color: _(_),
        type: _.type,
        itemName: _.market_name,
        name: _,
      }),
      (0, _.jsx)(_.Body, {
        children: (0, _.jsx)(_.PrimaryImage, {
          src: _(_),
        }),
      }),
      (0, _.jsx)(_.Footer, {
        marginTop: `2`,
        children: (0, _.jsxs)(_, {
          handle: _,
          children: [
            _ &&
              (0, _.jsx)(_, {
                contrast: `title`,
                children: _,
              }),
            (0, _.jsx)(_, {
              size: `1`,
              color: `dull`,
              disabled: !0,
              children: _.Localize(`#Listing_Sold`),
            }),
            _,
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let {
    description: _,
    bucketName: _,
    details: _,
    name: _,
    handle: _,
    children: _,
  } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        color: _(_),
        type: _.type,
        itemName: _,
        name: _,
      }),
      (0, _.jsx)(_.Body, {
        children: (0, _.jsx)(_.PrimaryImage, {
          src: _(_),
        }),
      }),
      (0, _.jsxs)(_.Footer, {
        gap: `3`,
        marginTop: `2`,
        children: [
          _,
          (0, _.jsx)(_, {
            handle: _,
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { color: _, type: _, itemName: _, name: _ } = _;
  return (0, _.jsxs)(_.Header, {
    children: [
      (0, _.jsx)(_.ItemColor, {
        color: _,
      }),
      _ &&
        (0, _.jsx)(_.Subtitle, {
          children: _,
        }),
      (0, _.jsx)(_.Title, {
        children: _ || _,
      }),
      _ &&
        (0, _.jsx)(_.Subtitle, {
          children: _,
        }),
    ],
  });
}
function _(_) {
  let { handle: _, children: _ } = _;
  return (0, _.jsxs)(_, {
    align: `center`,
    gap: `3`,
    children: [
      (0, _.jsx)(_, {
        flexGrow: `1`,
        children: _,
      }),
      _,
    ],
  });
}
var _ = Object.assign(_, {
  Root: _,
  Color: _.ItemColor,
  Content: _,
  SoldContent: _,
  BucketContent: _,
});
function _(_) {
  let {
      listing: { description: _ },
      expectEnhancedAppearance: _,
      ..._
    } = _,
    _ = _(_);
  return (0, _.jsxs)(_.Root, {
    ..._,
    children: [
      (0, _.jsx)(_.Color, {
        color: _,
      }),
      (0, _.jsx)(_.Content, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    gap: `3`,
    align: `center`,
    gridColumn: `2 / -1`,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    background: `dull-6`,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let {
      listing: { asset: _ },
      name: _,
      children: _,
    } = _,
    {
      bWarnMissingAppearance: _,
      rgAccessories: _,
      rgProperties: _,
      strPrimaryImageURL: _,
      strType: _,
      strName: _,
      bMine: _,
      bAvailable: _,
    } = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_.PrimaryImage, {
        src: _,
        dim: _,
      }),
      (0, _.jsxs)(_.Body, {
        children: [
          (0, _.jsx)(_.Title, {
            children: _ || _,
          }),
          _ &&
            (0, _.jsx)(_.Subtitle, {
              children: _,
            }),
          _ &&
            (0, _.jsx)(_.Subtitle, {
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(_, {
        mine: _,
        available: _,
        listing: _.listing,
        gap: `3`,
        children: _,
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            width: `min(80%, 260px)`,
            children: (0, _.jsx)(_, {
              appid: _.appid,
              properties: _,
            }),
          }),
          _.length > 0 &&
            (0, _.jsx)(_, {
              align: `center`,
              minHeight: `0`,
              children: _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    accessory: _,
                  },
                  _,
                ),
              ),
            }),
        ],
      }),
      (0, _.jsx)(_, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _.appid,
              property: _,
              size: `2`,
              color: `dull-11`,
              truncate: !0,
            },
            _.propertyid,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let {
    sold: { description: _, strSoldPrice: _ },
    name: _,
    children: _,
  } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_.PrimaryImage, {
        src: _(_),
      }),
      (0, _.jsxs)(_.Body, {
        children: [
          (0, _.jsx)(_.Title, {
            children: _ || _.market_name,
          }),
          _ &&
            (0, _.jsx)(_.Subtitle, {
              children: _.market_name,
            }),
          _.type &&
            (0, _.jsx)(_.Subtitle, {
              children: _.type,
            }),
        ],
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `4`,
        align: `end`,
        children: [
          (0, _.jsxs)(_, {
            justify: `end`,
            align: `center`,
            gap: `3`,
            children: [
              _ &&
                (0, _.jsx)(_, {
                  contrast: `title`,
                  children: _,
                }),
              (0, _.jsx)(_, {
                size: `1`,
                color: `dull`,
                disabled: !0,
                children: _.Localize(`#Listing_Sold`),
              }),
            ],
          }),
          _,
        ],
      }),
    ],
  });
}
function _(_) {
  let { description: _, bucketName: _, name: _, details: _, children: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_.PrimaryImage, {
        src: _(_),
      }),
      (0, _.jsxs)(_.Body, {
        children: [
          (0, _.jsx)(_.Title, {
            children: _ || _,
          }),
          _ &&
            (0, _.jsx)(_.Subtitle, {
              children: _,
            }),
          _,
        ],
      }),
      (0, _.jsx)(_, {
        align: `center`,
        gap: `3`,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { total: _, state: _, onChange: _, facets: _ } = _,
    _ = _.bSteamItems ? _.filterSteam : _.filterInGame,
    _ = _({
      appid: _.bSteamItems ? 753 : (_.app?.appid ?? 0),
      state: _,
      onStateChange: (_) =>
        _({
          ..._,
          filterSteam: _.bSteamItems ? _ : _.filterSteam,
          filterInGame: _.bSteamItems ? _.filterSteam : _,
        }),
      textFilter: _.strSearch,
      onClearText: () =>
        _({
          ..._,
          strSearch: void 0,
        }),
      facets: _,
    }),
    _ = _(_.length, _);
  return (0, _.jsxs)(_, {
    align: `center`,
    gap: `2`,
    wrap: `wrap`,
    children: [
      _
        ? (0, _.jsx)(_, {
            contrast: `description`,
            children: _,
          })
        : null,
      _.map(({ key: _, label: _, onClear: _ }) =>
        (0, _.jsxs)(
          _,
          {
            color: `dull`,
            onClick: _,
            children: [
              _,
              (0, _.jsx)(_, {
                marginLeft: `2`,
              }),
            ],
          },
          _,
        ),
      ),
    ],
  });
}
function _(_) {
  let { total: _, facetingInfo: _, facets: _, ..._ } = _,
    _ = (0, _.useMemo)(() => {
      let _ = {};
      if (_ && _) {
        for (let _ of Object.keys(_))
          _(_[_], `select`, !0, void 0, _) && (_[_] = !0);
        return (_) => !!_[_];
      }
    }, [_, _]),
    _ = _({
      appid: _.state.app?.appid ?? 0,
      includeFacet: _,
      facets: _,
      ..._,
    }),
    _ = _(_.length, _);
  return (0, _.jsxs)(_, {
    align: `center`,
    gap: `2`,
    wrap: `wrap`,
    children: [
      _
        ? (0, _.jsx)(_, {
            contrast: `description`,
            children: _,
          })
        : null,
      _.map(({ key: _, label: _, onClear: _ }) =>
        (0, _.jsxs)(
          _,
          {
            color: `dull`,
            onClick: _,
            children: [
              _,
              (0, _.jsx)(_, {
                marginLeft: `2`,
              }),
            ],
          },
          _,
        ),
      ),
    ],
  });
}
function _(_, _) {
  let _ = ``;
  return (
    typeof _ == `number` && _ > 0
      ? (_ = _.LocalizePlural(`#Search_AmountFoundFor`, _(_)))
      : typeof _ == `number`
        ? (_ = _.LocalizePlural(`#Search_AmountFound`, _(_)))
        : _ > 0 && (_ = _.Localize(`#Search_ResultsFoundFor`)),
    _
  );
}
function _(_) {
  let {
      appid: _,
      state: _,
      onStateChange: _,
      textFilter: _,
      onClearText: _,
      includeFacet: _,
      facets: _,
    } = _,
    _ = _(),
    _ = [];
  _ &&
    _.push({
      key: `q`,
      label: `"${_}"`,
      onClear: _,
    });
  let _ = _(_),
    _ = _(_);
  if (_(_.price, _)) {
    let _ = _(_.price, _);
    _.push({
      key: `p`,
      label: _,
      onClear: () =>
        _({
          ..._,
          price: [0, _.maxPrice],
        }),
    });
  }
  for (let [_, _] of Object.entries(_.facets))
    if (!_ || _(_))
      for (let _ of Object.keys(_)) {
        let _ = (_ && _[_])?.tags,
          _ = _ ? _[_] : void 0,
          _ = _ ? _.localized_name : _;
        _.push({
          key: `f_${_}_${_}`,
          label: _,
          onClear: () =>
            _({
              ..._,
              facets: _(_.facets, _, _, !1),
            }),
        });
      }
  for (let [_, _] of Object.entries(_.accessories)) {
    let _ = _.data ? _.data.find((_) => _.internal_type === _) : void 0;
    for (let _ of Object.keys(_)) {
      let _ = _;
      _ === `$any$` &&
        ((_ = _.Localize(`#Accessories_AnyFilter`)),
        _ &&
          (_ = _.Localize(
            `#Accessories_TypeAndValue_Breadcrumb`,
            _.localized_type,
            _,
          ))),
        _ === `$none$` &&
          ((_ = _.Localize(`#Accessories_NoneFilter`)),
          _ &&
            (_ = _.Localize(
              `#Accessories_TypeAndValue_Breadcrumb`,
              _.localized_type,
              _,
            ))),
        _.push({
          key: `a_${_}_${_}`,
          label: _,
          onClear: () =>
            _({
              ..._,
              accessories: _(_.accessories, _, _, !1),
            }),
        });
    }
  }
  for (let [_, _] of Object.entries(_.properties)) {
    let _ = _.data ? _.data.get(parseInt(_)) : void 0;
    if (!_) continue;
    let _ = _(_, _),
      _ = `ap_${_}`;
    _.push({
      key: _,
      label: _,
      onClear: () => {
        let _ = {
          ..._,
          properties: {
            ..._.properties,
          },
        };
        delete _.properties[_._], _(_);
      },
    });
  }
  return _;
}
function _(_, _) {
  let [_, _] = _;
  return (_ > 0 && _ < _.maxPrice) || (_ < _.maxPrice && _ > 0);
}
function _(_, _) {
  let _ = [0, 0];
  return (
    _.type === 1
      ? ((_[0] = _.float_min ?? _.float_min ?? 0),
        (_[1] = _.float_max ?? _.float_max ?? 1))
      : _.type === 2 &&
        ((_[0] = _.int_min ?? _.int_min ?? 0),
        (_[1] = _.int_max ?? _.int_max ?? 0)),
    _.Localize(
      `#AssetPropertyNumberFilterRange`,
      _.localized_label ?? ``,
      _[0],
      _[1],
    )
  );
}
function _(_, _) {
  let [_, _] = _,
    _ = _(_, _.currency.eCurrency),
    _ = _ < _.maxPrice ? _(_, _.currency.eCurrency) : null;
  return _ && !_ ? _.Localize(`#PriceFilter_ValueAndUp`, _) : `${_} - ${_}`;
}
function _(_, _, _, _) {
  let _ = {
    ..._,
    [_]: {
      ..._[_],
    },
  };
  return (
    (_[_][_] = !0),
    _ || (Object.keys(_[_]).length === 1 ? delete _[_] : delete _[_][_]),
    _
  );
}
var _ = `oEO0SxyReAE-`,
  _ = `geMNq-iFIJQ-`,
  _ = `uH-UDcHgcz8-`;
function _(_) {
  switch (_) {
    case -1:
      return _.Localize(
        `#Economy_Market_Purchase_TradableRestriction_Permanent`,
      );
    case 1:
      return _.Localize(`#Economy_Market_Purchase_TradableRestriction_1Day`);
    case 7:
      return _.Localize(`#Economy_Market_Purchase_TradableRestriction_7Days`);
    default:
      return _.Localize(
        `#Economy_Market_Purchase_TradableRestriction_NDays`,
        _,
      );
  }
}
function _(_) {
  switch (_) {
    case 0:
      return _.Localize(`#Economy_Market_Purchase_MarketableRestriction_None`);
    case 1:
      return _.Localize(`#Economy_Market_Purchase_MarketableRestriction_1Day`);
    case 7:
      return _.Localize(`#Economy_Market_Purchase_MarketableRestriction_7Days`);
    default:
      return _.Localize(
        `#Economy_Market_Purchase_MarketableRestriction_NDays`,
        _,
      );
  }
}
function _(_) {
  let { trade: _, market: _ } = _,
    _ = [];
  return (
    _ !== void 0 && _.push(_(_)),
    _ !== void 0 && _.push(_(_)),
    _.length === 0
      ? null
      : (0, _.jsxs)(_, {
          size: `3`,
          _: `div`,
          contrast: `body`,
          children: [
            _.Localize(`#Economy_Market_Purchase_Restrictions`),
            (0, _.jsx)(`ul`, {
              style: {
                margin: 0,
              },
              children: _.map((_) =>
                (0, _.jsx)(
                  `li`,
                  {
                    children: _,
                  },
                  _,
                ),
              ),
            }),
          ],
        })
  );
}
function _(_) {
  let { market_tradable_restriction: _, market_marketable_restriction: _ } = _;
  return {
    bRestricted: _ !== void 0 || _ !== void 0,
    trade: _,
    market: _,
  };
}
function _(_) {
  let { onClose: _, listing: _ } = _,
    _ = _(),
    _ = !!_.data;
  return (0, _.jsxs)(_, {
    onClose: _,
    children: [
      (0, _.jsx)(_.Heading, {
        children: _.Localize(`#PurchaseDialog_Header`),
      }),
      !_ && (0, _.jsx)(_.Loading, {}),
      _ &&
        (0, _.jsx)(_, {
          serverInfo: _.data,
          listing: _,
        }),
    ],
  });
}
function _(_) {
  let { serverInfo: _, listing: _ } = _,
    [_, _] = (0, _.useState)({});
  (0, _.useEffect)(() => {
    let {
      billing_address: {
        firstname: _,
        lastname: _,
        address1: _,
        address2: _,
        city: _,
        state: _,
        postcode: _,
      } = {},
    } = _;
    _({
      address: _,
      addressTwo: _,
      firstName: _,
      lastName: _,
      city: _,
      state: _,
      postalCode: _,
      bSaveAddress: !0,
    });
  }, [_]);
  let _ = _.wallet_info
      ? _(parseInt(_.wallet_info.wallet_balance), _.wallet_info.wallet_currency)
      : ``,
    _ = _(_, _.tax_rate),
    { mutation: _, confirmation: _ } = _(_.listingid, _, _, _),
    _ = _.isIdle || (_.isError && _.error.bFatal === !1),
    _ = _.require_billing_info && _,
    { bRestricted: _, ..._ } = _(_.description),
    _;
  return (
    _.asset?.amount === 0
      ? (_ = {
          bFatal: !0,
          message: _.Localize(`#Listing_NotAvailable_Long`),
        })
      : _.error?.bFatal === !0 && (_ = _.error),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          listing: _,
        }),
        !_ &&
          (0, _.jsx)(_, {
            listing: _,
            serverInfo: _,
            pricing: _,
          }),
        !_ &&
          _ &&
          (0, _.jsx)(_, {
            alignSelf: `end`,
            paddingX: `2`,
            children: (0, _.jsx)(_, {
              ..._,
            }),
          }),
        _ &&
          (0, _.jsx)(_.FatalError, {
            children:
              _.message || _.Localize(`#PurchaseDialog_Error_ServerGeneric`),
          }),
        !_ &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              _.isSuccess && !_ && (0, _.jsx)(_, {}),
              _ &&
                (0, _.jsx)(_.ConfirmationPoller, {
                  confirmation: _,
                  onRetry: _.mutate,
                  serverInfo: _,
                }),
              _ &&
                (0, _.jsx)(_.BillingInfoSection, {
                  state: _,
                  onChange: _,
                  accountName: _.account_name,
                  walletBalance: _,
                  billingCountry: _.localized_country,
                  billingStates: _.billing_states,
                  hasFunds: _(_.wallet_info, _.unTotal),
                }),
              !_.isSuccess &&
                !_ &&
                (0, _.jsx)(_, {
                  hideSSA: !_,
                  serverInfo: _,
                  listing: _,
                  pricing: _,
                  onPurchase: _.mutate,
                  disabled: !_,
                }),
              _.error?.bFatal === !1 &&
                (0, _.jsx)(_.NonFatalError, {
                  children:
                    _.error.message ||
                    _.Localize(`#PurchaseDialog_Error_ServerGeneric`),
                }),
            ],
          }),
      ],
    })
  );
}
function _(_) {
  let _ = new URLSearchParams(location.search);
  _.delete(`detail`), _.delete(`buy`);
  let _ = `?${_.toString()}`;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    children: [
      (0, _.jsx)(_, {
        background: `dull-5`,
        padding: `5`,
        children: (0, _.jsx)(_, {
          align: `center`,
          size: `4`,
          _: `div`,
          contrast: `title`,
          children: _.Localize(`#PurchaseDialog_Purchase_Successful`),
        }),
      }),
      (0, _.jsxs)(_, {
        marginTop: `2`,
        justify: `end`,
        gap: `2`,
        children: [
          (0, _.jsx)(_, {
            color: `dull`,
            href: _,
            children: _.Localize(`#PurchaseDialog_Close`),
          }),
          (0, _.jsx)(_, {
            color: `dull`,
            href: `${_.COMMUNITY_BASE_URL}my/inventory`,
            children: _.Localize(`#PurchaseDialog_ViewInventory`),
          }),
        ],
      }),
    ],
  });
}
function _(_, _, _, _) {
  let [_, _] = (0, _.useState)(null);
  return {
    mutation: _({
      mutationFn: async () => {
        if (_.require_billing_info) {
          let _ = _(_, _);
          if (_)
            throw {
              bFatal: !1,
              message: _,
            };
        }
        let _ = {
            sessionid: _(),
            currency: _.wallet_info ? _.wallet_info.wallet_currency : `0`,
            subtotal: _.unSubtotal,
            fee: _.unFeeAmount,
            total: _.unTotal,
            tradefee_tax: _.unTaxAmount,
            quantity: 1,
            first_name: _.firstName ?? ``,
            last_name: _.lastName ?? ``,
            billing_address: _.address ?? ``,
            billing_address_two: _.addressTwo ?? ``,
            billing_country: _.country_code ?? ``,
            billing_city: _.city ?? ``,
            billing_state: _.state ?? ``,
            billing_postal_code: _.postalCode ?? ``,
            confirmation: _ ? _._ : `0`,
            save_my_address: _.bSaveAddress ? `1` : `0`,
          },
          _ = new FormData();
        for (let [_, _] of Object.entries(_))
          _.set(_, typeof _ == `string` ? _ : _.toString());
        let _ = await fetch(`/market/buylisting/${_}`, {
          method: `POST`,
          credentials: `include`,
          body: _,
        });
        try {
          let _ = await _.json();
          if (_._) return _ && _(null), _;
          if (_?.need_confirmation) {
            let _ = {
              _: _.confirmation.confirmation_id,
              cAttempts: _ ? _.cAttempts + 1 : 0,
            };
            _(_), _.confirmation_type == 2 && _(12, _._);
          } else if (_)
            throw (
              (_(null),
              {
                bFatal: !0,
                message: _.Localize(`#PurchaseDialog_Error_NoConfirmation`),
              })
            );
          else
            throw _?.message
              ? {
                  bFatal: !0,
                  message: _.message,
                }
              : {
                  bFatal: !0,
                  message: _.Localize(`#PurchaseDialog_Error_ServerGeneric`),
                };
          return _;
        } catch (_) {
          throw _?.bFatal
            ? _
            : {
                bFatal: !0,
                message: _.Localize(`#PurchaseDialog_Error_ServerGeneric`),
              };
        }
      },
    }),
    confirmation: _,
  };
}
function _(_) {
  let { listing: _ } = _,
    _ = _(_),
    _ = (_.asset?.amount || 0) > 0,
    _ = _(`sm`) ? `4` : `3`;
  return (0, _.jsxs)(_, {
    gridColumn: `span 2`,
    background: `dull-5`,
    padding: `2`,
    align: `center`,
    gap: `2`,
    style: {
      justifySelf: `stretch`,
    },
    children: [
      (0, _.jsx)(_, {
        background: `dull-6`,
        padding: {
          initial: `1`,
          _: `2`,
        },
        children: (0, _.jsx)(_, {
          width: {
            initial: `48px`,
            _: `64px`,
          },
          height: {
            initial: `48px`,
            _: `64px`,
          },
          objectFit: `contain`,
          src: _,
          alt: ``,
        }),
      }),
      (0, _.jsx)(_, {
        flexGrow: `1`,
        minWidth: `0`,
        children: (0, _.jsx)(_, {
          contrast: `title`,
          size: _,
          lineClamp: 3,
          children: _.description.market_name,
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          size: _,
          align: `end`,
          contrast: `subtitle`,
          marginRight: `2`,
          children: _.strSubtotal,
        }),
    ],
  });
}
function _(_) {
  let {
      listing: _,
      serverInfo: _,
      pricing: {
        strSubtotal: _,
        strPublisherFee: _,
        strSteamFee: _,
        strTotal: _,
        strTaxAmount: _,
      },
    } = _,
    { data: _ } = _({
      appid: _.description.appid,
    }),
    _ = _?.name,
    _ = (_.publisherFeePct * 100).toFixed(1),
    _ = (
      (_.wallet_info ? parseFloat(_.wallet_info.wallet_fee_percent) : 0.05) *
      100
    ).toFixed(1);
  return (0, _.jsxs)(_, {
    columns: `2fr 1fr`,
    gap: `2`,
    margin: `4`,
    justifyContent: `end`,
    justifyItems: `end`,
    children: [
      (0, _.jsx)(_, {
        children: _.Localize(`#PurchaseDialog_Subtotal_Label`),
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
      !_ &&
        (0, _.jsx)(_, {
          children: _.Localize(`#PurchaseDialog_PublisherFee_Label_Generic`, _),
        }),
      _ &&
        (0, _.jsx)(_, {
          children: _.Localize(`#PurchaseDialog_PublisherFee_Label`, _, _),
        }),
      (0, _.jsx)(_, {
        children: _,
      }),
      (0, _.jsx)(_, {
        children: _.Localize(`#PurchaseDialog_SteamFee_Label`, _),
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              children: _.Localize(
                `#PurchaseDialog_LocalTax_Label`,
                _.billing_address?.state ?? ``,
              ),
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
          ],
        }),
      (0, _.jsx)(_, {
        gridColumn: `span 2`,
        width: `100%`,
        children: (0, _.jsx)(_, {
          size: `4`,
          color: `dull-8`,
        }),
      }),
      (0, _.jsx)(_, {
        children: _.Localize(`#PurchaseDialog_Total_Label`),
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `2`,
    align: `end`,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `2`,
    contrast: `title`,
    children: _.children,
  });
}
function _(_, _) {
  if (_.unFeePerUnit) {
    let _ = _.unPricePerUnit,
      _ = _.unFeePerUnit,
      _ = 0;
    _ > 2 &&
      _?.tradefee_addtax &&
      _?.tradefee_taxrate > 0 &&
      (_ = Math.floor((_ * _.tradefee_taxrate) / 100 + 0.5));
    let _ = _ + _ + _,
      _ = _.unPublisherFeePerUnit,
      _ = _.unSteamFeePerUnit;
    return {
      unSubtotal: _,
      unFeeAmount: _,
      unTaxAmount: _,
      unTotal: _,
      strSubtotal: _(_, _.eCurrency),
      strPublisherFee: _ ? _(_, _.eCurrency) : void 0,
      strSteamFee: _ ? _(_, _.eCurrency) : void 0,
      strTaxAmount: _ ? _(_, _.eCurrency) : void 0,
      strTotal: _(_, _.eCurrency),
    };
  }
  let _ = _(_.unPricePerUnit, _.eCurrency);
  return {
    strSubtotal: _,
    strTotal: _,
    unTotal: _.unPricePerUnit,
    unSubtotal: _.unPricePerUnit,
    unFeeAmount: 0,
    unTaxAmount: 0,
  };
}
function _(_) {
  let {
      onPurchase: _,
      listing: _,
      disabled: _,
      hideSSA: _,
      serverInfo: {
        wallet_info: _,
        ssa: { last_update: _, eu_ssa: _ },
      },
      pricing: { unTotal: _ },
    } = _,
    _ = _(_, _),
    _ = ``;
  if (!_) {
    let _ = new URL(location.href);
    _.searchParams.set(`detail`, _.listingid), _.searchParams.set(`buy`, `1`);
    let _ = _.toString();
    _ = `${_.STORE_BASE_URL}steamaccount/addfunds?marketlisting=${_.listingid}&returnurl=${encodeURIComponent(_)}`;
  }
  let _ = () => {
      _ && _();
    },
    [_, _] = (0, _.useState)(!1),
    _ = {
      variant: `vibrant`,
      color: `green`,
      width: {
        initial: `100%`,
        _: void 0,
      },
    };
  return (0, _.jsxs)(_, {
    columns: {
      initial: `1fr`,
      _: `1fr max-content`,
    },
    gap: {
      initial: `2`,
      _: void 0,
    },
    alignContent: `end`,
    justifyContent: `end`,
    children: [
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        children: [
          _ &&
            !_ &&
            (0, _.jsx)(_.SSAAgreement, {
              lastUpdate: _,
              agreed: _,
              onAgreeChange: _,
            }),
          _ && !_ && _ && (0, _.jsx)(_.EUSSAAgreement, {}),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          type: `submit`,
          ..._,
          disabled: !_ || _,
          onClick: _,
          children: _.Localize(`#PurchaseDialog_Action_Purchase`),
        }),
      !_ &&
        (0, _.jsx)(_, {
          ..._,
          href: _,
          disabled: _,
          children: _.Localize(`#PurchaseDialog_Action_AddFunds`),
        }),
    ],
  });
}
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    justify: `center`,
    align: `center`,
    radius: `sm`,
    background: `yellow-6`,
    border: `2px solid var(--color-yellow-8)`,
    padding: `3`,
    ..._,
    children: (0, _.jsx)(_, {
      size: `4`,
      align: `center`,
      contrast: `title`,
      children: _.children,
    }),
  });
}
var _ = `Exterior`,
  _ = `WearCategoryNA`,
  _ = `Quality`,
  _ = [`normal`, `strange`, `tournament`],
  _ = [
    `WearCategory0`,
    `WearCategory1`,
    `WearCategory2`,
    `WearCategory3`,
    `WearCategory4`,
  ],
  _ = _.reduce(
    (_, _, _) => ({
      ..._,
      [_]: _,
    }),
    {},
  ),
  _ = _.reduce(
    (_, _, _) => ({
      ..._,
      [_]: _,
    }),
    {},
  );
function _(_) {
  return _ ? _(_) : !1;
}
function _(_) {
  return _(_.appid)
    ? !_.commodity && !!(_.tags || []).find((_) => _.category === _)
    : !1;
}
function _(_) {
  let _ = {};
  for (let _ of _) {
    let _ = {
      bucket: _,
      rgTypes: [],
      wear: null,
    };
    for (let [_, _] of _.filters || [])
      _ === _ ? _.rgTypes.push(_) : _ === _ && (_.wear = _);
    _.wear ||= _;
    for (let _ of _.rgTypes) _[_] || (_[_] = {}), (_[_][_.wear] = _);
  }
  return _;
}
function _(_) {
  if (!_.length) return null;
  let _ = _[0];
  for (let _ = 1; _ < _.length; _++) _(_, _[_]) > 0 && (_ = _[_]);
  return _;
}
function _(_, _) {
  if (!_.filters && !_.filters) return 0;
  if (_.filters && !_.filters) return -1;
  if (_.filters && !_.filters) return 1;
  let _ = (_) => {
      let _ = _.find(([_]) => _ === _),
        _ = _.find(([_]) => _ === _);
      return {
        wear: _ ? _[1] : ``,
        type: _ ? _[1] : ``,
      };
    },
    _ = _(_.filters),
    _ = _(_.filters),
    _ = (_[_.type] ?? 1 / 0) - (_[_.type] ?? 1 / 0);
  return _ === 0 ? (_[_.wear] ?? 1 / 0) - (_[_.wear] ?? 1 / 0) : _;
}
var _ = {
  WearCategory0: `#4A7D12`,
  WearCategory1: `#82B461`,
  WearCategory2: `#DCB259`,
  WearCategory3: `#BB6454`,
  WearCategory4: `#84453B`,
  WearCategoryNA: `#999999`,
};
function _(_, _) {
  let _ = _(_);
  return (0, _.useMemo)(() => {
    if (!_.data) return null;
    let _ = _(_),
      _ = _.data[_],
      _ = _.data[_];
    if (
      (_(!!_ && !!_, `Could not find expected CS facets`), !_?.tags || !_?.tags)
    )
      return null;
    let _ = (_, _) => {
        let _ = _[_] && _[_][_];
        if (!_) return;
        let _ = ``;
        return (
          _?.tags && _.tags[_] && (_ = _.tags[_].localized_name),
          {
            _: _.bucket_id,
            price: _.strPrice,
            label: _,
          }
        );
      },
      _ =
        Object.values(_)
          .map((_) => Object.keys(_))
          .flat()
          ._(0) == _,
      _ = [];
    for (let _ of Object.keys(_.tags))
      if ((_ == _) == _) {
        let _ = _.tags[_];
        _.push({
          category: _.name,
          tag: _,
          label: _.localized_name,
          color: _[_],
          normal: _(`normal`, _),
          strange: _(`strange`, _),
          tournament: _(`tournament`, _),
        });
      }
    let _ = new Intl.Collator(_(), {
      numeric: !0,
    });
    return (
      _.sort((_, _) => _.compare(_.tag, _.tag)),
      {
        rgWears: _,
        qualityFacet: _,
        bHasStatTrak: _.strange && Object.keys(_.strange).length > 0,
        bHasSouvenir: _.tournament && Object.keys(_.tournament).length > 0,
      }
    );
  }, [_.data, _]);
}
function _(_) {
  let _ = `normal`;
  return (
    _ &&
      _.facets[_] &&
      (_.facets[_].strange
        ? (_ = `strange`)
        : _.facets[_].tournament && (_ = `tournament`)),
    _
  );
}
function _(_) {
  if (!_ || !_.tags || !_(_.appid)) return;
  let _ = _.tags,
    _ = _.filter((_) => _.category == `Weapon`)[0];
  if (_) return _.internal_name;
  let _ = _.filter((_) => _.category == `Type`)[0];
  if (!_) return;
  let _ = _.internal_name;
  if (
    _ &&
    [`Type_CustomPlayer`, `Type_Hands`, `CSGO_Tool_Keychain`].includes(_)
  )
    return _;
}
var _ = `_5BwV17tvKAA-`,
  _ = `LE6ZFnA3GPw-`,
  _ = `EDq8Ycw7ToQ-`,
  _ = `vI-sfB4wzkY-`,
  _ = `nDMeUA3eOxM-`,
  _ = `iOVGkc-E3Mo-`,
  _ = `mADYkJ1-HeA-`,
  _ = `hZ2S-3o4LUA-`,
  _ = `_7vTFwxsCbg4-`,
  _ = `XbJYc38KiPI-`,
  _ = `Bu50n9Bb1u4-`,
  _ = `DgkXzYAdZ8I-`,
  _ = `StMclF6ZTPs-`,
  _ = `qAprmeZ3Xvg-`;
function _(_) {
  let { index: _, listings: _, onIndexChange: _, onClose: _, ..._ } = _,
    [_, _] = (0, _.useState)(!0),
    [_, _] = (0, _.useState)(0);
  _(`ArrowLeft`, () => _(!1), !0, !0),
    _(`Left`, () => _(!1), !0, !0),
    _(`ArrowRight`, () => _(!0), !0, !0),
    _(`Right`, () => _(!0), !0, !0),
    _(`Escape`, () => _(), !0, !0),
    _(`Esc`, () => _(), !0, !0);
  let _ = (0, _.useCallback)(
      (_) => {
        _(_), _(_ > _);
      },
      [_, _],
    ),
    _ = (_) => {
      let _ = _(_ + (_ ? 1 : -1), 0, _.length - 1);
      _ != _ && _(_);
    };
  (0, _.useEffect)(() => {
    _.length != _ && _(_.length);
  }, [_, _, _]);
  let {
      refContainer: _,
      bIsDragging: _,
      nDragOffset: _,
      nDragSelectedOffsetIndex: _,
      handleTouchStart: _,
      handleTouchMove: _,
      handleTouchEnd: _,
    } = _(_, _, _.length),
    _ = (_) => {
      _.target == _.currentTarget && (_?.(), _.stopPropagation());
    },
    _ = (_) => _(_ + _, _) && (_(_, -1, 1) || _);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      onClick: _,
      children: (0, _.jsx)(`div`, {
        ref: _,
        className: _,
        onTouchStart: _,
        onTouchMove: _,
        onTouchEnd: _,
        children: [-2, -1, 0, 1, 2].map((_) =>
          (0, _.jsx)(
            `div`,
            {
              className: (0, _.default)({
                [_]: !0,
                [_]: _,
                [_]: _(_),
                [_]: _ == -2,
                [_]: _ == -1,
                [_]: _ == 0,
                [_]: _ == 0 && !_,
                [_]: _ == 0 && _,
                [_]: _ == 1,
                [_]: _ == 2,
                [_]: _ + _ == 0,
              }),
              style: {
                "--dragOffsetX": `${_}px`,
              },
              children:
                _(_) &&
                (0, _.jsx)(_, {
                  index: _ + _,
                  selectedIndex: _,
                  listing: _[_ + _],
                  fnAdvance: _,
                  onClose: _,
                  ..._,
                }),
            },
            _ + _,
          ),
        ),
      }),
    }),
  });
}
function _(_, _, _) {
  let _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(0),
    _ = (0, _.useRef)({
      _: 0,
      _: 0,
    });
  return {
    refContainer: _,
    bIsDragging: _,
    nDragOffset: _,
    nDragSelectedOffsetIndex: _,
    handleTouchStart: (_) => {
      _(!0),
        (_.current = {
          _: _.touches[0].clientX,
          _: _.touches[0].clientY,
        }),
        _(0),
        _(0);
    },
    handleTouchMove: (_) => {
      if (!_) return;
      let _ = _.touches[0].clientX - _.current._,
        _ = _.touches[0].clientY - _.current._;
      Math.abs(_) > Math.abs(_) && (_(_), _(_ > 50 ? 1 : _ < -50 ? -1 : 0));
    },
    handleTouchEnd: () => {
      _ &&
        (_(!1),
        _ > 50 ? _(Math.max(_ - 1, 0)) : _ < -50 && _(Math.min(_ + 1, _ - 1)),
        _(0),
        _(0));
    },
  };
}
function _(_) {
  let { index: _, selectedIndex: _, fnAdvance: _, ..._ } = _,
    _ = () => {
      _ != _ && _(_ > _);
    },
    _ = _ === _;
  return (0, _.jsx)(`div`, {
    onClick: _ ? void 0 : _,
    children: (0, _.jsx)(`div`, {
      inert: !_,
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
function _(_, _, _, _) {
  _.useEffect(() => {
    let _ = (_) => {
      _.key === _ &&
        !_.defaultPrevented &&
        (_.preventDefault(), _.stopPropagation(), _(_));
    };
    return (
      document.addEventListener(`keydown`, _),
      () => document.removeEventListener(`keydown`, _)
    );
  }, [_, _, _, _]);
}
function _(_) {
  return (
    !!_.bSearchDescriptions ||
    (!!_.accessoryFilters && Object.keys(_.accessoryFilters).length > 0)
  );
}
function _(_, _) {
  let _ = {};
  for (let _ of _) {
    let _ = _.category,
      _ = _.internal_name;
    _ && _ && (_[_] || (_[_] = []), _[_].push(_));
  }
  return _;
}
function _(_, _ = !0) {
  return _(_(_, _));
}
function _(_, _ = !0) {
  return {
    queryKey: [`market_search`, _],
    initialPageParam: 0,
    queryFn: async (_) => {
      let _ = {
          ..._,
          start: _.pageParam,
        },
        _ = await _(`/market/actions`, `Search`, _);
      if (_ === null) throw Error(`Failed to load next page`);
      return _;
    },
    getNextPageParam: (_, _, _) => {
      if (!_) return null;
      let _ = _ + (_.results || []).length;
      return (_.total_count && _ >= _.total_count) || _.results?.length === 0
        ? null
        : _;
    },
    placeholderData: (_) => _,
    enabled: _,
  };
}
function _(_, _ = !0) {
  return _(_(_, _));
}
function _(_, _ = !0) {
  return {
    queryKey: [`market_search_descriptions`, _],
    initialPageParam: 0,
    queryFn: async (_) => {
      let _ = {
          ..._,
          start: _.pageParam,
        },
        _ = await _(`/market/actions`, `SearchDescriptions`, _);
      if (_ === null) throw Error(`Failed to load next page`);
      return _;
    },
    getNextPageParam: (_, _, _) => {
      if (!_ || !_.more) return null;
      let _ = _ + (_.listings || []).length;
      return (_.total_count && _ >= _.total_count) || _.listings?.length === 0
        ? null
        : _;
    },
    placeholderData: (_) => _,
    enabled: _,
  };
}
function _(_, _) {
  let _ = new URLSearchParams(_(_, _));
  return (
    _.appid && _.set(`appid`, _.appid.toString()),
    _.strQuery && _.set(`q`, _.strQuery),
    _.strQuery && _.bSearchDescriptions && _.set(`descriptions`, `1`),
    typeof _.count == `number` &&
      _.count >= 0 &&
      _.set(`count`, _.count.toString()),
    typeof _.sort == `number` && _.set(`sort`, _.sort.toString()),
    typeof _.direction == `number` && _.set(`dir`, _.direction.toString()),
    typeof _.start == `number` && _.set(`start`, _.start.toString()),
    _.searchDescriptionSort &&
      (_.set(`descsort`, _.searchDescriptionSort.field.toString()),
      typeof _.searchDescriptionSort.direction == `number` &&
        _.set(`descdir`, _.searchDescriptionSort.direction.toString()),
      typeof _.searchDescriptionSort.assetpropertyid == `number` &&
        _.set(
          `descpropid`,
          _.searchDescriptionSort.assetpropertyid.toString(),
        )),
    _
  );
}
function _(_, _) {
  let _ = new URLSearchParams();
  if (_.price) {
    let _ = _.price.unMin ?? 0;
    _ > 0 &&
      (_.set(`price_min`, _.toString()),
      _.set(`price_currency`, _.price.eCurrency.toString()));
    let _ = _.price.unMax ?? 0;
    _ > _ &&
      _ < _ &&
      (_.set(`price_max`, _.toString()),
      _.set(`price_currency`, _.price.eCurrency.toString()));
  }
  if (_.accessoryFilters)
    for (let [_, _] of Object.entries(_.accessoryFilters))
      for (let _ of _) _.append(_, _);
  if (_.filters)
    for (let [_, _] of Object.entries(_.filters))
      for (let _ of _) _.append(`category_${_}`, _);
  return _;
}
function _(_) {
  return _(_(_));
}
function _(_) {
  return {
    queryKey: [`market_item_search`, _],
    initialPageParam: 0,
    queryFn: async (_) => {
      let _ = {
          ..._,
          start: _.pageParam,
        },
        _ = await _(`/market/actions`, `QueryListingsForItem`, _);
      if (_ === null) throw Error(`Failed to load next page`);
      return _;
    },
    getNextPageParam: (_, _, _) => {
      if (!_ || !_.more) return null;
      let _ = _ + (_.listings || []).length;
      return (_.total_count && _ >= _.total_count) || _.listings?.length === 0
        ? null
        : _;
    },
    placeholderData: (_) => _,
  };
}
function _(_, _) {
  let _ = new URLSearchParams(_(_, _));
  if (
    (_.appid && _.set(`appid`, _.appid.toString()),
    _.strQuery && _.set(`q`, _.strQuery),
    _.sort &&
      (_.set(`sort`, _.sort.field.toString()),
      _.sort.direction !== void 0 && _.set(`dir`, _.sort.direction.toString()),
      _.sort.field === 1 &&
        (_(
          typeof _.sort.assetpropertyid == `number`,
          `Property sort must include property id`,
        ),
        _.set(`propertyid`, _.sort.assetpropertyid.toString()))),
    _.propertyFilters)
  )
    for (let _ of Object.values(_.propertyFilters || {}))
      _.append(`assetproperty`, _.fromObject(_).serializeBase64String());
  return _;
}
function _(_, _, _ = !0) {
  return _(_(_, _, _));
}
function _(_, _, _ = !0) {
  return {
    queryKey: [`market`, `orderbook`, _, _],
    queryFn: async () => {
      let _ = await _(`/market/orderbook`, `Load`, _, _);
      if (!_.success || !_.data) throw Error(`Bad book response`);
      return _.data;
    },
    refetchInterval: _ ? 5e3 : void 0,
    enabled: !!_,
  };
}
function _(_, _, _ = {}) {
  return _(_(_, _, void 0, _));
}
function _(_, _, _, _ = {}) {
  return {
    queryKey: [`market`, `description`, _, _],
    queryFn: () => _(`/market/actions`, `QueryDescription`, _, _, _),
    enabled: !!_,
    ..._,
  };
}
function _(_, _, _ = {}) {
  return _(_(_, _, _));
}
function _(_, _, _ = {}) {
  return {
    queryKey: [`market`, `description`, _, `classid`, _],
    queryFn: () => _(`/market/actions`, `QueryDescriptionByClassID`, _, _),
    enabled: !!_,
    ..._,
  };
}
function _(_, _, _ = {}) {
  return _(_(_, _, _));
}
function _(_, _, _ = {}) {
  return {
    queryKey: [`market`, `pricehistory`, _, _],
    queryFn: () => _(`/market/actions`, `QueryPriceHistory`, _, _),
    ..._,
  };
}
function _() {
  return {
    queryKey: [`market`, `recentsales`],
    queryFn: () => _(`/market/actions`, `QueryRecentSales`),
    staleTime: 1 / 0,
  };
}
function _() {
  return _(_());
}
var _ = (0, _.createContext)({});
function _(_) {
  let { orders: _, children: _ } = _,
    _ = (0, _.useMemo)(
      () => Object.fromEntries((_ || []).map((_) => [_.listingid, _])),
      [_],
    );
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _(_) {
  return (0, _.useContext)(_)[_];
}
function _(_, _) {
  return {
    listing: _.listing,
    description: _,
    asset: _.assetProperties,
  };
}
function _(_, _) {
  let _ = _(_, _, !1),
    _ = _.data ? _(_.data) : null;
  return _?.amtMinSellOrder == null
    ? void 0
    : {
        nPrice: _.amtMinSellOrder,
        eCurrency: _.eCurrency,
      };
}
function _() {
  let _ = _(),
    _ = _();
  return (0, _.useCallback)(() => {
    _(),
      _.invalidateQueries({
        queryKey: [`market_item_search`],
      });
  }, [_, _]);
}
function _() {
  return _({
    mutationFn: async (_) =>
      _(
        `/market/actions`,
        `DeleteEnhancedAppearance`,
        _.appid,
        _.listingid,
        _.full_delete,
      ),
    onSuccess: (_, _) => {
      let _ = _.full_delete ? `deletion` : `regeneration`;
      _ == 1
        ? (alert(`Enhanced appearance ${_} succeeded. Page will refresh.`),
          location.reload())
        : alert(`Enhanced appearance ${_} failed with eresult ${_}.`);
    },
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    elevation: `3`,
    background: `dull-4`,
    height: `min( 95vh, 720px )`,
    width: `min( 95vw, 1200px )`,
    justify: `center`,
    align: `center`,
    children: (0, _.jsx)(_, {
      size: `5`,
    }),
  });
}
function _(_) {
  let [_, _] = _(),
    [_, _] = (0, _.useState)(-1),
    _ = _(),
    _ = !_().bEligible,
    _ = !_(`sm`),
    _ = _(),
    {
      onClose: _,
      listing: _,
      expectEnhancedAppearance: _,
      pinnedImageIndex: _,
      onPinnedImageIndexChange: _,
      activeBucketDescription: _,
    } = _;
  if (!_) return (0, _.jsx)(_, {});
  let { description: _, asset: _, listingid: _, enhanced_appearances: _ } = _,
    { asset_properties: _ = [], appid: _ } = _ || {},
    { bRestricted: _, ..._ } = _(_),
    _ = _(_),
    _ = _ || _,
    _ = [],
    _ = _.length > 0,
    _ = _(_ || _);
  return (
    _
      ? _.push(
          ..._.map(({ url: _ }, _) => ({
            strForegroundURL: _,
            strBackgroundURL:
              _ !== void 0 && _ !== void 0 && _ !== void 0 && _(_, _)
                ? _(_, _, _)
                : void 0,
          })),
        )
      : _.push({
          strForegroundURL: _(_),
        }),
    (0, _.jsx)(_.Root, {
      description: _,
      listingID: _,
      asset: _,
      children: (0, _.jsxs)(_, {
        RenderErrorComponent: () =>
          (0, _.jsx)(_, {
            onClose: _,
          }),
        children: [
          (0, _.jsxs)(_, {
            direction: _ ? `column` : `row`,
            elevation: `3`,
            background: `dull-6`,
            height: `min( 95vh, 684px )`,
            width: `min( 80vw, 1600px )`,
            position: `relative`,
            overflow: _ ? `auto` : void 0,
            children: [
              _ &&
                (0, _.jsx)(_, {
                  className: (0, _.default)(
                    `p1A9ehO7yF0-`,
                    _ && `FJrCyKcaO4E-`,
                  ),
                  onClick: _,
                  children: (0, _.jsx)(_, {}),
                }),
              (0, _.jsx)(_, {
                images: _,
                expectEnhancedAppearance: _,
                enhancedAppearance: _,
                onImageSelected: _,
                pinnedImageIndex: _,
                onPinnedImageIndexChange: _,
              }),
              (0, _.jsxs)(_, {
                direction: `column`,
                gap: _ ? `2` : `3`,
                flexGrow: `1`,
                padding: _ ? `4` : `5`,
                overflow: _ ? void 0 : `auto`,
                children: [
                  (0, _.jsx)(_.Name, {
                    size: {
                      initial: `4`,
                      _: `5`,
                      _: `7`,
                    },
                  }),
                  _ ? (0, _.jsx)(_.GameName, {}) : (0, _.jsx)(_.GameInfo, {}),
                  (0, _.jsx)(_, {
                    appid: _,
                    properties: _,
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      listing: _,
                      width: `fit-content`,
                    }),
                  (0, _.jsx)(_, {
                    size: `4`,
                    color: `dull-7`,
                  }),
                  (0, _.jsxs)(_, {
                    justify: `between`,
                    align: `center`,
                    wrap: `wrap`,
                    children: [
                      (0, _.jsx)(_.MarketActions, {}),
                      (0, _.jsx)(_, {
                        align: `center`,
                        gap: `2`,
                        children: (0, _.jsx)(_, {
                          disabled: _,
                          listing: _,
                          onBuy: () => _(!0),
                          onListingGone: _,
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    size: `4`,
                    color: `dull-7`,
                  }),
                  (0, _.jsx)(_.AssetAccessories, {}),
                  _ &&
                    !_ &&
                    (0, _.jsx)(_, {
                      ..._,
                    }),
                  _ &&
                    (0, _.jsx)(_, {
                      children: _.Localize(`#Item_CountryBuyRestricted`),
                    }),
                  (0, _.jsx)(_, {
                    size: `4`,
                    color: `dull-7`,
                  }),
                  (0, _.jsx)(_.Descriptions, {}),
                  (0, _.jsx)(_.Tags, {}),
                  _ &&
                    (0, _.jsx)(_, {
                      appid: _,
                      listingid: _,
                      expectEnhancedAppearance: _,
                    }),
                ],
              }),
              _ &&
                (0, _.jsx)(_, {
                  listing: _,
                  onClose: () => _(!1),
                }),
            ],
          }),
          (0, _.jsx)(_, {
            images: _,
            activeIndex: _,
            onIndexChange: _,
          }),
        ],
      }),
    })
  );
}
function _(_) {
  let {
      images: _,
      enhancedAppearance: _,
      expectEnhancedAppearance: _,
      onImageSelected: _,
      pinnedImageIndex: _,
      onPinnedImageIndexChange: _,
    } = _,
    [_, _] = (0, _.useState)(null),
    _ = _ ?? _,
    _ = _ < _.length ? _ : _.length - 1;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `3`,
    flexGrow: `1`,
    flexBasis: {
      initial: void 0,
      _: `60%`,
    },
    flexShrink: `0`,
    background: `dull-3`,
    align: `center`,
    justify: `center`,
    children: [
      _.length > 0 &&
        (0, _.jsx)(_, {
          justify: `center`,
          align: `center`,
          flexGrow: `1`,
          position: `relative`,
          className: `Ek8-hvrl2D0-`,
          children: (0, _.jsx)(_, {
            src: _[_],
            index: _,
            onClick: () => _(_),
            children: (0, _.jsx)(_, {
              className: `RlFS0YD8Kcs-`,
              children: (0, _.jsx)(_, {}),
            }),
          }),
        }),
      _.length > 1 &&
        (0, _.jsx)(_, {
          justifyContent: `center`,
          alignItems: `center`,
          minHeight: `0`,
          autoColumns: `1fr`,
          autoFlow: `column`,
          paddingX: `3`,
          paddingBottom: `3`,
          children: _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                outline: _ === _ ? `accent-7` : void 0,
                overflow: `hidden`,
                width: `100%`,
                height: {
                  initial: `48px`,
                  _: `120px`,
                },
                maxWidth: `200px`,
                paddingX: `1`,
                cursor: `pointer`,
                onClick: () => _(_),
                onMouseEnter: () => _(_),
                onMouseLeave: () => _(null),
                className: `r-vQtK7KwSo-`,
                children: (0, _.jsx)(_, {
                  src: _,
                  index: _,
                }),
              },
              _,
            ),
          ),
        }),
      !_ &&
        _ &&
        (0, _.jsxs)(_, {
          align: `center`,
          gap: `3`,
          paddingY: `3`,
          paddingX: {
            initial: `3`,
            _: `5`,
          },
          margin: {
            initial: `3`,
            _: `5`,
          },
          radius: `lg`,
          background: `dull-2`,
          children: [
            (0, _.jsx)(_, {
              size: {
                initial: `2`,
                _: `4`,
              },
              align: `center`,
              weight: `medium`,
              contrast: `description`,
              children: _.Localize(`#Listing_EnhancedAppearance_Missing`),
            }),
            (0, _.jsx)(_, {
              width: `32px`,
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { appid: _, listingid: _, expectEnhancedAppearance: _ } = _,
    _ = _();
  return !_ || !_ || !_
    ? null
    : (0, _.jsx)(_, {
        accentColor: `valveonly`,
        children: (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              color: `accent-10`,
              children: `Valve only enhanced image options:`,
            }),
            (0, _.jsxs)(_, {
              gap: `2`,
              children: [
                (0, _.jsx)(
                  _,
                  {
                    onClick: () => {
                      _.mutate({
                        appid: _,
                        listingid: _,
                        full_delete: !1,
                      });
                    },
                    children: `Regenerate`,
                  },
                  `regenerate`,
                ),
                (0, _.jsx)(
                  _,
                  {
                    onClick: () => {
                      _.mutate({
                        appid: _,
                        listingid: _,
                        full_delete: !0,
                      });
                    },
                    children: `Delete`,
                  },
                  `delete`,
                ),
              ],
            }),
          ],
        }),
      });
}
function _(_) {
  let {
    onBuy: _,
    listing: {
      asset: _,
      strSubtotal: _,
      bMine: _,
      listingid: _,
      description: _,
    },
    disabled: _,
    onListingGone: _,
  } = _;
  if (_?.amount === 0)
    return (0, _.jsx)(_, {
      weight: `medium`,
      size: `3`,
      title: _.Localize(`#Listing_NotAvailable`),
      children: _.Localize(`#Listing_NotAvailable_Short`),
    });
  let _ = (0, _.jsx)(_, {
    size: `3`,
    contrast: `title`,
    children: _,
  });
  if (!_.logged_in) {
    let _ = new URL(location.href);
    _.searchParams.set(`buy`, `1`);
    let _ = `${_.COMMUNITY_BASE_URL}login/home/?goto=${encodeURIComponent(_.toString())}`;
    return (0, _.jsxs)(_.Fragment, {
      children: [
        _,
        (0, _.jsx)(_, {
          disabled: _,
          color: `green`,
          href: _,
          children: _.Localize(`#Button_Buy`),
        }),
      ],
    });
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _,
      !_ &&
        (0, _.jsx)(_, {
          color: `green`,
          disabled: _,
          onClick: _,
          children: _.Localize(`#Button_Buy`),
        }),
      _ &&
        (0, _.jsx)(_, {
          listingID: _,
          description: _,
          onListingGone: _,
        }),
    ],
  });
}
function _(_) {
  let { listingID: _, description: _, onListingGone: _ } = _,
    _ = _(_),
    _ = _(),
    [_, _] = (0, _.useState)(!1),
    _ = _(_.appid, _.market_hash_name);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        color: `accent-9`,
        children: _.Localize(`#Listing_MyListing`),
      }),
      !1,
      _ &&
        _ &&
        (0, _.jsx)(_, {
          activeListing: _(_, _),
          bPendingConfirmation: !1,
          setCanceled: (_) => {
            _ && (_(), _?.());
          },
          onRepriced: _,
          marketLow: _,
          onClose: () => _(!1),
        }),
    ],
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(0);
  return `listing` in _
    ? (0, _.jsx)(_, {
        ..._,
        pinnedImageIndex: _,
        onPinnedImageIndexChange: _,
      })
    : (0, _.jsx)(_, {
        ..._,
        pinnedImageIndex: _,
        onPinnedImageIndexChange: _,
      });
}
function _(_) {
  let {
      query: _,
      pageIndex: _,
      itemIndex: _,
      onIndexChange: _,
      onClose: _,
      ..._
    } = _,
    _ = (0, _.useMemo)(
      () => (_.data ? _.data.pages.flatMap((_) => (_ ? _.listings : [])) : []),
      [_.data],
    ),
    _ = (0, _.useMemo)(() => {
      if (!_.data) return 0;
      let _ = 0;
      for (let _ = 0; _ < _; _++) _ += _.data.pages[_]?.listings.length ?? 0;
      return (_ += _), _;
    }, [_.data, _, _]),
    { data: _, fetchNextPage: _, isFetchingNextPage: _ } = _,
    _ = (0, _.useCallback)(
      (_) => {
        if (_)
          for (let _ = 0; _ < _.pages.length; _++) {
            let _ = _.pages[_];
            if (_) {
              if (_ < _.listings.length) {
                if (
                  (_({
                    pageIndex: _,
                    itemIndex: _,
                  }),
                  _ === _.pages.length - 1)
                ) {
                  let _ = Math.min(_.listings.length, 3);
                  _.more && !_ && _.listings.length - _ - 1 < _ && _();
                }
                return;
              }
              _ -= _.listings.length;
            }
          }
      },
      [_, _, _, _],
    );
  return (0, _.jsx)(_, {
    onClose: _,
    children: (0, _.jsx)(_, {
      listings: _,
      index: _,
      onIndexChange: _,
      onClose: _,
      ..._,
    }),
  });
}
function _(_) {
  let { onClose: _ } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { onClose: _, children: _, ..._ } = _;
  return (0, _.jsx)(_.Root, {
    onClose: _,
    ..._,
    children: (0, _.jsx)(_, {
      RenderErrorComponent: () =>
        (0, _.jsx)(_, {
          onClose: _,
        }),
      children: _,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `3`,
    align: `center`,
    justify: `center`,
    padding: `5`,
    radius: `sm`,
    background: `dull-6`,
    minWidth: `30ch`,
    children: [
      (0, _.jsx)(_, {
        contrast: `title`,
        size: `4`,
        children: _.Localize(`#Listing_SomethingWentWrong`),
      }),
      _.onClose &&
        (0, _.jsx)(_, {
          color: `dull`,
          onClick: _.onClose,
          children: _.Localize(`#Button_Close`),
        }),
    ],
  });
}
function _(_, _, _) {
  return `${_.MEDIA_CDN_COMMUNITY_URL}assets/market/${_}/v1/${_}/${_}.avif`;
}
function _(_, _) {
  return !!(_(_) && (_ == 0 || _ >= 3));
}
function _(_) {
  let { src: _, onClick: _, children: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    onClick: _,
    maxWidth: `100%`,
    children: [
      _.strBackgroundURL &&
        (0, _.jsx)(_, {
          objectFit: `contain`,
          src: _.strBackgroundURL,
          alt: ``,
          maxWidth: `100%`,
        }),
      (0, _.jsx)(_, {
        objectFit: `contain`,
        src: _.strForegroundURL,
        alt: ``,
        maxWidth: `100%`,
      }),
      _,
    ],
  });
}
function _(_) {
  let [_, _] = _(`lightboxBackground`);
  function _(_) {
    _(_);
  }
  return (0, _.jsx)(_, {
    onChange: _,
    checked: _ !== !1,
    children: (0, _.jsx)(_, {
      size: `3`,
      children: _.Localize(`#Listing_EnhancedAppearance_ShowBackground`),
    }),
  });
}
function _(_) {
  let { src: _ } = _,
    [_] = _(`lightboxBackground`);
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      _ !== !1 &&
        _.strBackgroundURL &&
        (0, _.jsx)(_, {
          objectFit: `contain`,
          src: _.strBackgroundURL,
          alt: ``,
          maxWidth: `100%`,
        }),
      (0, _.jsx)(_, {
        objectFit: `contain`,
        src: _.strForegroundURL,
        alt: ``,
        maxWidth: `100%`,
      }),
      (0, _.jsx)(_, {
        style: {
          userSelect: `none`,
        },
        onClick: (_) => _.stopPropagation(),
        padding: `2`,
        justify: {
          initial: `center`,
          _: `start`,
        },
        width: `100%`,
        children: _.strBackgroundURL && (0, _.jsx)(_, {}),
      }),
    ],
  });
}
function _(_) {
  let { images: _, activeIndex: _, onIndexChange: _ } = _;
  if (_ < 0) return null;
  let _ = (_ + 1) % _.length,
    _ = (_ + _.length - 1) % _.length;
  return (0, _.jsx)(_, {
    backgroundClassName: _,
    imageTitle: ``,
    prevSrc: (0, _.jsx)(_, {
      src: _[_],
    }),
    mainSrc: (0, _.jsx)(_, {
      src: _[_],
    }),
    nextSrc: (0, _.jsx)(_, {
      src: _[_],
    }),
    onMoveNextRequest: (_) => {
      _.stopPropagation(), _.preventDefault(), _(_);
    },
    onMovePrevRequest: (_) => {
      _.stopPropagation(), _.preventDefault(), _(_);
    },
    onCloseRequest: (_) => {
      _.stopPropagation(), _.preventDefault(), _(-1);
    },
    toolbarButtons: [],
  });
}
function _(_) {
  let { query: _, onClose: _ } = _,
    _ = _({
      mutationFn: (_) =>
        _(`/market/actions`, `AddSearchQueryToMarketWatchlist`, _, _),
      onSuccess: _,
    });
  return (0, _.jsx)(_, {
    type: `search`,
    onAdd: _.mutate,
    adding: _.isPending,
    onClose: _,
    children: (0, _.jsx)(_.Search, {
      query: _,
    }),
  });
}
function _(_) {
  let { query: _, onClose: _, description: _ } = _,
    _ = _({
      mutationFn: (_) =>
        _(`/market/actions`, `AddListingsQueryToMarketWatchlist`, _, _),
      onSuccess: _,
    });
  return (0, _.jsx)(_, {
    type: `bucket`,
    onAdd: _.mutate,
    adding: _.isPending,
    onClose: _,
    children: (0, _.jsxs)(_, {
      gap: `2`,
      padding: `3`,
      radius: `sm`,
      background: `dull-8`,
      align: `center`,
      children: [
        (0, _.jsx)(_, {
          src: _(_),
          alt: _.name,
          objectFit: `contain`,
          maxWidth: `120px`,
        }),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              size: `4`,
              contrast: `title`,
              truncate: !0,
              children: _.name,
            }),
            (0, _.jsx)(_.Bucket, {
              query: _,
              marginTop: `2`,
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { listing: _, onClose: _ } = _,
    _ = _({
      mutationFn: (_) =>
        _(`/market/actions`, `AddListingToMarketWatchlist`, _.listingid, _),
      onSuccess: _,
    });
  return (0, _.jsx)(_, {
    type: `listing`,
    onAdd: _.mutate,
    adding: _.isPending,
    onClose: _,
  });
}
function _(_) {
  let { onClose: _, onAdd: _, adding: _, children: _, type: _ } = _,
    [_, _] = (0, _.useState)(``);
  return (0, _.jsx)(_, {
    onClose: _,
    children: (0, _.jsx)(`form`, {
      onSubmit: (_) => {
        _.preventDefault(), _.stopPropagation(), _(_);
      },
      children: (0, _.jsxs)(_, {
        direction: `column`,
        gap: `3`,
        padding: `5`,
        children: [
          (0, _.jsx)(_, {
            size: `5`,
            children: _.Localize(`#Watchlist_Dialog_Title`),
          }),
          (0, _.jsx)(_, {
            children: _(_),
          }),
          _,
          (0, _.jsx)(_, {
            value: _,
            onTextChange: _,
            placeholder: _.Localize(`#Watchlist_NameLabel`),
          }),
          (0, _.jsxs)(_, {
            gap: `2`,
            alignSelf: `end`,
            children: [
              (0, _.jsx)(_, {
                type: `submit`,
                loading: _,
                children: _.Localize(`#Watchlist_AddButton`),
              }),
              (0, _.jsx)(_, {
                color: `dull`,
                onClick: _,
                children: _.Localize(`#Button_Cancel`),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function _(_) {
  switch (_) {
    case `bucket`:
      return _.Localize(`#Watchlist_Dialog_BucketDescription`);
    case `listing`:
      return _.Localize(`#Watchlist_Dialog_ListingDescription`);
    case `search`:
      return _.Localize(`#Watchlist_Dialog_SearchDescription`);
    default:
      return _.Localize(`#Watchlist_Dialog_Description`);
  }
}
var _ = _(_());
function _(_) {
  _();
}
var _ = _,
  _ = (_) => (_ = _),
  _ = () => _,
  _ = Symbol.for(`react-redux-context`),
  _ = typeof globalThis < `u` ? globalThis : {};
function _() {
  if (!_.createContext) return {};
  let _ = _[_] ?? (_[_] = new Map()),
    _ = _.get(_.createContext);
  return _ || ((_ = _.createContext(null)), _.set(_.createContext, _)), _;
}
var _ = _(),
  _ = () => {
    throw Error(`uSES not initialized!`);
  },
  _ = [`initMapStateToProps`, `initMapDispatchToProps`, `initMergeProps`];
function _(
  _,
  _,
  _,
  _,
  { areStatesEqual: _, areOwnPropsEqual: _, areStatePropsEqual: _ },
) {
  let _ = !1,
    _,
    _,
    _,
    _,
    _;
  function _(_, _) {
    return (
      (_ = _),
      (_ = _),
      (_ = _(_, _)),
      (_ = _(_, _)),
      (_ = _(_, _, _)),
      (_ = !0),
      _
    );
  }
  function _() {
    return (
      (_ = _(_, _)), _.dependsOnOwnProps && (_ = _(_, _)), (_ = _(_, _, _)), _
    );
  }
  function _() {
    return (
      _.dependsOnOwnProps && (_ = _(_, _)),
      _.dependsOnOwnProps && (_ = _(_, _)),
      (_ = _(_, _, _)),
      _
    );
  }
  function _() {
    let _ = _(_, _),
      _ = !_(_, _);
    return (_ = _), _ && (_ = _(_, _, _)), _;
  }
  function _(_, _) {
    let _ = !_(_, _),
      _ = !_(_, _, _, _);
    return (_ = _), (_ = _), _ && _ ? _() : _ ? _() : _ ? _() : _;
  }
  return function (_, _) {
    return _ ? _(_, _) : _(_, _);
  };
}
function _(_, _) {
  let {
      initMapStateToProps: _,
      initMapDispatchToProps: _,
      initMergeProps: _,
    } = _,
    _ = _(_, _);
  return _(_(_, _), _(_, _), _(_, _), _, _);
}
function _(_, _) {
  let _ = {};
  for (let _ in _) {
    let _ = _[_];
    typeof _ == `function` && (_[_] = (..._) => _(_(..._)));
  }
  return _;
}
function _(_) {
  return function (_) {
    let _ = _(_);
    function _() {
      return _;
    }
    return (_.dependsOnOwnProps = !1), _;
  };
}
function _(_) {
  return _.dependsOnOwnProps ? !!_.dependsOnOwnProps : _.length !== 1;
}
function _(_, _) {
  return function (_, { displayName: _ }) {
    let _ = function (_, _) {
      return _.dependsOnOwnProps ? _.mapToProps(_, _) : _.mapToProps(_, void 0);
    };
    return (
      (_.dependsOnOwnProps = !0),
      (_.mapToProps = function (_, _) {
        (_.mapToProps = _), (_.dependsOnOwnProps = _(_));
        let _ = _(_, _);
        return (
          typeof _ == `function` &&
            ((_.mapToProps = _), (_.dependsOnOwnProps = _(_)), (_ = _(_, _))),
          _
        );
      }),
      _
    );
  };
}
function _(_, _) {
  return (_, _) => {
    throw Error(
      `Invalid value of type ${typeof _} for ${_} argument when connecting component ${_.wrappedComponentName}.`,
    );
  };
}
function _(_) {
  return _ && typeof _ == `object`
    ? _((_) => _(_, _))
    : _
      ? typeof _ == `function`
        ? _(_, `mapDispatchToProps`)
        : _(_, `mapDispatchToProps`)
      : _((_) => ({
          dispatch: _,
        }));
}
function _(_) {
  return _
    ? typeof _ == `function`
      ? _(_, `mapStateToProps`)
      : _(_, `mapStateToProps`)
    : _(() => ({}));
}
function _(_, _, _) {
  return _({}, _, _, _);
}
function _(_) {
  return function (_, { displayName: _, areMergedPropsEqual: _ }) {
    let _ = !1,
      _;
    return function (_, _, _) {
      let _ = _(_, _, _);
      return _ ? _(_, _) || (_ = _) : ((_ = !0), (_ = _)), _;
    };
  };
}
function _(_) {
  return _ ? (typeof _ == `function` ? _(_) : _(_, `mergeProps`)) : () => _;
}
function _() {
  let _ = _(),
    _ = null,
    _ = null;
  return {
    clear() {
      (_ = null), (_ = null);
    },
    notify() {
      _(() => {
        let _ = _;
        for (; _; ) _.callback(), (_ = _.next);
      });
    },
    get() {
      let _ = [],
        _ = _;
      for (; _; ) _.push(_), (_ = _.next);
      return _;
    },
    subscribe(_) {
      let _ = !0,
        _ = (_ = {
          callback: _,
          next: null,
          prev: _,
        });
      return (
        _.prev ? (_.prev.next = _) : (_ = _),
        function () {
          _ &&
            _ !== null &&
            ((_ = !1),
            _.next ? (_.next.prev = _.prev) : (_ = _.prev),
            _.prev ? (_.prev.next = _.next) : (_ = _.next));
        }
      );
    },
  };
}
var _ = {
  notify() {},
  get: () => [],
};
function _(_, _) {
  let _,
    _ = _,
    _ = 0,
    _ = !1;
  function _(_) {
    _();
    let _ = _.subscribe(_),
      _ = !1;
    return () => {
      _ || ((_ = !0), _(), _());
    };
  }
  function _() {
    _.notify();
  }
  function _() {
    _.onStateChange && _.onStateChange();
  }
  function _() {
    return _;
  }
  function _() {
    _++, _ || ((_ = _ ? _.addNestedSub(_) : _.subscribe(_)), (_ = _()));
  }
  function _() {
    _--, _ && _ === 0 && (_(), (_ = void 0), _.clear(), (_ = _));
  }
  function _() {
    _ || ((_ = !0), _());
  }
  function _() {
    _ && ((_ = !1), _());
  }
  let _ = {
    addNestedSub: _,
    notifyNestedSubs: _,
    handleChangeWrapper: _,
    isSubscribed: _,
    trySubscribe: _,
    tryUnsubscribe: _,
    getListeners: () => _,
  };
  return _;
}
var _ =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0
    ? _.useLayoutEffect
    : _.useEffect;
function _(_, _) {
  return _ === _ ? _ !== 0 || _ !== 0 || 1 / _ == 1 / _ : _ !== _ && _ !== _;
}
function _(_, _) {
  if (_(_, _)) return !0;
  if (typeof _ != `object` || !_ || typeof _ != `object` || !_) return !1;
  let _ = Object.keys(_),
    _ = Object.keys(_);
  if (_.length !== _.length) return !1;
  for (let _ = 0; _ < _.length; _++)
    if (!Object.prototype.hasOwnProperty.call(_, _[_]) || !_(_[_[_]], _[_[_]]))
      return !1;
  return !0;
}
var _ = _(_()),
  _ = _(),
  _ = [`reactReduxForwardedRef`],
  _ = _,
  _ = (_) => {
    _ = _;
  },
  _ = [null, null];
function _(_, _, _) {
  _(() => _(..._), _);
}
function _(_, _, _, _, _, _) {
  (_.current = _), (_.current = !1), _.current && ((_.current = null), _());
}
function _(_, _, _, _, _, _, _, _, _, _, _) {
  if (!_) return () => {};
  let _ = !1,
    _ = null,
    _ = () => {
      if (_ || !_.current) return;
      let _ = _.getState(),
        _,
        _;
      try {
        _ = _(_, _.current);
      } catch (_) {
        (_ = _), (_ = _);
      }
      _ || (_ = null),
        _ === _.current
          ? _.current || _()
          : ((_.current = _), (_.current = _), (_.current = !0), _());
    };
  return (
    (_.onStateChange = _),
    _.trySubscribe(),
    _(),
    () => {
      if (((_ = !0), _.tryUnsubscribe(), (_.onStateChange = null), _)) throw _;
    }
  );
}
function _(_, _) {
  return _ === _;
}
function _(
  _,
  _,
  _,
  {
    pure: _,
    areStatesEqual: _ = _,
    areOwnPropsEqual: _ = _,
    areStatePropsEqual: _ = _,
    areMergedPropsEqual: _ = _,
    forwardRef: _ = !1,
    context: _ = _,
  } = {},
) {
  let _ = _,
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = !!_;
  return (_) => {
    let _ = _.displayName || _.name || `Component`,
      _ = `Connect(${_})`,
      _ = {
        shouldHandleStateChanges: _,
        displayName: _,
        wrappedComponentName: _,
        WrappedComponent: _,
        initMapStateToProps: _,
        initMapDispatchToProps: _,
        initMergeProps: _,
        areStatesEqual: _,
        areStatePropsEqual: _,
        areOwnPropsEqual: _,
        areMergedPropsEqual: _,
      };
    function _(_) {
      let [_, _, _] = _.useMemo(() => {
          let { reactReduxForwardedRef: _ } = _,
            _ = _(_, _);
          return [_.context, _, _];
        }, [_]),
        _ = _.useMemo(
          () =>
            _ &&
            _.Consumer &&
            (0, _.isContextConsumer)(_.createElement(_.Consumer, null))
              ? _
              : _,
          [_, _],
        ),
        _ = _.useContext(_),
        _ = !!_.store && !!_.store.getState && !!_.store.dispatch,
        _ = !!_ && !!_.store,
        _ = _ ? _.store : _.store,
        _ = _ ? _.getServerState : _.getState,
        _ = _.useMemo(() => _(_.dispatch, _), [_]),
        [_, _] = _.useMemo(() => {
          if (!_) return _;
          let _ = _(_, _ ? void 0 : _.subscription);
          return [_, _.notifyNestedSubs.bind(_)];
        }, [_, _, _]),
        _ = _.useMemo(
          () =>
            _
              ? _
              : _({}, _, {
                  subscription: _,
                }),
          [_, _, _],
        ),
        _ = _.useRef(),
        _ = _.useRef(_),
        _ = _.useRef(),
        _ = _.useRef(!1);
      _.useRef(!1);
      let _ = _.useRef(!1),
        _ = _.useRef();
      _(
        () => (
          (_.current = !0),
          () => {
            _.current = !1;
          }
        ),
        [],
      );
      let _ = _.useMemo(
          () => () =>
            _.current && _ === _.current ? _.current : _(_.getState(), _),
          [_, _],
        ),
        _ = _.useMemo(
          () => (_) => (_ ? _(_, _, _, _, _, _, _, _, _, _, _) : () => {}),
          [_],
        );
      _(_, [_, _, _, _, _, _]);
      let _;
      try {
        _ = _(_, _, _ ? () => _(_(), _) : _);
      } catch (_) {
        throw (
          (_.current &&
            (_.message += `\nThe error may be correlated with this previous error:\n${_.current.stack}\n\n`),
          _)
        );
      }
      _(() => {
        (_.current = void 0), (_.current = void 0), (_.current = _);
      });
      let _ = _.useMemo(
        () =>
          _.createElement(
            _,
            _({}, _, {
              ref: _,
            }),
          ),
        [_, _, _],
      );
      return _.useMemo(
        () =>
          _
            ? _.createElement(
                _.Provider,
                {
                  value: _,
                },
                _,
              )
            : _,
        [_, _, _],
      );
    }
    let _ = _.memo(_);
    if (((_.WrappedComponent = _), (_.displayName = _.displayName = _), _)) {
      let _ = _.forwardRef(function (_, _) {
        return _.createElement(
          _,
          _({}, _, {
            reactReduxForwardedRef: _,
          }),
        );
      });
      return (
        (_.displayName = _), (_.WrappedComponent = _), (0, _.default)(_, _)
      );
    }
    return (0, _.default)(_, _);
  };
}
function _({
  store: _,
  context: _,
  children: _,
  serverState: _,
  stabilityCheck: _ = `once`,
  noopCheck: _ = `once`,
}) {
  let _ = _.useMemo(
      () => ({
        store: _,
        subscription: _(_),
        getServerState: _ ? () => _ : void 0,
        stabilityCheck: _,
        noopCheck: _,
      }),
      [_, _, _, _],
    ),
    _ = _.useMemo(() => _.getState(), [_]);
  _(() => {
    let { subscription: _ } = _;
    return (
      (_.onStateChange = _.notifyNestedSubs),
      _.trySubscribe(),
      _ !== _.getState() && _.notifyNestedSubs(),
      () => {
        _.tryUnsubscribe(), (_.onStateChange = void 0);
      }
    );
  }, [_, _]);
  let _ = _ || _;
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
var _ = _();
_().useSyncExternalStoreWithSelector,
  _(_.useSyncExternalStore),
  _(_.unstable_batchedUpdates);
var _ =
  Number.isNaN ||
  function (_) {
    return typeof _ == `number` && _ !== _;
  };
function _(_, _) {
  return !!(_ === _ || (_(_) && _(_)));
}
function _(_, _) {
  if (_.length !== _.length) return !1;
  for (var _ = 0; _ < _.length; _++) if (!_(_[_], _[_])) return !1;
  return !0;
}
function _(_, _) {
  _ === void 0 && (_ = _);
  var _ = null;
  function _() {
    var _ = [...arguments];
    if (_ && _.lastThis === this && _(_, _.lastArgs)) return _.lastResult;
    var _ = _.apply(this, _);
    return (
      (_ = {
        lastResult: _,
        lastArgs: _,
        lastThis: this,
      }),
      _
    );
  }
  return (
    (_.clear = function () {
      _ = null;
    }),
    _
  );
}
function _(_, _) {}
_.bind(null, `warn`), _.bind(null, `error`);
function _() {}
function _(_, _) {
  return {
    ..._,
    ..._,
  };
}
function _(_, _, _) {
  let _ = _.map((_) => {
    let _ = _(_, _.options);
    return (
      _.addEventListener(_.eventName, _._, _),
      function () {
        _.removeEventListener(_.eventName, _._, _);
      }
    );
  });
  return function () {
    _.forEach((_) => {
      _();
    });
  };
}
var _ = `Invariant failed`,
  _ = class extends Error {};
_.prototype.toString = function () {
  return this.message;
};
function _(_, _) {
  if (!_) throw new _(_);
}
var _ = class extends _.Component {
    constructor(..._) {
      super(..._),
        (this.callbacks = null),
        (this.unbind = _),
        (this.onWindowError = (_) => {
          let _ = this.getCallbacks();
          _.isDragging() && _.tryAbort(),
            _.error instanceof _ && _.preventDefault();
        }),
        (this.getCallbacks = () => {
          if (!this.callbacks)
            throw Error(`Unable to find AppCallbacks in <ErrorBoundary/>`);
          return this.callbacks;
        }),
        (this.setCallbacks = (_) => {
          this.callbacks = _;
        });
    }
    componentDidMount() {
      this.unbind = _(window, [
        {
          eventName: `error`,
          _: this.onWindowError,
        },
      ]);
    }
    componentDidCatch(_) {
      if (_ instanceof _) {
        this.setState({});
        return;
      }
      throw _;
    }
    componentWillUnmount() {
      this.unbind();
    }
    render() {
      return this.props.children(this.setCallbacks);
    }
  },
  _ = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  _ = (_) => _ + 1,
  _ = (_) => `
  You have lifted an item in position ${_(_.source.index)}
`,
  _ = (_, _) => {
    let _ = _.droppableId === _.droppableId,
      _ = _(_.index),
      _ = _(_.index);
    return _
      ? `
      You have moved the item from position ${_}
      to position ${_}
    `
      : `
    You have moved the item from position ${_}
    in list ${_.droppableId}
    to list ${_.droppableId}
    in position ${_}
  `;
  },
  _ = (_, _, _) =>
    _.droppableId === _.droppableId
      ? `
      The item ${_}
      has been combined with ${_.draggableId}`
      : `
      The item ${_}
      in list ${_.droppableId}
      has been combined with ${_.draggableId}
      in list ${_.droppableId}
    `,
  _ = (_) => {
    let _ = _.destination;
    if (_) return _(_.source, _);
    let _ = _.combine;
    return _
      ? _(_.draggableId, _.source, _)
      : `You are over an area that cannot be dropped on`;
  },
  _ = (_) => `
  The item has returned to its starting position
  of ${_(_.index)}
`,
  _ = {
    dragHandleUsageInstructions: _,
    onDragStart: _,
    onDragUpdate: _,
    onDragEnd: (_) => {
      if (_.reason === `CANCEL`)
        return `
      Movement cancelled.
      ${_(_.source)}
    `;
      let _ = _.destination,
        _ = _.combine;
      return _
        ? `
      You have dropped the item.
      ${_(_.source, _)}
    `
        : _
          ? `
      You have dropped the item.
      ${_(_.draggableId, _.source, _)}
    `
          : `
    The item has been dropped while not over a drop area.
    ${_(_.source)}
  `;
    },
  },
  _ = {
    _: 0,
    _: 0,
  },
  _ = (_, _) => ({
    _: _._ + _._,
    _: _._ + _._,
  }),
  _ = (_, _) => ({
    _: _._ - _._,
    _: _._ - _._,
  }),
  _ = (_, _) => _._ === _._ && _._ === _._,
  _ = (_) => ({
    _: _._ === 0 ? 0 : -_._,
    _: _._ === 0 ? 0 : -_._,
  }),
  _ = (_, _, _ = 0) =>
    _ === `x`
      ? {
          _: _,
          _: _,
        }
      : {
          _: _,
          _: _,
        },
  _ = (_, _) => Math.sqrt((_._ - _._) ** 2 + (_._ - _._) ** 2),
  _ = (_, _) => Math.min(..._.map((_) => _(_, _))),
  _ = (_) => (_) => ({
    _: _(_._),
    _: _(_._),
  }),
  _ = (_, _) => {
    let _ = _({
      top: Math.max(_.top, _.top),
      right: Math.min(_.right, _.right),
      bottom: Math.min(_.bottom, _.bottom),
      left: Math.max(_.left, _.left),
    });
    return _.width <= 0 || _.height <= 0 ? null : _;
  },
  _ = (_, _) => ({
    top: _.top + _._,
    left: _.left + _._,
    bottom: _.bottom + _._,
    right: _.right + _._,
  }),
  _ = (_) => [
    {
      _: _.left,
      _: _.top,
    },
    {
      _: _.right,
      _: _.top,
    },
    {
      _: _.left,
      _: _.bottom,
    },
    {
      _: _.right,
      _: _.bottom,
    },
  ],
  _ = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  _ = (_, _) => (_ ? _(_, _.scroll.diff.displacement) : _),
  _ = (_, _, _) =>
    _ && _.increasedBy
      ? {
          ..._,
          [_.end]: _[_.end] + _.increasedBy[_.line],
        }
      : _,
  _ = (_, _) => (_ && _.shouldClipSubject ? _(_.pageMarginBox, _) : _(_)),
  _ = ({ page: _, withPlaceholder: _, axis: _, frame: _ }) => ({
    page: _,
    withPlaceholder: _,
    active: _(_(_(_.marginBox, _), _, _), _),
  }),
  _ = (_, _) => {
    !_.frame && _(!1);
    let _ = _.frame,
      _ = _(_, _.scroll.initial),
      _ = _(_),
      _ = {
        ..._,
        scroll: {
          initial: _.scroll.initial,
          current: _,
          diff: {
            value: _,
            displacement: _,
          },
          max: _.scroll.max,
        },
      },
      _ = _({
        page: _.subject.page,
        withPlaceholder: _.subject.withPlaceholder,
        axis: _.axis,
        frame: _,
      });
    return {
      ..._,
      frame: _,
      subject: _,
    };
  },
  _ = _((_) => _.reduce((_, _) => ((_[_.descriptor._] = _), _), {})),
  _ = _((_) => _.reduce((_, _) => ((_[_.descriptor._] = _), _), {})),
  _ = _((_) => Object.values(_)),
  _ = _((_) => Object.values(_)),
  _ = _((_, _) =>
    _(_)
      .filter((_) => _ === _.descriptor.droppableId)
      .sort((_, _) => _.descriptor.index - _.descriptor.index),
  );
function _(_) {
  return _._ && _._.type === `REORDER` ? _._.destination : null;
}
function _(_) {
  return _._ && _._.type === `COMBINE` ? _._.combine : null;
}
var _ = _((_, _) => _.filter((_) => _.descriptor._ !== _.descriptor._)),
  _ = ({
    isMovingForward: _,
    draggable: _,
    destination: _,
    insideDestination: _,
    previousImpact: _,
  }) => {
    if (!_.isCombineEnabled || !_(_)) return null;
    function _(_) {
      let _ = {
        type: `COMBINE`,
        combine: {
          draggableId: _,
          droppableId: _.descriptor._,
        },
      };
      return {
        ..._,
        _: _,
      };
    }
    let _ = _.displaced.all,
      _ = _.length ? _[0] : null;
    if (_) return _ ? _(_) : null;
    let _ = _(_, _);
    if (!_) {
      if (!_.length) return null;
      let _ = _[_.length - 1];
      return _(_.descriptor._);
    }
    let _ = _.findIndex((_) => _.descriptor._ === _);
    _ === -1 && _(!1);
    let _ = _ - 1;
    if (_ < 0) return null;
    let _ = _[_];
    return _(_.descriptor._);
  },
  _ = (_, _) => _.descriptor.droppableId === _.descriptor._,
  _ = {
    point: _,
    value: 0,
  },
  _ = {
    invisible: {},
    visible: {},
    all: [],
  },
  _ = {
    displaced: _,
    displacedBy: _,
    _: null,
  },
  _ = (_, _) => (_) => _ <= _ && _ <= _,
  _ = (_) => {
    let _ = _(_.top, _.bottom),
      _ = _(_.left, _.right);
    return (_) => {
      if (_(_.top) && _(_.bottom) && _(_.left) && _(_.right)) return !0;
      let _ = _(_.top) || _(_.bottom),
        _ = _(_.left) || _(_.right);
      if (_ && _) return !0;
      let _ = _.top < _.top && _.bottom > _.bottom,
        _ = _.left < _.left && _.right > _.right;
      return _ && _ ? !0 : (_ && _) || (_ && _);
    };
  },
  _ = (_) => {
    let _ = _(_.top, _.bottom),
      _ = _(_.left, _.right);
    return (_) => _(_.top) && _(_.bottom) && _(_.left) && _(_.right);
  },
  _ = {
    direction: `vertical`,
    line: `y`,
    crossAxisLine: `x`,
    start: `top`,
    end: `bottom`,
    size: `height`,
    crossAxisStart: `left`,
    crossAxisEnd: `right`,
    crossAxisSize: `width`,
  },
  _ = {
    direction: `horizontal`,
    line: `x`,
    crossAxisLine: `y`,
    start: `left`,
    end: `right`,
    size: `width`,
    crossAxisStart: `top`,
    crossAxisEnd: `bottom`,
    crossAxisSize: `height`,
  },
  _ = (_) => (_) => {
    let _ = _(_.top, _.bottom),
      _ = _(_.left, _.right);
    return (_) => (_ === _ ? _(_.top) && _(_.bottom) : _(_.left) && _(_.right));
  },
  _ = (_, _) => _(_, _.frame ? _.frame.scroll.diff.displacement : _),
  _ = (_, _, _) => (_.subject.active ? _(_.subject.active)(_) : !1),
  _ = (_, _, _) => _(_)(_),
  _ = ({
    target: _,
    destination: _,
    viewport: _,
    withDroppableDisplacement: _,
    isVisibleThroughFrameFn: _,
  }) => {
    let _ = _ ? _(_, _) : _;
    return _(_, _, _) && _(_, _, _);
  },
  _ = (_) =>
    _({
      ..._,
      isVisibleThroughFrameFn: _,
    }),
  _ = (_) =>
    _({
      ..._,
      isVisibleThroughFrameFn: _,
    }),
  _ = (_) =>
    _({
      ..._,
      isVisibleThroughFrameFn: _(_.destination.axis),
    }),
  _ = (_, _, _) => {
    if (typeof _ == `boolean`) return _;
    if (!_) return !0;
    let { invisible: _, visible: _ } = _;
    if (_[_]) return !1;
    let _ = _[_];
    return !_ || _.shouldAnimate;
  };
function _(_, _) {
  let _ = _.page.marginBox,
    _ = {
      top: _.point._,
      right: 0,
      bottom: 0,
      left: _.point._,
    };
  return _(_(_, _));
}
function _({
  afterDragging: _,
  destination: _,
  displacedBy: _,
  viewport: _,
  forceShouldAnimate: _,
  last: _,
}) {
  return _.reduce(
    function (_, _) {
      let _ = _(_, _),
        _ = _.descriptor._;
      if (
        (_.all.push(_),
        !_({
          target: _,
          destination: _,
          viewport: _,
          withDroppableDisplacement: !0,
        }))
      )
        return (_.invisible[_.descriptor._] = !0), _;
      let _ = {
        draggableId: _,
        shouldAnimate: _(_, _, _),
      };
      return (_.visible[_] = _), _;
    },
    {
      all: [],
      visible: {},
      invisible: {},
    },
  );
}
function _(_, _) {
  if (!_.length) return 0;
  let _ = _[_.length - 1].descriptor.index;
  return _.inHomeList ? _ : _ + 1;
}
function _({
  insideDestination: _,
  inHomeList: _,
  displacedBy: _,
  destination: _,
}) {
  let _ = _(_, {
    inHomeList: _,
  });
  return {
    displaced: _,
    displacedBy: _,
    _: {
      type: `REORDER`,
      destination: {
        droppableId: _.descriptor._,
        index: _,
      },
    },
  };
}
function _({
  draggable: _,
  insideDestination: _,
  destination: _,
  viewport: _,
  displacedBy: _,
  last: _,
  index: _,
  forceShouldAnimate: _,
}) {
  let _ = _(_, _);
  if (_ == null)
    return _({
      insideDestination: _,
      inHomeList: _,
      displacedBy: _,
      destination: _,
    });
  let _ = _.find((_) => _.descriptor.index === _);
  if (!_)
    return _({
      insideDestination: _,
      inHomeList: _,
      displacedBy: _,
      destination: _,
    });
  let _ = _(_, _),
    _ = _.indexOf(_);
  return {
    displaced: _({
      afterDragging: _.slice(_),
      destination: _,
      displacedBy: _,
      last: _,
      viewport: _.frame,
      forceShouldAnimate: _,
    }),
    displacedBy: _,
    _: {
      type: `REORDER`,
      destination: {
        droppableId: _.descriptor._,
        index: _,
      },
    },
  };
}
function _(_, _) {
  return !!_.effected[_];
}
var _ = ({
    isMovingForward: _,
    destination: _,
    draggables: _,
    combine: _,
    afterCritical: _,
  }) => {
    if (!_.isCombineEnabled) return null;
    let _ = _.draggableId,
      _ = _[_].descriptor.index;
    return _(_, _) ? (_ ? _ : _ - 1) : _ ? _ + 1 : _;
  },
  _ = ({
    isMovingForward: _,
    isInHomeList: _,
    insideDestination: _,
    location: _,
  }) => {
    if (!_.length) return null;
    let _ = _.index,
      _ = _ ? _ + 1 : _ - 1,
      _ = _[0].descriptor.index,
      _ = _[_.length - 1].descriptor.index,
      _ = _ ? _ : _ + 1;
    return _ < _ || _ > _ ? null : _;
  },
  _ = ({
    isMovingForward: _,
    isInHomeList: _,
    draggable: _,
    draggables: _,
    destination: _,
    insideDestination: _,
    previousImpact: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let _ = _._;
    if ((!_ && _(!1), _.type === `REORDER`)) {
      let _ = _({
        isMovingForward: _,
        isInHomeList: _,
        location: _.destination,
        insideDestination: _,
      });
      return _ == null
        ? null
        : _({
            draggable: _,
            insideDestination: _,
            destination: _,
            viewport: _,
            last: _.displaced,
            displacedBy: _.displacedBy,
            index: _,
          });
    }
    let _ = _({
      isMovingForward: _,
      destination: _,
      displaced: _.displaced,
      draggables: _,
      combine: _.combine,
      afterCritical: _,
    });
    return _ == null
      ? null
      : _({
          draggable: _,
          insideDestination: _,
          destination: _,
          viewport: _,
          last: _.displaced,
          displacedBy: _.displacedBy,
          index: _,
        });
  },
  _ = ({ displaced: _, afterCritical: _, combineWith: _, displacedBy: _ }) => {
    let _ = !!(_.visible[_] || _.invisible[_]);
    return _(_, _) ? (_ ? _ : _(_.point)) : _ ? _.point : _;
  },
  _ = ({ afterCritical: _, impact: _, draggables: _ }) => {
    let _ = _(_);
    !_ && _(!1);
    let _ = _.draggableId,
      _ = _[_].page.borderBox.center;
    return _(
      _,
      _({
        displaced: _.displaced,
        afterCritical: _,
        combineWith: _,
        displacedBy: _.displacedBy,
      }),
    );
  },
  _ = (_, _) => _.margin[_.start] + _.borderBox[_.size] / 2,
  _ = (_, _) => _.margin[_.end] + _.borderBox[_.size] / 2,
  _ = (_, _, _) =>
    _[_.crossAxisStart] +
    _.margin[_.crossAxisStart] +
    _.borderBox[_.crossAxisSize] / 2,
  _ = ({ axis: _, moveRelativeTo: _, isMoving: _ }) =>
    _(_.line, _.marginBox[_.end] + _(_, _), _(_, _.marginBox, _)),
  _ = ({ axis: _, moveRelativeTo: _, isMoving: _ }) =>
    _(_.line, _.marginBox[_.start] - _(_, _), _(_, _.marginBox, _)),
  _ = ({ axis: _, moveInto: _, isMoving: _ }) =>
    _(_.line, _.contentBox[_.start] + _(_, _), _(_, _.contentBox, _)),
  _ = ({
    impact: _,
    draggable: _,
    draggables: _,
    droppable: _,
    afterCritical: _,
  }) => {
    let _ = _(_.descriptor._, _),
      _ = _.page,
      _ = _.axis;
    if (!_.length)
      return _({
        axis: _,
        moveInto: _.page,
        isMoving: _,
      });
    let { displaced: _, displacedBy: _ } = _,
      _ = _.all[0];
    if (_) {
      let _ = _[_];
      return _(_, _)
        ? _({
            axis: _,
            moveRelativeTo: _.page,
            isMoving: _,
          })
        : _({
            axis: _,
            moveRelativeTo: _(_.page, _.point),
            isMoving: _,
          });
    }
    let _ = _[_.length - 1];
    return _.descriptor._ === _.descriptor._
      ? _.borderBox.center
      : _(_.descriptor._, _)
        ? _({
            axis: _,
            moveRelativeTo: _(_.page, _(_.displacedBy.point)),
            isMoving: _,
          })
        : _({
            axis: _,
            moveRelativeTo: _.page,
            isMoving: _,
          });
  },
  _ = (_, _) => {
    let _ = _.frame;
    return _ ? _(_, _.scroll.diff.displacement) : _;
  },
  _ = ({
    impact: _,
    draggable: _,
    droppable: _,
    draggables: _,
    afterCritical: _,
  }) => {
    let _ = _.page.borderBox.center,
      _ = _._;
    return !_ || !_
      ? _
      : _.type === `REORDER`
        ? _({
            impact: _,
            draggable: _,
            draggables: _,
            droppable: _,
            afterCritical: _,
          })
        : _({
            impact: _,
            draggables: _,
            afterCritical: _,
          });
  },
  _ = (_) => {
    let _ = _(_),
      _ = _.droppable;
    return _ ? _(_, _) : _;
  },
  _ = (_, _) => {
    let _ = _(_, _.scroll.initial),
      _ = _(_);
    return {
      frame: _({
        top: _._,
        bottom: _._ + _.frame.height,
        left: _._,
        right: _._ + _.frame.width,
      }),
      scroll: {
        initial: _.scroll.initial,
        max: _.scroll.max,
        current: _,
        diff: {
          value: _,
          displacement: _,
        },
      },
    };
  };
function _(_, _) {
  return _.map((_) => _[_]);
}
function _(_, _) {
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_].visible[_];
    if (_) return _;
  }
  return null;
}
var _ = ({
    impact: _,
    viewport: _,
    destination: _,
    draggables: _,
    maxScrollChange: _,
  }) => {
    let _ = _(_, _(_.scroll.current, _)),
      _ = _.frame ? _(_, _(_.frame.scroll.current, _)) : _,
      _ = _.displaced,
      _ = _({
        afterDragging: _(_.all, _),
        destination: _,
        displacedBy: _.displacedBy,
        viewport: _.frame,
        last: _,
        forceShouldAnimate: !1,
      }),
      _ = _({
        afterDragging: _(_.all, _),
        destination: _,
        displacedBy: _.displacedBy,
        viewport: _.frame,
        last: _,
        forceShouldAnimate: !1,
      }),
      _ = {},
      _ = {},
      _ = [_, _, _];
    return (
      _.all.forEach((_) => {
        let _ = _(_, _);
        if (_) {
          _[_] = _;
          return;
        }
        _[_] = !0;
      }),
      {
        ..._,
        displaced: {
          all: _.all,
          invisible: _,
          visible: _,
        },
      }
    );
  },
  _ = (_, _) => _(_.scroll.diff.displacement, _),
  _ = ({ pageBorderBoxCenter: _, draggable: _, viewport: _ }) => {
    let _ = _(_(_, _), _.page.borderBox.center);
    return _(_.client.borderBox.center, _);
  },
  _ = ({
    draggable: _,
    destination: _,
    newPageBorderBoxCenter: _,
    viewport: _,
    withDroppableDisplacement: _,
    onlyOnMainAxis: _ = !1,
  }) => {
    let _ = _(_, _.page.borderBox.center),
      _ = {
        target: _(_.page.borderBox, _),
        destination: _,
        withDroppableDisplacement: _,
        viewport: _,
      };
    return _ ? _(_) : _(_);
  },
  _ = ({
    isMovingForward: _,
    draggable: _,
    destination: _,
    draggables: _,
    previousImpact: _,
    viewport: _,
    previousPageBorderBoxCenter: _,
    previousClientSelection: _,
    afterCritical: _,
  }) => {
    if (!_.isEnabled) return null;
    let _ = _(_.descriptor._, _),
      _ = _(_, _),
      _ =
        _({
          isMovingForward: _,
          draggable: _,
          destination: _,
          insideDestination: _,
          previousImpact: _,
        }) ||
        _({
          isMovingForward: _,
          isInHomeList: _,
          draggable: _,
          draggables: _,
          destination: _,
          insideDestination: _,
          previousImpact: _,
          viewport: _,
          afterCritical: _,
        });
    if (!_) return null;
    let _ = _({
      impact: _,
      draggable: _,
      droppable: _,
      draggables: _,
      afterCritical: _,
    });
    if (
      _({
        draggable: _,
        destination: _,
        newPageBorderBoxCenter: _,
        viewport: _.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
    )
      return {
        clientSelection: _({
          pageBorderBoxCenter: _,
          draggable: _,
          viewport: _,
        }),
        impact: _,
        scrollJumpRequest: null,
      };
    let _ = _(_, _);
    return {
      clientSelection: _,
      impact: _({
        impact: _,
        viewport: _,
        destination: _,
        draggables: _,
        maxScrollChange: _,
      }),
      scrollJumpRequest: _,
    };
  },
  _ = (_) => {
    let _ = _.subject.active;
    return !_ && _(!1), _;
  },
  _ = ({
    isMovingForward: _,
    pageBorderBoxCenter: _,
    source: _,
    droppables: _,
    viewport: _,
  }) => {
    let _ = _.subject.active;
    if (!_) return null;
    let _ = _.axis,
      _ = _(_[_.start], _[_.end]),
      _ = _(_)
        .filter((_) => _ !== _)
        .filter((_) => _.isEnabled)
        .filter((_) => !!_.subject.active)
        .filter((_) => _(_.frame)(_(_)))
        .filter((_) => {
          let _ = _(_);
          return _
            ? _[_.crossAxisEnd] < _[_.crossAxisEnd]
            : _[_.crossAxisStart] < _[_.crossAxisStart];
        })
        .filter((_) => {
          let _ = _(_),
            _ = _(_[_.start], _[_.end]);
          return _(_[_.start]) || _(_[_.end]) || _(_[_.start]) || _(_[_.end]);
        })
        .sort((_, _) => {
          let _ = _(_)[_.crossAxisStart],
            _ = _(_)[_.crossAxisStart];
          return _ ? _ - _ : _ - _;
        })
        .filter(
          (_, _, _) => _(_)[_.crossAxisStart] === _(_[0])[_.crossAxisStart],
        );
    if (!_.length) return null;
    if (_.length === 1) return _[0];
    let _ = _.filter((_) => _(_(_)[_.start], _(_)[_.end])(_[_.line]));
    return _.length === 1
      ? _[0]
      : _.length > 1
        ? _.sort((_, _) => _(_)[_.start] - _(_)[_.start])[0]
        : _.sort((_, _) => {
            let _ = _(_, _(_(_))),
              _ = _(_, _(_(_)));
            return _ === _ ? _(_)[_.start] - _(_)[_.start] : _ - _;
          })[0];
  },
  _ = (_, _) => {
    let _ = _.page.borderBox.center;
    return _(_.descriptor._, _) ? _(_, _.displacedBy.point) : _;
  },
  _ = (_, _) => {
    let _ = _.page.borderBox;
    return _(_.descriptor._, _) ? _(_, _(_.displacedBy.point)) : _;
  },
  _ = ({
    pageBorderBoxCenter: _,
    viewport: _,
    destination: _,
    insideDestination: _,
    afterCritical: _,
  }) =>
    _.filter((_) =>
      _({
        target: _(_, _),
        destination: _,
        viewport: _.frame,
        withDroppableDisplacement: !0,
      }),
    ).sort((_, _) => {
      let _ = _(_, _(_, _(_, _))),
        _ = _(_, _(_, _(_, _)));
      return _ < _ ? -1 : _ < _ ? 1 : _.descriptor.index - _.descriptor.index;
    })[0] || null,
  _ = _(function (_, _) {
    let _ = _[_.line];
    return {
      value: _,
      point: _(_.line, _),
    };
  }),
  _ = (_, _, _) => {
    let _ = _.axis;
    if (_.descriptor.mode === `virtual`) return _(_.line, _[_.line]);
    let _ = _.subject.page.contentBox[_.size],
      _ =
        _(_.descriptor._, _).reduce(
          (_, _) => _ + _.client.marginBox[_.size],
          0,
        ) +
        _[_.line] -
        _;
    return _ <= 0 ? null : _(_.line, _);
  },
  _ = (_, _) => ({
    ..._,
    scroll: {
      ..._.scroll,
      max: _,
    },
  }),
  _ = (_, _, _) => {
    let _ = _.frame;
    _(_, _) && _(!1), _.subject.withPlaceholder && _(!1);
    let _ = _(_.axis, _.displaceBy).point,
      _ = _(_, _, _),
      _ = {
        placeholderSize: _,
        increasedBy: _,
        oldFrameMaxScroll: _.frame ? _.frame.scroll.max : null,
      };
    if (!_) {
      let _ = _({
        page: _.subject.page,
        withPlaceholder: _,
        axis: _.axis,
        frame: _.frame,
      });
      return {
        ..._,
        subject: _,
      };
    }
    let _ = _(_, _ ? _(_.scroll.max, _) : _.scroll.max),
      _ = _({
        page: _.subject.page,
        withPlaceholder: _,
        axis: _.axis,
        frame: _,
      });
    return {
      ..._,
      subject: _,
      frame: _,
    };
  },
  _ = (_) => {
    let _ = _.subject.withPlaceholder;
    !_ && _(!1);
    let _ = _.frame;
    if (!_) {
      let _ = _({
        page: _.subject.page,
        axis: _.axis,
        frame: null,
        withPlaceholder: null,
      });
      return {
        ..._,
        subject: _,
      };
    }
    let _ = _.oldFrameMaxScroll;
    !_ && _(!1);
    let _ = _(_, _),
      _ = _({
        page: _.subject.page,
        axis: _.axis,
        frame: _,
        withPlaceholder: null,
      });
    return {
      ..._,
      subject: _,
      frame: _,
    };
  },
  _ = ({
    previousPageBorderBoxCenter: _,
    moveRelativeTo: _,
    insideDestination: _,
    draggable: _,
    draggables: _,
    destination: _,
    viewport: _,
    afterCritical: _,
  }) => {
    if (!_) {
      if (_.length) return null;
      let _ = {
          displaced: _,
          displacedBy: _,
          _: {
            type: `REORDER`,
            destination: {
              droppableId: _.descriptor._,
              index: 0,
            },
          },
        },
        _ = _({
          impact: _,
          draggable: _,
          droppable: _,
          draggables: _,
          afterCritical: _,
        });
      return _({
        draggable: _,
        destination: _(_, _) ? _ : _(_, _, _),
        newPageBorderBoxCenter: _,
        viewport: _.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
        ? _
        : null;
    }
    let _ = _[_.axis.line] <= _.page.borderBox.center[_.axis.line],
      _ = (() => {
        let _ = _.descriptor.index;
        return _.descriptor._ === _.descriptor._ || _ ? _ : _ + 1;
      })();
    return _({
      draggable: _,
      insideDestination: _,
      destination: _,
      viewport: _,
      displacedBy: _(_.axis, _.displaceBy),
      last: _,
      index: _,
    });
  },
  _ = ({
    isMovingForward: _,
    previousPageBorderBoxCenter: _,
    draggable: _,
    isOver: _,
    draggables: _,
    droppables: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let _ = _({
      isMovingForward: _,
      pageBorderBoxCenter: _,
      source: _,
      droppables: _,
      viewport: _,
    });
    if (!_) return null;
    let _ = _(_.descriptor._, _),
      _ = _({
        previousPageBorderBoxCenter: _,
        destination: _,
        draggable: _,
        draggables: _,
        moveRelativeTo: _({
          pageBorderBoxCenter: _,
          viewport: _,
          destination: _,
          insideDestination: _,
          afterCritical: _,
        }),
        insideDestination: _,
        viewport: _,
        afterCritical: _,
      });
    return _
      ? {
          clientSelection: _({
            pageBorderBoxCenter: _({
              impact: _,
              draggable: _,
              droppable: _,
              draggables: _,
              afterCritical: _,
            }),
            draggable: _,
            viewport: _,
          }),
          impact: _,
          scrollJumpRequest: null,
        }
      : null;
  },
  _ = (_) => {
    let _ = _._;
    return _
      ? _.type === `REORDER`
        ? _.destination.droppableId
        : _.combine.droppableId
      : null;
  },
  _ = (_, _) => {
    let _ = _(_);
    return _ ? _[_] : null;
  },
  _ = ({ state: _, type: _ }) => {
    let _ = _(_.impact, _.dimensions.droppables),
      _ = !!_,
      _ = _.dimensions.droppables[_.critical.droppable._],
      _ = _ || _,
      _ = _.axis.direction,
      _ =
        (_ === `vertical` && (_ === `MOVE_UP` || _ === `MOVE_DOWN`)) ||
        (_ === `horizontal` && (_ === `MOVE_LEFT` || _ === `MOVE_RIGHT`));
    if (_ && !_) return null;
    let _ = _ === `MOVE_DOWN` || _ === `MOVE_RIGHT`,
      _ = _.dimensions.draggables[_.critical.draggable._],
      _ = _.current.page.borderBoxCenter,
      { draggables: _, droppables: _ } = _.dimensions;
    return _
      ? _({
          isMovingForward: _,
          previousPageBorderBoxCenter: _,
          draggable: _,
          destination: _,
          draggables: _,
          viewport: _.viewport,
          previousClientSelection: _.current.client.selection,
          previousImpact: _.impact,
          afterCritical: _.afterCritical,
        })
      : _({
          isMovingForward: _,
          previousPageBorderBoxCenter: _,
          draggable: _,
          isOver: _,
          draggables: _,
          droppables: _,
          viewport: _.viewport,
          afterCritical: _.afterCritical,
        });
  };
function _(_) {
  return _.phase === `DRAGGING` || _.phase === `COLLECTING`;
}
function _(_) {
  let _ = _(_.top, _.bottom),
    _ = _(_.left, _.right);
  return function (_) {
    return _(_._) && _(_._);
  };
}
function _(_, _) {
  return (
    _.left < _.right && _.right > _.left && _.top < _.bottom && _.bottom > _.top
  );
}
function _({ pageBorderBox: _, draggable: _, candidates: _ }) {
  let _ = _.page.borderBox.center,
    _ = _.map((_) => {
      let _ = _.axis,
        _ = _(
          _.axis.line,
          _.center[_.line],
          _.page.borderBox.center[_.crossAxisLine],
        );
      return {
        _: _.descriptor._,
        distance: _(_, _),
      };
    }).sort((_, _) => _.distance - _.distance);
  return _[0] ? _[0]._ : null;
}
function _({ pageBorderBox: _, draggable: _, droppables: _ }) {
  let _ = _(_).filter((_) => {
    if (!_.isEnabled) return !1;
    let _ = _.subject.active;
    if (!_ || !_(_, _)) return !1;
    if (_(_)(_.center)) return !0;
    let _ = _.axis,
      _ = _.center[_.crossAxisLine],
      _ = _[_.crossAxisStart],
      _ = _[_.crossAxisEnd],
      _ = _(_[_.crossAxisStart], _[_.crossAxisEnd]),
      _ = _(_),
      _ = _(_);
    return !_ && !_ ? !0 : _ ? _ < _ : _ > _;
  });
  return _.length
    ? _.length === 1
      ? _[0].descriptor._
      : _({
          pageBorderBox: _,
          draggable: _,
          candidates: _,
        })
    : null;
}
var _ = (_, _) => _(_(_, _)),
  _ = (_, _) => {
    let _ = _.frame;
    return _ ? _(_, _.scroll.diff.value) : _;
  };
function _({ displaced: _, _: _ }) {
  return !!(_.visible[_] || _.invisible[_]);
}
function _({ draggable: _, closest: _, inHomeList: _ }) {
  return _
    ? _ && _.descriptor.index > _.descriptor.index
      ? _.descriptor.index - 1
      : _.descriptor.index
    : null;
}
var _ = ({
    pageBorderBoxWithDroppableScroll: _,
    draggable: _,
    destination: _,
    insideDestination: _,
    last: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let _ = _.axis,
      _ = _(_.axis, _.displaceBy),
      _ = _.value,
      _ = _[_.start],
      _ = _[_.end];
    return _({
      draggable: _,
      insideDestination: _,
      destination: _,
      viewport: _,
      last: _,
      displacedBy: _,
      index: _({
        draggable: _,
        closest:
          _(_, _).find((_) => {
            let _ = _.descriptor._,
              _ = _.page.borderBox.center[_.line],
              _ = _(_, _),
              _ = _({
                displaced: _,
                _: _,
              });
            return _ ? (_ ? _ <= _ : _ < _ - _) : _ ? _ <= _ + _ : _ < _;
          }) || null,
        inHomeList: _(_, _),
      }),
    });
  },
  _ = 4,
  _ = ({
    draggable: _,
    pageBorderBoxWithDroppableScroll: _,
    previousImpact: _,
    destination: _,
    insideDestination: _,
    afterCritical: _,
  }) => {
    if (!_.isCombineEnabled) return null;
    let _ = _.axis,
      _ = _(_.axis, _.displaceBy),
      _ = _.value,
      _ = _[_.start],
      _ = _[_.end],
      _ = _(_, _).find((_) => {
        let _ = _.descriptor._,
          _ = _.page.borderBox,
          _ = _[_.size] / _,
          _ = _(_, _),
          _ = _({
            displaced: _.displaced,
            _: _,
          });
        return _
          ? _
            ? _ > _[_.start] + _ && _ < _[_.end] - _
            : _ > _[_.start] - _ + _ && _ < _[_.end] - _ - _
          : _
            ? _ > _[_.start] + _ + _ && _ < _[_.end] + _ - _
            : _ > _[_.start] + _ && _ < _[_.end] - _;
      });
    return _
      ? {
          displacedBy: _,
          displaced: _.displaced,
          _: {
            type: `COMBINE`,
            combine: {
              draggableId: _.descriptor._,
              droppableId: _.descriptor._,
            },
          },
        }
      : null;
  },
  _ = ({
    pageOffset: _,
    draggable: _,
    draggables: _,
    droppables: _,
    previousImpact: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let _ = _(_.page.borderBox, _),
      _ = _({
        pageBorderBox: _,
        draggable: _,
        droppables: _,
      });
    if (!_) return _;
    let _ = _[_],
      _ = _(_.descriptor._, _),
      _ = _(_, _);
    return (
      _({
        pageBorderBoxWithDroppableScroll: _,
        draggable: _,
        previousImpact: _,
        destination: _,
        insideDestination: _,
        afterCritical: _,
      }) ||
      _({
        pageBorderBoxWithDroppableScroll: _,
        draggable: _,
        destination: _,
        insideDestination: _,
        last: _.displaced,
        viewport: _,
        afterCritical: _,
      })
    );
  },
  _ = (_, _) => ({
    ..._,
    [_.descriptor._]: _,
  }),
  _ = ({ previousImpact: _, impact: _, droppables: _ }) => {
    let _ = _(_),
      _ = _(_);
    if (!_ || _ === _) return _;
    let _ = _[_];
    return _.subject.withPlaceholder ? _(_, _(_)) : _;
  },
  _ = ({
    draggable: _,
    draggables: _,
    droppables: _,
    previousImpact: _,
    impact: _,
  }) => {
    let _ = _({
        previousImpact: _,
        impact: _,
        droppables: _,
      }),
      _ = _(_);
    if (!_) return _;
    let _ = _[_];
    return _(_, _) || _.subject.withPlaceholder ? _ : _(_, _(_, _, _));
  },
  _ = ({
    state: _,
    clientSelection: _,
    dimensions: _,
    viewport: _,
    impact: _,
    scrollJumpRequest: _,
  }) => {
    let _ = _ || _.viewport,
      _ = _ || _.dimensions,
      _ = _ || _.current.client.selection,
      _ = _(_, _.initial.client.selection),
      _ = {
        offset: _,
        selection: _,
        borderBoxCenter: _(_.initial.client.borderBoxCenter, _),
      },
      _ = {
        selection: _(_.selection, _.scroll.current),
        borderBoxCenter: _(_.borderBoxCenter, _.scroll.current),
        offset: _(_.offset, _.scroll.diff.value),
      },
      _ = {
        client: _,
        page: _,
      };
    if (_.phase === `COLLECTING`)
      return {
        ..._,
        dimensions: _,
        viewport: _,
        current: _,
      };
    let _ = _.draggables[_.critical.draggable._],
      _ =
        _ ||
        _({
          pageOffset: _.offset,
          draggable: _,
          draggables: _.draggables,
          droppables: _.droppables,
          previousImpact: _.impact,
          viewport: _,
          afterCritical: _.afterCritical,
        }),
      _ = _({
        draggable: _,
        impact: _,
        previousImpact: _.impact,
        draggables: _.draggables,
        droppables: _.droppables,
      });
    return {
      ..._,
      current: _,
      dimensions: {
        draggables: _.draggables,
        droppables: _,
      },
      impact: _,
      viewport: _,
      scrollJumpRequest: _ || null,
      forceShouldAnimate: !_ && null,
    };
  };
function _(_, _) {
  return _.map((_) => _[_]);
}
var _ = ({
    impact: _,
    viewport: _,
    draggables: _,
    destination: _,
    forceShouldAnimate: _,
  }) => {
    let _ = _.displaced,
      _ = _({
        afterDragging: _(_.all, _),
        destination: _,
        displacedBy: _.displacedBy,
        viewport: _.frame,
        forceShouldAnimate: _,
        last: _,
      });
    return {
      ..._,
      displaced: _,
    };
  },
  _ = ({
    impact: _,
    draggable: _,
    droppable: _,
    draggables: _,
    viewport: _,
    afterCritical: _,
  }) =>
    _({
      pageBorderBoxCenter: _({
        impact: _,
        draggable: _,
        draggables: _,
        droppable: _,
        afterCritical: _,
      }),
      draggable: _,
      viewport: _,
    }),
  _ = ({ state: _, dimensions: _, viewport: _ }) => {
    _.movementMode !== `SNAP` && _(!1);
    let _ = _.impact,
      _ = _ || _.viewport,
      _ = _ || _.dimensions,
      { draggables: _, droppables: _ } = _,
      _ = _[_.critical.draggable._],
      _ = _(_);
    !_ && _(!1);
    let _ = _[_],
      _ = _({
        impact: _,
        viewport: _,
        destination: _,
        draggables: _,
      });
    return _({
      impact: _,
      clientSelection: _({
        impact: _,
        draggable: _,
        droppable: _,
        draggables: _,
        viewport: _,
        afterCritical: _.afterCritical,
      }),
      state: _,
      dimensions: _,
      viewport: _,
    });
  },
  _ = (_) => ({
    index: _.index,
    droppableId: _.droppableId,
  }),
  _ = ({ draggable: _, home: _, draggables: _, viewport: _ }) => {
    let _ = _(_.axis, _.displaceBy),
      _ = _(_.descriptor._, _),
      _ = _.indexOf(_);
    _ === -1 && _(!1);
    let _ = _.slice(_ + 1),
      _ = _.reduce((_, _) => ((_[_.descriptor._] = !0), _), {}),
      _ = {
        inVirtualList: _.descriptor.mode === `virtual`,
        displacedBy: _,
        effected: _,
      };
    return {
      impact: {
        displaced: _({
          afterDragging: _,
          destination: _,
          displacedBy: _,
          last: null,
          viewport: _.frame,
          forceShouldAnimate: !1,
        }),
        displacedBy: _,
        _: {
          type: `REORDER`,
          destination: _(_.descriptor),
        },
      },
      afterCritical: _,
    };
  },
  _ = (_, _) => ({
    draggables: _.draggables,
    droppables: _(_.droppables, _),
  }),
  _ = ({ draggable: _, offset: _, initialWindowScroll: _ }) => {
    let _ = _(_.client, _),
      _ = _(_, _);
    return {
      ..._,
      placeholder: {
        ..._.placeholder,
        client: _,
      },
      client: _,
      page: _,
    };
  },
  _ = (_) => {
    let _ = _.frame;
    return !_ && _(!1), _;
  },
  _ = ({ additions: _, updatedDroppables: _, viewport: _ }) => {
    let _ = _.scroll.diff.value;
    return _.map((_) => {
      let _ = _[_.descriptor.droppableId],
        _ = _(_).scroll.diff.value;
      return _({
        draggable: _,
        offset: _(_, _),
        initialWindowScroll: _.scroll.initial,
      });
    });
  },
  _ = ({ state: _, published: _ }) => {
    let _ = _.modified.map((_) => {
        let _ = _.dimensions.droppables[_.droppableId];
        return _(_, _.scroll);
      }),
      _ = {
        ..._.dimensions.droppables,
        ..._(_),
      },
      _ = _(
        _({
          additions: _.additions,
          updatedDroppables: _,
          viewport: _.viewport,
        }),
      ),
      _ = {
        ..._.dimensions.draggables,
        ..._,
      };
    _.removals.forEach((_) => {
      delete _[_];
    });
    let _ = {
        droppables: _,
        draggables: _,
      },
      _ = _(_.impact),
      _ = _ ? _.droppables[_] : null,
      _ = _.draggables[_.critical.draggable._],
      _ = _.droppables[_.critical.droppable._],
      { impact: _, afterCritical: _ } = _({
        draggable: _,
        home: _,
        draggables: _,
        viewport: _.viewport,
      }),
      _ = _ && _.isCombineEnabled ? _.impact : _,
      _ = _({
        pageOffset: _.current.page.offset,
        draggable: _.draggables[_.critical.draggable._],
        draggables: _.draggables,
        droppables: _.droppables,
        previousImpact: _,
        viewport: _.viewport,
        afterCritical: _,
      }),
      _ = {
        ..._,
        phase: `DRAGGING`,
        impact: _,
        onLiftImpact: _,
        dimensions: _,
        afterCritical: _,
        forceShouldAnimate: !1,
      };
    return _.phase === `COLLECTING`
      ? _
      : {
          ..._,
          phase: `DROP_PENDING`,
          reason: _.reason,
          isWaiting: !1,
        };
  },
  _ = (_) => _.movementMode === `SNAP`,
  _ = (_, _, _) => {
    let _ = _(_.dimensions, _);
    return !_(_) || _
      ? _({
          state: _,
          dimensions: _,
        })
      : _({
          state: _,
          dimensions: _,
        });
  };
function _(_) {
  return _.isDragging && _.movementMode === `SNAP`
    ? {
        ..._,
        scrollJumpRequest: null,
      }
    : _;
}
var _ = {
    phase: `IDLE`,
    completed: null,
    shouldFlush: !1,
  },
  _ = (_ = _, _) => {
    if (_.type === `FLUSH`)
      return {
        ..._,
        shouldFlush: !0,
      };
    if (_.type === `INITIAL_PUBLISH`) {
      _.phase !== `IDLE` && _(!1);
      let {
          critical: _,
          clientSelection: _,
          viewport: _,
          dimensions: _,
          movementMode: _,
        } = _.payload,
        _ = _.draggables[_.draggable._],
        _ = _.droppables[_.droppable._],
        _ = {
          selection: _,
          borderBoxCenter: _.client.borderBox.center,
          offset: _,
        },
        _ = {
          client: _,
          page: {
            selection: _(_.selection, _.scroll.initial),
            borderBoxCenter: _(_.selection, _.scroll.initial),
            offset: _(_.selection, _.scroll.diff.value),
          },
        },
        _ = _(_.droppables).every((_) => !_.isFixedOnPage),
        { impact: _, afterCritical: _ } = _({
          draggable: _,
          home: _,
          draggables: _.draggables,
          viewport: _,
        });
      return {
        phase: `DRAGGING`,
        isDragging: !0,
        critical: _,
        movementMode: _,
        dimensions: _,
        initial: _,
        current: _,
        isWindowScrollAllowed: _,
        impact: _,
        afterCritical: _,
        onLiftImpact: _,
        viewport: _,
        scrollJumpRequest: null,
        forceShouldAnimate: null,
      };
    }
    if (_.type === `COLLECTION_STARTING`)
      return _.phase === `COLLECTING` || _.phase === `DROP_PENDING`
        ? _
        : (_.phase !== `DRAGGING` && _(!1),
          {
            ..._,
            phase: `COLLECTING`,
          });
    if (_.type === `PUBLISH_WHILE_DRAGGING`)
      return (
        _.phase !== `COLLECTING` && _.phase !== `DROP_PENDING` && _(!1),
        _({
          state: _,
          published: _.payload,
        })
      );
    if (_.type === `MOVE`) {
      if (_.phase === `DROP_PENDING`) return _;
      !_(_) && _(!1);
      let { client: _ } = _.payload;
      return _(_, _.current.client.selection)
        ? _
        : _({
            state: _,
            clientSelection: _,
            impact: _(_) ? _.impact : null,
          });
    }
    if (_.type === `UPDATE_DROPPABLE_SCROLL`) {
      if (_.phase === `DROP_PENDING` || _.phase === `COLLECTING`) return _(_);
      !_(_) && _(!1);
      let { _: _, newScroll: _ } = _.payload,
        _ = _.dimensions.droppables[_];
      return _ ? _(_, _(_, _), !1) : _;
    }
    if (_.type === `UPDATE_DROPPABLE_IS_ENABLED`) {
      if (_.phase === `DROP_PENDING`) return _;
      !_(_) && _(!1);
      let { _: _, isEnabled: _ } = _.payload,
        _ = _.dimensions.droppables[_];
      return (
        !_ && _(!1),
        _.isEnabled === _ && _(!1),
        _(
          _,
          {
            ..._,
            isEnabled: _,
          },
          !0,
        )
      );
    }
    if (_.type === `UPDATE_DROPPABLE_IS_COMBINE_ENABLED`) {
      if (_.phase === `DROP_PENDING`) return _;
      !_(_) && _(!1);
      let { _: _, isCombineEnabled: _ } = _.payload,
        _ = _.dimensions.droppables[_];
      return (
        !_ && _(!1),
        _.isCombineEnabled === _ && _(!1),
        _(
          _,
          {
            ..._,
            isCombineEnabled: _,
          },
          !0,
        )
      );
    }
    if (_.type === `MOVE_BY_WINDOW_SCROLL`) {
      if (_.phase === `DROP_PENDING` || _.phase === `DROP_ANIMATING`) return _;
      !_(_) && _(!1), !_.isWindowScrollAllowed && _(!1);
      let _ = _.payload.newScroll;
      if (_(_.viewport.scroll.current, _)) return _(_);
      let _ = _(_.viewport, _);
      return _(_)
        ? _({
            state: _,
            viewport: _,
          })
        : _({
            state: _,
            viewport: _,
          });
    }
    if (_.type === `UPDATE_VIEWPORT_MAX_SCROLL`) {
      if (!_(_)) return _;
      let _ = _.payload.maxScroll;
      if (_(_, _.viewport.scroll.max)) return _;
      let _ = {
        ..._.viewport,
        scroll: {
          ..._.viewport.scroll,
          max: _,
        },
      };
      return {
        ..._,
        viewport: _,
      };
    }
    if (
      _.type === `MOVE_UP` ||
      _.type === `MOVE_DOWN` ||
      _.type === `MOVE_LEFT` ||
      _.type === `MOVE_RIGHT`
    ) {
      if (_.phase === `COLLECTING` || _.phase === `DROP_PENDING`) return _;
      _.phase !== `DRAGGING` && _(!1);
      let _ = _({
        state: _,
        type: _.type,
      });
      return _
        ? _({
            state: _,
            impact: _.impact,
            clientSelection: _.clientSelection,
            scrollJumpRequest: _.scrollJumpRequest,
          })
        : _;
    }
    if (_.type === `DROP_PENDING`) {
      let _ = _.payload.reason;
      return (
        _.phase !== `COLLECTING` && _(!1),
        {
          ..._,
          phase: `DROP_PENDING`,
          isWaiting: !0,
          reason: _,
        }
      );
    }
    if (_.type === `DROP_ANIMATE`) {
      let { completed: _, dropDuration: _, newHomeClientOffset: _ } = _.payload;
      return (
        _.phase !== `DRAGGING` && _.phase !== `DROP_PENDING` && _(!1),
        {
          phase: `DROP_ANIMATING`,
          completed: _,
          dropDuration: _,
          newHomeClientOffset: _,
          dimensions: _.dimensions,
        }
      );
    }
    if (_.type === `DROP_COMPLETE`) {
      let { completed: _ } = _.payload;
      return {
        phase: `IDLE`,
        completed: _,
        shouldFlush: !1,
      };
    }
    return _;
  },
  _ = (_) => ({
    type: `BEFORE_INITIAL_CAPTURE`,
    payload: _,
  }),
  _ = (_) => ({
    type: `LIFT`,
    payload: _,
  }),
  _ = (_) => ({
    type: `INITIAL_PUBLISH`,
    payload: _,
  }),
  _ = (_) => ({
    type: `PUBLISH_WHILE_DRAGGING`,
    payload: _,
  }),
  _ = () => ({
    type: `COLLECTION_STARTING`,
    payload: null,
  }),
  _ = (_) => ({
    type: `UPDATE_DROPPABLE_SCROLL`,
    payload: _,
  }),
  _ = (_) => ({
    type: `UPDATE_DROPPABLE_IS_ENABLED`,
    payload: _,
  }),
  _ = (_) => ({
    type: `UPDATE_DROPPABLE_IS_COMBINE_ENABLED`,
    payload: _,
  }),
  _ = (_) => ({
    type: `MOVE`,
    payload: _,
  }),
  _ = (_) => ({
    type: `MOVE_BY_WINDOW_SCROLL`,
    payload: _,
  }),
  _ = (_) => ({
    type: `UPDATE_VIEWPORT_MAX_SCROLL`,
    payload: _,
  }),
  _ = () => ({
    type: `MOVE_UP`,
    payload: null,
  }),
  _ = () => ({
    type: `MOVE_DOWN`,
    payload: null,
  }),
  _ = () => ({
    type: `MOVE_RIGHT`,
    payload: null,
  }),
  _ = () => ({
    type: `MOVE_LEFT`,
    payload: null,
  }),
  _ = () => ({
    type: `FLUSH`,
    payload: null,
  }),
  _ = (_) => ({
    type: `DROP_ANIMATE`,
    payload: _,
  }),
  _ = (_) => ({
    type: `DROP_COMPLETE`,
    payload: _,
  }),
  _ = (_) => ({
    type: `DROP`,
    payload: _,
  }),
  _ = (_) => ({
    type: `DROP_PENDING`,
    payload: _,
  }),
  _ = () => ({
    type: `DROP_ANIMATION_FINISHED`,
    payload: null,
  }),
  _ =
    (_) =>
    ({ getState: _, dispatch: _ }) =>
    (_) =>
    (_) => {
      if (_.type !== `LIFT`) {
        _(_);
        return;
      }
      let { _: _, clientSelection: _, movementMode: _ } = _.payload,
        _ = _();
      _.phase === `DROP_ANIMATING` &&
        _(
          _({
            completed: _.completed,
          }),
        ),
        _().phase !== `IDLE` && _(!1),
        _(_()),
        _(
          _({
            draggableId: _,
            movementMode: _,
          }),
        );
      let _ = {
          draggableId: _,
          scrollOptions: {
            shouldPublishImmediately: _ === `SNAP`,
          },
        },
        { critical: _, dimensions: _, viewport: _ } = _.startPublishing(_);
      _(
        _({
          critical: _,
          dimensions: _,
          clientSelection: _,
          movementMode: _,
          viewport: _,
        }),
      );
    },
  _ = (_) => () => (_) => (_) => {
    _.type === `INITIAL_PUBLISH` && _.dragging(),
      _.type === `DROP_ANIMATE` &&
        _.dropping(_.payload.completed.result.reason),
      (_.type === `FLUSH` || _.type === `DROP_COMPLETE`) && _.resting(),
      _(_);
  },
  _ = {
    outOfTheWay: `cubic-bezier(0.2, 0, 0, 1)`,
    drop: `cubic-bezier(.2,1,.1,1)`,
  },
  _ = {
    opacity: {
      drop: 0,
      combining: 0.7,
    },
    scale: {
      drop: 0.75,
    },
  },
  _ = {
    outOfTheWay: 0.2,
    minDropTime: 0.33,
    maxDropTime: 0.55,
  },
  _ = `${_.outOfTheWay}s ${_.outOfTheWay}`,
  _ = {
    fluid: `opacity ${_}`,
    snap: `transform ${_}, opacity ${_}`,
    drop: (_) => {
      let _ = `${_}s ${_.drop}`;
      return `transform ${_}, opacity ${_}`;
    },
    outOfTheWay: `transform ${_}`,
    placeholder: `height ${_}, width ${_}, margin ${_}`,
  },
  _ = (_) => (_(_, _) ? void 0 : `translate(${_._}px, ${_._}px)`),
  _ = {
    moveTo: _,
    drop: (_, _) => {
      let _ = _(_);
      if (_) return _ ? `${_} scale(${_.scale.drop})` : _;
    },
  },
  { minDropTime: _, maxDropTime: _ } = _,
  _ = _ - _,
  _ = 1500,
  _ = 0.6,
  _ = ({ current: _, destination: _, reason: _ }) => {
    let _ = _(_, _);
    if (_ <= 0) return _;
    if (_ >= _) return _;
    let _ = _ + (_ / _) * _,
      _ = _ === `CANCEL` ? _ * _ : _;
    return Number(_.toFixed(2));
  },
  _ = ({
    impact: _,
    draggable: _,
    dimensions: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let { draggables: _, droppables: _ } = _,
      _ = _(_),
      _ = _ ? _[_] : null,
      _ = _[_.descriptor.droppableId];
    return _(
      _({
        impact: _,
        draggable: _,
        draggables: _,
        afterCritical: _,
        droppable: _ || _,
        viewport: _,
      }),
      _.client.borderBox.center,
    );
  },
  _ = ({
    draggables: _,
    reason: _,
    lastImpact: _,
    home: _,
    viewport: _,
    onLiftImpact: _,
  }) =>
    !_._ || _ !== `DROP`
      ? {
          impact: _({
            draggables: _,
            impact: _,
            destination: _,
            viewport: _,
            forceShouldAnimate: !0,
          }),
          didDropInsideDroppable: !1,
        }
      : _._.type === `REORDER`
        ? {
            impact: _,
            didDropInsideDroppable: !0,
          }
        : {
            impact: {
              ..._,
              displaced: _,
            },
            didDropInsideDroppable: !0,
          },
  _ =
    ({ getState: _, dispatch: _ }) =>
    (_) =>
    (_) => {
      if (_.type !== `DROP`) {
        _(_);
        return;
      }
      let _ = _(),
        _ = _.payload.reason;
      if (_.phase === `COLLECTING`) {
        _(
          _({
            reason: _,
          }),
        );
        return;
      }
      if (_.phase === `IDLE`) return;
      _.phase === `DROP_PENDING` && _.isWaiting && _(!1),
        _.phase !== `DRAGGING` && _.phase !== `DROP_PENDING` && _(!1);
      let _ = _.critical,
        _ = _.dimensions,
        _ = _.draggables[_.critical.draggable._],
        { impact: _, didDropInsideDroppable: _ } = _({
          reason: _,
          lastImpact: _.impact,
          afterCritical: _.afterCritical,
          onLiftImpact: _.onLiftImpact,
          home: _.dimensions.droppables[_.critical.droppable._],
          viewport: _.viewport,
          draggables: _.dimensions.draggables,
        }),
        _ = _ ? _(_) : null,
        _ = _ ? _(_) : null,
        _ = {
          index: _.draggable.index,
          droppableId: _.droppable._,
        },
        _ = {
          draggableId: _.descriptor._,
          type: _.descriptor.type,
          source: _,
          reason: _,
          mode: _.movementMode,
          destination: _,
          combine: _,
        },
        _ = _({
          impact: _,
          draggable: _,
          dimensions: _,
          viewport: _.viewport,
          afterCritical: _.afterCritical,
        }),
        _ = {
          critical: _.critical,
          afterCritical: _.afterCritical,
          result: _,
          impact: _,
        };
      if (_(_.current.client.offset, _) && !_.combine) {
        _(
          _({
            completed: _,
          }),
        );
        return;
      }
      _(
        _({
          newHomeClientOffset: _,
          dropDuration: _({
            current: _.current.client.offset,
            destination: _,
            reason: _,
          }),
          completed: _,
        }),
      );
    },
  _ = () => ({
    _: window.pageXOffset,
    _: window.pageYOffset,
  });
function _(_) {
  return {
    eventName: `scroll`,
    options: {
      passive: !0,
      capture: !1,
    },
    _: (_) => {
      (_.target === window || _.target === window.document) && _();
    },
  };
}
function _({ onWindowScroll: _ }) {
  function _() {
    _(_());
  }
  let _ = _(_),
    _ = _(_),
    _ = _;
  function _() {
    return _ !== _;
  }
  function _() {
    _() && _(!1), (_ = _(window, [_]));
  }
  function _() {
    !_() && _(!1), _.cancel(), _(), (_ = _);
  }
  return {
    start: _,
    stop: _,
    isActive: _,
  };
}
var _ = (_) =>
    _.type === `DROP_COMPLETE` ||
    _.type === `DROP_ANIMATE` ||
    _.type === `FLUSH`,
  _ = (_) => {
    let _ = _({
      onWindowScroll: (_) => {
        _.dispatch(
          _({
            newScroll: _,
          }),
        );
      },
    });
    return (_) => (_) => {
      !_.isActive() && _.type === `INITIAL_PUBLISH` && _.start(),
        _.isActive() && _(_) && _.stop(),
        _(_);
    };
  },
  _ = (_) => {
    let _ = !1,
      _ = !1,
      _ = setTimeout(() => {
        _ = !0;
      }),
      _ = (_) => {
        _ || _ || ((_ = !0), _(_), clearTimeout(_));
      };
    return (_.wasCalled = () => _), _;
  },
  _ = () => {
    let _ = [],
      _ = (_) => {
        let _ = _.findIndex((_) => _.timerId === _);
        _ === -1 && _(!1);
        let [_] = _.splice(_, 1);
        _.callback();
      };
    return {
      add: (_) => {
        let _ = setTimeout(() => _(_)),
          _ = {
            timerId: _,
            callback: _,
          };
        _.push(_);
      },
      flush: () => {
        if (!_.length) return;
        let _ = [..._];
        (_.length = 0),
          _.forEach((_) => {
            clearTimeout(_.timerId), _.callback();
          });
      },
    };
  },
  _ = (_, _) =>
    _ == null && _ == null
      ? !0
      : _ == null || _ == null
        ? !1
        : _.droppableId === _.droppableId && _.index === _.index,
  _ = (_, _) =>
    _ == null && _ == null
      ? !0
      : _ == null || _ == null
        ? !1
        : _.draggableId === _.draggableId && _.droppableId === _.droppableId,
  _ = (_, _) => {
    if (_ === _) return !0;
    let _ =
        _.draggable._ === _.draggable._ &&
        _.draggable.droppableId === _.draggable.droppableId &&
        _.draggable.type === _.draggable.type &&
        _.draggable.index === _.draggable.index,
      _ =
        _.droppable._ === _.droppable._ &&
        _.droppable.type === _.droppable.type;
    return _ && _;
  },
  _ = (_, _) => {
    _();
  },
  _ = (_, _) => ({
    draggableId: _.draggable._,
    type: _.droppable.type,
    source: {
      droppableId: _.droppable._,
      index: _.draggable.index,
    },
    mode: _,
  });
function _(_, _, _, _) {
  if (!_) {
    _(_(_));
    return;
  }
  let _ = _(_);
  _(_, {
    announce: _,
  }),
    _.wasCalled() || _(_(_));
}
var _ = (_, _) => {
    let _ = _(),
      _ = null,
      _ = (_, _) => {
        _ && _(!1),
          _(`onBeforeCapture`, () => {
            let _ = _().onBeforeCapture;
            _ &&
              _({
                draggableId: _,
                mode: _,
              });
          });
      },
      _ = (_, _) => {
        _ && _(!1),
          _(`onBeforeDragStart`, () => {
            let _ = _().onBeforeDragStart;
            _ && _(_(_, _));
          });
      },
      _ = (_, _) => {
        _ && _(!1);
        let _ = _(_, _);
        (_ = {
          mode: _,
          lastCritical: _,
          lastLocation: _.source,
          lastCombine: null,
        }),
          _.add(() => {
            _(`onDragStart`, () => _(_().onDragStart, _, _, _.onDragStart));
          });
      },
      _ = (_, _) => {
        let _ = _(_),
          _ = _(_);
        !_ && _(!1);
        let _ = !_(_, _.lastCritical);
        _ && (_.lastCritical = _);
        let _ = !_(_.lastLocation, _);
        _ && (_.lastLocation = _);
        let _ = !_(_.lastCombine, _);
        if ((_ && (_.lastCombine = _), !_ && !_ && !_)) return;
        let _ = {
          ..._(_, _.mode),
          combine: _,
          destination: _,
        };
        _.add(() => {
          _(`onDragUpdate`, () => _(_().onDragUpdate, _, _, _.onDragUpdate));
        });
      },
      _ = () => {
        !_ && _(!1), _.flush();
      },
      _ = (_) => {
        !_ && _(!1),
          (_ = null),
          _(`onDragEnd`, () => _(_().onDragEnd, _, _, _.onDragEnd));
      };
    return {
      beforeCapture: _,
      beforeStart: _,
      start: _,
      update: _,
      flush: _,
      drop: _,
      abort: () => {
        if (!_) return;
        let _ = {
          ..._(_.lastCritical, _.mode),
          combine: null,
          destination: null,
          reason: `CANCEL`,
        };
        _(_);
      },
    };
  },
  _ = (_, _) => {
    let _ = _(_, _);
    return (_) => (_) => (_) => {
      if (_.type === `BEFORE_INITIAL_CAPTURE`) {
        _.beforeCapture(_.payload.draggableId, _.payload.movementMode);
        return;
      }
      if (_.type === `INITIAL_PUBLISH`) {
        let _ = _.payload.critical;
        _.beforeStart(_, _.payload.movementMode),
          _(_),
          _.start(_, _.payload.movementMode);
        return;
      }
      if (_.type === `DROP_COMPLETE`) {
        let _ = _.payload.completed.result;
        _.flush(), _(_), _.drop(_);
        return;
      }
      if ((_(_), _.type === `FLUSH`)) {
        _.abort();
        return;
      }
      let _ = _.getState();
      _.phase === `DRAGGING` && _.update(_.critical, _.impact);
    };
  },
  _ = (_) => (_) => (_) => {
    if (_.type !== `DROP_ANIMATION_FINISHED`) {
      _(_);
      return;
    }
    let _ = _.getState();
    _.phase !== `DROP_ANIMATING` && _(!1),
      _.dispatch(
        _({
          completed: _.completed,
        }),
      );
  },
  _ = (_) => {
    let _ = null,
      _ = null;
    function _() {
      (_ &&= (cancelAnimationFrame(_), null)), (_ &&= (_(), null));
    }
    return (_) => (_) => {
      if (
        ((_.type === `FLUSH` ||
          _.type === `DROP_COMPLETE` ||
          _.type === `DROP_ANIMATION_FINISHED`) &&
          _(),
        _(_),
        _.type !== `DROP_ANIMATE`)
      )
        return;
      let _ = {
        eventName: `scroll`,
        options: {
          capture: !0,
          passive: !1,
          once: !0,
        },
        _: function () {
          _.getState().phase === `DROP_ANIMATING` && _.dispatch(_());
        },
      };
      _ = requestAnimationFrame(() => {
        (_ = null), (_ = _(window, [_]));
      });
    };
  },
  _ = (_) => () => (_) => (_) => {
    (_.type === `DROP_COMPLETE` ||
      _.type === `FLUSH` ||
      _.type === `DROP_ANIMATE`) &&
      _.stopPublishing(),
      _(_);
  },
  _ = (_) => {
    let _ = !1;
    return () => (_) => (_) => {
      if (_.type === `INITIAL_PUBLISH`) {
        (_ = !0),
          _.tryRecordFocus(_.payload.critical.draggable._),
          _(_),
          _.tryRestoreFocusRecorded();
        return;
      }
      if ((_(_), _)) {
        if (_.type === `FLUSH`) {
          (_ = !1), _.tryRestoreFocusRecorded();
          return;
        }
        if (_.type === `DROP_COMPLETE`) {
          _ = !1;
          let _ = _.payload.completed.result;
          _.combine && _.tryShiftRecord(_.draggableId, _.combine.draggableId),
            _.tryRestoreFocusRecorded();
        }
      }
    };
  },
  _ = (_) =>
    _.type === `DROP_COMPLETE` ||
    _.type === `DROP_ANIMATE` ||
    _.type === `FLUSH`,
  _ = (_) => (_) => (_) => (_) => {
    if (_(_)) {
      _.stop(), _(_);
      return;
    }
    if (_.type === `INITIAL_PUBLISH`) {
      _(_);
      let _ = _.getState();
      _.phase !== `DRAGGING` && _(!1), _.start(_);
      return;
    }
    _(_), _.scroll(_.getState());
  },
  _ = (_) => (_) => (_) => {
    if ((_(_), _.type !== `PUBLISH_WHILE_DRAGGING`)) return;
    let _ = _.getState();
    _.phase === `DROP_PENDING` &&
      (_.isWaiting ||
        _.dispatch(
          _({
            reason: _.reason,
          }),
        ));
  },
  _ = _,
  _ = ({
    dimensionMarshal: _,
    focusMarshal: _,
    styleMarshal: _,
    getResponders: _,
    announce: _,
    autoScroller: _,
  }) => _(_, _(_(_(_), _(_), _(_), _, _, _, _, _(_), _, _(_), _(_, _)))),
  _ = () => ({
    additions: {},
    removals: {},
    modified: {},
  });
function _({ registry: _, callbacks: _ }) {
  let _ = _(),
    _ = null,
    _ = () => {
      _ ||=
        (_.collectionStarting(),
        requestAnimationFrame(() => {
          _ = null;
          let { additions: _, removals: _, modified: _ } = _,
            _ = Object.keys(_)
              .map((_) => _.draggable.getById(_).getDimension(_))
              .sort((_, _) => _.descriptor.index - _.descriptor.index),
            _ = Object.keys(_).map((_) => ({
              droppableId: _,
              scroll: _.droppable.getById(_).callbacks.getScrollWhileDragging(),
            })),
            _ = {
              additions: _,
              removals: Object.keys(_),
              modified: _,
            };
          (_ = _()), _.publish(_);
        }));
    };
  return {
    add: (_) => {
      let _ = _.descriptor._;
      (_.additions[_] = _),
        (_.modified[_.descriptor.droppableId] = !0),
        _.removals[_] && delete _.removals[_],
        _();
    },
    remove: (_) => {
      let _ = _.descriptor;
      (_.removals[_._] = !0),
        (_.modified[_.droppableId] = !0),
        _.additions[_._] && delete _.additions[_._],
        _();
    },
    stop: () => {
      _ && (cancelAnimationFrame(_), (_ = null), (_ = _()));
    },
  };
}
var _ = ({ scrollHeight: _, scrollWidth: _, height: _, width: _ }) => {
    let _ = _(
      {
        _: _,
        _: _,
      },
      {
        _: _,
        _: _,
      },
    );
    return {
      _: Math.max(0, _._),
      _: Math.max(0, _._),
    };
  },
  _ = () => {
    let _ = document.documentElement;
    return !_ && _(!1), _;
  },
  _ = () => {
    let _ = _();
    return _({
      scrollHeight: _.scrollHeight,
      scrollWidth: _.scrollWidth,
      width: _.clientWidth,
      height: _.clientHeight,
    });
  },
  _ = () => {
    let _ = _(),
      _ = _(),
      _ = _._,
      _ = _._,
      _ = _(),
      _ = _.clientWidth,
      _ = _.clientHeight,
      _ = _ + _,
      _ = _ + _;
    return {
      frame: _({
        top: _,
        left: _,
        right: _,
        bottom: _,
      }),
      scroll: {
        initial: _,
        current: _,
        max: _,
        diff: {
          value: _,
          displacement: _,
        },
      },
    };
  },
  _ = ({ critical: _, scrollOptions: _, registry: _ }) => {
    let _ = _(),
      _ = _.scroll.current,
      _ = _.droppable,
      _ = _.droppable
        .getAllByType(_.type)
        .map((_) => _.callbacks.getDimensionAndWatchScroll(_, _));
    return {
      dimensions: {
        draggables: _(
          _.draggable
            .getAllByType(_.draggable.type)
            .map((_) => _.getDimension(_)),
        ),
        droppables: _(_),
      },
      critical: _,
      viewport: _,
    };
  };
function _(_, _, _) {
  return (
    _.descriptor._ !== _._ &&
    _.descriptor.type === _.type &&
    _.droppable.getById(_.descriptor.droppableId).descriptor.mode === `virtual`
  );
}
var _ = (_, _) => {
    let _ = null,
      _ = _({
        callbacks: {
          publish: _.publishWhileDragging,
          collectionStarting: _.collectionStarting,
        },
        registry: _,
      }),
      _ = (_, _) => {
        !_.droppable.exists(_) && _(!1),
          _ &&
            _.updateDroppableIsEnabled({
              _: _,
              isEnabled: _,
            });
      },
      _ = (_, _) => {
        _ &&
          (!_.droppable.exists(_) && _(!1),
          _.updateDroppableIsCombineEnabled({
            _: _,
            isCombineEnabled: _,
          }));
      },
      _ = (_, _) => {
        _ &&
          (!_.droppable.exists(_) && _(!1),
          _.updateDroppableScroll({
            _: _,
            newScroll: _,
          }));
      },
      _ = (_, _) => {
        _ && _.droppable.getById(_).callbacks.scroll(_);
      },
      _ = () => {
        if (!_) return;
        _.stop();
        let _ = _.critical.droppable;
        _.droppable
          .getAllByType(_.type)
          .forEach((_) => _.callbacks.dragStopped()),
          _.unsubscribe(),
          (_ = null);
      },
      _ = (_) => {
        !_ && _(!1);
        let _ = _.critical.draggable;
        _.type === `ADDITION` && _(_, _, _.value) && _.add(_.value),
          _.type === `REMOVAL` && _(_, _, _.value) && _.remove(_.value);
      };
    return {
      updateDroppableIsEnabled: _,
      updateDroppableIsCombineEnabled: _,
      scrollDroppable: _,
      updateDroppableScroll: _,
      startPublishing: (_) => {
        _ && _(!1);
        let _ = _.draggable.getById(_.draggableId),
          _ = _.droppable.getById(_.descriptor.droppableId),
          _ = {
            draggable: _.descriptor,
            droppable: _.descriptor,
          };
        return (
          (_ = {
            critical: _,
            unsubscribe: _.subscribe(_),
          }),
          _({
            critical: _,
            registry: _,
            scrollOptions: _.scrollOptions,
          })
        );
      },
      stopPublishing: _,
    };
  },
  _ = (_, _) =>
    _.phase === `IDLE`
      ? !0
      : _.phase !== `DROP_ANIMATING` || _.completed.result.draggableId === _
        ? !1
        : _.completed.result.reason === `DROP`,
  _ = (_) => {
    window.scrollBy(_._, _._);
  },
  _ = _((_) => _(_).filter((_) => !(!_.isEnabled || !_.frame))),
  _ = (_, _) =>
    _(_).find((_) => (!_.frame && _(!1), _(_.frame.pageMarginBox)(_))) || null,
  _ = ({ center: _, destination: _, droppables: _ }) => {
    if (_) {
      let _ = _[_];
      return _.frame ? _ : null;
    }
    return _(_, _);
  },
  _ = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (_) => _ ** 2,
    durationDampening: {
      stopDampeningAt: 1200,
      accelerateAt: 360,
    },
    disabled: !1,
  },
  _ = (_, _, _ = () => _) => {
    let _ = _();
    return {
      startScrollingFrom: _[_.size] * _.startFromPercentage,
      maxScrollValueAt: _[_.size] * _.maxScrollAtPercentage,
    };
  },
  _ = ({ startOfRange: _, endOfRange: _, current: _ }) => {
    let _ = _ - _;
    return _ === 0 ? 0 : (_ - _) / _;
  },
  _ = 1,
  _ = (_, _, _ = () => _) => {
    let _ = _();
    if (_ > _.startScrollingFrom) return 0;
    if (_ <= _.maxScrollValueAt) return _.maxPixelScroll;
    if (_ === _.startScrollingFrom) return _;
    let _ =
        1 -
        _({
          startOfRange: _.maxScrollValueAt,
          endOfRange: _.startScrollingFrom,
          current: _,
        }),
      _ = _.maxPixelScroll * _.ease(_);
    return Math.ceil(_);
  },
  _ = (_, _, _) => {
    let _ = _(),
      _ = _.durationDampening.accelerateAt,
      _ = _.durationDampening.stopDampeningAt,
      _ = _,
      _ = _,
      _ = Date.now() - _;
    if (_ >= _) return _;
    if (_ < _) return _;
    let _ = _({
        startOfRange: _,
        endOfRange: _,
        current: _,
      }),
      _ = _ * _.ease(_);
    return Math.ceil(_);
  },
  _ = ({
    distanceToEdge: _,
    thresholds: _,
    dragStartTime: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _(_, _, _);
    return _ === 0 ? 0 : _ ? Math.max(_(_, _, _), _) : _;
  },
  _ = ({
    container: _,
    distanceToEdges: _,
    dragStartTime: _,
    axis: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _(_, _, _);
    return _[_.end] < _[_.start]
      ? _({
          distanceToEdge: _[_.end],
          thresholds: _,
          dragStartTime: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        })
      : -1 *
          _({
            distanceToEdge: _[_.start],
            thresholds: _,
            dragStartTime: _,
            shouldUseTimeDampening: _,
            getAutoScrollerOptions: _,
          });
  },
  _ = ({ container: _, subject: _, proposedScroll: _ }) => {
    let _ = _.height > _.height,
      _ = _.width > _.width;
    return !_ && !_
      ? _
      : _ && _
        ? null
        : {
            _: _ ? 0 : _._,
            _: _ ? 0 : _._,
          };
  },
  _ = _((_) => (_ === 0 ? 0 : _)),
  _ = ({
    dragStartTime: _,
    container: _,
    subject: _,
    center: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = {
        top: _._ - _.top,
        right: _.right - _._,
        bottom: _.bottom - _._,
        left: _._ - _.left,
      },
      _ = _({
        container: _,
        distanceToEdges: _,
        dragStartTime: _,
        axis: _,
        shouldUseTimeDampening: _,
        getAutoScrollerOptions: _,
      }),
      _ = _({
        _: _({
          container: _,
          distanceToEdges: _,
          dragStartTime: _,
          axis: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        }),
        _: _,
      });
    if (_(_, _)) return null;
    let _ = _({
      container: _,
      subject: _,
      proposedScroll: _,
    });
    return _ ? (_(_, _) ? null : _) : null;
  },
  _ = _((_) => (_ === 0 ? 0 : _ > 0 ? 1 : -1)),
  _ = (() => {
    let _ = (_, _) => (_ < 0 ? _ : _ > _ ? _ - _ : 0);
    return ({ current: _, max: _, change: _ }) => {
      let _ = _(_, _),
        _ = {
          _: _(_._, _._),
          _: _(_._, _._),
        };
      return _(_, _) ? null : _;
    };
  })(),
  _ = ({ max: _, current: _, change: _ }) => {
    let _ = {
        _: Math.max(_._, _._),
        _: Math.max(_._, _._),
      },
      _ = _(_),
      _ = _({
        max: _,
        current: _,
        change: _,
      });
    return !_ || (_._ !== 0 && _._ === 0) || (_._ !== 0 && _._ === 0);
  },
  _ = (_, _) =>
    _({
      current: _.scroll.current,
      max: _.scroll.max,
      change: _,
    }),
  _ = (_, _) => {
    if (!_(_, _)) return null;
    let _ = _.scroll.max,
      _ = _.scroll.current;
    return _({
      current: _,
      max: _,
      change: _,
    });
  },
  _ = (_, _) => {
    let _ = _.frame;
    return _
      ? _({
          current: _.scroll.current,
          max: _.scroll.max,
          change: _,
        })
      : !1;
  },
  _ = (_, _) => {
    let _ = _.frame;
    return !_ || !_(_, _)
      ? null
      : _({
          current: _.scroll.current,
          max: _.scroll.max,
          change: _,
        });
  },
  _ = ({
    viewport: _,
    subject: _,
    center: _,
    dragStartTime: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _({
      dragStartTime: _,
      container: _.frame,
      subject: _,
      center: _,
      shouldUseTimeDampening: _,
      getAutoScrollerOptions: _,
    });
    return _ && _(_, _) ? _ : null;
  },
  _ = ({
    droppable: _,
    subject: _,
    center: _,
    dragStartTime: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _.frame;
    if (!_) return null;
    let _ = _({
      dragStartTime: _,
      container: _.pageMarginBox,
      subject: _,
      center: _,
      shouldUseTimeDampening: _,
      getAutoScrollerOptions: _,
    });
    return _ && _(_, _) ? _ : null;
  },
  _ = ({
    state: _,
    dragStartTime: _,
    shouldUseTimeDampening: _,
    scrollWindow: _,
    scrollDroppable: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _.current.page.borderBoxCenter,
      _ = _.dimensions.draggables[_.critical.draggable._].page.marginBox;
    if (_.isWindowScrollAllowed) {
      let _ = _.viewport,
        _ = _({
          dragStartTime: _,
          viewport: _,
          subject: _,
          center: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        });
      if (_) {
        _(_);
        return;
      }
    }
    let _ = _({
      center: _,
      destination: _(_.impact),
      droppables: _.dimensions.droppables,
    });
    if (!_) return;
    let _ = _({
      dragStartTime: _,
      droppable: _,
      subject: _,
      center: _,
      shouldUseTimeDampening: _,
      getAutoScrollerOptions: _,
    });
    _ && _(_.descriptor._, _);
  },
  _ = ({
    scrollWindow: _,
    scrollDroppable: _,
    getAutoScrollerOptions: _ = () => _,
  }) => {
    let _ = _(_),
      _ = _(_),
      _ = null,
      _ = (_) => {
        !_ && _(!1);
        let { shouldUseTimeDampening: _, dragStartTime: _ } = _;
        _({
          state: _,
          scrollWindow: _,
          scrollDroppable: _,
          dragStartTime: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        });
      };
    return {
      start: (_) => {
        _ && _(!1);
        let _ = Date.now(),
          _ = !1,
          _ = () => {
            _ = !0;
          };
        _({
          state: _,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: _,
          scrollDroppable: _,
          getAutoScrollerOptions: _,
        }),
          (_ = {
            dragStartTime: _,
            shouldUseTimeDampening: _,
          }),
          _ && _(_);
      },
      stop: () => {
        _ &&= (_.cancel(), _.cancel(), null);
      },
      scroll: _,
    };
  },
  _ = ({ move: _, scrollDroppable: _, scrollWindow: _ }) => {
    let _ = (_, _) => {
        _({
          client: _(_.current.client.selection, _),
        });
      },
      _ = (_, _) => {
        if (!_(_, _)) return _;
        let _ = _(_, _);
        if (!_) return _(_.descriptor._, _), null;
        let _ = _(_, _);
        return _(_.descriptor._, _), _(_, _);
      },
      _ = (_, _, _) => {
        if (!_ || !_(_, _)) return _;
        let _ = _(_, _);
        if (!_) return _(_), null;
        let _ = _(_, _);
        return _(_), _(_, _);
      };
    return (_) => {
      let _ = _.scrollJumpRequest;
      if (!_) return;
      let _ = _(_.impact);
      !_ && _(!1);
      let _ = _(_.dimensions.droppables[_], _);
      if (!_) return;
      let _ = _.viewport,
        _ = _(_.isWindowScrollAllowed, _, _);
      _ && _(_, _);
    };
  },
  _ = ({
    scrollDroppable: _,
    scrollWindow: _,
    move: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _({
        scrollWindow: _,
        scrollDroppable: _,
        getAutoScrollerOptions: _,
      }),
      _ = _({
        move: _,
        scrollWindow: _,
        scrollDroppable: _,
      });
    return {
      scroll: (_) => {
        if (!(_().disabled || _.phase !== `DRAGGING`)) {
          if (_.movementMode === `FLUID`) {
            _.scroll(_);
            return;
          }
          _.scrollJumpRequest && _(_);
        }
      },
      start: _.start,
      stop: _.stop,
    };
  },
  _ = `data-rfd`,
  _ = (() => {
    let _ = `${_}-drag-handle`;
    return {
      base: _,
      draggableId: `${_}-draggable-id`,
      contextId: `${_}-context-id`,
    };
  })(),
  _ = (() => {
    let _ = `${_}-draggable`;
    return {
      base: _,
      contextId: `${_}-context-id`,
      _: `${_}-id`,
    };
  })(),
  _ = (() => {
    let _ = `${_}-droppable`;
    return {
      base: _,
      contextId: `${_}-context-id`,
      _: `${_}-id`,
    };
  })(),
  _ = {
    contextId: `${_}-scroll-container-context-id`,
  },
  _ = (_) => (_) => `[${_}="${_}"]`,
  _ = (_, _) =>
    _.map((_) => {
      let _ = _.styles[_];
      return _ ? `${_.selector} { ${_} }` : ``;
    }).join(` `),
  _ = `pointer-events: none;`,
  _ = (_) => {
    let _ = _(_),
      _ = (() => {
        let _ = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
          selector: _(_.contextId),
          styles: {
            always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
            resting: _,
            dragging: _,
            dropAnimating: _,
          },
        };
      })(),
      _ = [
        (() => {
          let _ = `
      transition: ${_.outOfTheWay};
    `;
          return {
            selector: _(_.contextId),
            styles: {
              dragging: _,
              dropAnimating: _,
              userCancel: _,
            },
          };
        })(),
        _,
        {
          selector: _(_.contextId),
          styles: {
            always: `overflow-anchor: none;`,
          },
        },
        {
          selector: `body`,
          styles: {
            dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
          },
        },
      ];
    return {
      always: _(_, `always`),
      resting: _(_, `resting`),
      dragging: _(_, `dragging`),
      dropAnimating: _(_, `dropAnimating`),
      userCancel: _(_, `userCancel`),
    };
  },
  _ =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0
      ? _.useLayoutEffect
      : _.useEffect,
  _ = () => {
    let _ = document.querySelector(`head`);
    return !_ && _(!1), _;
  },
  _ = (_) => {
    let _ = document.createElement(`style`);
    return _ && _.setAttribute(`nonce`, _), (_.type = `text/css`), _;
  };
function _(_, _) {
  let _ = _(() => _(_), [_]),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = _(
      _((_) => {
        let _ = _.current;
        !_ && _(!1), (_.textContent = _);
      }),
      [],
    ),
    _ = _((_) => {
      let _ = _.current;
      !_ && _(!1), (_.textContent = _);
    }, []);
  _(() => {
    (_.current || _.current) && _(!1);
    let _ = _(_),
      _ = _(_);
    return (
      (_.current = _),
      (_.current = _),
      _.setAttribute(`${_}-always`, _),
      _.setAttribute(`${_}-dynamic`, _),
      _().appendChild(_),
      _().appendChild(_),
      _(_.always),
      _(_.resting),
      () => {
        let _ = (_) => {
          let _ = _.current;
          !_ && _(!1), _().removeChild(_), (_.current = null);
        };
        _(_), _(_);
      }
    );
  }, [_, _, _, _.always, _.resting, _]);
  let _ = _(() => _(_.dragging), [_, _.dragging]),
    _ = _(
      (_) => {
        if (_ === `DROP`) {
          _(_.dropAnimating);
          return;
        }
        _(_.userCancel);
      },
      [_, _.dropAnimating, _.userCancel],
    ),
    _ = _(() => {
      _.current && _(_.resting);
    }, [_, _.resting]);
  return _(
    () => ({
      dragging: _,
      dropping: _,
      resting: _,
    }),
    [_, _, _],
  );
}
function _(_, _) {
  return Array.from(_.querySelectorAll(_));
}
var _ = (_) =>
  _ && _.ownerDocument && _.ownerDocument.defaultView
    ? _.ownerDocument.defaultView
    : window;
function _(_) {
  return _ instanceof _(_).HTMLElement;
}
function _(_, _) {
  let _ = `[${_.contextId}="${_}"]`,
    _ = _(document, _);
  if (!_.length) return null;
  let _ = _.find((_) => _.getAttribute(_.draggableId) === _);
  return !_ || !_(_) ? null : _;
}
function _(_) {
  let _ = (0, _.useRef)({}),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(!1),
    _ = _(function (_, _) {
      let _ = {
        _: _,
        focus: _,
      };
      return (
        (_.current[_] = _),
        function () {
          let _ = _.current;
          _[_] !== _ && delete _[_];
        }
      );
    }, []),
    _ = _(
      function (_) {
        let _ = _(_, _);
        _ && _ !== document.activeElement && _.focus();
      },
      [_],
    ),
    _ = _(function (_, _) {
      _.current === _ && (_.current = _);
    }, []),
    _ = _(
      function () {
        _.current ||
          (_.current &&
            (_.current = requestAnimationFrame(() => {
              _.current = null;
              let _ = _.current;
              _ && _(_);
            })));
      },
      [_],
    ),
    _ = _(function (_) {
      _.current = null;
      let _ = document.activeElement;
      _ && _.getAttribute(_.draggableId) === _ && (_.current = _);
    }, []);
  return (
    _(
      () => (
        (_.current = !0),
        function () {
          _.current = !1;
          let _ = _.current;
          _ && cancelAnimationFrame(_);
        }
      ),
      [],
    ),
    _(
      () => ({
        register: _,
        tryRecordFocus: _,
        tryRestoreFocusRecorded: _,
        tryShiftRecord: _,
      }),
      [_, _, _, _],
    )
  );
}
function _() {
  let _ = {
      draggables: {},
      droppables: {},
    },
    _ = [];
  function _(_) {
    return (
      _.push(_),
      function () {
        let _ = _.indexOf(_);
        _ !== -1 && _.splice(_, 1);
      }
    );
  }
  function _(_) {
    _.length && _.forEach((_) => _(_));
  }
  function _(_) {
    return _.draggables[_] || null;
  }
  function _(_) {
    let _ = _(_);
    return !_ && _(!1), _;
  }
  let _ = {
    register: (_) => {
      (_.draggables[_.descriptor._] = _),
        _({
          type: `ADDITION`,
          value: _,
        });
    },
    update: (_, _) => {
      let _ = _.draggables[_.descriptor._];
      _ &&
        _.uniqueId === _.uniqueId &&
        (delete _.draggables[_.descriptor._],
        (_.draggables[_.descriptor._] = _));
    },
    unregister: (_) => {
      let _ = _.descriptor._,
        _ = _(_);
      _ &&
        _.uniqueId === _.uniqueId &&
        (delete _.draggables[_],
        _.droppables[_.descriptor.droppableId] &&
          _({
            type: `REMOVAL`,
            value: _,
          }));
    },
    getById: _,
    findById: _,
    exists: (_) => !!_(_),
    getAllByType: (_) =>
      Object.values(_.draggables).filter((_) => _.descriptor.type === _),
  };
  function _(_) {
    return _.droppables[_] || null;
  }
  function _(_) {
    let _ = _(_);
    return !_ && _(!1), _;
  }
  let _ = {
    register: (_) => {
      _.droppables[_.descriptor._] = _;
    },
    unregister: (_) => {
      let _ = _(_.descriptor._);
      _ && _.uniqueId === _.uniqueId && delete _.droppables[_.descriptor._];
    },
    getById: _,
    findById: _,
    exists: (_) => !!_(_),
    getAllByType: (_) =>
      Object.values(_.droppables).filter((_) => _.descriptor.type === _),
  };
  function _() {
    (_.draggables = {}), (_.droppables = {}), (_.length = 0);
  }
  return {
    draggable: _,
    droppable: _,
    subscribe: _,
    clean: _,
  };
}
function _() {
  let _ = _(_, []);
  return (
    (0, _.useEffect)(
      () =>
        function () {
          _.clean();
        },
      [_],
    ),
    _
  );
}
var _ = _.createContext(null),
  _ = () => {
    let _ = document.body;
    return !_ && _(!1), _;
  },
  _ = {
    position: `absolute`,
    width: `1px`,
    height: `1px`,
    margin: `-1px`,
    border: `0`,
    padding: `0`,
    overflow: `hidden`,
    clip: `rect(0 0 0 0)`,
    "clip-path": `inset(100%)`,
  },
  _ = (_) => `rfd-announcement-${_}`;
function _(_) {
  let _ = _(() => _(_), [_]),
    _ = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(
      function () {
        let _ = document.createElement(`div`);
        return (
          (_.current = _),
          (_._ = _),
          _.setAttribute(`aria-live`, `assertive`),
          _.setAttribute(`aria-atomic`, `true`),
          _(_.style, _),
          _().appendChild(_),
          function () {
            setTimeout(function () {
              let _ = _();
              _.contains(_) && _.removeChild(_),
                _ === _.current && (_.current = null);
            });
          }
        );
      },
      [_],
    ),
    _((_) => {
      let _ = _.current;
      if (_) {
        _.textContent = _;
        return;
      }
    }, [])
  );
}
var _ = 0,
  _ = {
    separator: `::`,
  };
function _(_, _ = _) {
  return _(() => `${_}${_.separator}${_++}`, [_.separator, _]);
}
function _(_, _ = _) {
  let _ = _.useId();
  return _(() => `${_}${_.separator}${_}`, [_.separator, _, _]);
}
var _ = `useId` in _.default ? _ : _;
function _({ contextId: _, uniqueId: _ }) {
  return `rfd-hidden-text-${_}-${_}`;
}
function _({ contextId: _, text: _ }) {
  let _ = _(`hidden-text`, {
      separator: `-`,
    }),
    _ = _(
      () =>
        _({
          contextId: _,
          uniqueId: _,
        }),
      [_, _],
    );
  return (
    (0, _.useEffect)(
      function () {
        let _ = document.createElement(`div`);
        return (
          (_._ = _),
          (_.textContent = _),
          (_.style.display = `none`),
          _().appendChild(_),
          function () {
            let _ = _();
            _.contains(_) && _.removeChild(_);
          }
        );
      },
      [_, _],
    ),
    _
  );
}
var _ = _.createContext(null);
function _(_) {
  let _ = (0, _.useRef)(_);
  return (
    (0, _.useEffect)(() => {
      _.current = _;
    }),
    _
  );
}
function _() {
  let _ = null;
  function _() {
    return !!_;
  }
  function _(_) {
    return _ === _;
  }
  function _(_) {
    _ && _(!1);
    let _ = {
      abandon: _,
    };
    return (_ = _), _;
  }
  function _() {
    !_ && _(!1), (_ = null);
  }
  function _() {
    _ && (_.abandon(), _());
  }
  return {
    isClaimed: _,
    isActive: _,
    claim: _,
    release: _,
    tryAbandon: _,
  };
}
function _(_) {
  return _.phase === `IDLE` || _.phase === `DROP_ANIMATING` ? !1 : _.isDragging;
}
var _ = 9,
  _ = 13,
  _ = 27,
  _ = 32,
  _ = 33,
  _ = 34,
  _ = 35,
  _ = 36,
  _ = 37,
  _ = 38,
  _ = 39,
  _ = 40,
  _ = {
    [_]: !0,
    [_]: !0,
  },
  _ = (_) => {
    _[_.keyCode] && _.preventDefault();
  },
  _ = (() => {
    let _ = `visibilitychange`;
    return typeof document > `u`
      ? _
      : [_, `ms${_}`, `webkit${_}`, `moz${_}`, `o${_}`].find(
          (_) => `on${_}` in document,
        ) || _;
  })(),
  _ = 0,
  _ = 5;
function _(_, _) {
  return Math.abs(_._ - _._) >= _ || Math.abs(_._ - _._) >= _;
}
var _ = {
  type: `IDLE`,
};
function _({ cancel: _, completed: _, getPhase: _, setPhase: _ }) {
  return [
    {
      eventName: `mousemove`,
      _: (_) => {
        let { button: _, clientX: _, clientY: _ } = _;
        if (_ !== _) return;
        let _ = {
            _: _,
            _: _,
          },
          _ = _();
        if (_.type === `DRAGGING`) {
          _.preventDefault(), _.actions.move(_);
          return;
        }
        _.type !== `PENDING` && _(!1);
        let _ = _.point;
        _(_, _) &&
          (_.preventDefault(),
          _({
            type: `DRAGGING`,
            actions: _.actions.fluidLift(_),
          }));
      },
    },
    {
      eventName: `mouseup`,
      _: (_) => {
        let _ = _();
        if (_.type !== `DRAGGING`) {
          _();
          return;
        }
        _.preventDefault(),
          _.actions.drop({
            shouldBlockNextClick: !0,
          }),
          _();
      },
    },
    {
      eventName: `mousedown`,
      _: (_) => {
        _().type === `DRAGGING` && _.preventDefault(), _();
      },
    },
    {
      eventName: `keydown`,
      _: (_) => {
        if (_().type === `PENDING`) {
          _();
          return;
        }
        if (_.keyCode === _) {
          _.preventDefault(), _();
          return;
        }
        _(_);
      },
    },
    {
      eventName: `resize`,
      _: _,
    },
    {
      eventName: `scroll`,
      options: {
        passive: !0,
        capture: !1,
      },
      _: () => {
        _().type === `PENDING` && _();
      },
    },
    {
      eventName: `webkitmouseforcedown`,
      _: (_) => {
        let _ = _();
        if ((_.type === `IDLE` && _(!1), _.actions.shouldRespectForcePress())) {
          _();
          return;
        }
        _.preventDefault();
      },
    },
    {
      eventName: _,
      _: _,
    },
  ];
}
function _(_) {
  let _ = (0, _.useRef)(_),
    _ = (0, _.useRef)(_),
    _ = _(
      () => ({
        eventName: `mousedown`,
        _: function (_) {
          if (
            _.defaultPrevented ||
            _.button !== _ ||
            _.ctrlKey ||
            _.metaKey ||
            _.shiftKey ||
            _.altKey
          )
            return;
          let _ = _.findClosestDraggableId(_);
          if (!_) return;
          let _ = _.tryGetLock(_, _, {
            sourceEvent: _,
          });
          if (!_) return;
          _.preventDefault();
          let _ = {
            _: _.clientX,
            _: _.clientY,
          };
          _.current(), _(_, _);
        },
      }),
      [_],
    ),
    _ = _(
      () => ({
        eventName: `webkitmouseforcewillbegin`,
        _: (_) => {
          if (_.defaultPrevented) return;
          let _ = _.findClosestDraggableId(_);
          if (!_) return;
          let _ = _.findOptionsForDraggable(_);
          _ &&
            (_.shouldRespectForcePress ||
              (_.canGetLock(_) && _.preventDefault()));
        },
      }),
      [_],
    ),
    _ = _(
      function () {
        _.current = _(window, [_, _], {
          passive: !1,
          capture: !0,
        });
      },
      [_, _],
    ),
    _ = _(() => {
      _.current.type !== `IDLE` && ((_.current = _), _.current(), _());
    }, [_]),
    _ = _(() => {
      let _ = _.current;
      _(),
        _.type === `DRAGGING` &&
          _.actions.cancel({
            shouldBlockNextClick: !0,
          }),
        _.type === `PENDING` && _.actions.abort();
    }, [_]),
    _ = _(
      function () {
        let _ = {
            capture: !0,
            passive: !1,
          },
          _ = _({
            cancel: _,
            completed: _,
            getPhase: () => _.current,
            setPhase: (_) => {
              _.current = _;
            },
          });
        _.current = _(window, _, _);
      },
      [_, _],
    ),
    _ = _(
      function (_, _) {
        _.current.type !== `IDLE` && _(!1),
          (_.current = {
            type: `PENDING`,
            point: _,
            actions: _,
          }),
          _();
      },
      [_],
    );
  _(
    function () {
      return (
        _(),
        function () {
          _.current();
        }
      );
    },
    [_],
  );
}
function _() {}
var _ = {
  [_]: !0,
  [_]: !0,
  [_]: !0,
  [_]: !0,
};
function _(_, _) {
  function _() {
    _(), _.cancel();
  }
  function _() {
    _(), _.drop();
  }
  return [
    {
      eventName: `keydown`,
      _: (_) => {
        if (_.keyCode === _) {
          _.preventDefault(), _();
          return;
        }
        if (_.keyCode === _) {
          _.preventDefault(), _();
          return;
        }
        if (_.keyCode === _) {
          _.preventDefault(), _.moveDown();
          return;
        }
        if (_.keyCode === _) {
          _.preventDefault(), _.moveUp();
          return;
        }
        if (_.keyCode === _) {
          _.preventDefault(), _.moveRight();
          return;
        }
        if (_.keyCode === _) {
          _.preventDefault(), _.moveLeft();
          return;
        }
        if (_[_.keyCode]) {
          _.preventDefault();
          return;
        }
        _(_);
      },
    },
    {
      eventName: `mousedown`,
      _: _,
    },
    {
      eventName: `mouseup`,
      _: _,
    },
    {
      eventName: `click`,
      _: _,
    },
    {
      eventName: `touchstart`,
      _: _,
    },
    {
      eventName: `resize`,
      _: _,
    },
    {
      eventName: `wheel`,
      _: _,
      options: {
        passive: !0,
      },
    },
    {
      eventName: _,
      _: _,
    },
  ];
}
function _(_) {
  let _ = (0, _.useRef)(_),
    _ = _(
      () => ({
        eventName: `keydown`,
        _: function (_) {
          if (_.defaultPrevented || _.keyCode !== _) return;
          let _ = _.findClosestDraggableId(_);
          if (!_) return;
          let _ = _.tryGetLock(_, _, {
            sourceEvent: _,
          });
          if (!_) return;
          _.preventDefault();
          let _ = !0,
            _ = _.snapLift();
          _.current();
          function _() {
            !_ && _(!1), (_ = !1), _.current(), _();
          }
          _.current = _(window, _(_, _), {
            capture: !0,
            passive: !1,
          });
        },
      }),
      [_],
    ),
    _ = _(
      function () {
        _.current = _(window, [_], {
          passive: !1,
          capture: !0,
        });
      },
      [_],
    );
  _(
    function () {
      return (
        _(),
        function () {
          _.current();
        }
      );
    },
    [_],
  );
}
var _ = {
    type: `IDLE`,
  },
  _ = 120,
  _ = 0.15;
function _({ cancel: _, getPhase: _ }) {
  return [
    {
      eventName: `orientationchange`,
      _: _,
    },
    {
      eventName: `resize`,
      _: _,
    },
    {
      eventName: `contextmenu`,
      _: (_) => {
        _.preventDefault();
      },
    },
    {
      eventName: `keydown`,
      _: (_) => {
        if (_().type !== `DRAGGING`) {
          _();
          return;
        }
        _.keyCode === _ && _.preventDefault(), _();
      },
    },
    {
      eventName: _,
      _: _,
    },
  ];
}
function _({ cancel: _, completed: _, getPhase: _ }) {
  return [
    {
      eventName: `touchmove`,
      options: {
        capture: !1,
      },
      _: (_) => {
        let _ = _();
        if (_.type !== `DRAGGING`) {
          _();
          return;
        }
        _.hasMoved = !0;
        let { clientX: _, clientY: _ } = _.touches[0],
          _ = {
            _: _,
            _: _,
          };
        _.preventDefault(), _.actions.move(_);
      },
    },
    {
      eventName: `touchend`,
      _: (_) => {
        let _ = _();
        if (_.type !== `DRAGGING`) {
          _();
          return;
        }
        _.preventDefault(),
          _.actions.drop({
            shouldBlockNextClick: !0,
          }),
          _();
      },
    },
    {
      eventName: `touchcancel`,
      _: (_) => {
        if (_().type !== `DRAGGING`) {
          _();
          return;
        }
        _.preventDefault(), _();
      },
    },
    {
      eventName: `touchforcechange`,
      _: (_) => {
        let _ = _();
        _.type === `IDLE` && _(!1);
        let _ = _.touches[0];
        if (!_ || !(_.force >= _)) return;
        let _ = _.actions.shouldRespectForcePress();
        if (_.type === `PENDING`) {
          _ && _();
          return;
        }
        if (_) {
          if (_.hasMoved) {
            _.preventDefault();
            return;
          }
          _();
          return;
        }
        _.preventDefault();
      },
    },
    {
      eventName: _,
      _: _,
    },
  ];
}
function _(_) {
  let _ = (0, _.useRef)(_),
    _ = (0, _.useRef)(_),
    _ = _(function () {
      return _.current;
    }, []),
    _ = _(function (_) {
      _.current = _;
    }, []),
    _ = _(
      () => ({
        eventName: `touchstart`,
        _: function (_) {
          if (_.defaultPrevented) return;
          let _ = _.findClosestDraggableId(_);
          if (!_) return;
          let _ = _.tryGetLock(_, _, {
            sourceEvent: _,
          });
          if (!_) return;
          let { clientX: _, clientY: _ } = _.touches[0],
            _ = {
              _: _,
              _: _,
            };
          _.current(), _(_, _);
        },
      }),
      [_],
    ),
    _ = _(
      function () {
        _.current = _(window, [_], {
          capture: !0,
          passive: !1,
        });
      },
      [_],
    ),
    _ = _(() => {
      let _ = _.current;
      _.type !== `IDLE` &&
        (_.type === `PENDING` && clearTimeout(_.longPressTimerId),
        _(_),
        _.current(),
        _());
    }, [_, _]),
    _ = _(() => {
      let _ = _.current;
      _(),
        _.type === `DRAGGING` &&
          _.actions.cancel({
            shouldBlockNextClick: !0,
          }),
        _.type === `PENDING` && _.actions.abort();
    }, [_]),
    _ = _(
      function () {
        let _ = {
            capture: !0,
            passive: !1,
          },
          _ = {
            cancel: _,
            completed: _,
            getPhase: _,
          },
          _ = _(window, _(_), _),
          _ = _(window, _(_), _);
        _.current = function () {
          _(), _();
        };
      },
      [_, _, _],
    ),
    _ = _(
      function () {
        let _ = _();
        _.type !== `PENDING` && _(!1);
        let _ = _.actions.fluidLift(_.point);
        _({
          type: `DRAGGING`,
          actions: _,
          hasMoved: !1,
        });
      },
      [_, _],
    ),
    _ = _(
      function (_, _) {
        _().type !== `IDLE` && _(!1);
        let _ = setTimeout(_, _);
        _({
          type: `PENDING`,
          point: _,
          actions: _,
          longPressTimerId: _,
        }),
          _();
      },
      [_, _, _, _],
    );
  _(
    function () {
      return (
        _(),
        function () {
          _.current();
          let _ = _();
          _.type === `PENDING` && (clearTimeout(_.longPressTimerId), _(_));
        }
      );
    },
    [_, _, _],
  ),
    _(function () {
      return _(window, [
        {
          eventName: `touchmove`,
          _: () => {},
          options: {
            capture: !1,
            passive: !1,
          },
        },
      ]);
    }, []);
}
var _ = [
  `input`,
  `button`,
  `textarea`,
  `select`,
  `option`,
  `optgroup`,
  `video`,
  `audio`,
];
function _(_, _) {
  if (_ == null) return !1;
  if (_.includes(_.tagName.toLowerCase())) return !0;
  let _ = _.getAttribute(`contenteditable`);
  return _ === `true` || _ === `` || (_ !== _ && _(_, _.parentElement));
}
function _(_, _) {
  let _ = _.target;
  return _(_) ? _(_, _) : !1;
}
var _ = (_) => _(_.getBoundingClientRect()).center;
function _(_) {
  return _ instanceof _(_).Element;
}
var _ = (() => {
  let _ = `matches`;
  return typeof document > `u`
    ? _
    : [_, `msMatchesSelector`, `webkitMatchesSelector`].find(
        (_) => _ in Element.prototype,
      ) || _;
})();
function _(_, _) {
  return _ == null ? null : _[_](_) ? _ : _(_.parentElement, _);
}
function _(_, _) {
  return _.closest ? _.closest(_) : _(_, _);
}
function _(_) {
  return `[${_.contextId}="${_}"]`;
}
function _(_, _) {
  let _ = _.target;
  if (!_(_)) return null;
  let _ = _(_, _(_));
  return !_ || !_(_) ? null : _;
}
function _(_, _) {
  let _ = _(_, _);
  return _ ? _.getAttribute(_.draggableId) : null;
}
function _(_, _) {
  let _ = `[${_.contextId}="${_}"]`,
    _ = _(document, _).find((_) => _.getAttribute(_._) === _);
  return !_ || !_(_) ? null : _;
}
function _(_) {
  _.preventDefault();
}
function _({ expected: _, phase: _, isLockActive: _, shouldWarn: _ }) {
  return !(!_() || _ !== _);
}
function _({ lockAPI: _, store: _, registry: _, draggableId: _ }) {
  if (_.isClaimed()) return !1;
  let _ = _.draggable.findById(_);
  return !(!_ || !_.options.isEnabled || !_(_.getState(), _));
}
function _({
  lockAPI: _,
  contextId: _,
  store: _,
  registry: _,
  draggableId: _,
  forceSensorStop: _,
  sourceEvent: _,
}) {
  if (
    !_({
      lockAPI: _,
      store: _,
      registry: _,
      draggableId: _,
    })
  )
    return null;
  let _ = _.draggable.getById(_),
    _ = _(_, _.descriptor._);
  if (!_ || (_ && !_.options.canDragInteractiveElements && _(_, _)))
    return null;
  let _ = _.claim(_ || _),
    _ = `PRE_DRAG`;
  function _() {
    return _.options.shouldRespectForcePress;
  }
  function _() {
    return _.isActive(_);
  }
  function _(_, _) {
    _({
      expected: _,
      phase: _,
      isLockActive: _,
      shouldWarn: !0,
    }) && _.dispatch(_());
  }
  let _ = _.bind(null, `DRAGGING`);
  function _(_) {
    function _() {
      _.release(), (_ = `COMPLETED`);
    }
    _ !== `PRE_DRAG` && (_(), _(!1)),
      _.dispatch(_(_.liftActionArgs)),
      (_ = `DRAGGING`);
    function _(
      _,
      _ = {
        shouldBlockNextClick: !1,
      },
    ) {
      if ((_.cleanup(), _.shouldBlockNextClick)) {
        let _ = _(window, [
          {
            eventName: `click`,
            _: _,
            options: {
              once: !0,
              passive: !1,
              capture: !0,
            },
          },
        ]);
        setTimeout(_);
      }
      _(),
        _.dispatch(
          _({
            reason: _,
          }),
        );
    }
    return {
      isActive: () =>
        _({
          expected: `DRAGGING`,
          phase: _,
          isLockActive: _,
          shouldWarn: !1,
        }),
      shouldRespectForcePress: _,
      drop: (_) => _(`DROP`, _),
      cancel: (_) => _(`CANCEL`, _),
      ..._.actions,
    };
  }
  function _(_) {
    let _ = _((_) => {
      _(() =>
        _({
          client: _,
        }),
      );
    });
    return {
      ..._({
        liftActionArgs: {
          _: _,
          clientSelection: _,
          movementMode: `FLUID`,
        },
        cleanup: () => _.cancel(),
        actions: {
          move: _,
        },
      }),
      move: _,
    };
  }
  function _() {
    return _({
      liftActionArgs: {
        _: _,
        clientSelection: _(_),
        movementMode: `SNAP`,
      },
      cleanup: _,
      actions: {
        moveUp: () => _(_),
        moveRight: () => _(_),
        moveDown: () => _(_),
        moveLeft: () => _(_),
      },
    });
  }
  function _() {
    _({
      expected: `PRE_DRAG`,
      phase: _,
      isLockActive: _,
      shouldWarn: !0,
    }) && _.release();
  }
  return {
    isActive: () =>
      _({
        expected: `PRE_DRAG`,
        phase: _,
        isLockActive: _,
        shouldWarn: !1,
      }),
    shouldRespectForcePress: _,
    fluidLift: _,
    snapLift: _,
    abort: _,
  };
}
var _ = [_, _, _];
function _({
  contextId: _,
  store: _,
  registry: _,
  customSensors: _,
  enableDefaultSensors: _,
}) {
  let _ = [...(_ ? _ : []), ...(_ || [])],
    _ = (0, _.useState)(() => _())[0],
    _ = _(
      function (_, _) {
        _(_) && !_(_) && _.tryAbandon();
      },
      [_],
    );
  _(
    function () {
      let _ = _.getState();
      return _.subscribe(() => {
        let _ = _.getState();
        _(_, _), (_ = _);
      });
    },
    [_, _, _],
  ),
    _(() => _.tryAbandon, [_.tryAbandon]);
  let _ = _(
      (_) =>
        _({
          lockAPI: _,
          registry: _,
          store: _,
          draggableId: _,
        }),
      [_, _, _],
    ),
    _ = _(
      (_, _, _) =>
        _({
          lockAPI: _,
          registry: _,
          contextId: _,
          store: _,
          draggableId: _,
          forceSensorStop: _ || null,
          sourceEvent: _ && _.sourceEvent ? _.sourceEvent : null,
        }),
      [_, _, _, _],
    ),
    _ = _((_) => _(_, _), [_]),
    _ = _(
      (_) => {
        let _ = _.draggable.findById(_);
        return _ ? _.options : null;
      },
      [_.draggable],
    ),
    _ = _(
      function () {
        _.isClaimed() &&
          (_.tryAbandon(), _.getState().phase !== `IDLE` && _.dispatch(_()));
      },
      [_, _],
    ),
    _ = _(() => _.isClaimed(), [_]),
    _ = _(
      () => ({
        canGetLock: _,
        tryGetLock: _,
        findClosestDraggableId: _,
        findOptionsForDraggable: _,
        tryReleaseLock: _,
        isLockClaimed: _,
      }),
      [_, _, _, _, _, _],
    );
  for (let _ = 0; _ < _.length; _++) _[_](_);
}
var _ = (_) => ({
    onBeforeCapture: (_) => {
      (0, _.flushSync)(() => {
        _.onBeforeCapture && _.onBeforeCapture(_);
      });
    },
    onBeforeDragStart: _.onBeforeDragStart,
    onDragStart: _.onDragStart,
    onDragEnd: _.onDragEnd,
    onDragUpdate: _.onDragUpdate,
  }),
  _ = (_) => ({
    ..._,
    ..._.autoScrollerOptions,
    durationDampening: {
      ..._.durationDampening,
      ..._.autoScrollerOptions,
    },
  });
function _(_) {
  return !_.current && _(!1), _.current;
}
function _(_) {
  let {
      contextId: _,
      setCallbacks: _,
      sensors: _,
      nonce: _,
      dragHandleUsageInstructions: _,
    } = _,
    _ = (0, _.useRef)(null),
    _ = _(_),
    _ = _(() => _(_.current), [_]),
    _ = _(() => _(_.current), [_]),
    _ = _(_),
    _ = _({
      contextId: _,
      text: _,
    }),
    _ = _(_, _),
    _ = _((_) => {
      _(_).dispatch(_);
    }, []),
    _ = _(
      () =>
        _(
          {
            publishWhileDragging: _,
            updateDroppableScroll: _,
            updateDroppableIsEnabled: _,
            updateDroppableIsCombineEnabled: _,
            collectionStarting: _,
          },
          _,
        ),
      [_],
    ),
    _ = _(),
    _ = _(() => _(_, _), [_, _]),
    _ = _(
      () =>
        _({
          scrollWindow: _,
          scrollDroppable: _.scrollDroppable,
          getAutoScrollerOptions: _,
          ..._(
            {
              move: _,
            },
            _,
          ),
        }),
      [_.scrollDroppable, _, _],
    ),
    _ = _(_),
    _ = _(
      () =>
        _({
          announce: _,
          autoScroller: _,
          dimensionMarshal: _,
          focusMarshal: _,
          getResponders: _,
          styleMarshal: _,
        }),
      [_, _, _, _, _, _],
    );
  _.current = _;
  let _ = _(() => {
      let _ = _(_);
      _.getState().phase !== `IDLE` && _.dispatch(_());
    }, []),
    _ = _(() => {
      let _ = _(_).getState();
      return (
        _.phase === `DROP_ANIMATING` || (_.phase !== `IDLE` && _.isDragging)
      );
    }, []);
  _(
    _(
      () => ({
        isDragging: _,
        tryAbort: _,
      }),
      [_, _],
    ),
  );
  let _ = _((_) => _(_(_).getState(), _), []),
    _ = _(() => _(_(_).getState()), []),
    _ = _(
      () => ({
        marshal: _,
        focus: _,
        contextId: _,
        canLift: _,
        isMovementAllowed: _,
        dragHandleUsageInstructionsId: _,
        registry: _,
      }),
      [_, _, _, _, _, _, _],
    );
  return (
    _({
      contextId: _,
      store: _,
      registry: _,
      customSensors: _ || null,
      enableDefaultSensors: _.enableDefaultSensors !== !1,
    }),
    (0, _.useEffect)(() => _, [_]),
    _.createElement(
      _.Provider,
      {
        value: _,
      },
      _.createElement(
        _,
        {
          context: _,
          store: _,
        },
        _.children,
      ),
    )
  );
}
var _ = 0;
function _() {
  return _(() => `${_++}`, []);
}
function _() {
  return _.useId();
}
var _ = `useId` in _.default ? _ : _;
function _(_) {
  let _ = _(),
    _ = _.dragHandleUsageInstructions || _.dragHandleUsageInstructions;
  return _.createElement(_, null, (_) =>
    _.createElement(
      _,
      {
        nonce: _.nonce,
        contextId: _,
        setCallbacks: _,
        dragHandleUsageInstructions: _,
        enableDefaultSensors: _.enableDefaultSensors,
        sensors: _.sensors,
        onBeforeCapture: _.onBeforeCapture,
        onBeforeDragStart: _.onBeforeDragStart,
        onDragStart: _.onDragStart,
        onDragUpdate: _.onDragUpdate,
        onDragEnd: _.onDragEnd,
        autoScrollerOptions: _.autoScrollerOptions,
      },
      _.children,
    ),
  );
}
var _ = {
    dragging: 5e3,
    dropAnimating: 4500,
  },
  _ = (_, _) => (_ ? _.drop(_.duration) : _ ? _.snap : _.fluid),
  _ = (_, _) => {
    if (_) return _ ? _.opacity.drop : _.opacity.combining;
  },
  _ = (_) =>
    _.forceShouldAnimate == null ? _.mode === `SNAP` : _.forceShouldAnimate;
function _(_) {
  let _ = _.dimension.client,
    { offset: _, combineWith: _, dropping: _ } = _,
    _ = !!_,
    _ = _(_),
    _ = !!_,
    _ = _ ? _.drop(_, _) : _.moveTo(_);
  return {
    position: `fixed`,
    top: _.marginBox.top,
    left: _.marginBox.left,
    boxSizing: `border-box`,
    width: _.borderBox.width,
    height: _.borderBox.height,
    transition: _(_, _),
    transform: _,
    opacity: _(_, _),
    zIndex: _ ? _.dropAnimating : _.dragging,
    pointerEvents: `none`,
  };
}
function _(_) {
  return {
    transform: _.moveTo(_.offset),
    transition: _.shouldAnimateDisplacement ? void 0 : `none`,
  };
}
function _(_) {
  return _.type === `DRAGGING` ? _(_) : _(_);
}
function _(_, _, _ = _) {
  let _ = window.getComputedStyle(_),
    _ = _.getBoundingClientRect(),
    _ = _(_, _),
    _ = _(_, _);
  return {
    descriptor: _,
    placeholder: {
      client: _,
      tagName: _.tagName.toLowerCase(),
      display: _.display,
    },
    displaceBy: {
      _: _.marginBox.width,
      _: _.marginBox.height,
    },
    client: _,
    page: _,
  };
}
function _(_) {
  let _ = _(`draggable`),
    {
      descriptor: _,
      registry: _,
      getDraggableRef: _,
      canDragInteractiveElements: _,
      shouldRespectForcePress: _,
      isEnabled: _,
    } = _,
    _ = _(
      () => ({
        canDragInteractiveElements: _,
        shouldRespectForcePress: _,
        isEnabled: _,
      }),
      [_, _, _],
    ),
    _ = _(
      (_) => {
        let _ = _();
        return !_ && _(!1), _(_, _, _);
      },
      [_, _],
    ),
    _ = _(
      () => ({
        uniqueId: _,
        descriptor: _,
        options: _,
        getDimension: _,
      }),
      [_, _, _, _],
    ),
    _ = (0, _.useRef)(_),
    _ = (0, _.useRef)(!0);
  _(
    () => (
      _.draggable.register(_.current), () => _.draggable.unregister(_.current)
    ),
    [_.draggable],
  ),
    _(() => {
      if (_.current) {
        _.current = !1;
        return;
      }
      let _ = _.current;
      (_.current = _), _.draggable.update(_, _);
    }, [_, _.draggable]);
}
var _ = _.createContext(null);
function _(_) {
  let _ = (0, _.useContext)(_);
  return !_ && _(!1), _;
}
function _(_) {
  _.preventDefault();
}
var _ = (_) => {
    let _ = (0, _.useRef)(null),
      _ = _((_ = null) => {
        _.current = _;
      }, []),
      _ = _(() => _.current, []),
      { contextId: _, dragHandleUsageInstructionsId: _, registry: _ } = _(_),
      { type: _, droppableId: _ } = _(_),
      _ = _(
        () => ({
          _: _.draggableId,
          index: _.index,
          type: _,
          droppableId: _,
        }),
        [_.draggableId, _.index, _, _],
      ),
      {
        children: _,
        draggableId: _,
        isEnabled: _,
        shouldRespectForcePress: _,
        canDragInteractiveElements: _,
        isClone: _,
        mapped: _,
        dropAnimationFinished: _,
      } = _;
    _ ||
      _(
        _(
          () => ({
            descriptor: _,
            registry: _,
            getDraggableRef: _,
            canDragInteractiveElements: _,
            shouldRespectForcePress: _,
            isEnabled: _,
          }),
          [_, _, _, _, _, _],
        ),
      );
    let _ = _(
        () =>
          _
            ? {
                tabIndex: 0,
                role: `button`,
                "aria-describedby": _,
                "data-rfd-drag-handle-draggable-id": _,
                "data-rfd-drag-handle-context-id": _,
                draggable: !1,
                onDragStart: _,
              }
            : null,
        [_, _, _, _],
      ),
      _ = _(
        (_) => {
          _.type === `DRAGGING` &&
            _.dropping &&
            _.propertyName === `transform` &&
            (0, _.flushSync)(_);
        },
        [_, _],
      ),
      _ = _(() => {
        let _ = _(_),
          _ = _.type === `DRAGGING` && _.dropping ? _ : void 0;
        return {
          innerRef: _,
          draggableProps: {
            "data-rfd-draggable-context-id": _,
            "data-rfd-draggable-id": _,
            style: _,
            onTransitionEnd: _,
          },
          dragHandleProps: _,
        };
      }, [_, _, _, _, _, _]),
      _ = _(
        () => ({
          draggableId: _._,
          type: _.type,
          source: {
            index: _.index,
            droppableId: _.droppableId,
          },
        }),
        [_.droppableId, _._, _.index, _.type],
      );
    return _.createElement(_.Fragment, null, _(_, _.snapshot, _));
  },
  _ = (_, _) => _ === _,
  _ = (_) => {
    let { combine: _, destination: _ } = _;
    return _ ? _.droppableId : _ ? _.droppableId : null;
  },
  _ = (_) => (_.combine ? _.combine.draggableId : null),
  _ = (_) => (_._ && _._.type === `COMBINE` ? _._.combine.draggableId : null);
function _() {
  let _ = _((_, _) => ({
      _: _,
      _: _,
    })),
    _ = _((_, _, _ = null, _ = null, _ = null) => ({
      isDragging: !0,
      isClone: _,
      isDropAnimating: !!_,
      dropAnimation: _,
      mode: _,
      draggingOver: _,
      combineWith: _,
      combineTargetFor: null,
    })),
    _ = _((_, _, _, _, _ = null, _ = null, _ = null) => ({
      mapped: {
        type: `DRAGGING`,
        dropping: null,
        draggingOver: _,
        combineWith: _,
        mode: _,
        offset: _,
        dimension: _,
        forceShouldAnimate: _,
        snapshot: _(_, _, _, _, null),
      },
    }));
  return (_, _) => {
    if (_(_)) {
      if (_.critical.draggable._ !== _.draggableId) return null;
      let _ = _.current.client.offset,
        _ = _.dimensions.draggables[_.draggableId],
        _ = _(_.impact),
        _ = _(_.impact),
        _ = _.forceShouldAnimate;
      return _(_(_._, _._), _.movementMode, _, _.isClone, _, _, _);
    }
    if (_.phase === `DROP_ANIMATING`) {
      let _ = _.completed;
      if (_.result.draggableId !== _.draggableId) return null;
      let _ = _.isClone,
        _ = _.dimensions.draggables[_.draggableId],
        _ = _.result,
        _ = _.mode,
        _ = _(_),
        _ = _(_),
        _ = {
          duration: _.dropDuration,
          curve: _.drop,
          moveTo: _.newHomeClientOffset,
          opacity: _ ? _.opacity.drop : null,
          scale: _ ? _.scale.drop : null,
        };
      return {
        mapped: {
          type: `DRAGGING`,
          offset: _.newHomeClientOffset,
          dimension: _,
          dropping: _,
          draggingOver: _,
          combineWith: _,
          mode: _,
          forceShouldAnimate: null,
          snapshot: _(_, _, _, _, _),
        },
      };
    }
    return null;
  };
}
function _(_ = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: _,
    combineWith: null,
  };
}
var _ = {
  mapped: {
    type: `SECONDARY`,
    offset: _,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: _(null),
  },
};
function _() {
  let _ = _((_, _) => ({
      _: _,
      _: _,
    })),
    _ = _(_),
    _ = _((_, _ = null, _) => ({
      mapped: {
        type: `SECONDARY`,
        offset: _,
        combineTargetFor: _,
        shouldAnimateDisplacement: _,
        snapshot: _(_),
      },
    })),
    _ = (_) => (_ ? _(_, _, !0) : null),
    _ = (_, _, _, _) => {
      let _ = _.displaced.visible[_],
        _ = !!(_.inVirtualList && _.effected[_]),
        _ = _(_),
        _ = _ && _.draggableId === _ ? _ : null;
      if (!_) {
        if (!_) return _(_);
        if (_.displaced.invisible[_]) return null;
        let _ = _(_.displacedBy.point),
          _ = _(_._, _._);
        return _(_, _, !0);
      }
      if (_) return _(_);
      let _ = _.displacedBy.point,
        _ = _(_._, _._);
      return _(_, _, _.shouldAnimate);
    };
  return (_, _) => {
    if (_(_))
      return _.critical.draggable._ === _.draggableId
        ? null
        : _(_.draggableId, _.critical.draggable._, _.impact, _.afterCritical);
    if (_.phase === `DROP_ANIMATING`) {
      let _ = _.completed;
      return _.result.draggableId === _.draggableId
        ? null
        : _(_.draggableId, _.result.draggableId, _.impact, _.afterCritical);
    }
    return null;
  };
}
var _ = _(
  () => {
    let _ = _(),
      _ = _();
    return (_, _) => _(_, _) || _(_, _) || _;
  },
  {
    dropAnimationFinished: _,
  },
  null,
  {
    context: _,
    areStatePropsEqual: _,
  },
)(_);
function _(_) {
  return _(_).isUsingCloneFor === _.draggableId && !_.isClone
    ? null
    : _.createElement(_, _);
}
function _(_) {
  let _ = typeof _.isDragDisabled != `boolean` || !_.isDragDisabled,
    _ = !!_.disableInteractiveElementBlocking,
    _ = !!_.shouldRespectForcePress;
  return _.createElement(
    _,
    _({}, _, {
      isClone: !1,
      isEnabled: _,
      canDragInteractiveElements: _,
      shouldRespectForcePress: _,
    }),
  );
}
var _ = (_) => (_) => _ === _,
  _ = _(`scroll`),
  _ = _(`auto`),
  _ = (_, _) => _(_.overflowX) || _(_.overflowY),
  _ = (_) => {
    let _ = window.getComputedStyle(_),
      _ = {
        overflowX: _.overflowX,
        overflowY: _.overflowY,
      };
    return _(_, _) || _(_, _);
  },
  _ = () => !1,
  _ = (_) =>
    _ == null
      ? null
      : _ === document.body
        ? _()
          ? _
          : null
        : _ === document.documentElement
          ? null
          : _(_)
            ? _
            : _(_.parentElement),
  _ = (_) => ({
    _: _.scrollLeft,
    _: _.scrollTop,
  }),
  _ = (_) =>
    _
      ? window.getComputedStyle(_).position === `fixed` || _(_.parentElement)
      : !1,
  _ = (_) => ({
    closestScrollable: _(_),
    isFixedOnPage: _(_),
  }),
  _ = ({
    descriptor: _,
    isEnabled: _,
    isCombineEnabled: _,
    isFixedOnPage: _,
    direction: _,
    client: _,
    page: _,
    closest: _,
  }) => {
    let _ = (() => {
        if (!_) return null;
        let { scrollSize: _, client: _ } = _,
          _ = _({
            scrollHeight: _.scrollHeight,
            scrollWidth: _.scrollWidth,
            height: _.paddingBox.height,
            width: _.paddingBox.width,
          });
        return {
          pageMarginBox: _.page.marginBox,
          frameClient: _,
          scrollSize: _,
          shouldClipSubject: _.shouldClipSubject,
          scroll: {
            initial: _.scroll,
            current: _.scroll,
            max: _,
            diff: {
              value: _,
              displacement: _,
            },
          },
        };
      })(),
      _ = _ === `vertical` ? _ : _;
    return {
      descriptor: _,
      isCombineEnabled: _,
      isFixedOnPage: _,
      axis: _,
      isEnabled: _,
      client: _,
      page: _,
      frame: _,
      subject: _({
        page: _,
        withPlaceholder: null,
        axis: _,
        frame: _,
      }),
    };
  },
  _ = (_, _) => {
    let _ = _(_);
    if (!_ || _ !== _) return _;
    let _ = _.paddingBox.top - _.scrollTop,
      _ = _.paddingBox.left - _.scrollLeft,
      _ = _ + _.scrollHeight,
      _ = {
        top: _,
        right: _ + _.scrollWidth,
        bottom: _,
        left: _,
      },
      _ = _(_, _.border);
    return _({
      borderBox: _,
      margin: _.margin,
      border: _.border,
      padding: _.padding,
    });
  },
  _ = ({
    ref: _,
    descriptor: _,
    env: _,
    windowScroll: _,
    direction: _,
    isDropDisabled: _,
    isCombineEnabled: _,
    shouldClipSubject: _,
  }) => {
    let _ = _.closestScrollable,
      _ = _(_, _),
      _ = _(_, _),
      _ = (() => {
        if (!_) return null;
        let _ = _(_),
          _ = {
            scrollHeight: _.scrollHeight,
            scrollWidth: _.scrollWidth,
          };
        return {
          client: _,
          page: _(_, _),
          scroll: _(_),
          scrollSize: _,
          shouldClipSubject: _,
        };
      })();
    return _({
      descriptor: _,
      isEnabled: !_,
      isCombineEnabled: _,
      isFixedOnPage: _.isFixedOnPage,
      direction: _,
      client: _,
      page: _,
      closest: _,
    });
  },
  _ = {
    passive: !1,
  },
  _ = {
    passive: !0,
  },
  _ = (_) => (_.shouldPublishImmediately ? _ : _),
  _ = (_) => (_ && _.env.closestScrollable) || null;
function _(_) {
  let _ = (0, _.useRef)(null),
    _ = _(_),
    _ = _(`droppable`),
    { registry: _, marshal: _ } = _,
    _ = _(_),
    _ = _(
      () => ({
        _: _.droppableId,
        type: _.type,
        mode: _.mode,
      }),
      [_.droppableId, _.mode, _.type],
    ),
    _ = (0, _.useRef)(_),
    _ = _(
      () =>
        _((_, _) => {
          !_.current && _(!1);
          let _ = {
            _: _,
            _: _,
          };
          _.updateDroppableScroll(_._, _);
        }),
      [_._, _],
    ),
    _ = _(() => {
      let _ = _.current;
      return !_ || !_.env.closestScrollable ? _ : _(_.env.closestScrollable);
    }, []),
    _ = _(() => {
      let _ = _();
      _(_._, _._);
    }, [_, _]),
    _ = _(() => _(_), [_]),
    _ = _(() => {
      let _ = _.current,
        _ = _(_);
      if ((!(_ && _) && _(!1), _.scrollOptions.shouldPublishImmediately)) {
        _();
        return;
      }
      _();
    }, [_, _]),
    _ = _(
      (_, _) => {
        _.current && _(!1);
        let _ = _.current,
          _ = _.getDroppableRef();
        !_ && _(!1);
        let _ = _(_),
          _ = {
            ref: _,
            descriptor: _,
            env: _,
            scrollOptions: _,
          };
        _.current = _;
        let _ = _({
            ref: _,
            descriptor: _,
            env: _,
            windowScroll: _,
            direction: _.direction,
            isDropDisabled: _.isDropDisabled,
            isCombineEnabled: _.isCombineEnabled,
            shouldClipSubject: !_.ignoreContainerClipping,
          }),
          _ = _.closestScrollable;
        return (
          _ &&
            (_.setAttribute(_.contextId, _.contextId),
            _.addEventListener(`scroll`, _, _(_.scrollOptions))),
          _
        );
      },
      [_.contextId, _, _, _],
    ),
    _ = _(() => {
      let _ = _.current,
        _ = _(_);
      return !(_ && _) && _(!1), _(_);
    }, []),
    _ = _(() => {
      let _ = _.current;
      !_ && _(!1);
      let _ = _(_);
      (_.current = null),
        _ &&
          (_.cancel(),
          _.removeAttribute(_.contextId),
          _.removeEventListener(`scroll`, _, _(_.scrollOptions)));
    }, [_, _]),
    _ = _((_) => {
      let _ = _.current;
      !_ && _(!1);
      let _ = _(_);
      !_ && _(!1), (_.scrollTop += _._), (_.scrollLeft += _._);
    }, []),
    _ = _(
      () => ({
        getDimensionAndWatchScroll: _,
        getScrollWhileDragging: _,
        dragStopped: _,
        scroll: _,
      }),
      [_, _, _, _],
    ),
    _ = _(
      () => ({
        uniqueId: _,
        descriptor: _,
        callbacks: _,
      }),
      [_, _, _],
    );
  _(
    () => (
      (_.current = _.descriptor),
      _.droppable.register(_),
      () => {
        _.current && _(), _.droppable.unregister(_);
      }
    ),
    [_, _, _, _, _, _.droppable],
  ),
    _(() => {
      _.current && _.updateDroppableIsEnabled(_.current._, !_.isDropDisabled);
    }, [_.isDropDisabled, _]),
    _(() => {
      _.current &&
        _.updateDroppableIsCombineEnabled(_.current._, _.isCombineEnabled);
    }, [_.isCombineEnabled, _]);
}
function _() {}
var _ = {
    width: 0,
    height: 0,
    margin: _,
  },
  _ = ({ isAnimatingOpenOnMount: _, placeholder: _, animate: _ }) =>
    _ || _ === `close`
      ? _
      : {
          height: _.client.borderBox.height,
          width: _.client.borderBox.width,
          margin: _.client.margin,
        },
  _ = ({ isAnimatingOpenOnMount: _, placeholder: _, animate: _ }) => {
    let _ = _({
      isAnimatingOpenOnMount: _,
      placeholder: _,
      animate: _,
    });
    return {
      display: _.display,
      boxSizing: `border-box`,
      width: _.width,
      height: _.height,
      marginTop: _.margin.top,
      marginRight: _.margin.right,
      marginBottom: _.margin.bottom,
      marginLeft: _.margin.left,
      flexShrink: `0`,
      flexGrow: `0`,
      pointerEvents: `none`,
      transition: _ === `none` ? null : _.placeholder,
    };
  },
  _ = _.memo((_) => {
    let _ = (0, _.useRef)(null),
      _ = _(() => {
        _.current &&= (clearTimeout(_.current), null);
      }, []),
      { animate: _, onTransitionEnd: _, onClose: _, contextId: _ } = _,
      [_, _] = (0, _.useState)(_.animate === `open`);
    (0, _.useEffect)(
      () =>
        _
          ? _ === `open`
            ? _.current
              ? _
              : ((_.current = setTimeout(() => {
                  (_.current = null), _(!1);
                })),
                _)
            : (_(), _(!1), _)
          : _,
      [_, _, _],
    );
    let _ = _(
        (_) => {
          _.propertyName === `height` && (_(), _ === `close` && _());
        },
        [_, _, _],
      ),
      _ = _({
        isAnimatingOpenOnMount: _,
        animate: _.animate,
        placeholder: _.placeholder,
      });
    return _.createElement(_.placeholder.tagName, {
      style: _,
      "data-rfd-placeholder-context-id": _,
      onTransitionEnd: _,
      ref: _.innerRef,
    });
  }),
  _ = class extends _.PureComponent {
    constructor(..._) {
      super(..._),
        (this.state = {
          isVisible: !!this.props._,
          data: this.props._,
          animate: this.props.shouldAnimate && this.props._ ? `open` : `none`,
        }),
        (this.onClose = () => {
          this.state.animate === `close` &&
            this.setState({
              isVisible: !1,
            });
        });
    }
    static getDerivedStateFromProps(_, _) {
      return _.shouldAnimate
        ? _._
          ? {
              isVisible: !0,
              data: _._,
              animate: `open`,
            }
          : _.isVisible
            ? {
                isVisible: !0,
                data: _.data,
                animate: `close`,
              }
            : {
                isVisible: !1,
                animate: `close`,
                data: null,
              }
        : {
            isVisible: !!_._,
            data: _._,
            animate: `none`,
          };
    }
    render() {
      if (!this.state.isVisible) return null;
      let _ = {
        onClose: this.onClose,
        data: this.state.data,
        animate: this.state.animate,
      };
      return this.props.children(_);
    }
  },
  _ = (_) => {
    let _ = (0, _.useContext)(_);
    !_ && _(!1);
    let { contextId: _, isMovementAllowed: _ } = _,
      _ = (0, _.useRef)(null),
      _ = (0, _.useRef)(null),
      {
        children: _,
        droppableId: _,
        type: _,
        mode: _,
        direction: _,
        ignoreContainerClipping: _,
        isDropDisabled: _,
        isCombineEnabled: _,
        snapshot: _,
        useClone: _,
        updateViewportMaxScroll: _,
        getContainerForClone: _,
      } = _,
      _ = _(() => _.current, []),
      _ = _((_ = null) => {
        _.current = _;
      }, []);
    _(() => _.current, []);
    let _ = _((_ = null) => {
        _.current = _;
      }, []),
      _ = _(() => {
        _() &&
          _({
            maxScroll: _(),
          });
      }, [_, _]);
    _({
      droppableId: _,
      type: _,
      mode: _,
      direction: _,
      isDropDisabled: _,
      isCombineEnabled: _,
      ignoreContainerClipping: _,
      getDroppableRef: _,
    });
    let _ = _(
        () =>
          _.createElement(
            _,
            {
              _: _.placeholder,
              shouldAnimate: _.shouldAnimatePlaceholder,
            },
            ({ onClose: _, data: _, animate: _ }) =>
              _.createElement(_, {
                placeholder: _,
                onClose: _,
                innerRef: _,
                animate: _,
                contextId: _,
                onTransitionEnd: _,
              }),
          ),
        [_, _, _.placeholder, _.shouldAnimatePlaceholder, _],
      ),
      _ = _(
        () => ({
          innerRef: _,
          placeholder: _,
          droppableProps: {
            "data-rfd-droppable-id": _,
            "data-rfd-droppable-context-id": _,
          },
        }),
        [_, _, _, _],
      ),
      _ = _ ? _.dragging.draggableId : null,
      _ = _(
        () => ({
          droppableId: _,
          type: _,
          isUsingCloneFor: _,
        }),
        [_, _, _],
      );
    function _() {
      if (!_) return null;
      let { dragging: _, render: _ } = _,
        _ = _.createElement(
          _,
          {
            draggableId: _.draggableId,
            index: _.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0,
          },
          (_, _) => _(_, _, _),
        );
      return _.createPortal(_, _());
    }
    return _.createElement(
      _.Provider,
      {
        value: _,
      },
      _(_, _),
      _(),
    );
  };
function _() {
  return !document.body && _(!1), document.body;
}
var _ = {
    mode: `standard`,
    type: `DEFAULT`,
    direction: `vertical`,
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: _,
  },
  _ = (_) => {
    let _ = {
        ..._,
      },
      _;
    for (_ in _)
      _[_] === void 0 &&
        (_ = {
          ..._,
          [_]: _[_],
        });
    return _;
  },
  _ = (_, _) => _ === _.droppable.type,
  _ = (_, _) => _.draggables[_.draggable._],
  _ = _(
    () => {
      let _ = {
          placeholder: null,
          shouldAnimatePlaceholder: !0,
          snapshot: {
            isDraggingOver: !1,
            draggingOverWith: null,
            draggingFromThisWith: null,
            isUsingPlaceholder: !1,
          },
          useClone: null,
        },
        _ = {
          ..._,
          shouldAnimatePlaceholder: !1,
        },
        _ = _((_) => ({
          draggableId: _._,
          type: _.type,
          source: {
            index: _.index,
            droppableId: _.droppableId,
          },
        })),
        _ = _((_, _, _, _, _, _) => {
          let _ = _.descriptor._;
          if (_.descriptor.droppableId === _) {
            let _ = _
                ? {
                    render: _,
                    dragging: _(_.descriptor),
                  }
                : null,
              _ = {
                isDraggingOver: _,
                draggingOverWith: _ ? _ : null,
                draggingFromThisWith: _,
                isUsingPlaceholder: !0,
              };
            return {
              placeholder: _.placeholder,
              shouldAnimatePlaceholder: !1,
              snapshot: _,
              useClone: _,
            };
          }
          if (!_) return _;
          if (!_) return _;
          let _ = {
            isDraggingOver: _,
            draggingOverWith: _,
            draggingFromThisWith: null,
            isUsingPlaceholder: !0,
          };
          return {
            placeholder: _.placeholder,
            shouldAnimatePlaceholder: !0,
            snapshot: _,
            useClone: null,
          };
        });
      return (_, _) => {
        let _ = _(_),
          _ = _.droppableId,
          _ = _.type,
          _ = !_.isDropDisabled,
          _ = _.renderClone;
        if (_(_)) {
          let _ = _.critical;
          if (!_(_, _)) return _;
          let _ = _(_, _.dimensions),
            _ = _(_.impact) === _;
          return _(_, _, _, _, _, _);
        }
        if (_.phase === `DROP_ANIMATING`) {
          let _ = _.completed;
          if (!_(_, _.critical)) return _;
          let _ = _(_.critical, _.dimensions);
          return _(_, _, _(_.result) === _, _(_.impact) === _, _, _);
        }
        if (_.phase === `IDLE` && _.completed && !_.shouldFlush) {
          let _ = _.completed;
          if (!_(_, _.critical)) return _;
          let _ = _(_.impact) === _,
            _ = !!(_.impact._ && _.impact._.type === `COMBINE`),
            _ = _.critical.droppable._ === _;
          return _ ? (_ ? _ : _) : _ ? _ : _;
        }
        return _;
      };
    },
    {
      updateViewportMaxScroll: _,
    },
    (_, _, _) => ({
      ..._(_),
      ..._,
      ..._,
    }),
    {
      context: _,
      areStatePropsEqual: _,
    },
  )(_),
  _ = [`market`, `watchlist`];
function _(_ = {}) {
  return {
    queryKey: _,
    queryFn: () => {
      throw Error(`No Client Loader`);
    },
    ..._,
  };
}
function _(_) {
  return _(_(_));
}
function _() {
  let _ = _();
  return _({
    mutationFn: _,
    onMutate: async (_) => {
      await _.cancelQueries({
        queryKey: _,
      });
      let _ = _.getQueryData(_),
        _ = _(_),
        _ = {
          ..._,
          items: _,
        };
      return _.setQueryData(_, _), _;
    },
    onError: (_, _, _) => {
      _.setQueryData(_, _);
    },
  });
}
function _(_) {
  let { items: _, iSource: _, iDest: _ } = _,
    _ = [..._],
    _ = _[_];
  return _.splice(_, 1), _.splice(_, 0, _), _;
}
async function _(_) {
  let { items: _, iSource: _, iDest: _ } = _;
  if (_ === _ || _ < 0 || _ >= _.length) return;
  let _ = _ > _ ? _ - 1 : _,
    _ = _ === -1 ? 0 : _[_].priority + 1,
    _ = _[_],
    _ = {
      [_._]: _,
    };
  for (let _ = _ + 1; _ < _.length; _++) {
    let _ = _[_],
      _ = _ === _ - 1 ? _ : _[_ - 1];
    if (_._ === _._) break;
    let _ = _[_._] ?? _.priority;
    if (_.priority !== _) break;
    _[_._] = _.priority + 1;
  }
  let _ = [];
  for (let [_, _] of Object.entries(_))
    _.push({
      itemid: _,
      priority: _,
    });
  return _.length === 0
    ? 1
    : _(`/market/actions`, `UpdateMarketWatchlistPriorities`, _);
}
function _() {
  let _ = _();
  return _({
    mutationFn: (_) => _(`/market/actions`, `RemoveMarketWatchlistItem`, _),
    onMutate: async (_) => {
      await _.cancelQueries({
        queryKey: _,
      });
      let _ = _.getQueryData(_);
      if (Array.isArray(_?.items)) {
        let _ = {
          ..._,
          items: _.items.filter((_) => _._ !== _),
        };
        _.setQueryData(_, _);
      }
      return _;
    },
    onError: (_, _, _) => {
      _.setQueryData(_, _);
    },
  });
}
function _(_) {
  let _ = _(),
    _ = _(),
    [_, _] = (0, _.useState)(null);
  if (!_.data) return null;
  let _ = _ ?? _.data.items ?? [];
  return _.length === 0
    ? (0, _.jsx)(_, {})
    : (0, _.jsx)(_, {
        onDragEnd: (_) => {
          if (_.destination && _.source.index !== _.destination.index) {
            let _ = {
              items: _,
              iSource: _.source.index,
              iDest: _.destination.index,
            };
            _(_(_)), _.mutateAsync(_).finally(() => _(null));
          }
        },
        children: (0, _.jsx)(_, {
          droppableId: `watchlist`,
          children: (_) =>
            (0, _.jsxs)(_, {
              direction: `column`,
              ..._.droppableProps,
              ref: _.innerRef,
              children: [
                _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      index: _,
                      draggableId: _._,
                      children: (_) =>
                        (0, _.jsx)(_, {
                          marginTop: `3`,
                          ref: _.innerRef,
                          ..._.draggableProps,
                          children: (0, _.jsx)(
                            _,
                            {
                              item: _,
                              dragHandle: _.dragHandleProps,
                            },
                            _._,
                          ),
                        }),
                    },
                    _._,
                  ),
                ),
                _.placeholder,
              ],
            }),
        }),
      });
}
function _() {
  return (0, _.jsxs)(_, {
    direction: `column`,
    align: `center`,
    gap: `3`,
    children: [
      (0, _.jsx)(_, {
        size: `4`,
        weight: `medium`,
        children: _.Localize(`#Watchlist_NoItems`),
      }),
      (0, _.jsx)(_, {
        marginBottom: `3`,
        children: _.Localize(`#Watchlist_Explainer_1`),
      }),
      (0, _.jsx)(_, {
        contrast: `note`,
        children: _.Localize(`#Watchlist_Explainer_2`),
      }),
      (0, _.jsx)(_, {
        contrast: `note`,
        children: _.Localize(`#Watchlist_Explainer_3`),
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    align: `center`,
    contrast: `description`,
    ..._,
  });
}
function _(_) {
  let { item: _, dragHandle: _ } = _,
    _ = {
      deleteMutation: _(),
      dragHandle: _,
    };
  switch (_.type) {
    case `listing`:
      return (0, _.jsx)(_, {
        ..._,
        ..._,
      });
    case `sold_listing`:
      return (0, _.jsx)(_, {
        ..._,
        ..._,
      });
    case `bucket`:
      return (0, _.jsx)(_, {
        ..._,
        ..._,
      });
    case `search`:
      return (0, _.jsx)(_, {
        ..._,
        ..._,
      });
    case `search_descriptions`:
      return (0, _.jsx)(_, {
        ..._,
        ..._,
      });
  }
  return null;
}
function _(_) {
  let { _: _, name: _, listing: _, deleteMutation: _, dragHandle: _ = {} } = _,
    _ = _(),
    [_, _] = (0, _.useState)(!1),
    _ = (_) => {
      _.preventDefault(), _.stopPropagation(), _.mutate(_);
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _
        ? (0, _.jsx)(_.Root, {
            onClick: () => _(!0),
            children: (0, _.jsx)(_.Content, {
              listing: _,
              name: _,
              handle: (0, _.jsx)(_, {
                ..._,
                separator: !1,
                inline: !0,
              }),
              children: (0, _.jsx)(_, {
                onClick: _,
              }),
            }),
          })
        : (0, _.jsxs)(_.Root, {
            onClick: () => _(!0),
            beforeContent: (0, _.jsx)(_, {
              ..._,
            }),
            children: [
              (0, _.jsx)(_.Color, {
                color: _(_.description),
              }),
              (0, _.jsx)(_.Content, {
                listing: _,
                name: _,
                children: (0, _.jsx)(_, {
                  onClick: _,
                }),
              }),
            ],
          }),
      _ &&
        (0, _.jsx)(_, {
          listing: _,
          onClose: () => _(!1),
          expectEnhancedAppearance: !1,
        }),
    ],
  });
}
function _(_) {
  let { _: _, name: _, sold: _, deleteMutation: _, dragHandle: _ = {} } = _,
    _ = _(),
    _ = (_) => {
      _.preventDefault(), _.stopPropagation(), _.mutate(_);
    };
  return _
    ? (0, _.jsx)(_.Root, {
        cursor: `default`,
        children: (0, _.jsx)(_.SoldContent, {
          sold: _,
          name: _,
          handle: (0, _.jsx)(_, {
            ..._,
            separator: !1,
            inline: !0,
          }),
          children: (0, _.jsx)(_, {
            onClick: _,
          }),
        }),
      })
    : (0, _.jsxs)(_.Root, {
        beforeContent: (0, _.jsx)(_, {
          ..._,
        }),
        children: [
          (0, _.jsx)(_.Color, {
            color: _(_.description),
          }),
          (0, _.jsx)(_.SoldContent, {
            sold: _,
            name: _,
            children: (0, _.jsx)(_, {
              onClick: _,
            }),
          }),
        ],
      });
}
function _(_) {
  let { _: _, name: _, query: _, ..._ } = _,
    _ = _(),
    _ = _.Search({
      search: _(_, _.maxPrice),
    }),
    _ = _.Localize(`#Watchlist_SearchResultsFor`);
  return (0, _.jsxs)(_, {
    _: _,
    href: _,
    ..._,
    children: [
      (0, _.jsx)(_, {
        children: _ || _,
      }),
      _ &&
        (0, _.jsx)(_, {
          children: _,
        }),
      (0, _.jsx)(_, {
        query: _,
        marginTop: `1`,
      }),
    ],
  });
}
function _(_) {
  let { query: _, ..._ } = _,
    _ = _(_.appid);
  return (0, _.jsxs)(_, {
    ..._,
    children: [
      _.appid &&
        (0, _.jsx)(_, {
          appid: _.appid,
        }),
      _.strQuery &&
        (0, _.jsx)(_, {
          children: (0, _.jsxs)(_, {
            children: [`"`, _.strQuery, `"`],
          }),
        }),
      _.filters &&
        (0, _.jsx)(_, {
          filters: _.filters,
          getLabel: _,
        }),
      _.price &&
        (0, _.jsx)(_, {
          price: _.price,
        }),
      _.accessoryFilters &&
        (0, _.jsx)(_, {
          filters: _.accessoryFilters,
          getLabel: _,
        }),
    ],
  });
}
function _(_) {
  let { _: _, name: _, query: _, ..._ } = _,
    _ = _(),
    _ = _.Search({
      search: _(_, _.maxPrice),
    }),
    _ = _.Localize(`#Watchlist_SearchResultsFor`);
  return (0, _.jsxs)(_, {
    _: _,
    href: _,
    ..._,
    children: [
      (0, _.jsx)(_, {
        children: _ || _,
      }),
      _ &&
        (0, _.jsx)(_, {
          children: _,
        }),
      (0, _.jsx)(_, {
        query: _,
      }),
    ],
  });
}
function _(_) {
  let { query: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    ..._,
    children: [
      _.appid &&
        (0, _.jsx)(_, {
          appid: _.appid,
        }),
      _.strQuery &&
        (0, _.jsx)(_, {
          children: (0, _.jsxs)(_, {
            children: [`"`, _.strQuery, `"`],
          }),
        }),
      _.price &&
        (0, _.jsx)(_, {
          price: _.price,
        }),
    ],
  });
}
function _(_) {
  let { _: _, name: _, bucket: _, description: _, query: _, ..._ } = _,
    { deleteMutation: _, dragHandle: _ = {} } = _,
    _ = _(),
    _ = _();
  if (!_) return null;
  let _ = _.Item(_.appid, _.strItemName, {
      search: _(_, _.maxPrice),
    }),
    _ = (_.parent_bucket_info ?? (_.child_bucket_infos ?? [])[0])
      ?.localized_name;
  if (!_)
    return (0, _.jsxs)(_, {
      _: _,
      href: _,
      ..._,
      children: [
        (0, _.jsx)(_, {
          children: _ || _,
        }),
        _ &&
          (0, _.jsx)(_, {
            children: _,
          }),
        (0, _.jsx)(_, {
          query: _,
          marginTop: `1`,
        }),
      ],
    });
  let _ = (_) => {
      _.preventDefault(), _.stopPropagation(), _.isPending || _.mutate(_);
    },
    _ = _ || _.market_bucket_group_name || _.market_name || ``;
  return _
    ? (0, _.jsx)(_, {
        href: _,
        children: (0, _.jsx)(_.Root, {
          children: (0, _.jsx)(_.BucketContent, {
            description: _,
            bucketName: _,
            name: _,
            details: (0, _.jsx)(_, {
              query: _,
            }),
            handle: (0, _.jsx)(_, {
              ..._,
              separator: !1,
              inline: !0,
            }),
            children: (0, _.jsx)(_, {
              onClick: _,
            }),
          }),
        }),
      })
    : (0, _.jsx)(_, {
        href: _,
        children: (0, _.jsxs)(_.Root, {
          beforeContent: (0, _.jsx)(_, {
            ..._,
          }),
          children: [
            (0, _.jsx)(_.Color, {
              color: _(_),
            }),
            (0, _.jsxs)(_.BucketContent, {
              description: _,
              bucketName: _,
              name: _,
              details: (0, _.jsx)(_, {
                query: _,
              }),
              children: [
                (0, _.jsx)(_, {
                  onClick: _,
                }),
                (0, _.jsx)(_, {
                  direction: `right`,
                  size: `7`,
                }),
              ],
            }),
          ],
        }),
      });
}
function _(_) {
  let { query: _, ..._ } = _,
    _ = _(_.appid);
  return (0, _.jsxs)(_, {
    ..._,
    children: [
      (0, _.jsx)(_, {
        appid: _.appid,
      }),
      _.filters &&
        (0, _.jsx)(_, {
          filters: _.filters,
          getLabel: _,
        }),
      _.price &&
        (0, _.jsx)(_, {
          price: _.price,
        }),
      _.propertyFilters &&
        (0, _.jsx)(_, {
          appid: _.appid,
          filters: _.propertyFilters,
        }),
    ],
  });
}
var _ = {
  Bucket: _,
  Search: _,
  SearchDescriptions: _,
};
function _(_) {
  return (0, _.jsx)(_, {
    gap: `2`,
    align: `center`,
    wrap: `wrap`,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    height: `39px`,
    align: `center`,
    justify: `center`,
    background: `dull-7`,
    radius: `sm`,
    padding: `2`,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    contrast: `subtitle`,
    weight: `medium`,
    ..._,
  });
}
function _(_) {
  let { appid: _ } = _,
    _ = _({
      appid: _,
    }),
    _ = _({
      appid: _,
    }),
    _ = _.data && _(_.data, `community_icon`);
  return (0, _.jsxs)(_, {
    width: `39px`,
    height: `39px`,
    title: _.data?.name,
    children: [
      !_ && (0, _.jsx)(_, {}),
      _ &&
        (0, _.jsx)(_, {
          width: `24px`,
          height: `24px`,
          src: _,
          alt: ``,
        }),
    ],
  });
}
function _(_) {
  let { price: _ } = _,
    _ = _(),
    _ = [_.unMin ?? 0, _.unMax ?? _.maxPrice];
  return _(_, _)
    ? (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          children: _(_, _),
        }),
      })
    : null;
}
function _(_) {
  let { filters: _, getLabel: _ } = _;
  return (0, _.jsx)(_.Fragment, {
    children: Object.entries(_).flatMap(([_, _]) =>
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            children: (0, _.jsx)(_, {
              children: _(_, _),
            }),
          },
          `${_}_${_}`,
        ),
      ),
    ),
  });
}
var _ = _;
function _(_) {
  let { appid: _, filters: _ } = _,
    _ = _(_);
  return _.data
    ? (0, _.jsx)(_.Fragment, {
        children: Object.entries(_).map(([_, _]) =>
          (0, _.jsx)(
            _,
            {
              filter: _,
              property: _.data.get(parseInt(_)),
            },
            _,
          ),
        ),
      })
    : null;
}
function _(_) {
  let { filter: _, property: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          children: _(_, _),
        }),
      })
    : null;
}
function _(_) {
  let { _: _, href: _, children: _, deleteMutation: _, dragHandle: _ = {} } = _,
    _ = (_) => {
      _.stopPropagation(), _.preventDefault(), _.isPending || _.mutate(_);
    };
  return (0, _.jsx)(_, {
    href: _,
    children: (0, _.jsxs)(_, {
      gap: {
        initial: `2`,
        _: `3`,
      },
      justify: `between`,
      align: `center`,
      radius: `sm`,
      background: `dull-5`,
      padding: `3`,
      cursor: `pointer`,
      children: [
        (0, _.jsx)(_, {
          ..._,
        }),
        (0, _.jsx)(_, {
          flexGrow: `1`,
          minWidth: `0`,
          children: _,
        }),
        (0, _.jsx)(_, {
          onClick: _,
        }),
        (0, _.jsx)(_, {
          direction: `right`,
          size: `7`,
        }),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    _: `div`,
    contrast: `title`,
    size: `4`,
    weight: `medium`,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    _: `div`,
    ..._,
  });
}
function _(_) {
  return (0, _.jsxs)(_, {
    size: `1`,
    color: `dull`,
    ..._,
    children: [
      (0, _.jsx)(_, {
        height: `12px`,
      }),
      ` `,
      _.Localize(`#Watchlist_AddButton`),
    ],
  });
}
function _(_) {
  let { listing: _, ..._ } = _,
    [_, _] = (0, _.useState)(!1);
  return _()
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            onClick: () => _(!0),
            ..._,
          }),
          _ &&
            (0, _.jsx)(_, {
              onClose: () => _(!1),
              listing: _,
            }),
        ],
      })
    : null;
}
function _(_) {
  let { query: _, description: _, ..._ } = _,
    [_, _] = (0, _.useState)(!1);
  return _()
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            onClick: () => _(!0),
            ..._,
          }),
          _ &&
            (0, _.jsx)(_, {
              onClose: () => _(!1),
              query: _,
              description: _,
            }),
        ],
      })
    : null;
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `2 11 32 14`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M27 21.3332V23.0002H21.7822L23.5195 21.3332H27Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M30.5 17.1672V18.8332H26.126L27 17.9953L26.1367 17.1672H30.5Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M34 14.6672H23.5303L21.793 13.0002H34V14.6672Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M9.42583 24.0155C11.113 24.5862 12.927 24.6761 14.6629 24.2752C16.3988 23.8743 17.9874 22.9985 19.2492 21.7468L23 18.016L19.2492 14.2851C18.3333 13.3742 17.4583 12.794 15.965 12.1789C14.2409 11.5047 12.3566 11.3448 10.5425 11.7189C8.72852 12.0929 7.0634 12.9847 5.75083 14.2851L2 18.016L5.75083 21.7468C6.72745 22.7182 7.98479 23.5281 9.42583 24.0155ZM12.5 22.0776C14.7552 22.0776 16.5833 20.2591 16.5833 18.016C16.5833 15.7728 14.7552 13.9544 12.5 13.9544C10.2448 13.9544 8.41667 15.7728 8.41667 18.016C8.41667 20.2591 10.2448 22.0776 12.5 22.0776Z`,
      }),
    ],
  });
}
function _(_) {
  let _ = _(_);
  return (_, _) => _(_.data, _, _);
}
function _(_, _, _) {
  if (!_) return _;
  let _ = _[_];
  if (!_ || !_.tags) return _;
  let _ = _.tags[_];
  return _ ? _.localized_name : _;
}
function _(_) {
  let { separator: _ = !0, ..._ } = _;
  return (0, _.jsxs)(_, {
    justify: `center`,
    align: `center`,
    cursor: `grab`,
    marginRight: {
      initial: `1`,
      _: `3`,
    },
    gap: {
      initial: `2`,
      _: `3`,
    },
    ..._,
    children: [
      (0, _.jsx)(`svg`, {
        width: 22,
        height: 22,
        viewBox: `0 0 18 18`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        children: (0, _.jsx)(`path`, {
          _: `M17 5H1V3H17V5ZM17 8H1V10H17V8ZM17 13H1V15H17V13Z`,
          fill: `var(--color-dull-11)`,
          opacity: `0.8`,
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          size: `4`,
          orientation: `vertical`,
          color: `dull-8 80%`,
        }),
    ],
  });
}
function _() {
  return !_(`sm`);
}
function _(_) {
  return (0, _.jsx)(_, {
    onClick: _.onClick,
    color: `text-body`,
    children: _.Localize(`#Watchlist_RemoveItem`),
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
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
