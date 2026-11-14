var _ = _(_(), 1),
  _ = `P6g4rnKHFxc-`,
  _ = `_76JFa6l3Xr0-`,
  _ = `On7pvCaBDrs-`,
  _ = `lnv009Yokhc-`,
  _ = `n23HFxN56U8-`,
  _ = `XnRvTTaq1jY-`,
  _ = `IZjXuy3Rm2U-`,
  _ = `Ak7DzP7WO8o-`,
  _ = `Om5RzNH-VJY-`,
  _ = `_9rjzSWMZOC0-`,
  _ = _(),
  _ = _({
    Component: _,
    Actions: {
      Accept: _(`EMPEo9U3huZbMbkcPmB-jpuUCYL6Bc0xlcLvOwf5ICw`, `Accept`),
    },
  });
function _(_) {
  return _(_, {
    month: `long`,
  });
}
function _() {
  let { bNoHeader: _ } = _.useLoaderData();
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {}),
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            className: _,
            href: `${_.COMMUNITY_BASE_URL}workshop/`,
            style: {
              backgroundImage: `url( '${_.COMMUNITY_CDN_URL}public/images/sharedfiles/ig/bg_top_workshop_v3.png' )`,
            },
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
        ],
      });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`img`, {
        src: `${_.COMMUNITY_CDN_URL}public/images/sharedfiles/icons/icon_check_green_large.png`,
        alt: ``,
      }),
      _.children,
    ],
  });
}
function _() {
  let { agreement: _ } = _.useLoaderData(),
    { strAppName: _ } = _;
  return _.bNeedsAcceptance
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(
              `#Workshop_LegalAgreement_AcceptanceRequired_Title`,
            ),
          }),
          _.Localize(`#Workshop_LegalAgreement_SSA_AcceptanceRequired_Desc`),
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(`br`, {}),
          _.bShowWorkshopRevenueTerms &&
            !!_ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                _.Localize(
                  `#Workshop_LegalAgreement_WorkshopSupplemental_AcceptanceRequired_Desc`,
                  _,
                ),
                (0, _.jsx)(`br`, {}),
                (0, _.jsx)(`br`, {}),
              ],
            }),
          !_.bAppSupplementalTermsOptional &&
            !!_.appSupplementalTermsVersion &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                _.Localize(
                  `#Workshop_LegalAgreement_WorkshopAppSupplemental_AcceptanceRequired_Desc`,
                  _,
                ),
                (0, _.jsx)(`br`, {}),
                (0, _.jsx)(`br`, {}),
                _.Localize(
                  `#Workshop_LegalAgreement_WorkshopSupplemental_AcceptanceRequired_Desc2`,
                ),
                ` `,
              ],
            }),
          _.Localize(`#Workshop_LegalAgreement_ToAccept_Desc`),
        ],
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          !!_.rtSSAAccepted &&
            (0, _.jsx)(_, {
              children: _.Localize(
                `#Workshop_SSA_AcceptedDate`,
                _(_.rtSSAAccepted),
              ),
            }),
          !!_.rtWorkshopAgreementAccepted &&
            (0, _.jsx)(_, {
              children: _.Localize(
                `#Workshop_LegalAgreement_AcceptedDate`,
                _(_.rtWorkshopAgreementAccepted),
              ),
            }),
          _.bAcceptedSupplementalTerms &&
            (0, _.jsx)(_, {
              children: _.Localize(
                `#Workshop_AppLegalAgreement_AcceptedDate`,
                _,
                _(_.rtSupplementalTermsAccepted),
              ),
            }),
        ],
      });
}
function _() {
  let { agreement: _ } = _.useLoaderData(),
    { strAppName: _, appSupplementalTermsVersion: _ } = _;
  if (!_.bAppSupplementalTermsOptional) return null;
  let _;
  if (!_.bAcceptedSupplementalTerms)
    _ = _.Localize(
      `#Workshop_LegalAgreement_WorkshopAppSupplemental_AcceptanceOptional_Desc`,
      _,
      _(_),
    );
  else if (_.rtSupplementalTermsAccepted < _)
    _ = _.Localize(
      `#Workshop_LegalAgreement_WorkshopAppSupplemental_AcceptanceOptional_Desc3`,
      _,
      _(_),
      _(_.rtSupplementalTermsAccepted),
    );
  else return null;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(
          `#Workshop_LegalAgreement_AcceptanceOptional_Title`,
        ),
      }),
      _,
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`br`, {}),
      _.Localize(
        `#Workshop_LegalAgreement_WorkshopSupplemental_AcceptanceOptional_Desc2`,
      ),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    dangerouslySetInnerHTML: {
      __html: _.strHTML,
    },
  });
}
function _() {
  let { agreement: _ } = _.useLoaderData();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(`h1`, {
        children: _.Localize(`#Workshop_LegalAgreement_SSA`),
      }),
      (0, _.jsx)(`p`, {
        children: _.LocalizeReact(
          `#Workshop_LegalAgreement_SSA_Link`,
          (0, _.jsx)(_, {
            href: `${_.STORE_BASE_URL}subscriber_agreement/`,
            target: `_blank`,
            children: _.Localize(`#Workshop_LegalAgreement_SSA_Link_LinkText`),
          }),
        ),
      }),
      !!_.strRevenueSharingTermsHTML &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`div`, {
              className: `Om5RzNH-VJY-`,
            }),
            (0, _.jsx)(_, {
              strHTML: _.strRevenueSharingTermsHTML,
            }),
          ],
        }),
      !!_.strSupplementalTermsHTML &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`div`, {
              className: `Om5RzNH-VJY-`,
            }),
            (0, _.jsx)(_, {
              strHTML: _.strSupplementalTermsHTML,
            }),
          ],
        }),
      _.logged_in && (0, _.jsx)(_, {}),
    ],
  });
}
function _(_) {
  let { type: _, value: _, checked: _, onChange: _, children: _ } = _;
  return (0, _.jsxs)(`label`, {
    className: _,
    children: [
      (0, _.jsx)(`input`, {
        type: _,
        name: `acceptance`,
        value: _,
        checked: _,
        onChange: _,
      }),
      (0, _.jsx)(`ul`, {
        children: _,
      }),
    ],
  });
}
function _() {
  let { agreement: _, originpublishedfileid: _ } = _.useLoaderData(),
    {
      appid: _,
      strAppName: _,
      appSupplementalTermsVersion: _,
      bAppSupplementalTermsOptional: _,
      bNeedsAcceptance: _,
    } = _,
    _ = !!_ && _,
    [_, _] = (0, _.useState)(() =>
      _
        ? `none`
        : _
          ? _.bAcceptedSupplementalTerms
            ? `all`
            : _.rtWorkshopAgreementAccepted
              ? `required_only`
              : `none`
          : _
            ? _.bAcceptedSupplementalTerms
              ? `required_only`
              : `none`
            : _.bShowWorkshopRevenueTerms
              ? _.rtWorkshopAgreementAccepted
                ? `required_only`
                : `none`
              : _.rtSSAAccepted
                ? `required_only`
                : `none`,
    ),
    [_, _] = (0, _.useState)(!1),
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _ ? _ == `all` : !!_,
    _ = _({
      mutationFn: () => _.Actions.Accept(_, _),
      onSuccess: () => {
        window.location.assign(
          _
            ? `${_.COMMUNITY_BASE_URL}sharedfiles/filedetails/?id=${_}`
            : `${_.COMMUNITY_BASE_URL}workshop/workshoplegalagreement/?appid=${_}`,
        );
      },
      onError: _,
    }),
    _ = () => {
      _ == `none` ? _(!0) : _.mutate();
    },
    _ = () => _(_ == `none` ? `required_only` : `none`),
    _ = (0, _.jsx)(`li`, {
      children: _.Localize(`#Workshop_LegalAgreement_SSA`),
    }),
    _ = (0, _.jsx)(`li`, {
      children: _.Localize(
        `#Workshop_LegalAgreement_RevenueSharingTerms_Required`,
      ),
    });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`div`, {
        className: _,
      }),
      _
        ? (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`h1`, {
                children: _.Localize(
                  `#Workshop_LegalAgreement_PleaseAcceptOne`,
                ),
              }),
              (0, _.jsx)(`p`, {
                children: _.Localize(
                  `#Workshop_LegalAgreement_PleaseAccept_Directions`,
                ),
              }),
            ],
          })
        : (0, _.jsx)(`h1`, {
            children: _.Localize(`#Workshop_LegalAgreement_AgreeToTerms`),
          }),
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            !_.bAcceptedSupplementalTerms &&
              (0, _.jsxs)(_, {
                type: `radio`,
                value: `required_only`,
                checked: _ == `required_only`,
                onChange: () => _(`required_only`),
                children: [_, _],
              }),
            (0, _.jsxs)(_, {
              type: `radio`,
              value: `all`,
              checked: _ == `all`,
              onChange: () => _(`all`),
              children: [
                _,
                _,
                (0, _.jsx)(`li`, {
                  children: (0, _.jsx)(`b`, {
                    children: _.Localize(
                      `#Workshop_LegalAgreement_WorkshopAppSupplemental_Optional`,
                      _,
                    ),
                  }),
                }),
              ],
            }),
          ],
        }),
      !_ &&
        !!_ &&
        (0, _.jsxs)(_, {
          type: `checkbox`,
          value: `required_only`,
          checked: _ == `required_only`,
          onChange: _,
          children: [
            _,
            _,
            (0, _.jsx)(`li`, {
              children: (0, _.jsx)(`b`, {
                children: _.Localize(
                  `#Workshop_LegalAgreement_WorkshopAppSupplemental_Required`,
                  _,
                ),
              }),
            }),
          ],
        }),
      !_ &&
        _.bShowWorkshopRevenueTerms &&
        (0, _.jsxs)(_, {
          type: `checkbox`,
          value: `required_only`,
          checked: _ == `required_only`,
          onChange: _,
          children: [_, _],
        }),
      !_ &&
        !_.bShowWorkshopRevenueTerms &&
        (0, _.jsx)(_, {
          type: `checkbox`,
          value: `required_only`,
          checked: _ == `required_only`,
          onChange: _,
          children: _,
        }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          onClick: _,
          disabled: _.isPending,
          children: (0, _.jsx)(`span`, {
            children: _.Localize(`#Workshop_AcceptLegalAgreement`),
          }),
        }),
      }),
      _ &&
        (0, _.jsxs)(_, {
          strTitle: _.Localize(`#Workshop_LegalAgreement_Error_Title`),
          onClose: () => _(!1),
          children: [
            (0, _.jsx)(_, {
              children: _.Localize(`#Workshop_LegalAgreement_Error_Text`),
            }),
            (0, _.jsx)(_, {
              justify: `end`,
              gap: `3`,
              align: `center`,
              marginTop: `3`,
              children: (0, _.jsx)(_, {
                onClick: () => _(!1),
                children: (0, _.jsx)(`span`, {
                  children: _.Localize(`#Button_Close`),
                }),
              }),
            }),
          ],
        }),
      _,
    ],
  });
}
export { _ as route };
