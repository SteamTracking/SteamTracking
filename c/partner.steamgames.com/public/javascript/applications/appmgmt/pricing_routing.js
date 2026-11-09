import { _, _, _, _, _ } from "./mobx.esm.js";
import { _, _, _, _ } from "./src.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./dialogs.js";
import { _, _ } from "./react-router.js";
import { _ } from "./pricingguidelineobject.js";
import { _, _, _ } from "./react-router-dom.js";
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
  _,
  _,
} from "./tabulatorutils.js";
import { _ } from "./modals.js";
import { _ } from "./historyutils.js";
import { _ } from "./throbber.js";
import { _ } from "./eventdevfeaturestore.js";
import { _ } from "./playerstore.js";
import { _, _, _, _ } from "./pricinggridcell.js";
import { _ } from "./configdatadiag.js";
import { _ } from "./unknownroute.js";
import { _ } from "./importexport.js";
import { _ } from "./storebrowsesetup.js";
import "./shared_common.module.js";
import { _, _ } from "./fancytable.js";
import { _, _, _, _, _, _, _, _ } from "./profilestore.js";
import "./discountgridheaders.module.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./saveprices.js";
var _ = _(_()),
  _ = `hrnRrC5Io1s-`,
  _ = `m86wnh9zYfA-`,
  _ = `_4xJbb24CPFM-`,
  _ = `yIYS3vRaaok-`,
  _ = `YqydI8xRHW0-`,
  _ = `_55j0rY7uj0Y-`,
  _ = `xT2DQRb-5Pk-`,
  _ = `WRUj-LrOB9Q-`,
  _ = `M9BYw5UX3Q0-`,
  _ = `tUdsbh1Y4uw-`,
  _ = _(_()),
  _ = _();
function _(_) {
  let {
      bCompactMode: _,
      setCompactMode: _,
      rgGridData: _,
      strPackageFilter: _,
      setPackageFilter: _,
      bFilterToBelowMinPrice: _,
      setFilterToBelowMinPrice: _,
    } = _,
    _ = (0, _.useMemo)(() => _.filter((_) => _(_.packageID)).length, [_]),
    _ = _.useCallback(
      (_) => {
        _(_.data);
      },
      [_],
    ),
    _ = _.useMemo(
      () => [
        {
          label: _(`#PricingDashboard_ShowOnlyReleasedPackages`),
          data: `released`,
        },
        {
          label: _(`#PricingDashboard_ShowAllPackages`),
          data: `all`,
        },
        {
          label: _(`#PricingDashboard_ShowOnlyUnreleasedPackages`),
          data: `unreleased`,
        },
        {
          label: _(`#PricingDashboard_ShowOnlyChangedPackages`),
          data: `changed`,
        },
        {
          label: _(`#PricingDashboard_ShowSubmittedChanges`),
          data: `proposed`,
        },
      ],
      [],
    ),
    [_, _, _] = _();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        rgOptions: _,
        selectedOption: _,
        strDropDownClassName: void 0,
        onChange: _,
        contextMenuPositionOptions: {
          bMatchWidth: !1,
        },
      }),
      !!(_ || _) &&
        (0, _.jsx)(`div`, {
          className: _(`YqydI8xRHW0-`, `qcPQ4JjPk1w-`),
          children: (0, _.jsx)(_, {
            checked: _,
            onChange: _,
            label: _(`#PricingDashboard_FilterToLowPrice`, _),
          }),
        }),
      (0, _.jsx)(`div`, {
        className: _(_, void 0),
        children: (0, _.jsx)(_, {
          checked: _,
          onChange: _,
          label: _(`#PricingDashboard_ShowCompactModeCheckBoxLabel`),
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _(_),
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsxs)(`div`, {
        className: _(_),
        children: [
          (0, _.jsx)(_, {
            onClick: _,
            children: _(`#PricingDashboard_ApplyGuidelinesDialog_Button`),
          }),
          (0, _.jsx)(_, {
            active: _,
            children: (0, _.jsx)(_, {
              closeModal: _,
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  return _.contains_game && _.contains_dlc
    ? `BOTH`
    : _.contains_game
      ? `GAME`
      : _.contains_dlc
        ? `DLC`
        : null;
}
function _(_, _, _) {
  let { rgSupportedPriceKeys: _ } = _();
  return _.useMemo(() => {
    let _ = [];
    for (let _ of _) {
      let _ = /^-?[0-9]+$/.test(_.strSearchStringFromURL)
        ? parseInt(_.strSearchStringFromURL)
        : 0;
      if (_.packageid !== _) {
        if (_ == `changed`) {
          if (!_(_.packageid)) continue;
        } else if (_ == `proposed`) {
          if (!_(_.packageid)) continue;
        } else if (_ == `released`) {
          if (!_.released) continue;
        } else if (_ == `unreleased` && _.released) continue;
        if (_?.bFilterToOnlyBelowMinimumPrice && !_(_.packageid)) continue;
      }
      let _ = _.grouped_app_name;
      _ ||=
        _.appids.length > 1
          ? _(`#PackageGrid_MultipleBaseGamesFoundForPackage`)
          : _(`#PackageGrid_NoBaseGameFoundForPackage`);
      let _ = {
        appids: _.appids.sort(),
        appName: _,
        packageID: _.packageid,
        packageName: _.package_name || ``,
        packageType: _(_),
        released: _.released,
      };
      for (let _ of _) _[_] = _;
      _.push(_);
    }
    return _;
  }, [_, _, _, _]);
}
function _(_) {
  let { column: _ } = _,
    _ = _._,
    _ = _(_),
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _,
        direction: `top`,
        className: void 0,
        strTooltipClassname: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _,
            (0, _.jsx)(`span`, {
              className: _,
              children: _,
            }),
          ],
        }),
      }),
      _ > 0 &&
        (0, _.jsx)(_, {
          hoverKey: _,
          className: `UIjCqml5QI8-`,
          renderHover: () =>
            (0, _.jsx)(_, {
              priceKey: _,
            }),
        }),
    ],
  });
}
function _(_) {
  let { row: _ } = _;
  return (0, _.jsx)(_, {
    packageID: _.original.packageID,
    bShowCancel: !0,
  });
}
function _() {
  return _.useMemo(
    () =>
      _().accessor(`proposalState`, {
        header: _(`#PricingDashboard_Column_PriceProposalState`),
        enableSorting: !1,
        cell: _,
        size: 200,
        meta: {
          strHeaderTooltip: _(
            `#PricingDashboard_Column_PriceProposalState_ttip`,
          ),
        },
      }),
    [],
  );
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(!1),
    _ = _(),
    { rgSupportedPriceKeys: _ } = _();
  return _.useMemo(() => {
    let _ = [_, _, _, _, _, _];
    for (let _ of _)
      _.push({
        accessorKey: _,
        size: _ ? 72 : 200,
        enableSorting: !1,
        header: _,
        cell: _,
      });
    return _;
  }, [_, _, _, _, _, _, _, _]);
}
function _(_) {
  let _ = _()?.length ?? 0;
  return (0, _.jsx)(`div`, {
    className: _(_, _ > 0 && `PendingVisible`),
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
var _ = _.memo(function (_) {
  let { packageData: _ } = _,
    [_, _] = _.useState(!1),
    _ = _.useRef(null),
    [_, _] = _(`filter`, `released`),
    [_, _] = _(`filter_below_min_price`, !1),
    _ = new URLSearchParams(window.location.search),
    _ = _.has(`pn`) ? decodeURIComponent(_.get(`pn`)) : ``,
    _ = _(_),
    _ = _(_, _, {
      bFilterToOnlyBelowMinimumPrice: _,
      strSearchStringFromURL: _,
    }),
    _ = _(),
    _ = () => _(_.current),
    _ = _(),
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        bCompactMode: _,
        setCompactMode: _,
        rgGridData: _,
        strPackageFilter: _,
        setPackageFilter: _,
        bFilterToBelowMinPrice: _,
        setFilterToBelowMinPrice: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _(_, _ && `CompactMode`),
          children: (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                fnBLocalChangesExist: _,
                fnWarnUser: _,
                children: (0, _.jsx)(_, {
                  ref: _,
                  className: (0, _.default)(_, `noGlobalButtonStyle`),
                  columns: _,
                  data: _,
                  getRowKey: (_, _) => _.packageID,
                  stickyHeader: !0,
                  nItemHeight: 43,
                  nHeaderHeight: 63,
                  overscan: 12,
                  initialExpanded: !0,
                  initialSorting: [
                    {
                      _: `appName`,
                      desc: !1,
                    },
                  ],
                  initialColumnFilters: [
                    {
                      _: `packageName`,
                      value: _,
                    },
                  ],
                  initialGrouping: [`appName`],
                  initialColumnVisibility: {
                    packageType: !1,
                    appids: !1,
                  },
                  initialColumnPinning: {
                    left: [
                      `packageID`,
                      `appName`,
                      `packageName`,
                      `proposalState`,
                      `USD`,
                    ],
                  },
                  onGroupingChange: _,
                  onVisibleRowsChange: _,
                  renderGroup: _,
                }),
              }),
              (0, _.jsx)(`br`, {}),
            ],
          }),
        }),
      }),
    ],
  });
});
function _(_) {
  let { priceKey: _ } = _,
    _ = _(_),
    _ = _(_);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`div`, {
        className: _,
        onClick: _,
        children: _(`#PricingDashboard_RevertAllCurrency`, _),
      }),
    }),
  });
}
var _ = _(_()),
  _ = `dZod83AKMN0-`,
  _ = `H9T48P6wKiw-`,
  _ = `PlbQyglM-gI-`,
  _ = `hSs7ciUx0Yo-`,
  _ = `_7i1pyd8PokY-`,
  _ = `xS20dcdZdD4-`,
  _ = `FBAkFNEPFYA-`;
function _(_) {
  let { closeModal: _ } = _,
    _ = _(),
    _ = (0, _.default)().format(`YYYY-MM-DDTHH-mm-ss`),
    _ = _(),
    _ = _(),
    _ = `prices_all_${_}_${_}.csv`,
    _ = `prices_${_}_${_}.csv`,
    _ = _.length == 0;
  return (0, _.jsxs)(_, {
    bAllowFullSize: !1,
    closeModal: _,
    bAlertDialog: !0,
    strTitle: _(`#PricingDashboard_ImportExportHeader`),
    children: [
      _(`#PricingDashboard_ImportExport_GeneralInstructions`),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`a`, {
        href: _.PARTNER_BASE_URL + `doc/store/pricing/csv`,
        target: `_blank`,
        children: _(`#PricingDashboard_ImportExport_DocLink`),
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`h3`, {
        children: _(`#PricingDashboard_SubtitleExport`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#PricingDashboard_ImportExport_DownloadInstructions`),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _.length != _.length &&
            (0, _.jsxs)(`div`, {
              className: `_7i1pyd8PokY-`,
              children: [
                (0, _.jsx)(`span`, {
                  className: `xS20dcdZdD4-`,
                  children: _(
                    `#PricingDashboard_ImportExport_DownloadVisible_Desc`,
                  ),
                }),
                (0, _.jsxs)(_, {
                  className: `PlbQyglM-gI-`,
                  disabled: _,
                  onClick: () => _(_, _),
                  children: [
                    _(`#PricingDashboard_ImportExport_DownloadVisible_Button`),
                    (0, _.jsx)(`span`, {
                      children: _(`#PricingDashboard_PackageCount`, _.length),
                    }),
                  ],
                }),
              ],
            }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`span`, {
                className: _,
                children: _(`#PricingDashboard_ImportExport_DownloadAll_Desc`),
              }),
              (0, _.jsxs)(_, {
                className: _,
                disabled: _,
                onClick: () => _(_, _),
                children: [
                  _(`#PricingDashboard_ImportExport_DownloadAll_Button`),
                  (0, _.jsx)(`span`, {
                    children: _(`#PricingDashboard_PackageCount`, _.length),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`h3`, {
        children: _(`#PricingDashboard_SubtitleImport`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#PricingDashboard_ImportExport_UploadInstructions`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`span`, {
              className: _,
              children: _(`#PricingDashboard_ImportExport_Upload_Desc`),
            }),
            (0, _.jsx)(_, {
              className: _,
              disabled: _,
              children: (0, _.jsxs)(`label`, {
                className: _,
                htmlFor: `import-price-input`,
                children: [
                  _(`#PricingDashboard_ImportExport_Upload_Button`),
                  (0, _.jsx)(`input`, {
                    _: `import-price-input`,
                    type: `file`,
                    style: {
                      display: `none`,
                    },
                    onChange: (_) => _(_, _),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function _(_, _) {
  let _ = [],
    _ = _(),
    _ = [_(`#PackageGrid_Column_PackageName`), `ID`];
  for (let _ of _) _.push(_);
  _.push(_);
  for (let _ of _) {
    let _ = [_(_), _.toString()];
    for (let _ of _) {
      let _ = _(_, _),
        _ = _ ? (_ / 100).toString() : ``;
      _.push(_);
    }
    _.push(_);
  }
  _.WriteCSVToFile(_, _);
}
async function _(_, _) {
  if (_.target.files.length >= 1) {
    let _ = _(_),
      _ = _.target.files[0],
      _ = await _.ParseCSVFile(_);
    (_(
      (0, _.jsx)(_, {
        strFilename: _.name,
        parseResult: _,
      }),
      _,
    ),
      _());
  }
}
function _(_, _) {
  let _ = Number(_);
  return Number.isNaN(_) ? null : Math.round(_ * 100);
}
function _(_, _, _, _) {
  let _ = [],
    _ = new Set(_),
    _ = [];
  for (let _ of _.data ?? []) {
    let _ = Number(_._);
    if (_.has(_)) {
      _.push(_);
      for (let _ of _) {
        let _ = _[_],
          _ = !!_?.length && _(_, _);
        if (!_?.length || Number.isNaN(_)) continue;
        let _ = _(_, _, _);
        _ && _.push(_);
      }
    }
  }
  return {
    rgPriceChanges: _,
    nPackagesImported: _.length,
  };
}
function _(_) {
  let { closeModal: _, strFilename: _, parseResult: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    [_, _] = _.useState(null),
    [_, _] = _.useState();
  if (
    (_.useEffect(() => {
      let { rgPriceChanges: _, nPackagesImported: _ } = _(_, _, _, _);
      (_(_), _(_));
    }, [_, _, _, _]),
    _ === null)
  )
    return (0, _.jsx)(_, {
      position: `center`,
    });
  let _ = _.length > 0,
    _ = _(_ ? `#PackageGrid_SaveChangesDialogButton` : `#Button_Close`);
  return (0, _.jsxs)(_, {
    strTitle: _(`#PricingDashboard_ImportExport_UploadProgressTitle`),
    strDescription: _(
      `#PricingDashboard_ImportExport_UploadProgressDetails`,
      _,
    ),
    bAlertDialog: !_,
    strOKButtonText: _,
    onOK: () => {
      _ && _((0, _.jsx)(_, {}), window);
    },
    strCancelButtonText: _(`#Button_OK`),
    closeModal: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#PricingDashboard_ImportExport_UploadResults`, _.length),
      }),
      _ && _(`#PricingDashboard_ImportExport_UploadNextStepInstructions`),
      !!_.errors?.length &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`div`, {
              className: `pT-mBtArqF0-`,
              children: _(
                `#PricingDashboard_ImportExport_UploadErrorsHeader`,
                _.errors?.length,
              ),
            }),
            (0, _.jsx)(`div`, {
              className: `U9w68ZKRVu4-`,
              children: _.errors.map((_, _) =>
                (0, _.jsx)(
                  `div`,
                  {
                    className: void 0,
                    children: `${_.row ?? `-`} ${_.message}`,
                  },
                  `${_.message}-${_}`,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  _(_());
  let _ = _(),
    _ = _.PARTNER_BASE_URL + `doc/store/pricing`,
    _ = _.HELP_BASE_URL + `wizard/HelpWithPublishing?issueid=920`,
    _ = _(),
    _ = (0, _.useMemo)(
      () => Array.from(new Set(_.map((_) => _.submitterID))),
      [_],
    );
  return (
    _(_),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _(`#PricingDashboard_Title`),
            (0, _.jsx)(`div`, {
              className: _,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  onClick: (_) => _((0, _.jsx)(_, {}), _(_)),
                  children: _(`#PricingDashboard_ImportExportButton`),
                }),
                (0, _.jsx)(_, {
                  onClick: (_) => _(_, _),
                  children: _(`#PricingDashboard_DocumentationButton`),
                }),
                (0, _.jsx)(_, {
                  onClick: (_) => _(_, _),
                  children: _(`#PricingDashboard_ContactUsButton`),
                }),
              ],
            }),
          ],
        }),
        _.length == 0 &&
          (0, _.jsx)(`div`, {
            className: `ChHauw6JZ6E-`,
            children: _(`#PricingDashboard_Error_NoPackages`),
          }),
        _.length > 0 &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                packageData: _,
              }),
              (0, _.jsx)(_, {
                bReloadPageOnSave: !1,
              }),
            ],
          }),
      ],
    })
  );
}
var _ = {
  PricingDashboard: () => `/dashboard/:publisherid(\\d*)`,
};
function _(_) {
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        basename: _() + `pricing/`,
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              exact: !0,
              path: _.DiagData(),
              render: (_) =>
                (0, _.jsx)(_, {
                  ..._,
                  strConfigID: `application_config`,
                }),
            }),
            (0, _.jsx)(_, {
              path: _.PricingDashboard(),
              render: (_) => (0, _.jsx)(_, {}),
            }),
            (0, _.jsx)(_, {
              component: _,
            }),
          ],
        }),
      }),
    }),
  });
}
export { _ as PricingRoutes, _ as default };
