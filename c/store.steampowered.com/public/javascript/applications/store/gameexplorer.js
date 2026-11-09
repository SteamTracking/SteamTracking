import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _ } from "./libraries.js";
import { _, _ } from "./slider.js";
import { _ } from "./bottomrow.js";
import { _, _ } from "./storeitemhooks.js";
import { _ } from "./storedisplayutils.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
import { _ } from "./partnereventslogin.js";
var _ = _(_());
function _(_, _, _, _, _) {
  return _(_(_, _, _, _, _));
}
function _(_, _, _, _, _) {
  return {
    queryKey: [`gamemixer`, _, _, _, _, _],
    queryFn: async () => {
      let _ = {
          appids: _.join(`,`),
          appweights: _.join(`,`),
          sessionid: _(),
          selffactor: _,
          popularity: _ ? 0 : _,
          scoperange: _ ? 100 : 0,
          scopedecayrange: _ ? 1e3 : 0,
          scopedecaystrength: _ ? 20 : 0,
        },
        _ = await _.default.get(
          `${_.STORE_BASE_URL}gameexplorer/exploreapplist`,
          {
            params: _,
            withCredentials: !0,
            timeout: 1e4,
          },
        );
      if (_.data)
        return Object.entries(_.data)
          .map(([_, _]) => ({
            nAppID: Number(_),
            fDistance: Number(_),
          }))
          .filter((_) => _.fDistance > 0 && !_.includes(_.nAppID))
          .sort((_, _) => _.fDistance - _.fDistance);
      throw `Failed FetchAppValues`;
    },
    placeholderData: (_) => _,
  };
}
function _() {
  return _(_());
}
function _() {
  return {
    queryKey: [`gamemixerplayed`],
    queryFn: async () => {
      let _ = {
          sessionid: _(),
        },
        _ = await _.default.get(
          `${_.STORE_BASE_URL}gameexplorer/exploreplayedlist`,
          {
            params: _,
            withCredentials: !0,
            timeout: 1e4,
          },
        );
      if (_.data) return _.data;
      throw `Failed FetchAppValues`;
    },
    placeholderData: (_) => _,
  };
}
var _ = _(_()),
  _ = `NWE3szrfD3A-`,
  _ = `V5XyNQcfwrE-`,
  _ = `VH0u0ICJIG4-`,
  _ = `S2GThvdyV8U-`,
  _ = `_3V22LRI6mbQ-`,
  _ = `UKRbPe4-C4Q-`,
  _ = `cxGlmI0J5e0-`,
  _ = `-X-jdCgRCHs-`,
  _ = `FqIRlgjY9pw-`,
  _ = `s-KV4sPdLCA-`,
  _ = `Nqln30YFnNs-`,
  _ = `MpbW2y8z-s0-`,
  _ = `g3jnfK3rgTg-`,
  _ = `jEXf66eOdI0-`,
  _ = `vWlLBrkWQog-`,
  _ = `aWV0PYYyIHk-`,
  _ = `ldn4Jfom1k8-`,
  _ = `Mnc8dqkuHf0-`,
  _ = `EYpluha3ens-`,
  _ = `HTS7LpUl0OQ-`,
  _ = `XMKh62SqrNM-`,
  _ = `_4IXTa2F56iI-`,
  _ = `gDkEQpJ4vME-`,
  _ = `mAG3BrWx38U-`,
  _ = `XQjixtYnexw-`,
  _ = `b2P8TJ-H27k-`,
  _ = _();
function _(_) {
  return `/gameexplorer/${_.arrSelectedAppInfos.length == 0 ? `0` : _.arrSelectedAppInfos.map((_) => _.nAppID).join()}/${_.arrSelectedAppInfos.length == 0 ? `0` : _.arrSelectedAppInfos.map((_) => _.nWeight.toFixed(0)).join()}/${_.nSelfFactor}/${_.nPopularity}/${_.bSimilar}`;
}
function _(_) {
  let _ = _.appids?.split(`,`).filter((_) => _ != `0`) ?? [],
    _ = _.weights?.split(`,`).filter((_) => _ != `0`) ?? [];
  return {
    arrSelectedAppInfos: _.map((_) => Number(_)).map((_, _) => ({
      nAppID: _,
      nWeight: Number(_[_]),
    })),
    nSelfFactor: Number(_?.selffactor ?? `0`),
    nPopularity: Number(_?.popularity ?? `0`),
    bSimilar: _?.similar == `true`,
  };
}
function _() {
  let _ = _(_()),
    [_, _] = _.useState(_),
    [_, _] = _.useState(_),
    _ = _(),
    _ = _(
      _.arrSelectedAppInfos.map((_) => _.nAppID),
      _.arrSelectedAppInfos.map((_) => _.nWeight),
      _.nSelfFactor,
      _.nPopularity,
      _.bSimilar,
    );
  return (0, _.jsx)(_, {
    controller: `gameexplorer`,
    method: `default`,
    feature: `capsule`,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        className: _(_, _.isFetching && void 0),
        children: (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsx)(_, {}),
            !_.steamid && (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              state: _,
              onChange: (_, _) => {
                (_(_), _ && (_.push(_(_)), _(_)));
              },
            }),
            _.data &&
              (0, _.jsx)(_, {
                arrNearApps: _.data,
                bIsPending: _.isFetching,
                fnSetApp: (_) => {
                  let _ = {
                    ..._,
                    arrSelectedAppInfos: [
                      {
                        nAppID: _,
                        nWeight: 100,
                      },
                    ],
                  };
                  (_(_), _.push(_(_)), _(_));
                },
              }),
          ],
        }),
      }),
    }),
  });
}
function _() {
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        children: `Game Explorer`,
      }),
      (0, _.jsx)(_, {
        className: _,
        children: `Explore and Mix Games`,
      }),
    ],
  });
}
function _(_) {
  let [_] = _(_.selectedAppInfo.nAppID, {
    include_basic_info: !0,
    include_assets_without_overrides: !0,
  });
  if (!_) return null;
  let _ = _.GetAssetsWithoutOverrides().GetMainCapsuleURL();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          size: `1`,
          color: `red`,
          onClick: () => _.onRemove(_.selectedAppInfo.nAppID),
          children: `X`,
        }),
      }),
      (0, _.jsx)(`img`, {
        className: void 0,
        src: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children:
          _.nNumSelected > 1 &&
          (0, _.jsx)(_, {
            value: _.selectedAppInfo.nWeight,
            min: 0,
            max: 100,
            onValueChange: (_) =>
              _.onWeightChange(_.selectedAppInfo.nAppID, _, !1),
            onValueSettled: (_) =>
              _.onWeightChange(_.selectedAppInfo.nAppID, _, !0),
          }),
      }),
    ],
  });
}
function _(_) {
  if (_.bSimilar) return `Similar`;
  switch (_.nPopularity) {
    case 0:
      return `Any`;
    case 40:
      return `Popular`;
    case 130:
      return `Niche`;
  }
  return ``;
}
function _(_) {
  switch (_.nSelfFactor) {
    case 0:
      return `None`;
    case 20:
      return `Some`;
    case 40:
      return `Lots`;
  }
  return ``;
}
function _(_) {
  let [_, _] = _.useState(_(_.state)),
    [_, _] = _.useState(_(_.state)),
    _ = (_, _, _) => {
      let _ = _.state.arrSelectedAppInfos.slice();
      _.find((_) => _.nAppID == _) ??
        ((_ = 100 / (_.length + 1)),
        _.push({
          nAppID: _,
          nWeight: _,
        }));
      let _ = !1;
      if (
        (_ == -1 && ((_ = 0), (_ = _.filter((_) => _.nAppID != _)), (_ = !0)),
        _.length > 1)
      ) {
        let _ = _.map((_) => (_.nAppID == _ ? null : _.nWeight)).filter(
            (_) => _ != null,
          ),
          _ = _.reduce((_, _) => _ + _, 0),
          _ = (100 - _ - _) / (_.length - +!_),
          _ = _.reduce((_, _) => _ + Math.max(0, _ + _ - 100), 0),
          _ = _.reduce((_, _) => _ + Math.min(0, _ + _), 0);
        ((_ += Math.floor(_ / (_.length - 1))),
          (_ += Math.floor(_ / (_.length - 1))),
          (_ = _.map((_) => ({
            nAppID: _.nAppID,
            nWeight:
              _.nAppID == _ ? _ : Math.max(0, Math.min(100, _.nWeight + _)),
          }))),
          _.onChange(
            {
              ..._.state,
              arrSelectedAppInfos: _,
            },
            _,
          ));
      } else
        _.onChange(
          {
            ..._.state,
            arrSelectedAppInfos: _,
          },
          _,
        );
    },
    _ = (_) => {
      _(_, 100, !0);
    },
    _ = (_) => {
      _(_, -1, !0);
    },
    _ = (_) => {
      switch (_) {
        case `None`:
          _.onChange(
            {
              ..._.state,
              nSelfFactor: 0,
            },
            !0,
          );
          break;
        case `Some`:
          _.onChange(
            {
              ..._.state,
              nSelfFactor: 20,
            },
            !0,
          );
          break;
        case `Lots`:
          _.onChange(
            {
              ..._.state,
              nSelfFactor: 40,
            },
            !0,
          );
      }
      _(_);
    },
    _ = (_) => {
      switch (_) {
        case `Similar`:
          _.onChange(
            {
              ..._.state,
              nPopularity: 0,
              bSimilar: !0,
            },
            !0,
          );
          break;
        case `Any`:
          _.onChange(
            {
              ..._.state,
              nPopularity: 0,
              bSimilar: !1,
            },
            !0,
          );
          break;
        case `Popular`:
          _.onChange(
            {
              ..._.state,
              nPopularity: 40,
              bSimilar: !1,
            },
            !0,
          );
          break;
        case `Niche`:
          _.onChange(
            {
              ..._.state,
              nPopularity: 130,
              bSimilar: !1,
            },
            !0,
          );
      }
      _(_);
    };
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _.state.arrSelectedAppInfos.length == 0 &&
              (0, _.jsx)(`div`, {
                className: `x-xgneoVzTg-`,
                children: `Add games to start exploring`,
              }),
            _.state.arrSelectedAppInfos.map((_) =>
              (0, _.jsx)(
                _,
                {
                  selectedAppInfo: _,
                  onWeightChange: _,
                  onRemove: _,
                  nNumSelected: _.state.arrSelectedAppInfos.length,
                },
                _.nAppID,
              ),
            ),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              fnSelectAppID: _,
              arrSelectedAppIDs: _.state.arrSelectedAppInfos.map(
                (_) => _.nAppID,
              ),
            }),
            (0, _.jsx)(_, {
              fnSelectAppID: _,
              arrSelectedAppIDs: _.state.arrSelectedAppInfos.map(
                (_) => _.nAppID,
              ),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: `Popularity`,
                }),
                (0, _.jsx)(_, {
                  options: [`Similar`, `Any`, `Popular`, `Niche`],
                  value: _,
                  onValueChange: (_) => _(_),
                  radius: `sm`,
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    _ == `Similar` &&
                      `Games with similar popularity to your input games`,
                    _ == `Any` && `No popularity restrictions, can be noisy`,
                    _ == `Popular` && `Higher popularity games`,
                    _ == `Niche` && `Lower popularity games, can be noisy`,
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: `Self Factor`,
                }),
                (0, _.jsx)(_, {
                  options: [`None`, `Some`, `Lots`],
                  value: _,
                  onValueChange: (_) => _(_),
                  radius: `sm`,
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    _ == `None` && `Your game preferences are not factored in`,
                    _ == `Some` &&
                      `A bit of your game preferences are mixed in`,
                    _ == `Lots` &&
                      `Significantly biased towards your game preferences`,
                  ],
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
  let [_] = _(_.nAppID, 0, _);
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            capsule: {
              _: _.nAppID,
            },
            imageType: `library`,
            nWidthMultiplier: 2,
            bShowName: !1,
            bHidePlatforms: !0,
            bHidePrice: !0,
            bHideStatusBanners: !0,
            bShowIgnoreButton: !0,
            bShowDescriptionInHover: !0,
            bPreferAssetWithoutOverride: !1,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              `${(_.fDistance * 100).toFixed(2)}%`,
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  size: `1`,
                  color: `green`,
                  onClick: () => _.fnSetApp(_.nAppID),
                  children: `Go`,
                }),
              }),
            ],
          }),
        ],
      })
    : null;
}
function _(_) {
  return _.arrNearApps.length == 0
    ? null
    : (0, _.jsx)(`div`, {
        className: _(_, _.bIsPending && `r9iZqJcYbak-`),
        children: _.arrNearApps?.map((_) =>
          (0, _.jsx)(
            _,
            {
              nAppID: _.nAppID,
              fDistance: _.fDistance,
              fnSetApp: _.fnSetApp,
            },
            _.nAppID,
          ),
        ),
      });
}
function _() {
  return (0, _.jsxs)(_, {
    className: void 0,
    children: [
      _(`#PersonalCalendar_LoginPrompt`),
      (0, _.jsx)(`button`, {
        onClick: _,
        className: void 0,
        children: _(`#Login_SignIn`),
      }),
    ],
  });
}
function _(_) {
  let [_] = _(_.nAppID, {
    include_basic_info: !0,
    include_assets_without_overrides: !0,
  });
  if (!_) return null;
  let _ = _.GetAssetsWithoutOverrides().GetSmallCapsuleURL();
  return (0, _.jsxs)(`div`, {
    className: _,
    onPointerDown: () => _.onClick(_.nAppID),
    children: [
      (0, _.jsx)(`img`, {
        className: _,
        src: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.GetName(),
      }),
    ],
  });
}
var _ = _.forwardRef(function (_, _) {
    let _ = _(_.strSearch, null, 10),
      _ = _.fnSetResultApps;
    return (
      _.useEffect(() => {
        _(_.data?.rgItemIDs.map((_) => _.appid));
      }, [_, _.data]),
      (0, _.jsx)(`div`, {
        className: _(_, _.data?.rgItemIDs.length > 0 && `g6SP7v41-Kc-`),
        ref: _,
        children: _.data?.rgItemIDs
          .filter((_) => !_.arrIgnoreAppIDs.includes(_.appid))
          .map((_) =>
            (0, _.jsx)(
              _,
              {
                nAppID: _.appid,
                onClick: _.fnClickApp,
              },
              _.appid,
            ),
          ),
      })
    );
  }),
  _ = (_) => {
    let [_, _] = _.useState(``),
      [_, _] = _.useState(0),
      [_, _] = _.useState(0),
      [_, _] = _.useState([]),
      _ = _.useRef(_),
      _ = _.useRef(null);
    _.useEffect(() => {
      _.current = _;
    }, [_]);
    let _ = () => {
        Date.now() - _.current < 300 || (_(0), _([]));
      },
      _ = (_) => {
        _ != _ && (_(_), _(Date.now()), setTimeout(_, 300));
      },
      _ = (_) => {
        (_.fnSelectAppID(_), _(``), _(0), _([]), _(Date.now()));
      },
      _ = (_) => {
        switch (_) {
          case `Enter`:
            _.length > 0 && _(_[0]);
            break;
          case `Escape`:
            _(``);
        }
      },
      _ = _.arrSelectedAppIDs.length >= 3;
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`input`, {
          type: `text`,
          className: _(_, _ && `TAlX1lcqH8Y-`),
          value: _,
          onChange: (_) => _(_.target.value),
          onKeyDown: (_) => _(_.key),
          onBlur: (_) => _(``),
          placeholder: _ ? `Max three games` : `Type any game name`,
          disabled: _,
        }),
        (0, _.jsx)(_, {
          strSearch: _,
          nSelectedResult: _,
          fnSetResultApps: _,
          fnClickApp: _,
          arrIgnoreAppIDs: _.arrSelectedAppIDs,
          ref: _,
        }),
      ],
    });
  },
  _ = (_) => {
    let _ = _().data,
      _ = _?.appids ?? [];
    return (0, _.jsx)(`div`, {
      className: void 0,
      children: (0, _.jsx)(_, {
        options: _,
        size: `1`,
        selectedValue: 0,
        onSelectionChange: (_) => _.fnSelectAppID(_),
        getOptionLabel: (_) =>
          _ == 0
            ? `Select a recent game to add it`
            : _?.names[_?.appids.indexOf(_)],
      }),
    });
  };
export { _ as default };
