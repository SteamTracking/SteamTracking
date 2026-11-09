const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ ||
    (_._ = [
      "./conversionmethodpicker.js",
      "./mobx.esm.js",
      "./dialogs.js",
      "./src.js",
      "./react-router.js",
      "../../../css/applications/appmgmt/dialogs.css",
      "./pricingguidelineobject.js",
      "./useQuery.js",
      "./utils.js",
      "./reactqueryroot.js",
      "./mutation.js",
      "./currencyutils.js",
      "./partnereventshared.module.js",
      "../../../css/applications/appmgmt/partnereventshared.css",
      "./localization3.js",
      "./tour.js",
      "./servicetransportprovider.js",
      "../../../css/applications/appmgmt/tour.css",
    ]),
) => _.map((_) => _[_]);
import { _, _, _, _, _ } from "./mobx.esm.js";
import { _, _ } from "./src.js";
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
  _,
  _,
  _,
  _,
} from "./dialogs.js";
import { _ } from "./text.js";
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
} from "./tabulatorutils.js";
import { _ } from "./modals.js";
import { _ } from "./ajaxhooks.js";
import { _ } from "./throbber.js";
import { _ } from "./eventdevfeaturestore.js";
import { _, _, _, _, _ } from "./pricinggridcell.js";
import { _, _, _, _ } from "./profilestore.js";
import { _ } from "./localization3.js";
var _ = _(_(), 1),
  _ = _(),
  _ = _.lazy(() =>
    _(
      () => import(`./conversionmethodpicker.js`),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      ]),
      import.meta.url,
    ),
  ),
  _ = _
    ? function (_) {
        return (0, _.jsx)(_.Suspense, {
          fallback: null,
          children: (0, _.jsx)(_, {
            ..._,
          }),
        });
      }
    : (_) => null,
  _ = `beibQA383h0-`,
  _ = `L9vHNZZ9iVQ-`,
  _ = `yr05aRbkKls-`,
  _ = `ChHauw6JZ6E-`,
  _ = `HWOMrzWN1Tc-`,
  _ = `Bj-cDAje8jA-`;
function _(_) {
  let { closeModal: _, fnOnApply: _, singlePackage: _ } = _,
    _ = _();
  return (0, _.jsxs)(_, {
    closeModal: _,
    bAlertDialog: !0,
    strTitle: _.Localize(`#PricingDashboard_ApplyConversion_Method`),
    onOK: () => {
      (_(), _ && _());
    },
    strOKButtonText: _(
      _
        ? `#PricingDashboard_ApplyGuidelines_Button_Single`
        : `#PricingDashboard_ApplyGuidelines_Button`,
    ),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(
          `#PricingDashboard_ApplyGuidelines_Instructions_MultiOptions`,
        ),
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`a`, {
        href: _.PARTNER_BASE_URL + `doc/store/pricing#5`,
        target: `_blank`,
        children: _(`#PricingDashboard_ApplyGuidelines_Link`),
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`br`, {}),
      !_ &&
        (0, _.jsx)(`div`, {
          className: `Bj-cDAje8jA-`,
          children: _(`#PricingDashboard_ApplyGuidelines_Instructions2`),
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#PricingDashboard_ApplyGuidelines_Assurance`),
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(_, {
        bHideTour: !0,
      }),
    ],
  });
}
var _ = `CTciUzDmA1I-`,
  _ = new _(`price-grid-cell-popout-elements`);
function _(_) {
  let { hoverKey: _, className: _, renderHover: _ } = _,
    _ = _(_, _),
    _ = _.useRef(void 0),
    _ = _.useCallback(() => {
      _.HideElement(_.current.ownerDocument, _);
    }, [_]);
  return (0, _.jsx)(`div`, {
    ref: _,
    tabIndex: -1,
    className: _,
    onFocus: (_) => {
      _.target.focus();
      let _ = (0, _.jsx)(_, {
        target: _.current,
        direction: `top`,
        bEnablePointerEvents: !0,
        nBodyDistance: 0,
        onClick: _,
        children: _(),
      });
      _.ShowElement(_.current.ownerDocument, _, _);
    },
    onBlur: () => {
      _.HideElement(_.current.ownerDocument, _, 100);
    },
    children: (0, _.jsx)(_, {}),
  });
}
var _ = `jkgPfypIl3g-`,
  _ = `lZZ9kI2m4XE-`,
  _ = `Tgfbrh9a7xM-`,
  _ = `iduas5SBB-M-`,
  _ = `Nz97KnFhx5s-`,
  _ = `SLXEdmwQBlU-`,
  _ = `id6f-X9evAA-`,
  _ = `wTLGaPMbbuo-`,
  _ = `KFTKJXXW01k-`,
  _ = `wfA7TOLqp5Y-`,
  _ = `LRKE3JBYM9I-`,
  _ = `tIHLL-OD3Gs-`,
  _ = `idZ4p4sm8E0-`,
  _ = `CQHVqiaz0dY-`,
  _ = `_9XRS2xOl1A4-`,
  _ = `_5wYYMpXLWKI-`,
  _ = `wgrJtAuBnVo-`,
  _ = `ApmhLbw5J-w-`,
  _ = `_9-uVcACf610-`,
  _ = `X-xPX0y9VTQ-`,
  _ = `ggjasVwKzDg-`,
  _ = `CDfJP287RU0-`,
  _ = `K2BEBFwTOYM-`,
  _ = `qAyHg--sDi8-`,
  _ = `SuCGD7foB9c-`,
  _ = `n7iJ3z9O75E-`,
  _ = `ovxCFLyPyjY-`,
  _ = `m6LIoSRASE8-`,
  _ = `wkBMybv4xw0-`,
  _ = `ryBEtg-5OlI-`,
  _ = `V-J1acv8jWY-`,
  _ = `Xs4vx3d-VjA-`,
  _ = `ieRHKoMhCPk-`,
  _ = `y7JuVW5N7Ks-`,
  _ = `nT9r551qk-A-`,
  _ = `UCalEMrUHCE-`,
  _ = `_9h68RuMTsa0-`,
  _ = `M5FxdTP2dX0-`,
  _ = `KUVnNneRkyE-`,
  _ = `Z-lk2fvvlY8-`,
  _ = `m6tQidvlwyU-`;
function _(_) {
  let { rgLocalPriceOverrides: _ } = _,
    [_, _] = _.useState(_.length < 9);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _
      ? (0, _.jsx)(`div`, {
          className: _,
          children: _.map((_) =>
            (0, _.jsx)(
              _,
              {
                override: _,
              },
              `${_.packageID}_${_.strPriceKey}`,
            ),
          ),
        })
      : (0, _.jsx)(_, {
          onClick: () => _(!0),
          className: _,
          children: _(`#PackageGrid_SeePendingChanges`),
        }),
  });
}
function _(_) {
  let { override: _ } = _,
    { packageID: _, strPriceKey: _, nPriceInCents: _, nOldPriceInCents: _ } = _,
    _ = _(_),
    [_, _, _] = _(_, _),
    [_, _, _] = _(_, _),
    _ = _(_),
    { nMinPriceInCents: _, nMaxPriceInCents: _ } = _(_, _),
    _ = _ < _ || (!!_ && _ > _);
  return (0, _.jsxs)(`div`, {
    className: _(_),
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _,
        direction: `top`,
        className: _,
        strTooltipClassname: _,
        children: _,
      }),
      (0, _.jsx)(_, {
        toolTipContent: `${_}: ${_}`,
        direction: `overlay`,
        className: _,
        strTooltipClassname: _,
        children: _,
      }),
      _
        ? (0, _.jsx)(_, {
            packageID: _,
            strPriceKey: _,
          })
        : (0, _.jsx)(_, {
            nPriceInCents: _,
            nSavedPriceInCents: _,
          }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
        ],
      }),
      (0, _.jsx)(`span`, {
        className: _,
        children: (0, _.jsx)(_, {
          angle: 90,
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { closeModal: _, packageID: _, bPackageVisible: _ } = _,
    _ = _(_),
    _ = _.some((_) => _.nPriceInCents > _.nOldPriceInCents),
    _ = _(_, _),
    {
      fnPublish: _,
      ePublishState: _,
      strPublishError: _,
      bBlockedByCooldown: _,
    } = _(_),
    _ = _ == 4 || _,
    _ = _.useCallback(async () => {
      (await _()) && _?.();
    }, [_, _]),
    _;
  if (_ == 3)
    _ = _(
      `#PricingDashboard_PriceProposal_Publish_FailedToLoad`,
      (0, _.jsx)(`div`, {}),
      (0, _.jsx)(`div`, {}),
    );
  else if (_) {
    let _ = (0, _.jsx)(_, {
      href: `https://partner.steamgames.com/doc/store/pricing`,
    });
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`div`, {
          children: _(`#PricingDashboard_PriceProposal_Publish_CooldownError1`),
        }),
        (0, _.jsx)(`div`, {
          children: _(
            `#PricingDashboard_PriceProposal_Publish_CooldownError2`,
            _,
          ),
        }),
        (0, _.jsx)(`div`, {
          children: _(`#PricingDashboard_PriceProposal_Publish_CooldownError3`),
        }),
        (0, _.jsx)(`div`, {
          children: (0, _.jsxs)(`ol`, {
            children: [
              (0, _.jsx)(`li`, {
                children: _(
                  `#PricingDashboard_PriceProposal_Publish_CooldownError3a`,
                ),
              }),
              (0, _.jsx)(`li`, {
                children: _(
                  `#PricingDashboard_PriceProposal_Publish_CooldownError3b`,
                ),
              }),
            ],
          }),
        }),
      ],
    });
  } else
    _ == 3 &&
      (_ =
        _ ||
        _(
          `#PricingDashboard_PriceProposal_Publish_FailedToPublish`,
          (0, _.jsx)(`div`, {}),
          (0, _.jsx)(`div`, {}),
        ));
  if (_) {
    let _ = _(
      _
        ? `#PricingDashboard_PriceProposal_Publish_Title`
        : `#PricingDashboard_StageNewPrices_title`,
    );
    return (
      _ && (_ = _(`#PricingDashboard_PriceProposal_Publish_CantPublishTitle`)),
      (0, _.jsx)(_, {
        strTitle: _,
        bAlertDialog: !0,
        onOK: _,
        onCancel: _,
        closeModal: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      })
    );
  }
  let _ = _ == 1 || _ == 1;
  return (0, _.jsxs)(_, {
    strTitle: _(
      _
        ? `#PricingDashboard_PriceProposal_Publish_Title`
        : `#PricingDashboard_StageNewPrices_title`,
    ),
    bAlertDialog: !1,
    strOKButtonText: _(
      _
        ? `#PricingDashboard_PriceProposal_Publish_Button`
        : `#PricingDashboard_StageNewPrices_ok`,
    ),
    bOKDisabled: _,
    bCancelDisabled: _,
    bDestructiveWarning: !0,
    bCloseAfterOK: !1,
    onOK: _,
    onCancel: _,
    closeModal: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          position: `center`,
        }),
      !_ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            _(
              _
                ? `#PricingDashboard_PriceProposal_Publish_Explanation`
                : `#PricingDashboard_StageNewPrices_desc_Timing`,
              _.length,
            ),
            !_ &&
              (0, _.jsx)(`div`, {
                className: `IOfxER8mFb4-`,
                children: _(`#PricingDashboard_StageNewPrices_NoStoreChange`),
              }),
            _(_) &&
              _ &&
              (0, _.jsx)(`div`, {
                className: `Xloihdj9v2Y-`,
                children: _(
                  `#PricingDashboard_PriceProposal_Publish_CooldownWarning`,
                ),
              }),
            (0, _.jsx)(_, {
              rgLocalPriceOverrides: _,
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let _ = _(),
    [_, _] = _.useState(0),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(!1);
  return {
    fnPublish: _.useCallback(async () => {
      (_(1), _(void 0), _(!1));
      let _ = await _(_);
      if (_.success != 1) {
        let _ = _.success == 40;
        return (_(_ ? _.msg : void 0), _(_ && !!_.cooldown), _(3), !1);
      }
      return (_(2), !0);
    }, [_, _, _]),
    ePublishState: _,
    strPublishError: _,
    bBlockedByCooldown: _,
  };
}
function _(_, _) {
  let [_, _] = _.useState(void 0),
    _ = _(),
    _ = _(60);
  return (
    _.useEffect(() => {
      _ &&
        (_(void 0),
        _([_], void 0, 6e4).then(async (_) => {
          _(_);
        }));
    }, [_, _, _, _]),
    _
      ? _ == null
        ? 1
        : _ == 1
          ? _(_).every((_) => _.rtStartDate > _ + _ || _.rtEndDate < _)
            ? 2
            : 4
          : 3
      : 2
  );
}
function _(_) {
  let { packageID: _, bShowCancel: _ } = _,
    _ = _(_),
    _ = _(_),
    _ = _ && _(_.rtSubmitted),
    [_, _] = _(_?.submitterID),
    _ = _ ? _.persona_name : _?.submitterID,
    _ = `PackageMore_` + _,
    _ = null,
    _ = null,
    _ = null;
  _
    ? ((_ = _),
      (_ = _(`#PricingDashboard_PriceProposal_NeedsReview_ttip`)),
      (_ = _(`#PricingDashboard_PriceProposal_NeedsReview`)))
    : _?.eState == 1 && _.bPartnerWillPublish
      ? ((_ = _),
        (_ = _(
          `#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip`,
          _,
          _,
        )),
        (_ = _(
          `#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish`,
        )))
      : _?.eState == 1 && !_.bPartnerWillPublish
        ? ((_ = _),
          (_ = _(
            `#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish_ttip`,
            _,
            _,
          )),
          (_ = (0, _.jsxs)(`div`, {
            children: [
              _(`#PricingDashboard_PriceProposal_WaitingForReview`),
              (0, _.jsx)(`br`, {}),
              (0, _.jsx)(`span`, {
                children: _(
                  `#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish`,
                ),
              }),
            ],
          })))
        : _?.eState == 4
          ? ((_ = _),
            (_ = _(
              _(_)
                ? `#PricingDashboard_PriceProposal_Approved_ttip`
                : `#PricingDashboard_PriceProposal_Approved_Stage_ttip`,
            )),
            (_ = (0, _.jsx)(_, {
              packageID: _,
            })))
          : ((_ = _),
            (_ = _(`#PricingDashboard_PriceProposal_NoneInFlight_ttip`)),
            (_ = _(`#PricingDashboard_PriceProposal_NoneInFlight`)));
  let _ = () =>
      (0, _.jsx)(_, {
        packageID: _,
      }),
    _ = _ && (_ || !!_);
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      (0, _.jsxs)(_, {
        toolTipContent: _,
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
          }),
          _,
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          hoverKey: _,
          className: void 0,
          renderHover: _,
        }),
    ],
  });
}
function _(_) {
  let _ = _(_),
    _ = _(_);
  return _
    ? _.eState == 4
      ? _
        ? {
            bApproved: !0,
            strLabel: `#PricingDashboard_ProposedPrice_Status_Approved`,
            strMessage: `#PricingDashboard_ProposedPrice_CallOut_Approved`,
          }
        : {
            bApproved: !0,
            strLabel: `#PricingDashboard_ProposedPrice_Status_Approved_Stage`,
            strMessage: `#PricingDashboard_ProposedPrice_CallOut_Approved_Stage`,
          }
      : _.bPartnerWillPublish
        ? {
            bApproved: !1,
            strLabel: `#PricingDashboard_ProposedPrice_Status_InReview`,
            strMessage: _
              ? `#PricingDashboard_ProposedPrice_CallOut_InReview`
              : `#PricingDashboard_ProposedPrice_CallOut_InReview_Stage`,
          }
        : {
            bApproved: !1,
            strLabel: `#PricingDashboard_ProposedPrice_Status_InReview_AutoPublish`,
            strMessage: `#PricingDashboard_ProposedPrice_CallOut_InReview_AutoPublish`,
          }
    : null;
}
function _(_) {
  let _ = _(_.packageID);
  return _
    ? (0, _.jsx)(_, {
        size: `4`,
        color: _.bApproved ? `text-success` : `text-warning`,
        children: _(_.strMessage),
      })
    : null;
}
function _(_) {
  let _ = _(_.packageID);
  return _
    ? (0, _.jsx)(_, {
        size: `3`,
        color: _.bApproved ? `text-success` : `text-warning`,
        children: _(_.strLabel),
      })
    : null;
}
function _(_) {
  let { packageID: _ } = _,
    [_, _, _] = _(),
    _ = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        onClick: _,
        children: _(
          _
            ? `#PricingDashboard_PriceProposal_PublishDialog_Button`
            : `#PricingDashboard_StageNewPrices`,
        ),
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          packageID: _,
          bPackageVisible: _,
          closeModal: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { packageID: _ } = _,
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _ &&
          (0, _.jsx)(`div`, {
            className: `dIR-rFd35NQ-`,
            onClick: _,
            children: _(`#PricingDashboard_RevertAllPackage`),
          }),
        !!_ &&
          (0, _.jsx)(`div`, {
            className: `dIR-rFd35NQ-`,
            onClick: _,
            children: _(`#PricingDashboard_CancelPriceProposal`),
          }),
      ],
    }),
  });
}
function _(_) {
  let { closeModal: _ } = _,
    _ = _(),
    _ = _();
  return (0, _.jsxs)(_, {
    strTitle: _(`#PackageGrid_DiscardChangesTitle`),
    strOKButtonText: _(`#PackageGrid_DiscardChangesButton`),
    onOK: _,
    bDestructiveWarning: !0,
    closeModal: _,
    children: [
      _(`#PricingDashboard_DiscardChangesExplanation`, _.length),
      (0, _.jsx)(_, {
        rgLocalPriceOverrides: _,
      }),
    ],
  });
}
var _ = 30,
  _ = 40;
function _(_) {
  let { bReloadPageOnSave: _ } = _,
    _ = _()?.length ?? 0,
    _ = _ > 0,
    [_, _, _] = _(),
    [_, _, _] = _();
  return (0, _.jsxs)(`div`, {
    className: _(_, _ && `wfA7TOLqp5Y-`),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#PackageGrid_PendingChangeCount`, _),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            onClick: _,
            disabled: _ == 0,
            className: _(_, _),
            children: _(`#PackageGrid_SaveChangesDialogButton`),
          }),
          (0, _.jsx)(_, {
            active: _,
            children: (0, _.jsx)(_, {
              closeModal: _,
              bReloadPageOnSave: _,
            }),
          }),
          (0, _.jsx)(_, {
            className: _,
            onClick: _,
            children: _(`#PackageGrid_DiscardChangesDialogButton`),
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
function _() {
  return _.useCallback(
    (_, _) =>
      _(
        (0, _.jsx)(_, {
          strContinueUrl: _,
        }),
        _(_),
      ),
    [],
  );
}
function _(_) {
  return _.filter((_) => _.nPriceInCents > _.nOldPriceInCents).map(
    (_) => _.packageID,
  );
}
function _(_) {
  let [_, _] = _.useState(void 0),
    _ = _(),
    _ = _(60);
  return (
    _.useEffect(() => {
      _(void 0);
      let _ = _(_);
      _.length > 0
        ? _(_, void 0, 6e4).then((_) => {
            _(_);
          })
        : _(1);
    }, [_, _, _]),
    _.useMemo(() => {
      if (_ === void 0) return null;
      if (_ != 1)
        return {
          days: 0,
          loadFailed: !0,
        };
      let _ = 2 ** 53 - 1,
        _ = _(_);
      for (let _ of _) {
        let _ = _(_);
        for (let _ of _) {
          if (_.rtStartDate < _) continue;
          let _ = Math.floor((_.rtStartDate - _) / _.PerDay);
          _ = Math.min(_, _);
        }
      }
      return {
        days: _,
        loadFailed: !1,
      };
    }, [_, _, _])
  );
}
var _ = 5;
function _(_) {
  let { rgViolations: _ } = _;
  if (_.length == 0) return null;
  let _ = _.slice(0, _),
    _ = _.length - _.length,
    _ = (0, _.jsx)(_, {
      href: `https://partner.steamgames.com/doc/store/pricing`,
    });
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _.map((_) =>
        (0, _.jsx)(
          `div`,
          {
            className: _,
            children: _(
              _.bTooLow
                ? `#PricingDashboard_PreviewWarning_TooLow`
                : `#PricingDashboard_PreviewWarning_TooHigh`,
              _(_.packageID),
              _.strPriceKey,
              _(_.nPriceInCents, _.strPriceKey).join(``),
              _(_.nLimitInCents, _.strPriceKey).join(``),
            ),
          },
          `${_.packageID}_${_.strPriceKey}`,
        ),
      ),
      _ > 0 &&
        (0, _.jsx)(`div`, {
          className: `wgrJtAuBnVo-`,
          children: _(`#PricingDashboard_PreviewWarning_MorePriceProblems`, _),
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#PricingDashboard_PreviewWarning_SeeRules`, _),
      }),
    ],
  });
}
function _(_) {
  let { closeModal: _, strContinueUrl: _, bReloadPageOnSave: _ } = _,
    _ = _(),
    _ = _(),
    [_, _] = _.useState(void 0),
    _ = _(_);
  if (!_) return null;
  let _ = !!_,
    _ = _(
      _
        ? `#PackageGrid_NavigationWarning_Title`
        : `#PricingDashboard_SavePricesTitle`,
    ),
    _ = _(`#PricingDashboard_SavePricesExplanation`, _.length);
  if (_.loadFailed)
    return (0, _.jsx)(_, {
      strTitle: _,
      bAlertDialog: !0,
      onOK: _,
      onCancel: _,
      closeModal: _,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _(
          `#PricingDashboard_SavePrices_FailedToLoad`,
          (0, _.jsx)(`div`, {}),
          (0, _.jsx)(`div`, {}),
        ),
      }),
    });
  let _ = [],
    _ = new Set(),
    _ = new Set(),
    _ = new Set();
  for (let _ of _) {
    let { packageID: _, strPriceKey: _, nPriceInCents: _ } = _,
      { nMinPriceInCents: _, nMaxPriceInCents: _ } = _(_, _);
    (_ < _
      ? _.push({
          packageID: _,
          strPriceKey: _,
          nPriceInCents: _,
          nLimitInCents: _,
          bTooLow: !0,
        })
      : _ &&
        _ > _ &&
        _.push({
          packageID: _,
          strPriceKey: _,
          nPriceInCents: _,
          nLimitInCents: _,
          bTooLow: !1,
        }),
      _.nPriceInCents > _.nOldPriceInCents &&
        (_.add(_.strPriceKey), _(_) && _.add(_.strPriceKey)),
      _.add(_.packageID));
  }
  let _ = Array.from(_),
    _ = Array.from(_),
    _ = _(_),
    _;
  if (_.length > 0) {
    let _ = _.map((_) => _(_));
    _ = _(`#PricingDashboad_RequiredPrices`, _.join(`, `));
  }
  let _ = _.length > 0 || _ === void 0 || _.length != 0,
    _ = (_) => {
      _ ? (window.location.href = _) : _ && !_ && window.location.reload();
    },
    _ = () => {
      _ === void 0
        ? console.error(`Pricing:SaveChangesDialog auto publish undefined`)
        : (_.closeModal(),
          _(
            (0, _.jsx)(_, {
              bAutoPublish: _,
              fnOnSuccess: _,
            }),
            window,
          ));
    };
  return (0, _.jsx)(_, {
    title: _,
    onOK: _,
    onCancel: _.closeModal,
    bDestructiveWarning: _,
    closeModal: _,
    children: (0, _.jsxs)(_, {
      className: _,
      children: [
        (0, _.jsxs)(_, {
          className: _,
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `ABD5cRto1DQ-`,
                children: _(`#PackageGrid_NavigationWarning`),
              }),
            _,
            (0, _.jsx)(_, {
              rgViolations: _,
            }),
            _ &&
              (0, _.jsxs)(`div`, {
                className: `_5wYYMpXLWKI-`,
                children: [` `, _, ` `],
              }),
            (0, _.jsx)(_, {
              rgLocalPriceOverrides: _,
            }),
            (0, _.jsx)(_, {
              rgIncreasedPriceKeys: _,
              rgCooldownPriceKeys: _,
              nextDiscount: _.days,
            }),
            (0, _.jsx)(_, {
              value: _,
              onChange: _,
              nextDiscount: _.days,
            }),
          ],
        }),
        (0, _.jsx)(_, {
          children: _
            ? (0, _.jsx)(_, {
                strOKText: _(`#Button_Save`),
                onOK: _,
                bOKDisabled: _,
                strUpdateText: _(`#PackageGrid_NavigateWithoutSavingButton`),
                onUpdate: () => {
                  (_(), _.closeModal(), _(!0));
                },
                onCancel: _.closeModal,
              })
            : (0, _.jsx)(_, {
                strOKText: _(`#Button_Save`),
                onOK: _,
                bOKDisabled: _,
                onCancel: _.closeModal,
              }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { rgIncreasedPriceKeys: _, rgCooldownPriceKeys: _, nextDiscount: _ } = _,
    _;
  return (
    _ < _
      ? (_ = _(`#PricingDashboard_SavePrice_FutureDiscountTooSoon`, _))
      : _ < _
        ? (_ = _(`#PricingDashboard_SavePrice_FutureDiscountSoon`, _, _))
        : ((_ = _(`#PricingDashboard_SavePrice_CooldownWarning`, _)), (_ = _)),
    _.length == 0
      ? null
      : (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                angle: 0,
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: void 0,
                  children: [` `, _, ` `],
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(
                    `#PricingDashboard_SavePrice_IncreasedCurrencies`,
                    _.length,
                    _.join(`, `),
                  ),
                }),
              ],
            }),
          ],
        })
  );
}
function _(_) {
  let { value: _, onChange: _ } = _,
    _ = () => _(!0),
    _ = () => _(!1),
    _ = _.nextDiscount <= _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        checked: _ === !1,
        onChange: _,
        label: _(`#PricingDashboard_AutoPublish_Disabled`),
      }),
      (0, _.jsx)(_, {
        className: _,
        checked: _ === !0,
        disabled: _,
        onChange: _,
        label: _(`#PricingDashboard_AutoPublish_Enabled`),
      }),
    ],
  });
}
var _ = {
  USD_CIS: `#PricingDashboard_UnappliedProposal_PriceKeyName_USD_CIS`,
  USD_LATAM: `#PricingDashboard_UnappliedProposal_PriceKeyName_USD_LATAM`,
  USD_MENA: `#PricingDashboard_UnappliedProposal_PriceKeyName_USD_MENA`,
  USD_SASIA: `#PricingDashboard_UnappliedProposal_PriceKeyName_USD_SASIA`,
};
function _(_) {
  let { response: _, fnResolve: _ } = _,
    { unappliedProposal: _, newProposal: _ } = _,
    _ = _(_.rtSubmitted),
    _ = Array.from(
      new Set([
        ...Object.keys(_?.prices ?? {}),
        ...Object.keys(_.prices ?? {}),
      ]),
    );
  return (0, _.jsx)(_, {
    className: _,
    strTitle: _(`#PricingDashboard_UnappliedProposal_Title`),
    strDescription: (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`p`, {
          children: _(
            `#PricingDashboard_UnappliedProposal_Description`,
            _(_.packageID),
            _,
          ),
        }),
        (0, _.jsx)(`p`, {
          children: _(`#PricingDashboard_UnappliedProposal_Instructions`),
        }),
      ],
    }),
    strOKButtonText: _(`#PricingDashboard_UnappliedProposal_Proceed`),
    strCancelButtonText: _(`#Button_Cancel`),
    onOK: () => _(!0),
    onCancel: () => _(!1),
    bDestructiveWarning: !0,
    children:
      _.length > 0 &&
      (0, _.jsxs)(`table`, {
        className: `eQGCJS38cLQ-`,
        children: [
          (0, _.jsx)(`thead`, {
            children: (0, _.jsxs)(`tr`, {
              children: [
                (0, _.jsx)(`th`, {
                  children: _(`#PricingDashboard_UnappliedProposal_PriceKey`),
                }),
                (0, _.jsx)(`th`, {
                  children: _(
                    `#PricingDashboard_UnappliedProposal_PriceKeyName`,
                  ),
                }),
                (0, _.jsxs)(`th`, {
                  className: `AJ-VLRenOm8-`,
                  children: [
                    _(`#PricingDashboard_UnappliedProposal_UnappliedPrice`),
                    (0, _.jsx)(`br`, {}),
                    _(`#PricingDashboard_UnappliedProposal_SubmittedDate`, _),
                  ],
                }),
                (0, _.jsx)(`th`, {
                  children: _(`#PricingDashboard_UnappliedProposal_NewPrice`),
                }),
              ],
            }),
          }),
          (0, _.jsx)(`tbody`, {
            children: _.map((_) => {
              let _ = Number(_.prices?.[_] ?? 0),
                _ = Number(_?.prices?.[_] ?? 0);
              return (0, _.jsxs)(
                `tr`,
                {
                  children: [
                    (0, _.jsx)(`td`, {
                      children: _,
                    }),
                    (0, _.jsx)(`td`, {
                      children: _[_] ? _(_[_]) : _(_),
                    }),
                    (0, _.jsx)(`td`, {
                      children: _(_, _).join(``),
                    }),
                    (0, _.jsx)(`td`, {
                      className: _(_ != _ && `SDOQ9-PH82Y-`),
                      children: _(_, _).join(``),
                    }),
                  ],
                },
                _,
              );
            }),
          }),
        ],
      }),
  });
}
function _(_) {
  let { closeModal: _, bAutoPublish: _, fnOnSuccess: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(`SaveProgressDialog`),
    [_, _] = _.useState(0),
    [_, _] = _.useState(null),
    [_, _] = _.useState(null),
    _ = () => {
      _.cancel(`cancelled by user`);
    },
    _ = !_;
  return (
    _.useEffect(() => {
      (async () => {
        let _ = Array.from(new Set(_.map((_) => _.packageID)));
        for (let _ = 0; _ < _.length; _++) {
          _(_);
          let _ = _[_],
            _ = await _(_, _, !1, _);
          if (_.token.reason) return;
          if (_.unappliedProposal) {
            let _ = await new Promise((_) =>
              _({
                response: _,
                fnResolve: _,
              }),
            );
            if ((_(null), !_)) {
              _(_(`#PricingDashboard_UnappliedProposal_Declined`, _(_)));
              return;
            }
            if (((_ = await _(_, _, !0, _)), _.token.reason)) return;
          }
          if (_.success != 1) {
            _(
              _.msg && _.success != 10
                ? _.msg
                : _(`#PricingDashboard_SavePricesError`),
            );
            return;
          }
        }
        (_(_.length), _(), _());
      })();
    }, []),
    _
      ? (0, _.jsx)(_, {
          response: _.response,
          fnResolve: _.fnResolve,
        })
      : (0, _.jsx)(_, {
          strTitle: _(`#PackageGrid_SaveInProgress`),
          bAlertDialog: !!_,
          strOKButtonText: _(_ ? `#Button_Close` : `#Button_OK`),
          onOK: _ ? _ : _,
          onCancel: _,
          closeModal: _,
          bDestructiveWarning: !0,
          children:
            _ ??
            (0, _.jsx)(_, {
              position: `center`,
              string: _(`#PricingDashboard_Progress`, _),
            }),
        })
  );
}
