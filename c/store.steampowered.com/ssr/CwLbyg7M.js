var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.descriptors || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            descriptors: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            interactive_elements: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            official_id: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            esrb_online_music_not_rated: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            esrb_online_interactions_not_rated: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            descriptor_images: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `AppRatingAuxData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rating_agency || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rating_agency: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            rating: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            source: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            banned: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            required_age: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            use_age_gate: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            aux_data: {
              _: 7,
              _: _,
            },
            agency_rating: {
              _: 8,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `AppRating`;
    }
  },
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `tPinc5p8M44-`,
  _ = `_1pbnDhDgCTc-`,
  _ = `RRaSHSVb5-E-`,
  _ = `GhB5tIGE51k-`,
  _ = `_1-Xw1ot0vCY-`,
  _ = `uuRGRp0BzFs-`,
  _ = `RgWgy3QGSVM-`,
  _ = `YekcrrHEiY0-`,
  _ = _(),
  _ = 16;
function _(_) {
  let {
      appid: _,
      steamid: _,
      onClose: _,
      filteredCategoryIDs: _,
      onAdvanced: _,
    } = _,
    [_, _] = _.useState([]),
    _ = _(),
    { data: _ } = _({
      appid: _,
    }),
    _ =
      _ && _.name && _.visible
        ? _(`#Wishlist_Controls_Categories_Manageitem`, _?.name)
        : _(`#Wishlist_Controls_Categories_Manage`),
    { data: _ } = _(_),
    _ = !!_ && !!_ && _.length > 0,
    _ = _.useCallback(() => {
      _.mutate({
        rgCategoryIDs: _.reverse(),
      }),
        _();
    }, [_, _, _]);
  return (0, _.jsx)(_, {
    onClose: _,
    strTitle: _,
    navID: `AddWishlistCategoryDialog`,
    className: _,
    children: (0, _.jsxs)(_, {
      "flow-children": `column`,
      children: [
        (0, _.jsx)(_, {
          appid: _,
          steamid: _,
          onCategoryAdd: (_) => _([..._, _].slice(-3)),
          onCategoryRemove: (_) => {
            _ && _.has(_) && _();
          },
        }),
        (0, _.jsxs)(_, {
          className: _,
          children: [
            _ &&
              (0, _.jsx)(_, {
                onClick: _,
                children: _(`#Wishlist_Categories_Dialog_Advanced`),
              }),
            (0, _.jsx)(_, {
              onClick: _,
              children: _.Localize(`#Button_Done`),
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_, _, _, _) {
  let { data: _ } = _(_, _),
    { data: _ } = _(),
    _ = (_, _) => {
      let _ = new Set(_);
      return [
        ..._.map((_) => _.find((_) => _._ === _)).filter((_) => !!_),
        ..._.filter((_) => !_.has(_._)),
      ];
    };
  return _.useMemo(() => {
    if (!_) return [];
    let _ = new Set(_?.map((_) => _._) ?? []),
      _ = _.filter((_) => !_.has(_._));
    if (!_ || _.length === 0)
      return _(
        _.filter((_) => _.cItems > 0),
        _ ?? [],
      );
    let _ = _.toLocaleLowerCase(),
      _ = !1,
      _ = _.filter((_) => {
        let _ = _.name.toLocaleLowerCase();
        return (_ ||= _ === _), _.indexOf(_) > -1;
      });
    return (
      (_ = _(_, [])),
      _ ||
        _.unshift({
          _: `0`,
          name: _,
          cItems: 0,
          bNotificationOptIn: !1,
        }),
      _
    );
  }, [_, _, _, _]);
}
function _(_) {
  let { appid: _, steamid: _, onCategoryAdd: _, onCategoryRemove: _ } = _,
    [_, _] = _.useState(``),
    [_, _] = _.useState(void 0),
    _ = _(_);
  _.useEffect(() => {
    !_ && _.data && _(_.data);
  }, [_.data, _]);
  let _ = _(_),
    _ = async (_, _) => {
      if (!_ || _ === 0) return;
      let _ = await _.mutateAsync({
        appid: _,
        categoryName: _,
        categoryID: _ ?? `0`,
      });
      _.eresult === 1 &&
        _.category?._ &&
        (_(_.category._),
        _ &&
          !_.some((_) => _._ === _.category._) &&
          _((_) => [..._, _.category]));
    },
    _ = _(_),
    _ = (_) => {
      _ !== 0 &&
        (_.mutate({
          appid: _,
          categoryID: _,
        }),
        _(_));
    },
    _ = (_) => {
      _.stopPropagation(),
        _.preventDefault(),
        _ && _.length !== 0 && (_(``), _(_));
    },
    { data: _ } = _(_, _),
    _ = _(_),
    _ = _.length > 0,
    _ = _(_ ?? [], _, _, _),
    _ = _();
  return (0, _.jsxs)(_, {
    className: _,
    "flow-children": `column`,
    children: [
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#Wishlist_Controls_Categories_Header_Current`),
          }),
          (0, _.jsx)(_, {
            rgCategories: _ ?? [],
            header: null,
            eAction: _.k_ECategoryButtonAction_Remove,
            onClick: (_, _) => _(_),
            bMultiline: !0,
            bShowEmptyLabel: !0,
            containerClassName: _,
          }),
          !!_ && _.length >= _ && (0, _.jsx)(_, {}),
        ],
      }),
      (0, _.jsxs)(`form`, {
        className: _,
        onSubmit: _,
        children: [
          (0, _.jsx)(_, {
            autoFocus: !0,
            value: _,
            className: _,
            type: `search`,
            placeholder: _(`#Wishlist_Categories_Dialog_Search`),
            onChange: (_) => _(_.target.value),
            onOKActionDescription:
              _.length > 0 ? _(`#Wishlist_Categories_Dialog_Add`) : null,
            maxLength: 500,
          }),
          !_ &&
            (0, _.jsx)(`div`, {
              className: (0, _.default)(
                `-zWCU6qEIPk-`,
                _.length > 0 && `SJMQm-S37S0-`,
              ),
              children: (0, _.jsx)(_, {
                onClick: _,
                children: _(`#Wishlist_Categories_Dialog_Add`),
              }),
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#Wishlist_Controls_Categories_Header_Other`),
          }),
          (0, _.jsx)(_, {
            rgCategories: _,
            onClick: _,
            header: null,
            bMultiline: !0,
            bShowEmptyLabel: !0,
            containerClassName: _,
            eAction: _.k_ECategoryButtonAction_Add,
          }),
        ],
      }),
      _ &&
        (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsx)(`div`, {
              className: `_1-Xw1ot0vCY-`,
              children: _(`#Wishlist_Controls_Categories_Header_Suggested`),
            }),
            (0, _.jsx)(_, {
              rgCategories: _,
              onClick: _,
              header: null,
              bMultiline: !0,
              containerClassName: (0, _.default)(
                `uuRGRp0BzFs-`,
                `EJSAZQJSmgU-`,
              ),
            }),
          ],
        }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(`#Wishlist_Categories_Max_Per_App_Reached`, _),
  });
}
export { _, _ };
