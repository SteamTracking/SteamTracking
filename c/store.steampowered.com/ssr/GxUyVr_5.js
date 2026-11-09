var _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
      eventModel: _,
      permissions: _,
      bIsCreatorHomeVisible: _,
      additionalButtons: _,
      onDeleteRequest: _,
      saleDayControl: _,
      promotionPlanLinks: _,
      testControls: _,
      bSupportsSticky: _ = !1,
    } = _,
    _ = _(),
    _ = _(),
    [_, _, _, _] = _(() => [
      _.visibility_state,
      _.jsondata.bSaleEnabled,
      _.GID,
      _.clanSteamID.GetAccountID(),
    ]),
    [_, _] = _.useState(_),
    { bVisible: _, ref: _ } = _();
  if (!(_?.can_edit || _?.support_user) || _) return (0, _.jsx)(`span`, {});
  let _ = _(),
    _ = _ == `community`,
    _ = _ == `store`,
    _ = !!_.support_user,
    _ = _(_),
    _ = _ && !_,
    _ = _.GetEventType() == 36,
    _ =
      (_ == _.k_EEventStateVisible || _ == _.k_EEventStateUnlisted) &&
      (!_ || _),
    _ = _ == _.k_EEventStateStaged;
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(`div`, {
        className: _(_, _ && `JvPMrL8e6B4-`),
      }),
      (0, _.jsxs)(`div`, {
        className: _({
          [_]: !0,
          [_]: _,
          [_]: _,
        }),
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _.Localize(`#EventDisplay_Admin_Title`),
          }),
          (0, _.jsxs)(`div`, {
            className: _(_, _ && `JvPMrL8e6B4-`),
            children: [
              _,
              _ &&
                (0, _.jsx)(`span`, {
                  className: `t6ZlrTsWzhQ-`,
                  children: ` `,
                }),
              (0, _.jsx)(_, {
                eventModel: _,
                route: _.k_eCommunityEdit,
                className: _(_, _),
                children: _
                  ? _.Localize(`#EventEditor_Edit_Page`)
                  : _.Localize(`#EventEditor_Edit`),
              }),
              _ &&
                (0, _.jsx)(`span`, {
                  className: `m-U1DKR49wc- myZmFTsW-so-`,
                  role: `button`,
                  tabIndex: 0,
                  onClick: _,
                  onKeyDown: _(_),
                  children: _.Localize(`#EventDisplay_DeleteEvent`),
                }),
              !_ &&
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)(_, {
                    eventModel: _,
                    route: _.k_eCommunityPublish,
                    className: _(`m-U1DKR49wc-`, `myZmFTsW-so-`),
                    children: _.Localize(
                      _ ? `#EventEditor_Publish_VisibleNow` : `#Button_Publish`,
                    ),
                  }),
                }),
              (0, _.jsx)(_, {
                eventModel: _,
                route: _.k_eCommunityAdminPage,
                className: _(_, _),
                children: _.Localize(`#EventDisplay_Events`),
              }),
              _,
              !!(_ && _ && !_) &&
                (0, _.jsx)(_, {
                  eventModel: _,
                  route: _.k_eStoreSalePage,
                  className: _(`m-U1DKR49wc-`, `myZmFTsW-so-`),
                  children: _.Localize(`#EventDisplay_SalesPage`),
                }),
              !!(_ && _ && _) &&
                (0, _.jsx)(`a`, {
                  href:
                    _.STATS_BASE_URL +
                    `sales/details/?gid=` +
                    _ +
                    `&clanid=` +
                    _,
                  target: _.IN_CLIENT ? `` : `_blank`,
                  rel: `noreferrer`,
                  className: _(`m-U1DKR49wc-`, `myZmFTsW-so-`, `oJgyyjdtQOI-`),
                  children: _.Localize(`#EventDisplay_StatsPage`),
                }),
              !!(_ && _ && _ && !_) &&
                (0, _.jsx)(`a`, {
                  href:
                    _.PARTNER_BASE_URL +
                    `promotion/invitationplanner/dashboard?saleclaneventgid=` +
                    _ +
                    `&saleclanaccountid=` +
                    _,
                  target: _.IN_CLIENT ? `` : `_blank`,
                  rel: `noreferrer`,
                  className: _(`m-U1DKR49wc-`, `myZmFTsW-so-`, `oJgyyjdtQOI-`),
                  children: _.Localize(`#EventDisplay_InvitationPlannerPage`),
                }),
              _,
              !!(_ && _ && _ == 41316928 && _.GetContentHubCategory()) &&
                (0, _.jsx)(`a`, {
                  href: `${_.PARTNER_BASE_URL}admin/store/contenthub/categories?edit=${_.GetContentHubCategory()}`,
                  target: _.IN_CLIENT ? `` : `_blank`,
                  rel: `noreferrer`,
                  className: _(`m-U1DKR49wc-`, `myZmFTsW-so-`, `oJgyyjdtQOI-`),
                  children: _.Localize(`#EventDisplay_CategoryEditor`),
                }),
              !!(_ && (_ || (_ && !_))) &&
                (0, _.jsx)(_, {
                  eventModel: _,
                  route: _ ? _.k_eCommunityPreviewSale : _.k_eCommunityView,
                  className: _(`m-U1DKR49wc-`, `myZmFTsW-so-`),
                  children: _.Localize(
                    _
                      ? `#EventDisplay_PreviewOnCommunity`
                      : `#EventDisplay_ViewOnCommunity`,
                  ),
                }),
              !!(_ && _) &&
                (0, _.jsx)(_, {
                  eventModel: _,
                  route: _.k_eStoreView,
                  className: _(`m-U1DKR49wc-`, `myZmFTsW-so-`),
                  children: _.Localize(`#EventDisplay_ViewOnStore`),
                }),
              _,
              _ &&
                (0, _.jsx)(`div`, {
                  className: `yIWa9hE6Xtw-`,
                  role: `button`,
                  tabIndex: 0,
                  onClick: () => _(!1),
                  onKeyDown: _(() => _(!1)),
                  children: (0, _.jsx)(_, {
                    toolTipContent: _.Localize(
                      `#EventDisplay_Admin_Close_ttip`,
                    ),
                    children: (0, _.jsx)(_, {}),
                  }),
                }),
              !_ &&
                _ &&
                (0, _.jsx)(`div`, {
                  className: `yIWa9hE6Xtw-`,
                  role: `button`,
                  tabIndex: 0,
                  onClick: () => _(!0),
                  onKeyDown: _(() => _(!0)),
                  children: (0, _.jsx)(_, {
                    toolTipContent: _.Localize(
                      `#EventDisplay_Admin_Reopen_ttip`,
                    ),
                    children: (0, _.jsx)(_, {
                      angle: 0,
                    }),
                  }),
                }),
            ],
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        ref: _,
      }),
    ],
  });
}
function _(_) {
  return (_) => {
    (_.key === `Enter` || _.key === ` `) && (_.preventDefault(), _(_));
  };
}
function _(_) {
  return !!(_?.support_user && _?.valve_admin);
}
function _(_) {
  let { event: _, bViewerCanSeeHidden: _ } = _;
  return !_ || _.visibility_state == _.k_EEventStateVisible
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _.Localize(`#EventDisplay_NotPublic_Header`),
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: (0, _.jsx)(_, {
              event: _,
            }),
          }),
        ],
      });
}
function _(_) {
  let { event: _ } = _;
  return _.visibility_state == _.k_EEventStateUnlisted
    ? (0, _.jsx)(_.Fragment, {
        children: _.Localize(`#EventDisplay_NotPublic_Unlisted`),
      })
    : _.visibility_state == _.k_EEventStateUnpublished
      ? (0, _.jsx)(_.Fragment, {
          children: _.Localize(`#EventDisplay_NotPublic_Draft`),
        })
      : _.visibilityStartTime
        ? (0, _.jsx)(_.Fragment, {
            children: _.LocalizeReact(
              `#EventDisplay_NotPublic_Staged`,
              (0, _.jsx)(_, {
                dateAndTime: _.visibilityStartTime,
                bSingleLine: !0,
              }),
            ),
          })
        : (0, _.jsx)(_.Fragment, {
            children: _.Localize(`#EventDisplay_NotPublic_Hidden`),
          });
}
