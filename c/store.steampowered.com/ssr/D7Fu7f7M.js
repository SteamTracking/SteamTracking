function _(_ = ``) {
  return `${_.STORE_BASE_URL}cart/${_}`;
}
function _(_, _ = !0) {
  return {
    queryKey: [`FamilyGroupForUser`],
    queryFn: async () => {
      let _ = await _.GetFamilyGroupForUser(_, {
        include_family_group_response: !0,
      });
      if (!_.BSuccess())
        throw `Error loading family group: ${_.GetErrorMessage()}`;
      return _.Body().toObject();
    },
    enabled: _,
    staleTime: 6e5,
  };
}
function _(_ = !0) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: [`FamilyGroup`, _],
    queryFn: async () => {
      let _ = await _.GetFamilyGroup(_, {
        family_groupid: _,
      });
      if (!_.BSuccess())
        throw `Error loading family group: ${_.GetErrorMessage()}`;
      return _.Body().toObject();
    },
    enabled: !!_,
    staleTime: 6e5,
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  return [`PurchaseRequests`, _];
}
function _(_, _, _) {
  return {
    queryKey: _ ? [..._(_), _] : _(_),
    queryFn: async () => {
      let _ = await _.GetPurchaseRequests(_, {
        family_groupid: _,
        request_ids: _ ? [_] : void 0,
      });
      if (!_.BSuccess())
        throw `Error loading purchase requests: ${_.GetErrorMessage()}`;
      return _.Body().toObject().requests ?? [];
    },
    enabled: !!_,
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async () => {
      let _ = await _.RequestPurchase(_, {
        family_groupid: _,
        use_account_cart: !0,
        store_country_code: _,
      });
      if (!_.BSuccess())
        throw `Error requesting purchase: ${_.GetErrorMessage()}`;
      return _.Body().toObject();
    },
  });
}
function _(_, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = await _.RespondToRequestedPurchase(_, {
        family_groupid: _,
        request_id: _,
        action: _,
      });
      if (!_.BSuccess())
        throw `Error responding to purchase request: ${_.GetErrorMessage()}`;
    },
    onSuccess: () =>
      _.invalidateQueries({
        queryKey: _(_),
        exact: !1,
      }),
  });
}
var _ = `_3rMFbgZdKGA-`,
  _ = `_8CcJD-tq5KQ-`,
  _ = `ST9cGgPu-zQ-`,
  _ = `a2ANG47wtro-`,
  _ = _();
function _() {
  return `${_.STORE_BASE_URL}account/familymanagement?tab=requests`;
}
function _(_) {
  let { strHeaderToken: _, strInfoToken: _, strFamilyGroupID: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(_),
      }),
      !!_ &&
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            strFamilyGroupID: _,
          }),
        }),
      !!_ &&
        (0, _.jsx)(_, {
          children: _.Localize(_),
        }),
      (0, _.jsx)(_, {
        marginTop: `6`,
        children: (0, _.jsx)(_, {
          focusable: !0,
          href: _.STORE_BASE_URL,
          children: _.Localize(`#PurchaseRequested_ReturnToStore`),
        }),
      }),
    ],
  });
}
function _(_) {
  let { strFamilyGroupID: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _?.length ?? 0;
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.LocalizeReact(
          `#PurchaseRequestBanner_YouHavePendingRequestsForFamilyName`,
          (0, _.jsx)(_, {
            href: _(),
            children: _.LocalizePlural(
              `#PurchaseRequestBanner_PendingRequest`,
              _,
            ),
          }),
          (0, _.jsx)(`span`, {
            children: _?.name,
          }),
        ),
      })
    : null;
}
function _(_) {
  let { bDisabled: _ } = _,
    _ = _(),
    { data: _ } = _(),
    { data: _ } = _(_.logged_in),
    _ = _?.family_groupid ?? ``,
    _ = _(_, _.country_code);
  if (_?.role != 2 || !(_(_) || _(_))) return null;
  let _ = !!_?.cart_items?.some((_) => !_.can_purchase_as_gift),
    _ = _.isPending || _.isSuccess;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        width: `100%`,
        disabled: _ || _ || _,
        onClick: () =>
          _.mutate(void 0, {
            onSuccess: () =>
              window.location.assign(_(`purchaserequested/${_}/`)),
          }),
        children: _.Localize(`#Cart_RequestPurchase`),
      }),
      (0, _.jsx)(`span`, {
        children: _.Localize(
          _
            ? `#Cart_RequestPurchaseNonGiftableItems`
            : `#Cart_RequestPurchaseExplanation`,
        ),
      }),
      _.isError &&
        (0, _.jsx)(_, {
          color: `text-error`,
          children: _.Localize(`#Cart_ErrorUpdating`),
        }),
    ],
  });
}
function _(_) {
  let { bDisabled: _ } = _,
    _ = _(),
    { data: _ } = _(!!_),
    _ = _(_?.family_groupid ?? ``, _ ?? ``, 1);
  if (!_ || _?.role != 1) return null;
  let _ = _.isPending || _.isSuccess;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        color: `dull`,
        width: `100%`,
        disabled: _ || _,
        onClick: () =>
          _.mutate(void 0, {
            onSuccess: () => window.location.assign(_()),
          }),
        children: _.Localize(`#Cart_DeclinePurchaseRequest`),
      }),
      _.isError &&
        (0, _.jsx)(_, {
          color: `text-error`,
          children: _.Localize(`#Cart_ErrorUpdating`),
        }),
    ],
  });
}
