var _ = `zInLvvBUntw-`,
  _ = `mRENPIqaDEM-`,
  _ = _(_(), 1),
  _ = _();
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_ || !_) return null;
  let _ =
    _(_, `library_hero_2x`) ??
    _(_, `library_hero`) ??
    _(_, `raw_page_background`);
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`img`, {
              src: _,
              alt: _.name,
            }),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`img`, {
              src: _,
              alt: _.name,
            }),
          }),
        ],
      })
    : null;
}
var _ = `_53kSv5u8LDI-`,
  _ = `bCavc1pNGaw-`,
  _ = `_0as5HoxUkWc-`,
  _ = `_7qfXPt-aI-s-`,
  _ = `olRmTS28A-k-`;
function _(_) {
  let { appid: _, elPageSort: _, strPageSubTitle: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { strStoreURL: _ } = _(_);
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`a`, {
              href: _,
              children:
                _ &&
                (0, _.jsx)(`img`, {
                  src: _(_, `header`),
                  alt: _.name || ``,
                }),
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _ &&
                (0, _.jsx)(`div`, {
                  className: `UcSOb6kLahU-`,
                  children: _,
                }),
              (0, _.jsx)(`a`, {
                href: _,
                className: _,
                children: _.name || ``,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  _: _,
                }),
              }),
            ],
          }),
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `ZBGGYlFotwA-`,
              children: _,
            }),
        ],
      })
    : null;
}
var _ = `nITP6AZJuoU-`,
  _ = `HjspnEp2uxE-`,
  _ = `dQW5G3Iu1Mc-`,
  _ = `FLgP-ZMoWkQ-`,
  _ = (function (_) {
    return (
      (_[(_.k_BundleSort_Name = 1)] = `k_BundleSort_Name`),
      (_[(_.k_BundleSort_Price = 2)] = `k_BundleSort_Price`),
      (_[(_.k_BundleSort_Popular = 3)] = `k_BundleSort_Popular`),
      (_[(_.k_BundleSort_Discount = 4)] = `k_BundleSort_Discount`),
      (_[(_.k_BundleSort_Recommended = 5)] = `k_BundleSort_Recommended`),
      _
    );
  })({});
function _(_) {
  let { eBundleSort: _, fnSetSort: _, bIncludeRank: _ } = _,
    _ = [1, 2];
  return (
    _ && _.push(5),
    (0, _.jsx)(_, {
      options: _,
      selectedValue: _,
      onSelectionChange: _,
      placeholder: _.Localize(`#BundleList_SortBy`),
      getOptionLabel: (_) => _.Localize(`#BundleList_SortBy`) + ` ` + _(_),
    })
  );
}
function _(_) {
  switch (_) {
    case 1:
      return _.Localize(`#BundleList_SortBy_Name`);
    case 2:
      return _.Localize(`#BundleList_SortBy_Price`);
    case 4:
      return _.Localize(`#BundleList_SortBy_Discount`);
    case 3:
      return _.Localize(`#BundleList_SortBy_Popular`);
    case 5:
      return _.Localize(`#BundleList_SortBy_Recommend`);
  }
}
function _() {
  let { _: _, bundleGroups: _, bIncludeRank: _ } = _.useLoaderData();
  return (0, _.jsx)(_, {
    _: _,
    bundleGroups: _,
    bIncludeRank: _,
  });
}
function _(_) {
  let { _: _, bundleGroups: _, bIncludeRank: _ } = _,
    { data: _ } = _(_);
  (0, _.useEffect)(() => {
    if (_) {
      let _ = `${_.STORE_BASE_URL}${_.store_url_path}`.replace(
        `/app/`,
        `/bundlelist/`,
      );
      _ != window.location.href && window.history.replaceState({}, ``, _);
    }
  }, [_]);
  let [_, _] = (0, _.useState)(_.k_BundleSort_Price);
  return !_ || !(`appid` in _) || !_
    ? null
    : (0, _.jsx)(_, {
        method: `bundlelist`,
        children: (0, _.jsx)(_, {
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                _: _,
              }),
              (0, _.jsxs)(`div`, {
                className: _(_),
                children: [
                  (0, _.jsx)(_, {
                    appid: _.appid,
                    elPageSort: (0, _.jsx)(_, {
                      eBundleSort: _,
                      fnSetSort: _,
                      bIncludeRank: _,
                    }),
                    strPageSubTitle: _.Localize(`#BundleList_SubTitle`),
                  }),
                  _.rgAllBundleIDList.length > 0 &&
                    (0, _.jsx)(`div`, {
                      className: `FuMyhdJkGr4-`,
                      children: (0, _.jsx)(_, {
                        appId: _.appid,
                        eBundleSort: _,
                        rgBundleInfo: _.rgAllBundleIDList,
                      }),
                    }),
                  _.rgCompleteTheSetBundleIDList.length > 0 &&
                    (0, _.jsxs)(`div`, {
                      className: `FuMyhdJkGr4-`,
                      children: [
                        (0, _.jsx)(`div`, {
                          className: `QQjeN94tp-I-`,
                          children: _.Localize(`#BundleList_CompleteTheSet`),
                        }),
                        (0, _.jsx)(`div`, {
                          className: `NrIQU0pOXIc-`,
                          children: _.Localize(
                            `#BundleList_CompleteTheSetSubtitle`,
                          ),
                        }),
                        (0, _.jsx)(_, {
                          appId: _.appid,
                          eBundleSort: _,
                          rgBundleInfo: _.rgCompleteTheSetBundleIDList,
                        }),
                      ],
                    }),
                  _.rgMustPurchaseTogetherBundleIDList.length > 0 &&
                    (0, _.jsxs)(`div`, {
                      className: `FuMyhdJkGr4-`,
                      children: [
                        (0, _.jsx)(`div`, {
                          className: `QQjeN94tp-I-`,
                          children: _.Localize(`#BundleList_MustPurchaseAsSet`),
                        }),
                        (0, _.jsx)(`div`, {
                          className: `NrIQU0pOXIc-`,
                          children: _.Localize(
                            `#BundleList_MustPurchaseAsSetSubtitle`,
                          ),
                        }),
                        (0, _.jsx)(_, {
                          appId: _.appid,
                          eBundleSort: _,
                          rgBundleInfo: _.rgMustPurchaseTogetherBundleIDList,
                        }),
                      ],
                    }),
                  _.rgOwnedBundleIDList.length > 0 &&
                    (0, _.jsxs)(`div`, {
                      className: `FuMyhdJkGr4-`,
                      children: [
                        (0, _.jsx)(`div`, {
                          className: `QQjeN94tp-I-`,
                          children: _.Localize(`#BundleList_AllInLibrary`),
                        }),
                        (0, _.jsx)(`div`, {
                          className: `NrIQU0pOXIc-`,
                          children: _.Localize(
                            `#BundleList_AllInLibrarySubtitle`,
                          ),
                        }),
                        (0, _.jsx)(_, {
                          appId: _.appid,
                          eBundleSort: _,
                          rgBundleInfo: _.rgOwnedBundleIDList,
                        }),
                      ],
                    }),
                  (0, _.jsx)(`br`, {}),
                  (0, _.jsx)(`br`, {}),
                ],
              }),
            ],
          }),
        }),
      });
}
function _(_, _) {
  let _ = Number(_.priceInCents || 0) - Number(_.priceInCents || 0);
  return _ == 0 ? _.name.localeCompare(_.name) : _;
}
function _(_) {
  let { rgBundleInfo: _, appId: _, eBundleSort: _ } = _,
    _ = (0, _.useMemo)(() => {
      let _ = _;
      switch (_) {
        default:
        case _.k_BundleSort_Name:
          _ = _.sort((_, _) => _.name.localeCompare(_.name));
          break;
        case _.k_BundleSort_Price:
          _ = _.sort(_);
          break;
        case _.k_BundleSort_Recommended:
          _ = _.sort((_, _) => {
            let _ = _.rank - _.rank;
            return _ == 0 ? _(_, _) : _;
          });
      }
      return _.map((_) => _.bundleid);
    }, [_, _]);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          bundleId: _,
          appId: _,
        },
        `bundleDisplay_` + _,
      ),
    ),
  });
}
function _(_) {
  let { bundleId: _, appId: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      _: _,
      type: `bundle`,
      bShowDeckCompatibilityDialog: !1,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
var _ = _({
  Component: _,
});
export { _ as route };
