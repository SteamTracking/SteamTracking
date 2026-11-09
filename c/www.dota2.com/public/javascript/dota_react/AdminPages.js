(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [87084],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        (__webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          }));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = (_) => {
            const [_, _] = (0, _.useState)(""),
              _ = (0, _._)();
            if (_.isLoading)
              return (0, _.jsx)("div", {
                className: _().HeroPicker,
                children: (0, _.jsx)("div", {
                  className: _().Loading,
                  children: "Loading...",
                }),
              });
            if (!_.data) return null;
            const _ = _.data;
            return (0, _.jsx)("div", {
              className: _().HeroPickerPopupBackground,
              onClick: () => _.fnSetSelectedHero(-1),
              children: (0, _.jsxs)("div", {
                className: _().HeroPickerPopup,
                children: [
                  (0, _.jsx)("div", {
                    className: _().Title,
                    children: "Select Hero",
                  }),
                  (0, _.jsx)("div", {
                    className: _().Grid,
                    children: _.heroes.map((_) =>
                      (0, _.jsxs)(
                        "div",
                        {
                          className: _().HeroSelector,
                          onClick: (_) => {
                            (_.fnSetSelectedHero(_._), _.stopPropagation());
                          },
                          children: [
                            (0, _.jsx)("div", {
                              className: _().Portrait,
                              style: {
                                backgroundImage: `url( ${_._.IMG_URL}heroes/${_.name.replace("npc_dota_hero_", "")}.png`,
                              },
                            }),
                            (0, _.jsx)("div", {
                              className: _().Name,
                              children: (0, _._)(_.name_loc),
                            }),
                          ],
                        },
                        _._,
                      ),
                    ),
                  }),
                ],
              }),
            });
          },
          _ = (_) => {
            const [_, _] = _.useState(!1),
              _ = (0, _._)(),
              _ = (0, _._)(_.nHeroID),
              _ = (0, _._)(_.nHeroID),
              _ = (0, _._)().ownerWindow;
            _.useEffect(() => {
              if (_.nHeroID == 0 && _.data) {
                const _ = (0, _._)(0, _.data.heroes.length - 1);
                _.fnSetSelectedHero(_.data.heroes[_]._);
              }
            }, [_, _]);
            const _ = (_) => {
                (_(!1), _ != -1 && _.fnSetSelectedHero(_));
              },
              _ = _.data,
              _ = _.data,
              _ = _.document?.body;
            return (0, _.jsxs)("div", {
              className: _().HeroOption,
              children: [
                (0, _.jsx)("div", {
                  className: _().Name,
                  children: _.bShowName ? (0, _._)(_?.name_loc) : _.strLabel,
                }),
                (0, _.jsx)("div", {
                  className: _().Portrait,
                  style: {
                    backgroundImage: `url( ${_._.IMG_URL}heroes/${_?.name.replace("npc_dota_hero_", "")}.png`,
                  },
                  onClick: () => _(!0),
                }),
                _ &&
                  _.createPortal(
                    (0, _.jsx)(_, {
                      fnSetSelectedHero: _,
                    }),
                    _,
                  ),
              ],
            });
          },
          _ = (_) => {
            const _ = (0, _._)(_.nAbilityID).data;
            return (0, _.jsx)(_._, {
              toolTipContent: _?.name_loc,
              direction: "top",
              strTooltipClassname: _().ToolTip,
              children: (0, _.jsx)("div", {
                className: _().AbilityIcon,
                style: {
                  backgroundImage: `url( ${_._.IMG_URL}abilities/${_?.name?.replace("ability_", "")}.png`,
                },
              }),
            });
          },
          _ = (_) => {
            const _ = (0, _._)(_.nItemID).data;
            return (0, _.jsx)(_._, {
              toolTipContent: _?.name_loc,
              direction: "top",
              strTooltipClassname: _().ToolTip,
              children: (0, _.jsx)("div", {
                className: _().ItemIcon,
                style: {
                  backgroundImage: `url( ${_._.IMG_URL}items/${_?.name?.replace("item_", "").replace("recipe_", "")}.png`,
                },
              }),
            });
          },
          _ = (_) => {
            const [_, _] = (0, _.useState)(""),
              _ = (0, _._)();
            if (_.isLoading)
              return (0, _.jsx)("div", {
                className: _().ItemPickerPopupBackground,
                children: (0, _.jsx)("div", {
                  className: _().ItemPickerPopup,
                  children: (0, _.jsx)("div", {
                    className: _().Loading,
                    children: "Loading...",
                  }),
                }),
              });
            if (!_.data) return null;
            let _ = _.data.itemabilities
              .filter(
                (_) => !_.name_loc.includes("Recipe") && _.name_loc.length > 0,
              )
              .sort((_, _) => (_.name_loc < _.name_loc ? -1 : 1));
            return (0, _.jsx)("div", {
              className: _().ItemPickerPopupBackground,
              onClick: () => _.fnSetSelectedItem(-1),
              children: (0, _.jsxs)("div", {
                className: _().ItemPickerPopup,
                children: [
                  (0, _.jsx)("div", {
                    className: _().Title,
                    children: "Select Item",
                  }),
                  (0, _.jsxs)("div", {
                    className: _().Grid,
                    children: [
                      _.bAllowEmpty &&
                        (0, _.jsxs)(
                          "div",
                          {
                            className: _().ItemSelector,
                            onClick: (_) => {
                              (_.fnSetSelectedItem(0), _.stopPropagation());
                            },
                            children: [
                              (0, _.jsx)("div", {
                                className: _().Icon,
                              }),
                              (0, _.jsx)("div", {
                                className: _().Name,
                                children: "Clear",
                              }),
                            ],
                          },
                          0,
                        ),
                      _.filter((_) =>
                        _.eItemFilter == 1 ||
                        (_.is_lategame_suggested &&
                          (_.eItemFilter == 3 || _.eItemFilter == 4)) ||
                        (_.is_earlygame_suggested &&
                          (_.eItemFilter == 2 || _.eItemFilter == 4)) ||
                        (!_.is_earlygame_suggested &&
                          !_.is_lategame_suggested &&
                          _.eItemFilter == 5)
                          ? !0
                          : _.eItemFilter == 6
                            ? _.fnCustomFilter(_)
                            : !1,
                      ).map((_) =>
                        (0, _.jsxs)(
                          "div",
                          {
                            className: _().ItemSelector,
                            onClick: (_) => {
                              (_.fnSetSelectedItem(_._), _.stopPropagation());
                            },
                            children: [
                              (0, _.jsx)("div", {
                                className: _().Icon,
                                style: {
                                  backgroundImage: `url( ${_._.IMG_URL}items/${_.name.replace("item_", "")}.png`,
                                },
                              }),
                              (0, _.jsx)("div", {
                                className: _().Name,
                                children: (0, _._)(_.name_loc),
                              }),
                            ],
                          },
                          _._,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            });
          };
        var _ = ((_) => (
          (_[(_.ITEM_OPTIONS_ALL = 1)] = "ITEM_OPTIONS_ALL"),
          (_[(_.ITEM_OPTIONS_EARLY = 2)] = "ITEM_OPTIONS_EARLY"),
          (_[(_.ITEM_OPTIONS_LATE = 3)] = "ITEM_OPTIONS_LATE"),
          (_[(_.ITEM_OPTIONS_EARLY_LATE = 4)] = "ITEM_OPTIONS_EARLY_LATE"),
          (_[(_.ITEM_OPTIONS_NOT_EARLY_LATE = 5)] =
            "ITEM_OPTIONS_NOT_EARLY_LATE"),
          (_[(_.ITEM_OPTIONS_CUSTOM = 6)] = "ITEM_OPTIONS_CUSTOM"),
          _
        ))(_ || {});
        const _ = (_) => {
            const [_, _] = _.useState(!1),
              _ = (0, _._)(_.nItemID),
              _ = (0, _._)().ownerWindow,
              _ = (_) => {
                (_(!1), _ != -1 && _.fnSetSelectedItem(_));
              },
              _ = _.data,
              _ = _.document?.body;
            return (0, _.jsxs)("div", {
              className: _().ItemOption,
              children: [
                (0, _.jsx)("div", {
                  className: _().Name,
                  children: _.bShowName ? (0, _._)(_?.name_loc) : _.strLabel,
                }),
                (0, _.jsx)("div", {
                  className: _().Icon,
                  style: {
                    backgroundImage: `url( ${_._.IMG_URL}items/${_?.name?.replace("item_", "")}.png`,
                  },
                  onClick: () => _(!0),
                }),
                _ &&
                  _.createPortal(
                    (0, _.jsx)(_, {
                      fnSetSelectedItem: _,
                      bAllowEmpty: _.bAllowEmpty,
                      eItemFilter: _.eItemFilter,
                      fnCustomFilter: _.fnCustomFilter,
                    }),
                    _,
                  ),
              ],
            });
          },
          _ = (_) =>
            (0, _.jsxs)("div", {
              className: _().Option,
              children: [
                (0, _.jsx)("div", {
                  className: _().Name,
                  children: "Position",
                }),
                (0, _.jsxs)("select", {
                  className: _().PositionSelector,
                  value: _.nPosition,
                  onChange: (_) => _.fnSetPosition(parseInt(_.target.value)),
                  children: [
                    (0, _.jsx)("option", {
                      value: 1,
                      children: "Safe",
                    }),
                    (0, _.jsx)("option", {
                      value: 2,
                      children: "Off",
                    }),
                    (0, _.jsx)("option", {
                      value: 4,
                      children: "Mid",
                    }),
                    (0, _.jsx)("option", {
                      value: 8,
                      children: "Support",
                    }),
                    (0, _.jsx)("option", {
                      value: 16,
                      children: "Hard Support",
                    }),
                  ],
                }),
              ],
            }),
          _ = (_) =>
            (0, _.jsxs)("div", {
              className: _().Option,
              children: [
                (0, _.jsx)("div", {
                  className: _().Name,
                  children: "Tier",
                }),
                (0, _.jsxs)("select", {
                  className: _().TierSelector,
                  value: _.nTier,
                  onChange: (_) => _.fnSetTier(parseInt(_.target.value)),
                  children: [
                    (0, _.jsx)("option", {
                      value: 0,
                      children: "Tier 1",
                    }),
                    (0, _.jsx)("option", {
                      value: 1,
                      children: "Tier 2",
                    }),
                    (0, _.jsx)("option", {
                      value: 2,
                      children: "Tier 3",
                    }),
                    (0, _.jsx)("option", {
                      value: 3,
                      children: "Tier 4",
                    }),
                    (0, _.jsx)("option", {
                      value: 4,
                      children: "Tier 5",
                    }),
                  ],
                }),
              ],
            }),
          _ = (_) =>
            jsxs("div", {
              className: styles.Option,
              children: [
                jsx("div", {
                  className: styles.Name,
                  children: "Lane",
                }),
                jsxs("select", {
                  className: styles.LaneSelector,
                  value: _.nLane,
                  onChange: (_) => _.fnSetLane(parseInt(_.target.value)),
                  children: [
                    jsx("option", {
                      value: 1,
                      children: "Safe",
                    }),
                    jsx("option", {
                      value: 2,
                      children: "Off",
                    }),
                    jsx("option", {
                      value: 3,
                      children: "Mid",
                    }),
                  ],
                }),
              ],
            }),
          _ = (_) =>
            (0, _.jsxs)("div", {
              className: _().Option,
              children: [
                (0, _.jsx)("div", {
                  className: _().Name,
                  children: "Game Mode",
                }),
                (0, _.jsxs)("select", {
                  className: _().GameModeSelector,
                  value: _.nGameMode,
                  onChange: (_) => _.fnSetGameMode(parseInt(_.target.value)),
                  children: [
                    (0, _.jsx)("option", {
                      value: 22,
                      children: "All Draft",
                    }),
                    (0, _.jsx)("option", {
                      value: 1,
                      children: "All Pick",
                    }),
                    (0, _.jsx)("option", {
                      value: 23,
                      children: "Turbo",
                    }),
                    (0, _.jsx)("option", {
                      value: 2,
                      children: "Captains Mode",
                    }),
                    (0, _.jsx)("option", {
                      value: 16,
                      children: "Captains Draft",
                    }),
                    (0, _.jsx)("option", {
                      value: 4,
                      children: "Single Draft",
                    }),
                    (0, _.jsx)("option", {
                      value: 13,
                      children: "Hero Pool",
                    }),
                  ],
                }),
              ],
            }),
          _ = (_) => {
            const [_, _] = _.useState(_.strMMR);
            return (
              _.useEffect(() => {
                if (_.strMMR == _) return () => {};
                const _ = setTimeout(() => _.fnSetMMR(_), 400);
                return () => clearTimeout(_);
              }, [_, _]),
              (0, _.jsxs)("div", {
                className: _().Option,
                children: [
                  (0, _.jsx)("div", {
                    className: _().Name,
                    children: "MMR",
                  }),
                  (0, _.jsx)("input", {
                    type: "text",
                    className: _().AverageMMRInput,
                    value: _,
                    onChange: (_) => _(_.target.value),
                  }),
                ],
              })
            );
          };
        function _(_) {
          const _ = new URLSearchParams();
          return (
            Object.keys(_).forEach((_) => {
              Array.isArray(_[_])
                ? _.append(_, _[_].join(","))
                : _.append(_, _[_]);
            }),
            _.toString()
          );
        }
        const _ = "pregameitems",
          _ = "neutralitems",
          _ = "maingameitemsequence",
          _ = "abilities",
          _ = () => {
            const _ = (0, _._)(),
              _ = (0, _._)();
            let _;
            switch (_.strFeature) {
              case _:
                _ = (0, _.jsx)(_, {
                  strFeature: _.strFeature,
                  strConfig: _.strConfig,
                });
                break;
              case _:
                _ = (0, _.jsx)(_, {
                  strFeature: _.strFeature,
                  strConfig: _.strConfig,
                });
                break;
              case _:
                _ = (0, _.jsx)(_, {
                  strFeature: _.strFeature,
                  strConfig: _.strConfig,
                });
                break;
              case _:
                _ = (0, _.jsx)(_, {
                  strFeature: _.strFeature,
                  strConfig: _.strConfig,
                });
                break;
            }
            if (_ == null)
              return (0, _.jsx)(_._, {
                _: _._.dotaplustester(_),
              });
            const _ = (_) => {
              _.push(_._.dotaplustester(_, _.strConfig));
            };
            return (0, _.jsxs)("div", {
              className: _().DotaPlusTesterPage,
              children: [
                (0, _.jsx)(_._, {
                  bOverlapping: !1,
                }),
                (0, _.jsxs)("div", {
                  className: _().SelectionHeader,
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _().Option,
                        _.strFeature == _ && _().Selected,
                      ),
                      onClick: () => _(_),
                      children: "Abilities",
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _().Option,
                        _.strFeature == _ && _().Selected,
                      ),
                      onClick: () => _(_),
                      children: "Pregame Items",
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _().Option,
                        _.strFeature == _ && _().Selected,
                      ),
                      onClick: () => _(_),
                      children: "Main Game Items",
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _().Option,
                        _.strFeature == _ && _().Selected,
                      ),
                      onClick: () => _(_),
                      children: "Neutral Items",
                    }),
                  ],
                }),
                _,
              ],
            });
          },
          _ = (_) => {
            const _ = new URLSearchParams(_.strConfig),
              _ = (0, _._)();
            let _ = parseInt(_.get("nHeroID") || "0"),
              _ = parseInt(_.get("nPosition") || "0"),
              _ = (_.get("arrAlliedHeroIDs") || "0,0,0,0")
                .split(",")
                .map(Number),
              _ = (_.get("arrEnemyHeroIDs") || "0,0,0,0,0")
                .split(",")
                .map(Number),
              _ = (
                _.get("arrSkilledAbilities") ||
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
              )
                .split(",")
                .map(Number),
              _ = _.get("nAverageMMR") || "2000",
              _ = parseInt(_.get("nGameMode") || "22");
            const _ = () => {
                const _ = {
                  nHeroID: _,
                  nPosition: _,
                  arrAlliedHeroIDs: _,
                  arrEnemyHeroIDs: _,
                  nAverageMMR: parseInt(_),
                  nGameMode: _,
                  arrSkilledAbilities: _,
                };
                _.push(_._.dotaplustester(_.strFeature, _(_)));
              },
              _ = (_) => {
                (console.log("1"), (_ = _), _());
              },
              _ = (_) => {
                (console.log("3"), (_ = _), _());
              },
              _ = (_, _) => {
                (console.log("4"), (_[_] = _), _());
              },
              _ = (_, _) => {
                (console.log("6"), (_[_] = _), _());
              },
              _ = (_) => {
                (console.log("8"), (_ = _), _());
              },
              _ = (_) => {
                (console.log("9"), (_ = _), _());
              },
              _ = (_) => {
                (console.log("10"), (_[_.indexOf(0)] = _), _());
              },
              _ = () => {
                (console.log("11"),
                  (_ = [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  ]),
                  _());
              },
              _ = (0, _._)(_, _, _, _, parseInt(_), _, !0, _).data;
            let _ = [];
            if (_ && _.backend_response.outputs.length > 0)
              for (
                let _ = 0;
                _ <
                _.backend_response.outputs[0].categorical_crossentropy.value
                  .length;
                _++
              )
                _.push({
                  nAbilityID:
                    _.backend_response.outputs[0].categorical_crossentropy
                      .value[_],
                  fWeight:
                    _.backend_response.outputs[0].categorical_crossentropy
                      .weight[_],
                });
            return (0, _.jsx)("div", {
              className: _().DotaPlusTesterSubPage,
              children: (0, _.jsxs)("div", {
                className: _().Content,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().HeroList,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().YourHero,
                        children: (0, _.jsx)(_, {
                          strLabel: "Your Hero",
                          nHeroID: _,
                          fnSetSelectedHero: (_) => _(_),
                        }),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().Allies,
                        children: [
                          (0, _.jsx)(_, {
                            strLabel: "Ally #1",
                            nHeroID: _[0],
                            fnSetSelectedHero: (_) => _(0, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Ally #2",
                            nHeroID: _[1],
                            fnSetSelectedHero: (_) => _(1, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Ally #3",
                            nHeroID: _[2],
                            fnSetSelectedHero: (_) => _(2, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Ally #4",
                            nHeroID: _[3],
                            fnSetSelectedHero: (_) => _(3, _),
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().Enemies,
                        children: [
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #1",
                            nHeroID: _[0],
                            fnSetSelectedHero: (_) => _(0, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #2",
                            nHeroID: _[1],
                            fnSetSelectedHero: (_) => _(1, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #3",
                            nHeroID: _[2],
                            fnSetSelectedHero: (_) => _(2, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #4",
                            nHeroID: _[3],
                            fnSetSelectedHero: (_) => _(3, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #5",
                            nHeroID: _[4],
                            fnSetSelectedHero: (_) => _(4, _),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().Separator,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().MiscInfo,
                    children: [
                      (0, _.jsx)(_, {
                        nPosition: _,
                        fnSetPosition: _,
                      }),
                      (0, _.jsx)(_, {
                        nGameMode: _,
                        fnSetGameMode: _,
                      }),
                      (0, _.jsx)(_, {
                        strMMR: _,
                        fnSetMMR: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().Separator,
                  }),
                  (0, _.jsx)("div", {
                    className: _().Level,
                    children: `Level ${_.indexOf(0) + 1} `,
                  }),
                  (0, _.jsx)("div", {
                    className: _().SkilledAbilityList,
                    children: _.map((_, _) =>
                      (0, _.jsx)(
                        _,
                        {
                          nAbilityID: _,
                        },
                        `${_}_${_}`,
                      ),
                    ),
                  }),
                  (0, _.jsx)("div", {
                    className: _().ClearSkilledAbilities,
                    onClick: () => _(),
                    children: "Clear",
                  }),
                  (0, _.jsx)("div", {
                    className: _().Separator,
                  }),
                  (0, _.jsx)("div", {
                    className: _().AbilitySuggestions,
                    children: _.map((_) =>
                      (0, _.jsxs)(
                        "div",
                        {
                          className: _().Ability,
                          onClick: () => _(_.nAbilityID),
                          children: [
                            (0, _.jsx)(_, {
                              nAbilityID: _.nAbilityID,
                            }),
                            (0, _.jsx)("div", {
                              className: _()._,
                              children: _.nAbilityID,
                            }),
                            (0, _.jsx)("div", {
                              className: _().Weight,
                              children: `${(_.fWeight * 100).toFixed(2)}%`,
                            }),
                          ],
                        },
                        _.nAbilityID,
                      ),
                    ),
                  }),
                ],
              }),
            });
          },
          _ = (_) => {
            const _ = new URLSearchParams(_.strConfig),
              _ = (0, _._)();
            let _ = parseInt(_.get("nHeroID") || "0"),
              _ = parseInt(_.get("nPosition") || "0"),
              _ = (_.get("arrAlliedHeroIDs") || "0,0,0,0")
                .split(",")
                .map(Number),
              _ = (_.get("arrEnemyHeroIDs") || "0,0,0,0,0")
                .split(",")
                .map(Number),
              _ = _.get("nAverageMMR") || "2000",
              _ = parseInt(_.get("nGameMode") || "22");
            const _ = () => {
                const _ = {
                  nHeroID: _,
                  nPosition: _,
                  arrAlliedHeroIDs: _,
                  arrEnemyHeroIDs: _,
                  nAverageMMR: parseInt(_),
                  nGameMode: _,
                };
                _.push(_._.dotaplustester(_.strFeature, _(_)));
              },
              _ = (0, _._)(_, _, _, _, parseInt(_), _, !0).data;
            let _ = [];
            if (
              _ &&
              _.backend_response.outputs.length > 0 &&
              _.backend_response.outputs[0].categorical_crossentropy
                .value_sequence.length > 0
            )
              for (
                let _ = 0;
                _ <
                _.backend_response.outputs[0].categorical_crossentropy
                  .value_sequence[0].value.length;
                _++
              )
                _.push(
                  _.backend_response.outputs[0].categorical_crossentropy
                    .value_sequence[0].value[_],
                );
            const _ = (_) => {
                ((_ = _), _());
              },
              _ = (_) => {
                ((_ = _), _());
              },
              _ = (_, _) => {
                ((_[_] = _), _());
              },
              _ = (_, _) => {
                ((_[_] = _), _());
              },
              _ = (_) => {
                ((_ = _), _());
              },
              _ = (_) => {
                ((_ = _), _());
              },
              _ = (0, _._)(),
              _ = (0, _._)();
            return !_.data || !_.data
              ? (0, _.jsx)("div", {
                  className: _().Loading,
                  children: "Loading hero and item data...",
                })
              : (0, _.jsx)("div", {
                  className: _().DotaPlusTesterSubPage,
                  children: (0, _.jsxs)("div", {
                    className: _().Content,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().HeroList,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().YourHero,
                            children: (0, _.jsx)(_, {
                              strLabel: "Your Hero",
                              nHeroID: _,
                              fnSetSelectedHero: (_) => _(_),
                            }),
                          }),
                          (0, _.jsxs)("div", {
                            className: _().Allies,
                            children: [
                              (0, _.jsx)(_, {
                                strLabel: "Ally #1",
                                nHeroID: _[0],
                                fnSetSelectedHero: (_) => _(0, _),
                              }),
                              (0, _.jsx)(_, {
                                strLabel: "Ally #2",
                                nHeroID: _[1],
                                fnSetSelectedHero: (_) => _(1, _),
                              }),
                              (0, _.jsx)(_, {
                                strLabel: "Ally #3",
                                nHeroID: _[2],
                                fnSetSelectedHero: (_) => _(2, _),
                              }),
                              (0, _.jsx)(_, {
                                strLabel: "Ally #4",
                                nHeroID: _[3],
                                fnSetSelectedHero: (_) => _(3, _),
                              }),
                            ],
                          }),
                          (0, _.jsxs)("div", {
                            className: _().Enemies,
                            children: [
                              (0, _.jsx)(_, {
                                strLabel: "Enemy #1",
                                nHeroID: _[0],
                                fnSetSelectedHero: (_) => _(0, _),
                              }),
                              (0, _.jsx)(_, {
                                strLabel: "Enemy #2",
                                nHeroID: _[1],
                                fnSetSelectedHero: (_) => _(1, _),
                              }),
                              (0, _.jsx)(_, {
                                strLabel: "Enemy #3",
                                nHeroID: _[2],
                                fnSetSelectedHero: (_) => _(2, _),
                              }),
                              (0, _.jsx)(_, {
                                strLabel: "Enemy #4",
                                nHeroID: _[3],
                                fnSetSelectedHero: (_) => _(3, _),
                              }),
                              (0, _.jsx)(_, {
                                strLabel: "Enemy #5",
                                nHeroID: _[4],
                                fnSetSelectedHero: (_) => _(4, _),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: _().Separator,
                      }),
                      (0, _.jsxs)("div", {
                        className: _().MiscInfo,
                        children: [
                          (0, _.jsx)(_, {
                            nPosition: _,
                            fnSetPosition: _,
                          }),
                          (0, _.jsx)(_, {
                            nGameMode: _,
                            fnSetGameMode: _,
                          }),
                          (0, _.jsx)(_, {
                            strMMR: _,
                            fnSetMMR: _,
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: _().Separator,
                      }),
                      _.length > 0 &&
                        (0, _.jsx)("div", {
                          className: _().Results,
                          children: (0, _.jsx)("div", {
                            className: _().ItemList,
                            children: _.map((_, _) =>
                              (0, _.jsx)(
                                _,
                                {
                                  nItemID: _,
                                },
                                `InferenceReuslt_Item_${_}`,
                              ),
                            ),
                          }),
                        }),
                    ],
                  }),
                });
          };
        function _(_, _) {
          const _ = [];
          for (let _ = 0; _ < _.length; _ += _) _.push(_.slice(_, _ + _));
          return _;
        }
        const _ = (_) => {
            const _ = new URLSearchParams(_.strConfig),
              _ = (0, _._)();
            let _ = parseInt(_.get("nHeroID") || "0"),
              _ = parseInt(_.get("nPosition") || "0"),
              _ = (_.get("arrAlliedHeroIDs") || "0,0,0,0")
                .split(",")
                .map(Number),
              _ = (_.get("arrEnemyHeroIDs") || "0,0,0,0,0")
                .split(",")
                .map(Number),
              _ = _.get("nAverageMMR") || "2000",
              _ = parseInt(_.get("nGameMode") || "22"),
              _ = parseInt(_.get("nTier") || "0"),
              _ = (_.get("arrTrinkets") || "0,0,0,0").split(",").map(Number),
              _ = (_.get("arrEnchantments") || "0,0,0,0")
                .split(",")
                .map(Number),
              _ = (0, _._)(_).data;
            const _ = (_) => {
                ((_ = _), _());
              },
              _ = (_) => {
                ((_ = _), _());
              },
              _ = (_, _) => {
                ((_[_] = _), _());
              },
              _ = (_, _) => {
                ((_[_] = _), _());
              },
              _ = (_) => {
                ((_ = _), _());
              },
              _ = (_) => {
                ((_ = _), _());
              },
              _ = (_, _) => {
                ((_[_] = _), _());
              },
              _ = (_, _) => {
                ((_[_] = _), _());
              },
              _ = (_) => {
                _ != _ &&
                  ((_ = [0, 0, 0, 0, 0]), (_ = [0, 0, 0, 0, 0]), (_ = _), _());
              },
              _ = () => {
                const _ = {
                    nHeroID: _,
                    nPosition: _,
                    arrAlliedHeroIDs: _,
                    arrEnemyHeroIDs: _,
                    nAverageMMR: parseInt(_),
                    nGameMode: _,
                    nTier: _,
                    arrTrinkets: _,
                    arrEnchantments: _,
                  },
                  _ = _(_);
                _.strConfig != _ && _.push(_._.dotaplustester(_.strFeature, _));
              },
              _ = (0, _._)(),
              _ = (0, _._)(),
              _ = (0, _._)(_);
            let _;
            switch (_.data?.primary_attr) {
              case 0:
                _ = "strength";
                break;
              case 1:
                _ = "agility";
                break;
              case 2:
                _ = "intelligence";
                break;
              case 3:
                _ = "universal";
                break;
            }
            const _ = (0, _._)(_, _, _, _, parseInt(_), _, !0, _, _, _).data,
              _ = (0, _._)(_, _ + 1);
            if (!_.data || !_.data || !_.data)
              return (0, _.jsx)("div", {
                className: _().Loading,
                children: "Loading hero and item data...",
              });
            const _ = _.data,
              _ = _.tier[_].enhancements.map((_) => _.ability_id),
              _ = (_) =>
                _.neutral_item_tier == _
                  ? !0
                  : _.neutral_item_tier > _
                    ? !1
                    : _.neutral_item_tier != -1 && _.neutral_item_tier < _
                      ? _?.filter((_) => _.neutral_item_tier < _).length == 0
                      : !1;
            return (0, _.jsx)("div", {
              className: _().DotaPlusTesterSubPage,
              children: (0, _.jsxs)("div", {
                className: _().Content,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().HeroList,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().YourHero,
                        children: (0, _.jsx)(_, {
                          strLabel: "Your Hero",
                          nHeroID: _,
                          fnSetSelectedHero: (_) => _(_),
                        }),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().Allies,
                        children: [
                          (0, _.jsx)(_, {
                            strLabel: "Ally #1",
                            nHeroID: _[0],
                            fnSetSelectedHero: (_) => _(0, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Ally #2",
                            nHeroID: _[1],
                            fnSetSelectedHero: (_) => _(1, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Ally #3",
                            nHeroID: _[2],
                            fnSetSelectedHero: (_) => _(2, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Ally #4",
                            nHeroID: _[3],
                            fnSetSelectedHero: (_) => _(3, _),
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().Enemies,
                        children: [
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #1",
                            nHeroID: _[0],
                            fnSetSelectedHero: (_) => _(0, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #2",
                            nHeroID: _[1],
                            fnSetSelectedHero: (_) => _(1, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #3",
                            nHeroID: _[2],
                            fnSetSelectedHero: (_) => _(2, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #4",
                            nHeroID: _[3],
                            fnSetSelectedHero: (_) => _(3, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #5",
                            nHeroID: _[4],
                            fnSetSelectedHero: (_) => _(4, _),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().Separator,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().MiscInfo,
                    children: [
                      (0, _.jsx)(_, {
                        nPosition: _,
                        fnSetPosition: _,
                      }),
                      (0, _.jsx)(_, {
                        nGameMode: _,
                        fnSetGameMode: _,
                      }),
                      (0, _.jsx)(_, {
                        strMMR: _,
                        fnSetMMR: _,
                      }),
                      (0, _.jsx)(_, {
                        nTier: _,
                        fnSetTier: _,
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().IncludExcludeItemOption,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().ItemOptionTitle,
                        children: "Trinkets",
                      }),
                      (0, _._)(0, _.tier[_].trinket_options - 1).map((_) => {
                        const _ =
                          _?.backend_response.outputs[0].categorical_crossentropy.value.indexOf(
                            _[_],
                          );
                        return (0, _.jsxs)(
                          "div",
                          {
                            className: _().OptionColumn,
                            children: [
                              (0, _.jsx)(
                                _,
                                {
                                  nItemID: _[_],
                                  fnSetSelectedItem: (_) => _(_, _),
                                  bShowName: !0,
                                  bAllowEmpty: !0,
                                  eItemFilter: 6,
                                  fnCustomFilter: _,
                                  fnOverlayText: (_) =>
                                    _.neutral_item_tier.toString(),
                                },
                                `Trinket_${_}`,
                              ),
                              _ >= 0 &&
                                (0, _.jsx)("div", {
                                  className: _().Percent,
                                  children: `${(_?.backend_response.outputs[0].categorical_crossentropy.weight[_] * 100).toFixed(2)}%`,
                                }),
                            ],
                          },
                          `result_${_}`,
                        );
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().IncludExcludeItemOption,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().ItemOptionTitle,
                        children: "Enhancements",
                      }),
                      (0, _._)(0, _.tier[_].enhancement_options - 1).map(
                        (_) => {
                          const _ =
                            _?.backend_response.outputs[1].categorical_crossentropy.value.indexOf(
                              _[_],
                            );
                          return (0, _.jsxs)(
                            "div",
                            {
                              className: _().OptionColumn,
                              children: [
                                (0, _.jsx)(
                                  _,
                                  {
                                    nItemID: _[_],
                                    fnSetSelectedItem: (_) => _(_, _),
                                    bShowName: !0,
                                    bAllowEmpty: !0,
                                    eItemFilter: 6,
                                    fnCustomFilter: (_) => _.includes(_._),
                                  },
                                  `Trinket_${_}`,
                                ),
                                _ >= 0 &&
                                  (0, _.jsx)("div", {
                                    className: _().Percent,
                                    children: `${(_?.backend_response.outputs[1].categorical_crossentropy.weight[_] * 100).toFixed(2)}%`,
                                  }),
                              ],
                            },
                            `result_${_}`,
                          );
                        },
                      ),
                    ],
                  }),
                ],
              }),
            });
          },
          _ = (_) => {
            const _ = new URLSearchParams(_.strConfig),
              _ = (0, _._)();
            let _ = parseInt(_.get("nHeroID") || "0"),
              _ = parseInt(_.get("nPosition") || "0"),
              _ = (_.get("arrAlliedHeroIDs") || "0,0,0,0")
                .split(",")
                .map(Number),
              _ = (_.get("arrEnemyHeroIDs") || "0,0,0,0,0")
                .split(",")
                .map(Number),
              _ = _.get("nAverageMMR") || "2000",
              _ = parseInt(_.get("nGameMode") || "22"),
              _ = parseInt(_.get("nLobbyType") || "7"),
              _ = (
                _.get("arrInventoryItems") ||
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
              )
                .split(",")
                .map(Number),
              _ = (
                _.get("arrPurchasedItems") ||
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
              )
                .split(",")
                .map(Number),
              _ = parseFloat(_.get("fRepeatWeight") || "0.2"),
              _ = (_.get("arrLikedItems") || "0,0").split(",").map(Number),
              _ = (_.get("arrDislikedItems") || "0,0").split(",").map(Number);
            const _ = () => {
                const _ = {
                    nHeroID: _,
                    nPosition: _,
                    arrAlliedHeroIDs: _,
                    arrEnemyHeroIDs: _,
                    nAverageMMR: parseInt(_),
                    nGameMode: _,
                    nLobbyType: _,
                    arrPurchasedItems: _,
                    arrInventoryItems: _,
                    fRepeatWeight: _,
                    arrLikedItems: _,
                    arrDislikedItems: _,
                  },
                  _ = _(_);
                _.strConfig != _ && _.push(_._.dotaplustester(_.strFeature, _));
              },
              _ = 3e5,
              _ = -1e6;
            let _ = new Map(),
              _ = [],
              _ = [];
            for (const _ of _) _ != 0 && _.set(_, _);
            for (const _ of _) _ != 0 && _.set(_, _);
            const _ = (0, _._)(_, _, _, _, parseInt(_), _, _, _, [], _).data;
            if (
              _ &&
              _.backend_response.outputs.length > 0 &&
              _.backend_response.outputs[0].categorical_crossentropy
                .value_sequence
            ) {
              for (
                let _ = 0;
                _ <
                _.backend_response.outputs[0].categorical_crossentropy
                  .value_sequence[0].value.length;
                _++
              )
                _.push({
                  nItemID:
                    _.backend_response.outputs[0].categorical_crossentropy
                      .value_sequence[0].value[_],
                  fScore: 0,
                });
              for (
                let _ = 0;
                _ <
                _.backend_response.outputs[0].categorical_crossentropy.value
                  ?.length;
                _++
              ) {
                const _ =
                    _.backend_response.outputs[0].categorical_crossentropy
                      .value[_],
                  _ =
                    _.backend_response.outputs[0].categorical_crossentropy
                      .weight[_];
                _.push({
                  nItemID: _,
                  fScore: _,
                });
              }
            }
            const _ = (0, _._)(),
              _ = (0, _._)(),
              _ = (_) => {
                ((_ = _), _());
              },
              _ = (_) => {
                ((_ = _), _());
              },
              _ = (_, _) => {
                ((_[_] = _), _());
              },
              _ = (_, _) => {
                ((_[_] = _), _());
              },
              _ = (_) => {
                ((_ = _), _());
              },
              _ = (_) => {
                ((_ = _), _());
              },
              _ = (_) => {
                ((_[_.indexOf(0)] = _), _());
              },
              _ = () => {
                ((_ = [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0,
                ]),
                  _());
              },
              _ = (_) => {
                ((_ = _), _());
              },
              _ = (_, _) => {
                ((_[_] = _), _());
              },
              _ = (_, _) => {
                ((_[_] = _), _());
              },
              _ = (_, _) => {
                ((_[_] = _), _());
              };
            if (!_.data || !_.data)
              return (0, _.jsx)("div", {
                className: _().Loading,
                children: "Loading hero and item data...",
              });
            const _ = _(_, 5);
            return (0, _.jsx)("div", {
              className: _().DotaPlusTesterSubPage,
              children: (0, _.jsxs)("div", {
                className: _().Content,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().HeroList,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().YourHero,
                        children: (0, _.jsx)(_, {
                          strLabel: "Your Hero",
                          nHeroID: _,
                          fnSetSelectedHero: (_) => _(_),
                        }),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().Allies,
                        children: [
                          (0, _.jsx)(_, {
                            strLabel: "Ally #1",
                            nHeroID: _[0],
                            fnSetSelectedHero: (_) => _(0, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Ally #2",
                            nHeroID: _[1],
                            fnSetSelectedHero: (_) => _(1, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Ally #3",
                            nHeroID: _[2],
                            fnSetSelectedHero: (_) => _(2, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Ally #4",
                            nHeroID: _[3],
                            fnSetSelectedHero: (_) => _(3, _),
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().Enemies,
                        children: [
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #1",
                            nHeroID: _[0],
                            fnSetSelectedHero: (_) => _(0, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #2",
                            nHeroID: _[1],
                            fnSetSelectedHero: (_) => _(1, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #3",
                            nHeroID: _[2],
                            fnSetSelectedHero: (_) => _(2, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #4",
                            nHeroID: _[3],
                            fnSetSelectedHero: (_) => _(3, _),
                          }),
                          (0, _.jsx)(_, {
                            strLabel: "Enemy #5",
                            nHeroID: _[4],
                            fnSetSelectedHero: (_) => _(4, _),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().Separator,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().MiscInfo,
                    children: [
                      (0, _.jsx)(_, {
                        nPosition: _,
                        fnSetPosition: _,
                      }),
                      (0, _.jsx)(_, {
                        nGameMode: _,
                        fnSetGameMode: _,
                      }),
                      (0, _.jsx)(_, {
                        strMMR: _,
                        fnSetMMR: _,
                      }),
                      (0, _.jsxs)("div", {
                        className: _().Option,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().Name,
                            children: "Repeat Weight",
                          }),
                          (0, _.jsxs)("select", {
                            className: _().WeightSelector,
                            value: _,
                            onChange: (_) => _(parseFloat(_.target.value)),
                            children: [
                              (0, _.jsx)("option", {
                                value: 1,
                                children: "1.0",
                              }),
                              (0, _.jsx)("option", {
                                value: 0.8,
                                children: "0.8",
                              }),
                              (0, _.jsx)("option", {
                                value: 0.6,
                                children: "0.6",
                              }),
                              (0, _.jsx)("option", {
                                value: 0.4,
                                children: "0.4",
                              }),
                              (0, _.jsx)("option", {
                                value: 0.2,
                                children: "0.2",
                              }),
                              (0, _.jsx)("option", {
                                value: 0,
                                children: "0.0",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().IncludExcludeItemOption,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().ItemOptionTitle,
                        children: "Preferred Items",
                      }),
                      (0, _.jsx)(_, {
                        nItemID: _[0],
                        fnSetSelectedItem: (_) => _(0, _),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                      (0, _.jsx)(_, {
                        nItemID: _[1],
                        fnSetSelectedItem: (_) => _(1, _),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                      (0, _.jsx)(_, {
                        nItemID: _[2],
                        fnSetSelectedItem: (_) => _(2, _),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                      (0, _.jsx)(_, {
                        nItemID: _[3],
                        fnSetSelectedItem: (_) => _(3, _),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().IncludExcludeItemOption,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().ItemOptionTitle,
                        children: "Disliked Items",
                      }),
                      (0, _.jsx)(_, {
                        nItemID: _[0],
                        fnSetSelectedItem: (_) => _(0, _),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                      (0, _.jsx)(_, {
                        nItemID: _[1],
                        fnSetSelectedItem: (_) => _(1, _),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                      (0, _.jsx)(_, {
                        nItemID: _[2],
                        fnSetSelectedItem: (_) => _(2, _),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                      (0, _.jsx)(_, {
                        nItemID: _[3],
                        fnSetSelectedItem: (_) => _(3, _),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().Separator,
                  }),
                  (0, _.jsx)("div", {
                    className: _().PurchasedItemList,
                    children: _.map((_, _) =>
                      (0, _.jsx)(
                        "div",
                        {
                          onClick: () => {
                            (_.splice(_, 1), _.push(0), _());
                          },
                          children: (0, _.jsx)(_, {
                            nItemID: _,
                          }),
                        },
                        `${_}_${_}`,
                      ),
                    ),
                  }),
                  (0, _.jsx)("div", {
                    className: _().ClearSkilledAbilities,
                    onClick: () => _(),
                    children: "Clear",
                  }),
                  (0, _.jsx)("div", {
                    className: _().Separator,
                  }),
                  (0, _.jsx)("div", {
                    className: _().Header,
                    children: "Recommended Build Sequence",
                  }),
                  (0, _.jsx)("div", {
                    className: _().ItemList,
                    children: _.map((_, _) =>
                      (0, _.jsxs)(
                        "div",
                        {
                          className: _().Item,
                          onClick: () => _(_.nItemID),
                          children: [
                            (0, _.jsx)(_, {
                              nItemID: _.nItemID,
                            }),
                            _.fScore > 0 &&
                              (0, _.jsx)("div", {
                                className: _().Weight,
                                children: `${(_.fScore * 100).toFixed(2)}%`,
                              }),
                          ],
                        },
                        `${_.nItemID}_${_}`,
                      ),
                    ),
                  }),
                  (0, _.jsx)("div", {
                    className: _().Separator,
                  }),
                  (0, _.jsx)("div", {
                    className: _().Header,
                    children: "Next Item Options",
                  }),
                  _.map((_, _) =>
                    (0, _.jsx)(
                      "div",
                      {
                        className: _().ItemList,
                        children: _.map((_, _) =>
                          (0, _.jsxs)(
                            "div",
                            {
                              className: _().Item,
                              onClick: () => _(_.nItemID),
                              children: [
                                (0, _.jsx)(_, {
                                  nItemID: _.nItemID,
                                }),
                                _.fScore > 0 &&
                                  (0, _.jsx)("div", {
                                    className: _().Weight,
                                    children: `${(_.fScore * 100).toFixed(2)}%`,
                                  }),
                              ],
                            },
                            `${_.nItemID}_${_}`,
                          ),
                        ),
                      },
                      `Step_${_}`,
                    ),
                  ),
                ],
              }),
            });
          },
          _ = _;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        (__webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          }));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _ === 570 ? "public" : "beta";
        }
        function _(_) {
          switch (_) {
            case EGameMode.DOTA_GAMEMODE_NONE:
              return "none";
            case EGameMode.DOTA_GAMEMODE_AP:
              return "All Pick";
            case EGameMode.DOTA_GAMEMODE_CM:
              return "Captain's Mode";
            case EGameMode.DOTA_GAMEMODE_RD:
              return "Random Draft";
            case EGameMode.DOTA_GAMEMODE_SD:
              return "Single Draft";
            case EGameMode.DOTA_GAMEMODE_AR:
              return "All Random";
            case EGameMode.DOTA_GAMEMODE_INTRO:
              return "Intro Mode";
            case EGameMode.DOTA_GAMEMODE_HW:
              return "Halloween";
            case EGameMode.DOTA_GAMEMODE_REVERSE_CM:
              return "Reverse Captain's Mode";
            case EGameMode.DOTA_GAMEMODE_XMAS:
              return "Holidays/Christmas";
            case EGameMode.DOTA_GAMEMODE_TUTORIAL:
              return "Tutorial";
            case EGameMode.DOTA_GAMEMODE_MO:
              return "Mid Only";
            case EGameMode.DOTA_GAMEMODE_LP:
              return "Least Picked";
            case EGameMode.DOTA_GAMEMODE_POOL1:
              return "Pool1";
            case EGameMode.DOTA_GAMEMODE_FH:
              return "Forced Heroes";
            case EGameMode.DOTA_GAMEMODE_CUSTOM:
              return "Custom";
            case EGameMode.DOTA_GAMEMODE_CD:
              return "Captain's Draft";
            case EGameMode.DOTA_GAMEMODE_BD:
              return "Balanced Draft";
            case EGameMode.DOTA_GAMEMODE_ABILITY_DRAFT:
              return "Ability Draft";
            case EGameMode.DOTA_GAMEMODE_EVENT:
              return "Event Game";
            case EGameMode.DOTA_GAMEMODE_ARDM:
              return "All Random Deathmatch";
            case EGameMode.DOTA_GAMEMODE_1V1MID:
              return "1v1 Mid";
            case EGameMode.DOTA_GAMEMODE_ALL_DRAFT:
              return "All Draft";
            case EGameMode.DOTA_GAMEMODE_TURBO:
              return "Turbo";
            case EGameMode.DOTA_GAMEMODE_MUTATION:
              return "Mutations";
            case EGameMode.DOTA_GAMEMODE_COACHES_CHALLENGE:
              return "TI9 Coaches Challenge";
            default:
              return "Unknown";
          }
        }
        function _(_) {
          switch (_) {
            case _._.DOTA_GAMEMODE_NONE:
              return "-";
            case _._.DOTA_GAMEMODE_AP:
              return "AP";
            case _._.DOTA_GAMEMODE_CM:
              return "CM";
            case _._.DOTA_GAMEMODE_RD:
              return "RD";
            case _._.DOTA_GAMEMODE_SD:
              return "SD";
            case _._.DOTA_GAMEMODE_AR:
              return "AR";
            case _._.DOTA_GAMEMODE_INTRO:
              return "INTRO";
            case _._.DOTA_GAMEMODE_HW:
              return "OCT31";
            case _._.DOTA_GAMEMODE_REVERSE_CM:
              return "Rev CM";
            case _._.DOTA_GAMEMODE_XMAS:
              return "XMAS";
            case _._.DOTA_GAMEMODE_TUTORIAL:
              return "Tutorial";
            case _._.DOTA_GAMEMODE_MO:
              return "MID";
            case _._.DOTA_GAMEMODE_LP:
              return "LP";
            case _._.DOTA_GAMEMODE_POOL1:
              return "Pool1";
            case _._.DOTA_GAMEMODE_FH:
              return "FH";
            case _._.DOTA_GAMEMODE_CUSTOM:
              return "CUSTOM";
            case _._.DOTA_GAMEMODE_CD:
              return "CD";
            case _._.DOTA_GAMEMODE_BD:
              return "BD";
            case _._.DOTA_GAMEMODE_ABILITY_DRAFT:
              return "AD";
            case _._.DOTA_GAMEMODE_EVENT:
              return "EVENT";
            case _._.DOTA_GAMEMODE_ARDM:
              return "ARDM";
            case _._.DOTA_GAMEMODE_1V1MID:
              return "1v1";
            case _._.DOTA_GAMEMODE_ALL_DRAFT:
              return "AP";
            case _._.DOTA_GAMEMODE_TURBO:
              return "TURBO";
            case _._.DOTA_GAMEMODE_MUTATION:
              return "MUT";
            case _._.DOTA_GAMEMODE_COACHES_CHALLENGE:
              return "COACH";
            default:
              return "Unknown";
          }
        }
        function _(_) {
          switch (_) {
            case _._.CASUAL_MATCH:
              return "Unranked";
            case _._.PRACTICE:
              return "Practice";
            case _._.COOP_BOT_MATCH:
              return "Co-op Bot";
            case _._.COMPETITIVE_MATCH:
              return "Ranked";
            case _._.WEEKEND_TOURNEY:
              return "Battle Cup";
            case _._.LOCAL_BOT_MATCH:
              return "Local Bot";
            case _._.SPECTATOR:
              return "Spectator";
            case _._.EVENT_MATCH:
              return "Event";
            case _._.NEW_PLAYER_POOL:
              return "New Player Pool";
            case _._.FEATURED_GAMEMODE:
              return "Featured Gamemode";
            default:
              return "";
          }
        }
        function _(_) {
          switch (_) {
            case EMatchOutcome.RADIANT_VICTORY:
              return "Radiant Victory";
            case EMatchOutcome.DIRE_VICTORY:
              return "Dire Victory";
            case EMatchOutcome.NOTSCORED_POOR_NETWORK:
              return "NOT SCORED: Poor Network";
            case EMatchOutcome.NOTSCORED_LEAVER:
              return "NOT SCORED: Leaver";
            case EMatchOutcome.NOTSCORED_SERVER_CRASH:
              return "NOT SCORED: Server Crash";
            case EMatchOutcome.NOTSCORED_NEVER_STARTED:
              return "NOT SCORED: Never Started";
            case EMatchOutcome.NOTSCORED_CANCELED:
              return "NOT SCORED: Canceled";
            case EMatchOutcome.NOTSCORED_SUSPICIOUS:
              return "NOT SCORED: Suspicious";
            default:
              return "Unknown";
          }
        }
        function _(_) {
          switch (_) {
            case _._.RADIANT_VICTORY:
              return "Radiant Victory";
            case _._.DIRE_VICTORY:
              return "Dire Victory";
            case _._.NOTSCORED_POOR_NETWORK:
              return "Net";
            case _._.NOTSCORED_LEAVER:
              return "Lvr";
            case _._.NOTSCORED_SERVER_CRASH:
              return "Crsh";
            case _._.NOTSCORED_NEVER_STARTED:
              return "No start";
            case _._.NOTSCORED_CANCELED:
              return "Cancel";
            case _._.NOTSCORED_SUSPICIOUS:
              return "Suspicious";
            default:
              return "-";
          }
        }
        function _(_) {
          switch (_) {
            case _._.RANK_ELIGIBLE:
              return "Rank Eligible";
            case _._.BATTLECUP:
              return "Battlecup";
            case _._.BAN_WARNING:
              return "Ban Warning";
            case _._.RETURNING_PLAYER:
              return "Returning Player";
            case _._.COMMS_DISRUPTIVE:
              return "Comms Disruptive";
            default:
              return "Unknown";
          }
        }
        function _(_) {
          switch (_) {
            case _._.VERY_LIKELY:
              return "Very Likely";
            case _._.SOMEWHAT_LIKELY:
              return "Somewhat Likely";
            case _._.UNCLEAR:
              return "Unclear";
            case _._.SOMEWHAT_UNLIKELY:
              return "Somewhat Unlikely";
            case _._.VERY_UNLIKELY:
              return "Very Unlikely";
            default:
              return "Unknown";
          }
        }
        function _(_) {
          switch (_) {
            case _._.DOTA_ACCESS_TOURNAMENT_ADMIN:
              return "Tournament Admin";
            case _._.DOTA_ACCESS_TOURNAMENT_BROADCASTER:
              return "Tournament Broadcaster";
            default:
              return "Unknown";
          }
        }
        function _(_) {
          switch (_) {
            case _._.CORE:
              return "Core";
            case _._.SUPPORT:
              return "Support";
            case _._.OFFLANE:
              return "Offlane";
            case _._.MID:
              return "Mid";
            default:
              return "Unknown";
          }
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = "red",
          _ = "orange",
          _ = "goldenrod",
          _ = "#adff2f",
          _ = "darkgray",
          _ = "forestgreen",
          _ = "#68c529",
          _ = "crimson",
          _ = "#fa002e",
          _ = "#82ca9d",
          _ = "#888fd8",
          _ = "#3389ae",
          _ = "#FFBB28",
          _ = "#FF8042",
          _ = (_, _, _ = "") =>
            (0, _.jsx)(
              "a",
              {
                href: `${_._.BASE_URL}${`matches/match/${_}`}?u=${_(_._.DOTA_APP_ID)}&appid=${_._.DOTA_APP_ID}&highlight=${_}`,
                children: _ || _,
              },
              _,
            ),
          _ = (_) => {
            let _ = "";
            const _ = `${_._.CDN_URL}/apps/dota2/images/`;
            return (
              _ == 2 && (_ = `${_}player_reports/button_report_text_on.png`),
              _ == 3 && (_ = `${_}player_reports/button_report_voice_on.png`),
              _ == 4 && (_ = `${_}player_reports/smurf_icon.png`),
              _ == 5 && (_ = `${_}player_reports/disruptive_icon.png`),
              _ == 6 && (_ = `${_}player_reports/cheating_icon.png`),
              _ == 7 &&
                (_ = `${_}player_reports/button_report_pre_game_role.png`),
              _
            );
          },
          _ = (_) => {
            let _ = "";
            return (
              _ == 2 && (_ = "Text abuse"),
              _ == 3 && (_ = "Voice abuse"),
              _ == 4 && (_ = "Smurfing"),
              _ == 5 && (_ = "Griefing"),
              _ == 6 && (_ = "Cheating"),
              _ == 7 && (_ = "Did not play role"),
              _
            );
          },
          _ = [
            {
              key: "accountid",
              displayName: "Account ID",
            },
            {
              key: "guilds",
              secondaryKey: "dotaguildurl",
              displayName: "Guild",
              formatFunction: (_ = {}, _ = "") => {
                const _ = `${_}${_?.guild?.guild_id}`,
                  _ = _?.guild?.guild_name || "";
                return _ && _
                  ? (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsx)("a", {
                        href: _,
                        target: "_blank",
                        rel: "noopener",
                        children: _,
                      }),
                    })
                  : (0, _.jsx)("span", {
                      style: {
                        color: _,
                      },
                      children: "No Guild",
                    });
              },
            },
          ],
          _ = [
            {
              key: "comprank",
              secondaryKey: "comprankuncertainty",
              tertiaryKey: "compranktier",
              displayName: "Ranked",
              formatFunction: (_, _, _ = 0) =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("span", {
                      className: _().RankNumber,
                      children: `${_}`,
                    }),
                    (0, _.jsxs)("span", {
                      className: _().RankedUncertainty,
                      children: [
                        `+/- ${_}`,
                        (0, _.jsx)("img", {
                          className: _().RankedBadgeIcon,
                          src: `${_._.CDN_URL}/apps/dota2/images/small_ranks/ranked_icons_emoticon_${Math.floor(_ / 10)}.png`,
                        }),
                      ],
                    }),
                  ],
                }),
            },
            {
              key: "rank",
              secondaryKey: "rankuncertainty",
              displayName: "Unranked",
              formatFunction: (_, _) =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("span", {
                      className: _().RankNumber,
                      children: `${_}`,
                    }),
                    (0, _.jsx)("span", {
                      children: `+/- ${_}`,
                    }),
                  ],
                }),
            },
          ],
          _ = [
            {
              key: "accountflags",
              displayName: "Account Flags",
              formatFunction: (_) => {
                let _ = [];
                return (
                  _ == 0 && _.push("None"),
                  (_ & _._.RANK_ELIGIBLE) > 0 &&
                    _.push(`${_(_._.RANK_ELIGIBLE)}; `),
                  (_ & _._.BATTLECUP) > 0 && _.push(`${_(_._.BATTLECUP)}; `),
                  (_ & _._.BAN_WARNING) > 0 &&
                    _.push(
                      (0, _.jsx)("span", {
                        style: {
                          color: _,
                        },
                        children: `${_(_._.BAN_WARNING)}; `,
                      }),
                    ),
                  (_ & _._.RETURNING_PLAYER) > 0 &&
                    _.push(
                      (0, _.jsx)("span", {
                        style: {
                          color: _,
                        },
                        children: `${_(_._.RETURNING_PLAYER)}; `,
                      }),
                    ),
                  (_ & _._.COMMS_DISRUPTIVE) > 0 &&
                    _.push(
                      (0, _.jsx)("span", {
                        style: {
                          color: _,
                        },
                        children: `${_(_._.COMMS_DISRUPTIVE)}; `,
                      }),
                    ),
                  (0, _.jsx)("div", {
                    children: _,
                  })
                );
              },
            },
            {
              key: "behavscore",
              secondaryKey: "commscore",
              tertiaryKey: "trustscore",
              displayName: "Behav, Comms, Trust",
              formatFunction: (_ = 8e3, _ = -1, _ = -1) => {
                let _ = _;
                _ < 0
                  ? (_ = _)
                  : _ <= 2e3
                    ? (_ = _)
                    : _ <= 4e3
                      ? (_ = _)
                      : _ <= 6e3 && (_ = _);
                let _ = _;
                return (
                  _ < 0
                    ? (_ = _)
                    : _ <= 2e3
                      ? (_ = _)
                      : _ <= 4e3
                        ? (_ = _)
                        : _ <= 6e3 && (_ = _),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        style: {
                          color: _,
                        },
                        children: `${_}, `,
                      }),
                      (0, _.jsx)("span", {
                        style: {
                          color: _,
                        },
                        children: `${_}, `,
                      }),
                      (0, _.jsx)("span", {
                        style: {
                          color: _,
                        },
                        children: `${_}`,
                      }),
                    ],
                  })
                );
              },
            },
            {
              key: "steamaccountlink",
              displayName: "Steam Account 64",
              formatFunction: (_) =>
                _
                  ? (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsx)("a", {
                        href: _,
                        target: "_blank",
                        rel: "noopener",
                        children: _.split("/").pop(),
                      }),
                    })
                  : "",
            },
            {
              key: "history",
              secondaryKey: "steamsupporthwidbaseurl",
              displayName: "Most Recent HWID",
              formatFunction: (_ = {}, _) => {
                if (
                  !Object.keys(_).length ||
                  !_.matches ||
                  !Object.keys(_.matches).length
                )
                  return "";
                let _ = "";
                for (let _ = Object.keys(_.matches).length - 1; _ >= 0; _--)
                  if (_.matches[_]?.searchdata?.hwid) {
                    _ = _.matches[_]?.searchdata.hwid;
                    break;
                  }
                return _
                  ? (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsx)("a", {
                        href: `${_}${_}`,
                        target: "_blank",
                        rel: "noopener",
                        children: _,
                      }),
                    })
                  : "";
              },
            },
            {
              key: "personalink",
              displayName: "Persona V1",
              formatFunction: (_) =>
                _
                  ? (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsx)("a", {
                        href: _,
                        target: "_blank",
                        rel: "noopener",
                        children: "Persona V1",
                      }),
                    })
                  : "",
            },
          ],
          _ = [
            {
              key: "smurfcategory",
              displayName: "Smurf Category",
              formatFunction: (_) => {
                switch (_) {
                  case _._.VERY_LIKELY:
                    return (0, _.jsx)("span", {
                      style: {
                        color: _,
                      },
                      children: _(_._.VERY_LIKELY),
                    });
                  case _._.SOMEWHAT_LIKELY:
                    return (0, _.jsx)("span", {
                      style: {
                        color: _,
                      },
                      children: _(_._.SOMEWHAT_LIKELY),
                    });
                  case _._.UNCLEAR:
                    return (0, _.jsx)("span", {
                      style: {
                        color: _,
                      },
                      children: _(_._.UNCLEAR),
                    });
                  case _._.SOMEWHAT_UNLIKELY:
                    return (0, _.jsx)("span", {
                      style: {},
                      children: _(_._.SOMEWHAT_UNLIKELY),
                    });
                  case _._.VERY_UNLIKELY:
                    return (0, _.jsx)("span", {
                      style: {},
                      children: _(_._.VERY_UNLIKELY),
                    });
                  default:
                    return (0, _.jsx)("span", {
                      children: _(_._.INVALID),
                    });
                }
              },
            },
            {
              key: "plussubscriber",
              displayName: "Plus Subscriber",
              formatFunction: (_ = 0) =>
                _
                  ? (0, _.jsx)("div", {
                      style: {
                        color: _,
                      },
                      children: "YES",
                    })
                  : "NO",
            },
            {
              key: "wins",
              secondaryKey: "losses",
              displayName: "Total Games Played",
              formatFunction: (_, _) =>
                (0, _.jsx)("div", {
                  children: _ + _ || 0,
                }),
            },
            {
              key: "wins",
              secondaryKey: "losses",
              displayName: "Win Rate",
              formatFunction: (_, _) => {
                const _ = _ + _ || 0;
                if (!_)
                  return (0, _.jsx)("div", {
                    children: "",
                  });
                const _ = Math.round((_ / _) * 1e4) / 100;
                let _ = "none";
                return (
                  _ >= 70 || _ <= 30
                    ? (_ = _)
                    : (_ >= 60 || _ <= 40) && (_ = _),
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsxs)("span", {
                        className: _().MarginRightSmall,
                        children: [
                          (0, _.jsx)("span", {
                            style: {
                              color: _,
                            },
                            children: `${_}`,
                          }),
                          (0, _.jsx)("span", {
                            children: " - ",
                          }),
                          (0, _.jsx)("span", {
                            style: {
                              color: _,
                            },
                            children: `${_}`,
                          }),
                        ],
                      }),
                      (0, _.jsx)("span", {
                        style: {
                          color: _,
                        },
                        children: `(${_}%)`,
                      }),
                    ],
                  })
                );
              },
            },
            {
              key: "recentwincount",
              secondaryKey: "recentlosscount",
              displayName: "Win Rate (Recent)",
              formatFunction: (_, _) => {
                const _ = _ + _ || 0;
                if (!_)
                  return (0, _.jsx)("div", {
                    children: "",
                  });
                const _ = Math.round((_ / _) * 1e4) / 100;
                let _ = "none";
                return (
                  _ >= 70 || _ <= 30
                    ? (_ = _)
                    : (_ >= 60 || _ <= 40) && (_ = _),
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsxs)("span", {
                        className: _().MarginRightSmall,
                        children: [
                          (0, _.jsx)("span", {
                            style: {
                              color: _,
                            },
                            children: `${_}`,
                          }),
                          (0, _.jsx)("span", {
                            children: " - ",
                          }),
                          (0, _.jsx)("span", {
                            style: {
                              color: _,
                            },
                            children: `${_}`,
                          }),
                        ],
                      }),
                      (0, _.jsx)("span", {
                        style: {
                          color: _,
                        },
                        children: `(${_}%)`,
                      }),
                    ],
                  })
                );
              },
            },
            {
              key: "overperformancehistory",
              displayName: "Overperformance History",
              formatFunction: (_ = 0) => {
                let _ = 0;
                ((_ = _ - ((_ >> 1) & 1431655765)),
                  (_ = ((_ >> 2) & 858993459) + (_ & 858993459)),
                  (_ = ((_ >> 4) + _) & 252645135),
                  (_ = ((_ >> 8) + _) & 16711935),
                  (_ = ((_ >> 16) + _) & 65535));
                let _ = _;
                return (
                  _ > 20 ? (_ = _) : _ > 10 ? (_ = _) : _ > 5 && (_ = _),
                  (0, _.jsx)("span", {
                    style: {
                      color: _,
                    },
                    children: `${_} / 32 games`,
                  })
                );
              },
            },
          ],
          _ = [
            {
              key: "details",
              displayName: " ",
              formatFunction: (_ = {}) => {
                const _ = [];
                for (let _ in _) {
                  const _ = Object.entries(_[_]).reverse();
                  _.sort((_, _) => (_[1] > _[1] ? -1 : 1));
                  const _ = _.length
                    ? _.reduce((_, _) => _ + Number(_[1]), 0)
                    : 0;
                  if (!_) {
                    _.push(
                      (0, _.jsxs)(
                        _.Fragment,
                        {
                          children: [
                            (0, _.jsx)("div", {
                              className: _().TextCapitalize,
                              children: _.replace(/_/g, " "),
                            }),
                            (0, _.jsx)("div", {}),
                            (0, _.jsx)("div", {}),
                          ],
                        },
                        _,
                      ),
                    );
                    continue;
                  }
                  for (let _ = 0; _ < Math.min(_.length, 2); _++) {
                    const _ = _[_][0]
                        ? /<\/?[a-z][\s\S]*>/i.test("" + _[_][0])
                        : !1,
                      _ = typeof _[_][0] == "string" ? _[_][0] : "";
                    _.push(
                      (0, _.jsxs)(
                        _.Fragment,
                        {
                          children: [
                            (0, _.jsx)("div", {
                              className: _().TextCapitalize,
                              children: `${_ == 0 ? _.replace(/_/g, " ") : ""}`,
                            }),
                            _ &&
                              (0, _.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                  __html: _,
                                },
                              }),
                            !_ &&
                              (0, _.jsx)("div", {
                                children: `${_[_][0]}`,
                              }),
                            (0, _.jsx)("div", {
                              style: {
                                color: _,
                              },
                              children: `(${_[_][1]} / ${_})`,
                            }),
                          ],
                        },
                        `${_}-${_}`,
                      ),
                    );
                  }
                }
                return _;
              },
            },
          ],
          _ = [
            {
              key: "reportslink",
              displayName: "Reports",
              formatFunction: (_) =>
                _
                  ? (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsx)("a", {
                        href: _,
                        target: "_blank",
                        rel: "noopener",
                        children: "Reports",
                      }),
                    })
                  : "",
            },
            {
              key: "associateslink",
              displayName: "Associates",
              formatFunction: (_) =>
                _
                  ? (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsx)("a", {
                        href: _,
                        target: "_blank",
                        rel: "noopener",
                        children: "Associates",
                      }),
                    })
                  : "",
            },
          ],
          _ = [
            {
              key: "beta_access_flags",
              displayName: _(_._.DOTA_ACCESS_TOURNAMENT_ADMIN),
              formatFunction: (_ = 0) =>
                _ & _._.DOTA_ACCESS_TOURNAMENT_ADMIN
                  ? (0, _.jsx)("div", {
                      style: {
                        color: _,
                      },
                      children: "YES",
                    })
                  : "NO",
            },
            {
              key: "beta_access_flags",
              displayName: _(_._.DOTA_ACCESS_TOURNAMENT_BROADCASTER),
              formatFunction: (_ = 0) =>
                _ & _._.DOTA_ACCESS_TOURNAMENT_BROADCASTER
                  ? (0, _.jsx)("div", {
                      style: {
                        color: _,
                      },
                      children: "YES",
                    })
                  : "NO",
            },
          ],
          _ = [
            {
              key: "vac",
              displayName: " ",
              formatFunction: (_ = {}) => {
                const _ = [];
                for (let _ in _) {
                  const _ = _[_];
                  _.push(
                    (0, _.jsxs)(
                      _.Fragment,
                      {
                        children: [
                          (0, _.jsx)("div", {
                            className: _().TextCapitalize,
                            children: `VAC ${_.replace(/_/g, " ")}`,
                          }),
                          (0, _.jsx)("div", {
                            children: _,
                          }),
                        ],
                      },
                      _,
                    ),
                  );
                }
                return _;
              },
            },
          ],
          _ = [
            {
              key: "name",
              displayName: "Name",
            },
            {
              key: "real_name",
              displayName: "Real Name",
            },
            {
              key: "role",
              displayName: "Role",
              formatFunction: (_ = 0) => {
                switch (_) {
                  case _._.CORE:
                    return _(_._.CORE);
                  case _._.SUPPORT:
                    return _(_._.SUPPORT);
                  case _._.OFFLANE:
                    return _(_._.OFFLANE);
                  case _._.MID:
                    return _(_._.MID);
                  default:
                    return "Unknown";
                }
              },
            },
            {
              key: "team",
              secondaryKey: "dotateamurl",
              displayName: "Team ID",
              formatFunction: (_ = 0, _ = "") => {
                if (!_ || !_) return "";
                const _ = `${_}${_}`;
                return (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)("a", {
                    href: _,
                    target: "_blank",
                    rel: "noopener",
                    children: _,
                  }),
                });
              },
            },
            {
              key: "country",
              displayName: "Country",
              formatFunction: (_) =>
                (0, _.jsx)("span", {
                  className: _().TextUppercase,
                  children: _,
                }),
            },
            {
              key: "sponsor",
              displayName: "Sponsor",
            },
            {
              key: "pro",
              displayName: "Is Pro Team?",
              formatFunction: (_) => (_ ? "YES" : "NO"),
            },
            {
              key: "locked",
              displayName: "Is Locked?",
              formatFunction: (_) => (_ ? "YES" : "NO"),
            },
          ],
          _ = [
            {
              key: "teams",
              secondaryKey: "dotateamurl",
              displayName: " ",
              formatFunction: (_ = {}, _ = "") => {
                const _ = [];
                for (let _ in _) {
                  const _ = _[_],
                    _ = _.team_id,
                    _ = `${_}${_}`,
                    _ = _.team_name,
                    _ = _.team_tag;
                  _.push(
                    (0, _.jsxs)(
                      _.Fragment,
                      {
                        children: [
                          (0, _.jsxs)("div", {
                            children: [
                              `${_} `,
                              (0, _.jsx)("span", {
                                style: {
                                  color: _,
                                },
                                children: `[${_}]`,
                              }),
                            ],
                          }),
                          (0, _.jsx)("a", {
                            href: _,
                            target: "_blank",
                            rel: "noopener",
                            children: _,
                          }),
                        ],
                      },
                      _,
                    ),
                  );
                }
                return _;
              },
            },
          ],
          _ = [
            {
              key: "eventpoints",
              displayName: " ",
              formatFunction: (_ = {}) => {
                const _ = _?.result?.points || [],
                  _ = [];
                for (let _ of _) {
                  const _ = _.event_id,
                    _ = _[_]?.event_name,
                    _ = _[_]?.points_per_level || 1e3,
                    _ = Math.floor(_.event_points / _);
                  _.unshift(
                    (0, _.jsxs)(
                      _.Fragment,
                      {
                        children: [
                          (0, _.jsx)("div", {
                            children: _,
                          }),
                          (0, _.jsx)("div", {
                            children: _,
                          }),
                        ],
                      },
                      _,
                    ),
                  );
                }
                return _;
              },
            },
          ],
          _ = () =>
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("span", {
                  style: {
                    color: _,
                  },
                  children: "YES",
                }),
                (0, _.jsx)("span", {
                  children: " (check V1 Link for details)",
                }),
              ],
            }),
          _ = [
            {
              key: "exploiter_data",
              displayName: "Exploiter Warnings?",
              formatFunction: _,
            },
            {
              key: "smurf_data",
              displayName: "Smurf Warnings?",
              formatFunction: _,
            },
            {
              key: "cheater_data",
              displayName: "Cheater Warnings?",
              formatFunction: _,
            },
            {
              key: "booster_data",
              displayName: "Booster Warnings?",
              formatFunction: _,
            },
            {
              key: "known_mmr_exploiter",
              displayName: "Known Hacker / Exploiter?",
              formatFunction: _,
            },
            {
              key: "delayedbans",
              displayName: "Delayed Bans?",
              formatFunction: _,
            },
          ],
          _ = (_) =>
            (0, _.jsx)(_.Fragment, {
              children: (0, _.jsx)("span", {
                style: {
                  color: _,
                },
                children: _()(_ * 1e3).format("MMMM Do YYYY, h:mm:ss a"),
              }),
            }),
          _ = [
            {
              key: "matchdisableduntil",
              displayName: "MM Disabled Until",
              formatFunction: _,
            },
            {
              key: "rankeddisableduntil",
              displayName: "Ranked Disabled Until",
              formatFunction: _,
            },
            {
              key: "preventvoiceuntil",
              displayName: "Voice Disabled Until",
              formatFunction: _,
            },
            {
              key: "preventpublictextchatuntil",
              displayName: "Public Text Chat Disabled Until",
              formatFunction: _,
            },
          ],
          _ = (_) => {
            if (!_ || !_.length) return "(No Bans)";
            _ = _.slice(0, 5);
            const _ = (_) =>
              _
                ? _ < 60
                  ? `${_().duration(_, "seconds").asSeconds()} seconds`
                  : _ < 3600
                    ? `${_().duration(_, "seconds").asMinutes()} min`
                    : _ < 86400 * 10
                      ? `${_().duration(_, "seconds").asHours()} hours`
                      : `${_().duration(_, "seconds").asDays()} days`
                : "";
            return _.map((_) => {
              const _ = _.bantype == "Admin Permanent";
              return (0, _.jsxs)(
                "tr",
                {
                  style: {
                    color: _ ? _ : "",
                  },
                  children: [
                    (0, _.jsx)("td", {
                      children: _.bantype,
                    }),
                    (0, _.jsx)("td", {
                      children: _()(_.starttime * 1e3).format(
                        "MMMM Do YYYY, h:mm:ss a",
                      ),
                    }),
                    (0, _.jsx)("td", {
                      children: _()((_.starttime + _.duration) * 1e3).format(
                        "MMMM Do YYYY, h:mm:ss a",
                      ),
                    }),
                    (0, _.jsx)("td", {
                      children: _ ? "Permanent" : _(_.duration),
                    }),
                    (0, _.jsx)("td", {
                      children: _.admin ? "ADMIN" : "Automated",
                    }),
                    (0, _.jsx)("td", {
                      children: _.comment,
                    }),
                  ],
                },
                `${_.bantype} - ${_.starttime}`,
              );
            });
          },
          _ = (_) => {
            const _ = (0, _._)()?._,
              [_, _] = (0, _.useState)(null),
              [_, _] = (0, _.useState)(null),
              [_, _] = (0, _.useState)(null),
              [_, _] = (0, _.useState)(null),
              [_, _] = (0, _.useState)(!1),
              [_, _] = (0, _.useState)(!1),
              [_, _] = (0, _.useState)(!1),
              [_, _] = (0, _.useState)(!1),
              [_, _] = (0, _.useState)(!0),
              [_, _] = (0, _.useState)(!0),
              [_, _] = (0, _.useState)(!1),
              [_, _] = (0, _.useState)(!0),
              [_, _] = (0, _.useState)(!0),
              [_, _] = (0, _.useState)(!1),
              _ = _._.Get().getHeroList(),
              _ = _._.Get().getItemList();
            async function _() {
              if (!_._.DOTA_APP_ID || !_) return;
              (_(!1), _(!1), _(!1), _(!1));
              const _ = {
                appid: _._.DOTA_APP_ID,
                _: _(_._.DOTA_APP_ID),
                account_id: _,
              };
              try {
                const _ = await _().get(
                    _._.BASE_URL + "persona/showplayerreact/",
                    {
                      params: _,
                    },
                  ),
                  _ = _?.data;
                if (!_?.persona || !_?.persona?.accountid)
                  throw new Error(
                    "GC could not find account details for this account",
                  );
                try {
                  _ &&
                    _.persona &&
                    _.persona.elodatajson &&
                    _(JSON.parse(_.persona.elodatajson).aggregate);
                } catch {}
                try {
                  if (
                    _ &&
                    _.persona &&
                    _.persona.history &&
                    _.persona.history.matches &&
                    Object.keys(_.persona.history.matches).length
                  ) {
                    const _ = Object.values(
                      _.persona.history.matches,
                    ).reverse();
                    (_(_), _(_));
                  }
                } catch {
                  _(!0);
                }
                _ && _.data && _(_);
              } catch {
                (console.log("Error fetching individual persona info."), _(!0));
              }
              (_(!0), _(!0));
            }
            ((0, _.useEffect)(() => {
              try {
                _();
              } catch {
                console.log("Could not fetch persona info.");
              }
            }, [_]),
              (0, _.useEffect)(() => {
                if (!_) return;
                let _ = _.slice();
                ((_ = _.filter(
                  (_) =>
                    !(
                      (!_ && _.lobbytype == _._.CASUAL_MATCH) ||
                      (!_ && _.lobbytype == _._.COMPETITIVE_MATCH) ||
                      (!_ &&
                        ![
                          _._.CASUAL_MATCH,
                          _._.COMPETITIVE_MATCH,
                          _._.WEEKEND_TOURNEY,
                          _._.FEATURED_GAMEMODE,
                        ].includes(_.lobbytype)) ||
                      (!_ && _.rankwassolo) ||
                      (!_ && !_.rankwassolo)
                    ),
                )),
                  _(_));
              }, [_, _, _, _, _, _]));
            let _ = null;
            if (
              (_
                ? !_ || !_
                  ? (_ = `Loading account ID ${_}...`)
                  : _ && _
                    ? (_ = `Error loading persona information for account ID ${_}. Double check universe & account ID (or try refreshing).`)
                    : _ &&
                      _ &&
                      (_ = `Error loading match history for account ID ${_}.`)
                : (_ = "Must pass in an account ID."),
              _)
            )
              return (0, _.jsxs)("div", {
                className: _().PersonaDetails,
                children: [
                  (0, _.jsx)(_._, {
                    bOverlapping: !1,
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)("title", {
                      children: "Dota 2 - Persona Details",
                    }),
                  }),
                  (0, _.jsx)(_._, {}),
                  (0, _.jsx)("div", {
                    className: _().ContentFrame,
                    children: (0, _.jsx)("h2", {
                      className: _().Header,
                      children: _,
                    }),
                  }),
                  (0, _.jsx)(_._, {}),
                ],
              });
            const _ = [
              {
                dataKey: "date",
                label: "Match Date",
                widthRelative: 13,
                cellRenderer: (_) =>
                  _()(_.cellData * 1e3).format("MM/DD/YY HH:mm:ss"),
              },
              {
                dataKey: "matchid",
                label: "ID",
                widthRelative: 10,
                cellRenderer: (_) => _(_.cellData, _.columnData.strAccountId),
              },
              {
                dataKey: "heroid",
                label: "Hero",
                widthRelative: 5,
                cellRenderer: (_) => {
                  const _ = _?.heroes
                    .find((_) => _._ == _.cellData)
                    ?.name?.replace("npc_dota_hero_", "");
                  return _
                    ? (0, _.jsx)("img", {
                        className: _().HeroImage,
                        src: `${_._.IMG_URL}heroes/wide/${_}.png`,
                        alt: _.cellData,
                      })
                    : (0, _.jsx)("img", {
                        className: _().HeroImage,
                        src: `${_._.IMG_URL}heroes/wide/unknown.png`,
                      });
                },
              },
              {
                dataKey: "outcome",
                label: "Outcome",
                widthRelative: 7,
                cellRenderer: (_) => {
                  if (_.rowData?.lobbytype == _._.PRACTICE)
                    return (0, _.jsx)("span", {
                      style: {
                        color: _,
                      },
                      children: _(_._.PRACTICE),
                    });
                  let _ = _.cellData;
                  if ((_ in _._ || (_ = 0), _ <= 0)) return _(_._.UNKNOWN);
                  const _ = _?.rowData?.teamnumber + 2;
                  if (_ < 2 || _ > 3) return _(_._.UNKNOWN);
                  if (_ < 2 || _ > 3) {
                    const _ = _.cellData;
                    return _ in _._
                      ? (0, _.jsx)("span", {
                          style: {
                            color: _,
                          },
                          children: _(_),
                        })
                      : _(_._.UNKNOWN);
                  } else {
                    const _ = _ == _,
                      _ = [],
                      _ = _?.rowData?.rankchange;
                    let _ = _ ? (_ >= 35 ? _ : _) : _ <= -35 ? _ : _;
                    return (
                      _.push(
                        (0, _.jsx)(
                          "span",
                          {
                            style: {
                              color: _,
                            },
                            children: _ ? "W" : "L",
                          },
                          "W-L",
                        ),
                      ),
                      _
                        ? _.push(
                            (0, _.jsx)(
                              "span",
                              {
                                style: {
                                  color: _,
                                },
                                children: ` (+${_})`,
                              },
                              "rankChange",
                            ),
                          )
                        : _ < 0
                          ? _.push(
                              (0, _.jsx)(
                                "span",
                                {
                                  style: {
                                    color: _,
                                  },
                                  children: ` (${_})`,
                                },
                                "rankChange",
                              ),
                            )
                          : _.push(
                              (0, _.jsx)(
                                "span",
                                {
                                  style: {
                                    color: _,
                                  },
                                  children: ` (-${_})`,
                                },
                                "rankChange",
                              ),
                            ),
                      _
                    );
                  }
                },
              },
              {
                dataKey: "previousrank",
                label: "MMR",
                widthRelative: 5,
                cellRenderer: (_) => _.cellData,
              },
              {
                dataKey: "overperformance_score",
                label: "Perf",
                widthRelative: 4,
                cellRenderer: (_) => {
                  const _ = _.cellData || 0;
                  let _ = "";
                  return (
                    _ >= 300
                      ? (_ = _)
                      : _ >= 175
                        ? (_ = _)
                        : _ >= 100 && (_ = _),
                    (0, _.jsx)(
                      "span",
                      {
                        style: {
                          color: _,
                        },
                        children: `${_}`,
                      },
                      "op",
                    )
                  );
                },
              },
              {
                dataKey: "duration",
                label: "Dur",
                widthRelative: 6,
                cellRenderer: (_) => {
                  const _ = _.cellData;
                  return _
                    ? _ < 3600
                      ? _()
                          .utc(_().duration(_, "seconds").asMilliseconds())
                          .format("mm:ss")
                      : _()
                          .utc(_().duration(_, "seconds").asMilliseconds())
                          .format("h:mm:ss")
                    : "-";
                },
              },
              {
                dataKey: "lobbytype",
                label:
                  "Ranked/Unranked (this label isn't used, check headerRenderer)",
                widthRelative: 8,
                cellRenderer: (_) => {
                  let _ = isNaN(_.cellData) ? _.rowData.lobbytype : _.cellData;
                  _ in _._ || (_ = -1);
                  let _ = _;
                  return (
                    _ == _._.CASUAL_MATCH
                      ? (_ = _)
                      : _ == _._.COMPETITIVE_MATCH && (_ = _),
                    (0, _.jsx)("span", {
                      style: {
                        color: _,
                      },
                      children: _(_),
                    })
                  );
                },
                headerRenderer: (_) =>
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().CheckBox,
                        children: [
                          (0, _.jsx)("input", {
                            type: "checkbox",
                            name: "ranked",
                            _: "ranked",
                            onChange: () => _(!_),
                            checked: _,
                          }),
                          (0, _.jsx)("label", {
                            htmlFor: "ranked",
                            children: (0, _.jsx)("span", {
                              style: {
                                color: _,
                              },
                              children: "Ranked",
                            }),
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().CheckBox,
                        children: [
                          (0, _.jsx)("input", {
                            type: "checkbox",
                            name: "unranked",
                            _: "unranked",
                            onChange: () => _(!_),
                            checked: _,
                          }),
                          (0, _.jsx)("label", {
                            htmlFor: "unranked",
                            children: (0, _.jsx)("span", {
                              style: {
                                color: _,
                              },
                              children: "Unranked",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              },
              {
                dataKey: "rankwassolo",
                label:
                  "Solo/Party (this label isn't used, check headerRenderer)",
                widthRelative: 6,
                cellRenderer: (_) =>
                  _.cellData && _?.rowData?.lobbytype != _._.WEEKEND_TOURNEY
                    ? (0, _.jsx)("span", {
                        style: {
                          color: _,
                        },
                        children: "Solo",
                      })
                    : (0, _.jsx)("span", {
                        style: {
                          color: _,
                        },
                        children: "Party",
                      }),
                headerRenderer: (_) =>
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().CheckBox,
                        children: [
                          (0, _.jsx)("input", {
                            type: "checkbox",
                            name: "solo",
                            _: "solo",
                            onChange: () => _(!_),
                            checked: _,
                          }),
                          (0, _.jsx)("label", {
                            htmlFor: "solo",
                            children: (0, _.jsx)("span", {
                              style: {
                                color: _,
                              },
                              children: "Solo",
                            }),
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().CheckBox,
                        children: [
                          (0, _.jsx)("input", {
                            type: "checkbox",
                            name: "party",
                            _: "party",
                            onChange: () => _(!_),
                            checked: _,
                          }),
                          (0, _.jsx)("label", {
                            htmlFor: "party",
                            children: (0, _.jsx)("span", {
                              style: {
                                color: _,
                              },
                              children: "Party",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              },
              {
                dataKey: "gamemode",
                label: "Mode",
                widthRelative: 6,
                cellRenderer: (_) => {
                  if (_?.rowData?.searchdata?.partylowpri)
                    return (0, _.jsx)("span", {
                      style: {
                        color: _,
                      },
                      children: "SD (LP)",
                    });
                  const _ = `DOTA_GAMEMODE_${_.cellData}`;
                  return _ in _._ ? _(_._[_]) : _(_._.DOTA_GAMEMODE_NONE);
                },
              },
              {
                dataKey: "kills",
                label: "K/D/A",
                widthRelative: 7,
                cellRenderer: (_) =>
                  isNaN(_.cellData) ||
                  isNaN(_?.rowData?.deaths) ||
                  isNaN(_?.rowData?.assists)
                    ? " - / - / - "
                    : `${_.cellData}/${_?.rowData?.deaths}/${_?.rowData?.assists}`,
              },
              {
                dataKey: "goldspent",
                label: "NW",
                widthRelative: 6,
                cellRenderer: (_) => {
                  let _ = _.cellData + _?.rowData?.gold;
                  return (
                    isNaN(_) && (_ = "-"),
                    (0, _.jsx)("span", {
                      style: {
                        color: "darkgoldenrod",
                      },
                      children: `${_}`,
                    })
                  );
                },
              },
              {
                dataKey: "item0",
                label: "Items",
                widthRelative: 20,
                cellRenderer: (_) => {
                  const _ = [];
                  for (let _ = 0; _ < 6; _++) {
                    const _ = _?.itemabilities.find(
                      (_) => _._ == _?.rowData[`item${_}`],
                    );
                    let _ = _?.name.replace("item_", "");
                    ((!_ || !_) && (_ = "emptyitembg"),
                      _.push(
                        (0, _.jsx)(
                          "img",
                          {
                            className: _().ItemIcon,
                            src: `${_._.IMG_URL}items/${_}.png`,
                            alt: _.cellData,
                          },
                          `${_.rowIndex}_item${_}`,
                        ),
                      ));
                  }
                  return (0, _.jsxs)("div", {
                    className: _().ItemContainer,
                    children: [_, " "],
                  });
                },
              },
              {
                dataKey: "role_assignment",
                label: "Role",
                widthRelative: 6,
                cellRenderer: (_) => {
                  switch (_.cellData) {
                    case 1:
                      return "Safe";
                    case 2:
                      return "Off";
                    case 4:
                      return "Mid";
                    case 8:
                      return "S Sup";
                    case 16:
                      return "H Sup";
                    default:
                      return "-";
                  }
                },
              },
              {
                dataKey: "reports",
                label: "Reports / Notes",
                widthRelative: 22,
                cellRenderer: (_) => {
                  const _ = Object.values(_.cellData || []),
                    _ = Object.values(_?.rowData?.leaver || []),
                    _ = Object.values(_?.rowData?.detections || []),
                    _ = Object.values(_?.rowData?.lowpribans || []),
                    _ = _?.rowData?.hwidchange,
                    _ = _?.rowData?.hwidchangelink,
                    _ = _?.rowData?.geolocchange,
                    _ = _?.rowData?.languagechange,
                    _ = [],
                    _ = [];
                  for (const _ of _) _.push(_);
                  const _ = [];
                  if (
                    (_.length &&
                      _.push(
                        (0, _.jsx)(
                          _._,
                          {
                            toolTipContent: (0, _.jsxs)("table", {
                              style: {
                                borderSpacing: "5px",
                              },
                              children: [
                                (0, _.jsx)("thead", {
                                  children: (0, _.jsxs)("tr", {
                                    children: [
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Date",
                                      }),
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Leaver Status",
                                      }),
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "State Flags",
                                      }),
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Game State",
                                      }),
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Lobby State",
                                      }),
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Actions",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, _.jsx)("tbody", {
                                  children: _.map((_) =>
                                    (0, _.jsxs)(
                                      "tr",
                                      {
                                        children: [
                                          (0, _.jsx)("td", {
                                            children: _.time
                                              ? _()(_.time * 1e3).format(
                                                  "MMMM Do YYYY, h:mm:ss a",
                                                )
                                              : "-",
                                          }),
                                          (0, _.jsx)("td", {
                                            children: _.leaverstatusname,
                                          }),
                                          (0, _.jsx)("td", {
                                            children:
                                              _.flagnames &&
                                              Object.values(_.flagnames).length
                                                ? Object.values(
                                                    _.flagnames,
                                                  ).join(", ")
                                                : "-",
                                          }),
                                          (0, _.jsx)("td", {
                                            children: _.gamestatename,
                                          }),
                                          (0, _.jsx)("td", {
                                            children: _.lobbystatename,
                                          }),
                                          (0, _.jsx)("td", {
                                            children:
                                              _.actionnames &&
                                              Object.values(_.actionnames)
                                                .length
                                                ? Object.values(
                                                    _.actionnames,
                                                  ).join(", ")
                                                : "-",
                                          }),
                                        ],
                                      },
                                      `${_.time}`,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: _().PlayerReportTooltip,
                            children: (0, _.jsx)("span", {
                              style: {
                                color: _,
                              },
                              children: "[Lvr] ",
                            }),
                          },
                          "leaverTooltip",
                        ),
                      ),
                    _.length &&
                      _.push(
                        (0, _.jsx)(
                          _._,
                          {
                            toolTipContent: (0, _.jsxs)("table", {
                              style: {
                                borderSpacing: "12px",
                              },
                              children: [
                                (0, _.jsx)("thead", {
                                  children: (0, _.jsxs)("tr", {
                                    children: [
                                      (0, _.jsx)("th", {
                                        align: "left",
                                      }),
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Commend",
                                      }),
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Player",
                                      }),
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Comment",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, _.jsx)("tbody", {
                                  children: _.map((_) => {
                                    const _ = _(_.reportreason),
                                      _ = _(_.reportreason);
                                    return (0, _.jsxs)(
                                      "tr",
                                      {
                                        children: [
                                          (0, _.jsx)("td", {
                                            children:
                                              _ &&
                                              (0, _.jsx)("img", {
                                                src: _,
                                              }),
                                          }),
                                          (0, _.jsx)("td", {
                                            children: _,
                                          }),
                                          (0, _.jsx)("td", {
                                            children: _.reporteraccountid,
                                          }),
                                          (0, _.jsx)("td", {
                                            children: _.comment || "",
                                          }),
                                        ],
                                      },
                                      `${_.reporteraccountid}`,
                                    );
                                  }),
                                }),
                              ],
                            }),
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: _().PlayerReportTooltip,
                            children: (0, _.jsx)(
                              "span",
                              {
                                style: {
                                  color: _,
                                },
                                children: `[${_.length}] `,
                              },
                              "playerCommends",
                            ),
                          },
                          "commendTooltip",
                        ),
                      ),
                    _.length)
                  ) {
                    _.sort((_, _) => _.reporteraccountid - _.reporteraccountid);
                    const _ = [...new Set(_.map((_) => _?.reporteraccountid))],
                      _ = [];
                    let _ = 0;
                    for (let _ of _) {
                      const _ = _(_.reportreason),
                        _ = _(_.reportreason);
                      (_ &&
                        _ != _.reporteraccountid &&
                        _.push(
                          (0, _.jsx)(
                            "tr",
                            {
                              children: (0, _.jsx)("td", {
                                colSpan: 3,
                                children: (0, _.jsx)("hr", {}),
                              }),
                            },
                            `${_}-separator`,
                          ),
                        ),
                        _.push(
                          (0, _.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, _.jsx)("td", {
                                  children:
                                    _ &&
                                    (0, _.jsx)("img", {
                                      src: _,
                                    }),
                                }),
                                (0, _.jsx)("td", {
                                  children: _,
                                }),
                                (0, _.jsx)("td", {
                                  children: _.reporteraccountid,
                                }),
                              ],
                            },
                            `${_.reporteraccountid}-${_.reportreason}`,
                          ),
                        ),
                        (_ = _.reporteraccountid));
                    }
                    _.push(
                      (0, _.jsx)(
                        _._,
                        {
                          toolTipContent: (0, _.jsxs)("table", {
                            style: {
                              borderSpacing: "12px",
                            },
                            children: [
                              (0, _.jsx)("thead", {
                                children: (0, _.jsxs)("tr", {
                                  children: [
                                    (0, _.jsx)("th", {
                                      align: "left",
                                    }),
                                    (0, _.jsx)("th", {
                                      align: "left",
                                      children: "Reason",
                                    }),
                                    (0, _.jsx)("th", {
                                      align: "left",
                                      children: "Reporter",
                                    }),
                                  ],
                                }),
                              }),
                              (0, _.jsx)("tbody", {
                                children: _,
                              }),
                            ],
                          }),
                          direction: "left",
                          nBodyAlignment: 1,
                          nAllowOffscreenPx: 1200,
                          strTooltipClassname: _().PlayerReportTooltip,
                          children: (0, _.jsx)(
                            "span",
                            {
                              style: {
                                color: _,
                              },
                              children: `[${_.length}]`,
                            },
                            "playerReports",
                          ),
                        },
                        "reportTooltip",
                      ),
                    );
                  }
                  return (
                    _.length &&
                      _.push(
                        (0, _.jsx)(
                          _._,
                          {
                            toolTipContent: (0, _.jsxs)("table", {
                              style: {
                                borderSpacing: "12px",
                              },
                              children: [
                                (0, _.jsx)("thead", {
                                  children: (0, _.jsxs)("tr", {
                                    children: [
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Suspicion (Enum)",
                                      }),
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Game Time",
                                      }),
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Data 1",
                                      }),
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Data 2",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, _.jsx)("tbody", {
                                  children: _.map((_, _) =>
                                    (0, _.jsxs)(
                                      "tr",
                                      {
                                        children: [
                                          (0, _.jsx)("td", {
                                            children: `${_.suspicionname} (${_.suspicion})`,
                                          }),
                                          (0, _.jsx)("td", {
                                            children: _()
                                              .utc(
                                                _()
                                                  .duration(
                                                    _.gametime,
                                                    "seconds",
                                                  )
                                                  .asMilliseconds(),
                                              )
                                              .format("mm:ss"),
                                          }),
                                          (0, _.jsx)("td", {
                                            children: _.data1 || "",
                                          }),
                                          (0, _.jsx)("td", {
                                            children: _.data2 || "",
                                          }),
                                        ],
                                      },
                                      `${_.matchid}-${_}`,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: _().PlayerReportTooltip,
                            children: (0, _.jsx)(
                              "span",
                              {
                                style: {
                                  color: _,
                                },
                                children: "[SUS]",
                              },
                              "playerReports",
                            ),
                          },
                          "detectionsTooltip",
                        ),
                      ),
                    _.length &&
                      _.push(
                        (0, _.jsx)(
                          _._,
                          {
                            toolTipContent: (0, _.jsxs)("table", {
                              style: {
                                borderSpacing: "12px",
                              },
                              children: [
                                (0, _.jsx)("thead", {
                                  children: (0, _.jsxs)("tr", {
                                    children: [
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Ban Type",
                                      }),
                                      (0, _.jsx)("th", {
                                        align: "left",
                                        children: "Games",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, _.jsx)("tbody", {
                                  children: _.map((_, _) =>
                                    (0, _.jsxs)(
                                      "tr",
                                      {
                                        children: [
                                          (0, _.jsx)("td", {
                                            children: _.bantypename || "",
                                          }),
                                          (0, _.jsx)("td", {
                                            children:
                                              _.penaltylowprigamesapplied ||
                                              "0",
                                          }),
                                        ],
                                      },
                                      `lp-${_}`,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: _().PlayerReportTooltip,
                            children: (0, _.jsx)(
                              "span",
                              {
                                style: {
                                  color: _,
                                },
                                children: "[LP]",
                              },
                              "playerReports",
                            ),
                          },
                          "lowPriTooltip",
                        ),
                      ),
                    _ &&
                      _.push(
                        (0, _.jsx)(
                          _._,
                          {
                            toolTipContent: _,
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: _().PlayerReportTooltip,
                            children: (0, _.jsx)(
                              "span",
                              {
                                style: {
                                  color: _,
                                },
                                children: `[${_.slice(-2)}]`,
                              },
                              "langChange",
                            ),
                          },
                          "langchange",
                        ),
                      ),
                    _ &&
                      _.push(
                        (0, _.jsx)(
                          _._,
                          {
                            toolTipContent: _,
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: _().PlayerReportTooltip,
                            children: (0, _.jsx)(
                              "span",
                              {
                                style: {
                                  color: _,
                                },
                                children: "[GEO]",
                              },
                              "geoChange",
                            ),
                          },
                          "geochange",
                        ),
                      ),
                    _ &&
                      _.push(
                        (0, _.jsx)(
                          _._,
                          {
                            toolTipContent: _,
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: _().PlayerReportTooltip,
                            children: (0, _.jsx)(
                              "span",
                              {
                                style: {
                                  color: _,
                                },
                                children: "[HW]",
                              },
                              "hwidChange",
                            ),
                          },
                          "hwchange",
                        ),
                      ),
                    _ &&
                      _.push(
                        (0, _.jsx)(
                          "div",
                          {
                            dangerouslySetInnerHTML: {
                              __html: _,
                            },
                          },
                          "hwidChange",
                        ),
                      ),
                    _.length == 0
                      ? ""
                      : (0, _.jsx)("div", {
                          className: _().ReportRowElement,
                          children: _,
                        })
                  );
                },
              },
            ];
            let _ = !0;
            for (let _ of _)
              if (_?.persona && _?.persona[_.key]) {
                _ = !1;
                break;
              }
            let _ = !1;
            for (let _ of _)
              if (
                _?.persona &&
                _?.persona[_.key] &&
                _()(_?.persona[_.key] * 1e3).isAfter()
              ) {
                _ = !0;
                break;
              }
            let _ = 0,
              _ = !1;
            if (_?.persona?.banhistory)
              for (let _ of _.persona.banhistory) {
                const _ = _.comment || "";
                if (
                  /Smurf/.test(_) &&
                  /Main/.test(_) &&
                  _.match(/.*(?:\D|^)(\d+)/) &&
                  _.match(/.*(?:\D|^)(\d+)/)
                ) {
                  const _ = _.match(/.*(?:\D|^)(\d+)/);
                  _ && _.length && (_ = _[1]);
                } else if (
                  /Streamer/i.test(_) &&
                  /Main/.test(_) &&
                  _.match(/.*(?:\D|^)(\d+)/) &&
                  _.match(/.*(?:\D|^)(\d+)/)
                ) {
                  const _ = _.match(/.*(?:\D|^)(\d+)/);
                  _ && _.length && ((_ = _[1]), (_ = !0));
                }
              }
            const _ = _?.persona?.personaname || "";
            return (0, _.jsxs)("div", {
              className: _().PersonaDetails,
              children: [
                (0, _.jsx)(_._, {
                  bOverlapping: !1,
                }),
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)("title", {
                    children: `Dota 2 Player${_ ? " - " + _ : ""}`,
                  }),
                }),
                (0, _.jsx)(_._, {}),
                (0, _.jsx)("br", {}),
                (0, _.jsxs)("div", {
                  className: _().ContentFrame,
                  children: [
                    (0, _.jsxs)("div", {
                      className: _().TopContent,
                      children: [
                        (0, _.jsxs)("div", {
                          className: _().TopContentLeft,
                          children: [
                            (0, _.jsx)("h1", {
                              className: (0, _._)(
                                _().Header,
                                _().HeaderFixedHeight,
                              ),
                              children: `${_}`,
                            }),
                            (0, _.jsx)("div", {
                              className: _().GeneralInfoGrid,
                              children: _.map((_) =>
                                (0, _.jsxs)(
                                  _.Fragment,
                                  {
                                    children: [
                                      (0, _.jsx)("div", {
                                        children: _.displayName || _.key,
                                      }),
                                      (0, _.jsx)("div", {
                                        children: _.formatFunction
                                          ? _.formatFunction.call(
                                              null,
                                              _?.persona[_.key],
                                              _?.persona[_.secondaryKey],
                                            )
                                          : JSON.stringify(
                                              _?.persona[_.key] || "",
                                              null,
                                              2,
                                            ).replace(/['"]+/g, ""),
                                      }),
                                    ],
                                  },
                                  `${_.key}-${_.displayName}-generalInfo-row`,
                                ),
                              ),
                            }),
                            (0, _.jsx)("div", {
                              className: _().RankInfoGrid,
                              children: _.map((_) =>
                                (0, _.jsxs)(
                                  _.Fragment,
                                  {
                                    children: [
                                      (0, _.jsx)("div", {
                                        children: _.displayName || _.key,
                                      }),
                                      (0, _.jsx)("div", {
                                        children: _.formatFunction
                                          ? _.formatFunction.call(
                                              null,
                                              _?.persona[_.key],
                                              _?.persona[_.secondaryKey],
                                              _?.persona[_.tertiaryKey],
                                            )
                                          : JSON.stringify(
                                              _?.persona[_.key] || "",
                                              null,
                                              2,
                                            ).replace(/['"]+/g, ""),
                                      }),
                                    ],
                                  },
                                  `${_.key}-${_.displayName}-rankInfo-row`,
                                ),
                              ),
                            }),
                            (0, _.jsx)("div", {
                              className: _().SupportInfoTopGrid,
                              children: _.map((_) =>
                                (0, _.jsxs)(
                                  _.Fragment,
                                  {
                                    children: [
                                      (0, _.jsx)("div", {
                                        children: _.displayName || _.key,
                                      }),
                                      (0, _.jsx)("div", {
                                        children: _.formatFunction
                                          ? _.formatFunction.call(
                                              null,
                                              _?.persona[_.key],
                                              _?.persona[_.secondaryKey],
                                              _?.persona[_.tertiaryKey],
                                            )
                                          : JSON.stringify(
                                              _?.persona[_.key] || "",
                                              null,
                                              2,
                                            ).replace(/['"]+/g, ""),
                                      }),
                                    ],
                                  },
                                  `${_.key}-${_.displayName}-supportInfo-row`,
                                ),
                              ),
                            }),
                            (0, _.jsx)("div", {
                              className: _().SmurfInfoGrid,
                              children: _.map((_) =>
                                (0, _.jsxs)(
                                  _.Fragment,
                                  {
                                    children: [
                                      (0, _.jsx)("div", {
                                        children: _.displayName || _.key,
                                      }),
                                      (0, _.jsx)("div", {
                                        children: _.formatFunction
                                          ? _.formatFunction.call(
                                              null,
                                              _?.persona[_.key],
                                              _?.persona[_.secondaryKey],
                                            )
                                          : JSON.stringify(
                                              _?.persona[_.key] || "",
                                              null,
                                              2,
                                            ).replace(/['"]+/g, ""),
                                      }),
                                    ],
                                  },
                                  `${_.key}-${_.displayName}-smurfInfo-row`,
                                ),
                              ),
                            }),
                            (0, _.jsx)("div", {
                              className: _().SmoothLine,
                            }),
                            (0, _.jsx)("h2", {
                              className: _().Header,
                              children: "Recent (Last 32 games)",
                            }),
                            (0, _.jsx)("div", {
                              className: _().DetailedInfoOuterGrid,
                              children: _.map((_) =>
                                (0, _.jsx)(
                                  _.Fragment,
                                  {
                                    children: (0, _.jsx)("div", {
                                      className: _().DetailedInfoInnerGrid,
                                      children: _.formatFunction
                                        ? _.formatFunction.call(
                                            null,
                                            _?.persona[_.key],
                                            _?.persona[_.secondaryKey],
                                          )
                                        : JSON.stringify(
                                            _?.persona[_.key] || "",
                                            null,
                                            2,
                                          ).replace(/['"]+/g, ""),
                                    }),
                                  },
                                  `${_.key}-${_.displayName}-vacInfo-row`,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          className: _().TopContentRight,
                          children: (0, _.jsxs)("div", {
                            className: _().ChartContainer,
                            children: [
                              _ &&
                                (0, _.jsx)("div", {
                                  className: _().ChartTitle,
                                  children: `Last ${_.length} games`,
                                }),
                              (0, _.jsx)(_._, {
                                width: "99%",
                                aspect: 1.9,
                                children: (0, _.jsxs)(_._, {
                                  data: _,
                                  margin: {
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                  },
                                  children: [
                                    (0, _.jsx)(_._, {
                                      strokeDasharray: "12 8",
                                      stroke: "#424242",
                                      fillOpacity: 0.2,
                                    }),
                                    (0, _.jsx)(_._, {
                                      stroke: "#808080",
                                      dataKey: "time",
                                      type: "number",
                                      tickFormatter: (_) =>
                                        _()(_ * 1e3).format("MM/DD/YY"),
                                      domain: [
                                        "dataMin - 86400",
                                        "dataMax + 43200",
                                      ],
                                    }),
                                    (0, _.jsx)(_._, {
                                      stroke: "#808080",
                                      domain: ["auto", "auto"],
                                    }),
                                    (0, _.jsx)(_._, {
                                      cursor: !1,
                                      labelFormatter: (_) =>
                                        _()(Number(_) * 1e3).format(
                                          "MM/DD/YY HH:mm:ss",
                                        ),
                                      contentStyle: {
                                        backgroundColor: "#0c1414",
                                      },
                                    }),
                                    (0, _.jsx)(_._, {
                                      layout: "vertical",
                                      verticalAlign: "middle",
                                      align: "right",
                                      wrapperStyle: {
                                        paddingLeft: "10px",
                                      },
                                    }),
                                    (0, _.jsx)(_._, {
                                      type: "monotone",
                                      dataKey: "ranked",
                                      name: "Ranked",
                                      dot: {
                                        fill: _,
                                        strokeWidth: 1,
                                        _: 3,
                                      },
                                      stroke: "#888fd8",
                                      strokeWidth: 2,
                                      connectNulls: !0,
                                    }),
                                    (0, _.jsx)(_._, {
                                      type: "monotone",
                                      dataKey: "casual",
                                      name: "Unranked",
                                      dot: {
                                        fill: _,
                                        strokeWidth: 1,
                                        _: 3,
                                      },
                                      stroke: "#82ca9d",
                                      strokeWidth: 2,
                                      connectNulls: !0,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsx)("br", {}),
                    (0, _.jsx)("div", {
                      className: _().SmoothLine,
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _().SupportGrid,
                        _ && _().SupportGridHidden,
                      ),
                      children: (0, _.jsx)("div", {
                        className: _().SupportColumn,
                        onClick: () => _(!0),
                        children: (0, _.jsxs)("h2", {
                          className: (0, _._)(
                            _().HeaderNoMargin,
                            _().HeaderClickable,
                          ),
                          children: [
                            "Support, Bans, & Other Info",
                            (0, _.jsx)("img", {
                              className: (0, _._)(
                                _().ArrowIcon,
                                _().ArrowIconRight,
                              ),
                              src: `${_._.IMG_URL}arrow_solid_right.png`,
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, _.jsxs)("div", {
                      className: (0, _._)(
                        _().SupportGrid,
                        !_ && _().SupportGridHidden,
                      ),
                      children: [
                        (0, _.jsxs)("div", {
                          className: _().SupportColumn,
                          children: [
                            (0, _.jsxs)("h2", {
                              className: (0, _._)(
                                _().Header,
                                _().HeaderClickable,
                              ),
                              onClick: () => _(!1),
                              children: [
                                "Support, Bans, & Other Info",
                                (0, _.jsx)("img", {
                                  className: (0, _._)(
                                    _().ArrowIcon,
                                    _().ArrowIconDown,
                                  ),
                                  src: `${_._.IMG_URL}arrow_over.png`,
                                }),
                              ],
                            }),
                            (0, _.jsx)("div", {
                              className: _().SupportInfoGrid,
                              children: _.map((_) =>
                                (0, _.jsxs)(
                                  _.Fragment,
                                  {
                                    children: [
                                      (0, _.jsx)("div", {
                                        children: _.displayName || _.key,
                                      }),
                                      (0, _.jsx)("div", {
                                        children: _.formatFunction
                                          ? _.formatFunction.call(
                                              null,
                                              _?.persona[_.key],
                                              _?.persona[_.secondaryKey],
                                            )
                                          : JSON.stringify(
                                              _?.persona[_.key] || "",
                                              null,
                                              2,
                                            ).replace(/['"]+/g, ""),
                                      }),
                                    ],
                                  },
                                  `${_.key}-${_.displayName}-supportInfo-row`,
                                ),
                              ),
                            }),
                            (0, _.jsx)("br", {}),
                            (0, _.jsx)("div", {
                              className: _().AccessFlagsGrid,
                              children: _.map((_) =>
                                (0, _.jsxs)(
                                  _.Fragment,
                                  {
                                    children: [
                                      (0, _.jsx)("div", {
                                        children: _.displayName || _.key,
                                      }),
                                      (0, _.jsx)("div", {
                                        children: _.formatFunction
                                          ? _.formatFunction.call(
                                              null,
                                              _?.persona[_.key],
                                              _?.persona[_.secondaryKey],
                                            )
                                          : JSON.stringify(
                                              _?.persona[_.key] || "",
                                              null,
                                              2,
                                            ).replace(/['"]+/g, ""),
                                      }),
                                    ],
                                  },
                                  `${_.key}-${_.displayName}-accountFlagGenericInfo-row`,
                                ),
                              ),
                            }),
                            !_ && (0, _.jsx)("br", {}),
                            (0, _.jsx)("div", {
                              className: _().WarningsGrid,
                              children: _.map((_) =>
                                (0, _.jsxs)(
                                  _.Fragment,
                                  {
                                    children: [
                                      !!_?.persona[_.key] &&
                                        (0, _.jsx)("div", {
                                          children: _.displayName || _.key,
                                        }),
                                      !!_?.persona[_.key] &&
                                        (0, _.jsx)("div", {
                                          children: _.formatFunction
                                            ? _.formatFunction.call(
                                                null,
                                                _?.persona[_.key],
                                                _?.persona[_.secondaryKey],
                                              )
                                            : JSON.stringify(
                                                _?.persona[_.key] || "",
                                                null,
                                                2,
                                              ).replace(/['"]+/g, ""),
                                        }),
                                    ],
                                  },
                                  `${_.key}-${_.displayName}-warningsInfo-row`,
                                ),
                              ),
                            }),
                            (0, _.jsx)("br", {}),
                            (0, _.jsxs)("div", {
                              className: _().BansGrid,
                              children: [
                                _.map((_) =>
                                  (0, _.jsxs)(
                                    _.Fragment,
                                    {
                                      children: [
                                        !!_?.persona[_.key] &&
                                          _()(
                                            _?.persona[_.key] * 1e3,
                                          ).isAfter() &&
                                          (0, _.jsx)("div", {
                                            children: _.displayName || _.key,
                                          }),
                                        !!_?.persona[_.key] &&
                                          _()(
                                            _?.persona[_.key] * 1e3,
                                          ).isAfter() &&
                                          (0, _.jsx)("div", {
                                            children: _.formatFunction
                                              ? _.formatFunction.call(
                                                  null,
                                                  _?.persona[_.key],
                                                  _?.persona[_.secondaryKey],
                                                )
                                              : JSON.stringify(
                                                  _?.persona[_.key] || "",
                                                  null,
                                                  2,
                                                ).replace(/['"]+/g, ""),
                                          }),
                                      ],
                                    },
                                    `${_.key}-${_.displayName}-bansInfo-row`,
                                  ),
                                ),
                                _ > 0 &&
                                  (0, _.jsxs)(_.Fragment, {
                                    children: [
                                      !_ &&
                                        (0, _.jsx)("div", {
                                          children: "Main Account",
                                        }),
                                      _ &&
                                        (0, _.jsx)("div", {
                                          children: "Streamer",
                                        }),
                                      (0, _.jsx)("div", {
                                        children: (0, _.jsx)("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: `${_._.BASE_URL}${_._.personadetails(_).substr(1)}`,
                                          children: _,
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, _.jsx)("br", {}),
                            (0, _.jsx)("div", {
                              className: _().VacInfoOuterGrid,
                              children: _.map((_) =>
                                (0, _.jsx)(
                                  _.Fragment,
                                  {
                                    children: (0, _.jsx)("div", {
                                      className: _().VacInfoOuterGrid,
                                      children: _.formatFunction
                                        ? _.formatFunction.call(
                                            null,
                                            _?.persona[_.key],
                                            _?.persona[_.secondaryKey],
                                          )
                                        : JSON.stringify(
                                            _?.persona[_.key] || "",
                                            null,
                                            2,
                                          ).replace(/['"]+/g, ""),
                                    }),
                                  },
                                  `${_.key}-${_.displayName}-vacInfo-row`,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: _().OfficialInfoColumn,
                          children: [
                            (0, _.jsx)("h2", {
                              className: _().Header,
                              children: "Official Profile",
                            }),
                            (0, _.jsxs)("div", {
                              className: _().OfficialProfileOuterGrid,
                              children: [
                                _?.persona?.official_profile &&
                                  _.map((_) =>
                                    (0, _.jsxs)(
                                      _.Fragment,
                                      {
                                        children: [
                                          (0, _.jsx)("div", {
                                            children: _.displayName || _.key,
                                          }),
                                          (0, _.jsx)("div", {
                                            className:
                                              _().OfficialProfileInnerGrid,
                                            children: _.formatFunction
                                              ? _.formatFunction.call(
                                                  null,
                                                  _?.persona?.official_profile[
                                                    _.key
                                                  ],
                                                  _?.persona[_.secondaryKey],
                                                )
                                              : JSON.stringify(
                                                  _?.persona?.official_profile[
                                                    _.key
                                                  ] || "",
                                                  null,
                                                  2,
                                                ).replace(/['"]+/g, ""),
                                          }),
                                        ],
                                      },
                                      `${_.key}-${_.displayName}-officialProfileInfo-row`,
                                    ),
                                  ),
                                !_?.persona?.official_profile &&
                                  (0, _.jsx)(_.Fragment, {
                                    children: (0, _.jsx)("span", {
                                      style: {
                                        color: _,
                                      },
                                      children: "(None)",
                                    }),
                                  }),
                              ],
                            }),
                            (0, _.jsxs)("div", {
                              className: _().TeamsInfoInfoOuterGrid,
                              children: [
                                (0, _.jsx)("br", {}),
                                (0, _.jsx)("h2", {
                                  className: _().Header,
                                  children: "Teams",
                                }),
                                _?.persona?.teams &&
                                  _.map((_) =>
                                    (0, _.jsx)(
                                      _.Fragment,
                                      {
                                        children: (0, _.jsx)("div", {
                                          className: _().TeamsInfoInnerGrid,
                                          children: _.formatFunction
                                            ? _.formatFunction.call(
                                                null,
                                                _?.persona[_.key],
                                                _?.persona[_.secondaryKey],
                                              )
                                            : JSON.stringify(
                                                _?.persona[_.key] || "",
                                                null,
                                                2,
                                              ).replace(/['"]+/g, ""),
                                        }),
                                      },
                                      `${_.key}-${_.displayName}-teamsInfo-row`,
                                    ),
                                  ),
                                !_?.persona?.teams &&
                                  (0, _.jsx)(_.Fragment, {
                                    children: (0, _.jsx)("span", {
                                      style: {
                                        color: _,
                                      },
                                      children: "(None)",
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: _().EventColumn,
                          children: [
                            (0, _.jsx)("h2", {
                              className: _().Header,
                              children: "Event Information",
                            }),
                            (0, _.jsx)("div", {
                              className: _().EventInfoOuterGrid,
                              children: _.map((_) =>
                                (0, _.jsx)(
                                  _.Fragment,
                                  {
                                    children: (0, _.jsx)("div", {
                                      className: _().EventInfoInnerGrid,
                                      children: _.formatFunction
                                        ? _.formatFunction.call(
                                            null,
                                            _?.persona[_.key],
                                          )
                                        : JSON.stringify(
                                            _?.persona[_.key] || "",
                                            null,
                                            2,
                                          ).replace(/['"]+/g, ""),
                                    }),
                                  },
                                  `${_.key}-${_.displayName}-eventInfo-row`,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: (0, _._)(!_ && _().SupportGridHidden),
                      children: [
                        (0, _.jsx)("div", {
                          className: _().SmoothLine,
                        }),
                        (0, _.jsxs)("table", {
                          className: _().BanHistoryTable,
                          children: [
                            (0, _.jsx)("thead", {
                              children: (0, _.jsxs)("tr", {
                                children: [
                                  (0, _.jsx)("th", {
                                    align: "left",
                                    children: (0, _.jsx)("h3", {
                                      className: _().HeaderNoMargin,
                                      children: "Ban Type",
                                    }),
                                  }),
                                  (0, _.jsx)("th", {
                                    align: "left",
                                    children: (0, _.jsx)("h3", {
                                      className: _().HeaderNoMargin,
                                      children: "Ban Start",
                                    }),
                                  }),
                                  (0, _.jsx)("th", {
                                    align: "left",
                                    children: (0, _.jsx)("h3", {
                                      className: _().HeaderNoMargin,
                                      children: "Ban End",
                                    }),
                                  }),
                                  (0, _.jsx)("th", {
                                    align: "left",
                                    children: (0, _.jsx)("h3", {
                                      className: _().HeaderNoMargin,
                                      children: "Duration",
                                    }),
                                  }),
                                  (0, _.jsx)("th", {
                                    align: "left",
                                    children: (0, _.jsx)("h3", {
                                      className: _().HeaderNoMargin,
                                      children: "Admin",
                                    }),
                                  }),
                                  (0, _.jsx)("th", {
                                    align: "left",
                                    children: (0, _.jsx)("h3", {
                                      className: _().HeaderNoMargin,
                                      children: "Comment",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, _.jsxs)("tbody", {
                              children: [
                                (0, _.jsx)("tr", {
                                  children: (0, _.jsx)("td", {}),
                                }),
                                _(_?.persona?.banhistory),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: _().SmoothLine,
                    }),
                    _ &&
                      _.length &&
                      (0, _.jsxs)("div", {
                        className: _().OtherModesCheckBox,
                        children: [
                          (0, _.jsx)("input", {
                            type: "checkbox",
                            name: "othermode",
                            _: "othermode",
                            onChange: () => _(!_),
                            checked: _,
                          }),
                          (0, _.jsx)("label", {
                            htmlFor: "othermode",
                            children: (0, _.jsx)("span", {
                              children:
                                "Include custom games, practice games, and uncommon game modes",
                            }),
                          }),
                        ],
                      }),
                    (0, _.jsx)("div", {
                      className: _().MatchHistoryOuterContainer,
                      children: (0, _.jsxs)("div", {
                        className: _().MatchHistoryInnerContainer,
                        children: [
                          _ &&
                            _.length &&
                            (0, _.jsx)(_._, {
                              children: ({ width: _, height: _ }) =>
                                (0, _.jsx)(_._, {
                                  headerHeight: 70,
                                  height: _,
                                  width: _,
                                  rowHeight: 33.33,
                                  rowCount: _.length,
                                  rowGetter: ({ index: _ }) => _[_],
                                  rowClassName: ({ index: _ }) =>
                                    _ != -1
                                      ? _ % 2
                                        ? _().MatchRowEven
                                        : _().MatchRowOdd
                                      : "",
                                  overscanRowCount: 50,
                                  noRowsRenderer: () =>
                                    (0, _.jsx)("h3", {
                                      children:
                                        "No Matches Found. Toggle the checkbox at the bottom of the page for custom games and other modes.",
                                    }),
                                  children: _.map((_) =>
                                    (0, _.jsx)(
                                      _._,
                                      {
                                        label: _.label,
                                        dataKey: _.dataKey,
                                        width: _ * _.widthRelative,
                                        cellRenderer: _.cellRenderer
                                          ? _.cellRenderer
                                          : _._,
                                        columnData: {
                                          strAccountId: _,
                                        },
                                        headerRenderer: _.headerRenderer
                                          ? _.headerRenderer
                                          : _._,
                                        cellDataGetter: _._,
                                        flexGrow: 0,
                                        flexShrink: 1,
                                      },
                                      _.dataKey,
                                    ),
                                  ),
                                }),
                            }),
                          (!_ || !_.length) &&
                            (0, _.jsx)("div", {
                              children: "No matches",
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, _.jsx)(_._, {}),
              ],
            });
          };
        class _ extends _.Component {
          render() {
            return (0, _.jsx)(_, {});
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        (__webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          }));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = "public",
          _ = 50,
          _ = "green",
          _ = "red",
          _ = "yellow",
          _ = "skyblue",
          _ = 5e3,
          _ = 1e3,
          _ = (_) =>
            (0, _.jsx)("a", {
              href: `${_._.BASE_URL}personadetails/${_}?u=${_}&appid=${_._.DOTA_APP_ID}`,
              children: _,
            }),
          _ = (_) =>
            (0, _.jsx)("a", {
              href: `${_._.BASE_URL}${_._.teamdetails(_).substr(1)}`,
              children: _,
            }),
          _ = (_) =>
            (0, _.jsx)(
              "a",
              {
                href: `${_._.BASE_URL}${`matches/match/${_}`}?u=${_}&appid=${_._.DOTA_APP_ID}`,
                children: _,
              },
              _,
            ),
          _ = () => `${_._.BASE_URL}webapi/IDOTA2Teams/EditTeamName/v0001`,
          _ = () => `${_._.BASE_URL}webapi/IDOTA2Teams/AddTeamMember/v0001`,
          _ = () => `${_._.BASE_URL}webapi/IDOTA2Teams/RemoveTeamMember/v0001`,
          _ = () => `${_._.BASE_URL}webapi/IDOTA2Teams/SetTeamAdmin/v0001`,
          _ = () =>
            `${_._.BASE_URL}webapi/IDOTA2Teams/UpdateRegisteredTeamData/v0001?u=${_}&appid=${_._.DOTA_APP_ID}`,
          _ = [19785, 19894, 19890, 19891, 19892, 19893, 19101, 19696];
        var _ = ((_) => (
          (_[(_.kTRAA_RegisterTeam = 0)] = "kTRAA_RegisterTeam"),
          (_[(_.kTRAA_InvitePlayer = 1)] = "kTRAA_InvitePlayer"),
          (_[(_.kTRAA_RemovePlayer = 2)] = "kTRAA_RemovePlayer"),
          (_[(_.kTRAA_CancelInvite = 3)] = "kTRAA_CancelInvite"),
          (_[(_.kTRAA_RegisterPlayer = 4)] = "kTRAA_RegisterPlayer"),
          (_[(_.kTRAA_AcceptInvite = 5)] = "kTRAA_AcceptInvite"),
          (_[(_.kTRAA_RejectInvite = 6)] = "kTRAA_RejectInvite"),
          (_[(_.kTRAA_UnregisterTeam = 7)] = "kTRAA_UnregisterTeam"),
          (_[(_.kTRAA_TransferTeam = 8)] = "kTRAA_TransferTeam"),
          (_[(_.kTRAA_TransferTeamAdmin = 9)] = "kTRAA_TransferTeamAdmin"),
          (_[(_.kTRAA_InviteCoach = 10)] = "kTRAA_InviteCoach"),
          (_[(_.kTRAA_RemoveCoach = 11)] = "kTRAA_RemoveCoach"),
          (_[(_.kTRAA_CancelInviteCoach = 12)] = "kTRAA_CancelInviteCoach"),
          (_[(_.kTRAA_AcceptCoachInvite = 13)] = "kTRAA_AcceptCoachInvite"),
          (_[(_.kTRAA_RejectCoachInvite = 14)] = "kTRAA_RejectCoachInvite"),
          (_[(_.kTRAA_ValveUpdateName = 15)] = "kTRAA_ValveUpdateName"),
          (_[(_.kTRAA_ValveUpdateTeamName = 16)] = "kTRAA_ValveUpdateTeamName"),
          (_[(_.kTRAA_Penalty20 = 20)] = "kTRAA_Penalty20"),
          _
        ))(_ || {});
        const _ = {
            0: "kTRAA_RegisterTeam",
            1: "kTRAA_InvitePlayer",
            2: "kTRAA_RemovePlayer",
            3: "kTRAA_CancelInvite",
            4: "kTRAA_RegisterPlayer",
            5: "kTRAA_AcceptInvite",
            6: "kTRAA_RejectInvite",
            7: "kTRAA_UnregisterTeam",
            8: "kTRAA_TransferTeam",
            9: "kTRAA_TransferTeamAdmin",
            10: "kTRAA_InviteCoach",
            11: "kTRAA_RemoveCoach",
            12: "kTRAA_CancelInviteCoach",
            13: "kTRAA_AcceptCoachInvite",
            14: "kTRAA_RejectCoachInvite",
            15: "kTRAA_ValveUpdateName",
            16: "kTRAA_ValveUpdateTeamName",
            20: "kTRAA_Penalty20",
          },
          _ = [
            {
              enum: 0,
              formatFunction: () =>
                "Registered a team or re-registered an existing team.",
            },
            {
              enum: 1,
              formatFunction: (_ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    "Invited a new/legacy player ",
                    (0, _.jsx)("b", {
                      children: `${_}`,
                    }),
                    ".",
                  ],
                }),
            },
            {
              enum: 2,
              formatFunction: (_ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    "Removed a legacy player ",
                    (0, _.jsx)("b", {
                      children: `${_}`,
                    }),
                    ".",
                  ],
                }),
            },
            {
              enum: 3,
              formatFunction: (_ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("b", {
                      children: `${_}`,
                    }),
                    " cancelled an issued invite.",
                  ],
                }),
            },
            {
              enum: 4,
              formatFunction: (_ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("b", {
                      children: `${_}`,
                    }),
                    " registered a new player.",
                  ],
                }),
            },
            {
              enum: 5,
              formatFunction: (_ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("b", {
                      children: `${_}`,
                    }),
                    " accepted an invite.",
                  ],
                }),
            },
            {
              enum: 6,
              formatFunction: (_ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("b", {
                      children: `${_}`,
                    }),
                    " rejected an invite.",
                  ],
                }),
            },
            {
              enum: 7,
              formatFunction: () => "Manager removed the team registration.",
            },
            {
              enum: 8,
              formatFunction: () =>
                "Manager transferred the team wholesale to new management.",
            },
            {
              enum: 9,
              formatFunction: (_ = "", _ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    "Manager transferred management to a new manager ",
                    (0, _.jsxs)("b", {
                      children: [`${_}`, "."],
                    }),
                  ],
                }),
            },
            {
              enum: 10,
              formatFunction: (_ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    "Invited a coach ",
                    (0, _.jsx)("b", {
                      children: `${_}`,
                    }),
                    ".",
                  ],
                }),
            },
            {
              enum: 11,
              formatFunction: (_ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    "Removed a coach ",
                    (0, _.jsx)("b", {
                      children: `${_}`,
                    }),
                    ".",
                  ],
                }),
            },
            {
              enum: 12,
              formatFunction: (_ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("b", {
                      children: `${_}`,
                    }),
                    " cancelled an issued coach invite.",
                  ],
                }),
            },
            {
              enum: 13,
              formatFunction: (_ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("b", {
                      children: `${_}`,
                    }),
                    " (coach) accepted an invite.",
                  ],
                }),
            },
            {
              enum: 14,
              formatFunction: (_ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("b", {
                      children: `${_}`,
                    }),
                    " (coach) rejected an invite.",
                  ],
                }),
            },
            {
              enum: 15,
              formatFunction: (_ = "") =>
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    "Valve fixed a name for player ",
                    (0, _.jsx)("b", {
                      children: `${_}`,
                    }),
                    ".",
                  ],
                }),
            },
            {
              enum: 16,
              formatFunction: () => "Valve updated the team name.",
            },
            {
              enum: 20,
              formatFunction: () => "20% point penalty.",
            },
          ],
          _ = [
            {
              key: "pro",
              displayName: "Pro?",
              formatFunction: (_) => (_ ? "YES" : "NO"),
            },
            {
              key: "tag",
              displayName: "Tag",
            },
            {
              key: "abbreviation",
              displayName: "Abbreviation",
            },
            {
              key: "time_created",
              displayName: "Time Created",
              formatFunction: (_) =>
                _
                  ? new Date(_ * 1e3).toLocaleString(_._.GetPreferredLocales())
                  : "",
            },
            {
              key: "pickup_team",
              displayName: "Pickup Team?",
              formatFunction: (_) => (_ ? "YES" : "NO"),
            },
            {
              key: "url",
              displayName: "URL",
              formatFunction: (_) =>
                _
                  ? (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsx)("a", {
                        href: _,
                        children: _,
                      }),
                    })
                  : "",
            },
            {
              key: "country_code",
              displayName: "Country Code",
              formatFunction: (_ = "") => _.toUpperCase(),
            },
          ],
          _ = [
            {
              key: "account_id",
              displayName: "Account ID",
              formatFunction: (_) => _(_),
            },
            {
              key: "name",
              displayName: "Name",
            },
            {
              key: "persona_name",
              displayName: "Persona Name",
            },
            {
              key: "is_pro",
              displayName: "Pro",
              formatFunction: (_) => (_ ? "YES" : "NO"),
            },
            {
              key: "admin",
              displayName: "Admin",
              formatFunction: (_) => (_ ? "YES" : "NO"),
            },
            {
              key: "kick_link",
              displayName: "KICK",
              formatFunction: (_, _) =>
                (0, _.jsx)("div", {
                  className: _().Link,
                  onClick: async () => {
                    (await _().get(`${_}`), setTimeout(() => _(), _));
                  },
                  children: "KICK",
                }),
            },
            {
              key: "make_admin_link",
              displayName: "MAKE ADMIN",
              formatFunction: (_, _) =>
                !!_ &&
                (0, _.jsx)("div", {
                  className: _().Link,
                  onClick: async () => {
                    (await _().get(`${_}`), setTimeout(() => _(), _));
                  },
                  children: "MAKE ADMIN",
                }),
            },
          ],
          _ = [
            {
              key: "manager_account_id",
              displayName: "Manager Account ID",
              formatFunction: (_) => _(_),
            },
            {
              key: "manager_email",
              displayName: "Manager Email",
            },
          ],
          _ = [
            {
              key: "color_primary",
              displayName: "Color (Primary)",
              formatFunction: (_ = "") =>
                (0, _.jsx)(_.Fragment, {
                  children:
                    _ &&
                    (0, _.jsxs)("div", {
                      children: [
                        (0, _.jsx)("span", {
                          className: _().ColorBox,
                          style: {
                            backgroundColor: _,
                          },
                        }),
                        "\xA0",
                        _,
                      ],
                    }),
                }),
            },
            {
              key: "color_secondary",
              displayName: "Color (Secondary)",
              formatFunction: (_ = "") =>
                (0, _.jsx)(_.Fragment, {
                  children:
                    _ &&
                    (0, _.jsxs)("div", {
                      children: [
                        (0, _.jsx)("span", {
                          className: _().ColorBox,
                          style: {
                            backgroundColor: _,
                          },
                        }),
                        "\xA0",
                        _,
                      ],
                    }),
                }),
            },
            {
              key: "url_logo",
              displayName: "DPC Logo",
              formatFunction: (_ = "", _ = 0) =>
                (0, _.jsx)(_.Fragment, {
                  children:
                    _ &&
                    _ &&
                    (0, _.jsx)("div", {
                      className: _().DPCLogoContainer,
                      children: (0, _.jsx)("img", {
                        onError: ({ currentTarget: _ }) => {
                          ((_.onerror = null),
                            (_.src = `${_._.IMG_URL}teams_override/team_unknown_web.png`));
                        },
                        src: `${_._.CDN_URL}apps/dota2/teamlogos/${_}.png`,
                      }),
                    }),
                }),
            },
          ],
          _ = [
            {
              key: "ugc_logo_url",
              displayName: "Logo",
              formatFunction: (_ = "") =>
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)("div", {
                    className: _().URLLogoContainer,
                    children:
                      _ &&
                      (0, _.jsx)("img", {
                        src: _,
                      }),
                  }),
                }),
            },
            {
              key: "ugc_base_logo_url",
              displayName: "Base Logo",
              formatFunction: (_ = "") =>
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)("div", {
                    className: _().URLLogoContainer,
                    children:
                      _ &&
                      (0, _.jsx)("img", {
                        src: _,
                      }),
                  }),
                }),
            },
            {
              key: "ugc_banner_logo_url",
              displayName: "Banner Logo",
              formatFunction: (_ = "") =>
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)("div", {
                    className: _().URLLogoContainer,
                    children:
                      _ &&
                      (0, _.jsx)("img", {
                        src: _,
                      }),
                  }),
                }),
            },
            {
              key: "ugc_sponsor_logo_url",
              displayName: "Sponsor Logo",
              formatFunction: (_ = "") =>
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)("div", {
                    className: _().URLLogoContainer,
                    children:
                      _ &&
                      (0, _.jsx)("img", {
                        src: _,
                      }),
                  }),
                }),
            },
          ],
          _ = [
            {
              key: "account_id",
              displayName: "Account ID",
              formatFunction: (_) => _(_),
            },
            {
              key: "timestamp",
              displayName: "Timestamp",
              formatFunction: (_) =>
                _
                  ? new Date(_ * 1e3).toLocaleString(_._.GetPreferredLocales())
                  : "",
            },
            {
              key: "action",
              displayName: "Action Enum",
              formatFunction: (_) => `${_[_]} (${_})`,
            },
            {
              key: "action",
              displayName: "Audit Action",
              formatFunction: (_, _ = "", _ = "") =>
                _.find((_) => _.enum === _).formatFunction.call(null, _, _),
            },
          ],
          _ = [
            {
              key: "workshop_account_id",
              displayName: "Workshop Account ID",
            },
            {
              key: "comment",
              displayName: "Comment",
              formatFunction: (_) => (_ ? `"${_}"` : ""),
            },
            {
              key: "comment_timestamp",
              displayName: "Last Comment",
              formatFunction: (_) =>
                _
                  ? new Date(_ * 1e3).toLocaleString(_._.GetPreferredLocales())
                  : "",
            },
            {
              key: "spray_count",
              displayName: "Sprays",
            },
            {
              key: "wallpaper_count",
              displayName: "Wallpapers",
            },
            {
              key: "emoticon_count",
              displayName: "Emoticons",
            },
            {
              key: "voiceline_count",
              displayName: "Voicelines",
            },
            {
              key: "timestamp",
              displayName: "Last Changed",
              formatFunction: (_) =>
                _
                  ? new Date(_ * 1e3).toLocaleString(_._.GetPreferredLocales())
                  : "",
            },
          ],
          _ = [
            {
              key: "series_id",
              displayName: "Series ID",
            },
            {
              key: "actual_time",
              displayName: "Series Date & Time",
              formatFunction: (_) =>
                _
                  ? new Date(_ * 1e3).toLocaleString(_._.GetPreferredLocales())
                  : "",
            },
            {
              key: "outcome",
              displayName: "Outcome",
              formatFunction: (_) =>
                (0, _.jsx)("div", {
                  style: {
                    color: `${_ === "Win" ? _ : _ === "Loss" ? _ : _ === "Tie" ? _ : _}`,
                  },
                  children: _,
                }),
            },
            {
              key: "score",
              displayName: "Score",
            },
            {
              key: "opponent_team_id",
              displayName: "Opponent",
              formatFunction: (_, _) =>
                (0, _.jsxs)(_.Fragment, {
                  children: [`${_} ( `, _(_), " )"],
                }),
            },
            {
              key: "matches",
              displayName: "Match IDs",
              formatFunction: (_) => {
                const _ = [];
                return (
                  _.push(
                    _.map((_) => [
                      _(_.match_id),
                      (0, _.jsx)(
                        "span",
                        {
                          children: "\u2003",
                        },
                        `${_.match_id}-tab`,
                      ),
                    ]),
                  ),
                  _
                );
              },
            },
          ],
          _ = (_) => {
            const _ = (0, _._)()._,
              [_, _] = (0, _.useState)([]),
              [_, _] = (0, _.useState)(!1),
              [_, _] = (0, _.useState)(!1),
              [_, _] = (0, _.useState)({}),
              [_, _] = (0, _.useState)(!1),
              [_, _] = (0, _.useState)(!1),
              [_, _] = (0, _.useState)({}),
              [_, _] = (0, _.useState)([]),
              [_, _] = (0, _.useState)(!0),
              [_, _] = (0, _.useState)([]),
              _ = ({ strTeamId: _ }) => {
                const [_, _] = (0, _.useState)(""),
                  [_, _] = (0, _.useState)(""),
                  [_, _] = (0, _.useState)(""),
                  [_, _] = (0, _.useState)(!1),
                  _ = async (_) => {
                    if ((_.preventDefault(), !_ && !_ && !_)) return;
                    _(!0);
                    const _ = {
                        team_id: _,
                        team_name: _,
                        team_tag: _,
                        team_abbreviation: _,
                      },
                      _ = await _().get(_(), {
                        params: _,
                      });
                    (_(), setTimeout(() => _(!1), _));
                  };
                return (0, _.jsxs)("form", {
                  onSubmit: _,
                  children: [
                    (0, _.jsx)("h2", {
                      className: _().Header,
                      children: "Update Team Information",
                    }),
                    (0, _.jsxs)("div", {
                      className: _().EditInfoGrid,
                      children: [
                        (0, _.jsx)("div", {
                          children: "Team Name",
                        }),
                        (0, _.jsx)("input", {
                          className: _().MediumTextField,
                          type: "text",
                          name: "teamName",
                          maxLength: 32,
                          onChange: (_) => _(_.target.value),
                        }),
                        (0, _.jsx)("div", {
                          children: "Tag",
                        }),
                        (0, _.jsx)("input", {
                          className: _().SmallTextField,
                          type: "text",
                          name: "teamTag",
                          maxLength: 8,
                          onChange: (_) => _(_.target.value),
                        }),
                        (0, _.jsx)("div", {
                          children: "Abbreviation",
                        }),
                        (0, _.jsx)("input", {
                          className: _().SmallTextField,
                          type: "text",
                          name: "teamAbbreviation",
                          maxLength: 4,
                          onChange: (_) => _(_.target.value),
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("button", {
                            className: _().SubmitButton,
                            disabled: _,
                            children: _ ? "Updating..." : "Update",
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              },
              _ = ({ strTeamId: _ }) => {
                const [_, _] = (0, _.useState)(""),
                  [_, _] = (0, _.useState)(!1),
                  _ = async (_) => {
                    if ((_.preventDefault(), !_)) return;
                    _(!0);
                    const _ = {
                        team_id: _,
                        account_id: _,
                      },
                      _ = await _().get(_(), {
                        params: _,
                      });
                    (_(), setTimeout(() => _(!1), _));
                  };
                return (0, _.jsxs)("form", {
                  onSubmit: _,
                  children: [
                    (0, _.jsx)("h2", {
                      className: _().Header,
                      children: "Add Team Member",
                    }),
                    (0, _.jsxs)("div", {
                      className: _().EditInfoGrid,
                      children: [
                        (0, _.jsx)("div", {
                          children: "Account ID",
                        }),
                        (0, _.jsx)("input", {
                          className: _().MediumTextField,
                          type: "text",
                          name: "accountId",
                          maxLength: 20,
                          onChange: (_) => _(_.target.value),
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("button", {
                            className: _().SubmitButton,
                            disabled: _,
                            children: _ ? "Adding..." : "Add Account",
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              },
              _ = ({ strTeamId: _ }) => {
                const [_, _] = (0, _.useState)(""),
                  [_, _] = (0, _.useState)(""),
                  [_, _] = (0, _.useState)(!1),
                  _ = async (_) => {
                    if ((_.preventDefault(), !_ || !_)) return;
                    _(!0);
                    const _ = {
                        admin_account_id: parseInt(_),
                        admin_email: _,
                        registration_period:
                          _._.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                      },
                      _ = await _().post(_(), {
                        params: _,
                      });
                    (_(), setTimeout(() => _(!1), _));
                  };
                return (0, _.jsxs)("form", {
                  onSubmit: _,
                  children: [
                    (0, _.jsx)("h2", {
                      className: _().Header,
                      children: "Update Manager Email",
                    }),
                    (0, _.jsxs)("div", {
                      className: _().EditInfoGrid,
                      children: [
                        (0, _.jsx)("div", {
                          children: "Manager Account ID",
                        }),
                        (0, _.jsx)("input", {
                          className: _().MediumTextField,
                          type: "text",
                          name: "adminAccountId",
                          maxLength: 20,
                          onChange: (_) => _(_.target.value),
                        }),
                        (0, _.jsx)("div", {
                          children: "Manager Email",
                        }),
                        (0, _.jsx)("input", {
                          className: _().MediumTextField,
                          type: "email",
                          name: "adminEmail",
                          maxLength: 255,
                          onChange: (_) => _(_.target.value),
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("button", {
                            className: _().SubmitButton,
                            disabled: _,
                            children: _
                              ? "Updating..."
                              : "Update Manager Email",
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              };
            (0, _.useEffect)(() => {
              async function _() {
                if (!_._.DOTA_TEAM_FAN_UPLOAD_CONTENT_SEASON) return;
                const _ = {
                    season: _._.DOTA_TEAM_FAN_UPLOAD_CONTENT_SEASON,
                  },
                  _ =
                    (
                      await _().get(
                        _._.BASE_URL +
                          "webapi/IDOTA2Teams/GetFanContentStatus/v0001",
                        {
                          params: _,
                        },
                      )
                    )?.data?.team_status_list || [];
                if (_.length && _) {
                  const _ = _.find((_) => _.team_id.toString() == _);
                  _ && _(_);
                }
              }
              try {
                _();
              } catch {
                console.log("Could not fetch fan content status.");
              }
            }, [_]);
            async function _() {
              if (
                !_._.DOTA_APP_ID ||
                !_._.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD
              )
                return;
              const _ = {
                  appid: _._.DOTA_APP_ID,
                  registration_period:
                    _._.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                },
                _ =
                  (
                    await _().get(
                      _._.BASE_URL +
                        "webapi/IDOTA2Teams/GetRegisteredTeams/v001",
                      {
                        params: _,
                      },
                    )
                  )?.data?.result?.teams || [];
              (_.length && _(_), _(!0));
            }
            (0, _.useEffect)(() => {
              try {
                _();
              } catch {
                (console.log("Could not fetch registered teams."), _(!0));
              }
            }, []);
            async function _() {
              if (
                !_._.DOTA_APP_ID ||
                !_._.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD ||
                !_
              )
                return;
              const _ = {
                  appid: _._.DOTA_APP_ID,
                  _: _,
                  team_id: _,
                },
                _ = await _().get(
                  _._.BASE_URL + "webapi/IDOTA2Teams/GetSingleTeamInfo/v001",
                  {
                    params: _,
                  },
                ),
                _ = _?.data,
                _ = _?.members || [];
              try {
                const _ = await _().get(
                  _._.BASE_URL + "teams/getugcfilelinks/",
                  {
                    params: {
                      team_id: _,
                    },
                  },
                );
                (_.data && Object.assign(_, _.data),
                  await Promise.all(
                    _.map(async (_, _) => {
                      const _ = await _().get(
                        _._.BASE_URL +
                          "webapi/IDOTA2Fantasy/GetPlayerInfo/v0001",
                        {
                          params: {
                            account_id: _.account_id,
                          },
                        },
                      );
                      ((_[_].is_pro = !!_?.data?.is_pro),
                        (_[_].name = _?.data?.name || ""));
                      const _ = await _().get(
                        _._.BASE_URL + "teams/getpersonaname/",
                        {
                          params: {
                            account_id: _.account_id,
                          },
                        },
                      );
                      _[_].persona_name = _?.data || "";
                    }),
                  ));
                const _ = (_, _) =>
                  _.is_pro && !_.is_pro
                    ? -1
                    : !_.is_pro && _.is_pro
                      ? 1
                      : _.admin && !_.admin
                        ? -1
                        : (!_.admin && _.admin) ||
                            _?.pro_name.toLowerCase() >
                              _?.pro_name.toLowerCase()
                          ? 1
                          : _?.pro_name.toLowerCase() <
                              _?.pro_name.toLowerCase()
                            ? -1
                            : 0;
                _.sort(_);
              } catch {
                console.log("Error fetching individual player info.");
              }
              (_ && _.data && _(_), _(!0));
            }
            ((0, _.useEffect)(() => {
              try {
                _();
              } catch {
                (console.log("Could not fetch single team info."), _(!0));
              }
            }, [_]),
              (0, _.useEffect)(() => {
                async function _() {
                  if (
                    !_._.DOTA_APP_ID ||
                    !_._.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD ||
                    !_
                  )
                    return;
                  const _ = {
                      team_id: _,
                      registration_period:
                        _._.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                    },
                    _ = await _().get(
                      _._.BASE_URL +
                        "webapi/IDOTA2Teams/GetTeamAuditInformation/v001",
                      {
                        params: _,
                      },
                    ),
                    _ = _?.data,
                    _ = _?.actions || [];
                  (await Promise.all(
                    _.map(async (_) => {
                      if (_.action === 9 && _.account_id) {
                        const _ = await _().get(
                          _._.BASE_URL + "teams/getpersonaname/",
                          {
                            params: {
                              account_id: _.account_id,
                            },
                          },
                        );
                        _.target_manager_name = _?.data || "";
                      }
                    }),
                  ),
                    _ && _.data && _.actions && _(_.actions));
                }
                try {
                  _();
                } catch {
                  (console.log("Could not fetch single team info."), _(!0));
                }
              }, [_]),
              (0, _.useEffect)(() => {
                let _;
                try {
                  _ = JSON.parse(_._.DPC_DATA).events;
                } catch {}
                if (!_) return;
                _ = _.filter(
                  (_) =>
                    _.registration_period ===
                    _._.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                );
                let _ = [];
                _.push(..._);
                for (let _ of _) {
                  const _ = _.leagues.map((_) => _.league_id);
                  _.push(..._);
                }
                (_.sort().reverse(),
                  (_ = _.filter((_, _, _) => _.indexOf(_) == _)),
                  _.length > _ && (_ = _.slice(_.length - _)));
                async function _() {
                  if (!_.length) return;
                  const _ = {
                      league_ids: _.join(","),
                    },
                    _ = (
                      await _().get(
                        _._.BASE_URL +
                          "webapi/IDOTA2League/GetLeaguesData/v001",
                        {
                          params: _,
                        },
                      )
                    )?.data?.leagues,
                    _ = [];
                  for (let _ of _)
                    for (let _ of _.node_groups)
                      for (let _ of _.node_groups)
                        for (let _ of _.nodes)
                          _.team_id_1 &&
                            _.team_id_2 &&
                            (_.team_id_1 == _ || _.team_id_2 == _) &&
                            ((_.league_name =
                              _.info.name + ` (${_.info.league_id})`),
                            _.team_id_1 == _
                              ? ((_.opponent_team_id = _.team_id_2),
                                _.team_1_wins > _.team_2_wins
                                  ? (_.outcome = "Win")
                                  : _.team_1_wins === _.team_2_wins
                                    ? (_.outcome = "Tie")
                                    : (_.outcome = "Loss"),
                                (_.score = `${_.team_1_wins} - ${_.team_2_wins}`))
                              : ((_.opponent_team_id = _.team_id_1),
                                _.team_2_wins > _.team_1_wins
                                  ? (_.outcome = "Win")
                                  : _.team_2_wins === _.team_1_wins
                                    ? (_.outcome = "Tie")
                                    : (_.outcome = "Loss"),
                                (_.score = `${_.team_2_wins} - ${_.team_1_wins}`)),
                            _.team_1_wins === 0 &&
                              _.team_2_wins === 0 &&
                              _.actual_time &&
                              new Date().getTime() < _.actual_time * 1e3 &&
                              (_.outcome = "Upcoming"),
                            _.push(_));
                  const _ = (_, _) =>
                    _.actual_time > _.actual_time
                      ? -1
                      : _.actual_time < _.actual_time
                        ? 1
                        : 0;
                  _.sort(_);
                  const _ = (_, _) =>
                    _.reduce(
                      (_, _) => ({
                        ..._,
                        [_[_]]: [...(_[_[_]] || []), _],
                      }),
                      {},
                    );
                  _.length && _(_(_, "league_name"));
                }
                try {
                  _();
                } catch {
                  console.log("Could not fetch leagues data.");
                }
              }, [_]));
            const _ = _.find((_) => _.team_id == _) || {};
            let _;
            if (
              ((!_ || !_) &&
                (_ = (0, _.jsx)("div", {
                  children: "Loading...",
                })),
              _ &&
                (_.length == 0 || _) &&
                (_ = (0, _.jsx)("div", {
                  children: "Error loading registered teams...",
                })),
              _ &&
                (Object.keys(_).length == 0 || _) &&
                (_ = (0, _.jsx)("div", {
                  children: `Error loading single team info for teamId ${_} `,
                })),
              _)
            )
              return (0, _.jsxs)("div", {
                className: _().TeamDetails,
                children: [
                  (0, _.jsx)(_._, {
                    bOverlapping: !1,
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)("title", {
                      children: "Dota 2 - Team Details",
                    }),
                  }),
                  (0, _.jsx)(_._, {}),
                  (0, _.jsx)("div", {
                    className: _().ContentFrame,
                    children: _,
                  }),
                  (0, _.jsx)(_._, {}),
                ],
              });
            const _ = _.members || [];
            _.forEach((_) => {
              ((_.kick_link = `${_()}?u=${_}&appid=${_._.DOTA_APP_ID}&team_id=${_}&account_id=${_.account_id}`),
                (_.make_admin_link = _.admin
                  ? ""
                  : `${_()}?u=${_}&appid=${_._.DOTA_APP_ID}&team_id=${_}&account_id=${_.account_id}`));
            });
            const _ = () => {
                const _ = [];
                return (
                  Object.keys(_).forEach((_, _) => {
                    (_.push(
                      (0, _.jsx)(
                        "h3",
                        {
                          style: {
                            gridColumn: `span ${_.length}`,
                          },
                          children: (0, _.jsx)("b", {
                            children: _,
                          }),
                        },
                        `league-name-row-${_}`,
                      ),
                    ),
                      _.push(
                        _.map((_) =>
                          (0, _.jsx)(
                            "div",
                            {
                              children: (0, _.jsx)("b", {
                                children: _.displayName || _.key,
                              }),
                            },
                            `${_.key}-${_.displayName}-matches-grid-header-league-${_}`,
                          ),
                        ),
                      ));
                    for (let _ of _[_])
                      _.push(
                        _.map((_) =>
                          (0, _.jsx)(
                            "div",
                            {
                              children: _.formatFunction
                                ? _.formatFunction.call(
                                    null,
                                    _[_.key],
                                    _(_.opponent_team_id),
                                  )
                                : JSON.stringify(
                                    _[_.key] || "",
                                    null,
                                    2,
                                  ).replace(/['"]+/g, ""),
                            },
                            `${_.key}-${_.displayName}-${_.series_id}`,
                          ),
                        ),
                      );
                    _.push((0, _.jsx)("br", {}));
                  }),
                  _
                );
              },
              _ = (_) => {
                const _ = _.find((_) => _.team_id == _);
                return _ ? _.team_name : "";
              };
            return (0, _.jsxs)("div", {
              className: _().TeamDetails,
              children: [
                (0, _.jsx)(_._, {
                  bOverlapping: !1,
                }),
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)("title", {
                    children: "Dota 2 - Team Details",
                  }),
                }),
                (0, _.jsx)(_._, {}),
                (0, _.jsxs)("div", {
                  className: _().ContentFrame,
                  children: [
                    (0, _.jsx)("h1", {
                      className: _().Header,
                      children: `Team Details for ${_?.name} (${_.team_id})`,
                    }),
                    (0, _.jsxs)("div", {
                      className: _().MiscInfoGrid,
                      children: [
                        _.map((_) =>
                          (0, _.jsxs)(
                            _.Fragment,
                            {
                              children: [
                                (0, _.jsx)("div", {
                                  children: _.displayName || _.key,
                                }),
                                (0, _.jsx)("div", {
                                  children: _.formatFunction
                                    ? _.formatFunction.call(null, _[_.key])
                                    : JSON.stringify(
                                        _[_.key] || "",
                                        null,
                                        2,
                                      ).replace(/['"]+/g, ""),
                                }),
                              ],
                            },
                            `${_.key}-misc-row`,
                          ),
                        ),
                        !_ &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)("div", {
                                className: _().Link,
                                onClick: () => _(!0),
                                children: "Update Info / Add Member",
                              }),
                              (0, _.jsx)("div", {}),
                            ],
                          }),
                      ],
                    }),
                    _ &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)("div", {
                            className: _().SmoothLine,
                          }),
                          (0, _.jsx)(_, {
                            strTeamId: _,
                          }),
                          (0, _.jsx)("div", {
                            className: _().SmoothLine,
                          }),
                          (0, _.jsx)(_, {
                            strTeamId: _,
                          }),
                        ],
                      }),
                    (0, _.jsx)("div", {
                      className: _().SmoothLine,
                    }),
                    (0, _.jsx)("h2", {
                      className: _().Header,
                      children: "Members",
                    }),
                    (0, _.jsxs)("div", {
                      className: _().MembersGrid,
                      style: {
                        gridTemplateColumns: `250px repeat(${_.length - 1}, auto)`,
                      },
                      children: [
                        (0, _.jsx)(_.Fragment, {
                          children: _.map((_) =>
                            (0, _.jsx)(
                              "div",
                              {
                                children: (0, _.jsx)("b", {
                                  children: _.displayName || _.key,
                                }),
                              },
                              `${_.key}-members-grid-header}`,
                            ),
                          ),
                        }),
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            !!_.length &&
                              _.map((_) =>
                                _.map((_) =>
                                  (0, _.jsx)(
                                    "div",
                                    {
                                      children: _.formatFunction
                                        ? _.formatFunction.call(
                                            null,
                                            _[_.key],
                                            _,
                                          )
                                        : JSON.stringify(
                                            _[_.key] || "",
                                            null,
                                            2,
                                          ).replace(/['"]+/g, ""),
                                    },
                                    `${_.key}-member-row-${_.account_id}`,
                                  ),
                                ),
                              ),
                            !_.length &&
                              (0, _.jsx)("div", {
                                children: "No team members.",
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)("br", {}),
                    (0, _.jsxs)("div", {
                      className: _().ManagerGrid,
                      style: {
                        gridTemplateColumns: `250px repeat(${_.length - 1}, auto)`,
                      },
                      children: [
                        (0, _.jsx)(_.Fragment, {
                          children: _.map((_) =>
                            (0, _.jsx)(
                              "div",
                              {
                                children: (0, _.jsx)("b", {
                                  children: _.displayName || _.key,
                                }),
                              },
                              `${_.key}-manager-grid-header}`,
                            ),
                          ),
                        }),
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            _.map((_) =>
                              (0, _.jsx)(
                                _.Fragment,
                                {
                                  children: (0, _.jsx)("div", {
                                    children: _.formatFunction
                                      ? _.formatFunction.call(null, _[_.key])
                                      : JSON.stringify(
                                          _[_.key] || "",
                                          null,
                                          2,
                                        ).replace(/['"]+/g, ""),
                                  }),
                                },
                                `${_.key}-manager-row`,
                              ),
                            ),
                            !_.length &&
                              (0, _.jsx)("div", {
                                children: "No manager.",
                              }),
                          ],
                        }),
                      ],
                    }),
                    _ &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)("div", {
                            className: _().SmoothLine,
                          }),
                          (0, _.jsx)(_, {
                            strTeamId: _,
                          }),
                        ],
                      }),
                    (0, _.jsx)("div", {
                      className: _().SmoothLine,
                    }),
                    (0, _.jsx)("h2", {
                      className: _().Header,
                      children: "Logos & Colors",
                    }),
                    (0, _.jsx)("div", {
                      className: _().LogoAndColorsGrid,
                      children: _.map((_) =>
                        (0, _.jsxs)(
                          _.Fragment,
                          {
                            children: [
                              (0, _.jsx)("div", {
                                children: _.displayName || _.key,
                              }),
                              (0, _.jsx)("div", {
                                children: _.formatFunction
                                  ? _.formatFunction.call(
                                      null,
                                      _[_.key],
                                      _.team_id,
                                    )
                                  : JSON.stringify(
                                      _[_.key] || "",
                                      null,
                                      2,
                                    ).replace(/['"]+/g, ""),
                              }),
                            ],
                          },
                          `${_.key}-logo-colors-row`,
                        ),
                      ),
                    }),
                    (0, _.jsx)("br", {}),
                    (0, _.jsxs)("div", {
                      className: _().UGCLogosGrid,
                      style: {
                        gridTemplateColumns: `repeat(${_.length}, auto)`,
                      },
                      children: [
                        (0, _.jsx)(_.Fragment, {
                          children: _.map((_) =>
                            (0, _.jsx)(
                              "div",
                              {
                                children: (0, _.jsx)("b", {
                                  children: _.displayName || _.key,
                                }),
                              },
                              `${_.key}-ugc-grid-header}`,
                            ),
                          ),
                        }),
                        (0, _.jsx)(_.Fragment, {
                          children: _.map((_) =>
                            (0, _.jsx)(
                              "div",
                              {
                                children: _.formatFunction
                                  ? _.formatFunction.call(null, _[_.key])
                                  : JSON.stringify(
                                      _[_.key] || "",
                                      null,
                                      2,
                                    ).replace(/['"]+/g, ""),
                              },
                              `${_.key}-ugc-logo`,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: _().SmoothLine,
                    }),
                    (0, _.jsx)("h2", {
                      className: _().Header,
                      children: "Audit Action History",
                    }),
                    (0, _.jsxs)("div", {
                      className: _().AuditActionsGrid,
                      style: {
                        gridTemplateColumns: `repeat(${_.length}, auto)`,
                      },
                      children: [
                        (0, _.jsx)(_.Fragment, {
                          children: _.map((_) =>
                            (0, _.jsx)(
                              "div",
                              {
                                children: (0, _.jsx)("b", {
                                  children: _.displayName || _.key,
                                }),
                              },
                              `${_.key}-${_.displayName}-audit-action-grid-header`,
                            ),
                          ),
                        }),
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            !!_.length &&
                              _.map((_) =>
                                _.map((_) =>
                                  (0, _.jsx)(
                                    "div",
                                    {
                                      children: _.formatFunction
                                        ? _.formatFunction.call(
                                            null,
                                            _[_.key],
                                            _.player_name,
                                            _.target_manager_name,
                                          )
                                        : JSON.stringify(
                                            _[_.key] || "",
                                            null,
                                            2,
                                          ).replace(/['"]+/g, ""),
                                    },
                                    `${_.key}-${_.displayName}-${_.timestamp}`,
                                  ),
                                ),
                              ),
                            !_.length &&
                              (0, _.jsx)("div", {
                                children: "No audit actions.",
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: _().SmoothLine,
                    }),
                    (0, _.jsx)("h2", {
                      className: _().Header,
                      children: "Supporters Club / Workshop Status",
                    }),
                    (0, _.jsx)("div", {
                      className: _().WorkshopStatusGrid,
                      children: _.map((_) =>
                        (0, _.jsxs)(
                          _.Fragment,
                          {
                            children: [
                              (0, _.jsx)("div", {
                                children: _.displayName || _.key,
                              }),
                              (0, _.jsx)("div", {
                                children: _.formatFunction
                                  ? _.formatFunction.call(null, _[_.key])
                                  : JSON.stringify(
                                      _[_.key] || "",
                                      null,
                                      2,
                                    ).replace(/['"]+/g, ""),
                              }),
                            ],
                          },
                          `${_.key}-workshop-status-row`,
                        ),
                      ),
                    }),
                    (0, _.jsx)("div", {
                      className: _().SmoothLine,
                    }),
                    (0, _.jsx)("h2", {
                      className: (0, _._)(_().Header, _().SeasonMatchHeader),
                      children: `Season ${_._.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD} Matches`,
                    }),
                    (0, _.jsx)("div", {
                      className: _().MatchesGrid,
                      style: {
                        gridTemplateColumns: `repeat(${_.length}, auto)`,
                      },
                      children: (0, _.jsxs)(_.Fragment, {
                        children: [
                          _(),
                          !Object.keys(_).length &&
                            (0, _.jsxs)("div", {
                              children: [
                                (0, _.jsx)("br", {}),
                                "No league matches.",
                              ],
                            }),
                        ],
                      }),
                    }),
                    (0, _.jsx)("br", {}),
                  ],
                }),
                (0, _.jsx)(_._, {}),
              ],
            });
          };
        class _ extends _.Component {
          render() {
            return (0, _.jsx)(_, {});
          }
        }
      },
      chunkid: (module) => {
        module.exports = {
          Tooltip: "_2IHKq8kE2FKkIkQ0uN1hI1",
          CarouselFade: "_2jFWoHmtCDVmk-GJRBpunm",
          StandardButton: "_3Vzjmf1OlnazpL0kLEaBk2",
          ButtonText: "_1zE9KyknOxmGylbt0gT6G1",
          Icon: "_2kUnsdlfHyidOkvHNRy-G5",
          Play: "_3xQLJ4b-cm8IeXAoDPbn6R",
          SteamLogo: "_1hoZQVEfsnXavdsZP34vJD",
          ToolTip: "_3fIQnpYc0eNl9uXKBoSJam",
          PlayerReportTooltip: "_13XzPZYgyQ52l8UHzh0EmH",
          Facet: "_2479It67QW-Bm9uy6i44cg",
          FacetColorRed0: "_2jAmS6ZJIahLUzOlKrjWpM",
          BackgroundTexture: "Kt1MTBk5kBd4aK5CFW2BS",
          FacetColorRed1: "_1VQ6_XxRXOarkHNtIZR9Bw",
          FacetColorRed2: "_2npcwVYfERdNcBWrDZoEz0",
          Background: "_3MfMXew7MDkO4ZAyjocp4l",
          FacetColorYellow0: "_2dBam2Tl57qfOfNvHZ6ChQ",
          FacetColorYellow1: "_28IIDyezxLgxIAUErmcPAh",
          FacetColorYellow2: "_3jB4IMyM4FBN4ivpEPzbJd",
          FacetColorYellow3: "_1Gjyr8DdaSBz6_43VEAz0d",
          FacetColorGreen0: "_1c3NTvD5wY1eRXjzD8RPIe",
          FacetColorGreen1: "_1-qGJ84BFxu0lBHUhb5BAi",
          FacetColorGreen2: "_3sEfw4qhYeKQzhX1UOb60Z",
          FacetColorGreen3: "_21o76udrdevLEWmI0ZuSCT",
          FacetColorGreen4: "_3833UsaWsxduGGxeTuMWAC",
          FacetColorBlue0: "_3gfEwvDy5HqyL6VGHoMRVO",
          FacetColorBlue1: "_3O35_r4wm4_s7r6H_YdPCz",
          FacetColorBlue2: "_3ejomd-TsjxlHuJOx2FYyf",
          FacetColorBlue3: "_2HyBDMaS-B2ekmE3PItFMK",
          FacetColorPurple0: "YXBKkoBCp4eQx9gFE-4GS",
          FacetColorPurple1: "_1EmAB8GlcjfA1QEcuCJi6K",
          FacetColorPurple2: "GNCP-xxNt9O4-ierkeGcM",
          FacetColorGray0: "_2TRWZ2SI7jmu1RmANk84kq",
          FacetColorGray1: "_2Z0PK6Dt5jIErUliJ1Nmcb",
          FacetColorGray2: "_3wy1a1XvwtnmSkyJ_Uog4B",
          FacetColorGray3: "_3CwxQRU26KizreV1hodszw",
          DotaPlusTesterPage: "_3WgovHBiMUxsTea3MjGVj_",
          SelectionHeader: "_1nNeHirsBILHpl2is8F5lW",
          Option: "_2AFRQzgnX-YsecNy9XrxzY",
          Selected: "wbLdHJ0ZWLvu8HF50SXla",
          DotaPlusTesterSubPage: "_2CWEAN8f8RDC7hNnHa8Suk",
          Content: "_3bNeyifasCN57MFYhqx6ZU",
          HeroOption: "_2v0i2xJP4V-2Qpo3cyY1Nj",
          Portrait: "_3i4UGSnvERSFqSVToiROro",
          Name: "_1CHIkGehGqx3Ju9lDCMSL3",
          HeroPickerPopupBackground: "BkuFnEL7cAyjCsMYhNyG3",
          HeroPickerPopup: "_5HnIRB-JgFF82A3YeaDuq",
          InvisibleBackground: "_2jAZ6RdYq6X6OeC7yk8dj3",
          Title: "_3WFGlJosY89AeFD-YAn6gJ",
          Grid: "_21gyki0jzxuKwN4H10o8X9",
          HeroSelector: "_3fmy45UdjacZi73yO3E_uF",
          ItemOption: "_6AJ-yI4g6fOtGfcDROYZt",
          ItemPickerPopupBackground: "_145u0nzgVhn2-DZBoRWmsI",
          ItemPickerPopup: "_1aNSszFcQFhi_uHGeZf8Rv",
          ItemSelector: "_2SWf_NNmwQ7LWbLC4VYlOr",
          Separator: "vvXhWtkA9z6wjvMnq8Cfh",
          IncludExcludeItemOption: "_3Cu9n_EGnwgQDa94O5JQYa",
          ItemOptionTitle: "_1KOTz4KFHV7evGoyiIIhmZ",
          OptionColumn: "_29uhbNe06vW1DnR0UERABv",
          Percent: "_3pU4B55o9M0cH7n06CQ15l",
          ResultHeader: "_2Vl5GTvbioLQmgltncA3xD",
          PenaltySelector: "_28XsJixV0GJwbwa0EysF95",
          VariantTypes: "_3Zp2QG7HhI-jivO6IldhoV",
          VariantType: "_219ADvdUd0lvulRTTvI5az",
          ShowMore: "_1tx8GY0JVZNo7qQPdeDsTn",
          HeroList: "AyejJ-aIiriywCHAZOeUo",
          Allies: "_3Xuun95YKZ1YruK-b9hYEf",
          Enemies: "_3FpjjT_dv_gp1luKSDDZhK",
          MiscInfo: "_2PVHaq0Abzd8Vpp7ZSpR6X",
          Results: "_1epogxsRPnR7xvn_EJk5ek",
          Result: "_2aynAA7fYEBl7qeYdv4k7P",
          Weight: "_1LCBQ-B3CRx5lvFPGuCCnL",
          Score: "_3upfuZKsxFE7jDpMgQDHrF",
          ScoreAdjust: "_1AWXivqjFK2i-xe23q043e",
          SequenceID: "_2I5WaWpAnR7Xb9bJIjMAuB",
          ItemList: "_1hs67D7V7zX-88hrbFgsay",
          ItemIcon: "_1Wq63SoqJ5sm2AjU0GHg0G",
          AbilityIcon: "_2jWYP5f6ScwPsEZ14cFB93",
          Loading: "_2ie0WE5D9UyYhwIqhg8OUG",
          ClearSkilledAbilities: "_2KHZb4-REKRB5a9tJlgkPK",
          SkilledAbilityList: "_2U4uJQoF_QS4MJABMADMUe",
          PurchasedItemList: "_1uTSEvOUBlQN2EaDV3Fj_K",
          AbilitySuggestions: "_3vYlZs47O9z1ELF14LLEsV",
          ScoredItems: "_2thRO1n5rmT_Vry4XHHkFu",
          Level: "_3POW-ow0sU5DLsnpAxjZ4u",
          Header: "_2pcHk7_VnLKZ4YPsfy3PPd",
          Checkbox: "_1UYvWalxB-6TGfDko-EcKt",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Tooltip: "_3OELhBBscklv2IMdg5oomz",
          CarouselFade: "_31I4llS_Lyhj5ATIkhm9Qt",
          StandardButton: "_37aD3ynYPo1qUap4RVCcn1",
          ButtonText: "_1kRqdz1Q6aw8DZs4fDMlS_",
          Icon: "_3qIRiUalNYmwOuLpN0DODG",
          Play: "_2vTU3GlbWNRYTktMAr4piA",
          SteamLogo: "_1fP8sQd2eLdp1lnsGBSiIc",
          ToolTip: "RYpRbQXFsKkHLprrRA1zi",
          PlayerReportTooltip: "_3tRwpyEakf__WKj7w5jodF",
          PersonaDetails: "_1zeGbjgrtzsTxpMX5En4ZN",
          ContentFrame: "Z_Blbt7KKFTyy0LhWzqrd",
          BansGrid: "_3V5pubLeXWOs7rDx7cGxI",
          WarningsGrid: "_2THih7P04NzMQyRkSCU57p",
          DetailedInfoInnerGrid: "_1hn0yQoWwUItL8u4npU1FJ",
          DetailedInfoOuterGrid: "_1A5QRx9VlcVs-R0nrFE7ek",
          VacInfoInnerGrid: "_2GLWyc9KftX65_eYbF9SbV",
          VacInfoOuterGrid: "_3mMUpl5v4rdbX0Y3j6h9Vt",
          TeamsInfoInnerGrid: "_1VvPwBnK6kaf04tlafgJzd",
          TeamsInfoOuterGrid: "_3Yy6Z2mss8pTAjlVIJ7A9e",
          OfficialProfileInnerGrid: "_3B-f5WgGwbIfjjQ79Ef-Nx",
          OfficialProfileOuterGrid: "_3G-7dX2yZaIKFL9tnC0VkL",
          EventInfoInnerGrid: "vvYl-3ZIeMPkGI94saJaY",
          EventInfoOuterGrid: "e1kXopQGUfQO8ICcUgWT9",
          TeamDetailsGrid: "_2qp3OE-MGle8fIYmzYo-mD",
          AccessFlagsGrid: "_31PXUbr6Ft4mcgqJlnxbd4",
          SupportInfoGrid: "_1OWRzmCzZ7Ff9zLvR0ij53",
          SmurfExperimentalInfoGrid: "_2i8-FQlo99PtuRmUvtgurE",
          SmurfInfoGrid: "_1ec2JlZSx2iKez9Tlm60Ho",
          LinkedAccountsGrid: "_1CWPTeuaqNUawITjfayjh7",
          SupportInfoTopGrid: "pEEkQfBPikqdsNi11lWM-",
          RankInfoGrid: "xI5E6apwJIM7u3b5GpQHg",
          GeneralInfoGrid: "_1fxrHZYArq4s_yW3AGlgLl",
          Header: "DQGCOxrVoC7LBhM7mn-Js",
          HeaderFixedHeight: "_2VaZtuM2kaB1JfOPNUHY7z",
          HeaderNoMargin: "_26vpYMRjrF8IaAlDodSKYJ",
          HeaderClickable: "_2OwWXhfu5Ir_RK5tZGdlV7",
          TopContent: "_22K2AIz1_qxsa0prjSJght",
          TopContentLeft: "AymWsmELt-04P2KDWP_ht",
          TopContentRight: "_1_Nsd4gBtT24RXhTZX59hu",
          ChartContainer: "NJ2SxLweSpIwwij01bEPa",
          ChartTitle: "_2jj8F6TujCphllWG0mVZIR",
          FilterGrid: "GCf_MpdLqqDAA2gYJy_OP",
          RankedFilters: "_33ShEkw3vpxlYh9V4kq8vN",
          MatchHistoryOuterContainer: "_3_r0BBZ53SWfDvtIYFmnVy",
          MatchHistoryInnerContainer: "sL92M3TGZXFY52YJwBjqg",
          MatchRowEven: "ux51myX2FubufpPVDr79F",
          SupportGrid: "_2Y0XJ26SxbEz2ymss3IxT1",
          SupportGridHidden: "fQ9JbuKILX6QcGliXkAAW",
          BanHistoryTable: "_3WqIrnD55srvWk0usaiGU",
          ReportRowElement: "_2D2t4sByBFxPdT19ZxDi2H",
          Link: "_1ymUXcoOK9QMVUK3LqDNva",
          MediumTextField: "eQUN1139S04UDBXZD9sj9",
          SmallTextField: "_1NTGYvvayGBoCVLwOZeKqr",
          SmoothLine: "TmbIeQaO211UMcS2rYilB",
          HeroImage: "_3yyq7mdx9R7TGWugXYr-p1",
          ItemContainer: "_2HKl4yY1a7E74CglG8uBUX",
          ItemIcon: "_3fmaFLdu4JhnWu-pNzi4n_",
          RankNumber: "_2DZJOGqgRmf8BXHrKl8NlI",
          RankedUncertainty: "YGzF1cwttz9g-GD8lQa7u",
          RankedBadgeIcon: "_1bjscpu27X92lwFnnDxuB-",
          CheckBox: "_2YEZTwo84iD58hIg0yVu7c",
          OtherModesCheckBox: "F2OsALGKET10BleQcREfT",
          ArrowIcon: "_2409M7zgkG1YfIoKjf0xuW",
          ArrowIconRight: "_2_9wfntkC3b3oqBh6DWQWS",
          ArrowIconDown: "_3BwteZt73UOnhP1eZQzjLG",
          MarginRightSmall: "_18x1jAkVSdDMbBRGE29U8Q",
          TextCapitalize: "lT6nXg4T4nF_u8dPbxbLK",
          TextUppercase: "_1zyxlvXRinV7kmTGr27_gu",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Tooltip: "_31hC1zqg_cK9fp6BCtDEz",
          CarouselFade: "_2UcOFVBSgdG55jLKpxirAG",
          StandardButton: "_1OiL0_UEMBNqnMh2NIyqgn",
          ButtonText: "_3gcUnXWgY6QWkRKN1ClXpK",
          Icon: "_17oKddncf6DrsSIQVgNvNG",
          Play: "_1e79tla_NJpyJDcvbU9AF9",
          SteamLogo: "_2Z206WYSu-kLFeeyQllJnA",
          ToolTip: "_2w_iNwO7tcIXVjXubfdbpo",
          PlayerReportTooltip: "_3oBx7dyVQTWVwPU7EuvqWT",
          TeamDetails: "w3idBBCXL0rxnD6pwBRM6",
          ContentFrame: "hjW9KalKzKYN16tpDQb7f",
          MatchesGrid: "_3HPIK48slIcN5eHxvTSbKQ",
          WorkshopStatusGrid: "_11m5MHnA6UknRRBsXpZ1rv",
          AuditActionsGrid: "_1ohOp7TGfH5UAINZezcdxk",
          LogoAndColorsGrid: "ndSeTE99iU-Ou7uTl5Si0",
          UGCLogosGrid: "_1bbYnwq3o_lOjCCxe9iJaj",
          MiscInfoGrid: "_1igOxRpLl7PyFY24wnePza",
          MembersGrid: "_3tGp0SBmohvWD8Pzf5iiuc",
          ManagerGrid: "_3GLmjRcbneW-hMwgcQ--3l",
          TeamDetailsGrid: "_3V8yT6IOTf0yaOtb7uXfky",
          EditInfoGrid: "_154vYGBrUHabGUpVtMn3B4",
          Header: "_3gRz5dlEtd2bMEcJRISHKT",
          SubmitButton: "_1RnAKrnaOcM3sRJ1ITONHN",
          URLLogoContainer: "_2LgtuThAofytR-EoQUMOLR",
          DPCLogoContainer: "_3uIWu7cqjGy0dv5tXwPZnF",
          SeasonMatchHeader: "SV4lDRUSn4ErLJABsMRaN",
          ColorBox: "_1Kvg9fL81Eb3WLk0EcFDTl",
          Link: "_3Gjo1M2PApknKEf9Y8kZSI",
          MediumTextField: "_2IXLMtIL66j_ePIFCMoMLn",
          SmallTextField: "_1y2t9XMGl9stF97djWq0aK",
          SmoothLine: "_3YaqJMKcvdAXYfVRX2W8PY",
        };
      },
    },
  ]);
})();
