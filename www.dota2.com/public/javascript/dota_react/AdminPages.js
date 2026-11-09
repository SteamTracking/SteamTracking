/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [87084],
    {
      57200: (Re, ke, y) => {
        "use strict";
        (y.r(ke), y.d(ke, { default: () => z }));
        var e = y(69500),
          fe = y(2095),
          R = y(84485),
          I = y(11778),
          j = y(7552),
          x = y(28485),
          oe = y(88351),
          w = y(50954),
          Ge = y(96213),
          He = y(18497),
          Ce = y(15001),
          Ye = y(93368),
          Le = y(8305),
          D = y(63177),
          Ne = y(2466),
          r = y.n(Ne);
        const Te = (i) => {
            const [h, S] = (0, j.useState)(""),
              E = (0, R.wB)();
            if (E.isLoading)
              return (0, e.jsx)("div", {
                className: r().HeroPicker,
                children: (0, e.jsx)("div", {
                  className: r().Loading,
                  children: "Loading...",
                }),
              });
            if (!E.data) return null;
            const C = E.data;
            return (0, e.jsx)("div", {
              className: r().HeroPickerPopupBackground,
              onClick: () => i.fnSetSelectedHero(-1),
              children: (0, e.jsxs)("div", {
                className: r().HeroPickerPopup,
                children: [
                  (0, e.jsx)("div", {
                    className: r().Title,
                    children: "Select Hero",
                  }),
                  (0, e.jsx)("div", {
                    className: r().Grid,
                    children: C.heroes.map((s) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          className: r().HeroSelector,
                          onClick: (p) => {
                            (i.fnSetSelectedHero(s.id), p.stopPropagation());
                          },
                          children: [
                            (0, e.jsx)("div", {
                              className: r().Portrait,
                              style: {
                                backgroundImage: `url( ${fe.r.IMG_URL}heroes/${s.name.replace("npc_dota_hero_", "")}.png`,
                              },
                            }),
                            (0, e.jsx)("div", {
                              className: r().Name,
                              children: (0, Le.Wn)(s.name_loc),
                            }),
                          ],
                        },
                        s.id,
                      ),
                    ),
                  }),
                ],
              }),
            });
          },
          T = (i) => {
            const [h, S] = j.useState(!1),
              E = (0, R.wB)(),
              C = (0, R.lm)(i.nHeroID),
              s = (0, R.qK)(i.nHeroID),
              p = (0, w.R7)().ownerWindow;
            j.useEffect(() => {
              if (i.nHeroID == 0 && E.data) {
                const F = (0, Ye.Tg)(0, E.data.heroes.length - 1);
                i.fnSetSelectedHero(E.data.heroes[F].id);
              }
            }, [i, E]);
            const f = (F) => {
                (S(!1), F != -1 && i.fnSetSelectedHero(F));
              },
              L = C.data,
              k = s.data,
              H = p.document?.body;
            return (0, e.jsxs)("div", {
              className: r().HeroOption,
              children: [
                (0, e.jsx)("div", {
                  className: r().Name,
                  children: i.bShowName ? (0, Le.Wn)(L?.name_loc) : i.strLabel,
                }),
                (0, e.jsx)("div", {
                  className: r().Portrait,
                  style: {
                    backgroundImage: `url( ${fe.r.IMG_URL}heroes/${L?.name.replace("npc_dota_hero_", "")}.png`,
                  },
                  onClick: () => S(!0),
                }),
                h &&
                  x.createPortal((0, e.jsx)(Te, { fnSetSelectedHero: f }), H),
              ],
            });
          },
          ne = (i) => {
            const S = (0, R.JD)(i.nAbilityID).data;
            return (0, e.jsx)(Ge.he, {
              toolTipContent: S?.name_loc,
              direction: "top",
              strTooltipClassname: r().ToolTip,
              children: (0, e.jsx)("div", {
                className: r().AbilityIcon,
                style: {
                  backgroundImage: `url( ${fe.r.IMG_URL}abilities/${S?.name?.replace("ability_", "")}.png`,
                },
              }),
            });
          },
          Ee = (i) => {
            const S = (0, R.mU)(i.nItemID).data;
            return (0, e.jsx)(Ge.he, {
              toolTipContent: S?.name_loc,
              direction: "top",
              strTooltipClassname: r().ToolTip,
              children: (0, e.jsx)("div", {
                className: r().ItemIcon,
                style: {
                  backgroundImage: `url( ${fe.r.IMG_URL}items/${S?.name?.replace("item_", "").replace("recipe_", "")}.png`,
                },
              }),
            });
          },
          Ve = (i) => {
            const [h, S] = (0, j.useState)(""),
              E = (0, R.HJ)();
            if (E.isLoading)
              return (0, e.jsx)("div", {
                className: r().ItemPickerPopupBackground,
                children: (0, e.jsx)("div", {
                  className: r().ItemPickerPopup,
                  children: (0, e.jsx)("div", {
                    className: r().Loading,
                    children: "Loading...",
                  }),
                }),
              });
            if (!E.data) return null;
            let s = E.data.itemabilities
              .filter(
                (p) => !p.name_loc.includes("Recipe") && p.name_loc.length > 0,
              )
              .sort((p, f) => (p.name_loc < f.name_loc ? -1 : 1));
            return (0, e.jsx)("div", {
              className: r().ItemPickerPopupBackground,
              onClick: () => i.fnSetSelectedItem(-1),
              children: (0, e.jsxs)("div", {
                className: r().ItemPickerPopup,
                children: [
                  (0, e.jsx)("div", {
                    className: r().Title,
                    children: "Select Item",
                  }),
                  (0, e.jsxs)("div", {
                    className: r().Grid,
                    children: [
                      i.bAllowEmpty &&
                        (0, e.jsxs)(
                          "div",
                          {
                            className: r().ItemSelector,
                            onClick: (p) => {
                              (i.fnSetSelectedItem(0), p.stopPropagation());
                            },
                            children: [
                              (0, e.jsx)("div", { className: r().Icon }),
                              (0, e.jsx)("div", {
                                className: r().Name,
                                children: "Clear",
                              }),
                            ],
                          },
                          0,
                        ),
                      s
                        .filter((p) =>
                          i.eItemFilter == 1 ||
                          (p.is_lategame_suggested &&
                            (i.eItemFilter == 3 || i.eItemFilter == 4)) ||
                          (p.is_earlygame_suggested &&
                            (i.eItemFilter == 2 || i.eItemFilter == 4)) ||
                          (!p.is_earlygame_suggested &&
                            !p.is_lategame_suggested &&
                            i.eItemFilter == 5)
                            ? !0
                            : i.eItemFilter == 6
                              ? i.fnCustomFilter(p)
                              : !1,
                        )
                        .map((p) =>
                          (0, e.jsxs)(
                            "div",
                            {
                              className: r().ItemSelector,
                              onClick: (f) => {
                                (i.fnSetSelectedItem(p.id),
                                  f.stopPropagation());
                              },
                              children: [
                                (0, e.jsx)("div", {
                                  className: r().Icon,
                                  style: {
                                    backgroundImage: `url( ${fe.r.IMG_URL}items/${p.name.replace("item_", "")}.png`,
                                  },
                                }),
                                (0, e.jsx)("div", {
                                  className: r().Name,
                                  children: (0, Le.Wn)(p.name_loc),
                                }),
                              ],
                            },
                            p.id,
                          ),
                        ),
                    ],
                  }),
                ],
              }),
            });
          };
        var Ue = ((i) => (
          (i[(i.ITEM_OPTIONS_ALL = 1)] = "ITEM_OPTIONS_ALL"),
          (i[(i.ITEM_OPTIONS_EARLY = 2)] = "ITEM_OPTIONS_EARLY"),
          (i[(i.ITEM_OPTIONS_LATE = 3)] = "ITEM_OPTIONS_LATE"),
          (i[(i.ITEM_OPTIONS_EARLY_LATE = 4)] = "ITEM_OPTIONS_EARLY_LATE"),
          (i[(i.ITEM_OPTIONS_NOT_EARLY_LATE = 5)] =
            "ITEM_OPTIONS_NOT_EARLY_LATE"),
          (i[(i.ITEM_OPTIONS_CUSTOM = 6)] = "ITEM_OPTIONS_CUSTOM"),
          i
        ))(Ue || {});
        const ee = (i) => {
            const [h, S] = j.useState(!1),
              E = (0, R.mU)(i.nItemID),
              C = (0, w.R7)().ownerWindow,
              s = (L) => {
                (S(!1), L != -1 && i.fnSetSelectedItem(L));
              },
              p = E.data,
              f = C.document?.body;
            return (0, e.jsxs)("div", {
              className: r().ItemOption,
              children: [
                (0, e.jsx)("div", {
                  className: r().Name,
                  children: i.bShowName ? (0, Le.Wn)(p?.name_loc) : i.strLabel,
                }),
                (0, e.jsx)("div", {
                  className: r().Icon,
                  style: {
                    backgroundImage: `url( ${fe.r.IMG_URL}items/${p?.name?.replace("item_", "")}.png`,
                  },
                  onClick: () => S(!0),
                }),
                h &&
                  x.createPortal(
                    (0, e.jsx)(Ve, {
                      fnSetSelectedItem: s,
                      bAllowEmpty: i.bAllowEmpty,
                      eItemFilter: i.eItemFilter,
                      fnCustomFilter: i.fnCustomFilter,
                    }),
                    f,
                  ),
              ],
            });
          },
          o = (i) =>
            (0, e.jsxs)("div", {
              className: r().Option,
              children: [
                (0, e.jsx)("div", {
                  className: r().Name,
                  children: "Position",
                }),
                (0, e.jsxs)("select", {
                  className: r().PositionSelector,
                  value: i.nPosition,
                  onChange: (h) => i.fnSetPosition(parseInt(h.target.value)),
                  children: [
                    (0, e.jsx)("option", { value: 1, children: "Safe" }),
                    (0, e.jsx)("option", { value: 2, children: "Off" }),
                    (0, e.jsx)("option", { value: 4, children: "Mid" }),
                    (0, e.jsx)("option", { value: 8, children: "Support" }),
                    (0, e.jsx)("option", {
                      value: 16,
                      children: "Hard Support",
                    }),
                  ],
                }),
              ],
            }),
          Je = (i) =>
            (0, e.jsxs)("div", {
              className: r().Option,
              children: [
                (0, e.jsx)("div", { className: r().Name, children: "Tier" }),
                (0, e.jsxs)("select", {
                  className: r().TierSelector,
                  value: i.nTier,
                  onChange: (h) => i.fnSetTier(parseInt(h.target.value)),
                  children: [
                    (0, e.jsx)("option", { value: 0, children: "Tier 1" }),
                    (0, e.jsx)("option", { value: 1, children: "Tier 2" }),
                    (0, e.jsx)("option", { value: 2, children: "Tier 3" }),
                    (0, e.jsx)("option", { value: 3, children: "Tier 4" }),
                    (0, e.jsx)("option", { value: 4, children: "Tier 5" }),
                  ],
                }),
              ],
            }),
          qe = (i) =>
            jsxs("div", {
              className: styles.Option,
              children: [
                jsx("div", { className: styles.Name, children: "Lane" }),
                jsxs("select", {
                  className: styles.LaneSelector,
                  value: i.nLane,
                  onChange: (h) => i.fnSetLane(parseInt(h.target.value)),
                  children: [
                    jsx("option", { value: 1, children: "Safe" }),
                    jsx("option", { value: 2, children: "Off" }),
                    jsx("option", { value: 3, children: "Mid" }),
                  ],
                }),
              ],
            }),
          we = (i) =>
            (0, e.jsxs)("div", {
              className: r().Option,
              children: [
                (0, e.jsx)("div", {
                  className: r().Name,
                  children: "Game Mode",
                }),
                (0, e.jsxs)("select", {
                  className: r().GameModeSelector,
                  value: i.nGameMode,
                  onChange: (h) => i.fnSetGameMode(parseInt(h.target.value)),
                  children: [
                    (0, e.jsx)("option", { value: 22, children: "All Draft" }),
                    (0, e.jsx)("option", { value: 1, children: "All Pick" }),
                    (0, e.jsx)("option", { value: 23, children: "Turbo" }),
                    (0, e.jsx)("option", {
                      value: 2,
                      children: "Captains Mode",
                    }),
                    (0, e.jsx)("option", {
                      value: 16,
                      children: "Captains Draft",
                    }),
                    (0, e.jsx)("option", {
                      value: 4,
                      children: "Single Draft",
                    }),
                    (0, e.jsx)("option", { value: 13, children: "Hero Pool" }),
                  ],
                }),
              ],
            }),
          De = (i) => {
            const [h, S] = j.useState(i.strMMR);
            return (
              j.useEffect(() => {
                if (i.strMMR == h) return () => {};
                const E = setTimeout(() => i.fnSetMMR(h), 400);
                return () => clearTimeout(E);
              }, [i, h]),
              (0, e.jsxs)("div", {
                className: r().Option,
                children: [
                  (0, e.jsx)("div", { className: r().Name, children: "MMR" }),
                  (0, e.jsx)("input", {
                    type: "text",
                    className: r().AverageMMRInput,
                    value: h,
                    onChange: (E) => S(E.target.value),
                  }),
                ],
              })
            );
          };
        function Se(i) {
          const h = new URLSearchParams();
          return (
            Object.keys(i).forEach((S) => {
              Array.isArray(i[S])
                ? h.append(S, i[S].join(","))
                : h.append(S, i[S]);
            }),
            h.toString()
          );
        }
        const $e = "pregameitems",
          je = "neutralitems",
          ue = "maingameitemsequence",
          le = "abilities",
          Qe = () => {
            const i = (0, oe.W6)(),
              h = (0, oe.g)();
            let S;
            switch (h.strFeature) {
              case le:
                S = (0, e.jsx)(Fe, {
                  strFeature: h.strFeature,
                  strConfig: h.strConfig,
                });
                break;
              case $e:
                S = (0, e.jsx)(ie, {
                  strFeature: h.strFeature,
                  strConfig: h.strConfig,
                });
                break;
              case ue:
                S = (0, e.jsx)(Xe, {
                  strFeature: h.strFeature,
                  strConfig: h.strConfig,
                });
                break;
              case je:
                S = (0, e.jsx)(d, {
                  strFeature: h.strFeature,
                  strConfig: h.strConfig,
                });
                break;
            }
            if (S == null)
              return (0, e.jsx)(oe.rd, { to: I.J.dotaplustester($e) });
            const E = (C) => {
              i.push(I.J.dotaplustester(C, h.strConfig));
            };
            return (0, e.jsxs)("div", {
              className: r().DotaPlusTesterPage,
              children: [
                (0, e.jsx)(D.A, { bOverlapping: !1 }),
                (0, e.jsxs)("div", {
                  className: r().SelectionHeader,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, Ce.A)(
                        r().Option,
                        h.strFeature == le && r().Selected,
                      ),
                      onClick: () => E(le),
                      children: "Abilities",
                    }),
                    (0, e.jsx)("div", {
                      className: (0, Ce.A)(
                        r().Option,
                        h.strFeature == $e && r().Selected,
                      ),
                      onClick: () => E($e),
                      children: "Pregame Items",
                    }),
                    (0, e.jsx)("div", {
                      className: (0, Ce.A)(
                        r().Option,
                        h.strFeature == ue && r().Selected,
                      ),
                      onClick: () => E(ue),
                      children: "Main Game Items",
                    }),
                    (0, e.jsx)("div", {
                      className: (0, Ce.A)(
                        r().Option,
                        h.strFeature == je && r().Selected,
                      ),
                      onClick: () => E(je),
                      children: "Neutral Items",
                    }),
                  ],
                }),
                S,
              ],
            });
          },
          Fe = (i) => {
            const h = new URLSearchParams(i.strConfig),
              S = (0, oe.W6)();
            let E = parseInt(h.get("nHeroID") || "0"),
              C = parseInt(h.get("nPosition") || "0"),
              s = (h.get("arrAlliedHeroIDs") || "0,0,0,0")
                .split(",")
                .map(Number),
              p = (h.get("arrEnemyHeroIDs") || "0,0,0,0,0")
                .split(",")
                .map(Number),
              f = (
                h.get("arrSkilledAbilities") ||
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
              )
                .split(",")
                .map(Number),
              L = h.get("nAverageMMR") || "2000",
              k = parseInt(h.get("nGameMode") || "22");
            const H = () => {
                const _ = {
                  nHeroID: E,
                  nPosition: C,
                  arrAlliedHeroIDs: s,
                  arrEnemyHeroIDs: p,
                  nAverageMMR: parseInt(L),
                  nGameMode: k,
                  arrSkilledAbilities: f,
                };
                S.push(I.J.dotaplustester(i.strFeature, Se(_)));
              },
              F = (_) => {
                (console.log("1"), (E = _), H());
              },
              te = (_) => {
                (console.log("3"), (C = _), H());
              },
              Y = (_, W) => {
                (console.log("4"), (s[_] = W), H());
              },
              b = (_, W) => {
                (console.log("6"), (p[_] = W), H());
              },
              U = (_) => {
                (console.log("8"), (L = _), H());
              },
              J = (_) => {
                (console.log("9"), (k = _), H());
              },
              ae = (_) => {
                (console.log("10"), (f[f.indexOf(0)] = _), H());
              },
              se = () => {
                (console.log("11"),
                  (f = [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  ]),
                  H());
              },
              Z = (0, R.k4)(E, C, s, p, parseInt(L), k, !0, f).data;
            let v = [];
            if (Z && Z.backend_response.outputs.length > 0)
              for (
                let _ = 0;
                _ <
                Z.backend_response.outputs[0].categorical_crossentropy.value
                  .length;
                _++
              )
                v.push({
                  nAbilityID:
                    Z.backend_response.outputs[0].categorical_crossentropy
                      .value[_],
                  fWeight:
                    Z.backend_response.outputs[0].categorical_crossentropy
                      .weight[_],
                });
            return (0, e.jsx)("div", {
              className: r().DotaPlusTesterSubPage,
              children: (0, e.jsxs)("div", {
                className: r().Content,
                children: [
                  (0, e.jsxs)("div", {
                    className: r().HeroList,
                    children: [
                      (0, e.jsx)("div", {
                        className: r().YourHero,
                        children: (0, e.jsx)(T, {
                          strLabel: "Your Hero",
                          nHeroID: E,
                          fnSetSelectedHero: (_) => F(_),
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        className: r().Allies,
                        children: [
                          (0, e.jsx)(T, {
                            strLabel: "Ally #1",
                            nHeroID: s[0],
                            fnSetSelectedHero: (_) => Y(0, _),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Ally #2",
                            nHeroID: s[1],
                            fnSetSelectedHero: (_) => Y(1, _),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Ally #3",
                            nHeroID: s[2],
                            fnSetSelectedHero: (_) => Y(2, _),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Ally #4",
                            nHeroID: s[3],
                            fnSetSelectedHero: (_) => Y(3, _),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: r().Enemies,
                        children: [
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #1",
                            nHeroID: p[0],
                            fnSetSelectedHero: (_) => b(0, _),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #2",
                            nHeroID: p[1],
                            fnSetSelectedHero: (_) => b(1, _),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #3",
                            nHeroID: p[2],
                            fnSetSelectedHero: (_) => b(2, _),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #4",
                            nHeroID: p[3],
                            fnSetSelectedHero: (_) => b(3, _),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #5",
                            nHeroID: p[4],
                            fnSetSelectedHero: (_) => b(4, _),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: r().Separator }),
                  (0, e.jsxs)("div", {
                    className: r().MiscInfo,
                    children: [
                      (0, e.jsx)(o, { nPosition: C, fnSetPosition: te }),
                      (0, e.jsx)(we, { nGameMode: k, fnSetGameMode: J }),
                      (0, e.jsx)(De, { strMMR: L, fnSetMMR: U }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: r().Separator }),
                  (0, e.jsx)("div", {
                    className: r().Level,
                    children: `Level ${f.indexOf(0) + 1} `,
                  }),
                  (0, e.jsx)("div", {
                    className: r().SkilledAbilityList,
                    children: f.map((_, W) =>
                      (0, e.jsx)(ne, { nAbilityID: _ }, `${W}_${_}`),
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: r().ClearSkilledAbilities,
                    onClick: () => se(),
                    children: "Clear",
                  }),
                  (0, e.jsx)("div", { className: r().Separator }),
                  (0, e.jsx)("div", {
                    className: r().AbilitySuggestions,
                    children: v.map((_) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          className: r().Ability,
                          onClick: () => ae(_.nAbilityID),
                          children: [
                            (0, e.jsx)(ne, { nAbilityID: _.nAbilityID }),
                            (0, e.jsx)("div", {
                              className: r().ID,
                              children: _.nAbilityID,
                            }),
                            (0, e.jsx)("div", {
                              className: r().Weight,
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
          ie = (i) => {
            const h = new URLSearchParams(i.strConfig),
              S = (0, oe.W6)();
            let E = parseInt(h.get("nHeroID") || "0"),
              C = parseInt(h.get("nPosition") || "0"),
              s = (h.get("arrAlliedHeroIDs") || "0,0,0,0")
                .split(",")
                .map(Number),
              p = (h.get("arrEnemyHeroIDs") || "0,0,0,0,0")
                .split(",")
                .map(Number),
              f = h.get("nAverageMMR") || "2000",
              L = parseInt(h.get("nGameMode") || "22");
            const k = () => {
                const v = {
                  nHeroID: E,
                  nPosition: C,
                  arrAlliedHeroIDs: s,
                  arrEnemyHeroIDs: p,
                  nAverageMMR: parseInt(f),
                  nGameMode: L,
                };
                S.push(I.J.dotaplustester(i.strFeature, Se(v)));
              },
              F = (0, R.MT)(E, C, s, p, parseInt(f), L, !0).data;
            let te = [];
            if (
              F &&
              F.backend_response.outputs.length > 0 &&
              F.backend_response.outputs[0].categorical_crossentropy
                .value_sequence.length > 0
            )
              for (
                let v = 0;
                v <
                F.backend_response.outputs[0].categorical_crossentropy
                  .value_sequence[0].value.length;
                v++
              )
                te.push(
                  F.backend_response.outputs[0].categorical_crossentropy
                    .value_sequence[0].value[v],
                );
            const Y = (v) => {
                ((E = v), k());
              },
              b = (v) => {
                ((C = v), k());
              },
              U = (v, _) => {
                ((s[v] = _), k());
              },
              J = (v, _) => {
                ((p[v] = _), k());
              },
              ae = (v) => {
                ((f = v), k());
              },
              se = (v) => {
                ((L = v), k());
              },
              ce = (0, R.HJ)(),
              Z = (0, R.wB)();
            return !ce.data || !Z.data
              ? (0, e.jsx)("div", {
                  className: r().Loading,
                  children: "Loading hero and item data...",
                })
              : (0, e.jsx)("div", {
                  className: r().DotaPlusTesterSubPage,
                  children: (0, e.jsxs)("div", {
                    className: r().Content,
                    children: [
                      (0, e.jsxs)("div", {
                        className: r().HeroList,
                        children: [
                          (0, e.jsx)("div", {
                            className: r().YourHero,
                            children: (0, e.jsx)(T, {
                              strLabel: "Your Hero",
                              nHeroID: E,
                              fnSetSelectedHero: (v) => Y(v),
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            className: r().Allies,
                            children: [
                              (0, e.jsx)(T, {
                                strLabel: "Ally #1",
                                nHeroID: s[0],
                                fnSetSelectedHero: (v) => U(0, v),
                              }),
                              (0, e.jsx)(T, {
                                strLabel: "Ally #2",
                                nHeroID: s[1],
                                fnSetSelectedHero: (v) => U(1, v),
                              }),
                              (0, e.jsx)(T, {
                                strLabel: "Ally #3",
                                nHeroID: s[2],
                                fnSetSelectedHero: (v) => U(2, v),
                              }),
                              (0, e.jsx)(T, {
                                strLabel: "Ally #4",
                                nHeroID: s[3],
                                fnSetSelectedHero: (v) => U(3, v),
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: r().Enemies,
                            children: [
                              (0, e.jsx)(T, {
                                strLabel: "Enemy #1",
                                nHeroID: p[0],
                                fnSetSelectedHero: (v) => J(0, v),
                              }),
                              (0, e.jsx)(T, {
                                strLabel: "Enemy #2",
                                nHeroID: p[1],
                                fnSetSelectedHero: (v) => J(1, v),
                              }),
                              (0, e.jsx)(T, {
                                strLabel: "Enemy #3",
                                nHeroID: p[2],
                                fnSetSelectedHero: (v) => J(2, v),
                              }),
                              (0, e.jsx)(T, {
                                strLabel: "Enemy #4",
                                nHeroID: p[3],
                                fnSetSelectedHero: (v) => J(3, v),
                              }),
                              (0, e.jsx)(T, {
                                strLabel: "Enemy #5",
                                nHeroID: p[4],
                                fnSetSelectedHero: (v) => J(4, v),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", { className: r().Separator }),
                      (0, e.jsxs)("div", {
                        className: r().MiscInfo,
                        children: [
                          (0, e.jsx)(o, { nPosition: C, fnSetPosition: b }),
                          (0, e.jsx)(we, { nGameMode: L, fnSetGameMode: se }),
                          (0, e.jsx)(De, { strMMR: f, fnSetMMR: ae }),
                        ],
                      }),
                      (0, e.jsx)("div", { className: r().Separator }),
                      te.length > 0 &&
                        (0, e.jsx)("div", {
                          className: r().Results,
                          children: (0, e.jsx)("div", {
                            className: r().ItemList,
                            children: te.map((v, _) =>
                              (0, e.jsx)(
                                Ee,
                                { nItemID: v },
                                `InferenceReuslt_Item_${_}`,
                              ),
                            ),
                          }),
                        }),
                    ],
                  }),
                });
          };
        function Be(i, h) {
          const S = [];
          for (let E = 0; E < i.length; E += h) S.push(i.slice(E, E + h));
          return S;
        }
        const d = (i) => {
            const h = new URLSearchParams(i.strConfig),
              S = (0, oe.W6)();
            let E = parseInt(h.get("nHeroID") || "0"),
              C = parseInt(h.get("nPosition") || "0"),
              s = (h.get("arrAlliedHeroIDs") || "0,0,0,0")
                .split(",")
                .map(Number),
              p = (h.get("arrEnemyHeroIDs") || "0,0,0,0,0")
                .split(",")
                .map(Number),
              f = h.get("nAverageMMR") || "2000",
              L = parseInt(h.get("nGameMode") || "22"),
              k = parseInt(h.get("nTier") || "0"),
              H = (h.get("arrTrinkets") || "0,0,0,0").split(",").map(Number),
              F = (h.get("arrEnchantments") || "0,0,0,0")
                .split(",")
                .map(Number),
              Y = (0, R.zy)(H).data;
            const b = (n) => {
                ((E = n), W());
              },
              U = (n) => {
                ((C = n), W());
              },
              J = (n, c) => {
                ((s[n] = c), W());
              },
              ae = (n, c) => {
                ((p[n] = c), W());
              },
              se = (n) => {
                ((f = n), W());
              },
              ce = (n) => {
                ((L = n), W());
              },
              Z = (n, c) => {
                ((H[n] = c), W());
              },
              v = (n, c) => {
                ((F[n] = c), W());
              },
              _ = (n) => {
                k != n &&
                  ((H = [0, 0, 0, 0, 0]), (F = [0, 0, 0, 0, 0]), (k = n), W());
              },
              W = () => {
                const n = {
                    nHeroID: E,
                    nPosition: C,
                    arrAlliedHeroIDs: s,
                    arrEnemyHeroIDs: p,
                    nAverageMMR: parseInt(f),
                    nGameMode: L,
                    nTier: k,
                    arrTrinkets: H,
                    arrEnchantments: F,
                  },
                  c = Se(n);
                i.strConfig != c && S.push(I.J.dotaplustester(i.strFeature, c));
              },
              Ie = (0, R.HJ)(),
              Ke = (0, R.wB)(),
              ve = (0, R.qK)(E);
            let Q;
            switch (ve.data?.primary_attr) {
              case 0:
                Q = "strength";
                break;
              case 1:
                Q = "agility";
                break;
              case 2:
                Q = "intelligence";
                break;
              case 3:
                Q = "universal";
                break;
            }
            const re = (0, R.dX)(E, C, s, p, parseInt(f), L, !0, H, F, k).data,
              Oe = (0, R.Hp)(Q, k + 1);
            if (!Ie.data || !Ke.data || !Oe.data)
              return (0, e.jsx)("div", {
                className: r().Loading,
                children: "Loading hero and item data...",
              });
            const pe = Oe.data,
              ge = pe.tier[k].enhancements.map((n) => n.ability_id),
              Pe = (n) =>
                n.neutral_item_tier == k
                  ? !0
                  : n.neutral_item_tier > k
                    ? !1
                    : n.neutral_item_tier != -1 && n.neutral_item_tier < k
                      ? Y?.filter((c) => c.neutral_item_tier < k).length == 0
                      : !1;
            return (0, e.jsx)("div", {
              className: r().DotaPlusTesterSubPage,
              children: (0, e.jsxs)("div", {
                className: r().Content,
                children: [
                  (0, e.jsxs)("div", {
                    className: r().HeroList,
                    children: [
                      (0, e.jsx)("div", {
                        className: r().YourHero,
                        children: (0, e.jsx)(T, {
                          strLabel: "Your Hero",
                          nHeroID: E,
                          fnSetSelectedHero: (n) => b(n),
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        className: r().Allies,
                        children: [
                          (0, e.jsx)(T, {
                            strLabel: "Ally #1",
                            nHeroID: s[0],
                            fnSetSelectedHero: (n) => J(0, n),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Ally #2",
                            nHeroID: s[1],
                            fnSetSelectedHero: (n) => J(1, n),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Ally #3",
                            nHeroID: s[2],
                            fnSetSelectedHero: (n) => J(2, n),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Ally #4",
                            nHeroID: s[3],
                            fnSetSelectedHero: (n) => J(3, n),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: r().Enemies,
                        children: [
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #1",
                            nHeroID: p[0],
                            fnSetSelectedHero: (n) => ae(0, n),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #2",
                            nHeroID: p[1],
                            fnSetSelectedHero: (n) => ae(1, n),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #3",
                            nHeroID: p[2],
                            fnSetSelectedHero: (n) => ae(2, n),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #4",
                            nHeroID: p[3],
                            fnSetSelectedHero: (n) => ae(3, n),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #5",
                            nHeroID: p[4],
                            fnSetSelectedHero: (n) => ae(4, n),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: r().Separator }),
                  (0, e.jsxs)("div", {
                    className: r().MiscInfo,
                    children: [
                      (0, e.jsx)(o, { nPosition: C, fnSetPosition: U }),
                      (0, e.jsx)(we, { nGameMode: L, fnSetGameMode: ce }),
                      (0, e.jsx)(De, { strMMR: f, fnSetMMR: se }),
                      (0, e.jsx)(Je, { nTier: k, fnSetTier: _ }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: r().IncludExcludeItemOption,
                    children: [
                      (0, e.jsx)("div", {
                        className: r().ItemOptionTitle,
                        children: "Trinkets",
                      }),
                      (0, He.bu)(0, pe.tier[k].trinket_options - 1).map((n) => {
                        const c =
                          re?.backend_response.outputs[0].categorical_crossentropy.value.indexOf(
                            H[n],
                          );
                        return (0, e.jsxs)(
                          "div",
                          {
                            className: r().OptionColumn,
                            children: [
                              (0, e.jsx)(
                                ee,
                                {
                                  nItemID: H[n],
                                  fnSetSelectedItem: (m) => Z(n, m),
                                  bShowName: !0,
                                  bAllowEmpty: !0,
                                  eItemFilter: 6,
                                  fnCustomFilter: Pe,
                                  fnOverlayText: (m) =>
                                    m.neutral_item_tier.toString(),
                                },
                                `Trinket_${n}`,
                              ),
                              c >= 0 &&
                                (0, e.jsx)("div", {
                                  className: r().Percent,
                                  children: `${(re?.backend_response.outputs[0].categorical_crossentropy.weight[c] * 100).toFixed(2)}%`,
                                }),
                            ],
                          },
                          `result_${n}`,
                        );
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: r().IncludExcludeItemOption,
                    children: [
                      (0, e.jsx)("div", {
                        className: r().ItemOptionTitle,
                        children: "Enhancements",
                      }),
                      (0, He.bu)(0, pe.tier[k].enhancement_options - 1).map(
                        (n) => {
                          const c =
                            re?.backend_response.outputs[1].categorical_crossentropy.value.indexOf(
                              F[n],
                            );
                          return (0, e.jsxs)(
                            "div",
                            {
                              className: r().OptionColumn,
                              children: [
                                (0, e.jsx)(
                                  ee,
                                  {
                                    nItemID: F[n],
                                    fnSetSelectedItem: (m) => v(n, m),
                                    bShowName: !0,
                                    bAllowEmpty: !0,
                                    eItemFilter: 6,
                                    fnCustomFilter: (m) => ge.includes(m.id),
                                  },
                                  `Trinket_${n}`,
                                ),
                                c >= 0 &&
                                  (0, e.jsx)("div", {
                                    className: r().Percent,
                                    children: `${(re?.backend_response.outputs[1].categorical_crossentropy.weight[c] * 100).toFixed(2)}%`,
                                  }),
                              ],
                            },
                            `result_${n}`,
                          );
                        },
                      ),
                    ],
                  }),
                ],
              }),
            });
          },
          Xe = (i) => {
            const h = new URLSearchParams(i.strConfig),
              S = (0, oe.W6)();
            let E = parseInt(h.get("nHeroID") || "0"),
              C = parseInt(h.get("nPosition") || "0"),
              s = (h.get("arrAlliedHeroIDs") || "0,0,0,0")
                .split(",")
                .map(Number),
              p = (h.get("arrEnemyHeroIDs") || "0,0,0,0,0")
                .split(",")
                .map(Number),
              f = h.get("nAverageMMR") || "2000",
              L = parseInt(h.get("nGameMode") || "22"),
              k = parseInt(h.get("nLobbyType") || "7"),
              H = (
                h.get("arrInventoryItems") ||
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
              )
                .split(",")
                .map(Number),
              F = (
                h.get("arrPurchasedItems") ||
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
              )
                .split(",")
                .map(Number),
              te = parseFloat(h.get("fRepeatWeight") || "0.2"),
              Y = (h.get("arrLikedItems") || "0,0").split(",").map(Number),
              b = (h.get("arrDislikedItems") || "0,0").split(",").map(Number);
            const U = () => {
                const t = {
                    nHeroID: E,
                    nPosition: C,
                    arrAlliedHeroIDs: s,
                    arrEnemyHeroIDs: p,
                    nAverageMMR: parseInt(f),
                    nGameMode: L,
                    nLobbyType: k,
                    arrPurchasedItems: F,
                    arrInventoryItems: H,
                    fRepeatWeight: te,
                    arrLikedItems: Y,
                    arrDislikedItems: b,
                  },
                  u = Se(t);
                i.strConfig != u && S.push(I.J.dotaplustester(i.strFeature, u));
              },
              J = 3e5,
              ae = -1e6;
            let se = new Map(),
              ce = [],
              Z = [];
            for (const t of Y) t != 0 && se.set(t, J);
            for (const t of b) t != 0 && se.set(t, ae);
            const _ = (0, R.nK)(E, C, s, p, parseInt(f), L, F, se, [], te).data;
            if (
              _ &&
              _.backend_response.outputs.length > 0 &&
              _.backend_response.outputs[0].categorical_crossentropy
                .value_sequence
            ) {
              for (
                let t = 0;
                t <
                _.backend_response.outputs[0].categorical_crossentropy
                  .value_sequence[0].value.length;
                t++
              )
                ce.push({
                  nItemID:
                    _.backend_response.outputs[0].categorical_crossentropy
                      .value_sequence[0].value[t],
                  fScore: 0,
                });
              for (
                let t = 0;
                t <
                _.backend_response.outputs[0].categorical_crossentropy.value
                  ?.length;
                t++
              ) {
                const u =
                    _.backend_response.outputs[0].categorical_crossentropy
                      .value[t],
                  O =
                    _.backend_response.outputs[0].categorical_crossentropy
                      .weight[t];
                Z.push({ nItemID: u, fScore: O });
              }
            }
            const W = (0, R.HJ)(),
              Ie = (0, R.wB)(),
              Ke = (t) => {
                ((E = t), U());
              },
              ve = (t) => {
                ((C = t), U());
              },
              Q = (t, u) => {
                ((s[t] = u), U());
              },
              he = (t, u) => {
                ((p[t] = u), U());
              },
              re = (t) => {
                ((f = t), U());
              },
              Oe = (t) => {
                ((L = t), U());
              },
              pe = (t) => {
                ((F[F.indexOf(0)] = t), U());
              },
              ge = () => {
                ((F = [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0,
                ]),
                  U());
              },
              Pe = (t) => {
                ((te = t), U());
              },
              n = (t, u) => {
                ((H[t] = u), U());
              },
              c = (t, u) => {
                ((b[t] = u), U());
              },
              m = (t, u) => {
                ((Y[t] = u), U());
              };
            if (!W.data || !Ie.data)
              return (0, e.jsx)("div", {
                className: r().Loading,
                children: "Loading hero and item data...",
              });
            const l = Be(Z, 5);
            return (0, e.jsx)("div", {
              className: r().DotaPlusTesterSubPage,
              children: (0, e.jsxs)("div", {
                className: r().Content,
                children: [
                  (0, e.jsxs)("div", {
                    className: r().HeroList,
                    children: [
                      (0, e.jsx)("div", {
                        className: r().YourHero,
                        children: (0, e.jsx)(T, {
                          strLabel: "Your Hero",
                          nHeroID: E,
                          fnSetSelectedHero: (t) => Ke(t),
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        className: r().Allies,
                        children: [
                          (0, e.jsx)(T, {
                            strLabel: "Ally #1",
                            nHeroID: s[0],
                            fnSetSelectedHero: (t) => Q(0, t),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Ally #2",
                            nHeroID: s[1],
                            fnSetSelectedHero: (t) => Q(1, t),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Ally #3",
                            nHeroID: s[2],
                            fnSetSelectedHero: (t) => Q(2, t),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Ally #4",
                            nHeroID: s[3],
                            fnSetSelectedHero: (t) => Q(3, t),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: r().Enemies,
                        children: [
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #1",
                            nHeroID: p[0],
                            fnSetSelectedHero: (t) => he(0, t),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #2",
                            nHeroID: p[1],
                            fnSetSelectedHero: (t) => he(1, t),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #3",
                            nHeroID: p[2],
                            fnSetSelectedHero: (t) => he(2, t),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #4",
                            nHeroID: p[3],
                            fnSetSelectedHero: (t) => he(3, t),
                          }),
                          (0, e.jsx)(T, {
                            strLabel: "Enemy #5",
                            nHeroID: p[4],
                            fnSetSelectedHero: (t) => he(4, t),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: r().Separator }),
                  (0, e.jsxs)("div", {
                    className: r().MiscInfo,
                    children: [
                      (0, e.jsx)(o, { nPosition: C, fnSetPosition: ve }),
                      (0, e.jsx)(we, { nGameMode: L, fnSetGameMode: Oe }),
                      (0, e.jsx)(De, { strMMR: f, fnSetMMR: re }),
                      (0, e.jsxs)("div", {
                        className: r().Option,
                        children: [
                          (0, e.jsx)("div", {
                            className: r().Name,
                            children: "Repeat Weight",
                          }),
                          (0, e.jsxs)("select", {
                            className: r().WeightSelector,
                            value: te,
                            onChange: (t) => Pe(parseFloat(t.target.value)),
                            children: [
                              (0, e.jsx)("option", {
                                value: 1,
                                children: "1.0",
                              }),
                              (0, e.jsx)("option", {
                                value: 0.8,
                                children: "0.8",
                              }),
                              (0, e.jsx)("option", {
                                value: 0.6,
                                children: "0.6",
                              }),
                              (0, e.jsx)("option", {
                                value: 0.4,
                                children: "0.4",
                              }),
                              (0, e.jsx)("option", {
                                value: 0.2,
                                children: "0.2",
                              }),
                              (0, e.jsx)("option", {
                                value: 0,
                                children: "0.0",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: r().IncludExcludeItemOption,
                    children: [
                      (0, e.jsx)("div", {
                        className: r().ItemOptionTitle,
                        children: "Preferred Items",
                      }),
                      (0, e.jsx)(ee, {
                        nItemID: Y[0],
                        fnSetSelectedItem: (t) => m(0, t),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                      (0, e.jsx)(ee, {
                        nItemID: Y[1],
                        fnSetSelectedItem: (t) => m(1, t),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                      (0, e.jsx)(ee, {
                        nItemID: Y[2],
                        fnSetSelectedItem: (t) => m(2, t),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                      (0, e.jsx)(ee, {
                        nItemID: Y[3],
                        fnSetSelectedItem: (t) => m(3, t),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: r().IncludExcludeItemOption,
                    children: [
                      (0, e.jsx)("div", {
                        className: r().ItemOptionTitle,
                        children: "Disliked Items",
                      }),
                      (0, e.jsx)(ee, {
                        nItemID: b[0],
                        fnSetSelectedItem: (t) => c(0, t),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                      (0, e.jsx)(ee, {
                        nItemID: b[1],
                        fnSetSelectedItem: (t) => c(1, t),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                      (0, e.jsx)(ee, {
                        nItemID: b[2],
                        fnSetSelectedItem: (t) => c(2, t),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                      (0, e.jsx)(ee, {
                        nItemID: b[3],
                        fnSetSelectedItem: (t) => c(3, t),
                        bShowName: !1,
                        bAllowEmpty: !0,
                        eItemFilter: 1,
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: r().Separator }),
                  (0, e.jsx)("div", {
                    className: r().PurchasedItemList,
                    children: F.map((t, u) =>
                      (0, e.jsx)(
                        "div",
                        {
                          onClick: () => {
                            (F.splice(u, 1), F.push(0), U());
                          },
                          children: (0, e.jsx)(Ee, { nItemID: t }),
                        },
                        `${u}_${t}`,
                      ),
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: r().ClearSkilledAbilities,
                    onClick: () => ge(),
                    children: "Clear",
                  }),
                  (0, e.jsx)("div", { className: r().Separator }),
                  (0, e.jsx)("div", {
                    className: r().Header,
                    children: "Recommended Build Sequence",
                  }),
                  (0, e.jsx)("div", {
                    className: r().ItemList,
                    children: ce.map((t, u) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          className: r().Item,
                          onClick: () => pe(t.nItemID),
                          children: [
                            (0, e.jsx)(Ee, { nItemID: t.nItemID }),
                            t.fScore > 0 &&
                              (0, e.jsx)("div", {
                                className: r().Weight,
                                children: `${(t.fScore * 100).toFixed(2)}%`,
                              }),
                          ],
                        },
                        `${t.nItemID}_${u}`,
                      ),
                    ),
                  }),
                  (0, e.jsx)("div", { className: r().Separator }),
                  (0, e.jsx)("div", {
                    className: r().Header,
                    children: "Next Item Options",
                  }),
                  l.map((t, u) =>
                    (0, e.jsx)(
                      "div",
                      {
                        className: r().ItemList,
                        children: t.map((O, g) =>
                          (0, e.jsxs)(
                            "div",
                            {
                              className: r().Item,
                              onClick: () => pe(O.nItemID),
                              children: [
                                (0, e.jsx)(Ee, { nItemID: O.nItemID }),
                                O.fScore > 0 &&
                                  (0, e.jsx)("div", {
                                    className: r().Weight,
                                    children: `${(O.fScore * 100).toFixed(2)}%`,
                                  }),
                              ],
                            },
                            `${O.nItemID}_${g}`,
                          ),
                        ),
                      },
                      `Step_${u}`,
                    ),
                  ),
                ],
              }),
            });
          },
          z = Qe;
      },
      14391: (Re, ke, y) => {
        "use strict";
        (y.r(ke), y.d(ke, { default: () => Pe }));
        var e = y(69500),
          fe = y(75749),
          R = y.n(fe),
          I = y(88351),
          j = y(7552),
          x = y(73202),
          oe = y(73681),
          w = y.n(oe),
          Ge = y(56902),
          He = y(71129),
          Ce = y(75368),
          Ye = y(42783),
          Le = y(21112),
          D = y(49590),
          Ne = y(71807),
          r = y(83218),
          Te = y(29421),
          T = y(2095),
          ne = y(15001),
          Ee = y(63177),
          Ve = y(42616),
          Ue = y(11778),
          ee = y(84485),
          o = y(83194),
          Je = y(28471);
        function qe(n) {
          return n === 570 ? "public" : "beta";
        }
        function we(n) {
          switch (n) {
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
        function De(n) {
          switch (n) {
            case o.Fk.DOTA_GAMEMODE_NONE:
              return "-";
            case o.Fk.DOTA_GAMEMODE_AP:
              return "AP";
            case o.Fk.DOTA_GAMEMODE_CM:
              return "CM";
            case o.Fk.DOTA_GAMEMODE_RD:
              return "RD";
            case o.Fk.DOTA_GAMEMODE_SD:
              return "SD";
            case o.Fk.DOTA_GAMEMODE_AR:
              return "AR";
            case o.Fk.DOTA_GAMEMODE_INTRO:
              return "INTRO";
            case o.Fk.DOTA_GAMEMODE_HW:
              return "OCT31";
            case o.Fk.DOTA_GAMEMODE_REVERSE_CM:
              return "Rev CM";
            case o.Fk.DOTA_GAMEMODE_XMAS:
              return "XMAS";
            case o.Fk.DOTA_GAMEMODE_TUTORIAL:
              return "Tutorial";
            case o.Fk.DOTA_GAMEMODE_MO:
              return "MID";
            case o.Fk.DOTA_GAMEMODE_LP:
              return "LP";
            case o.Fk.DOTA_GAMEMODE_POOL1:
              return "Pool1";
            case o.Fk.DOTA_GAMEMODE_FH:
              return "FH";
            case o.Fk.DOTA_GAMEMODE_CUSTOM:
              return "CUSTOM";
            case o.Fk.DOTA_GAMEMODE_CD:
              return "CD";
            case o.Fk.DOTA_GAMEMODE_BD:
              return "BD";
            case o.Fk.DOTA_GAMEMODE_ABILITY_DRAFT:
              return "AD";
            case o.Fk.DOTA_GAMEMODE_EVENT:
              return "EVENT";
            case o.Fk.DOTA_GAMEMODE_ARDM:
              return "ARDM";
            case o.Fk.DOTA_GAMEMODE_1V1MID:
              return "1v1";
            case o.Fk.DOTA_GAMEMODE_ALL_DRAFT:
              return "AP";
            case o.Fk.DOTA_GAMEMODE_TURBO:
              return "TURBO";
            case o.Fk.DOTA_GAMEMODE_MUTATION:
              return "MUT";
            case o.Fk.DOTA_GAMEMODE_COACHES_CHALLENGE:
              return "COACH";
            default:
              return "Unknown";
          }
        }
        function Se(n) {
          switch (n) {
            case o.AP.CASUAL_MATCH:
              return "Unranked";
            case o.AP.PRACTICE:
              return "Practice";
            case o.AP.COOP_BOT_MATCH:
              return "Co-op Bot";
            case o.AP.COMPETITIVE_MATCH:
              return "Ranked";
            case o.AP.WEEKEND_TOURNEY:
              return "Battle Cup";
            case o.AP.LOCAL_BOT_MATCH:
              return "Local Bot";
            case o.AP.SPECTATOR:
              return "Spectator";
            case o.AP.EVENT_MATCH:
              return "Event";
            case o.AP.NEW_PLAYER_POOL:
              return "New Player Pool";
            case o.AP.FEATURED_GAMEMODE:
              return "Featured Gamemode";
            default:
              return "";
          }
        }
        function $e(n) {
          switch (n) {
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
        function je(n) {
          switch (n) {
            case o.rM.RADIANT_VICTORY:
              return "Radiant Victory";
            case o.rM.DIRE_VICTORY:
              return "Dire Victory";
            case o.rM.NOTSCORED_POOR_NETWORK:
              return "Net";
            case o.rM.NOTSCORED_LEAVER:
              return "Lvr";
            case o.rM.NOTSCORED_SERVER_CRASH:
              return "Crsh";
            case o.rM.NOTSCORED_NEVER_STARTED:
              return "No start";
            case o.rM.NOTSCORED_CANCELED:
              return "Cancel";
            case o.rM.NOTSCORED_SUSPICIOUS:
              return "Suspicious";
            default:
              return "-";
          }
        }
        function ue(n) {
          switch (n) {
            case o.GR.RANK_ELIGIBLE:
              return "Rank Eligible";
            case o.GR.BATTLECUP:
              return "Battlecup";
            case o.GR.BAN_WARNING:
              return "Ban Warning";
            case o.GR.RETURNING_PLAYER:
              return "Returning Player";
            case o.GR.COMMS_DISRUPTIVE:
              return "Comms Disruptive";
            default:
              return "Unknown";
          }
        }
        function le(n) {
          switch (n) {
            case o.V7.VERY_LIKELY:
              return "Very Likely";
            case o.V7.SOMEWHAT_LIKELY:
              return "Somewhat Likely";
            case o.V7.UNCLEAR:
              return "Unclear";
            case o.V7.SOMEWHAT_UNLIKELY:
              return "Somewhat Unlikely";
            case o.V7.VERY_UNLIKELY:
              return "Very Unlikely";
            default:
              return "Unknown";
          }
        }
        function Qe(n) {
          switch (n) {
            case o.TK.DOTA_ACCESS_TOURNAMENT_ADMIN:
              return "Tournament Admin";
            case o.TK.DOTA_ACCESS_TOURNAMENT_BROADCASTER:
              return "Tournament Broadcaster";
            default:
              return "Unknown";
          }
        }
        function Fe(n) {
          switch (n) {
            case o.Ov.CORE:
              return "Core";
            case o.Ov.SUPPORT:
              return "Support";
            case o.Ov.OFFLANE:
              return "Offlane";
            case o.Ov.MID:
              return "Mid";
            default:
              return "Unknown";
          }
        }
        var ie = y(96213),
          Be = y(40753),
          d = y.n(Be),
          Xe = y(20018);
        const z = "red",
          i = "orange",
          h = "goldenrod",
          S = "#adff2f",
          E = "darkgray",
          C = "forestgreen",
          s = "#68c529",
          p = "crimson",
          f = "#fa002e",
          L = "#82ca9d",
          k = "#888fd8",
          H = "#3389ae",
          F = "#FFBB28",
          te = "#FF8042",
          Y = (n, c, m = "") =>
            (0, e.jsx)(
              "a",
              {
                href: `${T.r.BASE_URL}${`matches/match/${n}`}?u=${qe(T.r.DOTA_APP_ID)}&appid=${T.r.DOTA_APP_ID}&highlight=${c}`,
                children: m || n,
              },
              n,
            ),
          b = (n) => {
            let c = "";
            const m = `${T.r.CDN_URL}/apps/dota2/images/`;
            return (
              n == 2 && (c = `${m}player_reports/button_report_text_on.png`),
              n == 3 && (c = `${m}player_reports/button_report_voice_on.png`),
              n == 4 && (c = `${m}player_reports/smurf_icon.png`),
              n == 5 && (c = `${m}player_reports/disruptive_icon.png`),
              n == 6 && (c = `${m}player_reports/cheating_icon.png`),
              n == 7 &&
                (c = `${m}player_reports/button_report_pre_game_role.png`),
              c
            );
          },
          U = (n) => {
            let c = "";
            return (
              n == 2 && (c = "Text abuse"),
              n == 3 && (c = "Voice abuse"),
              n == 4 && (c = "Smurfing"),
              n == 5 && (c = "Griefing"),
              n == 6 && (c = "Cheating"),
              n == 7 && (c = "Did not play role"),
              c
            );
          },
          J = [
            { key: "accountid", displayName: "Account ID" },
            {
              key: "guilds",
              secondaryKey: "dotaguildurl",
              displayName: "Guild",
              formatFunction: (n = {}, c = "") => {
                const m = `${c}${n?.guild?.guild_id}`,
                  l = n?.guild?.guild_name || "";
                return l && c
                  ? (0, e.jsx)(j.Fragment, {
                      children: (0, e.jsx)("a", {
                        href: m,
                        target: "_blank",
                        rel: "noopener",
                        children: l,
                      }),
                    })
                  : (0, e.jsx)("span", {
                      style: { color: E },
                      children: "No Guild",
                    });
              },
            },
          ],
          ae = [
            {
              key: "comprank",
              secondaryKey: "comprankuncertainty",
              tertiaryKey: "compranktier",
              displayName: "Ranked",
              formatFunction: (n, c, m = 0) =>
                (0, e.jsxs)(j.Fragment, {
                  children: [
                    (0, e.jsx)("span", {
                      className: d().RankNumber,
                      children: `${n}`,
                    }),
                    (0, e.jsxs)("span", {
                      className: d().RankedUncertainty,
                      children: [
                        `+/- ${c}`,
                        (0, e.jsx)("img", {
                          className: d().RankedBadgeIcon,
                          src: `${T.r.CDN_URL}/apps/dota2/images/small_ranks/ranked_icons_emoticon_${Math.floor(m / 10)}.png`,
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
              formatFunction: (n, c) =>
                (0, e.jsxs)(j.Fragment, {
                  children: [
                    (0, e.jsx)("span", {
                      className: d().RankNumber,
                      children: `${n}`,
                    }),
                    (0, e.jsx)("span", { children: `+/- ${c}` }),
                  ],
                }),
            },
          ],
          se = [
            {
              key: "accountflags",
              displayName: "Account Flags",
              formatFunction: (n) => {
                let m = [];
                return (
                  n == 0 && m.push("None"),
                  (n & o.GR.RANK_ELIGIBLE) > 0 &&
                    m.push(`${ue(o.GR.RANK_ELIGIBLE)}; `),
                  (n & o.GR.BATTLECUP) > 0 && m.push(`${ue(o.GR.BATTLECUP)}; `),
                  (n & o.GR.BAN_WARNING) > 0 &&
                    m.push(
                      (0, e.jsx)("span", {
                        style: { color: z },
                        children: `${ue(o.GR.BAN_WARNING)}; `,
                      }),
                    ),
                  (n & o.GR.RETURNING_PLAYER) > 0 &&
                    m.push(
                      (0, e.jsx)("span", {
                        style: { color: h },
                        children: `${ue(o.GR.RETURNING_PLAYER)}; `,
                      }),
                    ),
                  (n & o.GR.COMMS_DISRUPTIVE) > 0 &&
                    m.push(
                      (0, e.jsx)("span", {
                        style: { color: z },
                        children: `${ue(o.GR.COMMS_DISRUPTIVE)}; `,
                      }),
                    ),
                  (0, e.jsx)("div", { children: m })
                );
              },
            },
            {
              key: "behavscore",
              secondaryKey: "commscore",
              tertiaryKey: "trustscore",
              displayName: "Behav, Comms, Trust",
              formatFunction: (n = 8e3, c = -1, m = -1) => {
                let l = S;
                n < 0
                  ? (l = S)
                  : n <= 2e3
                    ? (l = z)
                    : n <= 4e3
                      ? (l = i)
                      : n <= 6e3 && (l = h);
                let t = S;
                return (
                  c < 0
                    ? (t = S)
                    : c <= 2e3
                      ? (t = z)
                      : c <= 4e3
                        ? (t = i)
                        : c <= 6e3 && (t = h),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("span", {
                        style: { color: l },
                        children: `${n}, `,
                      }),
                      (0, e.jsx)("span", {
                        style: { color: t },
                        children: `${c}, `,
                      }),
                      (0, e.jsx)("span", {
                        style: { color: S },
                        children: `${m}`,
                      }),
                    ],
                  })
                );
              },
            },
            {
              key: "steamaccountlink",
              displayName: "Steam Account 64",
              formatFunction: (n) =>
                n
                  ? (0, e.jsx)(j.Fragment, {
                      children: (0, e.jsx)("a", {
                        href: n,
                        target: "_blank",
                        rel: "noopener",
                        children: n.split("/").pop(),
                      }),
                    })
                  : "",
            },
            {
              key: "history",
              secondaryKey: "steamsupporthwidbaseurl",
              displayName: "Most Recent HWID",
              formatFunction: (n = {}, c) => {
                if (
                  !Object.keys(n).length ||
                  !n.matches ||
                  !Object.keys(n.matches).length
                )
                  return "";
                let m = "";
                for (let l = Object.keys(n.matches).length - 1; l >= 0; l--)
                  if (n.matches[l]?.searchdata?.hwid) {
                    m = n.matches[l]?.searchdata.hwid;
                    break;
                  }
                return m
                  ? (0, e.jsx)(j.Fragment, {
                      children: (0, e.jsx)("a", {
                        href: `${c}${m}`,
                        target: "_blank",
                        rel: "noopener",
                        children: m,
                      }),
                    })
                  : "";
              },
            },
            {
              key: "personalink",
              displayName: "Persona V1",
              formatFunction: (n) =>
                n
                  ? (0, e.jsx)(j.Fragment, {
                      children: (0, e.jsx)("a", {
                        href: n,
                        target: "_blank",
                        rel: "noopener",
                        children: "Persona V1",
                      }),
                    })
                  : "",
            },
          ],
          ce = [
            {
              key: "smurfcategory",
              displayName: "Smurf Category",
              formatFunction: (n) => {
                switch (n) {
                  case o.V7.VERY_LIKELY:
                    return (0, e.jsx)("span", {
                      style: { color: z },
                      children: le(o.V7.VERY_LIKELY),
                    });
                  case o.V7.SOMEWHAT_LIKELY:
                    return (0, e.jsx)("span", {
                      style: { color: i },
                      children: le(o.V7.SOMEWHAT_LIKELY),
                    });
                  case o.V7.UNCLEAR:
                    return (0, e.jsx)("span", {
                      style: { color: h },
                      children: le(o.V7.UNCLEAR),
                    });
                  case o.V7.SOMEWHAT_UNLIKELY:
                    return (0, e.jsx)("span", {
                      style: {},
                      children: le(o.V7.SOMEWHAT_UNLIKELY),
                    });
                  case o.V7.VERY_UNLIKELY:
                    return (0, e.jsx)("span", {
                      style: {},
                      children: le(o.V7.VERY_UNLIKELY),
                    });
                  default:
                    return (0, e.jsx)("span", { children: le(o.V7.INVALID) });
                }
              },
            },
            {
              key: "plussubscriber",
              displayName: "Plus Subscriber",
              formatFunction: (n = 0) =>
                n
                  ? (0, e.jsx)("div", { style: { color: S }, children: "YES" })
                  : "NO",
            },
            {
              key: "wins",
              secondaryKey: "losses",
              displayName: "Total Games Played",
              formatFunction: (n, c) =>
                (0, e.jsx)("div", { children: n + c || 0 }),
            },
            {
              key: "wins",
              secondaryKey: "losses",
              displayName: "Win Rate",
              formatFunction: (n, c) => {
                const m = n + c || 0;
                if (!m) return (0, e.jsx)("div", { children: "" });
                const l = Math.round((n / m) * 1e4) / 100;
                let t = "none";
                return (
                  l >= 70 || l <= 30
                    ? (t = i)
                    : (l >= 60 || l <= 40) && (t = h),
                  (0, e.jsxs)(j.Fragment, {
                    children: [
                      (0, e.jsxs)("span", {
                        className: d().MarginRightSmall,
                        children: [
                          (0, e.jsx)("span", {
                            style: { color: C },
                            children: `${n}`,
                          }),
                          (0, e.jsx)("span", { children: " - " }),
                          (0, e.jsx)("span", {
                            style: { color: p },
                            children: `${c}`,
                          }),
                        ],
                      }),
                      (0, e.jsx)("span", {
                        style: { color: t },
                        children: `(${l}%)`,
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
              formatFunction: (n, c) => {
                const m = n + c || 0;
                if (!m) return (0, e.jsx)("div", { children: "" });
                const l = Math.round((n / m) * 1e4) / 100;
                let t = "none";
                return (
                  l >= 70 || l <= 30
                    ? (t = i)
                    : (l >= 60 || l <= 40) && (t = h),
                  (0, e.jsxs)(j.Fragment, {
                    children: [
                      (0, e.jsxs)("span", {
                        className: d().MarginRightSmall,
                        children: [
                          (0, e.jsx)("span", {
                            style: { color: C },
                            children: `${n}`,
                          }),
                          (0, e.jsx)("span", { children: " - " }),
                          (0, e.jsx)("span", {
                            style: { color: p },
                            children: `${c}`,
                          }),
                        ],
                      }),
                      (0, e.jsx)("span", {
                        style: { color: t },
                        children: `(${l}%)`,
                      }),
                    ],
                  })
                );
              },
            },
            {
              key: "overperformancehistory",
              displayName: "Overperformance History",
              formatFunction: (n = 0) => {
                let c = 0;
                ((c = n - ((n >> 1) & 1431655765)),
                  (c = ((c >> 2) & 858993459) + (c & 858993459)),
                  (c = ((c >> 4) + c) & 252645135),
                  (c = ((c >> 8) + c) & 16711935),
                  (c = ((c >> 16) + c) & 65535));
                let m = S;
                return (
                  c > 20 ? (m = z) : c > 10 ? (m = i) : c > 5 && (m = h),
                  (0, e.jsx)("span", {
                    style: { color: m },
                    children: `${c} / 32 games`,
                  })
                );
              },
            },
          ],
          Z = [
            {
              key: "details",
              displayName: " ",
              formatFunction: (n = {}) => {
                const c = [];
                for (let m in n) {
                  const l = Object.entries(n[m]).reverse();
                  l.sort((u, O) => (u[1] > O[1] ? -1 : 1));
                  const t = l.length
                    ? l.reduce((u, O) => u + Number(O[1]), 0)
                    : 0;
                  if (!t) {
                    c.push(
                      (0, e.jsxs)(
                        j.Fragment,
                        {
                          children: [
                            (0, e.jsx)("div", {
                              className: d().TextCapitalize,
                              children: m.replace(/_/g, " "),
                            }),
                            (0, e.jsx)("div", {}),
                            (0, e.jsx)("div", {}),
                          ],
                        },
                        m,
                      ),
                    );
                    continue;
                  }
                  for (let u = 0; u < Math.min(l.length, 2); u++) {
                    const O = l[u][0]
                        ? /<\/?[a-z][\s\S]*>/i.test("" + l[u][0])
                        : !1,
                      g = typeof l[u][0] == "string" ? l[u][0] : "";
                    c.push(
                      (0, e.jsxs)(
                        j.Fragment,
                        {
                          children: [
                            (0, e.jsx)("div", {
                              className: d().TextCapitalize,
                              children: `${u == 0 ? m.replace(/_/g, " ") : ""}`,
                            }),
                            O &&
                              (0, e.jsx)("div", {
                                dangerouslySetInnerHTML: { __html: g },
                              }),
                            !O && (0, e.jsx)("div", { children: `${l[u][0]}` }),
                            (0, e.jsx)("div", {
                              style: { color: E },
                              children: `(${l[u][1]} / ${t})`,
                            }),
                          ],
                        },
                        `${m}-${u}`,
                      ),
                    );
                  }
                }
                return c;
              },
            },
          ],
          v = [
            {
              key: "reportslink",
              displayName: "Reports",
              formatFunction: (n) =>
                n
                  ? (0, e.jsx)(j.Fragment, {
                      children: (0, e.jsx)("a", {
                        href: n,
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
              formatFunction: (n) =>
                n
                  ? (0, e.jsx)(j.Fragment, {
                      children: (0, e.jsx)("a", {
                        href: n,
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
              displayName: Qe(o.TK.DOTA_ACCESS_TOURNAMENT_ADMIN),
              formatFunction: (n = 0) =>
                n & o.TK.DOTA_ACCESS_TOURNAMENT_ADMIN
                  ? (0, e.jsx)("div", { style: { color: S }, children: "YES" })
                  : "NO",
            },
            {
              key: "beta_access_flags",
              displayName: Qe(o.TK.DOTA_ACCESS_TOURNAMENT_BROADCASTER),
              formatFunction: (n = 0) =>
                n & o.TK.DOTA_ACCESS_TOURNAMENT_BROADCASTER
                  ? (0, e.jsx)("div", { style: { color: S }, children: "YES" })
                  : "NO",
            },
          ],
          W = [
            {
              key: "vac",
              displayName: " ",
              formatFunction: (n = {}) => {
                const c = [];
                for (let m in n) {
                  const l = n[m];
                  c.push(
                    (0, e.jsxs)(
                      j.Fragment,
                      {
                        children: [
                          (0, e.jsx)("div", {
                            className: d().TextCapitalize,
                            children: `VAC ${m.replace(/_/g, " ")}`,
                          }),
                          (0, e.jsx)("div", { children: l }),
                        ],
                      },
                      m,
                    ),
                  );
                }
                return c;
              },
            },
          ],
          Ie = [
            { key: "name", displayName: "Name" },
            { key: "real_name", displayName: "Real Name" },
            {
              key: "role",
              displayName: "Role",
              formatFunction: (n = 0) => {
                switch (n) {
                  case o.Ov.CORE:
                    return Fe(o.Ov.CORE);
                  case o.Ov.SUPPORT:
                    return Fe(o.Ov.SUPPORT);
                  case o.Ov.OFFLANE:
                    return Fe(o.Ov.OFFLANE);
                  case o.Ov.MID:
                    return Fe(o.Ov.MID);
                  default:
                    return "Unknown";
                }
              },
            },
            {
              key: "team",
              secondaryKey: "dotateamurl",
              displayName: "Team ID",
              formatFunction: (n = 0, c = "") => {
                if (!n || !c) return "";
                const m = `${c}${n}`;
                return (0, e.jsx)(j.Fragment, {
                  children: (0, e.jsx)("a", {
                    href: m,
                    target: "_blank",
                    rel: "noopener",
                    children: n,
                  }),
                });
              },
            },
            {
              key: "country",
              displayName: "Country",
              formatFunction: (n) =>
                (0, e.jsx)("span", {
                  className: d().TextUppercase,
                  children: n,
                }),
            },
            { key: "sponsor", displayName: "Sponsor" },
            {
              key: "pro",
              displayName: "Is Pro Team?",
              formatFunction: (n) => (n ? "YES" : "NO"),
            },
            {
              key: "locked",
              displayName: "Is Locked?",
              formatFunction: (n) => (n ? "YES" : "NO"),
            },
          ],
          Ke = [
            {
              key: "teams",
              secondaryKey: "dotateamurl",
              displayName: " ",
              formatFunction: (n = {}, c = "") => {
                const m = [];
                for (let l in n) {
                  const t = n[l],
                    u = t.team_id,
                    O = `${c}${u}`,
                    g = t.team_name,
                    P = t.team_tag;
                  m.push(
                    (0, e.jsxs)(
                      j.Fragment,
                      {
                        children: [
                          (0, e.jsxs)("div", {
                            children: [
                              `${g} `,
                              (0, e.jsx)("span", {
                                style: { color: E },
                                children: `[${P}]`,
                              }),
                            ],
                          }),
                          (0, e.jsx)("a", {
                            href: O,
                            target: "_blank",
                            rel: "noopener",
                            children: u,
                          }),
                        ],
                      },
                      u,
                    ),
                  );
                }
                return m;
              },
            },
          ],
          ve = [
            {
              key: "eventpoints",
              displayName: " ",
              formatFunction: (n = {}) => {
                const m = n?.result?.points || [],
                  l = [];
                for (let t of m) {
                  const u = t.event_id,
                    O = n[u]?.event_name,
                    g = n[u]?.points_per_level || 1e3,
                    P = Math.floor(t.event_points / g);
                  l.unshift(
                    (0, e.jsxs)(
                      j.Fragment,
                      {
                        children: [
                          (0, e.jsx)("div", { children: O }),
                          (0, e.jsx)("div", { children: P }),
                        ],
                      },
                      O,
                    ),
                  );
                }
                return l;
              },
            },
          ],
          Q = () =>
            (0, e.jsxs)(j.Fragment, {
              children: [
                (0, e.jsx)("span", { style: { color: i }, children: "YES" }),
                (0, e.jsx)("span", {
                  children: " (check V1 Link for details)",
                }),
              ],
            }),
          he = [
            {
              key: "exploiter_data",
              displayName: "Exploiter Warnings?",
              formatFunction: Q,
            },
            {
              key: "smurf_data",
              displayName: "Smurf Warnings?",
              formatFunction: Q,
            },
            {
              key: "cheater_data",
              displayName: "Cheater Warnings?",
              formatFunction: Q,
            },
            {
              key: "booster_data",
              displayName: "Booster Warnings?",
              formatFunction: Q,
            },
            {
              key: "known_mmr_exploiter",
              displayName: "Known Hacker / Exploiter?",
              formatFunction: Q,
            },
            {
              key: "delayedbans",
              displayName: "Delayed Bans?",
              formatFunction: Q,
            },
          ],
          re = (n) =>
            (0, e.jsx)(j.Fragment, {
              children: (0, e.jsx)("span", {
                style: { color: z },
                children: w()(n * 1e3).format("MMMM Do YYYY, h:mm:ss a"),
              }),
            }),
          Oe = [
            {
              key: "matchdisableduntil",
              displayName: "MM Disabled Until",
              formatFunction: re,
            },
            {
              key: "rankeddisableduntil",
              displayName: "Ranked Disabled Until",
              formatFunction: re,
            },
            {
              key: "preventvoiceuntil",
              displayName: "Voice Disabled Until",
              formatFunction: re,
            },
            {
              key: "preventpublictextchatuntil",
              displayName: "Public Text Chat Disabled Until",
              formatFunction: re,
            },
          ],
          pe = (n) => {
            if (!n || !n.length) return "(No Bans)";
            n = n.slice(0, 5);
            const c = (m) =>
              m
                ? m < 60
                  ? `${w().duration(m, "seconds").asSeconds()} seconds`
                  : m < 3600
                    ? `${w().duration(m, "seconds").asMinutes()} min`
                    : m < 86400 * 10
                      ? `${w().duration(m, "seconds").asHours()} hours`
                      : `${w().duration(m, "seconds").asDays()} days`
                : "";
            return n.map((m) => {
              const l = m.bantype == "Admin Permanent";
              return (0, e.jsxs)(
                "tr",
                {
                  style: { color: l ? z : "" },
                  children: [
                    (0, e.jsx)("td", { children: m.bantype }),
                    (0, e.jsx)("td", {
                      children: w()(m.starttime * 1e3).format(
                        "MMMM Do YYYY, h:mm:ss a",
                      ),
                    }),
                    (0, e.jsx)("td", {
                      children: w()((m.starttime + m.duration) * 1e3).format(
                        "MMMM Do YYYY, h:mm:ss a",
                      ),
                    }),
                    (0, e.jsx)("td", {
                      children: l ? "Permanent" : c(m.duration),
                    }),
                    (0, e.jsx)("td", {
                      children: m.admin ? "ADMIN" : "Automated",
                    }),
                    (0, e.jsx)("td", { children: m.comment }),
                  ],
                },
                `${m.bantype} - ${m.starttime}`,
              );
            });
          },
          ge = (n) => {
            const m = (0, I.g)()?.id,
              [l, t] = (0, j.useState)(null),
              [u, O] = (0, j.useState)(null),
              [g, P] = (0, j.useState)(null),
              [K, $] = (0, j.useState)(null),
              [B, q] = (0, j.useState)(!1),
              [Me, V] = (0, j.useState)(!1),
              [de, be] = (0, j.useState)(!1),
              [M, ht] = (0, j.useState)(!1),
              [at, yt] = (0, j.useState)(!0),
              [nt, ft] = (0, j.useState)(!0),
              [st, jt] = (0, j.useState)(!1),
              [rt, gt] = (0, j.useState)(!0),
              [ot, At] = (0, j.useState)(!0),
              [it, pt] = (0, j.useState)(!1),
              Nt = ee.B5.Get().getHeroList(),
              Tt = ee.B5.Get().getItemList();
            async function Et() {
              if (!T.r.DOTA_APP_ID || !m) return;
              (ht(!1), be(!1), q(!1), V(!1));
              const a = {
                appid: T.r.DOTA_APP_ID,
                u: qe(T.r.DOTA_APP_ID),
                account_id: m,
              };
              try {
                const A = await R().get(
                    T.r.BASE_URL + "persona/showplayerreact/",
                    { params: a },
                  ),
                  N = A?.data;
                if (!N?.persona || !N?.persona?.accountid)
                  throw new Error(
                    "GC could not find account details for this account",
                  );
                try {
                  N &&
                    N.persona &&
                    N.persona.elodatajson &&
                    O(JSON.parse(N.persona.elodatajson).aggregate);
                } catch {}
                try {
                  if (
                    N &&
                    N.persona &&
                    N.persona.history &&
                    N.persona.history.matches &&
                    Object.keys(N.persona.history.matches).length
                  ) {
                    const X = Object.values(
                      N.persona.history.matches,
                    ).reverse();
                    (P(X), $(X));
                  }
                } catch {
                  V(!0);
                }
                A && A.data && t(N);
              } catch {
                (console.log("Error fetching individual persona info."),
                  ht(!0));
              }
              (be(!0), q(!0));
            }
            ((0, j.useEffect)(() => {
              try {
                Et();
              } catch {
                console.log("Could not fetch persona info.");
              }
            }, [m]),
              (0, j.useEffect)(() => {
                if (!g) return;
                let a = g.slice();
                ((a = a.filter(
                  (A) =>
                    !(
                      (!nt && A.lobbytype == o.AP.CASUAL_MATCH) ||
                      (!at && A.lobbytype == o.AP.COMPETITIVE_MATCH) ||
                      (!st &&
                        ![
                          o.AP.CASUAL_MATCH,
                          o.AP.COMPETITIVE_MATCH,
                          o.AP.WEEKEND_TOURNEY,
                          o.AP.FEATURED_GAMEMODE,
                        ].includes(A.lobbytype)) ||
                      (!rt && A.rankwassolo) ||
                      (!ot && !A.rankwassolo)
                    ),
                )),
                  $(a));
              }, [g, at, nt, st, rt, ot]));
            let ze = null;
            if (
              (m
                ? !de || !B
                  ? (ze = `Loading account ID ${m}...`)
                  : de && M
                    ? (ze = `Error loading persona information for account ID ${m}. Double check universe & account ID (or try refreshing).`)
                    : B &&
                      Me &&
                      (ze = `Error loading match history for account ID ${m}.`)
                : (ze = "Must pass in an account ID."),
              ze)
            )
              return (0, e.jsxs)("div", {
                className: d().PersonaDetails,
                children: [
                  (0, e.jsx)(Ee.A, { bOverlapping: !1 }),
                  (0, e.jsx)(x.mg, {
                    children: (0, e.jsx)("title", {
                      children: "Dota 2 - Persona Details",
                    }),
                  }),
                  (0, e.jsx)(Je.A, {}),
                  (0, e.jsx)("div", {
                    className: d().ContentFrame,
                    children: (0, e.jsx)("h2", {
                      className: d().Header,
                      children: ze,
                    }),
                  }),
                  (0, e.jsx)(Ve.K, {}),
                ],
              });
            const Dt = [
              {
                dataKey: "date",
                label: "Match Date",
                widthRelative: 13,
                cellRenderer: (a) =>
                  w()(a.cellData * 1e3).format("MM/DD/YY HH:mm:ss"),
              },
              {
                dataKey: "matchid",
                label: "ID",
                widthRelative: 10,
                cellRenderer: (a) => Y(a.cellData, a.columnData.strAccountId),
              },
              {
                dataKey: "heroid",
                label: "Hero",
                widthRelative: 5,
                cellRenderer: (a) => {
                  const N = Nt?.heroes
                    .find((X) => X.id == a.cellData)
                    ?.name?.replace("npc_dota_hero_", "");
                  return N
                    ? (0, e.jsx)("img", {
                        className: d().HeroImage,
                        src: `${T.r.IMG_URL}heroes/wide/${N}.png`,
                        alt: a.cellData,
                      })
                    : (0, e.jsx)("img", {
                        className: d().HeroImage,
                        src: `${T.r.IMG_URL}heroes/wide/unknown.png`,
                      });
                },
              },
              {
                dataKey: "outcome",
                label: "Outcome",
                widthRelative: 7,
                cellRenderer: (a) => {
                  if (a.rowData?.lobbytype == o.AP.PRACTICE)
                    return (0, e.jsx)("span", {
                      style: { color: H },
                      children: Se(o.AP.PRACTICE),
                    });
                  let A = a.cellData;
                  if ((A in o.rM || (A = 0), A <= 0)) return je(o.rM.UNKNOWN);
                  const N = a?.rowData?.teamnumber + 2;
                  if (N < 2 || N > 3) return je(o.rM.UNKNOWN);
                  if (A < 2 || A > 3) {
                    const X = a.cellData;
                    return X in o.rM
                      ? (0, e.jsx)("span", {
                          style: { color: i },
                          children: je(X),
                        })
                      : je(o.rM.UNKNOWN);
                  } else {
                    const X = N == A,
                      me = [],
                      _e = a?.rowData?.rankchange;
                    let We = X ? (_e >= 35 ? s : C) : _e <= -35 ? f : p;
                    return (
                      me.push(
                        (0, e.jsx)(
                          "span",
                          { style: { color: We }, children: X ? "W" : "L" },
                          "W-L",
                        ),
                      ),
                      X
                        ? me.push(
                            (0, e.jsx)(
                              "span",
                              { style: { color: We }, children: ` (+${_e})` },
                              "rankChange",
                            ),
                          )
                        : _e < 0
                          ? me.push(
                              (0, e.jsx)(
                                "span",
                                { style: { color: We }, children: ` (${_e})` },
                                "rankChange",
                              ),
                            )
                          : me.push(
                              (0, e.jsx)(
                                "span",
                                { style: { color: We }, children: ` (-${_e})` },
                                "rankChange",
                              ),
                            ),
                      me
                    );
                  }
                },
              },
              {
                dataKey: "previousrank",
                label: "MMR",
                widthRelative: 5,
                cellRenderer: (a) => a.cellData,
              },
              {
                dataKey: "overperformance_score",
                label: "Perf",
                widthRelative: 4,
                cellRenderer: (a) => {
                  const A = a.cellData || 0;
                  let N = "";
                  return (
                    A >= 300
                      ? (N = z)
                      : A >= 175
                        ? (N = i)
                        : A >= 100 && (N = h),
                    (0, e.jsx)(
                      "span",
                      { style: { color: N }, children: `${A}` },
                      "op",
                    )
                  );
                },
              },
              {
                dataKey: "duration",
                label: "Dur",
                widthRelative: 6,
                cellRenderer: (a) => {
                  const A = a.cellData;
                  return A
                    ? A < 3600
                      ? w()
                          .utc(w().duration(A, "seconds").asMilliseconds())
                          .format("mm:ss")
                      : w()
                          .utc(w().duration(A, "seconds").asMilliseconds())
                          .format("h:mm:ss")
                    : "-";
                },
              },
              {
                dataKey: "lobbytype",
                label:
                  "Ranked/Unranked (this label isn't used, check headerRenderer)",
                widthRelative: 8,
                cellRenderer: (a) => {
                  let A = isNaN(a.cellData) ? a.rowData.lobbytype : a.cellData;
                  A in o.AP || (A = -1);
                  let N = H;
                  return (
                    A == o.AP.CASUAL_MATCH
                      ? (N = L)
                      : A == o.AP.COMPETITIVE_MATCH && (N = k),
                    (0, e.jsx)("span", { style: { color: N }, children: Se(A) })
                  );
                },
                headerRenderer: (a) =>
                  (0, e.jsxs)(j.Fragment, {
                    children: [
                      (0, e.jsxs)("div", {
                        className: d().CheckBox,
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            name: "ranked",
                            id: "ranked",
                            onChange: () => yt(!at),
                            checked: at,
                          }),
                          (0, e.jsx)("label", {
                            htmlFor: "ranked",
                            children: (0, e.jsx)("span", {
                              style: { color: k },
                              children: "Ranked",
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: d().CheckBox,
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            name: "unranked",
                            id: "unranked",
                            onChange: () => ft(!nt),
                            checked: nt,
                          }),
                          (0, e.jsx)("label", {
                            htmlFor: "unranked",
                            children: (0, e.jsx)("span", {
                              style: { color: L },
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
                cellRenderer: (a) =>
                  a.cellData && a?.rowData?.lobbytype != o.AP.WEEKEND_TOURNEY
                    ? (0, e.jsx)("span", {
                        style: { color: te },
                        children: "Solo",
                      })
                    : (0, e.jsx)("span", {
                        style: { color: F },
                        children: "Party",
                      }),
                headerRenderer: (a) =>
                  (0, e.jsxs)(j.Fragment, {
                    children: [
                      (0, e.jsxs)("div", {
                        className: d().CheckBox,
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            name: "solo",
                            id: "solo",
                            onChange: () => gt(!rt),
                            checked: rt,
                          }),
                          (0, e.jsx)("label", {
                            htmlFor: "solo",
                            children: (0, e.jsx)("span", {
                              style: { color: te },
                              children: "Solo",
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: d().CheckBox,
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            name: "party",
                            id: "party",
                            onChange: () => At(!ot),
                            checked: ot,
                          }),
                          (0, e.jsx)("label", {
                            htmlFor: "party",
                            children: (0, e.jsx)("span", {
                              style: { color: F },
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
                cellRenderer: (a) => {
                  if (a?.rowData?.searchdata?.partylowpri)
                    return (0, e.jsx)("span", {
                      style: { color: f },
                      children: "SD (LP)",
                    });
                  const A = `DOTA_GAMEMODE_${a.cellData}`;
                  return A in o.Fk ? De(o.Fk[A]) : De(o.Fk.DOTA_GAMEMODE_NONE);
                },
              },
              {
                dataKey: "kills",
                label: "K/D/A",
                widthRelative: 7,
                cellRenderer: (a) =>
                  isNaN(a.cellData) ||
                  isNaN(a?.rowData?.deaths) ||
                  isNaN(a?.rowData?.assists)
                    ? " - / - / - "
                    : `${a.cellData}/${a?.rowData?.deaths}/${a?.rowData?.assists}`,
              },
              {
                dataKey: "goldspent",
                label: "NW",
                widthRelative: 6,
                cellRenderer: (a) => {
                  let A = a.cellData + a?.rowData?.gold;
                  return (
                    isNaN(A) && (A = "-"),
                    (0, e.jsx)("span", {
                      style: { color: "darkgoldenrod" },
                      children: `${A}`,
                    })
                  );
                },
              },
              {
                dataKey: "item0",
                label: "Items",
                widthRelative: 20,
                cellRenderer: (a) => {
                  const A = [];
                  for (let N = 0; N < 6; N++) {
                    const X = Tt?.itemabilities.find(
                      (_e) => _e.id == a?.rowData[`item${N}`],
                    );
                    let me = X?.name.replace("item_", "");
                    ((!X || !me) && (me = "emptyitembg"),
                      A.push(
                        (0, e.jsx)(
                          "img",
                          {
                            className: d().ItemIcon,
                            src: `${T.r.IMG_URL}items/${me}.png`,
                            alt: a.cellData,
                          },
                          `${a.rowIndex}_item${N}`,
                        ),
                      ));
                  }
                  return (0, e.jsxs)("div", {
                    className: d().ItemContainer,
                    children: [A, " "],
                  });
                },
              },
              {
                dataKey: "role_assignment",
                label: "Role",
                widthRelative: 6,
                cellRenderer: (a) => {
                  switch (a.cellData) {
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
                cellRenderer: (a) => {
                  const A = Object.values(a.cellData || []),
                    N = Object.values(a?.rowData?.leaver || []),
                    X = Object.values(a?.rowData?.detections || []),
                    me = Object.values(a?.rowData?.lowpribans || []),
                    _e = a?.rowData?.hwidchange,
                    We = a?.rowData?.hwidchangelink,
                    xt = a?.rowData?.geolocchange,
                    mt = a?.rowData?.languagechange,
                    ut = [],
                    tt = [];
                  for (const G of A) tt.push(G);
                  const xe = [];
                  if (
                    (N.length &&
                      xe.push(
                        (0, e.jsx)(
                          ie.he,
                          {
                            toolTipContent: (0, e.jsxs)("table", {
                              style: { borderSpacing: "5px" },
                              children: [
                                (0, e.jsx)("thead", {
                                  children: (0, e.jsxs)("tr", {
                                    children: [
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Date",
                                      }),
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Leaver Status",
                                      }),
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "State Flags",
                                      }),
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Game State",
                                      }),
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Lobby State",
                                      }),
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Actions",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, e.jsx)("tbody", {
                                  children: N.map((G) =>
                                    (0, e.jsxs)(
                                      "tr",
                                      {
                                        children: [
                                          (0, e.jsx)("td", {
                                            children: G.time
                                              ? w()(G.time * 1e3).format(
                                                  "MMMM Do YYYY, h:mm:ss a",
                                                )
                                              : "-",
                                          }),
                                          (0, e.jsx)("td", {
                                            children: G.leaverstatusname,
                                          }),
                                          (0, e.jsx)("td", {
                                            children:
                                              G.flagnames &&
                                              Object.values(G.flagnames).length
                                                ? Object.values(
                                                    G.flagnames,
                                                  ).join(", ")
                                                : "-",
                                          }),
                                          (0, e.jsx)("td", {
                                            children: G.gamestatename,
                                          }),
                                          (0, e.jsx)("td", {
                                            children: G.lobbystatename,
                                          }),
                                          (0, e.jsx)("td", {
                                            children:
                                              G.actionnames &&
                                              Object.values(G.actionnames)
                                                .length
                                                ? Object.values(
                                                    G.actionnames,
                                                  ).join(", ")
                                                : "-",
                                          }),
                                        ],
                                      },
                                      `${G.time}`,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: d().PlayerReportTooltip,
                            children: (0, e.jsx)("span", {
                              style: { color: f },
                              children: "[Lvr] ",
                            }),
                          },
                          "leaverTooltip",
                        ),
                      ),
                    ut.length &&
                      xe.push(
                        (0, e.jsx)(
                          ie.he,
                          {
                            toolTipContent: (0, e.jsxs)("table", {
                              style: { borderSpacing: "12px" },
                              children: [
                                (0, e.jsx)("thead", {
                                  children: (0, e.jsxs)("tr", {
                                    children: [
                                      (0, e.jsx)("th", { align: "left" }),
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Commend",
                                      }),
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Player",
                                      }),
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Comment",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, e.jsx)("tbody", {
                                  children: ut.map((G) => {
                                    const Ae = b(G.reportreason),
                                      Ze = U(G.reportreason);
                                    return (0, e.jsxs)(
                                      "tr",
                                      {
                                        children: [
                                          (0, e.jsx)("td", {
                                            children:
                                              Ae &&
                                              (0, e.jsx)("img", { src: Ae }),
                                          }),
                                          (0, e.jsx)("td", { children: Ze }),
                                          (0, e.jsx)("td", {
                                            children: G.reporteraccountid,
                                          }),
                                          (0, e.jsx)("td", {
                                            children: G.comment || "",
                                          }),
                                        ],
                                      },
                                      `${G.reporteraccountid}`,
                                    );
                                  }),
                                }),
                              ],
                            }),
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: d().PlayerReportTooltip,
                            children: (0, e.jsx)(
                              "span",
                              {
                                style: { color: C },
                                children: `[${ut.length}] `,
                              },
                              "playerCommends",
                            ),
                          },
                          "commendTooltip",
                        ),
                      ),
                    tt.length)
                  ) {
                    tt.sort(
                      (ye, lt) => ye.reporteraccountid - lt.reporteraccountid,
                    );
                    const G = [
                        ...new Set(tt.map((ye) => ye?.reporteraccountid)),
                      ],
                      Ae = [];
                    let Ze = 0;
                    for (let ye of tt) {
                      const lt = b(ye.reportreason),
                        It = U(ye.reportreason);
                      (Ze &&
                        Ze != ye.reporteraccountid &&
                        Ae.push(
                          (0, e.jsx)(
                            "tr",
                            {
                              children: (0, e.jsx)("td", {
                                colSpan: 3,
                                children: (0, e.jsx)("hr", {}),
                              }),
                            },
                            `${Ze}-separator`,
                          ),
                        ),
                        Ae.push(
                          (0, e.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, e.jsx)("td", {
                                  children:
                                    lt && (0, e.jsx)("img", { src: lt }),
                                }),
                                (0, e.jsx)("td", { children: It }),
                                (0, e.jsx)("td", {
                                  children: ye.reporteraccountid,
                                }),
                              ],
                            },
                            `${ye.reporteraccountid}-${ye.reportreason}`,
                          ),
                        ),
                        (Ze = ye.reporteraccountid));
                    }
                    xe.push(
                      (0, e.jsx)(
                        ie.he,
                        {
                          toolTipContent: (0, e.jsxs)("table", {
                            style: { borderSpacing: "12px" },
                            children: [
                              (0, e.jsx)("thead", {
                                children: (0, e.jsxs)("tr", {
                                  children: [
                                    (0, e.jsx)("th", { align: "left" }),
                                    (0, e.jsx)("th", {
                                      align: "left",
                                      children: "Reason",
                                    }),
                                    (0, e.jsx)("th", {
                                      align: "left",
                                      children: "Reporter",
                                    }),
                                  ],
                                }),
                              }),
                              (0, e.jsx)("tbody", { children: Ae }),
                            ],
                          }),
                          direction: "left",
                          nBodyAlignment: 1,
                          nAllowOffscreenPx: 1200,
                          strTooltipClassname: d().PlayerReportTooltip,
                          children: (0, e.jsx)(
                            "span",
                            { style: { color: z }, children: `[${G.length}]` },
                            "playerReports",
                          ),
                        },
                        "reportTooltip",
                      ),
                    );
                  }
                  return (
                    X.length &&
                      xe.push(
                        (0, e.jsx)(
                          ie.he,
                          {
                            toolTipContent: (0, e.jsxs)("table", {
                              style: { borderSpacing: "12px" },
                              children: [
                                (0, e.jsx)("thead", {
                                  children: (0, e.jsxs)("tr", {
                                    children: [
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Suspicion (Enum)",
                                      }),
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Game Time",
                                      }),
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Data 1",
                                      }),
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Data 2",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, e.jsx)("tbody", {
                                  children: X.map((G, Ae) =>
                                    (0, e.jsxs)(
                                      "tr",
                                      {
                                        children: [
                                          (0, e.jsx)("td", {
                                            children: `${G.suspicionname} (${G.suspicion})`,
                                          }),
                                          (0, e.jsx)("td", {
                                            children: w()
                                              .utc(
                                                w()
                                                  .duration(
                                                    G.gametime,
                                                    "seconds",
                                                  )
                                                  .asMilliseconds(),
                                              )
                                              .format("mm:ss"),
                                          }),
                                          (0, e.jsx)("td", {
                                            children: G.data1 || "",
                                          }),
                                          (0, e.jsx)("td", {
                                            children: G.data2 || "",
                                          }),
                                        ],
                                      },
                                      `${G.matchid}-${Ae}`,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: d().PlayerReportTooltip,
                            children: (0, e.jsx)(
                              "span",
                              { style: { color: z }, children: "[SUS]" },
                              "playerReports",
                            ),
                          },
                          "detectionsTooltip",
                        ),
                      ),
                    me.length &&
                      xe.push(
                        (0, e.jsx)(
                          ie.he,
                          {
                            toolTipContent: (0, e.jsxs)("table", {
                              style: { borderSpacing: "12px" },
                              children: [
                                (0, e.jsx)("thead", {
                                  children: (0, e.jsxs)("tr", {
                                    children: [
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Ban Type",
                                      }),
                                      (0, e.jsx)("th", {
                                        align: "left",
                                        children: "Games",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, e.jsx)("tbody", {
                                  children: me.map((G, Ae) =>
                                    (0, e.jsxs)(
                                      "tr",
                                      {
                                        children: [
                                          (0, e.jsx)("td", {
                                            children: G.bantypename || "",
                                          }),
                                          (0, e.jsx)("td", {
                                            children:
                                              G.penaltylowprigamesapplied ||
                                              "0",
                                          }),
                                        ],
                                      },
                                      `lp-${Ae}`,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: d().PlayerReportTooltip,
                            children: (0, e.jsx)(
                              "span",
                              { style: { color: z }, children: "[LP]" },
                              "playerReports",
                            ),
                          },
                          "lowPriTooltip",
                        ),
                      ),
                    mt &&
                      xe.push(
                        (0, e.jsx)(
                          ie.he,
                          {
                            toolTipContent: mt,
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: d().PlayerReportTooltip,
                            children: (0, e.jsx)(
                              "span",
                              {
                                style: { color: i },
                                children: `[${mt.slice(-2)}]`,
                              },
                              "langChange",
                            ),
                          },
                          "langchange",
                        ),
                      ),
                    xt &&
                      xe.push(
                        (0, e.jsx)(
                          ie.he,
                          {
                            toolTipContent: xt,
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: d().PlayerReportTooltip,
                            children: (0, e.jsx)(
                              "span",
                              { style: { color: i }, children: "[GEO]" },
                              "geoChange",
                            ),
                          },
                          "geochange",
                        ),
                      ),
                    _e &&
                      xe.push(
                        (0, e.jsx)(
                          ie.he,
                          {
                            toolTipContent: _e,
                            direction: "left",
                            nBodyAlignment: 1,
                            nAllowOffscreenPx: 1200,
                            strTooltipClassname: d().PlayerReportTooltip,
                            children: (0, e.jsx)(
                              "span",
                              { style: { color: i }, children: "[HW]" },
                              "hwidChange",
                            ),
                          },
                          "hwchange",
                        ),
                      ),
                    We &&
                      xe.push(
                        (0, e.jsx)(
                          "div",
                          { dangerouslySetInnerHTML: { __html: We } },
                          "hwidChange",
                        ),
                      ),
                    xe.length == 0
                      ? ""
                      : (0, e.jsx)("div", {
                          className: d().ReportRowElement,
                          children: xe,
                        })
                  );
                },
              },
            ];
            let _t = !0;
            for (let a of he)
              if (l?.persona && l?.persona[a.key]) {
                _t = !1;
                break;
              }
            let St = !1;
            for (let a of Oe)
              if (
                l?.persona &&
                l?.persona[a.key] &&
                w()(l?.persona[a.key] * 1e3).isAfter()
              ) {
                St = !0;
                break;
              }
            let et = 0,
              ct = !1;
            if (l?.persona?.banhistory)
              for (let a of l.persona.banhistory) {
                const A = a.comment || "";
                if (
                  /Smurf/.test(A) &&
                  /Main/.test(A) &&
                  A.match(/.*(?:\D|^)(\d+)/) &&
                  A.match(/.*(?:\D|^)(\d+)/)
                ) {
                  const N = A.match(/.*(?:\D|^)(\d+)/);
                  N && N.length && (et = N[1]);
                } else if (
                  /Streamer/i.test(A) &&
                  /Main/.test(A) &&
                  A.match(/.*(?:\D|^)(\d+)/) &&
                  A.match(/.*(?:\D|^)(\d+)/)
                ) {
                  const N = A.match(/.*(?:\D|^)(\d+)/);
                  N && N.length && ((et = N[1]), (ct = !0));
                }
              }
            const dt = l?.persona?.personaname || "";
            return (0, e.jsxs)("div", {
              className: d().PersonaDetails,
              children: [
                (0, e.jsx)(Ee.A, { bOverlapping: !1 }),
                (0, e.jsx)(x.mg, {
                  children: (0, e.jsx)("title", {
                    children: `Dota 2 Player${dt ? " - " + dt : ""}`,
                  }),
                }),
                (0, e.jsx)(Je.A, {}),
                (0, e.jsx)("br", {}),
                (0, e.jsxs)("div", {
                  className: d().ContentFrame,
                  children: [
                    (0, e.jsxs)("div", {
                      className: d().TopContent,
                      children: [
                        (0, e.jsxs)("div", {
                          className: d().TopContentLeft,
                          children: [
                            (0, e.jsx)("h1", {
                              className: (0, ne.A)(
                                d().Header,
                                d().HeaderFixedHeight,
                              ),
                              children: `${dt}`,
                            }),
                            (0, e.jsx)("div", {
                              className: d().GeneralInfoGrid,
                              children: J.map((a) =>
                                (0, e.jsxs)(
                                  j.Fragment,
                                  {
                                    children: [
                                      (0, e.jsx)("div", {
                                        children: a.displayName || a.key,
                                      }),
                                      (0, e.jsx)("div", {
                                        children: a.formatFunction
                                          ? a.formatFunction.call(
                                              null,
                                              l?.persona[a.key],
                                              l?.persona[a.secondaryKey],
                                            )
                                          : JSON.stringify(
                                              l?.persona[a.key] || "",
                                              null,
                                              2,
                                            ).replace(/['"]+/g, ""),
                                      }),
                                    ],
                                  },
                                  `${a.key}-${a.displayName}-generalInfo-row`,
                                ),
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: d().RankInfoGrid,
                              children: ae.map((a) =>
                                (0, e.jsxs)(
                                  j.Fragment,
                                  {
                                    children: [
                                      (0, e.jsx)("div", {
                                        children: a.displayName || a.key,
                                      }),
                                      (0, e.jsx)("div", {
                                        children: a.formatFunction
                                          ? a.formatFunction.call(
                                              null,
                                              l?.persona[a.key],
                                              l?.persona[a.secondaryKey],
                                              l?.persona[a.tertiaryKey],
                                            )
                                          : JSON.stringify(
                                              l?.persona[a.key] || "",
                                              null,
                                              2,
                                            ).replace(/['"]+/g, ""),
                                      }),
                                    ],
                                  },
                                  `${a.key}-${a.displayName}-rankInfo-row`,
                                ),
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: d().SupportInfoTopGrid,
                              children: se.map((a) =>
                                (0, e.jsxs)(
                                  j.Fragment,
                                  {
                                    children: [
                                      (0, e.jsx)("div", {
                                        children: a.displayName || a.key,
                                      }),
                                      (0, e.jsx)("div", {
                                        children: a.formatFunction
                                          ? a.formatFunction.call(
                                              null,
                                              l?.persona[a.key],
                                              l?.persona[a.secondaryKey],
                                              l?.persona[a.tertiaryKey],
                                            )
                                          : JSON.stringify(
                                              l?.persona[a.key] || "",
                                              null,
                                              2,
                                            ).replace(/['"]+/g, ""),
                                      }),
                                    ],
                                  },
                                  `${a.key}-${a.displayName}-supportInfo-row`,
                                ),
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: d().SmurfInfoGrid,
                              children: ce.map((a) =>
                                (0, e.jsxs)(
                                  j.Fragment,
                                  {
                                    children: [
                                      (0, e.jsx)("div", {
                                        children: a.displayName || a.key,
                                      }),
                                      (0, e.jsx)("div", {
                                        children: a.formatFunction
                                          ? a.formatFunction.call(
                                              null,
                                              l?.persona[a.key],
                                              l?.persona[a.secondaryKey],
                                            )
                                          : JSON.stringify(
                                              l?.persona[a.key] || "",
                                              null,
                                              2,
                                            ).replace(/['"]+/g, ""),
                                      }),
                                    ],
                                  },
                                  `${a.key}-${a.displayName}-smurfInfo-row`,
                                ),
                              ),
                            }),
                            (0, e.jsx)("div", { className: d().SmoothLine }),
                            (0, e.jsx)("h2", {
                              className: d().Header,
                              children: "Recent (Last 32 games)",
                            }),
                            (0, e.jsx)("div", {
                              className: d().DetailedInfoOuterGrid,
                              children: Z.map((a) =>
                                (0, e.jsx)(
                                  j.Fragment,
                                  {
                                    children: (0, e.jsx)("div", {
                                      className: d().DetailedInfoInnerGrid,
                                      children: a.formatFunction
                                        ? a.formatFunction.call(
                                            null,
                                            l?.persona[a.key],
                                            l?.persona[a.secondaryKey],
                                          )
                                        : JSON.stringify(
                                            l?.persona[a.key] || "",
                                            null,
                                            2,
                                          ).replace(/['"]+/g, ""),
                                    }),
                                  },
                                  `${a.key}-${a.displayName}-vacInfo-row`,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: d().TopContentRight,
                          children: (0, e.jsxs)("div", {
                            className: d().ChartContainer,
                            children: [
                              u &&
                                (0, e.jsx)("div", {
                                  className: d().ChartTitle,
                                  children: `Last ${u.length} games`,
                                }),
                              (0, e.jsx)(Ge.u, {
                                width: "99%",
                                aspect: 1.9,
                                children: (0, e.jsxs)(He.b, {
                                  data: u,
                                  margin: {
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                  },
                                  children: [
                                    (0, e.jsx)(Ce.d, {
                                      strokeDasharray: "12 8",
                                      stroke: "#424242",
                                      fillOpacity: 0.2,
                                    }),
                                    (0, e.jsx)(Ye.W, {
                                      stroke: "#808080",
                                      dataKey: "time",
                                      type: "number",
                                      tickFormatter: (a) =>
                                        w()(a * 1e3).format("MM/DD/YY"),
                                      domain: [
                                        "dataMin - 86400",
                                        "dataMax + 43200",
                                      ],
                                    }),
                                    (0, e.jsx)(Le.h, {
                                      stroke: "#808080",
                                      domain: ["auto", "auto"],
                                    }),
                                    (0, e.jsx)(D.m, {
                                      cursor: !1,
                                      labelFormatter: (a) =>
                                        w()(Number(a) * 1e3).format(
                                          "MM/DD/YY HH:mm:ss",
                                        ),
                                      contentStyle: {
                                        backgroundColor: "#0c1414",
                                      },
                                    }),
                                    (0, e.jsx)(Ne.s, {
                                      layout: "vertical",
                                      verticalAlign: "middle",
                                      align: "right",
                                      wrapperStyle: { paddingLeft: "10px" },
                                    }),
                                    (0, e.jsx)(r.N, {
                                      type: "monotone",
                                      dataKey: "ranked",
                                      name: "Ranked",
                                      dot: { fill: k, strokeWidth: 1, r: 3 },
                                      stroke: "#888fd8",
                                      strokeWidth: 2,
                                      connectNulls: !0,
                                    }),
                                    (0, e.jsx)(r.N, {
                                      type: "monotone",
                                      dataKey: "casual",
                                      name: "Unranked",
                                      dot: { fill: L, strokeWidth: 1, r: 3 },
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
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("div", { className: d().SmoothLine }),
                    (0, e.jsx)("div", {
                      className: (0, ne.A)(
                        d().SupportGrid,
                        it && d().SupportGridHidden,
                      ),
                      children: (0, e.jsx)("div", {
                        className: d().SupportColumn,
                        onClick: () => pt(!0),
                        children: (0, e.jsxs)("h2", {
                          className: (0, ne.A)(
                            d().HeaderNoMargin,
                            d().HeaderClickable,
                          ),
                          children: [
                            "Support, Bans, & Other Info",
                            (0, e.jsx)("img", {
                              className: (0, ne.A)(
                                d().ArrowIcon,
                                d().ArrowIconRight,
                              ),
                              src: `${T.r.IMG_URL}arrow_solid_right.png`,
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, ne.A)(
                        d().SupportGrid,
                        !it && d().SupportGridHidden,
                      ),
                      children: [
                        (0, e.jsxs)("div", {
                          className: d().SupportColumn,
                          children: [
                            (0, e.jsxs)("h2", {
                              className: (0, ne.A)(
                                d().Header,
                                d().HeaderClickable,
                              ),
                              onClick: () => pt(!1),
                              children: [
                                "Support, Bans, & Other Info",
                                (0, e.jsx)("img", {
                                  className: (0, ne.A)(
                                    d().ArrowIcon,
                                    d().ArrowIconDown,
                                  ),
                                  src: `${T.r.IMG_URL}arrow_over.png`,
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: d().SupportInfoGrid,
                              children: v.map((a) =>
                                (0, e.jsxs)(
                                  j.Fragment,
                                  {
                                    children: [
                                      (0, e.jsx)("div", {
                                        children: a.displayName || a.key,
                                      }),
                                      (0, e.jsx)("div", {
                                        children: a.formatFunction
                                          ? a.formatFunction.call(
                                              null,
                                              l?.persona[a.key],
                                              l?.persona[a.secondaryKey],
                                            )
                                          : JSON.stringify(
                                              l?.persona[a.key] || "",
                                              null,
                                              2,
                                            ).replace(/['"]+/g, ""),
                                      }),
                                    ],
                                  },
                                  `${a.key}-${a.displayName}-supportInfo-row`,
                                ),
                              ),
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("div", {
                              className: d().AccessFlagsGrid,
                              children: _.map((a) =>
                                (0, e.jsxs)(
                                  j.Fragment,
                                  {
                                    children: [
                                      (0, e.jsx)("div", {
                                        children: a.displayName || a.key,
                                      }),
                                      (0, e.jsx)("div", {
                                        children: a.formatFunction
                                          ? a.formatFunction.call(
                                              null,
                                              l?.persona[a.key],
                                              l?.persona[a.secondaryKey],
                                            )
                                          : JSON.stringify(
                                              l?.persona[a.key] || "",
                                              null,
                                              2,
                                            ).replace(/['"]+/g, ""),
                                      }),
                                    ],
                                  },
                                  `${a.key}-${a.displayName}-accountFlagGenericInfo-row`,
                                ),
                              ),
                            }),
                            !_t && (0, e.jsx)("br", {}),
                            (0, e.jsx)("div", {
                              className: d().WarningsGrid,
                              children: he.map((a) =>
                                (0, e.jsxs)(
                                  j.Fragment,
                                  {
                                    children: [
                                      !!l?.persona[a.key] &&
                                        (0, e.jsx)("div", {
                                          children: a.displayName || a.key,
                                        }),
                                      !!l?.persona[a.key] &&
                                        (0, e.jsx)("div", {
                                          children: a.formatFunction
                                            ? a.formatFunction.call(
                                                null,
                                                l?.persona[a.key],
                                                l?.persona[a.secondaryKey],
                                              )
                                            : JSON.stringify(
                                                l?.persona[a.key] || "",
                                                null,
                                                2,
                                              ).replace(/['"]+/g, ""),
                                        }),
                                    ],
                                  },
                                  `${a.key}-${a.displayName}-warningsInfo-row`,
                                ),
                              ),
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsxs)("div", {
                              className: d().BansGrid,
                              children: [
                                Oe.map((a) =>
                                  (0, e.jsxs)(
                                    j.Fragment,
                                    {
                                      children: [
                                        !!l?.persona[a.key] &&
                                          w()(
                                            l?.persona[a.key] * 1e3,
                                          ).isAfter() &&
                                          (0, e.jsx)("div", {
                                            children: a.displayName || a.key,
                                          }),
                                        !!l?.persona[a.key] &&
                                          w()(
                                            l?.persona[a.key] * 1e3,
                                          ).isAfter() &&
                                          (0, e.jsx)("div", {
                                            children: a.formatFunction
                                              ? a.formatFunction.call(
                                                  null,
                                                  l?.persona[a.key],
                                                  l?.persona[a.secondaryKey],
                                                )
                                              : JSON.stringify(
                                                  l?.persona[a.key] || "",
                                                  null,
                                                  2,
                                                ).replace(/['"]+/g, ""),
                                          }),
                                      ],
                                    },
                                    `${a.key}-${a.displayName}-bansInfo-row`,
                                  ),
                                ),
                                et > 0 &&
                                  (0, e.jsxs)(j.Fragment, {
                                    children: [
                                      !ct &&
                                        (0, e.jsx)("div", {
                                          children: "Main Account",
                                        }),
                                      ct &&
                                        (0, e.jsx)("div", {
                                          children: "Streamer",
                                        }),
                                      (0, e.jsx)("div", {
                                        children: (0, e.jsx)("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: `${T.r.BASE_URL}${Ue.J.personadetails(et).substr(1)}`,
                                          children: et,
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("div", {
                              className: d().VacInfoOuterGrid,
                              children: W.map((a) =>
                                (0, e.jsx)(
                                  j.Fragment,
                                  {
                                    children: (0, e.jsx)("div", {
                                      className: d().VacInfoOuterGrid,
                                      children: a.formatFunction
                                        ? a.formatFunction.call(
                                            null,
                                            l?.persona[a.key],
                                            l?.persona[a.secondaryKey],
                                          )
                                        : JSON.stringify(
                                            l?.persona[a.key] || "",
                                            null,
                                            2,
                                          ).replace(/['"]+/g, ""),
                                    }),
                                  },
                                  `${a.key}-${a.displayName}-vacInfo-row`,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: d().OfficialInfoColumn,
                          children: [
                            (0, e.jsx)("h2", {
                              className: d().Header,
                              children: "Official Profile",
                            }),
                            (0, e.jsxs)("div", {
                              className: d().OfficialProfileOuterGrid,
                              children: [
                                l?.persona?.official_profile &&
                                  Ie.map((a) =>
                                    (0, e.jsxs)(
                                      j.Fragment,
                                      {
                                        children: [
                                          (0, e.jsx)("div", {
                                            children: a.displayName || a.key,
                                          }),
                                          (0, e.jsx)("div", {
                                            className:
                                              d().OfficialProfileInnerGrid,
                                            children: a.formatFunction
                                              ? a.formatFunction.call(
                                                  null,
                                                  l?.persona?.official_profile[
                                                    a.key
                                                  ],
                                                  l?.persona[a.secondaryKey],
                                                )
                                              : JSON.stringify(
                                                  l?.persona?.official_profile[
                                                    a.key
                                                  ] || "",
                                                  null,
                                                  2,
                                                ).replace(/['"]+/g, ""),
                                          }),
                                        ],
                                      },
                                      `${a.key}-${a.displayName}-officialProfileInfo-row`,
                                    ),
                                  ),
                                !l?.persona?.official_profile &&
                                  (0, e.jsx)(j.Fragment, {
                                    children: (0, e.jsx)("span", {
                                      style: { color: E },
                                      children: "(None)",
                                    }),
                                  }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: d().TeamsInfoInfoOuterGrid,
                              children: [
                                (0, e.jsx)("br", {}),
                                (0, e.jsx)("h2", {
                                  className: d().Header,
                                  children: "Teams",
                                }),
                                l?.persona?.teams &&
                                  Ke.map((a) =>
                                    (0, e.jsx)(
                                      j.Fragment,
                                      {
                                        children: (0, e.jsx)("div", {
                                          className: d().TeamsInfoInnerGrid,
                                          children: a.formatFunction
                                            ? a.formatFunction.call(
                                                null,
                                                l?.persona[a.key],
                                                l?.persona[a.secondaryKey],
                                              )
                                            : JSON.stringify(
                                                l?.persona[a.key] || "",
                                                null,
                                                2,
                                              ).replace(/['"]+/g, ""),
                                        }),
                                      },
                                      `${a.key}-${a.displayName}-teamsInfo-row`,
                                    ),
                                  ),
                                !l?.persona?.teams &&
                                  (0, e.jsx)(j.Fragment, {
                                    children: (0, e.jsx)("span", {
                                      style: { color: E },
                                      children: "(None)",
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: d().EventColumn,
                          children: [
                            (0, e.jsx)("h2", {
                              className: d().Header,
                              children: "Event Information",
                            }),
                            (0, e.jsx)("div", {
                              className: d().EventInfoOuterGrid,
                              children: ve.map((a) =>
                                (0, e.jsx)(
                                  j.Fragment,
                                  {
                                    children: (0, e.jsx)("div", {
                                      className: d().EventInfoInnerGrid,
                                      children: a.formatFunction
                                        ? a.formatFunction.call(
                                            null,
                                            l?.persona[a.key],
                                          )
                                        : JSON.stringify(
                                            l?.persona[a.key] || "",
                                            null,
                                            2,
                                          ).replace(/['"]+/g, ""),
                                    }),
                                  },
                                  `${a.key}-${a.displayName}-eventInfo-row`,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, ne.A)(!it && d().SupportGridHidden),
                      children: [
                        (0, e.jsx)("div", { className: d().SmoothLine }),
                        (0, e.jsxs)("table", {
                          className: d().BanHistoryTable,
                          children: [
                            (0, e.jsx)("thead", {
                              children: (0, e.jsxs)("tr", {
                                children: [
                                  (0, e.jsx)("th", {
                                    align: "left",
                                    children: (0, e.jsx)("h3", {
                                      className: d().HeaderNoMargin,
                                      children: "Ban Type",
                                    }),
                                  }),
                                  (0, e.jsx)("th", {
                                    align: "left",
                                    children: (0, e.jsx)("h3", {
                                      className: d().HeaderNoMargin,
                                      children: "Ban Start",
                                    }),
                                  }),
                                  (0, e.jsx)("th", {
                                    align: "left",
                                    children: (0, e.jsx)("h3", {
                                      className: d().HeaderNoMargin,
                                      children: "Ban End",
                                    }),
                                  }),
                                  (0, e.jsx)("th", {
                                    align: "left",
                                    children: (0, e.jsx)("h3", {
                                      className: d().HeaderNoMargin,
                                      children: "Duration",
                                    }),
                                  }),
                                  (0, e.jsx)("th", {
                                    align: "left",
                                    children: (0, e.jsx)("h3", {
                                      className: d().HeaderNoMargin,
                                      children: "Admin",
                                    }),
                                  }),
                                  (0, e.jsx)("th", {
                                    align: "left",
                                    children: (0, e.jsx)("h3", {
                                      className: d().HeaderNoMargin,
                                      children: "Comment",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, e.jsxs)("tbody", {
                              children: [
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {}),
                                }),
                                pe(l?.persona?.banhistory),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", { className: d().SmoothLine }),
                    g &&
                      g.length &&
                      (0, e.jsxs)("div", {
                        className: d().OtherModesCheckBox,
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            name: "othermode",
                            id: "othermode",
                            onChange: () => jt(!st),
                            checked: st,
                          }),
                          (0, e.jsx)("label", {
                            htmlFor: "othermode",
                            children: (0, e.jsx)("span", {
                              children:
                                "Include custom games, practice games, and uncommon game modes",
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsx)("div", {
                      className: d().MatchHistoryOuterContainer,
                      children: (0, e.jsxs)("div", {
                        className: d().MatchHistoryInnerContainer,
                        children: [
                          g &&
                            g.length &&
                            (0, e.jsx)(Te.t$, {
                              children: ({ width: a, height: A }) =>
                                (0, e.jsx)(Te.XI, {
                                  headerHeight: 70,
                                  height: A,
                                  width: a,
                                  rowHeight: 33.33,
                                  rowCount: K.length,
                                  rowGetter: ({ index: N }) => K[N],
                                  rowClassName: ({ index: N }) =>
                                    N != -1
                                      ? N % 2
                                        ? d().MatchRowEven
                                        : d().MatchRowOdd
                                      : "",
                                  overscanRowCount: 50,
                                  noRowsRenderer: () =>
                                    (0, e.jsx)("h3", {
                                      children:
                                        "No Matches Found. Toggle the checkbox at the bottom of the page for custom games and other modes.",
                                    }),
                                  children: Dt.map((N) =>
                                    (0, e.jsx)(
                                      Te.VP,
                                      {
                                        label: N.label,
                                        dataKey: N.dataKey,
                                        width: a * N.widthRelative,
                                        cellRenderer: N.cellRenderer
                                          ? N.cellRenderer
                                          : Xe.RA,
                                        columnData: { strAccountId: m },
                                        headerRenderer: N.headerRenderer
                                          ? N.headerRenderer
                                          : Te.o9,
                                        cellDataGetter: Xe.fF,
                                        flexGrow: 0,
                                        flexShrink: 1,
                                      },
                                      N.dataKey,
                                    ),
                                  ),
                                }),
                            }),
                          (!g || !g.length) &&
                            (0, e.jsx)("div", { children: "No matches" }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)(Ve.K, {}),
              ],
            });
          };
        class Pe extends j.Component {
          render() {
            return (0, e.jsx)(ge, {});
          }
        }
      },
      83672: (Re, ke, y) => {
        "use strict";
        (y.r(ke), y.d(ke, { default: () => C }));
        var e = y(69500),
          fe = y(75749),
          R = y.n(fe),
          I = y(2095),
          j = y(88351),
          x = y(7552),
          oe = y(73202),
          w = y(15001),
          Ge = y(63177),
          He = y(42616),
          Ce = y(11778),
          Ye = y(28471),
          Le = y(9784),
          D = y.n(Le),
          Ne = y(57693);
        const r = "public",
          Te = 50,
          T = "green",
          ne = "red",
          Ee = "yellow",
          Ve = "skyblue",
          Ue = 5e3,
          ee = 1e3,
          o = (s) =>
            (0, e.jsx)("a", {
              href: `${I.r.BASE_URL}personadetails/${s}?u=${r}&appid=${I.r.DOTA_APP_ID}`,
              children: s,
            }),
          Je = (s) =>
            (0, e.jsx)("a", {
              href: `${I.r.BASE_URL}${Ce.J.teamdetails(s).substr(1)}`,
              children: s,
            }),
          qe = (s) =>
            (0, e.jsx)(
              "a",
              {
                href: `${I.r.BASE_URL}${`matches/match/${s}`}?u=${r}&appid=${I.r.DOTA_APP_ID}`,
                children: s,
              },
              s,
            ),
          we = () => `${I.r.BASE_URL}webapi/IDOTA2Teams/EditTeamName/v0001`,
          De = () => `${I.r.BASE_URL}webapi/IDOTA2Teams/AddTeamMember/v0001`,
          Se = () => `${I.r.BASE_URL}webapi/IDOTA2Teams/RemoveTeamMember/v0001`,
          $e = () => `${I.r.BASE_URL}webapi/IDOTA2Teams/SetTeamAdmin/v0001`,
          je = () =>
            `${I.r.BASE_URL}webapi/IDOTA2Teams/UpdateRegisteredTeamData/v0001?u=${r}&appid=${I.r.DOTA_APP_ID}`,
          ue = [19785, 19894, 19890, 19891, 19892, 19893, 19101, 19696];
        var le = ((s) => (
          (s[(s.kTRAA_RegisterTeam = 0)] = "kTRAA_RegisterTeam"),
          (s[(s.kTRAA_InvitePlayer = 1)] = "kTRAA_InvitePlayer"),
          (s[(s.kTRAA_RemovePlayer = 2)] = "kTRAA_RemovePlayer"),
          (s[(s.kTRAA_CancelInvite = 3)] = "kTRAA_CancelInvite"),
          (s[(s.kTRAA_RegisterPlayer = 4)] = "kTRAA_RegisterPlayer"),
          (s[(s.kTRAA_AcceptInvite = 5)] = "kTRAA_AcceptInvite"),
          (s[(s.kTRAA_RejectInvite = 6)] = "kTRAA_RejectInvite"),
          (s[(s.kTRAA_UnregisterTeam = 7)] = "kTRAA_UnregisterTeam"),
          (s[(s.kTRAA_TransferTeam = 8)] = "kTRAA_TransferTeam"),
          (s[(s.kTRAA_TransferTeamAdmin = 9)] = "kTRAA_TransferTeamAdmin"),
          (s[(s.kTRAA_InviteCoach = 10)] = "kTRAA_InviteCoach"),
          (s[(s.kTRAA_RemoveCoach = 11)] = "kTRAA_RemoveCoach"),
          (s[(s.kTRAA_CancelInviteCoach = 12)] = "kTRAA_CancelInviteCoach"),
          (s[(s.kTRAA_AcceptCoachInvite = 13)] = "kTRAA_AcceptCoachInvite"),
          (s[(s.kTRAA_RejectCoachInvite = 14)] = "kTRAA_RejectCoachInvite"),
          (s[(s.kTRAA_ValveUpdateName = 15)] = "kTRAA_ValveUpdateName"),
          (s[(s.kTRAA_ValveUpdateTeamName = 16)] = "kTRAA_ValveUpdateTeamName"),
          (s[(s.kTRAA_Penalty20 = 20)] = "kTRAA_Penalty20"),
          s
        ))(le || {});
        const Qe = {
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
          Fe = [
            {
              enum: 0,
              formatFunction: () =>
                "Registered a team or re-registered an existing team.",
            },
            {
              enum: 1,
              formatFunction: (s = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    "Invited a new/legacy player ",
                    (0, e.jsx)("b", { children: `${s}` }),
                    ".",
                  ],
                }),
            },
            {
              enum: 2,
              formatFunction: (s = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    "Removed a legacy player ",
                    (0, e.jsx)("b", { children: `${s}` }),
                    ".",
                  ],
                }),
            },
            {
              enum: 3,
              formatFunction: (s = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    (0, e.jsx)("b", { children: `${s}` }),
                    " cancelled an issued invite.",
                  ],
                }),
            },
            {
              enum: 4,
              formatFunction: (s = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    (0, e.jsx)("b", { children: `${s}` }),
                    " registered a new player.",
                  ],
                }),
            },
            {
              enum: 5,
              formatFunction: (s = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    (0, e.jsx)("b", { children: `${s}` }),
                    " accepted an invite.",
                  ],
                }),
            },
            {
              enum: 6,
              formatFunction: (s = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    (0, e.jsx)("b", { children: `${s}` }),
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
              formatFunction: (s = "", p = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    "Manager transferred management to a new manager ",
                    (0, e.jsxs)("b", { children: [`${p}`, "."] }),
                  ],
                }),
            },
            {
              enum: 10,
              formatFunction: (s = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    "Invited a coach ",
                    (0, e.jsx)("b", { children: `${s}` }),
                    ".",
                  ],
                }),
            },
            {
              enum: 11,
              formatFunction: (s = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    "Removed a coach ",
                    (0, e.jsx)("b", { children: `${s}` }),
                    ".",
                  ],
                }),
            },
            {
              enum: 12,
              formatFunction: (s = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    (0, e.jsx)("b", { children: `${s}` }),
                    " cancelled an issued coach invite.",
                  ],
                }),
            },
            {
              enum: 13,
              formatFunction: (s = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    (0, e.jsx)("b", { children: `${s}` }),
                    " (coach) accepted an invite.",
                  ],
                }),
            },
            {
              enum: 14,
              formatFunction: (s = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    (0, e.jsx)("b", { children: `${s}` }),
                    " (coach) rejected an invite.",
                  ],
                }),
            },
            {
              enum: 15,
              formatFunction: (s = "") =>
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    "Valve fixed a name for player ",
                    (0, e.jsx)("b", { children: `${s}` }),
                    ".",
                  ],
                }),
            },
            { enum: 16, formatFunction: () => "Valve updated the team name." },
            { enum: 20, formatFunction: () => "20% point penalty." },
          ],
          ie = [
            {
              key: "pro",
              displayName: "Pro?",
              formatFunction: (s) => (s ? "YES" : "NO"),
            },
            { key: "tag", displayName: "Tag" },
            { key: "abbreviation", displayName: "Abbreviation" },
            {
              key: "time_created",
              displayName: "Time Created",
              formatFunction: (s) =>
                s
                  ? new Date(s * 1e3).toLocaleString(
                      Ne.pf.GetPreferredLocales(),
                    )
                  : "",
            },
            {
              key: "pickup_team",
              displayName: "Pickup Team?",
              formatFunction: (s) => (s ? "YES" : "NO"),
            },
            {
              key: "url",
              displayName: "URL",
              formatFunction: (s) =>
                s
                  ? (0, e.jsx)(x.Fragment, {
                      children: (0, e.jsx)("a", { href: s, children: s }),
                    })
                  : "",
            },
            {
              key: "country_code",
              displayName: "Country Code",
              formatFunction: (s = "") => s.toUpperCase(),
            },
          ],
          Be = [
            {
              key: "account_id",
              displayName: "Account ID",
              formatFunction: (s) => o(s),
            },
            { key: "name", displayName: "Name" },
            { key: "persona_name", displayName: "Persona Name" },
            {
              key: "is_pro",
              displayName: "Pro",
              formatFunction: (s) => (s ? "YES" : "NO"),
            },
            {
              key: "admin",
              displayName: "Admin",
              formatFunction: (s) => (s ? "YES" : "NO"),
            },
            {
              key: "kick_link",
              displayName: "KICK",
              formatFunction: (s, p) =>
                (0, e.jsx)("div", {
                  className: D().Link,
                  onClick: async () => {
                    (await R().get(`${s}`), setTimeout(() => p(), ee));
                  },
                  children: "KICK",
                }),
            },
            {
              key: "make_admin_link",
              displayName: "MAKE ADMIN",
              formatFunction: (s, p) =>
                !!s &&
                (0, e.jsx)("div", {
                  className: D().Link,
                  onClick: async () => {
                    (await R().get(`${s}`), setTimeout(() => p(), ee));
                  },
                  children: "MAKE ADMIN",
                }),
            },
          ],
          d = [
            {
              key: "manager_account_id",
              displayName: "Manager Account ID",
              formatFunction: (s) => o(s),
            },
            { key: "manager_email", displayName: "Manager Email" },
          ],
          Xe = [
            {
              key: "color_primary",
              displayName: "Color (Primary)",
              formatFunction: (s = "") =>
                (0, e.jsx)(x.Fragment, {
                  children:
                    s &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("span", {
                          className: D().ColorBox,
                          style: { backgroundColor: s },
                        }),
                        "\xA0",
                        s,
                      ],
                    }),
                }),
            },
            {
              key: "color_secondary",
              displayName: "Color (Secondary)",
              formatFunction: (s = "") =>
                (0, e.jsx)(x.Fragment, {
                  children:
                    s &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("span", {
                          className: D().ColorBox,
                          style: { backgroundColor: s },
                        }),
                        "\xA0",
                        s,
                      ],
                    }),
                }),
            },
            {
              key: "url_logo",
              displayName: "DPC Logo",
              formatFunction: (s = "", p = 0) =>
                (0, e.jsx)(x.Fragment, {
                  children:
                    s &&
                    p &&
                    (0, e.jsx)("div", {
                      className: D().DPCLogoContainer,
                      children: (0, e.jsx)("img", {
                        onError: ({ currentTarget: f }) => {
                          ((f.onerror = null),
                            (f.src = `${I.r.IMG_URL}teams_override/team_unknown_web.png`));
                        },
                        src: `${I.r.CDN_URL}apps/dota2/teamlogos/${p}.png`,
                      }),
                    }),
                }),
            },
          ],
          z = [
            {
              key: "ugc_logo_url",
              displayName: "Logo",
              formatFunction: (s = "") =>
                (0, e.jsx)(x.Fragment, {
                  children: (0, e.jsx)("div", {
                    className: D().URLLogoContainer,
                    children: s && (0, e.jsx)("img", { src: s }),
                  }),
                }),
            },
            {
              key: "ugc_base_logo_url",
              displayName: "Base Logo",
              formatFunction: (s = "") =>
                (0, e.jsx)(x.Fragment, {
                  children: (0, e.jsx)("div", {
                    className: D().URLLogoContainer,
                    children: s && (0, e.jsx)("img", { src: s }),
                  }),
                }),
            },
            {
              key: "ugc_banner_logo_url",
              displayName: "Banner Logo",
              formatFunction: (s = "") =>
                (0, e.jsx)(x.Fragment, {
                  children: (0, e.jsx)("div", {
                    className: D().URLLogoContainer,
                    children: s && (0, e.jsx)("img", { src: s }),
                  }),
                }),
            },
            {
              key: "ugc_sponsor_logo_url",
              displayName: "Sponsor Logo",
              formatFunction: (s = "") =>
                (0, e.jsx)(x.Fragment, {
                  children: (0, e.jsx)("div", {
                    className: D().URLLogoContainer,
                    children: s && (0, e.jsx)("img", { src: s }),
                  }),
                }),
            },
          ],
          i = [
            {
              key: "account_id",
              displayName: "Account ID",
              formatFunction: (s) => o(s),
            },
            {
              key: "timestamp",
              displayName: "Timestamp",
              formatFunction: (s) =>
                s
                  ? new Date(s * 1e3).toLocaleString(
                      Ne.pf.GetPreferredLocales(),
                    )
                  : "",
            },
            {
              key: "action",
              displayName: "Action Enum",
              formatFunction: (s) => `${Qe[s]} (${s})`,
            },
            {
              key: "action",
              displayName: "Audit Action",
              formatFunction: (s, p = "", f = "") =>
                Fe.find((k) => k.enum === s).formatFunction.call(null, p, f),
            },
          ],
          h = [
            { key: "workshop_account_id", displayName: "Workshop Account ID" },
            {
              key: "comment",
              displayName: "Comment",
              formatFunction: (s) => (s ? `"${s}"` : ""),
            },
            {
              key: "comment_timestamp",
              displayName: "Last Comment",
              formatFunction: (s) =>
                s
                  ? new Date(s * 1e3).toLocaleString(
                      Ne.pf.GetPreferredLocales(),
                    )
                  : "",
            },
            { key: "spray_count", displayName: "Sprays" },
            { key: "wallpaper_count", displayName: "Wallpapers" },
            { key: "emoticon_count", displayName: "Emoticons" },
            { key: "voiceline_count", displayName: "Voicelines" },
            {
              key: "timestamp",
              displayName: "Last Changed",
              formatFunction: (s) =>
                s
                  ? new Date(s * 1e3).toLocaleString(
                      Ne.pf.GetPreferredLocales(),
                    )
                  : "",
            },
          ],
          S = [
            { key: "series_id", displayName: "Series ID" },
            {
              key: "actual_time",
              displayName: "Series Date & Time",
              formatFunction: (s) =>
                s
                  ? new Date(s * 1e3).toLocaleString(
                      Ne.pf.GetPreferredLocales(),
                    )
                  : "",
            },
            {
              key: "outcome",
              displayName: "Outcome",
              formatFunction: (s) =>
                (0, e.jsx)("div", {
                  style: {
                    color: `${s === "Win" ? T : s === "Loss" ? ne : s === "Tie" ? Ee : Ve}`,
                  },
                  children: s,
                }),
            },
            { key: "score", displayName: "Score" },
            {
              key: "opponent_team_id",
              displayName: "Opponent",
              formatFunction: (s, p) =>
                (0, e.jsxs)(x.Fragment, { children: [`${p} ( `, Je(s), " )"] }),
            },
            {
              key: "matches",
              displayName: "Match IDs",
              formatFunction: (s) => {
                const p = [];
                return (
                  p.push(
                    s.map((f) => [
                      qe(f.match_id),
                      (0, e.jsx)(
                        "span",
                        { children: "\u2003" },
                        `${f.match_id}-tab`,
                      ),
                    ]),
                  ),
                  p
                );
              },
            },
          ],
          E = (s) => {
            const f = (0, j.g)().id,
              [L, k] = (0, x.useState)([]),
              [H, F] = (0, x.useState)(!1),
              [te, Y] = (0, x.useState)(!1),
              [b, U] = (0, x.useState)({}),
              [J, ae] = (0, x.useState)(!1),
              [se, ce] = (0, x.useState)(!1),
              [Z, v] = (0, x.useState)({}),
              [_, W] = (0, x.useState)([]),
              [Ie, Ke] = (0, x.useState)(!0),
              [ve, Q] = (0, x.useState)([]),
              he = ({ strTeamId: t }) => {
                const [u, O] = (0, x.useState)(""),
                  [g, P] = (0, x.useState)(""),
                  [K, $] = (0, x.useState)(""),
                  [B, q] = (0, x.useState)(!1),
                  Me = async (V) => {
                    if ((V.preventDefault(), !u && !g && !K)) return;
                    q(!0);
                    const de = {
                        team_id: t,
                        team_name: u,
                        team_tag: g,
                        team_abbreviation: K,
                      },
                      be = await R().get(we(), { params: de });
                    (ge(), setTimeout(() => q(!1), Ue));
                  };
                return (0, e.jsxs)("form", {
                  onSubmit: Me,
                  children: [
                    (0, e.jsx)("h2", {
                      className: D().Header,
                      children: "Update Team Information",
                    }),
                    (0, e.jsxs)("div", {
                      className: D().EditInfoGrid,
                      children: [
                        (0, e.jsx)("div", { children: "Team Name" }),
                        (0, e.jsx)("input", {
                          className: D().MediumTextField,
                          type: "text",
                          name: "teamName",
                          maxLength: 32,
                          onChange: (V) => O(V.target.value),
                        }),
                        (0, e.jsx)("div", { children: "Tag" }),
                        (0, e.jsx)("input", {
                          className: D().SmallTextField,
                          type: "text",
                          name: "teamTag",
                          maxLength: 8,
                          onChange: (V) => P(V.target.value),
                        }),
                        (0, e.jsx)("div", { children: "Abbreviation" }),
                        (0, e.jsx)("input", {
                          className: D().SmallTextField,
                          type: "text",
                          name: "teamAbbreviation",
                          maxLength: 4,
                          onChange: (V) => $(V.target.value),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)("button", {
                            className: D().SubmitButton,
                            disabled: B,
                            children: B ? "Updating..." : "Update",
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              },
              re = ({ strTeamId: t }) => {
                const [u, O] = (0, x.useState)(""),
                  [g, P] = (0, x.useState)(!1),
                  K = async ($) => {
                    if (($.preventDefault(), !u)) return;
                    P(!0);
                    const B = { team_id: t, account_id: u },
                      q = await R().get(De(), { params: B });
                    (ge(), setTimeout(() => P(!1), Ue));
                  };
                return (0, e.jsxs)("form", {
                  onSubmit: K,
                  children: [
                    (0, e.jsx)("h2", {
                      className: D().Header,
                      children: "Add Team Member",
                    }),
                    (0, e.jsxs)("div", {
                      className: D().EditInfoGrid,
                      children: [
                        (0, e.jsx)("div", { children: "Account ID" }),
                        (0, e.jsx)("input", {
                          className: D().MediumTextField,
                          type: "text",
                          name: "accountId",
                          maxLength: 20,
                          onChange: ($) => O($.target.value),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)("button", {
                            className: D().SubmitButton,
                            disabled: g,
                            children: g ? "Adding..." : "Add Account",
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              },
              Oe = ({ strTeamId: t }) => {
                const [u, O] = (0, x.useState)(""),
                  [g, P] = (0, x.useState)(""),
                  [K, $] = (0, x.useState)(!1),
                  B = async (q) => {
                    if ((q.preventDefault(), !u || !g)) return;
                    $(!0);
                    const Me = {
                        admin_account_id: parseInt(u),
                        admin_email: g,
                        registration_period:
                          I.r.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                      },
                      V = await R().post(je(), { params: Me });
                    (pe(), setTimeout(() => $(!1), Ue));
                  };
                return (0, e.jsxs)("form", {
                  onSubmit: B,
                  children: [
                    (0, e.jsx)("h2", {
                      className: D().Header,
                      children: "Update Manager Email",
                    }),
                    (0, e.jsxs)("div", {
                      className: D().EditInfoGrid,
                      children: [
                        (0, e.jsx)("div", { children: "Manager Account ID" }),
                        (0, e.jsx)("input", {
                          className: D().MediumTextField,
                          type: "text",
                          name: "adminAccountId",
                          maxLength: 20,
                          onChange: (q) => O(q.target.value),
                        }),
                        (0, e.jsx)("div", { children: "Manager Email" }),
                        (0, e.jsx)("input", {
                          className: D().MediumTextField,
                          type: "email",
                          name: "adminEmail",
                          maxLength: 255,
                          onChange: (q) => P(q.target.value),
                        }),
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)("button", {
                            className: D().SubmitButton,
                            disabled: K,
                            children: K
                              ? "Updating..."
                              : "Update Manager Email",
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              };
            (0, x.useEffect)(() => {
              async function t() {
                if (!I.r.DOTA_TEAM_FAN_UPLOAD_CONTENT_SEASON) return;
                const u = { season: I.r.DOTA_TEAM_FAN_UPLOAD_CONTENT_SEASON },
                  g =
                    (
                      await R().get(
                        I.r.BASE_URL +
                          "webapi/IDOTA2Teams/GetFanContentStatus/v0001",
                        { params: u },
                      )
                    )?.data?.team_status_list || [];
                if (g.length && f) {
                  const P = g.find((K) => K.team_id.toString() == f);
                  P && v(P);
                }
              }
              try {
                t();
              } catch {
                console.log("Could not fetch fan content status.");
              }
            }, [f]);
            async function pe() {
              if (
                !I.r.DOTA_APP_ID ||
                !I.r.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD
              )
                return;
              const t = {
                  appid: I.r.DOTA_APP_ID,
                  registration_period:
                    I.r.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                },
                O =
                  (
                    await R().get(
                      I.r.BASE_URL +
                        "webapi/IDOTA2Teams/GetRegisteredTeams/v001",
                      { params: t },
                    )
                  )?.data?.result?.teams || [];
              (O.length && k(O), F(!0));
            }
            (0, x.useEffect)(() => {
              try {
                pe();
              } catch {
                (console.log("Could not fetch registered teams."), Y(!0));
              }
            }, []);
            async function ge() {
              if (
                !I.r.DOTA_APP_ID ||
                !I.r.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD ||
                !f
              )
                return;
              const t = { appid: I.r.DOTA_APP_ID, u: r, team_id: f },
                u = await R().get(
                  I.r.BASE_URL + "webapi/IDOTA2Teams/GetSingleTeamInfo/v001",
                  { params: t },
                ),
                O = u?.data,
                g = O?.members || [];
              try {
                const P = await R().get(
                  I.r.BASE_URL + "teams/getugcfilelinks/",
                  { params: { team_id: f } },
                );
                (P.data && Object.assign(O, P.data),
                  await Promise.all(
                    g.map(async ($, B) => {
                      const q = await R().get(
                        I.r.BASE_URL +
                          "webapi/IDOTA2Fantasy/GetPlayerInfo/v0001",
                        { params: { account_id: $.account_id } },
                      );
                      ((g[B].is_pro = !!q?.data?.is_pro),
                        (g[B].name = q?.data?.name || ""));
                      const Me = await R().get(
                        I.r.BASE_URL + "teams/getpersonaname/",
                        { params: { account_id: $.account_id } },
                      );
                      g[B].persona_name = Me?.data || "";
                    }),
                  ));
                const K = ($, B) =>
                  $.is_pro && !B.is_pro
                    ? -1
                    : !$.is_pro && B.is_pro
                      ? 1
                      : $.admin && !B.admin
                        ? -1
                        : (!$.admin && B.admin) ||
                            $?.pro_name.toLowerCase() >
                              B?.pro_name.toLowerCase()
                          ? 1
                          : $?.pro_name.toLowerCase() <
                              B?.pro_name.toLowerCase()
                            ? -1
                            : 0;
                g.sort(K);
              } catch {
                console.log("Error fetching individual player info.");
              }
              (u && u.data && U(O), ae(!0));
            }
            ((0, x.useEffect)(() => {
              try {
                ge();
              } catch {
                (console.log("Could not fetch single team info."), ce(!0));
              }
            }, [f]),
              (0, x.useEffect)(() => {
                async function t() {
                  if (
                    !I.r.DOTA_APP_ID ||
                    !I.r.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD ||
                    !f
                  )
                    return;
                  const u = {
                      team_id: f,
                      registration_period:
                        I.r.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                    },
                    O = await R().get(
                      I.r.BASE_URL +
                        "webapi/IDOTA2Teams/GetTeamAuditInformation/v001",
                      { params: u },
                    ),
                    g = O?.data,
                    P = g?.actions || [];
                  (await Promise.all(
                    P.map(async (K) => {
                      if (K.action === 9 && K.account_id) {
                        const $ = await R().get(
                          I.r.BASE_URL + "teams/getpersonaname/",
                          { params: { account_id: K.account_id } },
                        );
                        K.target_manager_name = $?.data || "";
                      }
                    }),
                  ),
                    O && O.data && g.actions && Q(g.actions));
                }
                try {
                  t();
                } catch {
                  (console.log("Could not fetch single team info."), ce(!0));
                }
              }, [f]),
              (0, x.useEffect)(() => {
                let t;
                try {
                  t = JSON.parse(I.r.DPC_DATA).events;
                } catch {}
                if (!t) return;
                t = t.filter(
                  (g) =>
                    g.registration_period ===
                    I.r.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                );
                let u = [];
                u.push(...ue);
                for (let g of t) {
                  const P = g.leagues.map((K) => K.league_id);
                  u.push(...P);
                }
                (u.sort().reverse(),
                  (u = u.filter((g, P, K) => K.indexOf(g) == P)),
                  u.length > Te && (u = u.slice(u.length - Te)));
                async function O() {
                  if (!u.length) return;
                  const g = { league_ids: u.join(",") },
                    $ = (
                      await R().get(
                        I.r.BASE_URL +
                          "webapi/IDOTA2League/GetLeaguesData/v001",
                        { params: g },
                      )
                    )?.data?.leagues,
                    B = [];
                  for (let V of $)
                    for (let de of V.node_groups)
                      for (let be of de.node_groups)
                        for (let M of be.nodes)
                          M.team_id_1 &&
                            M.team_id_2 &&
                            (M.team_id_1 == f || M.team_id_2 == f) &&
                            ((M.league_name =
                              V.info.name + ` (${V.info.league_id})`),
                            M.team_id_1 == f
                              ? ((M.opponent_team_id = M.team_id_2),
                                M.team_1_wins > M.team_2_wins
                                  ? (M.outcome = "Win")
                                  : M.team_1_wins === M.team_2_wins
                                    ? (M.outcome = "Tie")
                                    : (M.outcome = "Loss"),
                                (M.score = `${M.team_1_wins} - ${M.team_2_wins}`))
                              : ((M.opponent_team_id = M.team_id_1),
                                M.team_2_wins > M.team_1_wins
                                  ? (M.outcome = "Win")
                                  : M.team_2_wins === M.team_1_wins
                                    ? (M.outcome = "Tie")
                                    : (M.outcome = "Loss"),
                                (M.score = `${M.team_2_wins} - ${M.team_1_wins}`)),
                            M.team_1_wins === 0 &&
                              M.team_2_wins === 0 &&
                              M.actual_time &&
                              new Date().getTime() < M.actual_time * 1e3 &&
                              (M.outcome = "Upcoming"),
                            B.push(M));
                  const q = (V, de) =>
                    V.actual_time > de.actual_time
                      ? -1
                      : V.actual_time < de.actual_time
                        ? 1
                        : 0;
                  B.sort(q);
                  const Me = (V, de) =>
                    V.reduce(
                      (be, M) => ({
                        ...be,
                        [M[de]]: [...(be[M[de]] || []), M],
                      }),
                      {},
                    );
                  B.length && W(Me(B, "league_name"));
                }
                try {
                  O();
                } catch {
                  console.log("Could not fetch leagues data.");
                }
              }, [f]));
            const Pe = L.find((t) => t.team_id == f) || {};
            let n;
            if (
              ((!H || !J) &&
                (n = (0, e.jsx)("div", { children: "Loading..." })),
              H &&
                (L.length == 0 || te) &&
                (n = (0, e.jsx)("div", {
                  children: "Error loading registered teams...",
                })),
              J &&
                (Object.keys(b).length == 0 || se) &&
                (n = (0, e.jsx)("div", {
                  children: `Error loading single team info for teamId ${f} `,
                })),
              n)
            )
              return (0, e.jsxs)("div", {
                className: D().TeamDetails,
                children: [
                  (0, e.jsx)(Ge.A, { bOverlapping: !1 }),
                  (0, e.jsx)(oe.mg, {
                    children: (0, e.jsx)("title", {
                      children: "Dota 2 - Team Details",
                    }),
                  }),
                  (0, e.jsx)(Ye.A, {}),
                  (0, e.jsx)("div", {
                    className: D().ContentFrame,
                    children: n,
                  }),
                  (0, e.jsx)(He.K, {}),
                ],
              });
            const c = b.members || [];
            c.forEach((t) => {
              ((t.kick_link = `${Se()}?u=${r}&appid=${I.r.DOTA_APP_ID}&team_id=${f}&account_id=${t.account_id}`),
                (t.make_admin_link = t.admin
                  ? ""
                  : `${$e()}?u=${r}&appid=${I.r.DOTA_APP_ID}&team_id=${f}&account_id=${t.account_id}`));
            });
            const m = () => {
                const t = [];
                return (
                  Object.keys(_).forEach((u, O) => {
                    (t.push(
                      (0, e.jsx)(
                        "h3",
                        {
                          style: { gridColumn: `span ${S.length}` },
                          children: (0, e.jsx)("b", { children: u }),
                        },
                        `league-name-row-${O}`,
                      ),
                    ),
                      t.push(
                        S.map((g) =>
                          (0, e.jsx)(
                            "div",
                            {
                              children: (0, e.jsx)("b", {
                                children: g.displayName || g.key,
                              }),
                            },
                            `${g.key}-${g.displayName}-matches-grid-header-league-${O}`,
                          ),
                        ),
                      ));
                    for (let g of _[u])
                      t.push(
                        S.map((P) =>
                          (0, e.jsx)(
                            "div",
                            {
                              children: P.formatFunction
                                ? P.formatFunction.call(
                                    null,
                                    g[P.key],
                                    l(g.opponent_team_id),
                                  )
                                : JSON.stringify(
                                    g[P.key] || "",
                                    null,
                                    2,
                                  ).replace(/['"]+/g, ""),
                            },
                            `${P.key}-${P.displayName}-${g.series_id}`,
                          ),
                        ),
                      );
                    t.push((0, e.jsx)("br", {}));
                  }),
                  t
                );
              },
              l = (t) => {
                const u = L.find((O) => O.team_id == t);
                return u ? u.team_name : "";
              };
            return (0, e.jsxs)("div", {
              className: D().TeamDetails,
              children: [
                (0, e.jsx)(Ge.A, { bOverlapping: !1 }),
                (0, e.jsx)(oe.mg, {
                  children: (0, e.jsx)("title", {
                    children: "Dota 2 - Team Details",
                  }),
                }),
                (0, e.jsx)(Ye.A, {}),
                (0, e.jsxs)("div", {
                  className: D().ContentFrame,
                  children: [
                    (0, e.jsx)("h1", {
                      className: D().Header,
                      children: `Team Details for ${b?.name} (${b.team_id})`,
                    }),
                    (0, e.jsxs)("div", {
                      className: D().MiscInfoGrid,
                      children: [
                        ie.map((t) =>
                          (0, e.jsxs)(
                            x.Fragment,
                            {
                              children: [
                                (0, e.jsx)("div", {
                                  children: t.displayName || t.key,
                                }),
                                (0, e.jsx)("div", {
                                  children: t.formatFunction
                                    ? t.formatFunction.call(null, b[t.key])
                                    : JSON.stringify(
                                        b[t.key] || "",
                                        null,
                                        2,
                                      ).replace(/['"]+/g, ""),
                                }),
                              ],
                            },
                            `${t.key}-misc-row`,
                          ),
                        ),
                        !Ie &&
                          (0, e.jsxs)(x.Fragment, {
                            children: [
                              (0, e.jsx)("div", {
                                className: D().Link,
                                onClick: () => Ke(!0),
                                children: "Update Info / Add Member",
                              }),
                              (0, e.jsx)("div", {}),
                            ],
                          }),
                      ],
                    }),
                    Ie &&
                      (0, e.jsxs)(x.Fragment, {
                        children: [
                          (0, e.jsx)("div", { className: D().SmoothLine }),
                          (0, e.jsx)(he, { strTeamId: f }),
                          (0, e.jsx)("div", { className: D().SmoothLine }),
                          (0, e.jsx)(re, { strTeamId: f }),
                        ],
                      }),
                    (0, e.jsx)("div", { className: D().SmoothLine }),
                    (0, e.jsx)("h2", {
                      className: D().Header,
                      children: "Members",
                    }),
                    (0, e.jsxs)("div", {
                      className: D().MembersGrid,
                      style: {
                        gridTemplateColumns: `250px repeat(${Be.length - 1}, auto)`,
                      },
                      children: [
                        (0, e.jsx)(x.Fragment, {
                          children: Be.map((t) =>
                            (0, e.jsx)(
                              "div",
                              {
                                children: (0, e.jsx)("b", {
                                  children: t.displayName || t.key,
                                }),
                              },
                              `${t.key}-members-grid-header}`,
                            ),
                          ),
                        }),
                        (0, e.jsxs)(x.Fragment, {
                          children: [
                            !!c.length &&
                              c.map((t) =>
                                Be.map((u) =>
                                  (0, e.jsx)(
                                    "div",
                                    {
                                      children: u.formatFunction
                                        ? u.formatFunction.call(
                                            null,
                                            t[u.key],
                                            ge,
                                          )
                                        : JSON.stringify(
                                            t[u.key] || "",
                                            null,
                                            2,
                                          ).replace(/['"]+/g, ""),
                                    },
                                    `${u.key}-member-row-${t.account_id}`,
                                  ),
                                ),
                              ),
                            !c.length &&
                              (0, e.jsx)("div", {
                                children: "No team members.",
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsxs)("div", {
                      className: D().ManagerGrid,
                      style: {
                        gridTemplateColumns: `250px repeat(${d.length - 1}, auto)`,
                      },
                      children: [
                        (0, e.jsx)(x.Fragment, {
                          children: d.map((t) =>
                            (0, e.jsx)(
                              "div",
                              {
                                children: (0, e.jsx)("b", {
                                  children: t.displayName || t.key,
                                }),
                              },
                              `${t.key}-manager-grid-header}`,
                            ),
                          ),
                        }),
                        (0, e.jsxs)(x.Fragment, {
                          children: [
                            d.map((t) =>
                              (0, e.jsx)(
                                x.Fragment,
                                {
                                  children: (0, e.jsx)("div", {
                                    children: t.formatFunction
                                      ? t.formatFunction.call(null, Pe[t.key])
                                      : JSON.stringify(
                                          Pe[t.key] || "",
                                          null,
                                          2,
                                        ).replace(/['"]+/g, ""),
                                  }),
                                },
                                `${t.key}-manager-row`,
                              ),
                            ),
                            !d.length &&
                              (0, e.jsx)("div", { children: "No manager." }),
                          ],
                        }),
                      ],
                    }),
                    Ie &&
                      (0, e.jsxs)(x.Fragment, {
                        children: [
                          (0, e.jsx)("div", { className: D().SmoothLine }),
                          (0, e.jsx)(Oe, { strTeamId: f }),
                        ],
                      }),
                    (0, e.jsx)("div", { className: D().SmoothLine }),
                    (0, e.jsx)("h2", {
                      className: D().Header,
                      children: "Logos & Colors",
                    }),
                    (0, e.jsx)("div", {
                      className: D().LogoAndColorsGrid,
                      children: Xe.map((t) =>
                        (0, e.jsxs)(
                          x.Fragment,
                          {
                            children: [
                              (0, e.jsx)("div", {
                                children: t.displayName || t.key,
                              }),
                              (0, e.jsx)("div", {
                                children: t.formatFunction
                                  ? t.formatFunction.call(
                                      null,
                                      b[t.key],
                                      b.team_id,
                                    )
                                  : JSON.stringify(
                                      b[t.key] || "",
                                      null,
                                      2,
                                    ).replace(/['"]+/g, ""),
                              }),
                            ],
                          },
                          `${t.key}-logo-colors-row`,
                        ),
                      ),
                    }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsxs)("div", {
                      className: D().UGCLogosGrid,
                      style: {
                        gridTemplateColumns: `repeat(${z.length}, auto)`,
                      },
                      children: [
                        (0, e.jsx)(x.Fragment, {
                          children: z.map((t) =>
                            (0, e.jsx)(
                              "div",
                              {
                                children: (0, e.jsx)("b", {
                                  children: t.displayName || t.key,
                                }),
                              },
                              `${t.key}-ugc-grid-header}`,
                            ),
                          ),
                        }),
                        (0, e.jsx)(x.Fragment, {
                          children: z.map((t) =>
                            (0, e.jsx)(
                              "div",
                              {
                                children: t.formatFunction
                                  ? t.formatFunction.call(null, b[t.key])
                                  : JSON.stringify(
                                      b[t.key] || "",
                                      null,
                                      2,
                                    ).replace(/['"]+/g, ""),
                              },
                              `${t.key}-ugc-logo`,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", { className: D().SmoothLine }),
                    (0, e.jsx)("h2", {
                      className: D().Header,
                      children: "Audit Action History",
                    }),
                    (0, e.jsxs)("div", {
                      className: D().AuditActionsGrid,
                      style: {
                        gridTemplateColumns: `repeat(${i.length}, auto)`,
                      },
                      children: [
                        (0, e.jsx)(x.Fragment, {
                          children: i.map((t) =>
                            (0, e.jsx)(
                              "div",
                              {
                                children: (0, e.jsx)("b", {
                                  children: t.displayName || t.key,
                                }),
                              },
                              `${t.key}-${t.displayName}-audit-action-grid-header`,
                            ),
                          ),
                        }),
                        (0, e.jsxs)(x.Fragment, {
                          children: [
                            !!ve.length &&
                              ve.map((t) =>
                                i.map((u) =>
                                  (0, e.jsx)(
                                    "div",
                                    {
                                      children: u.formatFunction
                                        ? u.formatFunction.call(
                                            null,
                                            t[u.key],
                                            t.player_name,
                                            t.target_manager_name,
                                          )
                                        : JSON.stringify(
                                            t[u.key] || "",
                                            null,
                                            2,
                                          ).replace(/['"]+/g, ""),
                                    },
                                    `${u.key}-${u.displayName}-${t.timestamp}`,
                                  ),
                                ),
                              ),
                            !ve.length &&
                              (0, e.jsx)("div", {
                                children: "No audit actions.",
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", { className: D().SmoothLine }),
                    (0, e.jsx)("h2", {
                      className: D().Header,
                      children: "Supporters Club / Workshop Status",
                    }),
                    (0, e.jsx)("div", {
                      className: D().WorkshopStatusGrid,
                      children: h.map((t) =>
                        (0, e.jsxs)(
                          x.Fragment,
                          {
                            children: [
                              (0, e.jsx)("div", {
                                children: t.displayName || t.key,
                              }),
                              (0, e.jsx)("div", {
                                children: t.formatFunction
                                  ? t.formatFunction.call(null, Z[t.key])
                                  : JSON.stringify(
                                      Z[t.key] || "",
                                      null,
                                      2,
                                    ).replace(/['"]+/g, ""),
                              }),
                            ],
                          },
                          `${t.key}-workshop-status-row`,
                        ),
                      ),
                    }),
                    (0, e.jsx)("div", { className: D().SmoothLine }),
                    (0, e.jsx)("h2", {
                      className: (0, w.A)(D().Header, D().SeasonMatchHeader),
                      children: `Season ${I.r.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD} Matches`,
                    }),
                    (0, e.jsx)("div", {
                      className: D().MatchesGrid,
                      style: {
                        gridTemplateColumns: `repeat(${S.length}, auto)`,
                      },
                      children: (0, e.jsxs)(x.Fragment, {
                        children: [
                          m(),
                          !Object.keys(_).length &&
                            (0, e.jsxs)("div", {
                              children: [
                                (0, e.jsx)("br", {}),
                                "No league matches.",
                              ],
                            }),
                        ],
                      }),
                    }),
                    (0, e.jsx)("br", {}),
                  ],
                }),
                (0, e.jsx)(He.K, {}),
              ],
            });
          };
        class C extends x.Component {
          render() {
            return (0, e.jsx)(E, {});
          }
        }
      },
      2466: (Re) => {
        Re.exports = {
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
      40753: (Re) => {
        Re.exports = {
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
      9784: (Re) => {
        Re.exports = {
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
