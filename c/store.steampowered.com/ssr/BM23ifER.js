const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ ||
    (_._ = [
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
    ]),
) => _.map((_) => _[_]);
var _ = _(_(), 1),
  _ = _(),
  _ = _(_());
(_.Component, _.Component);
var _ = function (_, _) {
    return typeof _ == `function` ? _(_) : _;
  },
  _ = function (_, _) {
    return typeof _ == `string` ? _(_, null, null, _) : _;
  },
  _ = function (_) {
    return _;
  },
  _ = _.forwardRef;
_ === void 0 && (_ = _);
function _(_) {
  return !!(_.metaKey || _.altKey || _.ctrlKey || _.shiftKey);
}
var _ = _(function (_, _) {
    var _ = _.innerRef,
      _ = _.navigate,
      _ = _.onClick,
      _ = _(_, [`innerRef`, `navigate`, `onClick`]),
      _ = _.target,
      _ = _({}, _, {
        onClick: function (_) {
          try {
            _ && _(_);
          } catch (_) {
            throw (_.preventDefault(), _);
          }
          _.defaultPrevented ||
            _.button !== 0 ||
            (_ && _ !== `_self`) ||
            _(_) ||
            (_.preventDefault(), _());
        },
      });
    return ((_.ref = _ === _ ? _ : _ || _), _.createElement(`a`, _));
  }),
  _ = _(function (_, _) {
    var _ = _.component,
      _ = _ === void 0 ? _ : _,
      _ = _.replace,
      _ = _._,
      _ = _.innerRef,
      _ = _(_, [`component`, `replace`, `to`, `innerRef`]);
    return _.createElement(_.Consumer, null, function (_) {
      !_ && _(!1);
      var _ = _.history,
        _ = _(_(_, _.location), _.location),
        _ = _ ? _.createHref(_) : ``,
        _ = _({}, _, {
          href: _,
          navigate: function () {
            var _ = _(_, _.location),
              _ = _(_.location) === _(_(_));
            (_ || _ ? _.replace : _.push)(_);
          },
        });
      return (
        _ === _ ? (_.innerRef = _) : (_.ref = _ || _), _.createElement(_, _)
      );
    });
  }),
  _ = function (_) {
    return _;
  },
  _ = _.forwardRef;
_ === void 0 && (_ = _);
function _() {
  return [...arguments]
    .filter(function (_) {
      return _;
    })
    .join(` `);
}
_(function (_, _) {
  var _ = _[`aria-current`],
    _ = _ === void 0 ? `page` : _,
    _ = _.activeClassName,
    _ = _ === void 0 ? `active` : _,
    _ = _.activeStyle,
    _ = _.className,
    _ = _.exact,
    _ = _.isActive,
    _ = _.location,
    _ = _.sensitive,
    _ = _.strict,
    _ = _.style,
    _ = _._,
    _ = _.innerRef,
    _ = _(_, [
      `aria-current`,
      `activeClassName`,
      `activeStyle`,
      `className`,
      `exact`,
      `isActive`,
      `location`,
      `sensitive`,
      `strict`,
      `style`,
      `to`,
      `innerRef`,
    ]);
  return _.createElement(_.Consumer, null, function (_) {
    !_ && _(!1);
    var _ = _ || _.location,
      _ = _(_(_, _), _),
      _ = _.pathname,
      _ = _ && _.replace(/([.+*?=^!:${}()[\]|/\\])/g, `\\$1`),
      _ = _
        ? _(_.pathname, {
            path: _,
            exact: _,
            sensitive: _,
            strict: _,
          })
        : null,
      _ = !!(_ ? _(_, _) : _),
      _ = typeof _ == `function` ? _(_) : _,
      _ = typeof _ == `function` ? _(_) : _;
    _ && ((_ = _(_, _)), (_ = _({}, _, _)));
    var _ = _(
      {
        "aria-current": (_ && _) || null,
        className: _,
        style: _,
        _: _,
      },
      _,
    );
    return (
      _ === _ ? (_.innerRef = _) : (_.ref = _ || _), _.createElement(_, _)
    );
  });
});
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
function _() {
  let _ = window;
  _.g_wapitRefreshEnabled = !1;
  let _ = typeof _.g_wapitRefresh == `function`,
    _;
  return (
    !_.IN_CLIENT &&
      _ &&
      (_ = () =>
        new Promise((_, _) => {
          (_.g_wapitRefresh((_) => {
            _(_);
          }),
            window.setTimeout(() => _(`Refresh Timeout`), 1e4));
        })),
    new _(_.WEBAPI_BASE_URL, _.g_wapit, !1, _)
  );
}
async function _(_, _) {
  let _ = await _.GetCommunityInventory(_, {
    filter_appids: [_],
  });
  if (_.GetEResult() != 1)
    throw Error(
      `Quest.GetCommunityInventory on app ` + _ + ` answered ` + _.GetEResult(),
    );
  return _.Body().toObject().items ?? [];
}
var _;
function _() {
  let _ = _();
  if (_) return _.GetServiceTransport();
  if (!_) {
    let _ = _(`read_inventory_token`, `application_config`);
    _ = _(_ ? new _(_.WEBAPI_BASE_URL, _) : _());
  }
  return _.GetServiceTransport();
}
async function _(_) {
  return _(_(), _);
}
function _(_) {
  return [`QuestCommunityInventory`, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: () => _(_),
    enabled: !!_,
    staleTime: 1 / 0,
    retry: !1,
  };
}
function _(_) {
  let { data: _ } = _(_(_));
  return _;
}
var _ = `minigamev2/itemdefs`,
  _ = `appid`,
  _ = `editor`;
function _() {
  return (typeof self < `u` ? self.origin + `/` : ``) === _.STORE_BASE_URL
    ? _.STORE_BASE_URL
    : _.COMMUNITY_BASE_URL;
}
async function _(_, _) {
  if (!_) return [];
  let _ = new URLSearchParams({
    [_]: String(_),
    _: _.LANGUAGE,
  });
  _ && _.set(_, `1`);
  let _ = `${_()}${_}?${_}`,
    _ = await fetch(_, {
      credentials: _ ? `include` : `same-origin`,
    });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json();
  if (_?.success == 1 && _.item_definitions) return _.item_definitions;
  throw Error(
    `Community item definitions for app ` + _ + ` answered ` + _?.success,
  );
}
function _(_, _) {
  return [`MinigameCommunityItemDefs`, _, !!_];
}
function _(_, _) {
  return {
    queryKey: _(_, _),
    queryFn: () => _(_, _),
    enabled: !!_,
    retry: !1,
  };
}
function _(_, _) {
  let { data: _ } = _(_(_, _));
  return _;
}
function _(_, _, _) {
  let _ = _(_, _);
  return (0, _.useMemo)(
    () => _?.find((_) => (_ || _.active) && _.appid == _ && _.item_type == _),
    [_, _, _, _],
  );
}
function _(_) {
  let {
    appid: _,
    item_image_small: _,
    item_image_large: _,
    item_movie_mp4: _,
    item_movie_webm: _,
    item_title: _,
  } = _;
  if (_ && _) {
    let _ = `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`,
      _ = `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`,
      _ = `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`;
    return (0, _.jsx)(_.Fragment, {
      children: (0, _.jsxs)(`video`, {
        muted: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        poster: _,
        playsInline: !0,
        className: _.videoClassName,
        children: [
          (0, _.jsx)(`source`, {
            src: _,
            type: `video/webm`,
          }),
          !_.IN_CLIENT &&
            (0, _.jsx)(`source`, {
              src: _,
              type: `video/mp4`,
            }),
        ],
      }),
    });
  }
  {
    let _ = `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_ || _}`;
    return (0, _.jsx)(`img`, {
      className: _.className,
      src: _,
      alt: _,
    });
  }
}
function _(_) {
  let { appid: _, community_item_type: _, bForEdit: _ } = _,
    _ = _(_, _, _),
    _ =
      _ && !_.active
        ? (0, _.jsx)(`div`, {
            className: _,
            children: _(`#Sale_Section_RewardShelf_ItemInActiveWarning`),
          })
        : void 0;
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            ..._,
          }),
          _,
        ],
      })
    : (0, _.jsx)(_, {
        size: `small`,
        string: _(`#Loading`),
      });
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_type: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            item_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            item_title: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            item_description: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            item_image_small: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            item_image_large: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            item_key_values: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            item_series: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            item_class: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            editor_accountid: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            active: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            item_image_composed: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            item_image_composed_foil: {
              _: 14,
              _: _.readString,
              _: _.writeString,
            },
            deleted: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            item_last_changed: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            broadcast_channel_id: {
              _: 17,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            item_movie_webm: {
              _: 18,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_mp4: {
              _: 19,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_webm_small: {
              _: 20,
              _: _.readString,
              _: _.writeString,
            },
            item_movie_mp4_small: {
              _: 21,
              _: _.readString,
              _: _.writeString,
            },
            item_internal_name: {
              _: 22,
              _: _.readString,
              _: _.writeString,
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
      return `CommunityItemDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            community_item_type: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            community_item_class: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            community_definition: {
              _: 4,
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
      return `SaleReward_ItemDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.communityitemid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            communityitemid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_granted: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            item_definition: {
              _: 3,
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
      return `SaleItemRewardGrant`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            language: {
              _: 1,
              _: _.readString,
              _: _.writeString,
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
      return `CSaleItemRewards_ClaimItem_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.communityitemid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            communityitemid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            next_claim_time: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reward_item: {
              _: 3,
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
      return `CSaleItemRewards_ClaimItem_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            language: {
              _: 1,
              _: _.readString,
              _: _.writeString,
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
      return `CSaleItemRewards_CanClaimItem_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.can_claim || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            can_claim: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            next_claim_time: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reward_item: {
              _: 3,
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
      return `CSaleItemRewards_CanClaimItem_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sale_reward_def_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_reward_def_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            virtual_item_reward_event_id: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_start_time: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_end_time: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_items_per_def: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reward_def_type: {
              _: 7,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CSteamItemRewardDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.virtual_item_reward_event_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            virtual_item_reward_event_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CSaleItemRewards_GetRewardDefinitions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            definitions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
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
      return `CSaleItemRewards_GetRewardDefinitions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            definitions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            action: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CSaleItemRewards_SetRewardDefinitions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            definitions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
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
      return `CSaleItemRewards_SetRewardDefinitions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sale_def_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_def_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            language: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            include_community_item_def: {
              _: 3,
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
      return `CSaleItemRewards_GetClaimedSaleRewards_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.num_items_granted || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            num_items_granted: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            num_items_earned: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            current_def: {
              _: 3,
              _: _,
            },
            reward_items: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
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
      return `CSaleItemRewards_GetClaimedSaleRewards_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sale_def_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_def_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            language: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            include_community_item_def: {
              _: 3,
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
      return `CSaleItemRewards_GetCurrentDefinition_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.definition || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            definition: {
              _: 1,
              _: _,
            },
            reward_items: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
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
      return `CSaleItemRewards_GetCurrentDefinition_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`SaleItemRewards.ClaimItem#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.ClaimItem = _;
  function _(_, _, _) {
    return _.SendMsg(`SaleItemRewards.CanClaimItem#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.CanClaimItem = _;
  function _(_, _, _) {
    return _.SendMsg(`SaleItemRewards.GetRewardDefinitions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 4,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetRewardDefinitions = _;
  function _(_, _, _) {
    return _.SendMsg(`SaleItemRewards.SetRewardDefinitions#1`, _(_, _, _), _, {
      ePrivilege: 4,
      rgBrowserAPISites: [`community`],
    });
  }
  _.SetRewardDefinitions = _;
  function _(_, _, _) {
    return _.SendMsg(`SaleItemRewards.GetClaimedSaleRewards#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetClaimedSaleRewards = _;
  function _(_, _, _) {
    return _.SendMsg(`SaleItemRewards.GetCurrentDefinition#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetCurrentDefinition = _;
})((_ ||= {}));
var _ = {
  bCanClaimNewItem: !1,
  bAlreadyClaimedCurrentItem: !1,
};
async function _(_, _) {
  let _ = await _.CanClaimItem(_, {
    language: _,
  });
  if (_.GetEResult() != 1)
    throw Error(`SaleItemRewards.CanClaimItem answered ` + _.GetEResult());
  let _ = _.Body().toObject(),
    _ = _.reward_item?.defid ? _.reward_item : void 0;
  return {
    bCanClaimNewItem: !!_.can_claim,
    bAlreadyClaimedCurrentItem: !!_,
    appid: _?.appid,
    community_item_type: _?.community_item_type,
    community_item_class: _?.community_item_class,
    rtNextClaimTime: (_.next_claim_time ?? 0) > 0 ? _.next_claim_time : void 0,
  };
}
async function _(_, _) {
  let _ = await _.ClaimItem(_, {
    language: _,
  });
  if (_.GetEResult() == 29) return _(_, _);
  if (_.GetEResult() != 1)
    throw Error(`SaleItemRewards.ClaimItem answered ` + _.GetEResult());
  let _ = _.Body().toObject().reward_item;
  return {
    bCanClaimNewItem: !1,
    bAlreadyClaimedCurrentItem: !0,
    appid: _?.appid,
    community_item_type: _?.community_item_type,
    community_item_class: _?.community_item_class,
    rtNextClaimTime:
      (_.Body().next_claim_time() ?? 0) > 0
        ? _.Body().next_claim_time()
        : void 0,
  };
}
async function _(_, _) {
  let _ = await _.ActivateProfileModifierItem(_, {
    communityitemid: _.communityitemid,
    appid: _.appid,
    activate: !0,
  });
  if (_.GetEResult() != 1)
    throw Error(`Quest.ActivateProfileModifierItem answered ` + _.GetEResult());
  return _.GetEResult();
}
var _;
function _() {
  let _ = _();
  if (_) return _.GetServiceTransport();
  if (!_) {
    let _ = _(`loyalty_webapi_token`, `application_config`);
    _ = _(_ ? new _(_.WEBAPI_BASE_URL, _) : _());
  }
  return _.GetServiceTransport();
}
async function _(_) {
  return _(_(), _);
}
async function _(_) {
  return _(_(), _);
}
async function _(_) {
  return _(_(), _);
}
var _ = 3e5,
  _ = null;
function _(_) {
  return [`SaleItemCanClaim`, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: () => _(_),
    enabled: !0,
    staleTime: 1 / 0,
    retry: !1,
  };
}
function _() {
  let _ = _.LANGUAGE,
    _ = _(),
    { data: _, isLoading: _ } = _(_(_)),
    _ = _?.rtNextClaimTime;
  return (
    (0, _.useEffect)(() => {
      let _ = 0;
      if (_) {
        let _ = () => {
          let _ = _ * 1e3 - Date.now();
          _ <= 0
            ? _.invalidateQueries({
                queryKey: _(_),
              })
            : (_ = window.setTimeout(_, _ > _ ? _ / 2 : _));
        };
        _();
      }
      return () => window.clearTimeout(_);
    }, [_, _, _]),
    {
      ...(_ ?? _),
      bLoading: _,
    }
  );
}
function _() {
  let _ = _(),
    { mutateAsync: _ } = _({
      mutationFn: () => {
        if (_) {
          let _ = _;
          return ((_ = null), Promise.resolve(_));
        }
        return _(_.LANGUAGE);
      },
      onSuccess: (_) => _.setQueryData(_(_.LANGUAGE), _),
    });
  return {
    fnClaimItem: (0, _.useCallback)(() => _(), [_]),
  };
}
function _() {
  return _({
    mutationFn: (_) => _(_),
  });
}
var _ = `ERWub9bA3NU-`,
  _ = `mrBRtDl9LMs-`,
  _ = `bfF4kLTm1I4-`;
function _(_) {
  let _ = _(),
    { bLoading: _ } = _,
    { className: _, bPreviewMode: _, rewardType: _ } = _,
    [_, _, _] = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        className: _(`CSSClaimItemButton`, _),
        onClick: () => {
          _.bCanClaimNewItem
            ? _()
            : _ &&
              (_(),
              console.log(
                `Show dialog for debugging, since already claimed: `,
                _,
              ));
        },
        disabled: _,
        children: _
          ? (0, _.jsx)(_, {
              string: _(`#Loading`),
              size: `small`,
            })
          : (0, _.jsx)(_, {
              claimState: _,
            }),
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          rewardType: _,
          closeModal: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { claimState: _, strButtonOverride: _, rewardType: _ } = _;
  if (_.bAlreadyClaimedCurrentItem)
    return (0, _.jsxs)(`div`, {
      className: _(_, `CSSClaimedState`),
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsxs)(`span`, {
          children: [` `, _ || _(`#Sale_ClaimableReward_AlreadyClaimed`)],
        }),
      ],
    });
  let _ = _(`#Sale_ClaimableReward_generic`);
  switch (_?.community_item_class || _) {
    case 11:
      _ = _(`#Sale_ClaimableReward_sticker`);
      break;
    case 8:
      _ = _(`#Sale_ClaimableReward_profilemodifier`);
      break;
    case 15:
      _ = _(`#Sale_ClaimableReward_animatedavatar`);
  }
  return (0, _.jsx)(`span`, {
    className: `CSSUnclaimedState`,
    children: _,
  });
}
function _(_) {
  let { closeModal: _, rewardType: _ } = _,
    { fnClaimItem: _ } = _(),
    _ = _(),
    [_, _] = _.useState(null);
  _.useEffect(() => {
    _.bLoading ||
      (_.fnSetLoading(!0),
      _()
        .then((_) => {
          if ((_(_), _.appid)) {
            let _ = _(`#Sale_ClaimableReward_completed_generic`),
              _ = _?.community_item_class || _;
            switch (_) {
              case 11:
                _ = _(`#Sale_ClaimableReward_completed_sticker`);
                break;
              case 8:
                _ = _(`#Sale_ClaimableReward_completed_profilemodifier`);
                break;
              case 15:
                _ = _(`#Sale_ClaimableReward_completed_animatedavatar`);
            }
            (_.fnSetStrSuccess(`   `),
              _.fnSetElSuccess(
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`span`, {
                      children: _,
                    }),
                    (0, _.jsx)(_, {
                      appid: _.appid,
                      community_item_type: _.community_item_type,
                      rewardType: _,
                    }),
                  ],
                }),
              ));
          } else _.fnSetStrError(_(`#Sale_ClaimableReward_Busy`));
        })
        .catch(() => _.fnSetStrError(_(`#Sale_ClaimableReward_Busy`))));
  }, [_?.community_item_class, _, _, _]);
  let _ = _(`#Sale_ClaimableReward_generic`);
  switch (_?.community_item_class || _) {
    case 11:
      _ = _(`#Sale_ClaimableReward_sticker`);
      break;
    case 8:
      _ = _(`#Sale_ClaimableReward_profilemodifier`);
      break;
    case 15:
      _ = _(`#Sale_ClaimableReward_animatedavatar`);
  }
  return (0, _.jsx)(_, {
    state: _,
    strDialogTitle: _,
    closeModal: _,
  });
}
function _(_) {
  let { appid: _, community_item_type: _, rewardType: _ } = _;
  return !_ || !_
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            appid: _,
            community_item_type: _,
          }),
          _ == 8 &&
            (0, _.jsx)(_, {
              appid: _,
              community_item_type: _,
            }),
        ],
      });
}
function _(_) {
  let { appid: _, community_item_type: _ } = _,
    _ = _(_),
    { mutate: _, isSuccess: _ } = _();
  if (!_) return null;
  let _ = _.find((_) => _.item_type == _);
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _
            ? (0, _.jsx)(`div`, {
                children: _(
                  `#Sale_ClaimableReward_profilemodifier_apply_success`,
                ),
              })
            : (0, _.jsx)(_, {
                onClick: () => _(_),
                children: _(`#Sale_ClaimableReward_profilemodifier_apply`),
              }),
          (0, _.jsx)(_, {
            href: `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}`,
            children: _(`#Sale_ClaimableReward_profilemodifier_view`),
          }),
        ],
      })
    : (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(_, {
            href: `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/edit/goldenprofile`,
            children: _(`#Sale_ClaimableReward_profilemodifier_choose`),
          }),
          (0, _.jsx)(_, {
            href: `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}`,
            children: _(`#Sale_ClaimableReward_profilemodifier_view`),
          }),
        ],
      });
}
var _ = `saleaction/creategiveawayregistration`;
async function _(_) {
  let _ =
    _.STORE_BASE_URL +
    `saleaction/giveawayregistration?name=` +
    encodeURIComponent(_);
  return await _(
    `GetUserGiveawayRegistration`,
    _,
    _,
    await fetch(_, {
      credentials: `include`,
    }),
  );
}
async function _(_) {
  let _ = _.STORE_BASE_URL + _;
  return await _(
    `UpdateUserGiveawayRegistration`,
    _,
    _,
    await fetch(_, {
      method: `POST`,
      credentials: `include`,
      headers: {
        "content-type": `application/json`,
      },
      body: JSON.stringify({
        name: _,
      }),
    }),
  );
}
async function _(_, _, _, _) {
  if (!_._) throw Error(_ + ` answered ` + _.status);
  let _ = await _.json();
  if (_?.success == 1 && _.registration) return _.registration;
  throw Error(_ + ` on ` + _ + ` answered ` + _?.success);
}
var _ = {
  registered: !1,
};
function _(_, _) {
  return [`sale`, `giveawayregistration`, _, _];
}
function _(_, _) {
  return {
    queryKey: _(_, _),
    queryFn: () => _(_),
    enabled: !!_,
    retry: !1,
  };
}
function _(_) {
  let { data: _, isError: _ } = _(_(_, _.accountid));
  return _ ? _ : _;
}
function _() {
  let _ = _(),
    { mutateAsync: _ } = _({
      mutationFn: _,
      onSuccess: (_, _) => _.setQueryData(_(_, _.accountid), _),
    });
  return {
    fnCreateRegistration: (0, _.useCallback)(
      async (_) => {
        try {
          return await _(_);
        } catch (_) {
          return (
            console.error(`Registering for giveaway ` + _ + ` failed`, _), _
          );
        }
      },
      [_],
    ),
  };
}
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.impressions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            impressions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
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
      return `CProductImpressionsFromClient_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_impressions: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CProductImpressionsFromClient_Notification_Impression`;
    }
  },
  _;
(function (_) {
  function _(_, _) {
    return _.SendNotification(
      `ExperimentService.ReportProductImpressionsFromClient#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportProductImpressionsFromClient = _;
})((_ ||= {}));
async function _(_, _) {
  let _ = new URLSearchParams();
  (_.append(`page_action`, String(_)),
    _.append(`snr`, _.SNR),
    _.append(`uint_data`, String(_)),
    _.append(`str_data`, _()));
  try {
    await fetch(_.STORE_BASE_URL + `events/ajaxreportnewshubstats/`, {
      method: `POST`,
      body: _,
    });
  } catch {}
}
function _() {
  if (_.IN_CLIENT) return `steam`;
  let _ = navigator.userAgent;
  return /iPhone|iPad|iPod/i.test(_) ||
    (/Macintosh/i.test(_) && /Safari/i.test(_))
    ? `ios`
    : /Android/i.test(_)
      ? `android`
      : ``;
}
var _ = (function (_) {
    return (
      (_[(_.k_eDiscussions = 0)] = `k_eDiscussions`),
      (_[(_.k_eThumbsUp = 1)] = `k_eThumbsUp`),
      (_[(_.k_eClickThrough = 2)] = `k_eClickThrough`),
      (_[(_.k_eMuted = 3)] = `k_eMuted`),
      (_[(_.k_ePlayedVideo = 4)] = `k_ePlayedVideo`),
      (_[(_.k_eReminder_Opened = 5)] = `k_eReminder_Opened`),
      (_[(_.k_eReminder_MobilePush = 6)] = `k_eReminder_MobilePush`),
      (_[(_.k_eReminder_Email = 7)] = `k_eReminder_Email`),
      (_[(_.k_eReminder_CalendarApple = 8)] = `k_eReminder_CalendarApple`),
      (_[(_.k_eReminder_CalendarGoogle = 9)] = `k_eReminder_CalendarGoogle`),
      (_[(_.k_eReminder_CalendarOutlook = 10)] = `k_eReminder_CalendarOutlook`),
      (_[(_.k_eReminder_EmailUnverified = 11)] = `k_eReminder_EmailUnverified`),
      (_[(_.k_eReminder_MobilePushMissing = 12)] =
        `k_eReminder_MobilePushMissing`),
      _
    );
  })({}),
  _ = {
    nFutureViewedIndex: 0,
    nPastViewedIndex: 0,
    nLastRecordedFilter: 0,
  };
function _() {
  return [`EventCalendarTrackingProgress`];
}
function _(_) {
  return _.getQueryData(_()) ?? _;
}
function _(_, _) {
  (_.setQueryDefaults(_(), {
    staleTime: 1 / 0,
    gcTime: 1 / 0,
  }),
    _.setQueryData(_(), (_) => ({
      ...(_ ?? _),
      ..._,
    })));
}
function _(_, _, _) {
  return (clearTimeout(_), setTimeout(_, _));
}
function _(_) {
  _(19, _);
}
function _(_, _) {
  _(_, {
    schFilter: _(_(_).schFilter, 1e3, () => {
      _ != _(_).nLastRecordedFilter &&
        (_(_, {
          nLastRecordedFilter: _,
        }),
        _(16, _));
    }),
  });
}
function _(_, _, _, _) {
  let _ = 0,
    _ = 0,
    _,
    _;
  for (let _ of _) {
    let _ = _.start_time > _;
    if ((_.unique_id == _ && ((_ = _), (_ = _)), _)) _++;
    else if (_ !== void 0) break;
    _++;
  }
  if (_ === void 0 || !_) return;
  let _ = _(_);
  if (_ < _) {
    let _ = _ - _;
    if (_.nFutureViewedIndex >= _) return;
    _(_, {
      nFutureViewedIndex: _,
      schFuture: _(_.schFuture, 500, () => {
        _(
          18,
          Math.min(_, 4095) |
            (Math.min(_, 255) << 12) |
            (Math.min(_(_), 2047) << 20),
        );
      }),
    });
    return;
  }
  let _ = _ - _;
  if (_.nPastViewedIndex >= _) return;
  let _ = Math.floor((_ - _.start_time) / 86400);
  _(_, {
    nPastViewedIndex: _,
    schPast: _(_.schPast, 500, () => {
      _(
        17,
        Math.min(_, 4095) |
          (Math.min(_, 255) << 12) |
          (Math.min(_(_), 2047) << 20),
      );
    }),
  });
}
function _(_) {
  return Math.max(0, Math.floor(Date.now() / 1e3 - _));
}
function _() {
  let _ = _(),
    { mutate: _ } = _({
      mutationFn: async (_) => {
        switch (_.type) {
          case `interaction`:
            _(_.interaction);
            break;
          case `filter-change`:
            _(_, _.nFilterBitMask);
            break;
          case `event-viewed`:
            _(_, _.gidEvent, _.rgItemsInView, _.rtCalendarInit);
        }
      },
    });
  return _.useMemo(
    () => ({
      RecordInteraction: (_) =>
        _({
          type: `interaction`,
          interaction: _,
        }),
      RecordFilterChange: (_) =>
        _({
          type: `filter-change`,
          nFilterBitMask: _,
        }),
      RecordEventViewed: (_, _, _) =>
        _({
          type: `event-viewed`,
          gidEvent: _,
          rgItemsInView: _,
          rtCalendarInit: _,
        }),
    }),
    [_],
  );
}
function _(_, _) {
  return [`GetClanAnnouncementVoteForUser`, _, _];
}
function _(_) {
  return _ == `up` ? 1 : _ == `down` ? -1 : 0;
}
function _(_, _, _, _) {
  let _ = _(),
    _ = _(_, _.accountid),
    { data: _ } = _({
      queryKey: _,
      queryFn: async () => await _.GetMyEventVote(_),
      initialData: _?.initialVote,
      enabled: !!_ && !!_.accountid && (_?.bAsk ?? !0),
      staleTime: 1 / 0,
      gcTime: 1 / 0,
    }),
    { mutate: _ } = _({
      mutationFn: async (_) => {
        let _ = await _.RateEvent(_, _, _);
        if (_ != 1) throw Error(`RateClanAnnouncement failed with ${_}`);
      },
      onMutate: (_) => _.setQueryData(_, _),
      onError: () =>
        _.invalidateQueries({
          queryKey: _,
        }),
    });
  return {
    myVote: _,
    Vote: (_) => {
      _ && _ != _ && _(_);
    },
  };
}
var _ = `notificationaction/usercontactmethods`;
async function _() {
  let _ = _.STORE_BASE_URL + _,
    _ = await fetch(_, {
      credentials: `include`,
    });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  return await _.json();
}
var _ = {
  bHasValidatedEmail: !1,
  bHasPushNotification: !1,
};
function _() {
  let { data: _ } = _(_());
  return _ ?? _;
}
function _(_) {
  return [`useUserContactMethods`, _];
}
function _() {
  return {
    queryKey: _(_.accountid),
    queryFn: _,
    enabled: !!_.logged_in,
    initialData: () => {},
  };
}
var _ = `_84h-8PvrSz4-`,
  _ = `nwrFIQxauoU-`,
  _ = `_-7rkUl5BPSo-`,
  _ = `_2PSyOI9sfXE-`,
  _ = `NrtYj8zZ4Hs-`,
  _ = `_9lxMEopvkUI-`,
  _ = `e54xoMHLocs-`,
  _ = `AnkclxloX-4-`,
  _ = `d25P6JDnJr4-`,
  _ = `_2tyNCYxU-qA-`,
  _ = `_7W-71Sl660E-`,
  _ = `BnmcJicymJA-`,
  _ = `DlyXaqG-QRg-`;
function _(_) {
  return (
    (_.bHasVerifiedEmail && _.bFollowsByEmail) ||
    (_.bHasPushNotification && _.bFollowsByPush)
  );
}
function _(_) {
  let {
      eventModel: _,
      rtNow: _,
      notifyState: _,
      bOnlyShowIcon: _,
      renderPanel: _,
      onRequestSignIn: _,
      bSignedIn: _,
      onTrack: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _.useCallback(() => {
      (_.current?.Hide(), _(!1));
    }, []),
    _ = () => {
      let _ = {
        bOverlapHorizontal: !0,
        bOverlapVertical: !0,
        bDisablePopTop: !0,
        bMatchWidth: !0,
        strClassName: _(_, _, _),
      };
      ((_.current = _(_(_), _.current, _)),
        _.current.SetOnHideCallback(_),
        _(!0),
        _?.(`opened`));
    },
    _ = (_) => {
      _ ? (_ ? _() : _(), _.stopPropagation(), _.preventDefault()) : _?.();
    },
    _ = _ && !_,
    _ = _(_);
  return (_.startTime !== void 0 && _.startTime < _) || _.BIsUnlistedEvent()
    ? null
    : (0, _.jsxs)(`div`, {
        className: _({
          [_]: !0,
          [_]: !0,
          [_]: _,
          [_]: !_,
          ReminderSet: _,
          RemindMeWidget: !0,
        }),
        role: `button`,
        tabIndex: 0,
        "aria-expanded": _,
        onClick: _,
        onKeyDown: (_) => {
          (_.key === `Enter` || _.key === ` `) && _(_);
        },
        ref: _,
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `upxIU9iFbl0-`,
              children: (0, _.jsx)(_, {}),
            }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `QXP-JIcCdoA-`,
              children: (0, _.jsx)(_, {}),
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#EventDisplay_Reminder_SetReminder`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
        ],
      });
}
function _(_) {
  let {
      eventModel: _,
      lang: _,
      rtNow: _,
      notifyState: _,
      bShowStartTime: _,
      bExpandLeft: _,
      bOnlyShowIcon: _,
      strCalendarEventTitle: _,
      onChangeNotify: _,
      onTrack: _,
      fnHidePanel: _,
    } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(void 0),
    [_, _, _] = _(),
    _ = async (_, _) => {
      if (_.GID && _.GID != `18446744073709551615`) {
        _(!0);
        try {
          (await _(_, _),
            _ && _?.(_ == `email` ? `notify-email` : `notify-push`));
        } catch (_) {
          (_(_ instanceof Error ? _.message : String(_)), _());
        }
        _(!1);
      }
    },
    _ = _.jsondata.bSaleEnabled ? _.k_eStoreSalePage : _.k_eStoreView,
    _ = _(_, _, `forceAbsolute`),
    _ = () => {
      let _ = _.GetSubTitleWithLanguageFallback(_);
      _ = _ ? `${_}\n\n\n` : ``;
      let _ = _.GetSummaryWithFallback(_);
      return `${_}${_}\n\n${_}`;
    },
    _ = () => {
      let _ = encodeURIComponent(_),
        _ = encodeURIComponent(_()),
        _ = _.GetStartTimeAndDateUnixSeconds(),
        _ = _(_),
        _ = _(_.GetEndTimeAndDateUnixSeconds() || _ + _.PerHour),
        _ =
          (_.IN_CLIENT ? `steam://openurl_external/` : ``) +
          `https://calendar.google.com/calendar/r/eventedit?text=${_}&details=${_}&dates=${_}/${_}`;
      return _(_);
    },
    _ = (_) => {
      let _ = _.appid
          ? `app/` + _.appid
          : `group/` + _.clanSteamID.GetAccountID(),
        _ = `l=` + _(_);
      return `${_.STORE_BASE_URL}${_()}/download/${_}/${_}/${_.GID}?${_}`;
    },
    {
      bHasVerifiedEmail: _,
      bHasPushNotification: _,
      bFollowsByEmail: _,
      bFollowsByPush: _,
    } = _,
    _ = _ && _.GetStartTimeAndDateUnixSeconds();
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _ ? _ : _, `RemindMeWidget`),
        role: `button`,
        tabIndex: 0,
        onClick: _,
        onKeyDown: (_) => {
          (_.key === `Enter` || _.key === ` `) && (_.preventDefault(), _());
        },
        children: [
          _(_) &&
            (0, _.jsx)(`div`, {
              className: `upxIU9iFbl0-`,
              children: (0, _.jsx)(_, {}),
            }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `QXP-JIcCdoA-`,
              children: (0, _.jsx)(_, {}),
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#EventDisplay_Reminder_SetReminder`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _(_, _, _ && `cDHs-zHCE3o-`),
        children: [
          _ &&
            (0, _.jsx)(_, {
              className: `QRZy7bm8gBw-`,
              size: `xlarge`,
              position: `center`,
            }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `_4r8W7hvBaLA-`,
              children: _(
                `#EventDisplay_EventUpcoming_WithDateAndTime`,
                _(_, _(new Date(_ * 1e3), new Date(_ * 1e3))),
                _(_, !0),
              ),
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#EventDisplay_Reminder_GetNotification_Via`),
          }),
          (0, _.jsxs)(`div`, {
            className: _(_, !_ && `cAFFlaoNDE0-`),
            children: [
              (0, _.jsx)(_, {
                className: _,
                bTopmost: !0,
                toolTipContent: _(
                  _
                    ? `#EventReminder_NotifyByEmail_ttip`
                    : `#EventReminder_NotifyByEmail_Missing`,
                ),
                children: (0, _.jsx)(_, {
                  label: _(`#EventDisplay_Reminder_ViaEmail`),
                  disabled: !_,
                  checked: _,
                  onChange: (_) => _(_, `email`),
                }),
              }),
              !_ &&
                (0, _.jsx)(`div`, {
                  className: `z6gX8J4oNLA-`,
                  children: (0, _.jsx)(`a`, {
                    href: _.STORE_BASE_URL + `account/`,
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    onClick: () => _?.(`email-unverified`),
                    rel: `noreferrer`,
                    children: _(`#EventReminder_NotifyByEmail_Missing_Add`),
                  }),
                }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _(_, !_ && `cAFFlaoNDE0-`),
            children: [
              (0, _.jsx)(_, {
                className: _,
                bTopmost: !0,
                toolTipContent: _(
                  _
                    ? `#EventReminder_NotifyByMobile_ttip`
                    : `#EventReminder_NotifyByMobile_Missing`,
                ),
                children: (0, _.jsx)(_, {
                  label: _(`#EventDisplay_Reminder_ViaMobileApp`),
                  disabled: !_,
                  checked: _,
                  onChange: (_) => _(_, `push`),
                }),
              }),
              !_ &&
                (0, _.jsx)(`div`, {
                  className: `z6gX8J4oNLA-`,
                  children: (0, _.jsx)(`a`, {
                    href: _.STORE_BASE_URL + `mobile/?show=steamapp`,
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    onClick: () => _?.(`push-missing`),
                    rel: `noreferrer`,
                    children: _(`#EventReminder_NotifyByMobile_Install`),
                  }),
                }),
            ],
          }),
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#EventDisplay_Reminder_AddToCalendar`),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`a`, {
                    className: _,
                    href: _(`ics`),
                    onClick: () => _?.(`calendar-apple`),
                    children: _(`#EventDisplay_Reminder_AppleCalendar_Short`),
                  }),
                  (0, _.jsx)(`a`, {
                    className: _,
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    href: _(),
                    onClick: () => _?.(`calendar-google`),
                    rel: `noreferrer`,
                    children: _(`#EventDisplay_Reminder_GoogleCalendar_Short`),
                  }),
                  (0, _.jsx)(`a`, {
                    className: _,
                    href: _(`outlook`),
                    onClick: () => _?.(`calendar-outlook`),
                    children: _(`#EventDisplay_Reminder_OutlookCalendar_Short`),
                  }),
                ],
              }),
            ],
          }),
          !1,
        ],
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          strTitle: _(`#EventDisplay_Reminder_FollowEvent_Error`),
          strDescription: _(`#EventDisplay_Reminder_FollowEvent_ErrorDesc`),
          closeModal: _,
          children: _,
        }),
      }),
    ],
  });
}
function _(_) {
  return new Date(_ * 1e3)
    .toISOString()
    .replace(/[-:]/g, ``)
    .replace(/\.\d{3}Z$/, `Z`);
}
var _ = (function (_) {
  return (
    (_[(_.k_ENotifyFlagNone = 0)] = `k_ENotifyFlagNone`),
    (_[(_.k_ENotifyFlagByEmail = 1)] = `k_ENotifyFlagByEmail`),
    (_[(_.k_ENotifyFlagByPush = 2)] = `k_ENotifyFlagByPush`),
    _
  );
})({});
function _(_, _) {
  let _ = _(),
    _ = _(),
    { data: _ } = _(_(_, _, _)),
    _ = _(),
    _ = _(_, _);
  return {
    bHasVerifiedEmail: _.bHasValidatedEmail,
    bHasPushNotification: _.bHasPushNotification,
    bFollowsByEmail: (_ & _.k_ENotifyFlagByEmail) != 0,
    bFollowsByPush: (_ & _.k_ENotifyFlagByPush) != 0,
  };
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    _ = _(_, _, _);
  return async (_, _) => {
    if (!_) return;
    let _ = _.getQueryData(_.queryKey),
      _ = _ == `email` ? _.k_ENotifyFlagByEmail : _.k_ENotifyFlagByPush,
      _ = _(_, _);
    (await _(_, _, _ ? _ | _ : _ & ~_),
      await _.invalidateQueries({
        queryKey: _.queryKey,
      }));
  };
}
function _(_, _) {
  let _ = _ ? (_?.event_followed?.indexOf(_) ?? -1) : -1;
  return _ == -1 ? 0 : (_?.event_followed_flags?.[_] ?? 0);
}
async function _(_, _, _) {
  let _ = _ == 0,
    _ = `${`${_.STORE_BASE_URL}events/`}${_ ? `unfolloworunignoreevent` : `followorignoreevent`}`,
    _ = new URLSearchParams();
  (_.append(`sessionid`, _()),
    _.append(`ignore`, `false`),
    _.append(`gid`, _),
    _.append(`notification_flag`, `` + _),
    _.append(`clan_accountid`, `` + _));
  let _ = await fetch(_, {
    method: `POST`,
    body: _,
    credentials: `include`,
  });
  if (!_._) throw Error(`${_} answered ${_.status}`);
}
function _(_) {
  let { eventModel: _, bOnlyShowIcon: _, onTrack: _ } = _,
    _ = _(),
    _ = _(_.clanSteamID.GetAccountID(), _.GID),
    { elDialogElement: _, fnShowLogonDialog: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        eventModel: _,
        rtNow: _,
        notifyState: _,
        bOnlyShowIcon: _,
        bSignedIn: !!_.logged_in || _.IN_CLIENT,
        onRequestSignIn: _,
        onTrack: _,
        renderPanel: (_) =>
          (0, _.jsx)(_, {
            ..._,
            rtNow: _,
            fnHidePanel: _,
          }),
      }),
      _,
    ],
  });
}
function _(_) {
  let {
      eventModel: _,
      lang: _,
      strHubName: _,
      bShowStartTime: _,
      bExpandLeft: _,
      bOnlyShowIcon: _,
      onTrack: _,
      rtNow: _,
      fnHidePanel: _,
    } = _,
    _ = _.clanSteamID.GetAccountID(),
    _ = _(_, _.GID),
    _ = _(_, _.GID),
    _ = _.GetNameWithFallback(_) ?? ``,
    _ = _ ? `${_}: ${_}` : _;
  return (0, _.jsx)(_, {
    eventModel: _,
    lang: _,
    rtNow: _,
    notifyState: _,
    strCalendarEventTitle: _,
    bShowStartTime: _,
    bExpandLeft: _,
    bOnlyShowIcon: _,
    onChangeNotify: _,
    onTrack: _,
    fnHidePanel: _,
  });
}
function _(_) {
  let {
      eventModel: _,
      lang: _,
      bShowStartTime: _,
      bExpandLeft: _,
      bOnlyShowIcon: _,
    } = _,
    _ = _(),
    _ = _(_);
  return (0, _.jsx)(_, {
    eventModel: _,
    lang: _,
    strHubName: _,
    bShowStartTime: _,
    bExpandLeft: _,
    bOnlyShowIcon: _,
    onTrack: (_) => _.RecordInteraction(_[_]),
  });
}
function _(_) {
  let _ = _.appid || void 0,
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_ ? void 0 : _.clanSteamID.GetAccountID());
  return (_ ? _?.name : _?.group_name) || void 0;
}
var _ = {
  opened: _.k_eReminder_Opened,
  "notify-email": _.k_eReminder_Email,
  "notify-push": _.k_eReminder_MobilePush,
  "email-unverified": _.k_eReminder_EmailUnverified,
  "push-missing": _.k_eReminder_MobilePushMissing,
  "calendar-apple": _.k_eReminder_CalendarApple,
  "calendar-google": _.k_eReminder_CalendarGoogle,
  "calendar-outlook": _.k_eReminder_CalendarOutlook,
};
function _(_) {
  let { eventModel: _, emoticonStore: _ } = _,
    [_, _, _] = _(),
    _ = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        focusable: !0,
        className: _(_, _, _),
        onActivate: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _(`#Button_Share`),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        strEventLink: _ ?? ``,
        bActive: _,
        closeModal: _,
        emoticonStore: _,
      }),
    ],
  });
}
var _ = `H3cT2TnVIUI-`;
function _(_) {
  let { crumbs: _, className: _, bHideLastArrow: _ } = _;
  return !_ || _.length == 0
    ? null
    : (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            className: `blockbg`,
            "flow-children": `row`,
            children: _.map((_, _) => {
              let _ = [];
              return (
                _.url.startsWith(`http`)
                  ? _.push(
                      (0, _.jsx)(
                        _,
                        {
                          href: _.url,
                          children: _.name,
                        },
                        `anchor_` + _.name,
                      ),
                    )
                  : _.push(
                      (0, _.jsx)(
                        _,
                        {
                          _: _.url,
                          children: _.name,
                        },
                        `link_` + _.name,
                      ),
                    ),
                (!_ || _ < _.length - 1) &&
                  _.push(
                    (0, _.jsx)(
                      `span`,
                      {
                        children: `\xA0> `,
                      },
                      _.name + `span`,
                    ),
                  ),
                _
              );
            }),
          }),
          (0, _.jsx)(`div`, {
            style: {
              clear: `left`,
            },
          }),
        ],
      });
}
var _ = _({
    DateAndTime: () => _,
    EndDate: () => _,
    EventDetailTimeInfo: () => _,
    MultiDateAndTime: () => _,
    RightSideTitles: () => _,
    StartDate: () => _,
    VerticalLocalDateAndTime: () => _,
    default: () => _,
    narrowWidth: () => _,
  }),
  _ = `500px`,
  _ = `_8YPhejKH-Hs-`,
  _ = `lYLFKnqyOBc-`,
  _ = `MHA1If6wKEM-`,
  _ = `XE6oUbs9Bv4-`,
  _ = `kV79BCFVjKw-`,
  _ = `Ek8FvAkpeBM-`,
  _ = `NgzvulvywWI-`,
  _ = {
    narrowWidth: _,
    EventDetailTimeInfo: _,
    StartDate: _,
    EndDate: _,
    MultiDateAndTime: _,
    RightSideTitles: _,
    DateAndTime: _,
    VerticalLocalDateAndTime: _,
  };
function _(_) {
  let {
      event: _,
      className: _,
      nOverrideStartTime: _,
      nOverrideEndTime: _,
    } = _,
    _ = _.stylesmodule
      ? {
          ..._,
          ..._.stylesmodule,
        }
      : _,
    [_, _, _] = _(() => [
      _ ||
        (_.bOldAnnouncement ? _.postTime : _.GetStartTimeAndDateUnixSeconds()),
      _ || _.GetEndTimeAndDateUnixSeconds(),
      _.type,
    ]),
    _ = !_(_);
  return (0, _.jsx)(`div`, {
    className: _(_.EventDetailTimeInfo, _),
    children: (0, _.jsx)(_, {
      startDateAndTime: _,
      endDateAndTime: _,
      bHideEndTime: _,
      stylesmodule: _,
    }),
  });
}
function _(_) {
  let { _: _, event: _, className: _, dateRangeLayout: _ = `horizontal` } = _,
    [_, _, _] = _(() => [
      _.GetStartTimeAndDateUnixSeconds(),
      _.GetEndTimeAndDateUnixSeconds(),
      _.type,
    ]),
    _ = {};
  return (
    _ == `vertical` && (_.ShortDateRange = _),
    (0, _.jsx)(`div`, {
      _: _,
      className: _(_, _),
      children: (0, _.jsx)(_, {
        startDateAndTime: _,
        endDateAndTime: _,
        bHideEndTime: !_(_),
        stylesmodule: _,
      }),
    })
  );
}
function _(_) {
  let {
    nVoteCount: _,
    nCommentCount: _,
    myVote: _,
    onVote: _,
    strDiscussionURL: _,
    onDiscussionUnavailable: _,
    bShowDiscussion: _,
    repost: _,
    share: _,
  } = _;
  return (0, _.jsxs)(_, {
    className: _,
    "flow-children": `row`,
    focusable: !1,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    className: _,
                  }),
                  _(_),
                ],
              }),
              (0, _.jsxs)(_, {
                focusable: !0,
                className: _(_, _, _, _ == `up` ? _ : ``),
                onActivate: () => _(`up`),
                children: [
                  (0, _.jsx)(_, {
                    className: _ == `up` ? _ : _,
                  }),
                  (0, _.jsx)(`span`, {
                    className: _,
                    children: _(`#Button_RateUp`),
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                focusable: !0,
                className: _(_, _, _, _ == `down` ? _ : ``),
                onActivate: () => _(`down`),
                "aria-label": _(`#Button_RateDown`),
                children: (0, _.jsx)(_, {
                  className: _ == `down` ? _ : _,
                }),
              }),
            ],
          }),
          _ &&
            (0, _.jsx)(_, {
              commentCount: _,
              discussionURL: _,
              gotoDiscussion: _,
            }),
          _,
        ],
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `_4L6srhmqBFM-`,
          children: _,
        }),
    ],
  });
}
function _(_) {
  let { commentCount: _, discussionURL: _, gotoDiscussion: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [(0, _.jsx)(_, {}), _(_)],
      }),
      _ &&
        (0, _.jsx)(_, {
          href: _(_),
          children: (0, _.jsxs)(`div`, {
            className: _(`m-U1DKR49wc-`, `RdFiHSeRsZo-`, `Gg6rQJYVNcE-`),
            children: [
              (0, _.jsx)(_, {}),
              (0, _.jsx)(`span`, {
                className: `_5bxzSclFT8M-`,
                children: _(`#Button_Discuss`),
              }),
            ],
          }),
        }),
      !_ &&
        (0, _.jsxs)(_, {
          focusable: !0,
          onActivate: _,
          className: _(`m-U1DKR49wc-`, `RdFiHSeRsZo-`, `Gg6rQJYVNcE-`),
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsx)(`span`, {
              className: `_5bxzSclFT8M-`,
              children: _(`#Button_Discuss`),
            }),
          ],
        }),
    ],
  });
}
var _ = _.createContext(null);
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _.nVisibilityID ?? null,
    children: _.children,
  });
}
function _() {
  return _.useContext(_);
}
var _ = `qj-HIZkoVOQ-`;
function _(_) {
  let { event: _ } = _,
    _ = _(() => _.jsondata?.referenced_appids || []),
    _ = _(),
    _ = _({
      queries: _.map((_) =>
        _(_, {
          appid: _,
        }),
      ),
      combine: (_) => ({
        bLoaded: _.every((_) => !_.isPending),
        data: _.map((_) => _.data),
      }),
    });
  if (!_.length || !_.bLoaded) return null;
  let _ = _.data
      .flatMap((_) =>
        _?.store_url_path && _?.name ? [`[url="${_(_)}"]${_.name}[/url]`] : [],
      )
      .join(_(`#EventDisplay_ReferencedApps_Joiner`)),
    _ = _(`#EventDisplay_ReferencedApps`, _.length, _);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      text: _,
      event: _,
    }),
  });
}
function _(_) {
  if (_ === `GameAwardDrop2022`) {
    let _ = _(_),
      _ = _();
    return _
      ? _.registered
        ? {
            bInitialState: !1,
            bSuccessState: _.eligible,
            bFailedState: !_.eligible,
            fnAction: _.eligible
              ? void 0
              : async () => {
                  await _.fnCreateRegistration(_);
                },
          }
        : {
            bInitialState: !0,
            fnAction: async () => {
              await _.fnCreateRegistration(_);
            },
          }
      : {
          bInitialState: !0,
        };
  }
  return {
    bInitialState: !0,
  };
}
function _(_) {
  let _ = _(_.args, `action`),
    _ = _(_.args, `initialToken`),
    _ = _(_.args, `successToken`),
    _ = _(_.args, `failToken`),
    _ = _(_),
    { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    [_, _, _] = _();
  return !_ || !_ || !_ || !_
    ? _.context.showErrorInfo
      ? (0, _.jsx)(`div`, {
          children: `Failed to provide all tokens. Dialog will not appear`,
        })
      : null
    : !_.logged_in && _ != `test` && _ != `nologinrequired`
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              className: `CSSActionDialogButton`,
              onClick: _,
              children: _(`#Login_SignIn`),
            }),
            _,
          ],
        })
      : (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)(_, {
              className: `CSSActionDialogButton`,
              onClick: _,
              children: [
                !!_.bInitialState && _(_),
                !!_.bSuccessState && _(_),
                !!_.bFailedState && _(_),
              ],
            }),
            (0, _.jsx)(_, {
              active: _,
              children: (0, _.jsx)(_, {
                strAction: _,
                strInitialToken: _,
                strSuccessToken: _,
                strFailToken: _,
                closeModal: _,
                children: _.children,
              }),
            }),
          ],
        });
}
function _(_) {
  let {
      strAction: _,
      children: _,
      closeModal: _,
      strInitialToken: _,
      strSuccessToken: _,
      strFailToken: _,
    } = _,
    _ = _(_),
    [_, _] = _.useState(!!_.fnAction),
    _ = _.useRef(!1);
  _.useEffect(() => {
    _.fnAction &&
      !_.current &&
      ((_.current = !0), _(!0), _.fnAction().finally(() => _(!1)));
  }, [_]);
  let _ = _.useId();
  return (0, _.jsxs)(_, {
    bDisableBackgroundDismiss: !0,
    closeModal: _,
    onCancel: _,
    className: `CSSActionDialogDialog`,
    "aria-labelledby": _,
    children: [
      (0, _.jsxs)(_, {
        _: _,
        children: [
          !!_.bInitialState && _(_),
          !!_.bSuccessState && _(_),
          !!_.bFailedState && _(_),
        ],
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          children: _
            ? (0, _.jsx)(_, {
                size: `medium`,
                position: `center`,
                string: _(`#Loading`),
              })
            : _,
        }),
      }),
    ],
  });
}
function _(_) {
  let _ = !!_.context.showErrorInfo,
    { elDialogElement: _, fnShowLogonDialog: _ } = _();
  if (!_.logged_in)
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          onClick: _,
          className: `CSSClaimItemLoginButton`,
          children: _(`#Sale_ClaimableReward_Login`),
        }),
        _,
      ],
    });
  let _ = _(_.args, `type`),
    _;
  if (_)
    switch (_) {
      case `profilemodifier`:
        _ = 8;
        break;
      case `sticker`:
        _ = 11;
    }
  return (0, _.jsx)(_, {
    bPreviewMode: _,
    rewardType: _,
  });
}
function _(_) {
  let _ = _(_.args, `name`),
    _ = (_(_.args, `visible`) || `false`).toLowerCase() === `true`,
    _ = _(_);
  return _
    ? !_ || !_.registered
      ? null
      : (_.eligible && _) || (!_.eligible && !_)
        ? (0, _.jsx)(_.Fragment, {
            children: _.children,
          })
        : null
    : _.context.showErrorInfo
      ? (0, _.jsx)(`div`, {
          children: `Failed to provide giveaway name`,
        })
      : null;
}
function _(_, _) {
  let _ = _.useCallback(
    (_) => {
      (_.preventDefault(), (_.returnValue = _));
    },
    [_],
  );
  (_(window, `beforeunload`, _ ? _ : void 0),
    _.useEffect(() => {
      if (!_ || !window.navigation) return;
      let _ = (_) => {
        (_.navigationType != `push` && _.navigationType != `traverse`) ||
          _.hashChange ||
          _.downloadRequest !== null ||
          !_.cancelable ||
          window.confirm(_) ||
          _.preventDefault();
      };
      return (
        window.navigation.addEventListener(`navigate`, _),
        () => window.navigation.removeEventListener(`navigate`, _)
      );
    }, [_, _]));
}
var _ = `EihLdMMtI5s-`;
function _(_) {
  let { bExpanded: _, setExpanded: _ } = _;
  return (0, _.jsx)(_, {
    className: (0, _.default)(_, _ && `fEdGHUWM898-`),
    onClick: () => _(!_),
    children: (0, _.jsx)(_, {
      direction: `down`,
    }),
  });
}
var _ = `meetsteam/updateregistration`,
  _ = `meetsteam/attendance_qrcode`;
async function _(_, _) {
  let _ = new URL(_.STORE_BASE_URL + _);
  for (let [_, _] of Object.entries(_)) _.searchParams.set(_, _);
  let _ = await fetch(_, {
    credentials: `include`,
  });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  return await _.json();
}
async function _(_) {
  return (
    (
      await _(`meetsteam/availability`, {
        gid: _,
      })
    ).availability ?? []
  );
}
async function _(_) {
  return (
    (
      await _(`meetsteam/registrations`, {
        gid: _,
      })
    ).registrations ?? []
  );
}
async function _(_) {
  return (
    (
      await _(`meetsteam/registrationdetails`, {
        gid: _,
      })
    ).strJSONData ?? ``
  );
}
async function _() {
  return (
    (await _(`meetsteam/registrantinfo`, {})).info ?? {
      realname: ``,
      email: ``,
      partners: [],
    }
  );
}
async function _(_, _) {
  return await _(_, {
    gid: _,
    accountid: String(_),
  });
}
async function _(_) {
  let _ = _.STORE_BASE_URL + _,
    _ = new URLSearchParams({
      gid: _.gid,
      group_id: String(_.group_id),
      session_id: String(_.session_id),
      guest_count: String(_.guest_count),
      jsondata: _.jsondata,
      skip_email: _.skip_email ? `1` : `0`,
    }),
    _ = await fetch(_, {
      method: `POST`,
      credentials: `include`,
      body: _,
    });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  return (await _.json()).success;
}
function _(_, _) {
  return {
    queryKey: _(_, _),
    queryFn: () => _(_),
    enabled: _() == _,
    staleTime: _.PerMinute * 10,
  };
}
function _(_, _) {
  return _(_(_, _));
}
var _ = (_, _) => [`useMeetSteamGetAvailability`, _, _];
function _(_, _, _) {
  return {
    queryKey: _(_, _, _),
    queryFn: async () => {
      let _ = await _(_);
      return _ ? JSON.parse(_) : {};
    },
    enabled: _() == _ && !!_,
  };
}
function _(_, _, _) {
  return _(_(_, _, _));
}
var _ = (_, _, _) => [`useMeetSteamGetRegistrationDetails`, _, _, _];
function _(_) {
  return {
    queryKey: [`MeetSteamRegistrantInfo`, _],
    queryFn: () => _(),
    enabled: !!_,
    staleTime: _.PerMinute * 10,
  };
}
function _(_) {
  return _(_(_));
}
function _(_, _) {
  return {
    queryKey: [`useMeetSteamQRCode`, _, _],
    queryFn: () => _(_, _),
    enabled: !!_ && !0,
    staleTime: _.PerMinute * 10,
  };
}
function _(_, _) {
  return _(_(_, _)).data?.qrcode;
}
function _(_, _ = Intl.DateTimeFormat().resolvedOptions().timeZone) {
  return _.location_type === `in_person`
    ? (_.in_person_time_zone ?? `America/Los_Angeles`)
    : _;
}
function _(_) {
  let _ = _();
  return _(() => ({
    rtime_start: _.rtime_start,
    rtime_end: _.rtime_end,
    sDisplayTimeZone: _(_, _),
  }));
}
function _(_, _) {
  let _ = _.default.unix(_),
    _ = _.default.unix(_)._(_).utcOffset() - _.utcOffset();
  return new Date((_ + _ * 60) * 1e3);
}
function _(_, _) {
  let _ = _(_, _),
    _ = new Date();
  return _.getFullYear() == _.getFullYear() ? _(_) : _(_);
}
function _(_, _, _, _) {
  let _ = _.default.unix(_),
    _ = _.default.unix(_)._(_).utcOffset() - _.utcOffset(),
    _ = _.default.unix(_),
    _ = _.default.unix(_)._(_),
    _ = _.utcOffset() - _.utcOffset();
  return _(_ + _ * 60, _ + _ * 60, !0) + (_ ? `` : ` ` + _.format(`z`));
}
var _ = new Map(),
  _ = ``,
  _ = 0;
function _(_, _) {
  return [`MeetSteamRegistrations`, _, _];
}
function _(_, _) {
  return [`MeetSteamSelections`, _, _];
}
function _(_) {
  return {
    queryKey: _(_?.gidClanEvent ?? _, _?.userAccountID ?? _),
    queryFn: async () => {
      if (!_) return _;
      let _ = await _(_.gidClanEvent),
        _ = new Map();
      return (
        _.forEach((_) => {
          let _ = {
            ..._,
            regmodel: _.jsondata ? JSON.parse(_.jsondata) : void 0,
          };
          _.group_id !== void 0 &&
            _.session_id !== void 0 &&
            _.set(_.group_id, _);
        }),
        _
      );
    },
    enabled: !!_ && _() == _?.clanAccountID && !!_?.userAccountID,
  };
}
function _(_, _) {
  return {
    queryKey: _(_, _),
    queryFn: () => null,
    initialData: null,
    staleTime: 1 / 0,
    gcTime: 1 / 0,
  };
}
var _ = _.createContext(void 0);
function _(_) {
  let { clanAccountID: _, gidClanEvent: _, userAccountID: _, children: _ } = _,
    _ = _.useMemo(
      () => ({
        clanAccountID: _,
        gidClanEvent: _,
        userAccountID: _,
      }),
      [_, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  let _ = _.useContext(_),
    _ = _(_(_)),
    _ = _(_(_?.gidClanEvent ?? _, _?.userAccountID ?? _)),
    _ = _.data ?? _;
  return _.useMemo(
    () => ({
      registrations: _,
      selections: _.data ?? _(_),
      bLoading: _.isFetching,
    }),
    [_, _.data, _.isFetching],
  );
}
function _(_) {
  let _ = new Map();
  return (
    _.forEach((_, _) => {
      _.session_id !== void 0 && _.set(_, _.session_id);
    }),
    _
  );
}
function _(_, _) {
  return _ === void 0 ? void 0 : _.selections.get(_);
}
function _(_) {
  return Array.from(_.selections.keys());
}
function _(_, _, _) {
  if (_ === void 0 || _ === void 0) return 0;
  let _ = _.registrations.get(_)?.session_id == _,
    _ = _.selections.get(_) == _;
  return _ && _ ? 1 : !_ && _ ? 2 : _ && !_ ? 3 : 0;
}
function _(_, _, _) {
  if (_ === void 0 || _ === void 0) return !1;
  let _ = !!_.registrations.get(_),
    _ = _.selections.get(_) == _,
    _ = _.registrations.get(_)?.session_id == _.selections.get(_);
  return _ && !_ && _;
}
function _(_, _) {
  return _ === void 0 ? void 0 : _.registrations.get(_)?.session_id;
}
function _(_) {
  return _.selections.size == 0 && _.registrations.size == 0
    ? !1
    : _.selections.size != _.registrations.size ||
        !Array.from(_.selections.entries()).every(
          (_) => _.registrations.get(_[0])?.session_id == _[1],
        );
}
function _(_) {
  return Array.from(_.selections.entries()).some((_) => {
    let _ = _.registrations.get(_[0]);
    return !_ || _.session_id != _[1];
  });
}
function _(_) {
  return _.registrations.size > 0;
}
function _() {
  return _().bLoading;
}
function _() {
  return _(_());
}
function _() {
  return _(_());
}
function _(_, _) {
  return _(
    _(),
    _.filter((_) => !!_.ask_registration_question),
    _,
  );
}
function _(_, _, _) {
  return _.filter((_) => _.sessions.some((_) => _(_, _.group_id, _._) == _))
    .map((_) => _.group_id)
    .filter((_) => _ !== void 0);
}
function _(_, _, _, _) {
  _ !== void 0 &&
    _.setQueryData(_(_.gidClanEvent, _.userAccountID), (_) => {
      let _ = _.getQueryData(_(_.gidClanEvent, _.userAccountID)) ?? _,
        _ = new Map(_ ?? _(_));
      return (_ !== void 0 && _ > 0 ? _.set(_, _) : _.delete(_), _);
    });
}
function _() {
  let _ = _.useContext(_),
    _ = _(),
    _ = _();
  return _.useCallback(
    (_, _) => {
      if (!_) return;
      let _ = _(_, _) == _;
      _(_, _, _, _ ? void 0 : _);
    },
    [_, _, _],
  );
}
function _() {
  let _ = _.useContext(_),
    _ = _(),
    _ = _(),
    { mutateAsync: _ } = _({
      mutationFn: async (_) => {
        if (!_) return !1;
        let _ = Object.fromEntries(
            Object.entries(_).filter(
              ([_]) => !_.startsWith(`registration_emailed_`),
            ),
          ),
          _ = [];
        for (let [_, _] of _.selections)
          _.push({
            gid: _.gidClanEvent,
            group_id: _,
            session_id: _,
            guest_count: _.guests_registered ?? 1,
            jsondata: JSON.stringify(_),
            skip_email: !1,
          });
        for (let _ of _.registrations.keys())
          _.selections.has(_) ||
            _.push({
              gid: _.gidClanEvent,
              group_id: _,
              session_id: 0,
              guest_count: 0,
              jsondata: JSON.stringify({}),
              skip_email: !1,
            });
        let _ = !0;
        for (let _ = 0; _ < _.length; _++) {
          let _ = await _({
            ..._[_],
            skip_email: _ != _.length - 1,
          });
          _ &&= _ == 1;
        }
        return (
          _.setQueryData(_(_.gidClanEvent, _.userAccountID), null),
          await _.invalidateQueries({
            queryKey: _(_.gidClanEvent, _.userAccountID),
          }),
          _
        );
      },
    });
  return _;
}
var _ = /(?<!\\)\[(meetsteamsessiongroup|meetsteamscheduleview)\b([^\]]*)\]/gi,
  _ = /\b(?:group_id|schedule_id)\s*=\s*"?(\d+)/i;
function _(_) {
  let _ = [];
  for (let _ of _.matchAll(_))
    _.push({
      strTag: _[1].toLowerCase(),
      nID: Number(_.exec(_[2])?.[1] ?? 0),
    });
  return _;
}
function _(_, _) {
  return (
    _ === void 0 ||
    _(_).find((_) => _.strTag == `meetsteamsessiongroup`)?.nID == _
  );
}
function _(_, _, _) {
  if (_ === void 0) return !0;
  let _ = _(_),
    _ = _[_.length - 1];
  return _?.strTag == _ && _.nID == _;
}
var _ = `FprwYHx-U4Y-`,
  _ = `-vUH5zUFweE-`,
  _ = `IuiOJhvedpc-`,
  _ = `B7wd41GWVhk-`,
  _ = `_8Eulh7zW0mY-`,
  _ = `LKCSYPNvZvI-`,
  _ = `hwMZbam2MGQ-`,
  _ = `O2kjK4051rI-`,
  _ = `OUaWikUhrTM-`,
  _ = `_3uAbWrSYerg-`,
  _ = `UgEhb0ncn1A-`,
  _ = `BMzhUhslQPI-`,
  _ = `AJTKElSEeSw-`,
  _ = `kV1Jqb3Rov8-`,
  _ = `gvQxtCUj3fg-`,
  _ = `yLGXrRR6Ppc-`,
  _ = `ntccRqfBebU-`,
  _ = `o8pml4Bwi5A-`,
  _ = `WvElq-tCb3Q-`,
  _ = `_05RRD-h7oAc-`,
  _ = `JFOe9vqvOZo-`,
  _ = `k04R56-Fkgo-`,
  _ = `_8EO094lwU7U-`,
  _ = `cphmwIzaPLc-`,
  _ = `T3bZdmWZ8ls-`,
  _ = `_5Cu07iWebh0-`,
  _ = [];
function _(_) {
  let {
      eventModel: _,
      fnConfirm: _,
      fnHideModal: _,
      nMaxPerTeam: _,
      bAddingOrChangingSessions: _,
    } = _,
    _ = _(_.LANGUAGE),
    [_, _] = _.useState({}),
    [_, _] = _.useState(!1),
    _ = _.useCallback(
      (_) => {
        _({
          ..._,
          ..._,
        });
      },
      [_],
    ),
    _ = _(_.clanSteamID.GetAccountID(), _.GID ?? ``, _.accountid),
    { data: _ } = _(_.accountid),
    _ = _?.realname ?? ``,
    _ = _?.email ?? ``,
    _ = _?.partners ?? _,
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(void 0),
    _ = _.useMemo(() => {
      let _ = [];
      return (
        _ ??
          _.push({
            data: void 0,
            label: _(`#MeetSteam_ChoosePartner`),
          }),
        _.push(
          ..._.map((_, _) => ({
            data: _.partnerid,
            label: _.partner_name,
          })),
        ),
        _.push({
          data: 0,
          label: _(`#MeetSteam_ChoosePartnerOther`),
        }),
        _
      );
    }, [_, _]);
  _.useEffect(() => {
    if (!_.isSuccess) return;
    let _ = _.find((_) => _.partnerid == _.data.partner_id),
      _ = _.data.partner_id === 0 ? 0 : _?.partnerid;
    (_(_), _(_), _(_.data));
  }, [_.isSuccess, _.data, _]);
  let _ = _?.length > 0,
    _ = !_ || _ != null,
    _ = _ && _ === 0;
  _.useEffect(() => {
    if (_ == _ || (_(_), !_ || !_)) return;
    let _,
      _ = _.find((_) => _.partnerid == _);
    ((_ =
      _ || !_
        ? {
            name: _?.length > 0 ? _ : void 0,
            email_override: _?.length > 0 ? _ : void 0,
            partner_id: 0,
          }
        : {
            name:
              _.partneruserrealname?.length > 0
                ? _.partneruserrealname
                : void 0,
            company: _.partner_name?.length > 0 ? _.partner_name : void 0,
            email_override:
              _.partneruseremail?.length > 0 ? _.partneruseremail : void 0,
            partner_id: _.partnerid,
          }),
      Object.values(_).some((_) => _ != null) && _(_(_)));
  }, [_, _, _, _, _, _, _, _, _]);
  let _ = _.isLoading || _,
    _ = _
      ? _(`#MeetSteam_Register_title`, _.GetNameWithFallback(_) ?? ``)
      : _(`#MeetSteam_Unregister_title`),
    _ =
      !_ ||
      (_ &&
        !!_.name &&
        (!_.guest_names || _.guest_names.every((_) => _.length > 0)) &&
        !!_.email_override &&
        !!_.company);
  return (0, _.jsxs)(_, {
    active: !0,
    children: [
      _ &&
        (0, _.jsx)(_, {
          "aria-label": _(_ ? `#Saving` : `#Loading`),
          bOKDisabled: !0,
          bHideCloseIcon: !0,
          onCancel: () => !1,
          children: (0, _.jsx)(_, {
            size: `medium`,
            position: `center`,
            string: _(_ ? `#Saving` : `#Loading`),
          }),
        }),
      !_ &&
        (0, _.jsx)(_, {
          strTitle: _,
          onCancel: _,
          bOKDisabled: !_,
          onOK: async () => {
            (_(!0), await _(_), _(!1), _.refetch(), _());
          },
          children:
            _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`div`, {
                  children: _(`#MeetSteam_Reg_Intro`),
                }),
                (0, _.jsx)(`br`, {}),
                _ &&
                  (0, _.jsx)(_, {
                    label: _(`#MeetSteam_Reg_Preset`),
                    tooltip: _(`#MeetSteam_Reg_Preset_ttip`),
                    rgOptions: _,
                    selectedOption: _,
                    onChange: (_) => _(_.data),
                  }),
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {
                        type: `text`,
                        label: _(`#MeetSteam_Reg_Name`),
                        value: _.name || ``,
                        onChange: (_) =>
                          _({
                            name: _.currentTarget.value,
                          }),
                      }),
                      (0, _.jsx)(_, {
                        type: `text`,
                        label: _(`#MeetSteam_Reg_Email`),
                        value: _.email_override || ``,
                        mustBeEmail: !0,
                        onChange: (_) =>
                          _({
                            email_override: _.currentTarget.value,
                          }),
                      }),
                      (0, _.jsx)(_, {
                        type: `text`,
                        label: _(`#MeetSteam_Reg_Company`),
                        value: _.company || ``,
                        onChange: (_) =>
                          _({
                            company: _.currentTarget.value,
                          }),
                      }),
                      (0, _.jsx)(_, {
                        type: `text`,
                        label: _(`#MeetSteam_Reg_Game`),
                        value: _.game || ``,
                        onChange: (_) =>
                          _({
                            game: _.currentTarget.value,
                          }),
                      }),
                      _ > 0 &&
                        (0, _.jsx)(_, {
                          label: _(`#MeetSteam_Reg_GuestCount`),
                          tooltip: _(`#MeetSteam_Reg_GuestCount_ttip`),
                          rgOptions: Array.from({
                            length: _ + 1,
                          }).map((_, _) => ({
                            data: _,
                            label: _,
                          })),
                          selectedOption: (_.guests_registered ?? 1) - 1,
                          onChange: (_) => {
                            let _ = _.guest_names ?? [];
                            _({
                              guests_registered: _.data + 1,
                              guest_names:
                                _.length > _.data
                                  ? _.slice(0, _.data)
                                  : _(_, _.data, ``),
                            });
                          },
                        }),
                      (_.guests_registered ?? 0) > 1 &&
                        (0, _.jsxs)(`div`, {
                          children: [
                            (0, _.jsx)(`div`, {
                              children: _(`#MeetSteam_Reg_Others`),
                            }),
                            (0, _.jsx)(`br`, {}),
                            (_.guest_names ?? []).map((_, _) =>
                              (0, _.jsx)(
                                _,
                                {
                                  type: `text`,
                                  label: _(`#MeetSteam_Reg_Others_name`),
                                  value: _,
                                  onChange: (_) => {
                                    let _ = [...(_.guest_names ?? [])];
                                    ((_[_] = _.currentTarget.value),
                                      _({
                                        guest_names: _,
                                      }));
                                  },
                                },
                                `guesname_` + _,
                              ),
                            ),
                          ],
                        }),
                      (0, _.jsx)(_, {
                        eventModel: _,
                        oReg: _,
                        fnUpdateRegistration: _,
                      }),
                    ],
                  }),
              ],
            }),
        }),
    ],
  });
}
function _(_) {
  return Object.fromEntries(Object.entries(_).filter(([_, _]) => _ !== void 0));
}
function _(_) {
  let { eventModel: _, oReg: _, fnUpdateRegistration: _ } = _,
    _ = _(_.jsondata.meet_steam_groups ?? [], 2);
  return !_ || _.length == 0
    ? null
    : (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`h3`, {
            children: _(`#MeetSteam_Reg_Question_title`),
          }),
          (0, _.jsx)(`p`, {
            children: _(`#MeetSteam_Reg_Question_desc`),
          }),
          _.map((_) => {
            let _ = _.jsondata.meet_steam_groups?.find((_) => _.group_id == _);
            return _
              ? (0, _.jsx)(
                  _,
                  {
                    groupInfo: _,
                    oReg: _,
                    fnUpdateText: (_) => {
                      let _ = _.pre_event_partner_questions
                          ? [..._.pre_event_partner_questions]
                          : [],
                        _ = _.findIndex((_) => _.group_id == _);
                      (_ < 0
                        ? _.push({
                            group_id: _,
                            question: _,
                          })
                        : (_[_] = {
                            group_id: _,
                            question: _,
                          }),
                        _({
                          pre_event_partner_questions: _,
                        }));
                    },
                  },
                  `groupquestion` + _,
                )
              : null;
          }),
        ],
      });
}
function _(_) {
  let { fnUpdateText: _, groupInfo: _, oReg: _ } = _,
    _ = _(_.LANGUAGE),
    [_, _] = _(() => [
      _.GetWithFallback(_.localized_session_title, _) ?? ``,
      _.pre_event_partner_questions?.find((_) => _.group_id == _.group_id)
        ?.question || ``,
    ]);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: `DialogInput_Wrapper`,
        children: (0, _.jsx)(`textarea`, {
          value: _,
          className: _(`DialogTextInputBase`, `_DialogInputContainer`),
          cols: 80,
          rows: 3,
          placeholder: _(`#MeetSteam_Reg_Question_placeholder`),
          onChange: (_) => _(_.currentTarget.value),
        }),
      }),
    ],
  });
}
function _(_) {
  let _ = _.context.event,
    _ = _.context.showErrorInfo,
    _ = _(_.args, `group_id`),
    _ = Number.parseInt(_),
    _ = _(() => _(_, _));
  if (!_ || !_)
    return _
      ? (0, _.jsxs)(`div`, {
          children: [`Failed to find session group id `, _],
        })
      : null;
  if (_.clanSteamID.GetAccountID() != _())
    return _
      ? (0, _.jsx)(`div`, {
          children: `Only support on special group`,
        })
      : null;
  let _ = _(_.context.bbcode, _),
    _ = _(_.context.bbcode, `meetsteamsessiongroup`, _);
  return (0, _.jsxs)(_, {
    clanAccountID: _.clanSteamID.GetAccountID(),
    gidClanEvent: _.GID ?? ``,
    userAccountID: _.accountid,
    children: [
      _ &&
        (0, _.jsx)(_, {
          eventModel: _,
        }),
      (0, _.jsx)(_, {
        groupData: _,
        eventModel: _,
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        bIsLast: _,
      }),
    ],
  });
}
function _(_) {
  let { eventModel: _ } = _;
  return _()
    ? (0, _.jsx)(_, {
        eventModel: _,
        accountID: _.accountid,
      })
    : null;
}
function _(_) {
  let { eventModel: _, accountID: _ } = _,
    _ = _(_.GID ?? ``, _);
  return (0, _.jsx)(`div`, {
    children:
      !!_ &&
      (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            children: _(`#MeetSteam_QR_CheckIn`),
          }),
          (0, _.jsx)(`img`, {
            src: _,
            alt: ``,
          }),
        ],
      }),
  });
}
function _(_) {
  let { groupData: _, eventModel: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(_.clanSteamID.GetAccountID(), _.GID ?? ``),
    _ = (0, _.useMemo)(
      () =>
        _?.sessions &&
        [..._.sessions].sort(
          (_, _) => (_.rtime_start ?? 0) - (_.rtime_start ?? 0),
        ),
      [_?.sessions],
    ),
    { elLogInDialog: _, fnRequireLogIn: _ } = _(),
    _ = _(),
    _ = _(() =>
      _?.reduce((_, _) => _.set(_._ ?? 0, _(_, _.group_id, _._)), new Map()),
    ),
    _ = _(),
    _ = _(_.clanSteamID.GetAccountID(), _.GID ?? ``, _.accountid),
    _ = _.isSuccess && !!_.data.allow_registration_if_full,
    _ = _.data;
  if (_.isError)
    return (0, _.jsx)(`div`, {
      children: _(`#Error_ErrorCommunicatingWithNetwork`),
    });
  if (!_ || (_ && _.accountid))
    return (0, _.jsx)(_, {
      size: `medium`,
      position: `center`,
      string: _(`#Loading`),
    });
  let _ = (_) => _(_.group_id, _),
    _ = _.group_visibility_tokens ?? [],
    _ = _ !== null && _.includes(_);
  return _.length > 0 && !_ && !_
    ? null
    : (0, _.jsxs)(_, {
        groupData: _,
        children: [
          _?.map((_, _) => {
            let _ = _.find(
                (_) => _.group_id === _.group_id && _.session_id === _._,
              ),
              _ = _?.get(_._ ?? 0),
              _ = _ + 1 < _.length;
            return (0, _.jsxs)(
              _.Fragment,
              {
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(_, {
                      sessionData: _,
                      onClick: () => _(() => _(_._)),
                      nGuestReservations: _?.guest_count || 0,
                      eRegistrationStatus: _,
                      bAllowedToRegisterIfFull: _,
                    }),
                  }),
                  _ && (0, _.jsx)(_, {}),
                ],
              },
              `timecol_` + _.group_id + `_` + _._,
            );
          }),
          _,
        ],
      });
}
function _(_) {
  let { groupData: _, children: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _.GetWithFallback(_?.localized_session_title, _),
    _ = _.GetWithFallback(_?.localized_session_description, _),
    _ = _.GetWithFallback(_?.localized_intended_audience, _),
    _ = _.GetWithFallback(_?.localized_sesssion_faq, _),
    _ = _(),
    [_, _] = (0, _.useState)(!1);
  return _
    ? (0, _.jsxs)(`div`, {
        className: _({
          [_]: !0,
          [_]: !1,
          [_]: _ && (_.group_visibility_tokens?.length ?? 0) > 0,
        }),
        children: [
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `B7wd41GWVhk-`,
              children: _,
            }),
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `Igx0EhsRTuI-`,
              children: _,
            }),
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `F0kkNQRpYKQ-`,
              children: _(`#MeetSteam_Session_Audience`, _ ?? ``),
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          !!_ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsxs)(`div`, {
                  className: `G1ADrKQ2F-0-`,
                  children: [
                    (0, _.jsx)(_, {
                      bExpanded: _,
                      setExpanded: _,
                    }),
                    (0, _.jsx)(`div`, {
                      children: _(`#MeetSteam_FAQ`),
                    }),
                  ],
                }),
                _ &&
                  (0, _.jsx)(`div`, {
                    className: `oZx5NLNkdqc-`,
                    children: (0, _.jsx)(_, {
                      text: _ ?? ``,
                    }),
                  }),
              ],
            }),
        ],
      })
    : null;
}
function _(_, _, _, _) {
  let _ = _ || (_ === 0 && _ > 0) || _ === 1 || _ === 2 || _ === 3,
    _ = null,
    _ = null;
  return (
    _ == 1
      ? ((_ = _(`#MeetSteam_Registered`)), (_ = _))
      : _ == 2
        ? ((_ = _(`#MeetSteam_Registering`)), (_ = _))
        : _ == 3
          ? ((_ = _(`#MeetSteam_Unegistering`)), (_ = _))
          : _ && ((_ = _(`#MeetSteam_Already`)), (_ = _)),
    {
      bEnabled: _,
      strStatusClass: _,
      strStatusToken: _,
    }
  );
}
function _(_) {
  let {
      sessionData: _,
      onClick: _,
      nGuestReservations: _,
      eRegistrationStatus: _ = 0,
      bAllowedToRegisterIfFull: _,
    } = _,
    _ = _(() => _.max_capacity ?? 0),
    _ = Math.max(0, _ - (_ || 0)),
    { strStatusClass: _, strStatusToken: _, bEnabled: _ } = _(_, _, !!_),
    { sDisplayTimeZone: _, rtime_start: _, rtime_end: _ } = _(_),
    _ = _(_ ?? 0, _),
    _ = _(_ ?? 0, _ ?? 0, _);
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`span`, {
            children: _,
          }),
        }),
        (0, _.jsxs)(`button`, {
          className: _(_, _),
          disabled: !_,
          onClick: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
          ],
        }),
        (0, _.jsx)(_, {
          nAvailableSpace: _,
          bAllowedToRegisterIfFull: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { nAvailableSpace: _, bAllowedToRegisterIfFull: _ } = _;
  return (0, _.jsx)(_.Fragment, {
    children:
      _ ||
      (0, _.jsxs)(_.Fragment, {
        children: [
          ` `,
          _ < 1
            ? (0, _.jsx)(`div`, {
                className: `IWY1aalSQ6Y-`,
                children: _(`#MeetSteam_SoldOut`),
              })
            : (0, _.jsx)(`div`, {
                className: `tQbHsO8HSog-`,
                children: _(`#MeetSteam_Spot`, _.toLocaleString(_())),
              }),
          ` `,
        ],
      }),
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: `◆`,
  });
}
function _(_) {
  let { eventModel: _, bIsLast: _ } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = _(_.clanSteamID.GetAccountID(), _.GID ?? ``),
    [_, _, _] = _(),
    { elLogInDialog: _, fnRequireLogIn: _ } = _(),
    _ = _(),
    _ = async (_) => {
      (_(!0), (await _(_)) || _(), _.refetch(), _(!1));
    },
    _ = _(),
    _ = _ || _,
    _ = _(),
    _ = _(),
    _ = _(_),
    _ = _(_),
    _ = _(() =>
      _(_).reduce((_, _) => {
        let _ = _(_, _),
          _ = _(_, _?.group_id),
          _ = _?.sessions?.find((_) => _._ == _)?.max_per_team ?? 0;
        return Math.max(_, _);
      }, 1),
    );
  return (
    _(_, _(`#EventEditor_UnsavedChanges`)),
    (0, _.jsxs)(`div`, {
      className: _(_, _ && _ && `N-b2WiZ5wto-`),
      children: [
        (0, _.jsx)(`p`, {
          children: _(
            _
              ? `#MeetSteam_UpdateRegistration_Desc`
              : `#MeetSteam_CompleteRegistration_Desc`,
          ),
        }),
        _ &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              !_ &&
                (0, _.jsx)(_, {
                  disabled: !_,
                  onClick: () => _(() => _(!0)),
                  children: _(
                    _
                      ? `#MeetSteam_UpdateRegistration`
                      : `#MeetSteam_CompleteRegistration`,
                  ),
                }),
              _ &&
                (0, _.jsx)(_, {
                  size: `small`,
                  position: `center`,
                  string: _(`#Saving`),
                }),
              _ &&
                (0, _.jsx)(_, {
                  eventModel: _,
                  fnConfirm: _,
                  fnHideModal: () => _(!1),
                  nMaxPerTeam: _,
                  bAddingOrChangingSessions: _,
                }),
              _ &&
                (0, _.jsx)(_, {
                  active: !0,
                  children: (0, _.jsx)(_, {
                    strTitle: _(`#Error_Generic`),
                    strDescription: _(`#MeetSteam_RegistrationFailed`),
                    closeModal: _,
                  }),
                }),
              _,
            ],
          }),
      ],
    })
  );
}
function _(_, _) {
  return (_?.jsondata?.meet_steam_groups || [])?.find((_) => _.group_id == _);
}
function _(_, _) {
  return (_?.jsondata?.meet_steam_schedules || [])?.find(
    (_) => _.schedule_id == _,
  );
}
function _() {
  let { elDialogElement: _, fnShowLogonDialog: _ } = _(
    _(`#EventDisplay_Share_NotLoggedIn_Description`),
  );
  return {
    elLogInDialog: _,
    fnRequireLogIn: (_) => {
      _.logged_in ? _() : _();
    },
  };
}
function _(_) {
  let _ = _.context.event,
    _ = _.context.showErrorInfo,
    _ = _(_.args, `schedule_id`),
    _ = Number.parseInt(_),
    _ = _(() => _(_, _));
  if (!_ || !_)
    return _
      ? (0, _.jsxs)(`div`, {
          children: [`Failed to find session schedule id `, _],
        })
      : null;
  if (_.clanSteamID.GetAccountID() != _())
    return _
      ? (0, _.jsx)(`div`, {
          children: `Only support on special group`,
        })
      : null;
  let _ = _(_.context.bbcode, `meetsteamscheduleview`, _);
  return (0, _.jsxs)(_, {
    clanAccountID: _.clanSteamID.GetAccountID(),
    gidClanEvent: _.GID ?? ``,
    userAccountID: _.accountid,
    children: [
      (0, _.jsx)(_, {
        scheduleData: _,
        eventModel: _,
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        bIsLast: _,
      }),
    ],
  });
}
function _(_) {
  let { eventModel: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(_.clanSteamID.GetAccountID(), _.GID ?? ``),
    _ = _(_.clanSteamID.GetAccountID(), _.GID ?? ``, _.accountid),
    _ = _.data;
  return _.isError
    ? (0, _.jsx)(`div`, {
        children: _(`#Error_ErrorCommunicatingWithNetwork`),
      })
    : !_ || (_ && _.accountid)
      ? (0, _.jsx)(_, {
          size: `medium`,
          position: `center`,
          string: _(`#Loading`),
        })
      : (0, _.jsx)(_, {
          ..._,
          fnOnClick: _,
          rgAvailability: _,
          bAllowedToRegisterIfFull: _.data?.allow_registration_if_full,
        });
}
function _(_) {
  let {
      eventModel: _,
      scheduleData: _,
      bAllowedToRegisterIfFull: _,
      fnOnClick: _,
      rgAvailability: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    [_, _, _] = _(() => [
      _.jsondata.meet_steam_groups,
      _.in_person_time_zone ?? `America/Los_Angeles`,
      _.location_type,
    ]),
    [_, _, _] = (0, _.useMemo)(() => {
      if (!_) return [new Map(), new Map(), []];
      let _ = new Map(),
        _ = new Map();
      for (let _ of _) {
        let _ = _.group_visibility_tokens ?? [],
          _ = _ !== null && _.includes(_);
        if (!(_.length > 0 && !_ && !_))
          for (let _ of _.sessions) {
            let _ = (
                _ == `in_person`
                  ? _.default.unix(_.rtime_start ?? 0)._(_)
                  : _.default.unix(_.rtime_start ?? 0)._(_)
              ).format(`YYYY-MM-DD`),
              _ = _.get(_);
            (_ || ((_ = []), _.set(_, _)),
              _.push({
                group: _,
                session: _,
              }));
          }
      }
      for (let _ of _.session_breaks || []) {
        let _ = (
            _ == `in_person`
              ? _.default.unix(_.rtime_start ?? 0)._(_)
              : _.default.unix(_.rtime_start ?? 0)._(_)
          ).format(`YYYY-MM-DD`),
          _ = _.get(_);
        (_ || ((_ = []), _.set(_, _)), _.push(_));
      }
      for (let _ of _.values())
        _.sort(
          (_, _) => (_.session.rtime_start ?? 0) - (_.session.rtime_start ?? 0),
        );
      return [_, _, Array.from(_.keys()).sort()];
    }, [_, _, _, _, _, _, _.session_breaks]);
  return _
    ? (0, _.jsx)(_.Fragment, {
        children: _.map((_) => {
          let _ = _.get(_);
          return (0, _.jsx)(
            `div`,
            {
              className: _,
              children: (0, _.jsx)(_, {
                scheduleData: _,
                bAllowedToRegisterIfFull: !!_,
                fnOnClick: _,
                rgDayGroupSessions: _ ?? [],
                rgBreakSessions: _.get(_) || [],
                rgAvailability: _ ?? [],
              }),
            },
            `day_` + _,
          );
        }),
      })
    : (0, _.jsx)(`div`, {
        children: `No Meet Steam Events; please create some first.`,
      });
}
function _(_) {
  let {
      scheduleData: _,
      rgDayGroupSessions: _,
      rgBreakSessions: _,
      bAllowedToRegisterIfFull: _,
      fnOnClick: _,
      rgAvailability: _,
    } = _,
    _ = (0, _.useMemo)(() => {
      let _ = [];
      for (let _ of _)
        _.length == 0 ||
        _[_.length - 1][0].session.rtime_start != _.session.rtime_start
          ? _.push([_])
          : _[_.length - 1].push(_);
      return _;
    }, [_]),
    { sDisplayTimeZone: _, rtime_start: _ } = _(_[0].session),
    _ = _(_ ?? 0, _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`h2`, {
        className: _,
        children: _,
      }),
      _.filter(
        (_) => (_.rtime_end ?? 0) <= (_[0][0].session.rtime_start ?? 0),
      ).map((_) =>
        (0, _.jsx)(
          _,
          {
            scheduleData: _,
            breakSession: _,
          },
          `breaks_${_.schedule_id}_${_.break_id}`,
        ),
      ),
      _.map((_, _) => {
        let _ = [];
        if (_ + 1 < _.length) {
          let _ = _[0].session.rtime_start ?? 0,
            _ = _[_ + 1][0].session.rtime_end ?? 0;
          _ = _.filter(
            (_) => _ < (_.rtime_start ?? 0) && (_.rtime_end ?? 0) < _,
          );
        }
        return (0, _.jsxs)(
          _.Fragment,
          {
            children: [
              (0, _.jsx)(_, {
                bAllowedToRegisterIfFull: _,
                fnOnClick: _,
                scheduleData: _,
                rgSlotSessions: _,
                rgAvailability: _,
              }),
              _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    scheduleData: _,
                    breakSession: _,
                  },
                  `breaks_${_.schedule_id}_${_.break_id}`,
                ),
              ),
            ],
          },
          `start_` + _[0].session.rtime_start,
        );
      }),
      _.filter(
        (_) =>
          (_.rtime_start ?? 0) >= (_[_.length - 1][0].session.rtime_end ?? 0),
      ).map((_) =>
        (0, _.jsx)(
          _,
          {
            scheduleData: _,
            breakSession: _,
          },
          `breaks_${_.schedule_id}_${_.break_id}`,
        ),
      ),
    ],
  });
}
function _(_) {
  let { scheduleData: _, breakSession: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _(() => _.GetWithFallback(_.localized_break_description, _) ?? ``),
    _ = _(() => ({
      rtime_start: _.rtime_start,
      rtime_end: _.rtime_end,
      location_type: _.location_type,
      in_person_time_zone: _.in_person_time_zone,
    }));
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        session: _,
      }),
      (0, _.jsx)(`div`, {
        children: _,
      }),
    ],
  });
}
function _(_) {
  let {
    scheduleData: _,
    rgSlotSessions: _,
    bAllowedToRegisterIfFull: _,
    fnOnClick: _,
    rgAvailability: _,
  } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        session: _[0].session,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              bAllowedToRegisterIfFull: _,
              fnOnClick: _,
              session: _,
              rgAvailability: _,
            },
            `entry_${_.group.group_id}_${_.session._}`,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { session: _ } = _,
    { sDisplayTimeZone: _, rtime_start: _, rtime_end: _ } = _(_),
    _ = _(_ ?? 0, _),
    _ = _(_ ?? 0, _ ?? 0, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let {
      session: _,
      bAllowedToRegisterIfFull: _,
      fnOnClick: _,
      rgAvailability: _,
    } = _,
    _ = _(_.LANGUAGE),
    [_, _, _, _] = _(() => [
      _.GetWithFallback(_.group.localized_session_title, _) ?? ``,
      _.GetWithFallback(_.group.localized_intended_audience, _) ?? ``,
      _.GetWithFallback(_.group.localized_sesssion_faq, _) ?? ``,
      _.GetWithFallback(_.group.localized_session_description, _) ?? ``,
    ]),
    [_, _, _] = _(!1),
    _ = _(),
    [_, _, _] = _(() => [
      _(_, _.group.group_id, _.session._),
      _(_, _.group.group_id, _.session._),
      _(_, _.group.group_id),
    ]),
    _ = _?.find(
      (_) => _.group_id === _.group.group_id && _.session_id === _.session._,
    )?.guest_count,
    _ = Math.max(0, (_.session.max_capacity ?? 0) - (_ || 0)),
    { strStatusClass: _, strStatusToken: _, bEnabled: _ } = _(_, _, _, _),
    _ = _ && _ ? _.group.sessions.find((_) => _._ == _)?.rtime_start : void 0;
  return (0, _.jsx)(_, {
    toolTipContent: _ ? _(`#MeetSteam_AlreadyReg`, _(_), _(_)) : void 0,
    children: (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`span`, {
            children: _,
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            _ &&
              (0, _.jsx)(`div`, {
                className: `F0kkNQRpYKQ-`,
                children: _(`#MeetSteam_Session_Audience`, _),
              }),
            (0, _.jsx)(`button`, {
              type: `button`,
              className: _,
              onClick: _,
              children: _(`#MeetSteam_Session_Details`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                onClick: () => {
                  _ && _(_.group.group_id, _.session._);
                },
                disabled: !_,
                children: _(_ == 1 ? `#Button_Unselect` : `#Button_Select`),
              }),
            }),
          ],
        }),
        (0, _.jsx)(_, {
          nAvailableSpace: _,
          bAllowedToRegisterIfFull: _,
        }),
        (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsxs)(_, {
            strTitle: _,
            bAlertDialog: !0,
            bAllowFullSize: !0,
            closeModal: _,
            children: [
              (0, _.jsx)(`div`, {
                children: _,
              }),
              (0, _.jsx)(`div`, {
                children: _,
              }),
              !!_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(`div`, {
                      children: _(`#MeetSteam_FAQ`),
                    }),
                    (0, _.jsx)(_, {
                      text: _,
                    }),
                  ],
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let _ = Number.parseInt(_(_.args, `id`)) || 0,
    _ = (_(_.args, `visible`) || `false`).toLowerCase() === `true`,
    _ = _.context.showErrorInfo,
    _ = _(_),
    { data: _, isPending: _ } = _(_);
  if (!_)
    return _
      ? (0, _.jsx)(`div`, {
          children: `Error: PackageID Not Set`,
        })
      : null;
  if (_) return null;
  let _ =
    _?.success == 1
      ? !!(_.visible && _.best_purchase_option)
      : !_?.unvailable_for_country_restriction;
  return (!_ && !_) || (_ && _)
    ? (0, _.jsx)(_.Fragment, {
        children: _.children,
      })
    : null;
}
var _ = `Nk17-6RzhJU-`;
function _(_) {
  let { MissingEventFallback: _ } = _,
    { event: _, showErrorInfo: _ } = _.context,
    _ = _(_.args),
    _ = !!_ && _ != _?.GID,
    { data: _, isPending: _ } = _(
      _ && _
        ? {
            clanAccountID: _.clanSteamID.GetAccountID(),
            eventGID: _,
          }
        : void 0,
    );
  if (!_)
    return _
      ? (0, _.jsx)(_, {
          eventModel: _,
          lang: _.language,
        })
      : null;
  if (_) {
    if (_)
      return (0, _.jsx)(_, {
        eventModel: _,
        lang: _.language,
      });
    if (_) return null;
  }
  return _
    ? (0, _.jsx)(_, {
        eventGID: _,
        lang: _.language,
        bShowErrorInfo: !!_,
      })
    : _
      ? (0, _.jsx)(_, {
          eventGID: _,
        })
      : null;
}
function _({ eventGID: _ }) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(`#EventDidplay_Reminder_EventNotVisible`, _),
  });
}
var _ = _(_());
function _() {
  return _(
    {
      exportFn: void 0,
      file: void 0,
      dataURL: void 0,
      uploadFileName: ``,
      displayFileName: void 0,
      sha1: ``,
      hmac: ``,
      timestamp: 0,
      imageWidth: 0,
      imageHeight: 0,
      fileInfo: void 0,
      uploadInfo: void 0,
      eUploadState: 0,
      uploadProgress: 0,
      strErrorDescription: void 0,
    },
    {
      exportFn: !1,
      file: _.ref,
      uploadFileName: !1,
      displayFileName: !1,
      sha1: !1,
      hmac: !1,
      timestamp: !1,
      fileInfo: !1,
      uploadInfo: !1,
    },
  );
}
var _ = class {
  m_Callbacks;
  m_fileUploadProps = _();
  m_onComplete;
  constructor(_) {
    (_(this, {
      SetUploadFileError: _,
      StartFileExportToUpload: _,
      SetImageFileToUpload: _,
      SetOtherFileToUpload: _,
      SetFileToUpload: _,
      RetryFileUpload: _,
      BeginFileUpload: _,
      DoFileUpload: _,
      CommitFileUpload: _,
      ClearFileUploadError: _,
      Reset: _,
    }),
      (this.m_Callbacks = _));
  }
  get file_upload_props() {
    return this.m_fileUploadProps;
  }
  get file_upload_data_url() {
    return this.m_fileUploadProps.dataURL;
  }
  get file() {
    return this.m_fileUploadProps.file;
  }
  LogFileUploadMessage(_) {
    this.m_Callbacks.LogFileUploadMessage &&
      this.m_Callbacks.LogFileUploadMessage(_);
  }
  SetUploadFileError(_, _) {
    ((this.m_fileUploadProps.eUploadState = _),
      (this.m_fileUploadProps.strErrorDescription = _),
      (this.m_fileUploadProps.displayFileName = void 0));
  }
  async StartFileExportToUpload(_, _ = {}) {
    let { displayFilename: _, info: _, onComplete: _ } = _;
    ((this.m_fileUploadProps.eUploadState = 7),
      (this.m_fileUploadProps.uploadProgress = 0),
      (this.m_onComplete = _),
      (this.m_fileUploadProps.fileInfo = _),
      this.SetFileToUpload(_),
      (this.m_fileUploadProps.displayFileName = _));
  }
  async SetImageFileToUpload(_, _ = {}) {
    let { processor: _ = _, info: _ } = _;
    if (!_) {
      this.SetFileToUpload(void 0);
      return;
    }
    this.m_fileUploadProps.fileInfo = _;
    let _ = this.m_Callbacks.GetFileNameOverride?.() ?? _.name;
    if (_.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
      this.SetUploadFileError(
        4,
        _(
          `#Chat_Settings_Error_ChatFileTooLarge_dynamic`,
          _,
          this.m_Callbacks.GetMaxFileSizeMB(),
        ),
      );
      return;
    }
    let _ = [
        `jpg`,
        `jpeg`,
        `png`,
        `gif`,
        `webm`,
        `mpg`,
        `mp4`,
        `mpeg`,
        `ogv`,
        `webp`,
        `avif`,
      ],
      _ = _.name.split(`.`).pop()?.toLowerCase() ?? ``;
    if (_.indexOf(_) == -1) {
      let _ = _ || _;
      this.SetUploadFileError(
        5,
        _(`#Chat_Settings_Error_ChatUploadFileTypeNotSupported`, _),
      );
      return;
    }
    let _ = await _(_);
    (this.SetFileToUpload(_.file),
      (this.m_fileUploadProps.imageHeight = _.height),
      (this.m_fileUploadProps.imageWidth = _.width));
  }
  async SetOtherFileToUpload(_, _ = {}) {
    if (!_) {
      this.SetFileToUpload(void 0);
      return;
    }
    this.m_fileUploadProps.fileInfo = _.info;
    let _ = this.m_Callbacks.GetFileNameOverride?.() ?? _.name;
    if (_.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
      this.SetUploadFileError(
        4,
        _(
          `#Chat_Settings_Error_ChatFileTooLarge_dynamic`,
          _,
          this.m_Callbacks.GetMaxFileSizeMB(),
        ),
      );
      return;
    }
    let _ = [`zip`],
      _ = _.name.split(`.`).pop()?.toLowerCase() ?? ``;
    if (_.indexOf(_) == -1) {
      let _ = _ || _;
      this.SetUploadFileError(5, _(`#Chat_Settings_Error_FileTypeNotZip`, _));
    } else this.SetFileToUpload(_);
  }
  SetFileToUpload(_) {
    if (
      ((this.m_fileUploadProps.file = void 0),
      (this.m_fileUploadProps.dataURL = void 0),
      (this.m_fileUploadProps.hmac = ``),
      (this.m_fileUploadProps.sha1 = ``),
      (this.m_fileUploadProps.imageWidth = 0),
      (this.m_fileUploadProps.imageHeight = 0),
      (this.m_fileUploadProps.displayFileName = void 0),
      !_)
    ) {
      this.m_fileUploadProps.eUploadState = 0;
      return;
    }
    let _ = ``;
    if (typeof _ == `function`)
      ((this.m_fileUploadProps.file = void 0),
        (this.m_fileUploadProps.exportFn = _));
    else {
      ((this.m_fileUploadProps.file = _),
        (this.m_fileUploadProps.exportFn = void 0));
      try {
        _ = URL.createObjectURL(_);
      } catch (_) {
        console.error(`Failed to created object URL from file: ${_}`);
      }
      ((this.m_fileUploadProps.displayFileName =
        this.m_fileUploadProps.file.name),
        (this.m_fileUploadProps.uploadFileName =
          window.performance.now() + `_` + this.m_fileUploadProps.file.name));
    }
    this.m_fileUploadProps.eUploadState = 1;
    let _ = ``;
    for (; _.length < 40;) _ += Math.floor(Math.random() * 16).toString(16);
    ((this.m_fileUploadProps.dataURL = _),
      (this.m_fileUploadProps.sha1 = _),
      (this.m_fileUploadProps.hmac = ``),
      (this.m_fileUploadProps.timestamp = 0));
  }
  async RetryFileUpload() {
    return this.BeginFileUpload();
  }
  async BeginFileUpload(_) {
    if (
      ((this.m_fileUploadProps.uploadProgress = 0),
      this.m_fileUploadProps.exportFn)
    ) {
      this.m_fileUploadProps.eUploadState = 7;
      let { eResult: _, file: _ } = await this.m_fileUploadProps.exportFn(
        (_) => {
          _(() => {
            this.m_fileUploadProps.uploadProgress = _ * 0.5;
          });
        },
      );
      if (_ != 1 || !_)
        return (
          this.SetUploadFileError(3, _(`#Chat_Settings_Error_ExportFailed`)),
          new Response()
        );
      ((this.m_fileUploadProps.file = _),
        (this.m_fileUploadProps.uploadFileName =
          window.performance.now() + `_` + _.name));
    }
    let _ = this.m_fileUploadProps.file;
    if (!_)
      throw (
        _(!1, `Must SetImageFileToUpload before calling BeginFileUpload`),
        Error(`Invalid State`)
      );
    ((this.m_fileUploadProps.eUploadState = 2),
      (this.m_fileUploadProps.uploadInfo = _));
    let _ = new FormData();
    (_.append(`sessionid`, _()),
      _.append(`l`, _.LANGUAGE),
      _.append(`file_size`, _.size.toString()),
      _.append(`file_name`, this.m_fileUploadProps.uploadFileName),
      _.append(`file_sha`, this.m_fileUploadProps.sha1),
      _.append(
        `file_image_width`,
        this.m_fileUploadProps.imageWidth.toString(),
      ),
      _.append(
        `file_image_height`,
        this.m_fileUploadProps.imageHeight.toString(),
      ),
      _.append(`file_type`, _.type),
      this.m_Callbacks.PopulateBeginFileUploadFormData &&
        this.m_Callbacks.PopulateBeginFileUploadFormData(
          _,
          this.file_upload_props.uploadInfo,
          this.file_upload_props.fileInfo,
        ));
    try {
      let _ = await fetch(
          this.m_Callbacks.GetBeginFileUploadURL() + `?l=${_.LANGUAGE}`,
          {
            method: `POST`,
            body: _,
            credentials: `include`,
          },
        ),
        _;
      try {
        _ = await _.json();
      } catch {}
      if (!_._) {
        let _ = ``;
        throw (
          _(() => {
            ((this.m_fileUploadProps.eUploadState = 3),
              this.LogFileUploadMessage(_),
              (_ = _?.message
                ? _?.message
                : _(`#Chat_Settings_Error_ServerError`)),
              (this.m_fileUploadProps.strErrorDescription = _(
                `#Chat_Upload_ErrorStart`,
                _,
              )));
          }),
          _
        );
      }
      if (!_ || !_.result) throw Error();
      return (
        (this.m_fileUploadProps.timestamp = _.timestamp),
        (this.m_fileUploadProps.hmac = _.hmac),
        this.DoFileUpload(_.result, _)
      );
    } catch (_) {
      let _ = _ || _(`#ConnectionTrouble_FailedToConnect`);
      throw (
        _(() => {
          ((this.m_fileUploadProps.eUploadState = 3),
            (this.m_fileUploadProps.strErrorDescription = _(
              `#Chat_Upload_ErrorStart`,
              _,
            )));
        }),
        _
      );
    }
  }
  async DoFileUpload(_, _) {
    let _ = _.use_https ? `https://` : `http://`;
    _ += _.url_host + _.url_path;
    let _ = {};
    for (let _ of _.request_headers) {
      if (
        _.name.toLowerCase() == `content-length` ||
        _.name.toLowerCase() == `host`
      )
        continue;
      let _ = _.name;
      (_.toLowerCase() === `content-type` && (_ = `Content-Type`),
        (_[_] = _.value));
    }
    let _ = {
      onUploadProgress: (_) => {
        let _ = !!this.m_fileUploadProps.exportFn,
          _ = _ ? 50 : 0,
          _ = _ ? 50 : 100,
          _ = _ + (_.loaded / _.total) * _;
        _ > this.m_fileUploadProps.uploadProgress &&
          _(() => {
            this.m_fileUploadProps.uploadProgress = _;
          });
      },
      headers: _,
      transformRequest: [(_) => _],
    };
    try {
      return (
        await _.default.put(_, _, _), this.CommitFileUpload(!0, _.ugcid, _)
      );
    } catch (_) {
      throw (
        this.LogFileUploadMessage(_.response),
        _(() => {
          ((this.m_fileUploadProps.strErrorDescription = _(
            `#Chat_Upload_ErrorCloud`,
          )),
            (this.m_fileUploadProps.eUploadState = 3),
            (this.m_fileUploadProps.uploadProgress = 0));
        }),
        this.CommitFileUpload(!1, _.ugcid, _),
        this.m_fileUploadProps.strErrorDescription
      );
    }
  }
  async CommitFileUpload(_, _, _) {
    let _ = this.m_fileUploadProps.sha1,
      _ = new FormData();
    (_.append(`sessionid`, _()),
      _.append(`l`, _.LANGUAGE),
      _.append(`file_name`, this.m_fileUploadProps.uploadFileName),
      _.append(`file_sha`, _),
      _.append(`success`, _ ? `1` : `0`),
      _.append(`ugcid`, _),
      _.append(`file_type`, _.type),
      _.append(
        `file_image_width`,
        this.m_fileUploadProps.imageWidth.toString(),
      ),
      _.append(
        `file_image_height`,
        this.m_fileUploadProps.imageHeight.toString(),
      ),
      _.append(`timestamp`, this.m_fileUploadProps.timestamp.toString()),
      _.append(`hmac`, this.m_fileUploadProps.hmac),
      this.m_Callbacks.PopulateCommitFileUploadFormData(
        _,
        this.file_upload_props.uploadInfo,
        this.file_upload_props.fileInfo,
      ));
    try {
      let _ = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
        method: `POST`,
        body: _,
        credentials: `include`,
      });
      return (
        _
          ? ((this.m_fileUploadProps.uploadProgress = 0),
            (this.m_fileUploadProps.eUploadState = 6),
            this.m_onComplete && this.m_onComplete(1, _.size))
          : ((this.m_fileUploadProps.eUploadState = 3),
            this.m_onComplete && this.m_onComplete(2, _.size)),
        _
      );
    } catch (_) {
      if (!_) return;
      let _ = ``;
      throw (
        _(() => {
          if (
            (this.LogFileUploadMessage(_),
            (this.m_fileUploadProps.uploadProgress = 0),
            (this.m_fileUploadProps.eUploadState = 3),
            _.response)
          ) {
            let _ = _.response.data;
            (_.response.status,
              _ && _.success,
              (_ = _.message
                ? _.message
                : _(`#Chat_Settings_Error_ServerError`)));
          } else _ = _(`#ConnectionTrouble_FailedToConnect`);
          ((this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${_}`),
            this.m_onComplete && this.m_onComplete(2, _.size));
        }),
        _
      );
    }
  }
  ClearFileUploadError() {
    (this.m_fileUploadProps.eUploadState == 3 ||
      this.m_fileUploadProps.eUploadState == 4 ||
      this.m_fileUploadProps.eUploadState == 5) &&
      this.Reset();
  }
  Reset() {
    this.SetFileToUpload(void 0);
  }
};
function _(_) {
  return new Promise((_) => {
    let _ = new FileReader();
    ((_.onload = () => {
      let _ = _,
        _ = _.result,
        _ = _(_),
        _ = new Blob([_], {
          type: _.type,
        });
      if (_) {
        let _ = _;
        ((_.lastModifiedDate = new Date(_.lastModified)),
          (_.name = _.name),
          (_ = _));
      }
      if (_.type.indexOf(`image`) == 0) {
        let _ = new Image();
        ((_.src = URL.createObjectURL(_)),
          (_.onload = (_) => {
            _({
              file: _,
              width: _.width,
              height: _.height,
            });
          }));
      } else
        _({
          file: _,
          width: 0,
          height: 0,
        });
    }),
      _.readAsArrayBuffer(_));
  });
}
function _(_) {
  let _ = new DataView(_),
    _ = 0,
    _ = 0,
    _ = [],
    _ = 0;
  if (_.getUint16(_) == 65496) {
    _ += 2;
    let _ = _.getUint16(_);
    for (_ += 2; _ < _.byteLength && _ < 131072;) {
      if (_ == 65505)
        ((_[_] = {
          recess: _,
          offset: _ - 2,
        }),
          (_ = _ + _.getUint16(_)),
          _++);
      else if (_ == 65498) break;
      ((_ += _.getUint16(_)), (_ = _.getUint16(_)), (_ += 2));
    }
    let _ = _.byteLength - _;
    if (
      (_.forEach((_) => {
        _ += _.offset - _.recess;
      }),
      _ === _.byteLength)
    )
      return _;
    let _ = new Uint8Array(_);
    if (_.length > 0) {
      let _ = 0;
      (_.forEach((_) => {
        let _ = _.offset - _.recess;
        (_.set(new Uint8Array(_.slice(_.recess, _.offset)), _), (_ += _));
      }),
        _.set(new Uint8Array(_.slice(_)), _));
    }
    return _.buffer;
  }
  return _;
}
var _ = `hF-pxs-0itk-`;
function _(_) {
  let { fileUploadManager: _ } = _,
    _ = (0, _.useRef)(null);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`input`, {
        type: `file`,
        accept: `.jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4`,
        style: {
          display: `none`,
        },
        name: `fileupload`,
        ref: _,
        onChange: (_) => {
          let _ = _.currentTarget.files;
          _?.length &&
            (_.SetImageFileToUpload(_[0]), (_.currentTarget.value = ``));
        },
      }),
      (0, _.jsx)(_, {
        type: `button`,
        title: _(`#Button_Upload`),
        onOKActionDescription: _(`#Button_Upload`),
        onClick: () => _.current?.click(),
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
var _ = `Gr87DKFYgoM-`,
  _ = `JXjA3KhE8FM-`,
  _ = `NUSJndH0DZk-`,
  _ = `zP9afGfRYvo-`,
  _ = `GF9VIV3xNR4-`,
  _ = `_0knFz24nWjk-`,
  _ = `iXyz2nxgJGk-`;
function _(_) {
  let { fileUploadManager: _ } = _,
    _ = _(() => _.file_upload_props.eUploadState);
  return _ == 1
    ? (0, _.jsx)(_, {
        fileUploadManager: _,
      })
    : _ == 3 || _ == 5 || _ == 4
      ? (0, _.jsx)(_, {
          fileUploadManager: _,
        })
      : _ == 0
        ? null
        : (0, _.jsx)(_, {
            fileUploadManager: _,
          });
}
function _(_) {
  let { fileUploadManager: _ } = _,
    _ = _.file;
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _.type.indexOf(`image`) != -1 &&
            (0, _.jsx)(`img`, {
              className: `EApVUU2WBV8-`,
              src: _.file_upload_data_url,
            }),
          _.type.indexOf(`video`) != -1 && (0, _.jsx)(_, {}),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [`'`, _.name, `'`],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            onClick: () => _.Reset(),
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            className: _,
            onClick: async () => {
              (await _.BeginFileUpload(), _.Reset());
            },
            children: _(`#Button_Upload`),
          }),
        ],
      })
    : null;
}
function _(_) {
  let { fileUploadManager: _ } = _,
    [_, _, _] = _(() => [
      _.file_upload_props.file,
      _.file_upload_props.displayFileName,
      _.file_upload_props.uploadProgress,
    ]),
    _ = _ ? _(`#Uploading_Item`, _ ?? ``) : ``,
    _ = {
      width: _ + `%`,
    };
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _(_, `DialogProgressBar_ProgressBarContainer`),
        children: (0, _.jsx)(`div`, {
          className: `DialogProgressBar_Value`,
          style: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { fileUploadManager: _ } = _,
    [_, _, _] = _(() => [
      _.file_upload_props.strErrorDescription,
      _.file_upload_props.displayFileName,
      _.file_upload_props.eUploadState,
    ]),
    _ = _ ? _(`#Uploading_Item`, _) : ``,
    _ = _ || _(`#Chat_Upload_ErrorCloud`);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: void 0,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: void 0,
        children: (0, _.jsxs)(_, {
          className: `DialogLayout_NoMinWidth`,
          children: [
            _ == 3 &&
              (0, _.jsx)(_, {
                onClick: async () => {
                  (await _.RetryFileUpload(), _.Reset());
                },
                children: _(`#Chat_Upload_ErrorAction_Retry`),
              }),
            (0, _.jsx)(_, {
              onClick: () => _.ClearFileUploadError(),
              children: _(`#Chat_Upload_ErrorAction_Close`),
            }),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let { showErrorInfo: _, event: _ } = _.context,
    _ = _?.clanSteamID.GetAccountID() ?? 0;
  return _ == 39049601 ||
    _ == 41316928 ||
    (_.EUNIVERSE == 2 && _ == 20) ||
    (_.EUNIVERSE == 1 && _ == 4)
    ? (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          clanAccountID: _,
        }),
      })
    : _
      ? (0, _.jsx)(`div`, {
          children: _(`#CloudUpload_NotSupport`),
        })
      : null;
}
function _(_) {
  let { clanAccountID: _ } = _,
    [_] = _.useState(() => new _(_(_)));
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        fileUploadManager: _,
      }),
      (0, _.jsx)(_, {
        fileUploadManager: _,
      }),
    ],
  });
}
function _(_) {
  return {
    PopulateBeginFileUploadFormData: (_) => {
      _.append(`clan_account_id`, `` + _);
    },
    PopulateCommitFileUploadFormData: (_) => {
      _.append(`clan_account_id`, `` + _);
    },
    GetBeginFileUploadURL: () =>
      _.STORE_BASE_URL + `saleaction/ajaxbeginfileupload`,
    GetCommitFileUploadURL: () =>
      _.STORE_BASE_URL + `saleaction/ajaxcommitfileupload`,
    LogFileUploadMessage: (_) => {
      console.log(`UploadFileButton: `, _);
    },
    GetMaxFileSizeMB: () => 100,
  };
}
function _(_, _, _) {
  let _ = _(_, _);
  return (0, _.useMemo)(() => {
    let _ = _.results.find((_) => _ == _.unique_id);
    return {
      bLoading: _.bLoading,
      success: _.success,
      userPollData: _,
      error_message: _.error_message,
      userPollSubmitData: _.userPollSubmitData,
    };
  }, [_, _]);
}
function _(_, _) {
  let _ = _({
    queryKey: _(_, _),
    queryFn: async () =>
      _(
        await (
          await fetch(_(_, _, !1), {
            method: `GET`,
            credentials: `include`,
          })
        ).json(),
      ),
    placeholderData: {
      results: [],
      success: 10,
      bLoading: !0,
      userPollSubmitData: {
        user_poll_option_votes: [],
      },
    },
  });
  return _.data
    ? _.data
    : {
        results: [],
        success: 10,
        bLoading: !0,
        userPollSubmitData: {
          user_poll_option_votes: [],
        },
      };
}
function _(_, _) {
  let _ = _();
  return _({
    mutationKey: [`useSetPartnerEventCastVoteUserPoll`, _.GetAccountID(), _],
    mutationFn: async (_) => {
      let _ = {
          votes: _.votes,
        },
        _ = await fetch(_(_, _, !0), {
          method: `POST`,
          headers: {
            "Content-Type": `application/json`,
          },
          body: JSON.stringify(_),
          credentials: `include`,
        });
      if (!_._) throw Error(`Server returned ${_.status}`);
      return await _.json();
    },
    onSuccess: (_, _) => {
      if (_.success == 1) _.setQueryData(_(_, _), () => _(_));
      else {
        let _ = _.getQueryData(_(_, _));
        if (_) {
          let _ = {
            ..._,
            success: _.success,
            error_message: _.error_message,
          };
          _.setQueryData(_(_, _), () => _);
        }
      }
    },
  });
}
function _(_) {
  return {
    ..._,
    bLoading: !1,
    userPollSubmitData: {
      user_poll_option_votes: _.results
        .map((_) => _.voted_option_id)
        .reduce((_, _) => _.concat(_), []),
    },
  };
}
function _(_, _) {
  return _(_.ConvertTo64BitString(), _);
}
function _(_, _) {
  return [`usePartnerEventUserPoll`, _, _];
}
function _(_, _, _) {
  return `${_.COMMUNITY_BASE_URL}partnerevents/${_.ConvertTo64BitString()}/userpoll/${_}/${_ ? `ajaxcastvote` : `ajaxloaddata`}/?origin=${encodeURIComponent(location.origin)}`;
}
var _ = 86400;
function _(_, _) {
  let _ = 0;
  return (
    (_ = _.poll_end_time
      ? _.poll_end_time
      : (_.rtime32_visibility_start ?? _.rtime32_start_time ?? 0) +
        (_.poll_end_days_since_start || _)),
    _
  );
}
function _(_, _) {
  return _(_, _) < Math.floor(Date.now() / 1e3);
}
var _ = (function (_) {
    return (
      (_.k_EPollResult_NotVisible = `not_visible`),
      (_.k_EPollResult_Visible_After_Vote = `after_vote`),
      (_.k_EPollResult_Visible_After_End = `after_end`),
      (_.k_EPollResult_Visible_After_Vote_Or_End = `after_vote_or_end`),
      (_.k_EPollResult_Visible_On_Demand = `on_demand`),
      _
    );
  })({}),
  _ = `_9pwqx3wPPl0-`,
  _ = `SYcP9f2C0A0-`,
  _ = `_8-JqaoUeIrU-`,
  _ = `gX1vgSE7KOY-`,
  _ = `J7-7G5hf-zs-`,
  _ = `V67d6h7AUaM-`,
  _ = `iOKAXvZ5zGQ-`,
  _ = `jI6bJkq9IsY-`,
  _ = `_8CpQgjnl5wA-`,
  _ = `iWo19OYwHnw-`,
  _ = `rsQw7--Iuuw-`,
  _ = `_4Jxy-DY8Fa4-`,
  _ = `zkekUd5e48c-`;
function _(_) {
  let _ = _.context.event,
    _ = _.context.showErrorInfo,
    _ = _(_.args, `poll_id`),
    _ = Number.parseInt(_),
    _ = _(() => _(_, _));
  if (!_ || !_)
    return _
      ? (0, _.jsx)(`div`, {
          className: _,
          children: _(`#UserPolls_Editor_FailToFindModel`, _),
        })
      : null;
  let _ = _(_.LANGUAGE);
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      userPollDef: _,
      lang: _,
      eventModel: _,
    }),
  });
}
function _(_, _) {
  return (_?.jsondata?.user_polls || [])?.find((_) => _.poll_id == _) || null;
}
function _(_) {
  let { eventModel: _, userPollDef: _, lang: _ } = _,
    { userPollData: _, ..._ } = _(_.clanSteamID, _.GID || `0`, _.poll_id),
    _ = !!(_.error_message && _.error_message?.length > 0),
    _ = _(_.clanSteamID, _.GID || `0`),
    [_, _] = (0, _.useState)(void 0),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = _?.option_results && _?.option_results.length > 0,
    _ = ((_ && _.voted_option_id?.length) || 0) > 0;
  return (
    (0, _.useEffect)(() => {
      !_ &&
        _.results_visibility_settings != _.k_EPollResult_NotVisible &&
        _ &&
        (_(
          {
            rtime32_visibility_start:
              _.GetVisibilityStartTimeAndDateUnixSeconds(),
            rtime32_start_time: _.GetStartTimeAndDateUnixSeconds(),
          },
          _,
        ) ||
          _) &&
        _(!0);
    }, [_, _, _, _, _]),
    (0, _.jsxs)(_, {
      ..._,
      children: [
        _.options?.map((_) => {
          let _ = _?.option_results.find((_) => _.unique_id == _.option_id),
            _ =
              _?.voted_option_id.includes(_.option_id || 0) ||
              _ === _.option_id;
          return (0, _.jsx)(
            _,
            {
              lang: _,
              pollOptionDef: _,
              bSelected: _,
              nPercentage: _ ? _?.percent : void 0,
              onClick: () => _(_.option_id),
              bDisableSelection:
                _.bLoading || !_?.vote_permitted || _ || _ || _,
            },
            `polloption` + _.option_id,
          );
        }),
        !!_ &&
          (0, _.jsx)(_, {
            onClick: async () => {
              if (!_.userPollSubmitData.user_poll_option_votes.includes(_)) {
                _(!0);
                let _ = {
                  user_poll_option_votes: [
                    ..._.userPollSubmitData.user_poll_option_votes,
                  ],
                };
                (_.user_poll_option_votes.push(_),
                  await _.mutateAsync({
                    votes: _,
                  }),
                  _(void 0),
                  _(!1));
              }
            },
            children: _(`#Button_Submit`),
          }),
        (_ || _.bLoading) &&
          (0, _.jsx)(_, {
            size: `small`,
            position: `center`,
            string: _.bLoading ? _(`#Loading`) : void 0,
          }),
        _ &&
          !_ &&
          !_ &&
          (0, _.jsx)(_, {
            onClick: () => _(!0),
            children: _(`#UserPolls_JustSeeResults`),
          }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `_5-sVz8IdIeU-`,
            children: _.error_message,
          }),
      ],
    })
  );
}
function _(_) {
  let { userPollDef: _, lang: _, eventModel: _, children: _ } = _,
    _ = _(),
    [_, _] = _(() => [
      _.GetWithFallback(_.localized_poll_description, _),
      _.user_poll_background,
    ]),
    _,
    _ = _.clanSteamID.GetAccountID();
  _ &&
    (_ = {
      backgroundImage: `url('${_(_, _)}')`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
    });
  let { userPollData: _ } = _(
      (0, _.useMemo)(() => _.InitFromClanID(_, _.EUNIVERSE), [_]),
      _.GID || `0`,
      _.poll_id,
    ),
    _ = _(
      {
        rtime32_visibility_start: _.GetVisibilityStartTimeAndDateUnixSeconds(),
        rtime32_start_time: _.GetStartTimeAndDateUnixSeconds(),
      },
      _,
    );
  return (0, _.jsx)(`div`, {
    className: _,
    style: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              children: _(`#UserPolls_status_N_Votes`, _(_?.total_votes || 0)),
            }),
            _?.display_message
              ? (0, _.jsx)(`div`, {
                  children: _?.display_message,
                })
              : (0, _.jsx)(`div`, {
                  children: _(`#UserPolls_status_N_TimeRemaining`, _(_ - _)),
                }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let {
      pollOptionDef: _,
      onClick: _,
      lang: _,
      bDisableSelection: _,
      bSelected: _,
      nPercentage: _,
    } = _,
    [_] = _(() => [_.GetWithFallback(_.localized_option, _)]),
    _ = Math.round((_ ?? 0) * 100),
    _ = !_ && !!_;
  return (0, _.jsxs)(`div`, {
    className: _({
      [_]: !0,
      [_]: _,
      [_]: _,
    }),
    role: `button`,
    "aria-pressed": !!_,
    "aria-disabled": !!_,
    tabIndex: _ ? 0 : void 0,
    onClick: _ ? _ : void 0,
    onKeyDown: _
      ? (_) => {
          (_.key === `Enter` || _.key === ` `) && (_.preventDefault(), _?.());
        }
      : void 0,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        style: {
          width: `${_}%`,
        },
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
          }),
          _ !== void 0 &&
            (0, _.jsxs)(`div`, {
              className: `gnLJxD9S9a4-`,
              children: [_, `%`],
            }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _,
          }),
        ],
      }),
    ],
  });
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.permission || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            permission: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            gameid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            client_instance_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            title: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            cellid: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtmp_token: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            thumbnail_upload: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            sysid: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            allow_webrtc: {
              _: 10,
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
      return `CBroadcast_BeginBroadcastSession_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            thumbnail_upload_address: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            thumbnail_upload_token: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            thumbnail_interval_seconds: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            heartbeat_interval_seconds: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CBroadcast_BeginBroadcastSession_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_EndBroadcastSession_Request`;
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
      return `CBroadcast_EndBroadcastSession_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            cellid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            as_rtmp: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            delay_seconds: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtmp_token: {
              _: 5,
              _: `0`,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            upload_ip_address: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            is_replay: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            sysid: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CBroadcast_StartBroadcastUpload_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.upload_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            upload_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            upload_address: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            broadcast_upload_id: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            enable_replay: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            http_address: {
              _: 7,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_StartBroadcastUpload_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            upload_token: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            upload_address: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            http_address: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            broadcast_upload_id: {
              _: 5,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            heartbeat_interval_seconds: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            is_rtmp: {
              _: 7,
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
      return `CBroadcast_BroadcastUploadStarted_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            broadcast_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_GetBroadcastStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gameid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gameid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            num_viewers: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            permission: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            is_rtmp: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            seconds_delay: {
              _: 6,
              _: _.readInt32,
              _: _.writeInt32,
            },
            is_publisher: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            thumbnail_url: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            update_interval: {
              _: 9,
              _: _.readInt32,
              _: _.writeInt32,
            },
            is_uploading: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            duration: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            is_replay: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            is_capturing_vod: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            is_store_whitelisted: {
              _: 14,
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
      return `CBroadcast_GetBroadcastStatus_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            broadcast_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_GetBroadcastThumbnail_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.thumbnail_url || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            thumbnail_url: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            update_interval: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            num_viewers: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            duration: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CBroadcast_GetBroadcastThumbnail_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            existing_broadcast_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            viewer_token: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            client_cell: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            watch_location: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            is_webrtc: {
              _: 7,
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
      return `CBroadcast_WatchBroadcast_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.response || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            response: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            mpd_url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            broadcast_id: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gameid: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            title: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            num_viewers: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            permission: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            is_rtmp: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            seconds_delay: {
              _: 9,
              _: _.readInt32,
              _: _.writeInt32,
            },
            viewer_token: {
              _: 10,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            hls_m3u8_master_url: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            heartbeat_interval: {
              _: 12,
              _: _.readInt32,
              _: _.writeInt32,
            },
            thumbnail_url: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            is_webrtc: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            webrtc_session_id: {
              _: 15,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            webrtc_offer_sdp: {
              _: 16,
              _: _.readString,
              _: _.writeString,
            },
            webrtc_turn_server: {
              _: 17,
              _: _.readString,
              _: _.writeString,
            },
            is_replay: {
              _: 18,
              _: _.readBool,
              _: _.writeBool,
            },
            duration: {
              _: 19,
              _: _.readInt32,
              _: _.writeInt32,
            },
            cdn_auth_url_parameters: {
              _: 20,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_WatchBroadcast_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            broadcast_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            viewer_token: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            representation: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CBroadcast_HeartbeatBroadcast_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            broadcast_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            viewer_token: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_StopWatchingBroadcast_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            approval_response: {
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
      return `CBroadcast_InviteToBroadcast_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.success || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            success: {
              _: 1,
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
      return `CBroadcast_InviteToBroadcast_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.permission || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            permission: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            gameid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            title: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            game_data_config: {
              _: 4,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_SendBroadcastStateToServer_Request`;
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
      return `CBroadcast_SendBroadcastStateToServer_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            state: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
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
      return `CBroadcast_BroadcastViewerState_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_WaitingBroadcastViewer_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            broadcast_relay_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            upload_result: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            too_many_poor_uploads: {
              _: 4,
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
      return `CBroadcast_StopBroadcastUpload_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_SessionClosed_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            num_viewers: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CBroadcast_BroadcastStatus_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_channel_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_channel_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            broadcast_channel_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            broadcast_channel_avatar: {
              _: 3,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_BroadcastChannelLive_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.thumbnail_upload_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            thumbnail_upload_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            thumbnail_broadcast_session_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            thumbnail_data: {
              _: 3,
              _: _.readBytes,
              _: _.writeBytes,
            },
            thumbnail_width: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            thumbnail_height: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CBroadcast_SendThumbnailToRelay_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_upload_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_upload_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            upload_result: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CBroadcast_NotifyBroadcastUploadStop_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcaster_steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcaster_steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_ViewerBroadcastInvite_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_NotifyBroadcastSessionHeartbeat_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            broadcast_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            client_ip: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            client_cell: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CBroadcast_GetBroadcastChatInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            view_url_template: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            flair_group_ids: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
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
      return `CBroadcast_GetBroadcastChatInfo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            message: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            instance_id: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            language: {
              _: 4,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            country_code: {
              _: 5,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_PostChatMessage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.persona_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            persona_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            in_game: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            result: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            cooldown_time_seconds: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CBroadcast_PostChatMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            flair: {
              _: 2,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_UpdateChatMessageFlair_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.result || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            result: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            chat_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            flair: {
              _: 3,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_UpdateChatMessageFlair_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            user_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            muted: {
              _: 3,
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
      return `CBroadcast_MuteBroadcastChatUser_Request`;
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
      return `CBroadcast_MuteBroadcastChatUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            user_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_RemoveUserChatText_Request`;
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
      return `CBroadcast_RemoveUserChatText_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.chat_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            chat_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            user_steamid: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readFixed64String,
              pbr: _.readPackedFixed64String,
              _: _.writeRepeatedFixed64String,
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
      return `CBroadcast_GetBroadcastChatUserNames_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.persona_names || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            persona_names: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
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
      return `CBroadcast_GetBroadcastChatUserNames_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steam_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steam_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            persona: {
              _: 2,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_GetBroadcastChatUserNames_Response_PersonaName`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            broadcast_session_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            first_segment: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            num_segments: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            clip_description: {
              _: 5,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_StartBuildClip_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_clip_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_StartBuildClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_clip_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_GetBuildClipStatus_Request`;
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
      return `CBroadcast_GetBuildClipStatus_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_clip_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            start_time: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_time: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            video_description: {
              _: 4,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_SetClipDetails_Request`;
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
      return `CBroadcast_SetClipDetails_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_clip_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CBroadcast_GetClipDetails_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_clip_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            video_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            channel_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            app_id: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid_broadcaster: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid_clipmaker: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            video_description: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            start_time: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            length_milliseconds: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            thumbnail_path: {
              _: 10,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_GetClipDetails_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_permission || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_permission: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            update_token: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            broadcast_delay: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            app_id: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            required_app_id: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            broadcast_chat_permission: {
              _: 6,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            broadcast_buffer: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            steamid: {
              _: 8,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            chat_rate_limit: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            enable_replay: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            is_partner_chat_only: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            wordban_list: {
              _: 12,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_SetRTMPInfo_Request`;
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
      return `CBroadcast_SetRTMPInfo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            _: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_GetRTMPInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_permission || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_permission: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            rtmp_host: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            rtmp_token: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            broadcast_delay: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            app_id: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            required_app_id: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            broadcast_chat_permission: {
              _: 7,
              _: _.readEnum,
              _: _.writeEnum,
            },
            broadcast_buffer: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            steamid: {
              _: 9,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            chat_rate_limit: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            enable_replay: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            is_partner_chat_only: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            wordban_list: {
              _: 13,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_GetRTMPInfo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.row_limit || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            row_limit: {
              _: 1,
              _: 100,
              _: _.readUint32,
              _: _.writeUint32,
            },
            start_time: {
              _: 2,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upload_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            session_id: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CBroadcast_GetBroadcastUploadStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.upload_stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            upload_stats: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
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
      return `CBroadcast_GetBroadcastUploadStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.upload_result || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            upload_result: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_stopped: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            seconds_uploaded: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            max_viewers: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            resolution_x: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            resolution_y: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            avg_bandwidth: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            total_bytes: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            app_id: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            total_unique_viewers: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            total_seconds_watched: {
              _: 11,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_started: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            upload_id: {
              _: 13,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            local_address: {
              _: 14,
              _: _.readString,
              _: _.writeString,
            },
            remote_address: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            frames_per_second: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_representations: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            app_name: {
              _: 18,
              _: _.readString,
              _: _.writeString,
            },
            is_replay: {
              _: 19,
              _: _.readBool,
              _: _.writeBool,
            },
            session_id: {
              _: 20,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CBroadcast_GetBroadcastUploadStats_Response_UploadStats`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.upload_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            upload_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_GetBroadcastViewerStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.viewer_stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            viewer_stats: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            country_stats: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
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
      return `CBroadcast_GetBroadcastViewerStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            time: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_viewers: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CBroadcast_GetBroadcastViewerStats_Response_ViewerStats`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.country_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country_code: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            num_viewers: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CBroadcast_GetBroadcastViewerStats_Response_CountryStats`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.webrtc_session_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            webrtc_session_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            started: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            offer: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            resolution_x: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            resolution_y: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            fps: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CBroadcast_WebRTCStartResult_Request`;
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
      return `CBroadcast_WebRTCStartResult_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.webrtc_session_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            webrtc_session_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_WebRTCStopped_Request`;
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
      return `CBroadcast_WebRTCStopped_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcaster_steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcaster_steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            webrtc_session_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            answer: {
              _: 3,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_WebRTCSetAnswer_Request`;
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
      return `CBroadcast_WebRTCSetAnswer_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sdp_mid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sdp_mid: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            sdp_mline_index: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            candidate: {
              _: 3,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_WebRTC_Candidate`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.webrtc_session_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            webrtc_session_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            candidate: {
              _: 2,
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
      return `CBroadcast_WebRTCAddHostCandidate_Request`;
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
      return `CBroadcast_WebRTCAddHostCandidate_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcaster_steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcaster_steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            webrtc_session_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            candidate: {
              _: 3,
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
      return `CBroadcast_WebRTCAddViewerCandidate_Request`;
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
      return `CBroadcast_WebRTCAddViewerCandidate_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcaster_steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcaster_steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            webrtc_session_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            candidate_generation: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CBroadcast_WebRTCGetHostCandidates_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.candidate_generation || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            candidate_generation: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            candidates: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
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
      return `CBroadcast_WebRTCGetHostCandidates_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_session_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_session_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_WebRTCNeedTURNServer_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cellid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cellid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
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
      return `CBroadcast_WebRTCLookupTURNServer_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.turn_server || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            turn_server: {
              _: 1,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_WebRTCLookupTURNServer_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_session_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_session_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            turn_server: {
              _: 2,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_WebRTCHaveTURNServer_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_session_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_session_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            webrtc_session_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            viewer_steamid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            viewer_token: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CBroadcast_WebRTCStart_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_session_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_session_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            webrtc_session_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            answer: {
              _: 3,
              _: _.readString,
              _: _.writeString,
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
      return `CBroadcast_WebRTCSetAnswer_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.broadcast_session_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            broadcast_session_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            webrtc_session_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            candidate: {
              _: 3,
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
      return `CBroadcast_WebRTCAddViewerCandidate_Notification`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.BeginBroadcastSession#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.BeginBroadcastSession = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.EndBroadcastSession#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.EndBroadcastSession = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.StartBroadcastUpload#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.StartBroadcastUpload = _;
  function _(_, _) {
    return _.SendNotification(
      `Broadcast.NotifyBroadcastUploadStop#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.NotifyBroadcastUploadStop = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.WatchBroadcast#1`, _(_, _, _), _, {
      ePrivilege: 2,
    });
  }
  _.WatchBroadcast = _;
  function _(_, _) {
    return _.SendNotification(`Broadcast.HeartbeatBroadcast#1`, _(_, _), {
      ePrivilege: 2,
    });
  }
  _.HeartbeatBroadcast = _;
  function _(_, _) {
    return _.SendNotification(`Broadcast.StopWatchingBroadcast#1`, _(_, _), {
      ePrivilege: 2,
    });
  }
  _.StopWatchingBroadcast = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.GetBroadcastStatus#1`, _(_, _, _), _, {
      ePrivilege: 2,
    });
  }
  _.GetBroadcastStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.GetBroadcastThumbnail#1`, _(_, _, _), _, {
      ePrivilege: 2,
    });
  }
  _.GetBroadcastThumbnail = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.InviteToBroadcast#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.InviteToBroadcast = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.SendBroadcastStateToServer#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SendBroadcastStateToServer = _;
  function _(_, _) {
    return _.SendNotification(
      `Broadcast.NotifyBroadcastSessionHeartbeat#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.NotifyBroadcastSessionHeartbeat = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.GetBroadcastChatInfo#1`, _(_, _, _), _, {
      ePrivilege: 2,
    });
  }
  _.GetBroadcastChatInfo = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.PostChatMessage#1`, _(_, _, _), _, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  _.PostChatMessage = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.UpdateChatMessageFlair#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  _.UpdateChatMessageFlair = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.MuteBroadcastChatUser#1`, _(_, _, _), _, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  _.MuteBroadcastChatUser = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.RemoveUserChatText#1`, _(_, _, _), _, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  _.RemoveUserChatText = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.GetBroadcastChatUserNames#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetBroadcastChatUserNames = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.StartBuildClip#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.StartBuildClip = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.GetBuildClipStatus#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetBuildClipStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.SetClipDetails#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.SetClipDetails = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.GetClipDetails#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetClipDetails = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.SetRTMPInfo#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SetRTMPInfo = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.GetRTMPInfo#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetRTMPInfo = _;
  function _(_, _) {
    return _.SendNotification(
      `Broadcast.NotifyWebRTCHaveTURNServer#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.NotifyWebRTCHaveTURNServer = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.WebRTCStartResult#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.WebRTCStartResult = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.WebRTCStopped#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.WebRTCStopped = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.WebRTCSetAnswer#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.WebRTCSetAnswer = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.WebRTCLookupTURNServer#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.WebRTCLookupTURNServer = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.WebRTCAddHostCandidate#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.WebRTCAddHostCandidate = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.WebRTCAddViewerCandidate#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.WebRTCAddViewerCandidate = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.WebRTCGetHostCandidates#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.WebRTCGetHostCandidates = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.GetBroadcastUploadStats#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetBroadcastUploadStats = _;
  function _(_, _, _) {
    return _.SendMsg(`Broadcast.GetBroadcastViewerStats#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetBroadcastViewerStats = _;
})((_ ||= {}));
var _;
(function (_) {
  ((_.NotifyBroadcastViewerStateHandler = {
    name: `BroadcastClient.NotifyBroadcastViewerState#1`,
    request: _,
  }),
    (_.NotifyWaitingBroadcastViewerHandler = {
      name: `BroadcastClient.NotifyWaitingBroadcastViewer#1`,
      request: _,
    }),
    (_.NotifyBroadcastUploadStartedHandler = {
      name: `BroadcastClient.NotifyBroadcastUploadStarted#1`,
      request: _,
    }),
    (_.NotifyStopBroadcastUploadHandler = {
      name: `BroadcastClient.NotifyStopBroadcastUpload#1`,
      request: _,
    }),
    (_.NotifySessionClosedHandler = {
      name: `BroadcastClient.NotifySessionClosed#1`,
      request: _,
    }),
    (_.NotifyViewerBroadcastInviteHandler = {
      name: `BroadcastClient.NotifyViewerBroadcastInvite#1`,
      request: _,
    }),
    (_.NotifyBroadcastStatusHandler = {
      name: `BroadcastClient.NotifyBroadcastStatus#1`,
      request: _,
    }),
    (_.NotifyBroadcastChannelLiveHandler = {
      name: `BroadcastClient.NotifyBroadcastChannelLive#1`,
      request: _,
    }),
    (_.SendThumbnailToRelayHandler = {
      name: `BroadcastClient.SendThumbnailToRelay#1`,
      request: _,
    }),
    (_.NotifyWebRTCNeedTURNServerHandler = {
      name: `BroadcastClient.NotifyWebRTCNeedTURNServer#1`,
      request: _,
    }),
    (_.NotifyWebRTCStartHandler = {
      name: `BroadcastClient.NotifyWebRTCStart#1`,
      request: _,
    }),
    (_.NotifyWebRTCSetAnswerHandler = {
      name: `BroadcastClient.NotifyWebRTCSetAnswer#1`,
      request: _,
    }),
    (_.NotifyWebRTCAddViewerCandidateHandler = {
      name: `BroadcastClient.NotifyWebRTCAddViewerCandidate#1`,
      request: _,
    }));
})((_ ||= {}));
async function _(_, _) {
  let _ = _.STORE_BASE_URL + `video/details/` + _ + `/0`,
    _ = await fetch(_, {
      credentials: `include`,
      signal: _,
    });
  if (!_._) throw Error(_ + ` answered ` + _.status);
  let _ = await _.json();
  if (_?.success != 1 && _?.success != `ready`)
    throw Error(`video/details on ` + _ + ` answered ` + _?.success);
  return {
    appid: _,
    video_url: _.video_url,
    bookmark: _.bookmark,
  };
}
function _(_) {
  return [`video`, `vod`, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: ({ signal: _ }) => _(_, _),
    retry: !1,
  };
}
function _(_) {
  let { data: _, isPending: _ } = _(_(_));
  return {
    vodInfo: _,
    bLoading: _,
  };
}
var _ = `IL9V7JEU9-w-`,
  _ = (_) => {
    let { vodInfo: _, bLoading: _ } = _(_.appid);
    return !_ && _.bPreviewMode
      ? (0, _.jsx)(`div`, {
          children: _(
            _ ? `#VODPlayer_Loading` : `#VODPlayer_ErrorLoading`,
            _.appid,
          ),
        })
      : (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              dynamicImport: async () =>
                (
                  await _(
                    async () => {
                      let { default: _ } = await import(`./chunk.js`);
                      return {
                        default: _,
                      };
                    },
                    __vite__mapDeps([
                      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
                    ]),
                    import.meta.url,
                  )
                ).default,
              nAppIDVOD: _.appid,
              watchLocation: 9,
              bStartPaused: !0,
            }),
          }),
        });
  };
function _(_) {
  let _ = _(_.args, `appid`, 0);
  return (0, _.jsx)(_, {
    appid: _,
    bPreviewMode: !!_.context.showErrorInfo,
  });
}
var _ = null;
function _() {
  return (
    (_ ??= new Map([
      [
        `remindme`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `vod`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `giveawayeligible`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `claimitem`,
        {
          Constructor: _,
          autocloses: !0,
        },
      ],
      [
        `packagepurchaseable`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `actiondialog`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `uploadfilebutton`,
        {
          Constructor: _,
          autocloses: !0,
        },
      ],
      [
        `userpolls`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `meetsteamsessiongroup`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `meetsteamscheduleview`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
    ])),
    _
  );
}
function _(_) {
  let { unAppID: _, widget: _, actions: _, bNominationsOpen: _ } = _,
    _ = _.rgCategories[0],
    { data: _ } = _({
      appid: _,
    }),
    { unNominatedAppID: _, bAnswered: _, Nominate: _ } = _(_.eCategoryID, _),
    { elDialogElement: _, BCanTakeAction: _ } = _(!1),
    {
      strButtonBGColor: _,
      strButtonTextColor: _,
      rgCategoryBackgrounds: _,
      strFallbackCategoryBGColor: _,
      strCategoryTextColor: _,
    } = _(),
    [_, _, _] = _(),
    _ = _?.[_.internal_name] ?? _;
  if (!_.bNominationsLive) return null;
  if (!_) return (0, _.jsx)(_, {});
  let _ = _(_(`nominations/`)),
    _ = _ == _,
    _ = _.rgCategories.length == 1,
    _ = _ && !_.bLaborOfLove;
  return (0, _.jsxs)(_, {
    strMainTitle: _.Localize(`#SteamAwards_EventMainTitle`),
    subtitle: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _
          ? _.Localize(`#SteamAwards_EventCallToAction`)
          : _.Localize(`#SteamAwards_EventVotingDateTeaser`, _()),
        _ &&
          (0, _.jsxs)(`a`, {
            href: _,
            className: `OvmdGGxF7yI-`,
            children: [
              `(`,
              _.Localize(`#EventDisplay_CallToAction_LearnMore`),
              `)`,
            ],
          }),
      ],
    }),
    headerText: _
      ? _
        ? _.Localize(`#SteamAwards_EventNominateGamePrompt_Long`, _?.name ?? ``)
        : (0, _.jsx)(`a`, {
            className: _,
            href: _,
            children: _.Localize(
              `#SteamAwards_EventNominateGamePrompt_NoCategory`,
              _?.name ?? ``,
            ),
          })
      : _.Localize(`#SteamAwards_Event_NominationsClosed`),
    footer:
      _ &&
      (0, _.jsx)(`a`, {
        href: _,
        children: _.Localize(`#SteamAwards_EventNominationAlternativeLinkText`),
      }),
    children: [
      !!(_ && (_ || _)) &&
        (0, _.jsx)(`div`, {
          style: {
            background: _,
          },
          className: _(`_3PBD2Ny8qmU-`, `Mk2aWQ2Aftw-`),
          children: (0, _.jsxs)(`div`, {
            className: `_4m3CBCeUxsA-`,
            children: [
              (0, _.jsx)(`div`, {
                style: {
                  background: _,
                  color: _,
                },
                className: _(`ZWyJOK8-Y-s-`, _ && `dI8MJHEluz8-`),
                children: (0, _.jsx)(_, {
                  controlled: !0,
                  className: _(`pcItHOGdUeY-`, _ && `dI8MJHEluz8-`),
                  checked: _,
                  onChange: (_) => {
                    _ && _() && (_ && _ != _ ? _() : _(_));
                  },
                  disabled: _,
                  color: _,
                  highlightColor: _,
                  label: (0, _.jsx)(`div`, {
                    className: `G0oOgi67V9A-`,
                    children: _.Localize(
                      _
                        ? `#SteamAwards_NominateWidget_CTA_PastTense`
                        : `#SteamAwards_NominateWidget_CTA`,
                      _.strTitle,
                    ),
                  }),
                }),
              }),
              (0, _.jsx)(`div`, {
                style: {
                  color: _,
                },
                className: `_2OYSMIxZIGc-`,
                children: _.strDescription,
              }),
            ],
          }),
        }),
      _,
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          strLocTokenInfix: `Nomination`,
          unCurrentAppID: _,
          unNewAppID: _,
          fnOnConfirm: () => _(_),
          closeModal: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { unAppID: _, widget: _, actions: _, bVotesOpen: _ } = _,
    { data: _ } = _({
      appid: _,
    }),
    _ = _(_());
  return (0, _.jsx)(_, {
    strMainTitle: _.Localize(`#SteamAwards_EventMainTitleCombined`),
    headerText: _
      ? _.Localize(`#SteamAwards_EventVoteForGamePrompt`, _?.name ?? ``)
      : (0, _.jsx)(`a`, {
          href: _,
          className: _,
          children: _.Localize(`#SteamAwards_Event_VotesClosed`),
        }),
    headerContent: (0, _.jsx)(`div`, {
      className: _,
      children: _.rgCategories.map((_) =>
        (0, _.jsx)(
          _,
          {
            unAppID: _,
            category: _,
            actions: _,
            bVotesOpen: _,
          },
          _.eCategoryID,
        ),
      ),
    }),
    footer: (0, _.jsx)(`a`, {
      href: _,
      children: _.Localize(`#EventDisplay_CallToAction_LearnMore`),
    }),
  });
}
function _(_) {
  let { unAppID: _, category: _, actions: _, bVotesOpen: _ } = _,
    { unVotedAppID: _, bAnswered: _, Vote: _ } = _(_.eCategoryID, _),
    { elDialogElement: _, BCanTakeAction: _ } = _(!0),
    { strFallbackCategoryBGColor: _, rgCategoryBackgrounds: _ } = _(),
    [_, _, _] = _(),
    _ = _?.[_.internal_name] ?? _,
    _ = _ == _;
  return !_ && !_
    ? null
    : (0, _.jsxs)(`div`, {
        style: {
          backgroundColor: _,
        },
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _(_, _),
                children: _.strTitle,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _.strDescription,
              }),
              _
                ? (0, _.jsx)(`button`, {
                    className: _,
                    children: (0, _.jsx)(`span`, {
                      className: _,
                      children: _.Localize(`#SteamAward_VoteButton_VotedText`),
                    }),
                  })
                : (0, _.jsx)(`button`, {
                    className: _,
                    onClick: () => {
                      _ && _() && (_ && _ != _ ? _() : _(_));
                    },
                    children: (0, _.jsx)(`span`, {
                      className: _,
                      children: _.Localize(`#SteamAward_VoteButton_PromptText`),
                    }),
                  }),
            ],
          }),
          _,
          (0, _.jsx)(_, {
            active: _,
            children: (0, _.jsx)(_, {
              strLocTokenInfix: `Vote`,
              unCurrentAppID: _,
              unNewAppID: _,
              fnOnConfirm: () => _(_),
              closeModal: _,
            }),
          }),
        ],
      });
}
