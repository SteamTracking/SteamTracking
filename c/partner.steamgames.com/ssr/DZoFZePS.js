var _ = {};
(_.arabic = () => _(() => import(`./C5Ctu49S.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./D8Y0b6bX.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./SWi9J6aw.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./9nhnertI.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./BB7Zm2Ab.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./B9ZGRLx2.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./BOdIv_l8.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./QacdZ6Gs.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./CX_aaG4M.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./IZloUupH.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./BvRtjTIp.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./CewusfBk.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./D7N6QESo.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./DCh8GPYD.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./jGNZx3Nu.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./C8PPrKae.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./ZXR1ww1n.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./DW65bvCr.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./tzxyXpow.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./CTfwRwH5.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./BFEuhkQJ.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./CJ8qesWA.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./xzPaGrHI.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./6cnLUxJy.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./WlyY19Vs.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./ZZ4HOnXw.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./Cso7nxkW.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./j7p8q2p4.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./DzL3anhc.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./Du0A9VCR.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./Bdjs-gME.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./Df3cT_IX.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_) {
  return _.Localize(`#CurrencyCodeDescription_${_(_)}`);
}
var _ = _(_(), 1),
  _ = _();
function _(_) {
  return _(_.getValue());
}
function _(_) {
  let _ = _.getValue(),
    _ = _(_),
    _ = _.Localize(`#Region_Pricing_Tooltip_${_}`);
  return (0, _.jsxs)(`span`, {
    children: [
      _,
      ` `,
      (0, _.jsx)(_, {
        tooltip: _,
      }),
    ],
  });
}
var _ = (function (_) {
  return (_.k_FreeToPlay = `freetoplay`), (_.k_Free = `free`), _;
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
var _ = `TjMNO5LZ8Yk-`;
function _(_) {
  let [_, _] = (0, _.useState)(() => !!_),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null);
  return {
    bLoading: _,
    bError: _,
    bSuccess: _,
    strError: _,
    strSuccess: _,
    elSuccess: _,
    elError: _,
    strThrobber: _,
    fnSetLoading: _,
    fnSetError: _,
    fnSetSuccess: _,
    fnSetStrError: _,
    fnSetStrSuccess: _,
    fnSetElSuccess: _,
    fnSetElError: _,
    fnSetThrobber: _,
  };
}
function _(_) {
  let { strDialogTitle: _, state: _, closeModal: _, strThrobber: _ } = _,
    {
      bLoading: _,
      bError: _,
      bSuccess: _,
      strError: _,
      strSuccess: _,
      elSuccess: _,
      elError: _,
      strThrobber: _,
    } = _;
  return _ || _ || _
    ? (0, _.jsxs)(_, {
        strTitle: _,
        bAlertDialog: !0,
        closeModal: _,
        className: _,
        children: [
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `_5-sVz8IdIeU-`,
              children: _ || _(`#Error_ErrorCommunicatingWithNetwork`),
            }),
          !!_ && _,
        ],
      })
    : _ || _ || _
      ? (0, _.jsx)(_, {
          strTitle: _,
          strDescription: _ || _(`#EventDisplay_Share_Success`),
          bAlertDialog: !0,
          closeModal: _,
          className: _,
          children: (0, _.jsx)(_.Fragment, {
            children: !!_ && _,
          }),
        })
      : (0, _.jsx)(_, {
          strTitle: _,
          className: _,
          bProgressDialog: !0,
          closeModal: () => {},
          children: (0, _.jsx)(_, {
            string: _ || _ || _(`#Loading`),
            size: `medium`,
            position: `center`,
          }),
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
            _?.(), _();
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
          window.location.replace(
            `${_.PARTNER_BASE_URL}store/packagelanding/${_}`,
          ),
            _();
        },
      })
    : (0, _.jsxs)(_, {
        strTitle: _.Localize(`#FreeOnDemand_Title`),
        strDescription: _.Localize(`#FreeOnDemand_Desc`),
        strOKButtonText: _.Localize(`#FreeOnDemand_Button_Confirm`),
        onCancel: _,
        onOK: async () => {
          try {
            _.fnSetLoading(!0),
              _.fnSetThrobber(_.Localize(`#FreeOnDemand_Convert_Store`)),
              await _.mutateAsync({
                displayOption: _,
                fnOnStoreSaveSucceed: () => {
                  _.fnSetThrobber(_.Localize(`#FreeOnDemand_Convert_Package`));
                },
              }),
              _.fnSetSuccess(!0),
              _.fnSetStrSuccess(_.Localize(`#FreeOnDemand_ConvertSuccess`));
          } catch (_) {
            _.fnSetError(!0),
              _.fnSetStrError(
                _ instanceof Error
                  ? _.message
                  : _.Localize(`#Error_ErrorCommunicatingWithNetwork`),
              );
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
function _() {
  let _ = _(`pricing_guideline`, `application_config`);
  if (_) return Promise.resolve(_);
  {
    let _ = _.getQueryData(_());
    return Promise.resolve(_ ?? null);
  }
}
function _() {
  let _ = _(_());
  return (0, _.useMemo)(() => (_.data ? new _(_.data) : null), [_.data]);
}
function _() {
  return {
    queryKey: _(),
    queryFn: async () => await _(),
  };
}
function _() {
  return [`PricingGuideline`];
}
var _ = _(_(), 1);
function _(_, _) {
  return (_) => {
    _?.(_), _?.(_);
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
var _ = `_8mKVRCU0I2U-`,
  _ = `MEsZHkvSW3s-`,
  _ = `fbTidAREwUw-`,
  _ = `ZbjuqivDSug-`,
  _ = `PAWFedTtNSs-`,
  _ = `_4ykH48NbiHo-`,
  _ = {};
(_.arabic = () => _(() => import(`./CY5zGboA.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./CM74RM80.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./Dd9NDnLI.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./CpYIjARD.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./Du3tMJS8.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./BHEsKB00.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./DA5fGAzZ.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./Bfnv92Gu.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./B9bsQALC.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./_TUikoeo.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./Dl2MmUN-.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./Cvywwi2l.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./CuF9Fqsk.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./BLspoPue.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./SQzi9OYS.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./Xv9wivQo.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./BPYF4Y3U.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./DcY5GW1R.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./BbTK8mbw.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./Bz766uHE.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./DUDCBIom.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./m2HTXPfq.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./DbOn9e3q.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./qqgRt17s.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./TMyTEDoo.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./Bedlz2HA.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./DilqXZ_U.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./lfq83IX1.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./B9dM-tX7.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./DiJXyd1R.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./B6NBupVY.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./Ot25K6sL.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
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
                className: `PAWFedTtNSs-`,
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
                  _(), _(_);
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
var _ = 1,
  _ = class {
    m_mapUSDPrice = new Map();
    m_mapKeyToGuidePrice = new Map();
    m_rgUSDPricePointInCents = [];
    m_setConversionMethod = new Set();
    m_setSupportedCurrencies = new Set();
    m_setSupportedRegions = new Set();
    m_rtNewestConvertStart = 0;
    GetKey(_, _, _, _ = _) {
      return `${_}_${_}_${_ || 0}_${_}`;
    }
    GetAvailableConversionMethods() {
      return Array.from(this.m_setConversionMethod).sort();
    }
    GetNewestConvertStartTime() {
      return this.m_rtNewestConvertStart || void 0;
    }
    GetAnyPricePoint() {
      return Array.from(this.m_mapUSDPrice.get(1)?.values() || [])[0];
    }
    BIsSupportCurrencyAndOrRegion(_, _) {
      return _
        ? _ == 1 && this.m_setSupportedRegions.has(_)
        : this.m_setSupportedCurrencies.has(_);
    }
    GetRecommendPrice(_, _, _, _ = _) {
      let _ = this.GetKey(_, _, _, _);
      return this.m_mapKeyToGuidePrice.get(_);
    }
    GetScaledRecommendedPrice(_, _, _, _ = _) {
      let _ = -1,
        _ = -1;
      for (let _ of this.m_mapUSDPrice.get(_).keys()) {
        let _ = Math.abs(_ - _);
        (_ == -1 || _ < _) && ((_ = _), (_ = _));
      }
      let _ = this.m_mapUSDPrice.get(_).get(_),
        _ = _
          ? _.region_prices.find((_) => _.region_code == _)
          : _.currency_prices.find((_) => _.currency_code == _),
        _ = _ / _;
      return {
        currency_code: _?.currency_code,
        region_code: _?.region_code,
        price: Math.ceil((_?.price || 0) * _),
      };
    }
    GetUSDPricePointsInCents() {
      return this.m_rgUSDPricePointInCents;
    }
    constructor(_) {
      let _ = new Set();
      _.forEach((_) => {
        let _ = _.convert_method ?? _;
        this.m_setConversionMethod.add(_),
          this.m_mapUSDPrice.has(_) || this.m_mapUSDPrice.set(_, new Map()),
          this.m_mapUSDPrice.get(_).set(_.usd_price, _),
          _.add(_.usd_price),
          (this.m_rtNewestConvertStart = Math.max(
            this.m_rtNewestConvertStart,
            _.rtime_convert_start ?? 0,
          )),
          _.currency_prices.forEach((_) => {
            let _ = this.GetKey(
              _.usd_price,
              _.currency_code,
              0,
              _.convert_method || _,
            );
            this.m_mapKeyToGuidePrice.set(_, _),
              this.m_setSupportedCurrencies.add(_.currency_code);
          }),
          _.region_prices.forEach((_) => {
            let _ = this.GetKey(
              _.usd_price,
              _.currency_code,
              _.region_code,
              _.convert_method || _,
            );
            if (
              (this.m_mapKeyToGuidePrice.set(_, _),
              this.m_setSupportedRegions.add(_.region_code),
              this.m_setConversionMethod.has(3))
            ) {
              let _ = {
                  currency_code: 1,
                  price: _.usd_price,
                  region_code: _.region_code,
                },
                _ = this.GetKey(_.usd_price, 1, _.region_code, 3);
              this.m_mapKeyToGuidePrice.set(_, _);
            }
          });
      }),
        (this.m_rgUSDPricePointInCents = Array.from(_.keys()));
    }
  },
  _ = `_3kvimQQNinY-`,
  _ = `_8-8CTIFHB-I-`,
  _ = `_1QzYbYzDP9w-`,
  _ = _({
    Component: _,
  });
function _() {
  return _.useLoaderData().success == 1
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
      })
    : (0, _.jsx)(`div`, {
        children: _.Localize(`#Footer_Sitemap_ContactSupport`),
      });
}
var _ = _();
function _(_, _) {
  return (0, _.useMemo)(() => {
    let _ = [],
      _ = [];
    if (_) {
      for (let _ = 2; _ < 48; ++_) {
        if (!_.BIsSupportCurrencyAndOrRegion(_)) continue;
        let _ = {
          eCurrencyCode: _,
          nNuanced: _.GetRecommendPrice(_, _, void 0, 1)?.price || -1,
          nParity: _.GetRecommendPrice(_, _, void 0, 2)?.price || -1,
          nFx: _.GetRecommendPrice(_, _, void 0, 3)?.price || -1,
        };
        (_.nFx != -1 || _.nNuanced != -1 || _.nParity != -1) && _.push(_);
      }
      for (let _ = 1; _ < 5; ++_) {
        if (!_.BIsSupportCurrencyAndOrRegion(1, _)) continue;
        let _ = {
          eRegionCode: _,
          eCurrencyCode: 1,
          nNuanced: _.GetRecommendPrice(_, 1, _, 1)?.price || -1,
          nParity: _.GetRecommendPrice(_, 1, _, 2)?.price || -1,
          nFx: _.GetRecommendPrice(_, 1, _, 3)?.price || -1,
        };
        (_.nFx != -1 || _.nNuanced != -1 || _.nParity != -1) && _.push(_);
      }
    }
    return {
      rgCurrencyPrices: _,
      rgRegionPrices: _,
    };
  }, [_, _]);
}
function _(_) {
  return _.getValue() == -1
    ? (0, _.jsx)(`span`, {
        className: _,
        children: `Missing`,
      })
    : _(_.getValue(), _.row.original.eCurrencyCode);
}
function _(_) {
  let _ = _(),
    [_, _] = (0, _.useState)(599),
    { rgCurrencyPrices: _, rgRegionPrices: _ } = _(_, _),
    _ = [
      _.accessor(`nFx`, {
        header: _.Localize(`#PricingExplorer_Column4`),
        cell: _,
      }),
      _.accessor(`nParity`, {
        header: _.Localize(`#PricingExplorer_Column3`),
        cell: _,
      }),
      _.accessor(`nNuanced`, {
        header: _.Localize(`#PricingExplorer_Column2`),
        cell: _,
      }),
    ];
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(_, {
                direction: `column`,
                children: [
                  (0, _.jsx)(_, {
                    size: `3`,
                    children: _.Localize(`#PricingDashboard_Select_Price`),
                  }),
                  (0, _.jsx)(_, {
                    strButton: _.Localize(
                      `#PricingDashboard_Select_Price_button`,
                    ),
                    strTooltip: _.Localize(
                      `#PricingDashboard_Select_Price_button_ttip`,
                    ),
                    fnGetUSDPriceInCents: () => _,
                    fnOnUpdate: _,
                    nPackageID: 0,
                    appids: void 0,
                    bCanSetToFree: void 0,
                  }),
                ],
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(_, 1),
              }),
            ],
          }),
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(`div`, {
            children: _.Localize(`#PricingExplorer_TableHeader`),
          }),
          (0, _.jsx)(_, {
            data: _,
            className: _.DefaultFancyTable,
            columns: [
              _.accessor(`eCurrencyCode`, {
                header: _.Localize(`#PricingExplorer_Column1`),
                cell: _,
              }),
              ..._,
            ],
            getRowKey: (_, _) => `${_.eCurrencyCode}`,
            nItemHeight: 20,
          }),
          (0, _.jsx)(_, {
            paddingTop: `5`,
            children: _.Localize(`#PricingExplorer_Regions_TableHeader`),
          }),
          (0, _.jsx)(`div`, {
            children: _.Localize(`#PricingExplorer_TableHeader`),
          }),
          (0, _.jsx)(_, {
            data: _,
            className: _.DefaultFancyTable,
            columns: [
              _.accessor(`eRegionCode`, {
                header: _.Localize(`#PricingExplorer_Regions_Column1`),
                cell: _,
              }),
              ..._,
            ],
            getRowKey: (_, _) => `${_.eCurrencyCode}_${_.eRegionCode}`,
            nItemHeight: 20,
          }),
        ],
      }),
    }),
  });
}
var _ = 37,
  _ = 4;
function _(_) {
  let _ = _()?.GetNewestConvertStartTime(),
    _ = _
      ? _.Localize(
          `#PricingExplorer_Time_Disc_Date`,
          new Date(_ * 1e3).toLocaleDateString(`en-US`, {
            month: `long`,
            year: `numeric`,
            timeZone: `UTC`,
          }),
        )
      : _.Localize(`#PricingExplorer_Time_Disc`);
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_, _),
              children: _.Localize(`#PricingExplorer_About_Title`),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`p`, {
                  className: _,
                  children: _(
                    _.Localize(`#PricingExplorer_About_Desc1`, _, _),
                    (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}doc/store/pricing/currencies`,
                    }),
                  ),
                }),
                (0, _.jsx)(`p`, {
                  children: _.Localize(`#PricingExplorer_About_Desc2`),
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`h2`, {
                  children: _.Localize(`#PricingExplorer_Explore_title`),
                }),
                (0, _.jsx)(`p`, {
                  children: _.Localize(`#PricingExplorer_Explore_desc1`),
                }),
                (0, _.jsxs)(`ol`, {
                  children: [
                    (0, _.jsx)(`li`, {
                      children: _.LocalizeReact(
                        `#PricingExplorer_Explore_line3`,
                        (0, _.jsx)(`b`, {
                          children: _.Localize(`#PricingExplorer_Column4`),
                        }),
                      ),
                    }),
                    (0, _.jsx)(`li`, {
                      children: _.LocalizeReact(
                        `#PricingExplorer_Explore_line2`,
                        (0, _.jsx)(`b`, {
                          children: _.Localize(`#PricingExplorer_Column3`),
                        }),
                      ),
                    }),
                    (0, _.jsx)(`li`, {
                      children: _.LocalizeReact(
                        `#PricingExplorer_Explore_line1`,
                        (0, _.jsx)(`b`, {
                          children: _.Localize(`#PricingExplorer_Column2`),
                        }),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_, _),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`p`, {
                  children: _.LocalizeReact(
                    `#PricingExplorer_About_Link1`,
                    (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}doc/store/pricing`,
                      children: _.Localize(`#PricingExplorer_About_LinkName1`),
                    }),
                  ),
                }),
                (0, _.jsx)(`p`, {
                  children: _.Localize(`#PricingExplorer_About_Dash`),
                }),
                (0, _.jsx)(_, {
                  href: `${_.PARTNER_BASE_URL}pricing/dashboard`,
                  children: _.Localize(`#PricingExplorer_About_LinkName2`),
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  size: `7`,
                  children: _.Localize(`#PricingExplorer_Time_Title`),
                }),
                (0, _.jsx)(`p`, {
                  children: _,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
export { _ as route };
