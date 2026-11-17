var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivateAppList`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            private: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivateApps_ToggleAppPrivacy_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivateApps_ToggleAppPrivacy_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivateApps_GetPrivateAppList_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.private_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            private_apps: {
              _: 1,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivateApps_GetPrivateAppList_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.private_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            private_apps: {
              _: 1,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`AccountPrivateApps.ToggleAppPrivacy#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ToggleAppPrivacy = _;
  function _(_, _, _) {
    return _.SendMsg(`AccountPrivateApps.GetPrivateAppList#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetPrivateAppList = _;
})((_ ||= {}));
var _;
(function (_) {
  _.NotifyPrivateAppListChangedHandler = {
    name: `AccountPrivateAppsClient.NotifyPrivateAppListChanged#1`,
    request: _,
  };
})((_ ||= {}));
function _() {
  return `PrivateApps_` + _.accountid;
}
function _() {
  return _.IN_STEAMUI;
}
async function _(_) {
  let _ = _();
  return await _.GetObject(_);
}
async function _(_, _) {
  try {
    let _ = _();
    await _.StoreObject(_, _);
  } catch (_) {
    let _ = Error(
      `WritePrivateAppsToLocalCache failed with result ${_?.result}, ${_?.message}`,
    );
    (_().ReportError(_, {
      bIncludeMessageInIdentifier: !0,
    }),
      console.warn(_));
  }
}
var _ = [`AccountPrivateApps`];
function _(_) {
  let { transport: _, storage: _, bUseLocalCache: _, bEnabled: _ } = _;
  return {
    queryKey: _,
    queryFn: async () => {
      let _;
      _ && (_ = await _(_));
      let _ = _.Init(_),
        _ = await _.GetPrivateAppList(_, _);
      if (!_.BSuccess()) {
        if (_) return new Set(_);
        throw _.GetErrorMessage();
      }
      return (
        _ && (await _(_, _.Body().private_apps(!0).appids())),
        new Set(_.Body().private_apps(!0).appids())
      );
    },
    enabled: _,
  };
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _();
  return _(
    _({
      transport: _,
      storage: _,
      bUseLocalCache: _,
      bEnabled: !!_.accountid,
    }),
  );
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let { rgAppIDs: _, bPrivate: _ } = _;
      return _(_, _, _);
    },
    onSuccess: (_, _) => {
      let { rgAppIDs: _, bPrivate: _ } = _;
      _(_, _, _, _ ? _ : null);
    },
  });
}
async function _(_, _, _) {
  let _ = _.Init(_);
  (_.Body().set_appids(_.slice()), _.Body().set_private(_));
  let _ = await _.ToggleAppPrivacy(_, _);
  if (!_.BSuccess()) throw _.GetErrorMessage();
}
function _(_, _, _, _) {
  _.setQueryData(_, (_) => {
    if (!_) return;
    let _ = new Set(_);
    return (
      _.forEach((_) => {
        _ ? _.add(_) : _.delete(_);
      }),
      _ && _(_, Array.from(_.values())),
      _
    );
  });
}
var _ = _(_(), 1),
  _ = _(_(), 1);
async function _(_, _, _) {
  if (_(_)) {
    let _ = _.Init(_);
    _.Body().set_line_item_id(_);
    let _ = await _.RemoveItemFromCart(_, _);
    return (_(), _.Body().toObject());
  }
  {
    let _ = _.Init(_);
    (_.Body().set_gidlineitems([_]), _.Body().set_gidshoppingcart(_.gid));
    let _ = await _.RemoveLineItems(_, _);
    return (_(), _.Body().toObject());
  }
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async () => await _(_, _, _),
    onSuccess: (_) => {
      `cart` in _ ? _(_, _, _.cart) : _(_, _);
    },
  });
}
async function _(_, _) {
  if (_(_)) {
    let _ = _.Init(_);
    return (await _.DeleteCart(_, _)).BSuccess();
  }
  {
    let _ = await _(_, _);
    if (_ && _.line_items && _.line_items.length) {
      let _ = _.Init(_);
      return (
        _.Body().set_gidlineitems(_.line_items.map(({ line_item_id: _ }) => _)),
        _.Body().set_gidshoppingcart(_.gid),
        (await _.RemoveLineItems(_, _)).BSuccess()
      );
    }
    return !1;
  }
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async () => await _(_, _),
    onSuccess: () => _(_, _),
  });
}
var _ = `EK-qttlMyfo-`,
  _ = _(),
  _ = {
    direction: `right`,
    style: {
      width: `320px`,
      height: `${(125 / 184) * 320}px`,
    },
  };
function _(_) {
  let { name_override: _, ..._ } = _,
    { data: _ } = _(_ ? void 0 : _),
    _ = _ ?? _?.name;
  return (0, _.jsx)(_, {
    _: _,
    hoverProps: _,
    name: _,
    className: _,
    bShowWishlistButton: !1,
    children: _,
  });
}
var _ = `Px5OaOH5lTc-`,
  _ = `A5KVCw7vUiI-`,
  _ = `_2SE2pmscwUI-`,
  _ = `_2PfDzjJlVpw-`,
  _ = `I3wNTGX8W84-`,
  _ = `i-xXuvHLioU-`,
  _ = `wuZBJ1ixmBQ-`,
  _ = `_7RJqaqzA6VI-`,
  _ = `km-ZqAmzkm8-`,
  _ = `FwfC744cc-k-`,
  _ = `QQ50n6yPgT4-`,
  _ = `dstuYF4eZu4-`,
  _ = `bKkQiLkI-vk-`,
  _ = `T7ZPZdCVy-E-`,
  _ = `B2ns9nZalz8-`,
  _ = `F1Hc-V5ZZNo-`,
  _ = `pE-GO0C3sGQ-`,
  _ = `_7qi-HYx8d8w-`,
  _ = `mHtWWyPByns-`,
  _ = `fDgifICDL4M-`,
  _ = `P8g8lT95CGk-`,
  _ = `vPLNUdbJs30-`,
  _ = `CM-SDm7Rc1Q-`,
  _ = `YwCPuM47bBA-`,
  _ = `GnZ4gWzvUGs-`,
  _ = `zLoWY6fxr7Y-`,
  _ = `oQEHUcBaGvk-`,
  _ = `_3IHMp-zjjxc-`,
  _ = `YWpHb5CogBI-`,
  _ = `CZqGJG5-v8g-`,
  _ = `w27c-1zS2dI-`;
function _(_) {
  let { scrollable: _ = !1, children: _ } = _;
  return (0, _.jsx)(_ ? _ : _, {
    className: (0, _.default)(_, _ && `cTc9e3d66Ng-`),
    focusableIfEmpty: !0,
    children: _,
  });
}
function _(_) {
  let { text: _, children: _, className: _, noWrap: _ } = _;
  return (0, _.jsx)(_, {
    "flow-children": `row`,
    className: (0, _.default)(_, _ && `m-Re58fA9to-`, _ && `_2lltTJ6xmjc-`, _),
    children: _,
  });
}
var _ = _.createContext(!1);
function _(_) {
  let { placeholder: _, className: _, children: _ } = _,
    _ = _.useContext(_);
  return (0, _.jsx)(_, {
    className: (0, _.default)(
      _,
      _ && `_2UwBJhHjd8s-`,
      _ && !_ && `EAteJuxJ3JI-`,
      _,
    ),
    children: _,
  });
}
function _() {
  return (0, _.jsx)(_, {
    placeholder: !0,
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      size: `medium`,
      position: `center`,
      msDelayAppear: 250,
    }),
  });
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(_, {
    text: !0,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _,
    }),
  });
}
function _(_) {
  if (_.coupon_applied) return _.coupon_applied.discount_pct;
  let _ = parseInt(_.original_price.amount_in_cents),
    _ = parseInt(_.subtotal.amount_in_cents);
  return Math.min(99, Math.floor(((_ - _) / _) * 100 + 0.5));
}
var _ = (function (_) {
    return (
      (_[(_.k_ECartDisplayType_Unknown = 0)] = `k_ECartDisplayType_Unknown`),
      (_[(_.k_ECartDisplayType_Modal = 1)] = `k_ECartDisplayType_Modal`),
      (_[(_.k_ECartDisplayType_FullPage = 2)] = `k_ECartDisplayType_FullPage`),
      _
    );
  })({}),
  _ = _.createContext({
    rgCartLevelNotices: [],
    mapValidateNoticesToFootnote: new Map(),
    eDisplayType: 0,
  });
function _(_) {
  let { validateCart: _, eDisplayType: _, children: _ } = _,
    _ = _(_, _);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  let { rgCartLevelNotices: _ } = _.useContext(_);
  return !_ || !_.length
    ? null
    : _.length == 1
      ? (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#Cart_CartLevelErrorFormat`, _[0]),
        })
      : (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              children: _.Localize(`#Cart_CartLevelErrorMultiple`),
            }),
            (0, _.jsx)(`ul`, {
              children: _.map((_, _) =>
                (0, _.jsx)(
                  `li`,
                  {
                    children: _,
                  },
                  _,
                ),
              ),
            }),
          ],
        });
}
function _(_) {
  let { validateCart: _ } = _,
    { mapValidateNoticesToFootnote: _ } = _.useContext(_);
  if (!_ || !_.size) return null;
  let _ = (_?.cart_items || []).every((_) => !_.errors),
    _ = _
      ? _.Localize(`#Cart_FooterNoticeHeader_Warning`)
      : _.Localize(`#Cart_FooterNoticeHeader_MustFix`),
    _ = (0, _.default)(_, !_ && `KZ1BYSHwrs8-`);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      Array.from(_).map(([_, _]) =>
        (0, _.jsx)(
          _,
          {
            notice: _,
          },
          _.index,
        ),
      ),
    ],
  });
}
function _(_) {
  let { notice: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`sup`, {
          children: _.index,
        }),
      }),
      (0, _.jsx)(`div`, {
        children: _.footnote_text,
      }),
    ],
  });
}
function _(_) {
  return _.useContext(_)?.mapValidateNoticesToFootnote.get(_)?.index;
}
function _() {
  return _.useContext(_)?.eDisplayType ?? 0;
}
function _(_) {
  let { lineItem: _ } = _,
    _ = _(),
    { bShowValidationNotices: _ } = _();
  if (!_) return null;
  let _ = [],
    _ = !!_.gift_info?.accountid_giftee;
  return (
    _.errors?.duplicate_appids_in_cart?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 1,
            notice_text: _.Localize(`#Cart_Error_DuplicateApps_LineItem`),
            appids: _.errors.duplicate_appids_in_cart,
          },
          `duplicate_appids`,
        ),
      ),
    _.push(
      (0, _.jsx)(
        _,
        {
          lineItem: _,
        },
        `owned_apps`,
      ),
    ),
    _.errors?.unavailable_in_country &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 8,
            notice_text: _.Localize(`#Cart_Error_UnavailableCountry_LineItem`),
          },
          `unavailable_in_country`,
        ),
      ),
    _.errors?.adult_content_restricted &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 17,
            notice_text: _.Localize(
              `#Cart_Error_AdultContentRestricted_LineItem`,
            ),
          },
          `adult_content_restricted`,
        ),
      ),
    _.errors?.commercial_license_restricted &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 18,
            notice_text: _.Localize(
              `#Cart_Error_CommercialLicenseRestricted_LineItem`,
            ),
          },
          `commercial_license_restricted`,
        ),
      ),
    _.errors?.gift_not_valid_for_recipient_region &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 19,
            notice_text: _.Localize(`#Cart_Error_GiftRecipientInvalid`),
          },
          `gift_recipient_invalid`,
        ),
      ),
    _.push(
      (0, _.jsx)(
        _,
        {
          lineItem: _,
        },
        `coupon_notices`,
      ),
    ),
    _.errors?.too_many_in_cart &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 14,
            notice_text: _.Localize(`#Cart_Error_TooManyInCart`),
          },
          `too_many_in_cart`,
        ),
      ),
    _.errors?.missing_must_own_appids?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 16,
            notice_text: _
              ? _.Localize(`#Cart_Error_MissingMustOwnApps_GiftLineItem`)
              : _.Localize(`#Cart_Error_MissingMustOwnApps_LineItem`),
            appids: _.errors.missing_must_own_appids,
          },
          `missing_must_own_appids`,
        ),
      ),
    _.warnings?.appids_in_mastersub?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 4,
            notice_text: _.Localize(`#Cart_Error_MasterSubscription_LineItem`),
            appids: _.warnings.appids_in_mastersub.flatMap((_) =>
              _.cart_appid ? [_.cart_appid] : [],
            ),
          },
          `appids_in_mastersub`,
        ),
      ),
    _.warnings?.owned_appids?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 3,
            notice_text: _.Localize(`#Cart_Warning_AlreadyOwned_LineItem`),
            appids: _.warnings.owned_appids,
          },
          `owned_appids`,
        ),
      ),
    _.warnings?.owned_appids_extra_copy?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 9,
            notice_text: _.Localize(`#Cart_Warning_ExtraCopies_LineItem`),
            appids: _.warnings.owned_appids_extra_copy,
          },
          `owned_appids_extra_copy`,
        ),
      ),
    _.warnings?.price_has_changed &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 10,
            notice_text: _.Localize(`#Cart_Warning_PriceChange_LineItem`),
          },
          `price_has_changed`,
        ),
      ),
    _.warnings?.non_refundable &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 5,
            notice_text: _.Localize(`#Cart_Warning_NoRefund_LineItem`),
          },
          `non_refundable`,
        ),
      ),
    _.warnings?.gift_recipient_higher_price &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 20,
            notice_text: _.Localize(`#Cart_Warning_RecipientHigherPrice`),
          },
          `gift_recipient_higher_price`,
        ),
      ),
    _.push(
      (0, _.jsx)(
        _,
        {
          lineItem: _,
        },
        `available_cheaper`,
      ),
    ),
    _ &&
      _ !== 2 &&
      _.push(
        (0, _.jsx)(
          _,
          {
            nGifteeAccountID: _.gift_info.accountid_giftee,
          },
          `non_friend_gift`,
        ),
      ),
    _
  );
}
function _(_) {
  let { purchase_state: _, notice_text: _, appids: _ } = _,
    _ = _(_),
    _ = _() === 2 && !!_;
  return (0, _.jsxs)(_, {
    children: [
      _,
      _ &&
        (0, _.jsx)(`sup`, {
          children: _,
        }),
      ` `,
      (0, _.jsx)(_, {
        rgAppIDs: _ ?? [],
      }),
    ],
  });
}
function _(_) {
  let { rgAppIDs: _ } = _;
  return !_ || _.length == 0
    ? null
    : _.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            appid: _,
            last: _ >= _.length - 1,
          },
          `${_}_${_}`,
        ),
      );
}
function _(_) {
  let { appid: _, last: _ } = _,
    { data: _ } = _({
      appid: _,
    });
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            appid: _,
            name_override: _.name,
          }),
          !_ &&
            (0, _.jsx)(_.Fragment, {
              children: `, `,
            }),
        ],
      })
    : null;
}
function _(_) {
  let { lineItem: _ } = _,
    { data: _ } = _(_.item_id),
    { data: _ } = _(_.item_id);
  if (_.gift_info?.accountid_giftee || !_ || !_ || _(_, _)) return null;
  let _ = _.packageid
    ? {
        packageid: _.packageid,
      }
    : {
        bundleid: _.bundleid,
      };
  return (0, _.jsx)(_, {
    children: _.LocalizeReact(
      `#Cart_Warning_AvailableAtALowerPrice`,
      (0, _.jsx)(_, {
        ..._,
        name_override: _.purchase_option_name,
      }),
    ),
  });
}
function _(_) {
  let { nGifteeAccountID: _ } = _,
    _ = _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString(),
    { data: _ } = _();
  return _.useMemo(() => !_ || _.includes(_), [_, _]) || !_.logged_in
    ? null
    : (0, _.jsx)(_, {
        children: _.Localize(`#Cart_Warning_GiftToNonFriend`),
      });
}
function _(_) {
  let { lineItem: _ } = _;
  if (!_.errors?.owned_appids?.length) return null;
  let _ = !!_.gift_info?.accountid_giftee;
  if (_.errors?.has_existing_billing_agreement)
    return (0, _.jsx)(_, {
      purchase_state: 15,
      notice_text: _.Localize(`#Cart_Error_ExistingBillingAgreement`),
    });
  {
    let _ = (_.store_item?.included_appids?.length ?? 0) > 1,
      _ = _.Localize(
        _
          ? `#Cart_Error_AlreadyOwned_GiftLineItem_Game`
          : `#Cart_Error_AlreadyOwned_LineItem_Game`,
      );
    return (
      _ &&
        (_ = _.Localize(
          _
            ? `#Cart_Error_AlreadyOwned_GiftLineItem`
            : `#Cart_Error_AlreadyOwned_LineItem`,
        )),
      (0, _.jsx)(_, {
        purchase_state: 2,
        notice_text: _,
        appids: _ ? _.errors.owned_appids : void 0,
      })
    );
  }
}
function _(_) {
  let { lineItem: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.errors?.coupon_exclusive_promo &&
        (0, _.jsx)(_, {
          purchase_state: 13,
          notice_text: _.Localize(`#Cart_Error_CouponIsExclusivePromo`),
        }),
      _.errors?.invalid_coupon &&
        (0, _.jsx)(_, {
          purchase_state: 11,
          notice_text: _.Localize(`#Cart_Error_CouponIsInvalid`),
        }),
      _.errors?.invalid_coupon_for_item &&
        (0, _.jsx)(_, {
          purchase_state: 12,
          notice_text: _.Localize(`#Cart_Error_CouponIsInvalidForItem`),
        }),
    ],
  });
}
function _(_, _) {
  return _.useMemo(() => {
    let _ = new Map(),
      _ = new Map(),
      _ = 1,
      _ = (_, _) => {
        _.has(_) ||
          _.set(_, {
            index: _++,
            footnote_text: _,
          });
      },
      _ = !1;
    _?.cart_items?.forEach((_) => {
      let _ = !!_.gift_info?.accountid_giftee;
      (_.errors && (_ = !0),
        _.errors?.duplicate_appids_in_cart?.length &&
          _(1, _.Localize(`#Cart_Error_DuplicateApps_FootNote`)),
        _.errors?.owned_appids?.length &&
          (_.errors?.has_existing_billing_agreement
            ? _(15, _.Localize(`#Cart_Error_ExistingBillingAgreement_FootNote`))
            : _(
                2,
                _.Localize(
                  _
                    ? `#Cart_Error_AlreadyOwned_GiftFootNote`
                    : `#Cart_Error_AlreadyOwned_FootNote`,
                ),
              )),
        _.errors?.unavailable_in_country &&
          _(8, _.Localize(`#Cart_Error_UnavailableCountry_FootNote`)),
        _.errors?.adult_content_restricted &&
          _(17, _.Localize(`#Cart_Error_AdultContentRestricted_FootNote`)),
        _.errors?.commercial_license_restricted &&
          _(18, _.Localize(`#Cart_Error_CommercialLicenseRestricted_FootNote`)),
        _.errors?.missing_must_own_appids?.length &&
          _(
            16,
            _
              ? _.Localize(`#Cart_Error_MissingMustOwnApps_FootNoteGift`)
              : _.Localize(`#Cart_Error_MissingMustOwnApps_FootNote`),
          ),
        _.warnings?.appids_in_mastersub?.length &&
          _(4, _.Localize(`#Cart_Error_MasterSubscription_FootNote`)),
        _.warnings?.price_has_changed &&
          _.set(10, _.Localize(`#Cart_Warning_PriceChange_FootNote`)));
    });
    let _ = Array.from(_.values());
    return (
      _ && _.unshift(_.Localize(`#Cart_CartLevelErrorNotice`)),
      {
        rgCartLevelNotices: _,
        mapValidateNoticesToFootnote: _,
        eDisplayType: _,
      }
    );
  }, [_, _]);
}
async function _(_, _, _, _, _, _) {
  if (_(_)) {
    let _ = _.Init(_);
    (_.Body().set_line_item_id(_),
      _.Body().set_user_country(_.country_code),
      _ && _.Body().set_gift_info(_.fromObject(_)),
      _ && _.Body().set_flags(_.fromObject(_)),
      _ && _.Body().set_apply_gidcoupon(_));
    let _ = await _.ModifyLineItem(_, _);
    return (
      _.BSuccess() ||
        console.warn(`Failed to update gift info: ${_.GetEResult()}`),
      [_.GetEResult(), _.Body().toObject()]
    );
  }
  {
    let _ = _.Init(_);
    (_.Body().set_gidlineitem(_),
      _.Body().set_gidshoppingcart(_.gid),
      _
        ? _.Body().set_gift_info(_.fromObject(_))
        : _?.is_gift &&
          _.Body().set_gift_info(
            _.fromObject({
              accountid_giftee: 0,
              email_giftee: ``,
            }),
          ));
    let _ = await _.ModifyLineItem(_, _);
    return (
      _.BSuccess() ||
        console.warn(
          `Failed to update gift info in anonymous cart: ${_.GetEResult()}`,
        ),
      _.Body().toObject()
    );
  }
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(_);
  return _({
    mutationFn: (_) =>
      _(_, _, _.lineItemID, _.lineItemFlags, _.giftInfo, _.gidCoupon),
    onMutate: async (_) => {
      await _.cancelQueries({
        queryKey: _,
      });
      let _ = _.getQueryData(_);
      return (
        _.setQueryData(_, (_) => ({
          ...(_ ?? {}),
          line_items:
            _?.line_items?.map((_) =>
              _.line_item_id === _.lineItemID
                ? {
                    ..._,
                    flags: _.lineItemFlags || _.flags,
                    gift_info: _.giftInfo || _.gift_info,
                  }
                : _,
            ) ?? [],
        })),
        {
          previousCart: _,
        }
      );
    },
    onSuccess: (_) => {
      `cart` in _ ? _(_, _, _.cart) : _(_, _);
    },
    onError: (_, _, _) => {
      _?.previousCart && _.setQueryData(_, _.previousCart);
    },
  });
}
function _(_) {
  let {
      lineItems: _,
      cartValidation: _,
      bValidating: _ = !1,
      renderLineItem: _ = _,
      scrollable: _ = !1,
    } = _,
    [_] = _.useState(() => new Set(_.map((_) => _?.line_item_id)));
  if (!_.length) return (0, _.jsx)(_, {});
  let _ = _?.cart_items
    ? _.cart_items.reduce((_, _) => ((_[_.line_item_id] = _), _), {})
    : {};
  return (0, _.jsx)(_, {
    scrollable: _,
    children: _.map((_, _) =>
      _
        ? (0, _.jsx)(
            _.Provider,
            {
              value: !_.has(_.line_item_id),
              children: (0, _.jsx)(_, {
                fallback: (_) =>
                  (0, _.jsx)(_, {
                    item: _,
                    error: _,
                  }),
                children: (0, _.jsx)(_, {
                  item: _,
                  validatedItem: _[_.line_item_id],
                  bCartValidated: !!_ && !_,
                  renderLineItem: _,
                }),
              }),
            },
            _.line_item_id || _,
          )
        : (0, _.jsx)(_, {}, _),
    ),
  });
}
function _(_) {
  let { item: _, validatedItem: _, bCartValidated: _, renderLineItem: _ } = _,
    _ = _(_);
  if (!_) throw `Unknown line item type (${_.type})`;
  let { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _ ? _(_) : _;
  return (
    _(_),
    _(_),
    _ && (!_.visible || _ === null || (_ && !_))
      ? (0, _.jsx)(_, {
          lineItemID: _.line_item_id,
          validatedItem: _,
          storeItem: _,
        })
      : !_ || !_ || !_ || !_
        ? (0, _.jsx)(_, {})
        : (0, _.jsx)(_, {
            lineItem: _,
            validatedItem: _,
            storeItem: _,
            displayItem: _,
            purchaseOption: _,
            renderLineItem: _,
          })
  );
}
function _(_) {
  let { item: _, error: _ } = _,
    _ = _(_.line_item_id),
    _ = _();
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Cart_LineItem_ErrorBoundary`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.message,
          }),
        ],
      }),
      !_ &&
        (0, _.jsx)(_, {
          onActivate: () => _.mutate(),
          className: `VlO2XVO6mXQ-`,
          children: _.Localize(`#Cart_Remove`),
        }),
    ],
  });
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Cart_Empty`),
      }),
    }),
  });
}
function _(_) {
  let _ = _.type;
  switch (_) {
    case 1:
      return {
        packageid: _.packageid,
      };
    case 2:
      return {
        bundleid: _.bundleid,
      };
    case 0:
      return;
    default:
      _(_, `Unhandled type: ${_}`);
  }
}
function _(_) {
  let {
      storeItem: _,
      displayItem: _,
      lineItem: _,
      purchaseOption: _,
      validatedItem: _,
      renderLineItem: _,
    } = _,
    _ = _.line_item_id,
    _ = _(_),
    _ = _(_),
    _ = _.isPending || _.isSuccess,
    { data: _ } = _(_),
    _ = _(_),
    { data: _, isLoading: _ } = _(),
    _ = _.useMemo(() => _.filter((_) => _?.has(_)), [_, _]),
    _ = _.useId();
  if (_) return (0, _.jsx)(_, {});
  let _ = _.flags?.is_gift,
    _ = _.length > 0 && _.length === _.length,
    _ = !_ && _.length > 0 && !_;
  return _({
    lineItem: _,
    storeItem: _,
    validatedItem: _,
    children: (0, _.jsxs)(_.Fragment, {
      children: [
        _ && (0, _.jsx)(_, {}),
        (0, _.jsxs)(_, {
          className: (0, _.default)(_, _ && `_6nd0ILcGxcg-`),
          "flow-children": `row`,
          children: [
            (0, _.jsx)(`div`, {
              className: (0, _.default)(void 0, _),
              children: (0, _.jsx)(_, {
                storeItem: _,
                feature: `cart-items`,
                noImpressionTracking: !0,
                className: _,
                children: (0, _.jsx)(_, {
                  storeItem: _,
                  alt: _.name,
                  blurred: !!_.errors?.adult_content_restricted,
                }),
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  className: _,
                  children: (0, _.jsx)(`div`, {
                    className: _,
                    _: _,
                    children: _.name,
                  }),
                }),
                _?.is_coming_soon &&
                  (0, _.jsx)(_, {
                    storeItem: _,
                  }),
                (0, _.jsxs)(_, {
                  validatedItem: _,
                  children: [
                    (0, _.jsx)(_, {
                      storeItem: _,
                      purchaseOption: _,
                    }),
                    (0, _.jsx)(_, {
                      purchaseOption: _,
                    }),
                    (0, _.jsx)(_, {
                      storeItem: _,
                      purchaseOption: _,
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  validatedItem: _,
                }),
                _ &&
                  (0, _.jsx)(_, {
                    appids: _,
                  }),
                (0, _.jsxs)(_, {
                  className: _,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: (0, _.default)(_, _),
                      children: (0, _.jsx)(_, {
                        _: _(_),
                      }),
                    }),
                    (0, _.jsx)(_, {
                      purchaseOption: _,
                      validatedItem: _,
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  lineItem: _,
                  purchaseOption: _,
                  validatedItem: _,
                  rgAppIDs: _,
                  bAllAppsPrivate: _,
                  fnRemoveLineItem: _.mutate,
                  accessibilityId: _,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { lineItemID: _, validatedItem: _, storeItem: _ } = _,
    _ = _(_),
    _ = _(),
    _ = _.isPending;
  return (0, _.jsxs)(_, {
    placeholder: !0,
    children: [
      _ && (0, _.jsx)(_, {}),
      (0, _.jsxs)(_, {
        className: (0, _.default)(_, _ && `_6nd0ILcGxcg-`),
        "flow-children": `row`,
        children: [
          (0, _.jsx)(`div`, {
            className: (0, _.default)(void 0, _),
            children: (0, _.jsx)(_, {
              storeItem: _,
              noImpressionTracking: !0,
              children: (0, _.jsx)(_, {
                storeItem: _,
              }),
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                children: (0, _.jsx)(`div`, {
                  className: _,
                  children: _?.name,
                }),
              }),
              !!_ &&
                (0, _.jsx)(_, {
                  validatedItem: _,
                }),
              !_ &&
                (0, _.jsx)(_, {
                  className: `mHtWWyPByns-`,
                  children: (0, _.jsx)(_, {
                    focusable: !0,
                    onActivate: () => _.mutate(),
                    className: `BFDdk5e7x8k-`,
                    children: _.Localize(`#Cart_Remove`),
                  }),
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { storeItem: _, alt: _, blurred: _ } = _,
    { data: _ } = _(_(_)),
    _ = `${_.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
  return (
    _?.header
      ? (_ =
          _.STORE_ITEM_BASE_URL +
          _.asset_url_format.replace("${FILENAME}", _.header))
      : _?.small_capsule &&
        (_ =
          _.STORE_ITEM_BASE_URL +
          _.asset_url_format.replace("${FILENAME}", _.small_capsule)),
    (0, _.jsx)(`img`, {
      alt: _ ?? _.name,
      className: _ ? _ : _,
      src: _,
    })
  );
}
function _(_) {
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      children: _.children,
    }),
  });
}
function _(_) {
  let { validatedItem: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        lineItem: _,
      }),
      _,
    ],
  });
}
function _(_) {
  let { storeItem: _ } = _,
    { data: _ } = _(_(_)),
    _ = _(_);
  if (!_) return null;
  let _ = _.Localize(`#Cart_ComingSoon`, _);
  return (
    [`text_tba`, `text_comingsoon`].includes(_.coming_soon_display) && (_ = _),
    (0, _.jsx)(_, {
      children: _,
    })
  );
}
function _(_) {
  let { purchaseOption: _, validatedItem: _ } = _,
    _ = _(_),
    _ = _?.strOriginalPrice ?? _?.formatted_original_price,
    _ = _?.formatted_final_price,
    _ = _?.nDiscountPct ?? _?.discount_pct,
    _ = _.subtotal?.amount_in_cents !== _?.final_price_in_cents;
  return (
    _.original_price &&
      _.subtotal &&
      _ &&
      ((_ = _.original_price.formatted_amount),
      (_ = _.subtotal.formatted_amount),
      (_ = _(_))),
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        className: _,
        formatted_orig_price: _,
        formatted_final_price: _,
        discount_percent: _,
        bundle_discount_percent: _.bundle_discount_pct,
        bHideDiscountPercentForCompliance: _.hide_discount_pct_for_compliance,
        bDiscountFromCoupon: !!_.coupon_discount?.amount_in_cents,
      }),
    })
  );
}
function _(_) {
  let {
      lineItem: _,
      purchaseOption: _,
      validatedItem: _,
      rgAppIDs: _,
      bAllAppsPrivate: _,
      fnRemoveLineItem: _,
      accessibilityId: _,
    } = _,
    _ = _(),
    [_] = _(),
    _ = _?.accountid_giftee || (_ ? _.gift_info?.accountid_giftee : void 0),
    _ = _(),
    _ = _() && !_?.restrict_add_additional_to_cart && !_(_),
    _ = _.errors?.adult_content_restricted,
    _ = _(_.packageid, _.bundleid, _(_), void 0, `cart-add-additional`),
    _ = _.useId(),
    _ = _.useId();
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _),
        children: _
          ? (0, _.jsx)(_, {
              recipient: _,
            })
          : (0, _.jsx)(_, {
              lineItem: _,
              rgAppIDs: _,
              bAllAppsPrivate: _,
              purchaseOption: _,
            }),
      }),
      (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _),
        children: [
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  toolTipContent: _.Localize(`#Cart_LineItem_Add_Tooltip`),
                  usePointerEvents: !0,
                  children: (0, _.jsx)(_, {
                    onActivate: () => !_.isPending && _.mutate(),
                    className: `_8IaR06zcRE4-`,
                    _: _,
                    "aria-labelledby": `${_} ${_}`,
                    children: _.Localize(`#Cart_Add`),
                  }),
                }),
                `|`,
              ],
            }),
          !_ &&
            (0, _.jsx)(_, {
              onActivate: () => _(),
              className: `BFDdk5e7x8k-`,
              _: _,
              "aria-labelledby": `${_} ${_}`,
              children: _.Localize(`#Cart_Remove`),
            }),
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                `| `,
                (0, _.jsx)(`a`, {
                  href: `${_.STORE_CHECKOUT_BASE_URL}checkout/?purchasetype=updatebillinginfo&r=cart`,
                  className: `_5BH7TDomMoc-`,
                  children: _.Localize(`#Cart_Verify`),
                }),
                ` `,
              ],
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { data: _ } = _(_.recipient),
    _ = _?.public_data?.persona_name;
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.LocalizeReact(
      `#Cart_GiftForNotice`,
      _
        ? (0, _.jsx)(`span`, {
            className: _,
            children: _,
          })
        : ``,
    ),
  });
}
function _(_) {
  let { storeItem: _, purchaseOption: _ } = _,
    _ = !!_.requires_shipping && _.item_type === 1,
    { data: _ } = _(_ ? _._ : void 0);
  return _
    ? (0, _.jsx)(_, {
        children: _.Localize(`#Cart_ShippingEstimate_DeliveryDate`, _(_)),
      })
    : null;
}
function _(_) {
  let { purchaseOption: _ } = _;
  if (!_.requires_shipping) return null;
  let _ = _.country_code;
  return [`GB`].includes(_)
    ? (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(`a`, {
            className: _,
            target: `_blank`,
            href: `https://www.valvesoftware.com/legal/statement-of-compliance`,
            rel: `noreferrer`,
            children: _.Localize(`#Cart_LineItem_Hardware_Compliance_Label`),
          }),
        }),
      })
    : null;
}
var _ = {
  1: `Second`,
  2: `Minute`,
  3: `Hour`,
  4: `Day`,
  5: `Week`,
  6: `Month`,
  7: `Year`,
};
function _(_) {
  let { storeItem: _, purchaseOption: _ } = _;
  if (_.item_type !== 1) return null;
  let _ = _.recurrence_info;
  if (!_) return null;
  let _ = `#Package`;
  (_.billing_agreement_type === 2 && (_ = `#GameBillingPackage`),
    _.formatted_final_price && _.discount_pct && (_ += `WithDiscount`));
  let _ = _[_.renewal_time_unit],
    _ = _ + `CostIncludesSubscriptionBy` + _;
  return (0, _.jsx)(_, {
    children: _.Localize(
      _,
      _.formatted_final_price,
      _.formatted_renewal_price,
      _.renewal_time_period,
      _.discount_pct,
    ),
  });
}
function _(_) {
  return _.user_can_purchase_as_gift;
}
function _(_) {
  return !_.is_commercial_license && !_.requires_shipping;
}
function _(_) {
  let { lineItem: _, rgAppIDs: _, bAllAppsPrivate: _, purchaseOption: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    { bShowPurchaseOptionPicker: _ } = _(),
    { data: _ } = _(
      _.gift_info?.accountid_giftee ? _.gift_info.accountid_giftee : null,
    );
  if (!_) return null;
  let _ = !_(_) || _,
    _ = !_(_),
    _ = [
      {
        data: `myself`,
        label: _.Localize(`#Cart_LineItemOptions_Myself`),
      },
    ];
  if (
    (_ ||
      _.push({
        data: `private`,
        label: _.Localize(`#Cart_LineItemOptions_Privately`),
        tooltip: _.Localize(`#Cart_LineItemOptions_PrivateTooltip`),
      }),
    !_)
  ) {
    let _ = _?.public_data?.persona_name;
    _.gift_info?.accountid_giftee && _
      ? _.push({
          data: `gift`,
          label: _.Localize(`#Cart_LineItemOptions_GiftForPersona`, _),
        })
      : _.push({
          data: `gift`,
          label: _.Localize(`#Cart_LineItemOptions_Gift`),
        });
  }
  let _ = _.flags?.is_gift ? `gift` : `myself`;
  return (
    _ === `myself` && _ && (_ = `private`),
    _.length === 1
      ? null
      : (0, _.jsx)(_, {
          onSelectionChange: (_) => {
            if (_ === _.data) return;
            let _ = (_) =>
                _.mutate({
                  rgAppIDs: _,
                  bPrivate: _,
                }),
              _ = (_) =>
                _.mutate({
                  lineItemID: _.line_item_id,
                  lineItemFlags: {
                    ..._.flags,
                    is_gift: _,
                  },
                  giftInfo: _ ? _.gift_info : void 0,
                });
            (_ === `private` ? _(!1) : _ === `gift` && _(!1),
              _.data === `private` ? _(!0) : _.data === `gift` && _(!0));
          },
          selectedValue: _.find((_) => _.data === _) ?? null,
          options: _,
          getOptionLabel: (_) =>
            _.tooltip
              ? (0, _.jsx)(_, {
                  toolTipContent: _.tooltip,
                  usePointerEvents: !0,
                  children: (0, _.jsx)(`span`, {
                    children: _.label,
                  }),
                })
              : _.label,
          size: `1`,
          placement: `bottom-start`,
        })
  );
}
var _ = _.memo(function (_) {
  let { validatedItem: _ } = _,
    _ = _.included_packageids ?? [],
    _ = _(),
    _ = _({
      queries: _.map((_) =>
        _(_, {
          packageid: _,
        }),
      ),
    }),
    _ = [
      ...new Set(
        _.map((_) => _.data)
          .filter((_) => !!_)
          .flat(),
      ),
    ];
  return !_.length || (_.length == 1 && !_.item_id?.bundleid)
    ? null
    : (0, _.jsxs)(_, {
        text: !0,
        children: [
          (0, _.jsxs)(`span`, {
            children: [
              _.LocalizePlural(`#Cart_IncludesItems`, _.length),
              `:`,
              ` `,
            ],
          }),
          _.map((_, _) =>
            (0, _.jsxs)(
              _.Fragment,
              {
                children: [
                  _ > 0 && `, `,
                  (0, _.jsx)(_, {
                    appid: _,
                  }),
                ],
              },
              _,
            ),
          ),
        ],
      });
});
function _(_) {
  let { appids: _ } = _,
    _ = _.map((_, _) =>
      (0, _.jsxs)(
        _.Fragment,
        {
          children: [
            _ > 0 && `, `,
            (0, _.jsx)(_, {
              appid: _,
            }),
          ],
        },
        _,
      ),
    );
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsxs)(`span`, {
        children: [_.Localize(`#Cart_Notice_SomeAppsPrivate`), `\xA0`],
      }),
      _,
    ],
  });
}
