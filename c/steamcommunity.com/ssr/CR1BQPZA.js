var _ = {
    content_url: 2048,
    content_desc: 8e3,
    original_content_url: 2048,
    original_ip_desc: 8e3,
    full_name: 200,
    address1: 128,
    address2: 128,
    city: 50,
    state: 32,
    postal_code: 16,
    country_code: 2,
    phone: 20,
    email: 322,
    signature: 200,
    copyright_holder: 200,
  },
  _ = /^[A-Za-z0-9 &.,#'/-]+$/,
  _ =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
  _ =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
function _(_) {
  let _ = (_) => (typeof _[_] == `string` ? _[_].trim().slice(0, _[_]) : ``);
  return {
    content_url: _(`content_url`),
    content_desc: _(`content_desc`),
    original_content_url: _(`original_content_url`),
    original_ip_desc: _(`original_ip_desc`),
    full_name: _(`full_name`),
    address1: _(`address1`),
    address2: _(`address2`),
    city: _(`city`),
    state: _(`state`),
    postal_code: _(`postal_code`),
    country_code: _(`country_code`),
    phone: _(`phone`),
    email: _(`email`),
    signature: _(`signature`),
    copyright_holder: _(`copyright_holder`),
  };
}
function _(_, _) {
  if (_) {
    if (_.bIsOwner === void 0)
      return {
        eError: `Owner`,
      };
    if (!_.bUseNotAuthorized)
      return {
        eError: `Authorization`,
      };
    if (!_.bAcknowledgeLiability)
      return {
        eError: `Liability`,
      };
    if (!_.bIsAccurate)
      return {
        eError: `Accuracy`,
      };
  }
  let _ = [
    `content_url`,
    `content_desc`,
    `original_ip_desc`,
    `full_name`,
    `address1`,
    `city`,
    `state`,
    `postal_code`,
    `country_code`,
    `phone`,
    `email`,
    `signature`,
  ];
  _ && !_.bIsOwner && _.push(`copyright_holder`);
  let _ = _.filter((_) => !_[_]);
  if (_.length)
    return {
      eError: `RequiredFields`,
      rgFields: _,
    };
  let _ = [`address1`, `address2`, `city`, `postal_code`];
  _.country_code != `US` && _.push(`state`);
  let _ = _.filter((_) => _[_] && !_.test(_[_]));
  if (_.length)
    return {
      eError: `InvalidRequiredFields`,
      rgFields: _,
    };
  if (!_.test(_.content_url))
    return {
      eError: `ContentURL`,
    };
  if (_.original_content_url && !_.test(_.original_content_url))
    return {
      eError: `OriginalContentURL`,
    };
  if (!_.test(_.email))
    return {
      eError: `InvalidEmail`,
    };
}
var _ = _(_(), 1),
  _ = `S-pGm-Y6VG8-`,
  _ = `UKu0cmSch9Q-`,
  _ = `g3yoo---lQI-`,
  _ = `Vzc-qzdBB-4-`,
  _ = `_18UoplMmI9s-`,
  _ = `ibiZ4onXZWY-`,
  _ = `_6HJthKhE24U-`,
  _ = `mHNc5VfjUpc-`,
  _ = `PbCXUte6nds-`,
  _ = `-iwvqV78GrU-`,
  _ = `AOqP3LI4YZA-`,
  _ = `bnP6LiTLuVw-`,
  _ = `cCcxZJlOZs0-`,
  _ = `H7wHHATigwg-`,
  _ = `Wscm7ZqRNr4-`,
  _ = `_0eAKdMlJy4M-`,
  _ = `_2evKzwZgdvQ-`,
  _ = `Hwit9OixTmM-`,
  _ = `xwHMQEC-mmA-`,
  _ = `Qxw9hBJWUV4-`,
  _ = `e2FXzWYoPr4-`,
  _ = `_3tOKhPLrrTA-`,
  _ = `_5H9B8GzlhvE-`,
  _ = _(),
  _;
function _() {
  return (
    (_ ??= new Promise((_, _) => {
      let _ = document.createElement(`script`);
      ((_.src = `https://recaptcha.net/recaptcha/enterprise.js?render=explicit`),
        (_.async = !0),
        (_.onerror = () => {
          ((_ = void 0), _.remove(), _(Error(`Failed to load reCAPTCHA`)));
        }),
        document.head.appendChild(_));
      let _ = () => {
        let _ = window.grecaptcha?.enterprise;
        _?.render ? _(_) : _.isConnected && setTimeout(_, 100);
      };
      _();
    })),
    _
  );
}
function _(_) {
  return _.captcha.eType == 2
    ? (0, _.jsx)(_, {
        ..._,
      })
    : _.captcha.eType == 1
      ? (0, _.jsx)(_, {
          ..._,
        })
      : null;
}
function _() {
  return (
    document.querySelector(`textarea[name="g-recaptcha-response"]`)?.value ?? ``
  );
}
function _(_) {
  let { captcha: _ } = _,
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      let _ = !1;
      return (
        _()
          .then((_) => {
            !_ &&
              _.current &&
              _.render(_.current, {
                sitekey: _.strSiteKey,
                theme: `dark`,
                callback: function () {},
                _: _.strClientSignature,
              });
          })
          .catch(() => _(!0)),
        () => {
          _ = !0;
        }
      );
    }, [_]),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          ref: _,
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `_6RbuJZmxH3A-`,
            children: _.Localize(`#Error_BadCaptchaData`),
          }),
      ],
    })
  );
}
function _(_) {
  let {
    captcha: _,
    bTrademark: _,
    strText: _,
    onTextChange: _,
    onRefresh: _,
  } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(
          _ ? `#Trademark_IAmNotARobot` : `#DMCA_IAmNotARobot`,
        ),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`img`, {
            src: `${_.COMMUNITY_BASE_URL}public/captcha.php?gid=${_.gid}`,
            width: 206,
            height: 40,
            alt: _.Localize(`#MobileLogin_CaptchaVerification`),
          }),
          (0, _.jsx)(`button`, {
            type: `button`,
            className: _,
            onClick: _,
            children: _.Localize(`#Login_RefreshCaptcha`),
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          value: _,
          onTextChange: _,
          autoComplete: `off`,
        }),
      }),
    ],
  });
}
var _ = {};
((_.arabic = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./chunk.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_) {
  return _.Localize(`#Steam_Country_${_}`);
}
function _(_) {
  let _ = (0, _.useMemo)(() => {
    let _ = Object.entries(_.countries).map(([_, _]) => {
      let _ = _(_);
      return {
        strCode: _,
        strName: _ && !_.startsWith(`#`) ? _ : _,
      };
    });
    _.sort((_, _) => (_.strName < _.strName ? -1 : +(_.strName > _.strName)));
    let _ = [`US`, `CA`];
    return Object.fromEntries(
      [
        ..._.flatMap((_) => _.filter((_) => _.strCode === _)),
        ..._.filter((_) => !_.includes(_.strCode)),
      ].map((_) => [_.strCode, _.strName]),
    );
  }, []);
  return (0, _.jsx)(_, {
    mapNames: _,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    mapNames: _.usstates,
    ..._,
  });
}
function _(_) {
  let { mapNames: _, strValue: _, onChange: _, bInvalid: _ } = _,
    _ = (0, _.useMemo)(() => Object.keys(_), [_]),
    _ = _({
      rgOptions: _,
      selectedValue: _ || null,
      onSelectionChange: _,
    });
  return (0, _.jsxs)(_.Root, {
    state: _,
    status: _ ? `error` : void 0,
    children: [
      (0, _.jsx)(_.Trigger, {
        children: (0, _.jsx)(_.Value, {
          children: _[_],
        }),
      }),
      (0, _.jsx)(_.Options, {
        children: _.map((_) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: _[_],
            },
            _,
          ),
        ),
      }),
    ],
  });
}
var _ = _({
    Component: _,
  }),
  _ = {
    strPageTitle: `#DMCA_AddTakeDownNotice_PageTitle`,
    strOverview: `#DMCA_AddTakeDownNotice_Overview`,
    strRequired: `#DMCA_AddTakeDownNotice_required`,
    strIdentifyContent: `#DMCA_AddTakeDownNotice_IdentifyContent`,
    strPrefilledContentURL: `#DMCA_AddTakeDownNotice_PrefilledContentURL`,
    strContentURL: `#DMCA_AddTakeDownNotice_ContentURL`,
    strContentDesc: `#DMCA_AddTakeDownNotice_ContentDesc`,
    strOriginalIPDesc: `#DMCA_AddTakeDownNotice_OriginalIPDesc`,
    strYourContactInfo: `#DMCA_AddTakeDownNotice_YourContactInfo`,
    strAuthorization: `#DMCA_AddTakeDownNotice_Authorization`,
    strSignature: `#DMCA_AddTakeDownNotice_Authorization_Signature`,
    strCancel: `#DMCA_AddTakeDownNotice_Cancel`,
    strSubmit: `#DMCA_AddTakeDownNotice_Submit`,
    strError: `#DMCA_AddTakeDownNotice_Error`,
    strSuccess: `#DMCA_AddTakeDownNotice_Success`,
    strSuccessText: `#DMCA_AddTakeDownNotice_Success_Text`,
    mapErrors: {
      Owner: `#DMCA_AddTakeDownNotice_Error_Owner`,
      Authorization: `#DMCA_AddTakeDownNotice_Error_Authorization`,
      Liability: `#DMCA_AddTakeDownNotice_Error_Liability`,
      Accuracy: `#DMCA_AddTakeDownNotice_Error_Accuracy`,
      RequiredFields: `#DMCA_AddTakeDownNotice_Error_RequiredFields`,
      InvalidRequiredFields: `#DMCA_AddTakeDownNotice_Error_InvalidRequiredFields`,
      ContentURL: `#DMCA_AddTakeDownNoticeAction_Error_ContentURL`,
      OriginalContentURL: `#DMCA_AddTakeDownNoticeAction_Error_OriginalContentURL`,
      InvalidEmail: `#DMCA_AddTakeDownNotice_Error_InvalidEmail`,
    },
  },
  _ = {
    strPageTitle: `#Trademark_AddComplaint_PageTitle`,
    strOverview: `#Trademark_AddComplaint_Overview`,
    strRequired: `#Trademark_AddComplaint_required`,
    strIdentifyContent: `#Trademark_AddComplaint_IdentifyContent`,
    strPrefilledContentURL: `#Trademark_AddComplaint_PrefilledContentURL`,
    strContentURL: `#Trademark_AddComplaint_ContentURL`,
    strContentDesc: `#Trademark_AddComplaint_ContentDesc`,
    strOriginalIPDesc: `#Trademark_AddComplaint_OriginalIPDesc`,
    strYourContactInfo: `#Trademark_AddComplaint_YourContactInfo`,
    strAuthorization: `#Trademark_AddComplaint_Authorization`,
    strSignature: `#Trademark_AddComplaint_Authorization_Signature`,
    strCancel: `#Trademark_AddComplaint_Cancel`,
    strSubmit: `#Trademark_AddComplaint_Submit`,
    strError: `#Trademark_AddComplaint_Error`,
    strSuccess: `#Trademark_AddComplaint_Success`,
    strSuccessText: `#Trademark_AddComplaint_Success_Text`,
    mapErrors: {
      Owner: `#DMCA_AddTakeDownNotice_Error_Owner`,
      Authorization: `#DMCA_AddTakeDownNotice_Error_Authorization`,
      Liability: `#DMCA_AddTakeDownNotice_Error_Liability`,
      Accuracy: `#DMCA_AddTakeDownNotice_Error_Accuracy`,
      RequiredFields: `#Trademark_AddComplaint_Error_RequiredFields`,
      InvalidRequiredFields: `#Trademark_AddComplaint_Error_InvalidRequiredFields`,
      ContentURL: `#Trademark_AddComplaint_Error_ContentURL`,
      OriginalContentURL: `#DMCA_AddTakeDownNoticeAction_Error_OriginalContentURL`,
      InvalidEmail: `#Trademark_AddComplaint_Error_InvalidEmail`,
    },
  };
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _.className,
    dangerouslySetInnerHTML: {
      __html: _.Localize(_.token),
    },
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    className: _,
    children: `*`,
  });
}
function _() {
  let { bTrademark: _, publishedfileid: _, captcha: _ } = _.useLoaderData(),
    _ = _ ? _ : _,
    _ = _ ? `${_.COMMUNITY_BASE_URL}sharedfiles/filedetails/?id=${_}` : ``,
    [_, _] = (0, _.useState)(() => ({
      ..._({}),
      content_url: _,
    })),
    [_, _] = (0, _.useState)({
      bUseNotAuthorized: !1,
      bAcknowledgeLiability: !1,
      bIsAccurate: !1,
    }),
    [_, _] = (0, _.useState)(() => new Set()),
    [_, _] = (0, _.useState)(_),
    [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)(),
    [_, _] = (0, _.useState)(!1),
    { HandleMutationError: _, errorDialog: _ } = _(),
    _ = (_, _) =>
      _((_) => ({
        ..._,
        [_]: _,
      })),
    _ = (_) => ({
      value: _[_],
      onTextChange: (_) => _(_, _),
      maxLength: _[_],
      status: _.has(_) ? `error` : void 0,
    }),
    _ = (_) =>
      _({
        strTitle: _.Localize(_.strError),
        strHTML: _.Localize(_),
      }),
    _ = (_) => {
      (_(_), _(``));
    },
    _ = async () => {
      try {
        _(await _(`/dmca/actions`, `RefreshContactFormCaptcha`));
      } catch (_) {
        _(_);
      }
    },
    _ = async () => {
      let _ = _(_);
      _(_);
      let _ = _ ? void 0 : _,
        _ = _(_, _);
      if (_) {
        let _ = {
          ContentURL: `content_url`,
          OriginalContentURL: `original_content_url`,
          InvalidEmail: `email`,
        }[_.eError];
        (_(new Set(`rgFields` in _ ? _.rgFields : _ ? [_] : [])),
          _(_.mapErrors[_.eError]));
      } else {
        (_(new Set()), _(!0));
        try {
          let _ = await _(
            `/dmca/actions`,
            `AddTakeDownNotice`,
            +!!_,
            _,
            _,
            _?.gid ?? `-1`,
            _?.eType == 2 ? _() : _,
          );
          _.bSuccess
            ? _({
                strTitle: _.Localize(_.strSuccess),
                strHTML: _.Localize(_.strSuccessText) + _.take_down_notice_id,
                fnOnClose: () => window.location.assign(_.COMMUNITY_BASE_URL),
              })
            : (_(`#Error_BadCaptchaData`), _(_.captcha));
        } catch (_) {
          _(_);
        } finally {
          _(!1);
        }
      }
    },
    _ = () => {
      (_(void 0), _?.fnOnClose?.());
    };
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(_.strPageTitle),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            token: _.strOverview,
            className: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [(0, _.jsx)(_, {}), ` `, _.Localize(_.strRequired)],
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [`1. `, _.Localize(_.strIdentifyContent)],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _
                ? (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(`div`, {
                        children: _.Localize(_.strPrefilledContentURL),
                      }),
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: (0, _.jsx)(_, {
                          href: _,
                          children: _,
                        }),
                      }),
                      (0, _.jsx)(_, {
                        publishedfileid: _,
                      }),
                    ],
                  })
                : (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsxs)(`div`, {
                        children: [
                          _.Localize(_.strContentURL),
                          (0, _.jsx)(_, {}),
                        ],
                      }),
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: (0, _.jsx)(_, {
                          ..._(`content_url`),
                        }),
                      }),
                    ],
                  }),
              (0, _.jsxs)(`div`, {
                children: [_.Localize(_.strContentDesc), (0, _.jsx)(_, {})],
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  ..._(`content_desc`),
                  rows: 5,
                  resize: `vertical`,
                }),
              }),
              (0, _.jsxs)(`div`, {
                children: [_.Localize(_.strOriginalIPDesc), (0, _.jsx)(_, {})],
              }),
              !_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(`div`, {
                      className: `-iwvqV78GrU-`,
                      children: _.Localize(
                        `#DMCA_AddTakeDownNotice_OriginalIP_URL`,
                      ),
                    }),
                    (0, _.jsx)(`div`, {
                      className: `bnP6LiTLuVw-`,
                      children: (0, _.jsx)(_, {
                        ..._(`original_content_url`),
                      }),
                    }),
                    (0, _.jsx)(`div`, {
                      className: `-iwvqV78GrU-`,
                      children: _.Localize(
                        `#DMCA_AddTakeDownNotice_OriginalIPDesc1`,
                      ),
                    }),
                  ],
                }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  ..._(`original_ip_desc`),
                  rows: 5,
                  resize: `vertical`,
                }),
              }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [`2. `, _.Localize(_.strYourContactInfo)],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#DMCA_AddTakeDownNotice_ComplaintNote`),
          }),
          (0, _.jsx)(_, {
            form: _,
            fnFieldProps: _,
            fnSetField: _,
            setInvalid: _,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              `3. `,
              (0, _.jsx)(_, {
                token: _.strAuthorization,
                className: _,
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              !_ &&
                (0, _.jsx)(_, {
                  auth: _,
                  setAuth: _,
                  copyrightHolderProps: _(`copyright_holder`),
                }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    children: _.Localize(_.strSignature),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(_, {
                      ..._(`signature`),
                    }),
                  }),
                ],
              }),
              !_ &&
                (0, _.jsx)(_, {
                  checked: _.bIsAccurate,
                  onChange: (_) =>
                    _((_) => ({
                      ..._,
                      bIsAccurate: _,
                    })),
                  children: _.Localize(
                    `#DMCA_AddTakeDownNotice_Authorization_CB4`,
                  ),
                }),
            ],
          }),
          _ &&
            (0, _.jsx)(
              _,
              {
                captcha: _,
                bTrademark: _,
                strText: _,
                onTextChange: _,
                onRefresh: _,
              },
              _.gid,
            ),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            onClick: () => window.location.assign(_.COMMUNITY_BASE_URL),
            children: (0, _.jsx)(`span`, {
              children: _.Localize(_.strCancel),
            }),
          }),
          (0, _.jsx)(_, {
            disabled: _,
            onClick: _,
            children: (0, _.jsx)(`span`, {
              children: _.Localize(_.strSubmit),
            }),
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          strTitle: _.strTitle,
          strOKLabel: _.Localize(`#Button_OK`),
          onClose: _,
          children: (0, _.jsx)(`div`, {
            className: `qgm2Ud6xrGI-`,
            dangerouslySetInnerHTML: {
              __html: _.strHTML,
            },
          }),
        }),
      _,
    ],
  });
}
function _(_) {
  let { form: _, fnFieldProps: _, fnSetField: _, setInvalid: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`label`, {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            direction: `row`,
            children: [_.Localize(`#DMCA_FullName`), (0, _.jsx)(_, {})],
          }),
          (0, _.jsx)(_, {
            ..._(`full_name`),
          }),
        ],
      }),
      (0, _.jsxs)(`label`, {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            direction: `row`,
            children: [_.Localize(`#DMCA_Address1`), (0, _.jsx)(_, {})],
          }),
          (0, _.jsx)(_, {
            ..._(`address1`),
          }),
        ],
      }),
      (0, _.jsxs)(`label`, {
        className: _,
        children: [
          _.Localize(`#DMCA_Address2`),
          (0, _.jsx)(_, {
            ..._(`address2`),
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `2`,
        children: [
          (0, _.jsxs)(`label`, {
            children: [
              (0, _.jsxs)(_, {
                direction: `row`,
                children: [_.Localize(`#DMCA_City`), (0, _.jsx)(_, {})],
              }),
              (0, _.jsx)(_, {
                ..._(`city`),
              }),
            ],
          }),
          (0, _.jsxs)(`label`, {
            children: [
              (0, _.jsxs)(_, {
                direction: `row`,
                children: [_.Localize(`#DMCA_State`), (0, _.jsx)(_, {})],
              }),
              _.country_code == `US`
                ? (0, _.jsx)(_, {
                    strValue: _.state,
                    onChange: (_) => _(`state`, _),
                    bInvalid: _.has(`state`),
                  })
                : (0, _.jsx)(_, {
                    ..._(`state`),
                  }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `2`,
        children: [
          (0, _.jsxs)(`label`, {
            children: [
              (0, _.jsxs)(_, {
                direction: `row`,
                children: [_.Localize(`#DMCA_PostalCode`), (0, _.jsx)(_, {})],
              }),
              (0, _.jsx)(_, {
                ..._(`postal_code`),
              }),
            ],
          }),
          (0, _.jsxs)(`label`, {
            children: [
              (0, _.jsxs)(_, {
                direction: `row`,
                children: [_.Localize(`#DMCA_Country`), (0, _.jsx)(_, {})],
              }),
              (0, _.jsx)(_, {
                strValue: _.country_code,
                bInvalid: _.has(`country_code`),
                onChange: (_) => {
                  (_(`country_code`, _), _(`state`, ``));
                },
              }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(`label`, {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            direction: `row`,
            children: [_.Localize(`#DMCA_Phone`), (0, _.jsx)(_, {})],
          }),
          (0, _.jsx)(_, {
            ..._(`phone`),
            inputMode: `tel`,
          }),
        ],
      }),
      (0, _.jsxs)(`label`, {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            direction: `row`,
            children: [_.Localize(`#DMCA_Email`), (0, _.jsx)(_, {})],
          }),
          (0, _.jsx)(_, {
            ..._(`email`),
            inputMode: `email`,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { auth: _, setAuth: _, copyrightHolderProps: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        children: _.Localize(`#DMCA_AddTakeDownNotice_Authorization1`),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            options: [!0, !1],
            value: _.bIsOwner ?? null,
            getOptionLabel: (_) =>
              _.Localize(
                _
                  ? `#DMCA_AddTakeDownNotice_Authorization_CB1a`
                  : `#DMCA_AddTakeDownNotice_Authorization_CB1b`,
              ),
            onValueChange: (_) =>
              _((_) => ({
                ..._,
                bIsOwner: _,
              })),
          }),
          _.bIsOwner === !1 &&
            (0, _.jsxs)(`div`, {
              children: [
                _.Localize(
                  `#DMCA_AddTakeDownNotice_Authorization_CopyrightHolderIs`,
                ),
                (0, _.jsx)(`div`, {
                  className: `bnP6LiTLuVw-`,
                  children: (0, _.jsx)(_, {
                    ..._,
                  }),
                }),
              ],
            }),
          (0, _.jsx)(_, {
            checked: _.bUseNotAuthorized,
            onChange: (_) =>
              _((_) => ({
                ..._,
                bUseNotAuthorized: _,
              })),
            children: _.Localize(`#DMCA_AddTakeDownNotice_Authorization_CB2`),
          }),
          (0, _.jsx)(_, {
            checked: _.bAcknowledgeLiability,
            onChange: (_) =>
              _((_) => ({
                ..._,
                bAcknowledgeLiability: _,
              })),
            children: _.Localize(`#DMCA_AddTakeDownNotice_Authorization_CB3`),
          }),
        ],
      }),
    ],
  });
}
export { _ as route };
