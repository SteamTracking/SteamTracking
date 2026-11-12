import { _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~25a6634263.js";
import {
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
} from "./chunk~1fa4b8f2ff.js";
import { _, _, _ } from "./chunk~44f252525d.js";
import { _, _ } from "./chunk~9fc22a4638.js";
import { _ } from "./chunk~c12081e677.js";
import { _ } from "./chunk~8681f5c764.js";
import { _ } from "./chunk~f4e4ed5c17.js";
import { _ } from "./chunk~af36c62e9f.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~58c6c52d52.js";
import { _, _, _ } from "./chunk~6110f63e8e.js";
import { _ } from "./chunk~f8f9713b0c.js";
import {
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
} from "./chunk~209a3e6c2e.js";
import { _ } from "./chunk~fb7b5d9c48.js";
import { _ } from "./chunk~ea4856d3e2.js";
var _ = _(_()),
  _ = _();
_();
var _ = new Map();
(_.set(2, 5), _.set(1, 5), _.set(4, 1), _.set(3, 4));
function _(_) {
  let _ = null;
  switch (_) {
    case 5:
      _ = `#ContentDescriptor_GeneralMatureContent`;
      break;
    case 2:
      _ = `#ContentDescriptor_FrequentViolenceOrGore`;
      break;
    case 1:
      _ = `#ContentDescriptor_NudityOrSexualContent`;
      break;
    case 4:
      _ = `#ContentDescriptor_GratuitousNudityOrSexualContent`;
      break;
    case 3:
      _ = `#ContentDescriptor_AdultOnlySexualContent`;
      break;
    default:
      throw `Invalid content descriptor.`;
  }
  return _(_);
}
function _(_) {
  return (0, _.jsx)(_, {
    message: (_) => !_() || _(`#Generel_Discard_Warning`),
  });
}
var _ = `ZPIxJReBVKs-`,
  _ = `BHEB4gSf2iA-`,
  _ = `uJqFsR6AGKY-`,
  _ = `_1XxT1huIGzw-`,
  _ = `_0HQOfj-VTpw-`,
  _ = `ype73CNOWgo-`,
  _ = `nBNHjmf1xx4-`,
  _ = `AplRfMZt19E-`,
  _ = `TFTDRxyqyHM-`,
  _ = `vjWRJVdEwSo-`,
  _ = `uILl-W5VJqw-`,
  _ = _.memo(function () {
    let [_, _] = _.useState(),
      [_, _] = _.useState(!1),
      [_, _] = _.useState(!1),
      [_, _] = _.useState(!1);
    _.useEffect(() => {
      _().then((_) => {
        (_(_.rgCategories), _(_.bHasUnpublishedChanges), _(!0));
      });
    }, []);
    let _ = _.useCallback((_) => {
      (_(_), _(!0));
    }, []);
    return _
      ? (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: `Content Hub Categories`,
            }),
            (0, _.jsx)(`hr`, {
              className: _,
            }),
            (0, _.jsxs)(`p`, {
              children: [
                `This page lets you review and edit existing categories. Click on their titles.  At the bottom there is controls to create a new category. To see the hubs performance related to making a theme sale `,
                (0, _.jsx)(`a`, {
                  href: `${_.PARTNER_BASE_URL}promotion/planning/themes`,
                  children: `here.`,
                }),
              ],
            }),
            (0, _.jsx)(`a`, {
              href: `https://grafana.valve.org/steam/d/RoUHA6bWk/tag-hubs?orgId=2&refresh=5m`,
              target: `_blank`,
              children: `Content Hub Graphana Stats Page`,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: `Categories`,
            }),
            _ &&
              (0, _.jsx)(`div`, {
                className: `JRkGXgv8PKM-`,
                children: `You have unpublished changes. Click Publish below to publish and make them available to users.`,
              }),
            (0, _.jsx)(_, {
              categories: _,
              onUpdate: _,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  onClick: () =>
                    _(
                      (0, _.jsx)(_, {
                        categories: _,
                        onSave: () => {
                          (_(!1), _(!0));
                        },
                      }),
                      window,
                    ),
                  children: _
                    ? (0, _.jsx)(_.Fragment, {
                        children: `Save`,
                      })
                    : (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(_, {}), `Saved`],
                      }),
                }),
                (0, _.jsx)(_, {
                  onClick: () =>
                    _(
                      (0, _.jsx)(_, {
                        onPublish: () => _(!1),
                      }),
                      window,
                    ),
                  children: `Publish`,
                }),
              ],
            }),
          ],
        })
      : (0, _.jsx)(_, {
          size: `medium`,
          position: `center`,
        });
  });
function _(_) {
  let { categories: _, onUpdate: _ } = _,
    { rgTags: _ } = _(),
    [_] = _(`edit`);
  if (!_)
    return (0, _.jsx)(`div`, {
      children: `No categories defined.`,
    });
  let _ = () => {
      _((_) => {
        let _ = 0;
        for (let _ of _) _._ && Number(_._) > _ && (_ = Number(_._));
        return [
          ..._,
          {
            handle: `new_category_` + _.length,
            _: ++_,
          },
        ];
      });
    },
    _ = (_) => {
      _((_) => _.filter((_, _) => _ != _));
    },
    _ = (_) => {
      _((_) => _.map((_) => (_._ === _._ ? _ : _)));
    };
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        bDisabled: !0,
        items: _,
        onDelete: _,
        render: (_) =>
          (0, _.jsx)(
            _,
            {
              item: _,
              rgTags: _,
              fnSaveCategory: _,
              bOpenEditor: _?.toLowerCase() == _.handle,
            },
            _._,
          ),
      }),
      (0, _.jsx)(_, {
        onClick: _,
        children: `Add Category`,
      }),
    ],
  });
}
function _(_) {
  let { rgTags: _, replacesTags: _ } = _,
    _ = (0, _.useMemo)(
      () =>
        _?.map(
          (_) =>
            (_?.find((_) => _.tagid === _._)?.name || `Unknown tag`) +
            ` (` +
            String(_._) +
            `)`,
        ).join(`, `),
      [_, _],
    );
  return _
    ? (0, _.jsx)(`span`, {
        children: `Replaces tags: ` + _,
      })
    : (0, _.jsx)(`span`, {});
}
function _(_) {
  let { item: _, rgTags: _, fnSaveCategory: _, bOpenEditor: _ } = _,
    [_, _, _] = _(_),
    _ = (_, _) => {
      (_.preventDefault(), _.stopPropagation(), _());
    };
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`a`, {
          onClick: (_) => _(_, _),
          children: [
            (0, _.jsx)(`b`, {
              children: _.loc_token ? _(_.loc_token) : ``,
            }),
            _.loc_token ? ` (` + _.handle + `)` : _.handle,
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children:
            _.type === `tagids`
              ? `Tags`
              : _.type === `category`
                ? `Category`
                : _.type === `contenthub`
                  ? `Hardcoded Filter`
                  : `Special`,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.exclude_from_search === !0 ? `Excluded from search` : ``,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            rgTags: _,
            replacesTags: _.replaces_tags,
          }),
        }),
        (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsx)(_, {
            category: _,
            fnSaveCategory: _,
            closeModal: _,
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { fnSaveCategory: _, closeModal: _ } = _,
    [_, _] = _.useState(_.category),
    _ = _.useMemo(
      () => [
        {
          data: `tagids`,
          label: `Tag Hub`,
        },
        {
          data: `category`,
          label: `Categories`,
        },
        {
          data: `contenthub`,
          label: `Hardcoded Filter Hub`,
        },
      ],
      [],
    ),
    _ = _.useCallback(
      (_) =>
        _((_) => ({
          ..._,
          content_descriptors: _,
        })),
      [_],
    );
  return (0, _.jsxs)(_, {
    title: `Edit Category (ID ${_._})`,
    bAllowFullSize: !0,
    onCancel: _,
    closeModal: _,
    children: [
      (0, _.jsx)(_, {
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              label: `Handle`,
              tooltip: `This forms the end of the URL. It must be unique`,
              value: _.handle,
              onChange: (_) =>
                _((_) => ({
                  ..._,
                  handle: _.target.value,
                })),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  label: `Loc Token`,
                  tooltip: `Token only needed if we wish to expose this hub to customers`,
                  value: _.loc_token,
                  onChange: (_) =>
                    _((_) => ({
                      ..._,
                      loc_token: _.target.value,
                    })),
                }),
                _.loc_token &&
                  (0, _.jsx)(_, {
                    children: _(_.loc_token),
                  }),
                (0, _.jsx)(_, {
                  label: `Description Loc Token`,
                  tooltip: `A localized token explaining this content hub to customers`,
                  value: _.description_loc_token,
                  onChange: (_) =>
                    _((_) => ({
                      ..._,
                      description_loc_token: _.target.value,
                    })),
                }),
                _.description_loc_token &&
                  (0, _.jsx)(_, {
                    children: _(_.description_loc_token),
                  }),
              ],
            }),
            (0, _.jsx)(_, {
              label: `Use As A Heading `,
              tooltip: `Only used for establishing headings used on the main store drop-down menu`,
              checked: _.heading,
              onChange: (_) =>
                _((_) => ({
                  ..._,
                  heading: _,
                })),
            }),
            (0, _.jsx)(_, {
              label: `Exclude from search `,
              tooltip: `Do not show this category in store search`,
              checked: _.exclude_from_search,
              onChange: (_) =>
                _((_) => ({
                  ..._,
                  exclude_from_search: _,
                })),
            }),
            (0, _.jsx)(_, {
              label: `Search aliases`,
              tooltip: `Comma separated search aliases`,
              value: _.search_alias,
              onChange: (_) =>
                _((_) => ({
                  ..._,
                  search_alias: _.target.value,
                })),
            }),
            (0, _.jsx)(_, {
              label: `Type`,
              rgOptions: _,
              selectedOption: _.type,
              onChange: (_) =>
                _((_) => ({
                  ..._,
                  type: _.data,
                })),
            }),
            (0, _.jsx)(_, {
              rgContentDescriptors: _.content_descriptors ?? [],
              setContentDescriptors: _,
            }),
            (_.type === `tagids` ||
              _.type === `category` ||
              _.type == `contenthub`) &&
              (0, _.jsx)(_, {
                category: _,
                setCategory: _,
              }),
          ],
        }),
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          onCancel: _,
          onOK: () => {
            (_(_), _());
          },
          strOKText: `Save`,
        }),
      }),
    ],
  });
}
var _ = _.memo(function (_) {
  let { rgContentDescriptors: _, setContentDescriptors: _ } = _,
    _ = _.useMemo(() => [2, 1, 4, 3], []);
  return (0, _.jsx)(_, {
    label: `Content Descriptors`,
    children: (0, _.jsx)(_, {
      selectedValue: _,
      onSelectionChange: _,
      options: _,
      getOptionLabel: (_) => _(_),
    }),
  });
});
function _(_) {
  let { category: _, setCategory: _ } = _,
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(0);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (_.type == `tagids` || _.type == `category`) &&
        (0, _.jsx)(`div`, {
          className: `_1XxT1huIGzw-`,
          children: (0, _.jsxs)(`div`, {
            className: `_0HQOfj-VTpw-`,
            children: [
              (0, _.jsx)(_, {
                category: _,
                setCategory: _,
                list: `must`,
                title: `Must have all of these tags`,
              }),
              (0, _.jsx)(_, {
                category: _,
                setCategory: _,
                list: `any`,
                title: `Must have one of these tags`,
              }),
              (0, _.jsx)(_, {
                category: _,
                setCategory: _,
                list: `mustnot`,
                title: `Must not have any of these tags`,
              }),
            ],
          }),
        }),
      (_.type == `tagids` || _.type == `category` || _.type == `contenthub`) &&
        (0, _.jsxs)(`div`, {
          className: `_1XxT1huIGzw-`,
          children: [
            (0, _.jsx)(_, {
              category: _,
              setCategory: _,
              list: `replaces_tags`,
              title: `The following Tags should redirect to this category page`,
            }),
            (0, _.jsx)(`p`, {
              children: `This is only needed if this category is similar in name to an existing tag, such as "Sports" where the category is better than the individual tag.`,
            }),
          ],
        }),
      _
        ? (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                onClick: () => _(_ + 1),
                children: `Refresh Stats`,
              }),
              (0, _.jsx)(_, {
                category: _,
              }),
            ],
          })
        : (0, _.jsx)(
            _,
            {
              checked: _,
              onChange: (_) => _(_),
              label: `Show Category Sale Stats`,
            },
            `info` + _,
          ),
    ],
  });
}
function _(_) {
  let { category: _ } = _,
    _ = _(_.must, _.any, _.mustnot);
  if (!_)
    return (0, _.jsx)(_, {
      string: _(`#Loading`),
      position: `center`,
      size: `medium`,
    });
  let _ = _.total_games > 500 && _.total_games <= 5e3;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        onClick: () => {
          let _ = [];
          (_.push([`AppID`, `Sale Rank`]),
            _.top_games.forEach((_) => {
              _.push([`` + _.appid, `` + _.long_term_sale_rank]);
            }));
          let _ = (_.handle || `top100`).replace(` `, `_`) + `.csv`;
          _.WriteCSVToFile(_, _);
        },
        children: `Download Top 100 Games`,
      }),
      (0, _.jsx)(_, {
        onClick: () => {
          let _ = [];
          (_.push([`AppID`]),
            _.all_appid.forEach((_) => {
              _.push([`` + _]);
            }));
          let _ = (_.handle || `allgames`).replace(` `, `_`) + `.csv`;
          _.WriteCSVToFile(_, _);
        },
        children: `Download All Games`,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              `Summary: `,
              (0, _.jsx)(_, {
                nTotalGames: _.total_games,
              }),
              !!_ &&
                (0, _.jsx)(_, {
                  category: _,
                }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                children: `Top 10 Games non-F2P:`,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _.top_games?.slice(0, 10).map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      info: _,
                      category: _,
                      bSaleSummary: _,
                    },
                    _.appid,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { category: _ } = _,
    _ = _(_.must, _.any, _.mustnot),
    _ = _(_.must, _.any, _.mustnot);
  return (0, _.jsx)(_, {
    saleSummary: _,
    topAppSummary: _,
  });
}
var _ = _.memo(function (_) {
  let { category: _, setCategory: _, list: _, title: _ } = _,
    { rgTags: _, rgCategories: _ } = _(),
    _ = (_) => {
      _((_) => ({
        ..._,
        [_]: _(_[_]),
      }));
    },
    _ =
      _?.map((_) => ({
        value: _.tagid,
        label: `${_.name} (${_.tagid})`,
      })) || [],
    _ =
      _?.map((_) => ({
        value: _.categoryid,
        label: `${_.name} (${_.categoryid})`,
      })) || [];
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        children: _,
      }),
      (0, _.jsx)(_, {
        bDisabled: !0,
        items: _[_] ?? [],
        onDelete: (_) => _((_) => _.filter((_, _) => _ != _)),
        render: (_, _) =>
          _.type === `tagids` || _ === `replaces_tags`
            ? (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    value: _._,
                    onChange: (_) =>
                      _((_) =>
                        _.map((_, _) =>
                          _ == _
                            ? {
                                ..._,
                                _: parseInt(_.target.value),
                              }
                            : _,
                        ),
                      ),
                  }),
                  (0, _.jsx)(_._default, {
                    className: `react-select-container`,
                    classNamePrefix: `react-select`,
                    isSearchable: !0,
                    options: _,
                    value: _.find((_) => _.value === _._),
                    onChange: (_) =>
                      _((_) =>
                        _.map((_, _) =>
                          _ == _
                            ? {
                                ..._,
                                _: _.value,
                              }
                            : _,
                        ),
                      ),
                  }),
                ],
              })
            : _.type === `category`
              ? (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(_._default, {
                    className: `react-select-container`,
                    classNamePrefix: `react-select`,
                    isSearchable: !0,
                    options: _,
                    value: _.find((_) => _.value === _._),
                    onChange: (_) =>
                      _((_) =>
                        _.map((_, _) =>
                          _ == _
                            ? {
                                ..._,
                                _: _.value,
                              }
                            : _,
                        ),
                      ),
                  }),
                })
              : null,
      }),
      (0, _.jsx)(_, {
        onClick: () =>
          _((_) =>
            _
              ? [
                  ..._,
                  {
                    _: 0,
                  },
                ]
              : [
                  {
                    _: 0,
                  },
                ],
          ),
        children: `Add`,
      }),
    ],
  });
});
function _(_) {
  let { categories: _, onSave: _, closeModal: _ } = _,
    [_, _] = _.useState();
  return (
    _.useEffect(() => {
      _(_).then((_) => {
        _ ? _(_.strErrorMsg) : (_(), _ && _());
      });
    }, [_, _, _]),
    (0, _.jsx)(_, {
      strTitle: `Saving`,
      bAlertDialog: !0,
      bDisableBackgroundDismiss: !0,
      bHideCloseIcon: !0,
      closeModal: _,
      children: _
        ? (0, _.jsxs)(`div`, {
            children: [`Error: `, _],
          })
        : (0, _.jsx)(_, {
            size: `medium`,
            position: `center`,
          }),
    })
  );
}
function _(_) {
  let { onPublish: _, closeModal: _ } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState();
  return (
    _.useEffect(() => {
      _ &&
        _().then((_) => {
          _ ? _(_.strErrorMsg) : (_(), _(!1), _ && _());
        });
    }, [_, _, _]),
    (0, _.jsx)(_, {
      strTitle: _ ? `Publishing` : `Really Publish?`,
      strDescription:
        !_ && `Publishing will make your changes immediately visible to users.`,
      bAlertDialog: _,
      bDisableBackgroundDismiss: _,
      bHideCloseIcon: _,
      onOK: () => {
        _ ? _ && _() : _(!0);
      },
      onCancel: () => {
        _ && _();
      },
      children:
        _ &&
        (0, _.jsx)(_.Fragment, {
          children: _
            ? (0, _.jsxs)(`div`, {
                children: [`Error: `, _],
              })
            : (0, _.jsx)(_, {
                size: `medium`,
                position: `center`,
              }),
        }),
    })
  );
}
var _ = {
  ContentHubCategories: () => `/categories/`,
};
function _(_) {
  return (0, _.jsxs)(_, {
    basename: _() + `admin/store/contenthub/`,
    children: [
      (0, _.jsx)(_, {}),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            path: _.ContentHubCategories(),
            component: _,
          }),
          (0, _.jsx)(_, {
            component: _,
          }),
        ],
      }),
    ],
  });
}
export { _ as ContentHubRoutes, _ as default };
