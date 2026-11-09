function _(_) {
  return _
    ? _ === `game` ||
        _ === `dlc` ||
        _ === `software` ||
        _ === `music` ||
        _ === `application` ||
        _ === `demo` ||
        _ === `hardware` ||
        _ === `mod` ||
        _ == `video` ||
        _ === `beta` ||
        _ === `advertising`
    : !1;
}
function _(_) {
  return _ == null
    ? !1
    : _ == 0 ||
        _ == 4 ||
        _ == 6 ||
        _ == 11 ||
        _ == 1 ||
        _ == 10 ||
        _ == 2 ||
        _ == 7 ||
        _ == 12 ||
        _ == 14;
}
var _ = _(_(), 1),
  _ = `jh2aJ9Ojp00-`,
  _ = `_09Cmcjf3Ax4-`,
  _ = _(),
  _ = 6;
function _(_) {
  let { _: _, bHideInLibraryApps: _ } = _,
    { data: _ } = _(_),
    _ = _?.item_type == 2,
    { data: _ } = _(),
    _ = _.useMemo(() => {
      if (_)
        return _.item_type === 1 || _.item_type === 2
          ? (_.included_appids || [])
              .filter((_) => !_ || !_ || !_?.has(_))
              .map((_) => ({
                appid: _,
              }))
          : (console.error(
              `ContentsPreviewList unexpected store item type:`,
              _.item_type,
            ),
            null);
    }, [_, _, _, _]);
  if (!_ || _.length == 0) return null;
  let _ = _.length,
    _ = _.LocalizePlural(`#Sale_ContentPreview`, _);
  if (_ && _) {
    let _ = _.included_appids?.length || 0;
    _ != _ && (_ = _.Localize(`#Sale_Bundle_CompletePartialSet`, _ - _, _));
  }
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsx)(`span`, {
              className: `EpX0QE2kSA0-`,
              children: _.Localize(`#AppType_bundle`),
            }),
          _,
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.slice(0, _).map((_) =>
          (0, _.jsx)(
            _,
            {
              _: _,
            },
            `preview${_(_)}`,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_ || !_) return null;
  let _ = _(_, `small_capsule`);
  return (0, _.jsx)(_, {
    _: _,
    className: _,
    hoverProps: {
      direction: `right`,
      style: {
        minWidth: `350px`,
      },
    },
    children: (0, _.jsx)(`img`, {
      src: _,
      className: _,
      loading: `lazy`,
      alt: _.name || ``,
    }),
  });
}
var _ = `KWtISc2Vl-s-`,
  _ = `hFqt-ya9ems-`,
  _ = `oP5kee-Xf4c-`,
  _ = `tQvr3Xormxg-`,
  _ = `ascHJ642xx8-`,
  _ = `DcJDz56CazE-`,
  _ = `Z2ffcXo9jPI-`,
  _ = `REF78HU-1iY-`,
  _ = `a7pWluUeOos-`,
  _ = `GVgs8Cqq6Ok-`,
  _ = `_4P8HAfUL5sE-`,
  _ = `_05uz7uqRAxM-`,
  _ = `lO3YjPuHS-M-`,
  _ = `GYIH1cLbsrc-`,
  _ = `dBgSoQE5SP0-`,
  _ = `VxC9iBikl9o-`,
  _ = `I6uJfy0DeDo-`,
  _ = `JWWdCz-v3Ww-`,
  _ = `Mm0zTQ-AMNg-`,
  _ = `NS4HjynpdYo-`,
  _ = `Q9eaKYaoIUQ-`,
  _ = `GPba-mjbGAk-`,
  _ = `mcSyWwS0qI8-`,
  _ = `NZju2CeIrMw-`,
  _ = `kt-elBbz5P4-`,
  _ = `YfRoaGJvQcY-`,
  _ = `xBYwcyqHSyU-`,
  _ = `GyuzgaXRrjk-`,
  _ = `zS5bnF8A0cU-`,
  _ = `NwMTboSX6ww-`,
  _ = `_-9XuB3J3l30-`,
  _ = `rRZhWhpKdNo-`,
  _ = `_1-XZGFDzYoo-`;
function _(_) {
  let {
    capsules_per_row: _,
    is_generic: _,
    is_generic_trailer: _,
    is_event_dash_row: _,
    is_trailer_carousel: _,
    is_spotlights: _,
    is_item_browser: _,
    is_maincap: _,
    is_expanded_maincap: _,
    is_expanded_display: _,
    show_auto_advance_bar: _,
  } = _;
  if (!_) return null;
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
        }),
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
        }),
      }),
    });
  if (_)
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`div`, {
                className: _,
              }),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`div`, {
                className: _,
              }),
            }),
          ],
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `jZajDq41Y2Y-`,
            children: (0, _.jsx)(`div`, {
              className: `tQvr3Xormxg-`,
            }),
          }),
      ],
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _(_, _),
          }),
          (0, _.jsxs)(`div`, {
            className: _(_),
            children: [
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
            ],
          }),
        ],
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
              }),
            ],
          }),
        ],
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _({
          [_]: !0,
          [void 0]: _,
        }),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _(_),
            children: [
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
            ],
          }),
        ],
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _(_, _),
          }),
          (0, _.jsx)(`div`, {
            className: _(_, _),
          }),
        ],
      }),
    });
  if (_) {
    let _ = [];
    for (let _ = 0; _ < _[0]; _++)
      _.push(
        (0, _.jsx)(
          _,
          {
            className: _,
            focusable: !0,
            children: (0, _.jsx)(`div`, {
              className: _,
            }),
          },
          `item_browse_ghost_` + _,
        ),
      );
    return (0, _.jsx)(_, {
      children: _,
    });
  }
  return _?.length == 1
    ? _[0] == 1
      ? (0, _.jsx)(_, {
          children: (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _,
            }),
          }),
        })
      : _[0] == 4
        ? (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
              ],
            }),
          })
        : (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
              ],
            }),
          })
    : _?.length == 2
      ? _[0] == 3 && _[1] == 3
        ? (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
              ],
            }),
          })
        : (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
              ],
            }),
          })
      : (0, _.jsx)(_, {
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _(_, _),
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _(_, _),
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _(_, _),
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                ],
              }),
            ],
          }),
        });
}
function _(_) {
  return (0, _.jsx)(_, {
    className: _(_, _.className),
    focusableIfEmpty: !0,
    children: _.children,
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(void 0),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (_) {
        if (_ && _.length > 0) _(_);
        else if (_.related_items?.parent_appid) {
          let _ = {
            appid: _.related_items?.parent_appid,
          };
          (async () => {
            let _ = await _.fetchQuery(_(_, _));
            _ && _.length > 0 && _(_);
          })();
        }
      }
    }, [_, _, _, _]),
    _
  );
}
function _(_) {
  let { _: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        _: _,
      })
    : null;
}
function _(_) {
  let { _: _ } = _,
    _ = _(_);
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.slice(0, 10).map((_) =>
          (0, _.jsx)(
            _,
            {
              tagid: _.tagid,
              className: _,
            },
            `tag_` + _.tagid,
          ),
        ),
      })
    : null;
}
function _(_) {
  let {
      _: _,
      bShowDemoButton: _,
      bShowPurchaseOptionsButton: _,
      fnOnPurchaseOptionsClick: _,
      bHidePrice: _,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: _,
      className: _,
      bShowCartButton: _,
    } = _,
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { bIsOwned: _ } = _(_),
    [_, _] = _(_, _);
  if (!_) return null;
  let _ =
      (_.type === 1 && !_?.is_coming_soon) ||
      (_.related_items?.demo_appid && _.related_items?.demo_appid.length > 0),
    _ = _(_.type),
    _ = _ && _ && _,
    _ = null;
  if (!_ && _?.is_free_to_keep && _?.free_to_keep_ends) {
    let _ = _.free_to_keep_ends,
      _ = _(
        `#Sale_default_label_Free_Promo_Description_Short`,
        _(_) +
          ` @ ` +
          _(_, {
            bForce24HourClock: !1,
          }),
      );
    _ = (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _,
        (0, _.jsx)(_, {
          tooltip: _(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      _,
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !!_ &&
            (0, _.jsx)(_, {
              _: _,
              className: `YDFpPk1zweE-`,
            }),
          !_ &&
            _.type !== 1 &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                !(!_ || _.is_free) &&
                  (0, _.jsx)(_, {
                    fnOnPurchaseOptionsClick: _,
                  }),
                !(!_ || _.is_free) &&
                  (0, _.jsx)(_, {
                    _: _,
                    className: `CartBtn`,
                  }),
              ],
            }),
          !_ &&
            (0, _.jsx)(_, {
              _: _,
            }),
          _ &&
            (0, _.jsx)(_, {
              _: _,
              compatibility: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    onClick: _.fnOnPurchaseOptionsClick,
    children: (0, _.jsx)(`span`, {
      children: _(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function _(_) {
  let {
      _: _,
      type: _,
      bShowDemoButton: _,
      bPreferDemoStorePage: _,
      bHidePrice: _,
      bUseSubscriptionLayout: _,
      bHidePlatforms: _,
      bHideContainedApps: _,
      bAllowTwoLinesForHeader: _,
      bShowReviewSummary: _,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: _,
      bAutoFocus: _,
      fnOnClickOverride: _,
      bIsMarketingMessage: _,
      bPreferAssetWithoutOverride: _,
    } = _,
    _ = _(_, _),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    { data: _, isPending: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(),
    _ = _(_),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1),
    _ = _();
  (0, _.useEffect)(() => {
    _.current && _(_.current.offsetWidth < 370);
  }, [_]);
  let _ = (0, _.useMemo)(
      () =>
        _ && _ && _(_)
          ? {
              appid: _(_)[0],
            }
          : _,
      [_, _, _],
    ),
    { strStoreURL: _, snr: _ } = _(_, _);
  if (!_)
    return _
      ? (0, _.jsx)(_, {
          capsules_per_row: [1],
          is_item_browser: !0,
        })
      : null;
  let _ = _.included_appids?.length || 0,
    _ = _.included_appids?.filter((_) => _?.has(_))?.length || 0,
    _ = _.item_type == 2 && !!_?.must_purchase_as_set,
    _ = !_ && _ > 1,
    _ = _.item_type == 1 && _ == 1,
    _ = _.item_type == 0 || _,
    _ = _ && _.appid,
    _ = _.name || ``,
    _ = _(_, _),
    _ = _ || !_?.is_coming_soon || _,
    [_, _] = _(_, _);
  return (0, _.jsxs)(_, {
    className: _({
      [_]: !0,
      [void 0]: _,
      StoreSaleWidgetOuterContainer: !0,
    }),
    "flow-children": `grid`,
    navEntryPreferPosition: _.PREFERRED_CHILD,
    autoFocus: _,
    navKey: `preview_widget_` + _(_),
    children: [
      (0, _.jsx)(_, {
        appid: _ && `appid` in _ ? _.appid : void 0,
        children: (0, _.jsxs)(_, {
          onClick: _ ? _ : void 0,
          className: _({
            [_]: !0,
            [_]: !0,
            [_]: _,
          }),
          ..._(_, _, _, !!_, void 0, _),
          preferredFocus: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_),
              children: (0, _.jsx)(_, {
                _: _,
                strURL: _,
                children: (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      appids: _,
                    }),
                    (0, _.jsx)(_, {
                      _: _,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: _,
                    }),
                    (0, _.jsx)(_, {
                      _: _,
                    }),
                    (0, _.jsx)(_, {
                      _: _,
                      active: _ && _,
                      bIsHoverMode: !0,
                      eGrowOnActivate: _.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _({
                [_]: !0,
                [_]: _,
              }),
              children: [
                !(!_ || _) &&
                  (0, _.jsx)(_, {
                    _: _,
                    classOverride: _(`jh2aJ9Ojp00-`, `WishlistButton`),
                    snr: _,
                  }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(`a`, {
                    href: _ ? void 0 : _,
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    onClick: _,
                    children: (0, _.jsx)(`div`, {
                      className: _(_, `StoreSaleWidgetTitle`),
                      children: _,
                    }),
                  }),
                }),
                !_ &&
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  ref: _,
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        _: _,
                      }),
                    !_ &&
                      !_ &&
                      _ &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)(_, {
                            _: _,
                            bMinimizePlatforms: _,
                            bHideWindows: _,
                          }),
                          !!(_ && _.item_type == 0) &&
                            (0, _.jsx)(_, {
                              eHWCompat: _,
                              className: `TMpCQp-t5h8-`,
                              _: _,
                            }),
                        ],
                      }),
                  ],
                }),
                !_ &&
                  _ &&
                  _ &&
                  (0, _.jsx)(`div`, {
                    className: `AlZHaVSPe6A-`,
                    children: (0, _.jsx)(_, {
                      _: _,
                    }),
                  }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    _: _,
                    bHideInLibraryApps: !_ && _.item_type == 2 && _ < _,
                  }),
                !!_ &&
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                _
                  ? (0, _.jsx)(`div`, {
                      className: _,
                      children: (0, _.jsx)(`div`, {
                        className: _,
                        children: (0, _.jsx)(_, {
                          _: _,
                        }),
                      }),
                    })
                  : (0, _.jsx)(_.Fragment, {
                      children:
                        _ && _ && _
                          ? (0, _.jsx)(_, {
                              appid: _,
                              bIsMuted: !!_,
                            })
                          : (0, _.jsx)(_, {
                              _: _,
                              bShowDemoButton: _,
                              bHidePrice: _,
                              bHideWishlistButton: _,
                              eHardwareCompatibilityDisplay: _,
                            }),
                    }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(_, {
                    _: _,
                    bPreferAssetWithoutOverride: _,
                    imageType: `header`,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      !!(_.strReason && _.strReason.length > 0) &&
        (0, _.jsx)(`div`, {
          className: `kzAgCnYdQB8-`,
          children: _.strReason,
        }),
    ],
  });
}
function _(_) {
  let { _: _, strURL: _, children: _ } = _;
  return `appid` in _
    ? (0, _.jsxs)(_, {
        _: _,
        children: [_, ` `],
      })
    : (0, _.jsx)(`a`, {
        href: _,
        children: _,
      });
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_);
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _(_),
      })
    : null;
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _();
  if (!_ || !_ || !_.short_description || !_) return null;
  let _ = _?.discount_pct || 0,
    _ = _.included_appids?.length || 0,
    _ = _.included_appids?.filter((_) => _?.has(_))?.length || 0,
    _ = _.short_description,
    _ = _.item_type == 1 && _ == 1,
    _ = _.item_type == 2 && !!_?.must_purchase_as_set;
  return (
    (_.item_type == 2 || (_.item_type == 1 && !_)) &&
      (_ =
        !_ && _ > 0 && _ < _
          ? _(`#Sale_Bundle_CompletePartialSet`, _, _)
          : _ > 0
            ? _(`#Sale_BundleSave_WithDiscount`, _, _)
            : _(`#Sale_BundleSave`, _)),
    (0, _.jsx)(`div`, {
      className: _(_, `StoreSaleWidgetShortDesc`),
      children:
        _.startsWith(`#`) && _.indexOf(` `) == -1
          ? (0, _.jsx)(`span`, {
              className: _,
              children: _(
                _,
                (0, _.jsx)(`i`, {}),
                (0, _.jsx)(`i`, {}),
                (0, _.jsx)(`i`, {}),
                (0, _.jsx)(`i`, {}),
              ),
            })
          : _,
    })
  );
}
