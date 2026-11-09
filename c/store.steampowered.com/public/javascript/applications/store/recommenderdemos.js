import { _ } from "./rolldown-runtime.js";
import { _, _, _ } from "./libraries.js";
import { _ } from "./storelink.js";
import { _, _ } from "./carouselarrows.js";
import { _ } from "./storegamehover.js";
import { _ } from "./crosspromotesalelayouts.js";
import { _ } from "./partnereventstore.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
import _ from "./discountsandeventshome.js";
import { _ } from "./assetutils.js";
import { _ } from "./partnereventslogin.js";
var _ = _(_()),
  _ = _(_()),
  _ = `_3qrofBB-aBQ-`,
  _ = `xABO8-oxGRA-`,
  _ = `fh6Buxcrbt8-`,
  _ = `_2j5jZzvpJTE-`,
  _ = `LuwmqeZ2qf8-`,
  _ = `SqnqFBdriWw-`,
  _ = `EMw4B5LOLPc-`,
  _ = `CsfvVIa26qA-`,
  _ = `_7oh7BX88TCE-`,
  _ = `yhi-3P9hR2Y-`,
  _ = `CkYKLkUv3Us-`,
  _ = `pnpXcQv8pmY-`,
  _ = `c3fxHWQQlC0-`,
  _ = `eVV46lLoBq0-`,
  _ = `_07uXB52HKbs-`,
  _ = `OPtkpP5fmuc-`,
  _ = `VUSjpUSCHKo-`,
  _ = `RXgTvW-0muA-`,
  _ = `OZS99odXDBw-`,
  _ = `JnaKPJOaNwY-`,
  _ = _(),
  _ = (_) => {
    let _ = _(_.nAppID),
      _ = _(_),
      _ = _(_),
      { data: _ } = _(_);
    if (!_.data || !_.data) return null;
    let _ = _(_.data, `header`);
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          _: _,
          children: (0, _.jsx)(`img`, {
            className: _,
            src: _,
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _.fWeight ? `${(_.fWeight * 100).toFixed(2)}%` : ``,
            }),
            (0, _.jsx)(_, {
              purchaseOption: _,
              bIsFree: !!_.data.is_free,
            }),
          ],
        }),
      ],
    });
  },
  _ = (_) =>
    _.purchaseOption
      ? (0, _.jsx)(_, {
          purchaseOption: _.purchaseOption,
          size: `inline`,
          legacyStyle: !0,
        })
      : _.bIsFree
        ? (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Price_Free`),
          })
        : null,
  _ = 5,
  _ = 940,
  _ = (_) => {
    let _ = _(_);
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        visibleElements: _,
        disableEdgeWrap: !0,
        screenIsWide: _,
        children: _.children,
      }),
    });
  },
  _ = (_) => {
    let [_, _] = _.useState([]),
      [_, _] = _.useState([]);
    return (
      _.useEffect(() => {
        (async () => {
          let _ = {
            rec: _.strName,
            max: 40,
            exclude: +!!_.bExclude,
            accountid: _.nAccountID,
          };
          try {
            let _ = await _.default.get(
              `${_.STORE_BASE_URL}recommenderdemos/getlist`,
              {
                params: _,
                timeout: 1e4,
              },
            );
            _(_.data.appids), _(_.data.weights);
          } catch (_) {
            console.error(`Error fetching data`, _);
          }
        })();
      }, [_.strName, _.nAccountID, _.bExclude]),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.strTitle,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.strSubtitle,
          }),
          (0, _.jsx)(_, {
            children: _?.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  nAppID: _,
                  fWeight: _[_],
                },
                `${_.strName}_${_}`,
              ),
            ),
          }),
        ],
      })
    );
  },
  _ = (_) =>
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _.strName,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#RecommenderDemos_ReleasedGames`),
        }),
        (0, _.jsx)(_, {
          children: _.arrPlaytimeAppIDs.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                nAppID: _,
              },
              `${_.strName}_${_}`,
            ),
          ),
        }),
        (0, _.jsx)(`div`, {
          className: _,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#RecommenderDemos_UnreleasedGames`),
        }),
        (0, _.jsx)(_, {
          children: _.arrWishlistAppIDs.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                nAppID: _,
              },
              `${_.strName}_${_}`,
            ),
          ),
        }),
      ],
    }),
  _ = (_) => {
    let [_, _] = _.useState(void 0);
    return (
      _.useEffect(() => {
        (async () => {
          let _ = {
            max: 40,
            exclude: +!!_.bExclude,
            accountid: _.nAccountID,
          };
          try {
            let _ = await _.default.get(
              `${_.STORE_BASE_URL}recommenderdemos/getfests`,
              {
                params: _,
                timeout: 1e4,
              },
            );
            _(_.data);
          } catch (_) {
            console.error(`Error fetching data`, _);
          }
        })();
      }, [_.bExclude, _.nAccountID]),
      (0, _.jsx)(`div`, {
        className: void 0,
        children: _?.map((_) =>
          (0, _.jsx)(
            _,
            {
              strName: _.title,
              nStartTime: _.start_date,
              nEndTime: _.end_date,
              arrPlaytimeAppIDs: _.playtime_appids,
              arrWishlistAppIDs: _.wishlist_appids,
            },
            `Fest_${_.name}`,
          ),
        ),
      })
    );
  },
  _ = {
    section_type: `crosspromotesalepage`,
    capsules: [],
    events: [],
    links: [],
    localized_label: [],
    default_label: ``,
  },
  _ = (_) => {
    let { sale: _ } = _,
      { eventModel: _ } = _(_.clan_account_id, _.clan_event_gid),
      _ = _();
    return (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: `${_.name || _.url} - Score ${_.score.toFixed(3)}`,
        }),
        _ &&
          (0, _.jsx)(_, {
            event: _,
            section: _,
            language: _(_.LANGUAGE),
            bInGamepadUI: _,
            placeholderHeight: 300,
            promotedSale: _,
            nItemsToFeature: _.appids.length,
            children: (0, _.jsx)(`div`, {
              className: `qaMMN0bGRU0-`,
              children: _.appids.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    nAppID: _,
                  },
                  _,
                ),
              ),
            }),
          }),
      ],
    });
  },
  _ = (_) => {
    let [_, _] = _.useState(void 0),
      [_, _] = _.useState(void 0);
    return (
      _.useEffect(() => {
        (async () => {
          let _ = {
            max_sales: 5,
            max_apps: 5,
            accountid: _.nAccountID,
          };
          try {
            let _ = await _.default.get(
              `${_.STORE_BASE_URL}recommenderdemos/getcreatorsales`,
              {
                params: _,
                timeout: 1e4,
              },
            );
            _(_.data.sales), _(_.data.error);
          } catch (_) {
            console.error(`Error fetching data`, _);
          }
        })();
      }, [_.nAccountID]),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#RecommenderDemos_CreatorSales`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#RecommenderDemos_CreatorSales_Desc`),
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `CsfvVIa26qA-`,
              children: _,
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _?.map((_) =>
              (0, _.jsx)(
                _,
                {
                  sale: _,
                },
                _.url,
              ),
            ),
          }),
        ],
      })
    );
  },
  _ = {
    no_scheduled: `1`,
  },
  _ = {
    no_scheduled: `1`,
    as_anon: `1`,
  },
  _ = (_) => {
    let _ = _.useMemo(
      () =>
        _.nAccountID
          ? {
              ..._.switches,
              accountid: String(_.nAccountID),
            }
          : _.switches,
      [_.switches, _.nAccountID],
    );
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _.strTitle,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.strSubtitle,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            switches: _,
          }),
        }),
      ],
    });
  },
  _ = {
    Wishlist: `#RecommenderDemos_DiscountReason_Wishlist`,
    FirstTimeOnSale: `#RecommenderDemos_DiscountReason_FirstTimeOnSale`,
    LargestDiscount: `#RecommenderDemos_DiscountReason_LargestDiscount`,
    EndingSoon: `#RecommenderDemos_DiscountReason_EndingSoon`,
    NewlyOnSale: `#RecommenderDemos_DiscountReason_NewlyOnSale`,
    WellReviewed: `#RecommenderDemos_DiscountReason_WellReviewed`,
    TopSeller: `#RecommenderDemos_DiscountReason_TopSeller`,
  };
function _(_) {
  let _ = _[_];
  return _ ? _(_) : _;
}
var _ = (_) => {
    let [_, _] = _.useState(void 0),
      [_, _] = _.useState(void 0);
    return (
      _.useEffect(() => {
        (async () => {
          let _ = {
            accountid: _.nAccountID,
          };
          try {
            let _ = await _.default.get(
              `${_.STORE_BASE_URL}recommenderdemos/getdiscountreasons`,
              {
                params: _,
                timeout: 1e4,
              },
            );
            _(_.data.reason_lists), _(_.data.error);
          } catch (_) {
            console.error(`Error fetching data`, _);
          }
        })();
      }, [_.nAccountID]),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#RecommenderDemos_DiscountReasons`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#RecommenderDemos_DiscountReasons_Desc`),
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `CsfvVIa26qA-`,
              children: _,
            }),
          _?.map((_) =>
            (0, _.jsxs)(
              `div`,
              {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(_.reason),
                  }),
                  (0, _.jsx)(_, {
                    children: _.appids.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          nAppID: _,
                        },
                        _,
                      ),
                    ),
                  }),
                ],
              },
              _.reason,
            ),
          ),
        ],
      })
    );
  },
  _ = () => {
    let [_, _] = _.useState(!1),
      [_, _] = _.useState(0),
      [_, _] = _.useState(``),
      [_, _] = _.useState(!0);
    return _.logged_in
      ? (0, _.jsx)(_, {
          controller: `recommenderdemos`,
          method: `default`,
          feature: `capsule`,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: `(Valve-Only)`,
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(`input`, {
                        type: `text`,
                        value: _,
                        onChange: (_) => _(_.target.value),
                      }),
                      (0, _.jsx)(_, {
                        className: _,
                        onClick: () => {
                          isNaN(parseInt(_)) || (_(!0), _(parseInt(_)));
                        },
                        children: `Use AccountID`,
                      }),
                      (0, _.jsx)(_, {
                        disabled: !_,
                        className: _,
                        onClick: () => {
                          _(!1), _(0), _(``);
                        },
                        children: `Clear`,
                      }),
                    ],
                  }),
                  _ &&
                    (0, _.jsxs)(`div`, {
                      className: `gh60-zeqs54-`,
                      children: [
                        _(`#RecommenderDemos_OverrideAccountID`),
                        (0, _.jsx)(`div`, {
                          className: `NXkGB7Y5tWc-`,
                          children: _,
                        }),
                      ],
                    }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(`input`, {
                        type: `checkbox`,
                        _: `exclude_owned_wishlisted`,
                        checked: _,
                        onChange: () => _(!_),
                      }),
                      (0, _.jsx)(`label`, {
                        htmlFor: `exclude_owned_wishlisted`,
                        children: _(`#RecommenderDemos_Exclude`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                nAccountID: _,
                bExclude: _,
                strName: `WishlistsOneWeek`,
                strTitle: _(`#RecommenderDemos_HotWishlists`),
                strSubtitle: _(`#RecommenderDemos_HotWishlists_Desc`),
              }),
              (0, _.jsx)(_, {
                nAccountID: _,
                bExclude: _,
                strName: `NextFest`,
                strTitle: _(`#RecommenderDemos_NextFest`),
                strSubtitle: _(`#RecommenderDemos_NextFestDesc`),
              }),
              (0, _.jsx)(_, {
                nAccountID: _,
                bExclude: _,
              }),
              (0, _.jsx)(_, {
                nAccountID: _,
              }),
              (0, _.jsx)(_, {
                nAccountID: _,
                switches: _,
                strTitle: _(`#RecommenderDemos_DiscountsNoScheduled`),
                strSubtitle: _(`#RecommenderDemos_DiscountsNoScheduled_Desc`),
              }),
              (0, _.jsx)(_, {
                switches: _,
                strTitle: _(`#RecommenderDemos_DiscountsAnonymous`),
                strSubtitle: _(`#RecommenderDemos_DiscountsAnonymous_Desc`),
              }),
              (0, _.jsx)(_, {
                nAccountID: _,
              }),
              (0, _.jsx)(_, {
                nAccountID: _,
                bExclude: _,
                strName: `RecAllTime`,
                strTitle: _(`#RecommenderDemos_RecAllTime`),
                strSubtitle: _(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, _.jsx)(_, {
                nAccountID: _,
                bExclude: _,
                strName: `RecFiveYear`,
                strTitle: _(`#RecommenderDemos_RecFiveYear`),
                strSubtitle: _(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, _.jsx)(_, {
                nAccountID: _,
                bExclude: _,
                strName: `RecTwoYear`,
                strTitle: _(`#RecommenderDemos_RecTwoYear`),
                strSubtitle: _(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, _.jsx)(_, {
                nAccountID: _,
                bExclude: _,
                strName: `RecOneYear`,
                strTitle: _(`#RecommenderDemos_RecOneYear`),
                strSubtitle: _(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, _.jsx)(_, {
                nAccountID: _,
                bExclude: _,
                strName: `RecSixMonths`,
                strTitle: _(`#RecommenderDemos_RecSixMonths`),
                strSubtitle: _(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, _.jsx)(_, {
                nAccountID: _,
                bExclude: _,
                strName: `RecEmbedding`,
                strTitle: _(`#RecommenderDemos_RecEmbedding`),
                strSubtitle: ``,
              }),
            ],
          }),
        })
      : (0, _.jsx)(`div`, {
          className: void 0,
          children: (0, _.jsxs)(`div`, {
            className: void 0,
            children: [
              (0, _.jsx)(`div`, {
                className: void 0,
                children: _(`#LoginText`),
              }),
              (0, _.jsx)(`div`, {
                className: _(`btn_green_white_innerfade`, ` btn_medium`),
                onClick: _,
                children: (0, _.jsx)(`span`, {
                  children: _(`#LoginButton`),
                }),
              }),
            ],
          }),
        });
  };
export { _ as default };
