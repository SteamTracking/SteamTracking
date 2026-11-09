import { _, _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _, _, _, _ } from "./src.js";
import { _ } from "./usedataloader.client.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./dialogs.js";
import { _ } from "./storebrowsequerycontext.js";
import { _ } from "./useMutation.js";
import { _, _ } from "./pricingguidelineobject.js";
import { _ } from "./flex.js";
import { _ } from "./button.js";
import { _ } from "./text.js";
import { _, _, _, _, _, _, _, _ } from "./tabulatorutils.js";
import { _ } from "./modals.js";
import { _, _ } from "./simplesuccesserror.js";
import { _ } from "./playerstore.js";
import { _ } from "./localization3.js";
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `hYGYOUjTOx4-`;
function _() {
  return !(
    typeof HTMLElement < `u` &&
    typeof HTMLElement.prototype == `object` &&
    `popover` in HTMLElement.prototype
  );
}
async function _() {
  _() &&
    (await _(() => import(`./popover-fn.js`), [], import.meta.url)).apply();
}
var _ = _();
_();
function _(_) {
  let [_, _] = _(_, `-`);
  return _ === `left` || _ === `right` ? [void 0, _] : [_, _];
}
function _(_) {
  let {
      direction: _,
      ignoreHorizontal: _,
      ignoreVertical: _,
      dismissOnClick: _,
      interactionMode: _ = 0,
    } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useMemo)(() => _(_), [_]),
    _ = (0, _.useCallback)(() => {
      if (!_.current || !_.current) return;
      let _ = _.current.getBoundingClientRect(),
        _ = _.current.getBoundingClientRect(),
        _ = _,
        _ = _.current.matches(`:dir(rtl)`);
      (_ && (_ === `left` ? (_ = `right`) : _ === `right` && (_ = `left`)),
        _.current.style.setProperty(`--parentWidth`, `${_.width}px`),
        _.current.style.setProperty(`--parentHeight`, `${_.height}px`));
      let _ = 0;
      if (!_) {
        if (_.width) {
          if (
            (_ === `left` && (_ = (_ ? _.right : _.left) - _.width),
            _ === `right`)
          ) {
            let _ = _ ? _.left : _.right;
            _ = document.body.clientWidth - (_ + _.width);
          }
          (_ === void 0 &&
            (_ = _
              ? _.right - _.width
              : document.body.clientWidth - (_.left + _.width)),
            (_ = Math.min(_, 0)));
        }
        _ === `left`
          ? _
            ? ((_.current.style.left = `unset`),
              (_.current.style.right = `${document.body.clientWidth - _.right + _}px`))
            : ((_.current.style.left = `unset`),
              (_.current.style.right = `${document.body.clientWidth - _.left + _}px`))
          : _ === `right`
            ? _
              ? ((_.current.style.left = `${_.left + _}px`),
                (_.current.style.right = `unset`))
              : ((_.current.style.left = `${_.right + _}px`),
                (_.current.style.right = `unset`))
            : _ === void 0 &&
              (_
                ? ((_.current.style.left = `unset`),
                  (_.current.style.right = `${document.body.clientWidth - _.right + _}px`))
                : ((_.current.style.left = `${_.left + _}px`),
                  (_.current.style.right = `unset`)));
      }
      _ ||
        (_ === `down`
          ? ((_.current.style.top = `${_.bottom}px`),
            (_.current.style.bottom = `unset`),
            _.current.style.setProperty(
              `--availableHeight`,
              `${document.documentElement.clientHeight - _.bottom}px`,
            ))
          : _ === `up`
            ? ((_.current.style.top = `unset`),
              (_.current.style.bottom = `${document.documentElement.clientHeight - _.top}px`),
              _.current.style.setProperty(`--availableHeight`, `${_.top}px`))
            : _ === void 0 &&
              ((_.current.style.top = `${_.top}px`),
              (_.current.style.bottom = `unset`),
              _.current.style.setProperty(
                `--availableHeight`,
                `${document.documentElement.clientHeight - _.top}px`,
              )));
    }, [_, _, _, _]),
    _ = (0, _.useMemo)(() => {
      if (_.current) return _(_.current);
    }, [_.current]);
  (0, _.useEffect)(
    () =>
      _
        ? (_.current?.showPopover(),
          _(),
          _?.addEventListener(`scroll`, _),
          window.addEventListener(`scroll`, _),
          () => {
            (_?.removeEventListener(`scroll`, _),
              window.addEventListener(`scroll`, _));
          })
        : (window.sessionStorage.getItem(`DEBUG_StickyContextMenus`) !=
            `true` && _.current?.hidePopover(),
          () => {}),
    [_, _, _],
  );
  let _ = (0, _.useCallback)(() => {
      (_(), _(!0), (_.current = !0));
    }, [_]),
    _ = (0, _.useCallback)(() => {
      ((_.current = !1), _.current || _(!1));
    }, []),
    _ = (0, _.useCallback)(() => {
      ((_.current = !0), _(!0));
    }, []),
    _ = (0, _.useCallback)(
      (_) => {
        _.current?.contains(_.target) && _();
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current?.contains(_.target) && _();
      },
      [_],
    ),
    _ = (0, _.useCallback)(() => {
      ((_.current = !1), _.current || _(!1));
    }, []),
    _ = (0, _.useCallback)(
      (_) => {
        _.current?.contains(_.target) && _();
      },
      [_],
    ),
    _ = (0, _.useCallback)(() => {
      (_(), _());
    }, [_, _]),
    _ = (0, _.useCallback)(
      (_) => {
        _.key === `Enter` && (_.preventDefault(), _ ? _() : _());
      },
      [_, _, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        !_.currentTarget.contains(_.relatedTarget) &&
          !_.current?.contains(_.relatedTarget) &&
          _();
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _ === 2 && _();
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _.relatedTarget && !_.currentTarget.contains(_.relatedTarget),
          _ = !_.relatedTarget && !_.current;
        (_ || _) && (_(), _(!1));
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current?.contains(_.target) && (_ && _ ? _() : _.current && _());
      },
      [_, _, _, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current?.contains(_.target) &&
          (_.key === `Enter` && _ && _ ? _() : _(),
          _.key === `Escape` && _ && (_(), _.stopPropagation()));
      },
      [_, _, _, _],
    ),
    _;
  _ === 0 && !_
    ? (_ = (_) => {
        (_.preventDefault(), _());
      })
    : _ === 1 && (_ = _ ? _ : _);
  let _ = {
      "aria-expanded": _,
      role: `button`,
      onMouseEnter: _ === 0 ? _ : void 0,
      onMouseLeave: _ === 0 ? _ : void 0,
      onClick: _,
      ref: _,
      onKeyDown: _,
      onFocus: _,
      onBlur: _,
    },
    _ = {
      popover: `manual`,
      ref: _,
      onMouseEnter: _,
      onMouseLeave: _,
      onFocus: _,
      onBlur: _,
      onClick: _,
      onKeyDown: _,
      className: _,
    };
  return (
    (0, _.useImperativeHandle)(
      _.ref,
      () => ({
        show: _,
        hide: _,
        close: _,
      }),
      [_, _, _],
    ),
    {
      isShowingMenu: _,
      triggerProps: _,
      menuProps: _,
      closeMenu: _,
    }
  );
}
function _(_, _) {
  return (_) => {
    (_?.(_), _?.(_));
  };
}
function _(_) {
  let {
      direction: _,
      interactionMode: _ = 0,
      ignoreHorizontal: _,
      ignoreVertical: _,
      dismissOnClick: _,
      menuTarget: _,
      className: _,
      children: _,
      renderWhenClosed: _ = !0,
      ..._
    } = _,
    { isShowingMenu: _, triggerProps: _, menuProps: _, closeMenu: _ } = _(_),
    _ = _.useRef(null),
    _ = _(_, _.props.navRef),
    _ = _.useRef(null);
  return (
    _.useEffect(() => {
      _
        ? _.current?.TakeFocus()
        : _.current?.BFocusWithin() && _.current?.TakeFocus();
    }, [_]),
    (0, _.jsxs)(_.Fragment, {
      children: [
        _.cloneElement(_, {
          ..._,
          onMouseEnter: _(_.props.onMouseEnter, _.onMouseEnter),
          onMouseLeave: _(_.props.onMouseLeave, _.onMouseLeave),
          navRef: _,
        }),
        (0, _.jsx)(_, {
          ..._,
          ..._,
          className: (0, _.default)(_.className, _),
          navRef: _,
          onCancel: _,
          onFocusWithin: (_) => !_ && _(),
          childFocusDisabled: !_,
          children: (0, _.jsx)(_, {
            children: (_ || _) && _,
          }),
        }),
      ],
    })
  );
}
var _ = (function (_) {
  return ((_.k_FreeToPlay = `freetoplay`), (_.k_Free = `free`), _);
})({});
function _(_, _) {
  return _({
    mutationKey: [`settofree`, _],
    mutationFn: async (_) => {
      let { displayOption: _, fnOnStoreSaveSucceed: _ } = _;
      if (!_ || !_) throw Error(`Invalid parameters provided`);
      {
        let _ = new FormData();
        if (
          (_.set(`sessionid`, _()),
          _.set(`appid`, `` + _),
          _.set(
            `displaytext`,
            _ == _.k_Free
              ? `#PurchaseButton_Free`
              : `#PurchaseButton_FreeToPlay`,
          ),
          !(
            await fetch(`${_.PARTNER_BASE_URL}store/ajaxupdatef2pstore`, {
              method: `POST`,
              credentials: `include`,
              body: _,
            })
          )._)
        )
          throw Error(_.Localize(`#FreeOnDemand_Store_Error`, _));
      }
      _ && _();
      {
        let _ = new FormData();
        if (
          (_.set(`sessionid`, _()),
          _.set(`action`, `save`),
          _.set(`billing_type`, `12`),
          !(
            await fetch(`${_.PARTNER_BASE_URL}store/ajaxpackagesave/${_}`, {
              method: `POST`,
              credentials: `include`,
              body: _,
            })
          )._)
        )
          throw Error(_.Localize(`#FreeOnDemand_Package_Error`, _));
      }
    },
  });
}
function _(_) {
  let { strButtonOverride: _, appids: _, nPackageID: _, onClick: _ } = _,
    _ = _(),
    [_, _, _] = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _
          ? _.Localize(`#FreeOnDemand_Button_ttip`)
          : _.Localize(`#FreeOnDemand_Button_disabled_ttip`),
        children: (0, _.jsx)(_, {
          onClick: () => {
            (_?.(), _());
          },
          color: `dull`,
          children: _ || _.Localize(`#FreeOnDemand_Button`),
        }),
      }),
      (0, _.jsx)(_, {
        active: _,
        children:
          _ && _ && _.length == 1
            ? (0, _.jsx)(_, {
                closeModal: _,
                nPackageID: _,
                nAppID: _[0],
              })
            : (0, _.jsx)(_, {
                closeModal: _,
              }),
      }),
    ],
  });
}
function _(_) {
  let { closeModal: _, nAppID: _, nPackageID: _ } = _,
    [_, _] = (0, _.useState)(_.k_FreeToPlay),
    _ = _(_, _),
    _ = _();
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _.Localize(`#FreeOnDemand_Title`),
        closeModal: () => {
          (window.location.replace(
            `${_.PARTNER_BASE_URL}store/packagelanding/${_}`,
          ),
            _());
        },
      })
    : (0, _.jsxs)(_, {
        strTitle: _.Localize(`#FreeOnDemand_Title`),
        strDescription: _.Localize(`#FreeOnDemand_Desc`),
        strOKButtonText: _.Localize(`#FreeOnDemand_Button_Confirm`),
        onCancel: _,
        onOK: async () => {
          try {
            (_.fnSetLoading(!0),
              _.fnSetThrobber(_.Localize(`#FreeOnDemand_Convert_Store`)),
              await _.mutateAsync({
                displayOption: _,
                fnOnStoreSaveSucceed: () => {
                  _.fnSetThrobber(_.Localize(`#FreeOnDemand_Convert_Package`));
                },
              }),
              _.fnSetSuccess(!0),
              _.fnSetStrSuccess(_.Localize(`#FreeOnDemand_ConvertSuccess`)));
          } catch (_) {
            (_.fnSetError(!0),
              _.fnSetStrError(
                _ instanceof Error
                  ? _.message
                  : _.Localize(`#Error_ErrorCommunicatingWithNetwork`),
              ));
          }
        },
        children: [
          (0, _.jsx)(`br`, {}),
          (0, _.jsxs)(_, {
            paddingTop: `4`,
            children: [
              (0, _.jsx)(_, {
                size: `4`,
                children: _.Localize(`#FreeOnDemand_Radio`),
              }),
              (0, _.jsx)(_, {
                padding: `4`,
                background: `greyneutral-6`,
                radius: `sm`,
                children: (0, _.jsx)(_, {
                  value: _,
                  options: [_.k_FreeToPlay, _.k_Free],
                  getOptionLabel: (_) =>
                    _ == _.k_Free
                      ? _.Localize(`#FreeOnDemand_Radio_Free`)
                      : _.Localize(`#FreeOnDemand_Radio_FreeToPlay`),
                  onValueChange: _,
                }),
              }),
            ],
          }),
        ],
      });
}
function _(_) {
  let { closeModal: _ } = _,
    _ = `${_.SUPPORT_BASE_URL}wizard/HelpWithPublishing?issueid=915`;
  return (0, _.jsxs)(_, {
    strTitle: _.Localize(`#FreeOnDemand_Title`),
    strDescription: _.Localize(`#FreeOnDemand_Desc_NotPermitted`),
    closeModal: _,
    children: [
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`a`, {
        href: _,
        target: `_blank`,
        rel: `noreferrer`,
        children: _,
      }),
    ],
  });
}
function _() {
  let [_] = (0, _.useState)(_(`bCanSetFree`, `application_config`));
  return _;
}
var _ = `_3K6UndZwcp4-`,
  _ = `NkwNAGTfxNc-`,
  _ = `Cyr9AOaXJqQ-`,
  _ = `mnGEBt7lYCc-`,
  _ = `UU5wV93Khvw-`,
  _ = `X6JiGhh9z-Y-`,
  _ = `ffBlm-5By18-`;
function _(_) {
  let _ = (0, _.jsx)(`button`, {
    className: _,
    children: (0, _.jsx)(_, {}),
  });
  return (0, _.jsx)(_, {
    menuTarget: _,
    ..._,
  });
}
function _(_) {
  let { strButton: _, strTooltip: _ } = _,
    _ = (0, _.jsxs)(_, {
      onClick: () => {},
      children: [
        (0, _.jsx)(_, {
          toolTipContent: _,
          children: (0, _.jsx)(`span`, {
            children: _,
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _(_, `DialogDropDown_Arrow`),
          children: (0, _.jsx)(_, {}),
        }),
      ],
    });
  return (0, _.jsx)(_, {
    menuTarget: _,
    ..._,
  });
}
function _(_) {
  let { menuTarget: _ } = _,
    _ = _.useRef(null);
  return (0, _.jsx)(_, {
    menuTarget: _,
    direction: `down`,
    interactionMode: 1,
    ref: _,
    children: (0, _.jsx)(_, {
      onSelect: () => _.current?.close(),
      ..._,
    }),
  });
}
function _(_) {
  let {
      fnGetUSDPriceInCents: _,
      fnOnUpdate: _,
      strDescription: _,
      bCanSetToFree: _,
      nPackageID: _,
      onSelect: _,
      appids: _,
    } = _,
    _ = _(),
    _ = _();
  if (!_) return null;
  let _ = _.GetUSDPricePointsInCents();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _ || _.Localize(`#PricingGuideline_Default`),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ !== void 0 &&
            (0, _.jsx)(
              `div`,
              {
                className: `X6JiGhh9z-Y-`,
                children: (0, _.jsx)(_, {
                  nPackageID: _,
                  strButtonOverride: _.Localize(`#FreeOnDemand_InlineOption`),
                  appids: _,
                }),
              },
              `settofree`,
            ),
          _.map((_) =>
            (0, _.jsx)(
              `button`,
              {
                onClick: () => {
                  (_(), _(_));
                },
                className: _({
                  [_]: !0,
                  [_]: _ == _,
                }),
                children: _(_, 1),
              },
              _,
            ),
          ),
        ],
      }),
    ],
  });
}
var _ = `vjGU82Mayj0-`,
  _ = `_8PTPddq6sxo-`,
  _ = `rgTIIu2i7eg-`,
  _ = `XslZzcoK48s-`,
  _ = `qt1z-Zd0AzA-`,
  _ = `LgvOq0X1cko-`,
  _ = `uHRKRyDdHdI-`,
  _ = `mCOxvhXmWGA-`,
  _ = `TT67blzfGUg-`,
  _ = `CSlvnPWMgb0-`,
  _ = `koOmA3AKKLk-`,
  _ = `QJXb3tYHa2s-`,
  _ = `dIR-rFd35NQ-`,
  _ = `vM-4ZZonFUY-`,
  _ = null;
function _(_) {
  _ = _;
}
function _(_) {
  let { packageID: _, strPriceKey: _ } = _,
    {
      nPriceInCents: _,
      nPublishedPriceInCents: _,
      nProposedPriceInCents: _,
      nSuggestedPriceInCents: _,
      fnSetPrice: _,
    } = _(_, _),
    { nPriceInCents: _ } = _(_, `USD`),
    _ = !!_ && (!_ || _ != _),
    _ = _(_),
    _ = _ && _(_.rtSubmitted),
    { data: _ } = _(_?.submitterID),
    _ = _ ? _.m_strPlayerName : _?.submitterID,
    _ = _?.eState == 4;
  return (!_ && !_ && !_) || _ != _ + _
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !!_ &&
            (0, _.jsxs)(_, {
              className: `QJXb3tYHa2s-`,
              direction: `left`,
              toolTipContent: _(`#PricingDashboard_CurrentPriceOnStore_ttip`),
              children: [
                (0, _.jsx)(`div`, {
                  className: `dIR-rFd35NQ-`,
                  children: _(`#PricingDashboard_CurrentPriceOnStore`),
                }),
                (0, _.jsx)(`div`, {
                  className: `COSWR-duOjY-`,
                  children: _(_, _).join(``),
                }),
                (0, _.jsx)(_, {
                  className: _(`-SR0r-VcbgY-`, _ == _ && `_0TfgESjlOKw-`),
                  onClick: () => _(_),
                  bDisabled: _ == _,
                  toolTipContent: _(`#PricingDashboard_UseThisOldPrice_ttip`),
                  children: _(`#PricingDashboard_UseThisPrice_Button`),
                }),
              ],
            }),
          _ &&
            (0, _.jsxs)(_, {
              className: `QJXb3tYHa2s-`,
              direction: `left`,
              toolTipContent: _
                ? _(`#PricingDashboard_ApprovedPrice_ttip`)
                : _(`#PricingDashboard_ProposedPrice_ttip`, _, _),
              children: [
                (0, _.jsx)(`div`, {
                  className: `dIR-rFd35NQ-`,
                  children: _(
                    _
                      ? `#PricingDashboard_ApprovedPrice`
                      : `#PricingDashboard_ProposedPrice`,
                  ),
                }),
                (0, _.jsx)(`div`, {
                  className: `COSWR-duOjY-`,
                  children: _(_, _).join(``),
                }),
                (0, _.jsx)(_, {
                  className: _(`-SR0r-VcbgY-`, _ == _ && `_0TfgESjlOKw-`),
                  onClick: () => _(_),
                  bDisabled: _ == _,
                  toolTipContent: _(`#PricingDashboard_UseThisNewPrice_ttip`),
                  children: _(`#PricingDashboard_UseThisPrice_Button`),
                }),
              ],
            }),
          !!_ &&
            (0, _.jsxs)(_, {
              className: `QJXb3tYHa2s-`,
              direction: `left`,
              toolTipContent: _.Localize(
                `#PricingDashboard_Method_SuggestedPrice_ttip`,
                _(_, `USD`).join(``),
              ),
              children: [
                (0, _.jsx)(`div`, {
                  className: `dIR-rFd35NQ-`,
                  children: _.Localize(
                    `#PricingDashboard_Method_SuggestedPrice`,
                  ),
                }),
                (0, _.jsx)(`div`, {
                  className: `COSWR-duOjY-`,
                  children: _(_, _).join(``),
                }),
                (0, _.jsx)(_, {
                  className: _(`-SR0r-VcbgY-`, _ == _ && `_0TfgESjlOKw-`),
                  onClick: () => _(_),
                  bDisabled: _ == _,
                  toolTipContent: _(`#PricingDashboard_UseThisNewPrice_ttip`),
                  children: _(`#PricingDashboard_UseThisPrice_Button`),
                }),
              ],
            }),
        ],
      });
}
function _(_) {
  let { cell: _, row: _ } = _,
    _ = _.original.packageID,
    _ = _.getValue(),
    {
      nPriceInCents: _,
      nPublishedPriceInCents: _,
      nProposedPriceInCents: _,
      fnSetPrice: _,
    } = _(_, _),
    [_, _, _] = _(_, _),
    _ = _(_),
    _ = _.useRef(void 0),
    _ = (_) => {
      let _ = _.target.value.replace(/[^0-9]/g, ``),
        _ = Number(_ || 0);
      if (Number.isNaN(_)) return;
      _.bWholeUnitsOnly && (_ *= 100);
      let _ = 2147483647;
      (_ > _ && (_ = _), _(_));
    },
    { strClassName: _ } = _(_, _),
    _ = _ == `USD`,
    _ = _ ?? _;
  return (0, _.jsxs)(`div`, {
    ref: _,
    onKeyDown: _,
    className: _,
    children: [
      _ != _ &&
        (0, _.jsx)(_, {
          nPriceInCents: _,
          nSavedPriceInCents: _,
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _ && _,
      }),
      (0, _.jsx)(_, {
        menuTarget: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            value: _,
            className: _,
            onChange: _,
            onFocus: () => _(_ + _),
          }),
        }),
        direction: `up`,
        interactionMode: 2,
        dismissOnClick: !0,
        renderWhenClosed: !1,
        children: (0, _.jsx)(_, {
          packageID: _,
          strPriceKey: _,
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _ && _,
      }),
      _ &&
        (0, _.jsx)(_, {
          packageID: _,
          appids: _.original.appids,
          bCanSetToFree: _.original.bCanSetToFree,
        }),
      (0, _.jsx)(_, {
        packageID: _,
        strPriceKey: _,
      }),
    ],
  });
}
function _(_) {
  let { packageID: _, appids: _, bCanSetToFree: _ } = _,
    { fnApplyGuidelines: _ } = _(_());
  return (0, _.jsx)(_, {
    fnGetUSDPriceInCents: () => _(_, `USD`),
    fnOnUpdate: (_) => _(_, _),
    strDescription: _.Localize(
      `#PricingDashboard_GuidelinesPickerDescription_New`,
    ),
    nPackageID: _,
    appids: _,
    bCanSetToFree: _,
  });
}
function _(_) {
  let { packageID: _, strPriceKey: _ } = _,
    { strPriceWarning: _, bBadPrice: _, bShowWarningIcon: _ } = _(_, _);
  return _
    ? (0, _.jsx)(_, {
        className: _,
        strTooltipClassname: _,
        toolTipContent: _,
        direction: `top`,
        children: (0, _.jsx)(_, {
          color: _ ? `rgb(194, 45, 0)` : `#e5af37`,
        }),
      })
    : null;
}
var _ = 2.25,
  _ = 0.5;
function _(_, _) {
  let {
      nPriceInCents: _,
      nPublishedPriceInCents: _,
      nProposedPriceInCents: _,
      nMinPriceInCents: _,
      nMaxPriceInCents: _,
      nMaxDiscountPercentage: _,
      nSuggestedPriceInCents: _,
    } = _(_, _),
    _ = _(_),
    _ = _ == `USD`,
    _ = _ != (_ ?? _),
    _ = _ < _,
    _ = !!_ && _ > _,
    _ = !!_ && _ > _ * 2.25,
    _ = !!_ && _ < _ * 0.5,
    _ = !!_ && _ < _ && !!_,
    _ = !!_ && _ == _ && !!_,
    _ = !1;
  _
    ? (_ = _(`#PricingDashboard_PriceIncreaseDisallowed`))
    : _ && !_
      ? (_ = _(`#PricingDashboard_PriceTooLow_Grandfathered`))
      : _
        ? (_ = _(`#PricingDashboard_PriceTooLow`, _(_, _).join(``)))
        : _
          ? (_ = _(
              `#PricingDashboard_PriceMuchHigherThanMethod`,
              _(_, _).join(``),
            ))
          : _ && _
            ? (_ = _(
                `#PricingDashboard_PriceMuchLowerThanMethod_AndLimitDiscount`,
                _(_, _).join(``),
                _,
              ))
            : _
              ? (_ = _(
                  `#PricingDashboard_PriceMuchLowerThanMethod`,
                  _(_, _).join(``),
                ))
              : _
                ? (_ = _(
                    `#PricingDashboard_PriceCheapAndLowerThanGuidelines`,
                    _,
                  ))
                : _ && (_ = _(`#PricingDashboard_PriceCheap`, _));
  let _ = _ || _,
    _ = _ || _,
    _ = _ || _ || _,
    _ = !_ && !!_ && (!_ || _ != _),
    _ = _?.eState == 4,
    _ = _(
      _,
      _ && `_2jxaWr3nXmY-`,
      _ && `_-58NL0goqOE-`,
      _ && `gWq-S1xg768-`,
      _ && `zJrzoJbAzQ4-`,
      _ && `YhX-7qIsx74-`,
      _ && `rVG5SliiqF4-`,
      _ && `Q7bnsMFI6lE-`,
    );
  return _.useMemo(
    () => ({
      strPriceWarning: _,
      strClassName: _,
      bBadPrice: _,
      bShowSevereWarning: _,
      bShowWarningIcon: _,
    }),
    [_, _, _, _, _],
  );
}
function _(_) {
  let { nPriceInCents: _, nSavedPriceInCents: _ } = _,
    _ = null,
    _ = null,
    _ = null,
    _ = null;
  if (!_) ((_ = _(`#PricingDashboard_PriceIsNew_Short`)), (_ = _(_)));
  else {
    let _ = Math.ceil((100 * (_ - _)) / _),
      _ = _ > _;
    ((_ = _(
      _
        ? `#PricingDashboard_PriceIncreaseBy`
        : `#PricingDashboard_PriceLowerBy`,
      _ + `%`,
    )),
      (_ = _(_, _ && `JsrDuEwdS04-`)),
      (_ = (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          angle: _ ? 0 : 180,
        }),
      })),
      (_ = _ + `%`));
  }
  return (0, _.jsxs)(_, {
    className: _,
    strTooltipClassname: _,
    toolTipContent: _,
    direction: `top`,
    children: [_, _],
  });
}
function _(_) {
  return new Date(_ * 1e3).toLocaleString(_.GetPreferredLocales(), {
    weekday: `long`,
    month: `long`,
    day: `numeric`,
    hour: `numeric`,
    minute: `2-digit`,
  });
}
