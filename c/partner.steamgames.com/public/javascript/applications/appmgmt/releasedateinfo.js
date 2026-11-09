import { _, _, _, _, _, _ } from "./mobx.esm.js";
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
  _,
} from "./dialogs.js";
import { _ } from "./useQuery.js";
import { _ } from "./reactqueryroot.js";
import { _ } from "./useMutation.js";
import { _ } from "./storeitem.js";
import { _ } from "./imageuploaderpanel.js";
import { _, _ } from "./modals.js";
import { _ } from "./axios.js";
import { _ } from "./throbber.js";
import { _ } from "./timeutils.js";
import { _ } from "./partnereventshareddates.js";
var _ = _(_()),
  _ = `ZqSK587Dwus-`,
  _ = _();
function _(_) {
  let { rgGameProfileColorDefs: _ } = _,
    _ = _.map((_) =>
      (0, _.jsxs)(
        `div`,
        {
          className: `form_row_flex`,
          children: [
            (0, _.jsxs)(`div`, {
              className: `form_label_flex`,
              children: [`*`, _.strProfileColorLabel],
            }),
            (0, _.jsx)(`div`, {
              className: `form_data_flex`,
              children: _(_),
            }),
          ],
        },
        _.strProfileColorKey,
      ),
    );
  return (0, _.jsx)(`div`, {
    className: void 0,
    children: _,
  });
}
function _(_) {
  let _ = _.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
  if (!_) return null;
  let [, _, _, _] = _;
  return `${_},${_},${_}`;
}
function _(_) {
  let { strKVPrepend: _, bWriteAsRGBOnly: _ } = _,
    [_, _] = _.useState(_.strCurrentColor),
    _ = _.useRef(void 0),
    { openColorPicker: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`input`, {
        ref: _,
        type: `text`,
        name: `${_ || `item[profile_colors]`}[${_.strProfileColorKey}]`,
        onChange: () => {
          _(_.current.value);
        },
        placeholder: _ ? `255,255,255` : `rgba(255, 255, 255, .5)`,
        size: 20,
        value: _ ? _(_) : _,
        readOnly: !0,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        style: {
          backgroundColor: `${_}`,
        },
        onClick: (_) => {
          _(_, {
            color: _,
            onChange: _,
            disableAlpha: _,
          });
        },
      }),
    ],
  });
}
var _ = `Y-x6VTwvyUQ-`,
  _ = `APYGegQpzRM-`,
  _ = `I-nhfTKTfqg-`,
  _ = `r7ZD2oPYZGM-`,
  _ = `Kdw5C6-tBOA-`,
  _ = `jBi67BkmuRo-`,
  _ = `wzmr3e5-yEs-`,
  _ = `Qhbtag9BS5U-`,
  _ = `OI7RtmQ-dCM-`,
  _ = `fXmHt8Nowas-`,
  _ = `jcYbkPwNtpc-`,
  _ = `q3kcQ5fKQuU-`,
  _ = `DyupVTK4aFA-`,
  _ = `ozgK83eDmzE-`,
  _ = `YM5o4lQjoAA-`,
  _ = `fpGGKKGNA1Y-`,
  _ = `l-KiBaPMWDY-`,
  _ = _(_()),
  _ = 748,
  _ = 896;
function _(_, _) {
  return _({
    mutationFn: async (_) => {
      let {
          rgEditionsToSave: _,
          rgGraphicsToDelete: _,
          mapGraphicsToUpload: _,
          mapAltText: _,
        } = _,
        _ = new FormData();
      _.append(`sessionid`, _());
      let _ = Math.max(_.length, _.length);
      for (let _ = 0; _ < _; _++)
        _ >= _.length
          ? (_.append(`app[related_items][editions][${_}][packageid]`, ``),
            _.append(`app[related_items][editions][${_}][bundleid]`, ``))
          : _[_].packageid
            ? (_.append(
                `app[related_items][editions][${_}][packageid]`,
                `` + _[_].packageid,
              ),
              _.append(`app[related_items][editions][${_}][bundleid]`, ``))
            : _[_].bundleid
              ? (_.append(`app[related_items][editions][${_}][packageid]`, ``),
                _.append(
                  `app[related_items][editions][${_}][bundleid]`,
                  `` + _[_].bundleid,
                ))
              : console.log(
                  `Tried to save an edition with neither packageid or bundleid.`,
                );
      _.forEach((_, _) => {
        _.append(
          `edition_comparison|edition_comparision|assets|edition_comparison|image|${_}`,
          _,
        );
      });
      for (let _ of _)
        _.append(`app[assets][edition_comparison][image][${_}]`, ``);
      _.forEach((_, _) => {
        _.append(`app[assets][edition_comparison][image_alt_text][${_}]`, _);
      });
      let _ = `${_.PARTNER_BASE_URL}admin/game/quickupdateajax/${_}`;
      return _.default.post(_, _);
    },
  });
}
var _ = class {
  rgSet = new Set();
  constructor(_) {
    for (let _ of _) this.rgSet.add(JSON.stringify(_));
  }
  has(_) {
    let _ = JSON.stringify(_);
    return this.rgSet.has(_);
  }
  add(_) {
    let _ = JSON.stringify(_);
    return (this.rgSet.add(_), this);
  }
  delete(_) {
    let _ = JSON.stringify(_);
    return this.rgSet.delete(_);
  }
  get size() {
    return this.rgSet.size;
  }
  *[Symbol.iterator]() {
    for (let _ of this.rgSet) yield JSON.parse(_);
  }
};
function _(_) {
  let [_, _] = (0, _.useState)(`closed`),
    _ = _.rgEditions,
    [_, _] = (0, _.useState)(new _(_)),
    _ = new Map();
  for (let _ of Object.keys(_.rgEditionsComparisonGraphics))
    _.set(_, _.rgEditionsComparisonGraphics[_]);
  let [_, _] = (0, _.useState)(() => {
      let _ = new Map();
      for (let _ of Object.keys(_.rgEditionsAltText))
        _.set(_, _.rgEditionsAltText[_]);
      return _;
    }),
    [_, _] = (0, _.useState)(_),
    _ = Object.keys(_.rgEditionsComparisonGraphics).length > 0,
    _ = _(_.nItemId, _),
    _ = new Map();
  for (let _ of _.rgCandidates) _.set(_.nId, _);
  let _ = null;
  if (
    _.size > 0 &&
    _.nBasePackageId !== -1 &&
    !_.has({
      packageid: _.nBasePackageId,
    })
  ) {
    let _ = _.rgCandidates.find((_) => _.nId === _.nBasePackageId);
    _ = _(
      `#StoreAdmin_EditEditions_MustIncludeCheapestBasePageError`,
      _?.strName,
      _.nBasePackageId,
    );
  }
  let _ = async () => {
      let _ = new Map();
      _.forEach((_, _) => {
        _ instanceof File && _.set(_, _);
      });
      let _ = [];
      (_.forEach((_, _) => {
        _.has(_) || _.push(_);
      }),
        _.mutate({
          rgEditionsToSave: Array.from(_),
          mapGraphicsToUpload: _,
          mapAltText: _,
          rgGraphicsToDelete: _,
        }),
        _(`alert`));
    },
    _ = () => {
      (_(new _(_)), _(`closed`));
    },
    _ = () => {
      (_(`refreshing`), window.location.reload());
    },
    _ = _.useId();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        active: _ === `editor` || _ === `alert`,
        children: (0, _.jsxs)(_, {
          "aria-labelledby": _,
          closeModal: () => _(`closed`),
          children: [
            _ === `editor` &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsxs)(`div`, {
                    className: `T7v-MZ4cIwI-`,
                    children: [
                      (0, _.jsx)(`h2`, {
                        _: _,
                        children: _(`#StoreAdmin_EditEditions_DialogTitle`),
                      }),
                      _.isPending && (0, _.jsx)(_, {}),
                      !_.isPending &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            _ !== null &&
                              (0, _.jsxs)(`div`, {
                                className: `fpGGKKGNA1Y-`,
                                children: [
                                  (0, _.jsx)(_, {}),
                                  (0, _.jsx)(`div`, {
                                    children: _,
                                  }),
                                ],
                              }),
                            (0, _.jsx)(_, {
                              rgEditions: _,
                              rgCandidates: _.rgCandidates,
                              setEditions: _,
                            }),
                            (0, _.jsx)(`div`, {
                              className: `vIHobvnT6b0-`,
                            }),
                            (0, _.jsx)(_, {
                              mapOriginalImages: _,
                              mapImages: _,
                              setImages: _,
                              mapAltText: _,
                              setAltText: _,
                              bAppHasSteamChinaToolsEnabled:
                                _.bAppHasSteamChinaToolsEnabled,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    className: `O-m7d-IwQ2c-`,
                    children: [
                      (0, _.jsx)(`button`, {
                        className: `btn_green_white_innerfade`,
                        disabled: _ !== null,
                        onClick: _,
                        children: _(`#StoreAdmin_EditEditions_SaveButton`),
                      }),
                      (0, _.jsx)(`button`, {
                        onClick: _,
                        children: _(`#StoreAdmin_EditEditions_CancelButton`),
                      }),
                    ],
                  }),
                  (0, _.jsx)(`p`, {
                    className: `gCn-Vxi9VPw-`,
                    children: _(
                      `#StoreAdmin_EditEditions_NeedToPublishNotice`,
                      (0, _.jsx)(`a`, {
                        target: `_blank`,
                        href: `${_.PARTNER_BASE_URL}admin/game/edit/${_.nItemId}?activetab=tab_publish`,
                      }),
                    ),
                  }),
                ],
              }),
            _ === `alert` &&
              (0, _.jsx)(_.Fragment, {
                children: (0, _.jsxs)(`div`, {
                  className: void 0,
                  children: [
                    (0, _.jsx)(`h2`, {
                      children: _(`#StoreAdmin_EditEditions_SavingTitle`),
                    }),
                    (0, _.jsxs)(`div`, {
                      className: `_2Euwmvsq7yw-`,
                      children: [
                        _.isPending &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)(_, {}),
                              ` `,
                              _(`#StoreAdmin_EditEditions_Saving`),
                            ],
                          }),
                        !_.isPending &&
                          (0, _.jsx)(`span`, {
                            children: _(`#StoreAdmin_EditEditions_Saved`),
                          }),
                      ],
                    }),
                    (0, _.jsx)(`span`, {
                      className: `_53IA82aOGpo-`,
                      children: _(
                        `#StoreAdmin_EditEditions_NeedToPublishAlert`,
                        (0, _.jsx)(`a`, {
                          target: `_blank`,
                          href: `${_.PARTNER_BASE_URL}admin/game/edit/${_.nItemId}?activetab=tab_publish`,
                        }),
                      ),
                    }),
                    (0, _.jsx)(`div`, {
                      className: `O-m7d-IwQ2c-`,
                      children: (0, _.jsx)(`button`, {
                        onClick: _,
                        children: _(`#StoreAdmin_EditEditions_OK`),
                      }),
                    }),
                  ],
                }),
              }),
          ],
        }),
      }),
      (_.rgCandidates.length > 1 || _.rgEditions.length > 0) &&
        (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)(`div`, {
            className: _(`-VtEdw9C43A-`, _ && `pBh5PfMTwpg-`),
            children: [
              _ === `closed` &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(`button`, {
                      className: void 0,
                      onClick: () => _(`editor`),
                      children: _(
                        `#StoreAdmin_EditEditions_ManageEditionsButton`,
                      ),
                    }),
                    _?.size > 0
                      ? (0, _.jsx)(`span`, {
                          children: _(
                            `#StoreAdmin_EditEditions_ManageEditionsDescription`,
                            _.size,
                          ),
                        })
                      : (0, _.jsx)(`span`, {
                          children: _(
                            `#StoreAdmin_EditEditions_GroupEditionsDescription`,
                          ),
                        }),
                    (0, _.jsx)(`span`, {
                      children: _
                        ? (0, _.jsx)(`span`, {
                            className: _(`_6XZF74-pNFM-`, `icon_check_green`),
                            children: _(
                              `#StoreAdmin_EditEditions_ManageEditions_HasComparisonGraphic`,
                            ),
                          })
                        : _(
                            `#StoreAdmin_EditEditions_ManageEditions_NoComparisonGraphic`,
                          ),
                    }),
                  ],
                }),
              _ === `refreshing` &&
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)(_, {
                    size: `small`,
                  }),
                }),
            ],
          }),
        }),
    ],
  });
}
var _ = (_) =>
  _.eType === `bundle`
    ? {
        bundleid: _.nId,
      }
    : {
        packageid: _.nId,
      };
function _(_) {
  let { rgEditions: _, rgCandidates: _, setEditions: _ } = _,
    _ = new Map();
  for (let _ of _.rgCandidates) _.set(_.nId, _);
  let [_, _] = (0, _.useState)(``),
    _ = (_, _) => (_) => {
      let _ = new _(_);
      (_.target.checked
        ? _.add(
            _ === `package`
              ? {
                  packageid: _,
                }
              : {
                  bundleid: _,
                },
          )
        : _.delete(
            _ === `package`
              ? {
                  packageid: _,
                }
              : {
                  bundleid: _,
                },
          ),
        _(_));
    },
    _ = (_) => {
      let _ = _.target.value;
      _(_);
    },
    _ = _.filter(
      (_) => _.strName.toLowerCase().indexOf(_.toLowerCase()) !== -1,
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`p`, {
        children: _(
          `#StoreAdmin_EditEditions_GroupEditionsIntro`,
          (0, _.jsx)(`a`, {
            target: `_blank`,
            href: `${_.PARTNER_BASE_URL}doc/store/manageeditions`,
          }),
        ),
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`h3`, {
        children: _(`#StoreAdmin_EditEditions_StepNumber1`),
      }),
      (0, _.jsx)(`p`, {
        children: _(`#StoreAdmin_EditEditions_SelectEditionsDescription`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`input`, {
          type: `text`,
          placeholder: _(`#StoreAdmin_EditEditions_FilterDescription`),
          value: _,
          onChange: _,
        }),
      }),
      (0, _.jsxs)(`table`, {
        children: [
          (0, _.jsx)(`thead`, {
            children: (0, _.jsxs)(`tr`, {
              children: [
                (0, _.jsx)(`td`, {
                  children: _(`#StoreAdmin_EditEditions_ColumnEdition`),
                }),
                (0, _.jsx)(`td`, {
                  children: _(`#StoreAdmin_EditEditions_ColumnPackageTitle`),
                }),
                (0, _.jsx)(`td`, {
                  children: _(`#StoreAdmin_EditEditions_ColumnState`),
                }),
                (0, _.jsx)(`td`, {
                  children: _(`#StoreAdmin_EditEditions_ColumnPrice`),
                }),
              ],
            }),
          }),
          (0, _.jsx)(`tbody`, {
            children: _.map((_) => {
              let _ = _.has(_(_)),
                _ = _;
              return (
                _.strReleaseState === `Released`
                  ? (_ = _)
                  : _.strReleaseState === `Prepurchase`
                    ? (_ = _)
                    : _.strReleaseState === `Beta` && (_ = _),
                (0, _.jsxs)(
                  `tr`,
                  {
                    className: _(_, void 0),
                    children: [
                      (0, _.jsx)(`td`, {
                        children: (0, _.jsx)(`input`, {
                          type: `checkbox`,
                          onChange: _(_.eType, _.nId),
                          checked: _,
                        }),
                      }),
                      (0, _.jsx)(`td`, {
                        children: _.strName,
                      }),
                      (0, _.jsx)(`td`, {
                        children: _.strLocalizedReleaseState,
                      }),
                      (0, _.jsx)(`td`, {
                        dangerouslySetInnerHTML: {
                          __html: _.strPricing,
                        },
                      }),
                    ],
                  },
                  _.nId,
                )
              );
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      mapOriginalImages: _,
      mapImages: _,
      setImages: _,
      mapAltText: _,
      setAltText: _,
      bAppHasSteamChinaToolsEnabled: _,
    } = _,
    [_, _] = (0, _.useState)(null),
    _ = _(_.bAppHasSteamChinaToolsEnabled),
    [_, _] = (0, _.useState)(`english`),
    _ = (0, _.useRef)(null),
    _ = null;
  if (_.has(_)) {
    let _ = _.get(_);
    _ = _ instanceof File ? URL.createObjectURL(_) : _;
  }
  let _ = async (_) => {
      if (_.target.files && _.target.files[0]) {
        let _ = _.target.files[0],
          _ = await createImageBitmap(_);
        if (_.width !== _ || _.height !== _) {
          _(
            _(
              `#StoreAdmin_EditEditions_ImageSizeError`,
              _,
              _,
              _.width,
              _.height,
            ),
          );
          return;
        }
        let _ = new Map(_);
        (_.set(_, _), _(_), _(null));
      }
    },
    _ = (_) => {
      let _ = new Map(_);
      (_.set(_, _.target.value), _(_));
    },
    _ = (_) => {
      (_(_.target.value), _(null));
    },
    _ = () => {
      if (_.has(_)) {
        let _ = new Map(_);
        (_.delete(_), _(_), _(null));
      }
    },
    _ = (_) => (_.has(_) && _.get(_) instanceof File ? _ : _.has(_) ? _ : _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`h3`, {
        children: _(`#StoreAdmin_EditEditions_StepNumber2`),
      }),
      (0, _.jsx)(`p`, {
        children: _(
          `#StoreAdmin_EditEditions_UploadComparisonGraphicsDescription`,
          _,
          _,
        ),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`input`, {
            type: `file`,
            ref: _,
            onChange: _,
            style: {
              display: `none`,
            },
          }),
          (0, _.jsx)(`select`, {
            onChange: _,
            className: _(_),
            children: _(_, (_, _) =>
              (0, _.jsx)(
                `option`,
                {
                  value: _,
                  className: _(_),
                  children: _,
                },
                _,
              ),
            ),
          }),
        ],
      }),
      (0, _.jsx)(`p`, {
        className: _,
        children:
          _ !== null &&
          (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(_, {}), _],
          }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        onClick: () => _.current?.click(),
        onDragOver: (_) => _.preventDefault(),
        onDrop: async (_) => {
          if (
            (_.preventDefault(),
            _.dataTransfer.files && _.dataTransfer.files[0])
          ) {
            let _ = _.dataTransfer.files[0],
              _ = await createImageBitmap(_);
            if (_.width !== _ || _.height !== _) {
              _(
                _(
                  `#StoreAdmin_EditEditions_ImageSizeError`,
                  _,
                  _,
                  _.width,
                  _.height,
                ),
              );
              return;
            }
            let _ = new Map(_);
            (_.set(_, _), _(_), _(null));
          }
        },
        children: _
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#StoreAdmin_EditEditions_DragAndDropToReplace`),
                }),
                (0, _.jsx)(`img`, {
                  src: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(`a`, {
                    onClick: _,
                    children: _(`#StoreAdmin_EditEditions_Delete`),
                  }),
                }),
              ],
            })
          : (0, _.jsx)(`div`, {
              className: _,
              children: _(`#StoreAdmin_EditEditions_DragAndDropHere`),
            }),
      }),
      (0, _.jsx)(`h3`, {
        children: _(`#StoreAdmin_EditEditions_StepNumber3`),
      }),
      (0, _.jsx)(`label`, {
        htmlFor: `altTextArea`,
        children: (0, _.jsx)(`p`, {
          children: _(`#StoreAdmin_EditEditions_AltTextDescription`),
        }),
      }),
      (0, _.jsx)(`textarea`, {
        _: `altTextArea`,
        className: _,
        onChange: _,
        value: _.get(_) ?? ``,
      }),
    ],
  });
}
var _ = `r3WKDT6gaqM-`,
  _ = `_6pN4y6Eg-fg-`,
  _ = `bDsnSpZllYc-`,
  _ = `MsUBOesTZK0-`,
  _ = `F2jBiG0GAeU-`,
  _ = `jUTY46ygpic-`,
  _ = `b4Et6TWZ7Nk-`,
  _ = `KcGA2QWdF-Y-`,
  _ = `sUJEEK71BpU-`,
  _ = `q6E-QwrC17Q-`,
  _ = `sqiADY3xqyI-`,
  _ = [
    `date_full`,
    `date_month`,
    `date_quarter`,
    `date_year`,
    `text_comingsoon`,
    `text_tba`,
  ],
  _ = [`date_full`, `date_month`, `date_quarter`];
function _(_) {
  let {
      rtSteamReleaseDate: _,
      value: _,
      onChange: _,
      rgComingSoonOptionOverride: _,
      bExpandedDisplay: _,
    } = _,
    _ = !!_,
    _ = _.useMemo(
      () =>
        (_ || _).map((_) => ({
          label: _(_, _, null, _),
          data: _,
        })),
      [_, _, _],
    ),
    _ = _.useCallback(
      (_) => {
        _(_.data);
      },
      [_],
    ),
    _ = _(
      _ ? `#GameEdit_ComingSoon_SelectAnOption` : `#App_Landing_NoDateSelected`,
    );
  return (0, _.jsx)(_, {
    disabled: !_,
    strDefaultLabel: _,
    rgOptions: _,
    selectedOption: _ ? _ : null,
    onChange: _,
  });
}
var _ = `iv9J3f-W39U-`,
  _ = `kR4-ta-b1kc-`,
  _ = `BT0THKP3-3I-`,
  _ = `IJf0HTXRRxo-`,
  _ = `Pm-NM6eIbc0-`,
  _ = `u-ZbXfx3P5Y-`,
  _ = `uwDMhUXmTLw-`,
  _ = `mXBuBv5UBcE-`,
  _ = `XZk7vfmYCiQ-`;
function _(_) {
  let { appid: _, onClose: _, onCommit: _ } = _,
    [_, _] = _.useState(null),
    { data: _, isLoading: _, isLoadingError: _ } = _(_),
    _ = _?.strReleaseState == `prerelease`,
    _ = _.useCallback(
      (_, _) => {
        (_.invalidateQueries({
          queryKey: [`ReleaseRequest`, _],
        }),
          _(_, _, _));
      },
      [_, _, _],
    ),
    _ = (0, _.jsx)(_, {
      setOnOKButton: _,
      onCommit: _,
    });
  return (
    _
      ? (_ = (0, _.jsx)(_, {
          strError: _(`#Error_ErrorCommunicatingWithNetwork`),
        }))
      : (_ || !_) && (_ = (0, _.jsx)(_, {})),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: (0, _.jsx)(_, {
        fnSubmit: _,
        fnCloseModal: _,
        children: _,
      }),
    })
  );
}
var _ = _.createContext(null);
function _() {
  return _.useContext(_);
}
function _(_) {
  return _({
    queryKey: [`ReleaseRequest`, _],
    queryFn: async () => {
      let _ = await _.default.get(
        `${_.PARTNER_BASE_URL}apprelease/ajaxgetreleaserequest/${_}`,
      );
      if (typeof _.data == `string`) throw `Error loading release status`;
      return {
        appid: _,
        ..._?.data,
      };
    },
  });
}
var _ = _.memo(function (_) {
  let {
      appid: _,
      bCanUpdateComingSoonDate: _,
      rtReleaseDate: _,
      strComingSoonDisplay: _,
    } = _(),
    { setOnOKButton: _, onCommit: _ } = _,
    [_, _] = _.useState(_),
    [_, _] = _.useState(_ || void 0),
    [_, _] = _.useState(`none`),
    [_, _] = _.useState(),
    _ = _.useCallback((_) => {
      (_(_), _(`none`));
    }, []),
    _ = _.useCallback(() => {
      _
        ? _
          ? (_(`submitting`),
            _(null),
            _({
              unAppID: _,
              rtReleaseDate: _ ? _ : null,
              strComingSoonDisplay: _,
            })
              .then(() => {
                (_(`refreshing`), _(_, _));
              })
              .catch((_) => {
                _(_);
              }))
          : _(_(`#App_Landing_ReleaseDate_Error_ComingSoonDisplay`))
        : _(_(`#App_Landing_ReleaseDate_Error_NoDate`));
    }, [_, _, _, _, _, _]);
  return (
    _.useEffect(() => {
      _(_ == `none` ? () => _ : null);
    }, [_, _, _, _]),
    (0, _.jsxs)(_.Fragment, {
      children: [
        _ &&
          (0, _.jsx)(_, {
            strError: _,
          }),
        (0, _.jsx)(_, {}),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsxs)(_, {
              label: _(`#App_Landing_IntendedReleaseDateTitle`),
              children: [
                (0, _.jsx)(_, {
                  rtSelectedDate: _,
                  setSelectedDate: _,
                }),
                (0, _.jsx)(_, {}),
              ],
            }),
            (0, _.jsxs)(_, {
              label: _(`#App_Landing_PublicDateDisplayTitle`),
              children: [
                (0, _.jsx)(_, {
                  rtSteamReleaseDate: _,
                  value: _,
                  onChange: _,
                }),
                (0, _.jsx)(`p`, {
                  children: _(`#App_Landing_ReleaseDateStorePage`),
                }),
                (0, _.jsx)(`p`, {
                  children: _(`#App_Landing_ReleaseDateStoreListing`),
                }),
              ],
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(
            `#App_Landing_NeedHelpWithReleaseDates`,
            (0, _.jsx)(`a`, {
              target: `_blank`,
              href: `${_.PARTNER_BASE_URL}doc/store/coming_soon`,
            }),
            (0, _.jsx)(`a`, {
              target: `_blank`,
              href: `${_()}wizard/HelpWithPublishing`,
            }),
          ),
        }),
        (0, _.jsx)(_, {}),
      ],
    })
  );
});
function _(_) {
  let { strError: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: _,
  });
}
function _() {
  let {
    bIsComingSoon: _,
    bIsStorePageReviewed: _,
    bIsWaitingForBuildReview: _,
    bIsFirstSelfPublishingApp: _,
    rtEarliestDate: _,
    bRequiresReleaseWaitingPeriod: _,
  } = _();
  return _ && _
    ? _
      ? (0, _.jsx)(_, {
          children: _(`#App_Landing_Release_EarliestDate_BuildReview`),
        })
      : (0, _.jsx)(_, {
          children: _(`#App_Landing_Release_EarliestDate`, _(_)),
        })
    : _ && _
      ? (0, _.jsx)(_, {
          children: _(`#App_Landing_Release_EarliestDate_TwoWeeks30Days`),
        })
      : _
        ? (0, _.jsx)(_, {
            children: _(`#App_Landing_Release_EarliestDate_TwoWeeks`),
          })
        : null;
}
function _(_) {
  let { fnCloseModal: _, fnSubmit: _, children: _ } = _,
    { bCanUpdateComingSoonDate: _ } = _() || {
      bCanUpdateComingSoonDate: !0,
    };
  return (0, _.jsxs)(_, {
    active: !0,
    className: _,
    onDismiss: _,
    children: [
      (0, _.jsx)(_, {
        children: _(
          _
            ? `#App_Landing_Set_Release_Date`
            : `#App_Landing_Change_Release_Date`,
        ),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(_, {
        bOKDisabled: !_,
        onCancel: _,
        strCancelText: _(`#App_Landing_Requested_Date_Cancel`),
        onOK: _,
        strOKText: _(`#App_Landing_Requested_Date_Update`),
      }),
    ],
  });
}
function _(_) {
  let { label: _, children: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [_, `:`],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { rtSelectedDate: _, setSelectedDate: _ } = _,
    { bCanUpdateComingSoonDate: _, rtEarliestDate: _ } = _();
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsx)(_, {
      bWeekdaysOnly: !0,
      bNoDefaultDate: !0,
      disabled: !_,
      nEarliestTime: _,
      fnGetTimeToUpdate: () => _,
      fnSetTimeToUpdate: _,
      className: void 0,
      bShowTimeZone: !0,
      strAlsoShowTimeZone: _,
    }),
  });
}
function _(_) {
  let { bCanUpdateComingSoonDate: _, rtReleaseDate: _ } = _();
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`p`, {
            children: _(`#App_Landing_Set_Release_Date_SetIntended`),
          }),
          (0, _.jsx)(`p`, {
            children: _(`#App_Landing_Set_Release_Date_Weekends`),
          }),
          (0, _.jsx)(`p`, {
            children: _(`#App_Landing_Set_Release_Date_PacificTime`),
          }),
        ],
      })
    : (0, _.jsx)(`p`, {
        children: _(
          _(
            `#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Desc`,
            _(_),
          ),
          (0, _.jsx)(`a`, {
            href: `${_()}wizard/HelpWithPublishing?issueid=905`,
          }),
        ),
      });
}
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  let {
    rtEarliestDate: _,
    strReleaseState: _,
    bCanUpdateComingSoonDate: _,
  } = _();
  return _ != `prerelease` || _
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: _(
          `#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Note`,
          _(_),
        ),
      });
}
async function _(_) {
  let { unAppID: _, rtReleaseDate: _, strComingSoonDisplay: _ } = _,
    _ = `${_.PARTNER_BASE_URL}apprelease/ajaxupdatereleaserequest/${_}`,
    _ = new FormData();
  (_.append(`sessionid`, _()),
    _ && _.append(`release_date`, _.toString()),
    _.append(`coming_soon_display`, _));
  let _ = await _.default.post(_, _);
  if (!_.data || _.data.success != 1)
    throw _(
      `#Error_Description`,
      _.data?.success,
      _.data?.error_message || `unknown`,
    );
}
var _ = {
    GameEdit: (_, _) => `/admin/game/${_}/${_}`,
    PackageEdit: (_, _) => `/admin/store/${_}/${_}`,
    BundleEdit: (_, _) => `/bundles/${_}/${_}`,
    GameEditByAppID: (_) => `/admin/game/editbyappid/${_}`,
    ReviewPriceProposals: () => `/admin/reviewpricesubmissions/`,
    PackagePricingComparison: () => `/admin/packagepricingcomparison/`,
    PackageLanding: (_) => `/store/packagelanding/${_}`,
    FrontPageEdit: (_) => `/admin/store/pageclusteredit/frontpage/${_}`,
    FrontPageSteamChinaEdit: (_) =>
      `/admin/store/pageclusteredit/frontpage_china/${_}`,
    ContentHubEditor: (_, _) =>
      `/admin/store/pageclusteredit/content_hub_${_}/${_}`,
    StoreAdminCreatorHome: () => `/admin/creatorhome`,
  },
  _ = [`edit`, `diff`, `revert`, `prepare`, `publish`],
  _ = [
    `package`,
    `packagesave`,
    `packagediff`,
    `packagerevert`,
    `packageprepare`,
    `packagepublish`,
  ],
  _ = [`view`, `preparestore`, `revertstore`, `savestore`, `publish`];
function _(_) {
  let { bIsGameEdit: _, unAppID: _, rgEarliestAdvancedAccessDate: _ } = _,
    [_, _] = _.useState(_.rtReleaseDate),
    [_, _] = _.useState(_.strComingSoonDisplay),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = _.useCallback(() => _(!0), []),
    _ = _.useCallback(() => _(!1), []),
    _ = _.useCallback((_, _, _) => {
      (_(_), _(_), _(!1), _ && _(!0));
    }, []);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          appid: _,
          onClose: _,
          onCommit: _,
        }),
      _ &&
        (0, _.jsx)(_, {
          appid: _,
          bIsGameEdit: _,
          closeModal: () => _(!1),
        }),
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `rWtT1JIPT9Q-`),
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                label: _(`#App_Landing_SpecifiedReleaseDate`),
                children: (0, _.jsx)(_, {
                  rtReleaseDate: _,
                }),
              }),
              (0, _.jsx)(_, {
                label: _(`#App_Landing_CustomersSeeReleaseDate`),
                children: (0, _.jsx)(`div`, {
                  className: _(_, _ ? _ : void 0),
                  children: _ ? _(_, _) : _(`#App_Landing_UnsetReleaseDate`),
                }),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            onClick: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
            ],
          }),
        ],
      }),
      _ * 1e3 > new Date().getTime() &&
        (0, _.jsx)(_, {
          label: _(`#App_Landing_EarliestAdvancedAccessDate`),
          children: (0, _.jsx)(_, {
            rtReleaseDate: _,
          }),
        }),
    ],
  });
}
function _(_) {
  let { rtReleaseDate: _ } = _;
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            className: _(_, _),
            children: _(_),
          }),
          (0, _.jsx)(`div`, {
            className: _(void 0, _),
            children: _(
              _,
              {},
              {
                timeZoneName: `short`,
              },
            ),
          }),
        ],
      })
    : (0, _.jsx)(`div`, {
        className: _(_, void 0),
        children: _(`#App_Landing_UnsetReleaseDate`),
      });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.label,
      }),
      _.children,
    ],
  });
}
function _(_) {
  let { appid: _, bIsGameEdit: _, closeModal: _ } = _,
    _ = _.useCallback(() => {
      (_
        ? (window.TabSelect(`tab_publish`), window.scrollTo(0, 0))
        : (window.location.href =
            _.GameEditByAppID(_.toString()) + `?activetab=tab_publish`),
        _());
    }, [_, _, _]);
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(_, {
      strTitle: _(`#App_Landing_ReleaseDate_ChangesSaved`),
      strDescription: _(`#App_Landing_Release_PublishStorePrompt`),
      strOKButtonText: _(`#App_Landing_Release_PrepareToPublish`),
      onOK: _,
      strCancelButtonText: _(`#Button_OK`),
      closeModal: _,
    }),
  });
}
