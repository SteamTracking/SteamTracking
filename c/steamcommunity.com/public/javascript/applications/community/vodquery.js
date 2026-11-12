import { _, _ } from "./chunk~f025431ab0.js";
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
} from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~cc40f6af5e.js";
import { _, _, _, _, _, _ } from "./chunk~437071091c.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~75db1bf948.js";
import { _, _ } from "./chunk~05a38bc848.js";
import { _, _, _ } from "./chunk~2e61cac879.js";
import { _ } from "./chunk~92931c6310.js";
import { _ } from "./chunk~37e5316e27.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./chunk~cfb555d6e5.js";
import { _ } from "./chunk~008c00a198.js";
import { _, _, _, _, _ } from "./chunk~0111fcd096.js";
import { _ } from "./chunk~79ae1444d5.js";
import { _, _ } from "./chunk~8d2b90a325.js";
import { _ } from "./chunk~395a1fb77b.js";
import { _ } from "./chunk~0278ae6236.js";
import "./chunk~c55d6473b2.js";
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
  _,
  _,
  _,
} from "./main.js";
var _ = _(_(), 1),
  _ = _(_(), 1);
function _() {
  let _, _;
  return {
    promise: new Promise((_, _) => {
      ((_ = _), (_ = _));
    }),
    resolve: _,
    reject: _,
  };
}
function _(_) {
  return !!_;
}
function _(_) {
  return _
    ? _ === `game` ||
        _ === `dlc` ||
        _ === `software` ||
        _ === `music` ||
        _ === `application` ||
        _ === `demo` ||
        _ === `hardware` ||
        _ === `mod` ||
        _ == `video` ||
        _ === `beta` ||
        _ === `advertising`
    : !1;
}
function _(_) {
  return _ == null
    ? !1
    : _ == 0 ||
        _ == 4 ||
        _ == 6 ||
        _ == 11 ||
        _ == 1 ||
        _ == 10 ||
        _ == 2 ||
        _ == 7 ||
        _ == 12 ||
        _ == 14;
}
function _(_, _) {
  return _.filter((_) => !_.includes(_));
}
function _(_, _, _) {
  let _ = _.slice(0);
  return ((_[_] = _), _);
}
var _ = class extends _ {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(_, _, _) {
      (super(),
        (this.#e = _),
        (this.#r = _),
        (this.#n = []),
        (this.#i = []),
        (this.#t = []),
        this.setQueries(_));
    }
    onSubscribe() {
      this.listeners.size === 1 &&
        this.#i.forEach((_) => {
          _.subscribe((_) => {
            this.#d(_, _);
          });
        });
    }
    onUnsubscribe() {
      this.listeners.size || this.destroy();
    }
    destroy() {
      ((this.listeners = new Set()),
        this.#i.forEach((_) => {
          _.destroy();
        }));
    }
    setQueries(_, _, _) {
      ((this.#n = _),
        (this.#r = _),
        _.batch(() => {
          let _ = this.#i,
            _ = this.#u(this.#n);
          _.forEach((_) => _.observer.setOptions(_.defaultedQueryOptions, _));
          let _ = _.map((_) => _.observer),
            _ = _.map((_) => _.getCurrentResult()),
            _ = _.some((_, _) => _ !== _[_]);
          (_.length !== _.length || _) &&
            ((this.#i = _),
            (this.#t = _),
            this.hasListeners() &&
              (_(_, _).forEach((_) => {
                _.destroy();
              }),
              _(_, _).forEach((_) => {
                _.subscribe((_) => {
                  this.#d(_, _);
                });
              }),
              this.#f()));
        }));
    }
    getCurrentResult() {
      return this.#t;
    }
    getQueries() {
      return this.#i.map((_) => _.getCurrentQuery());
    }
    getObservers() {
      return this.#i;
    }
    getOptimisticResult(_, _) {
      let _ = this.#u(_).map((_) =>
        _.observer.getOptimisticResult(_.defaultedQueryOptions),
      );
      return [_, (_) => this.#l(_ ?? _, _), () => this.#c(_, _)];
    }
    #c(_, _) {
      let _ = this.#u(_);
      return _.map((_, _) => {
        let _ = _[_];
        return _.defaultedQueryOptions.notifyOnChangeProps
          ? _
          : _.observer.trackResult(_, (_) => {
              _.forEach((_) => {
                _.observer.trackProp(_);
              });
            });
      });
    }
    #l(_, _) {
      return _
        ? ((this.#a && this.#t === this.#s && _ === this.#o) ||
            ((this.#o = _), (this.#s = this.#t), (this.#a = _(this.#a, _(_)))),
          this.#a)
        : _;
    }
    #u(_) {
      let _ = new Map(this.#i.map((_) => [_.options.queryHash, _])),
        _ = [];
      return (
        _.forEach((_) => {
          let _ = this.#e.defaultQueryOptions(_),
            _ = _.get(_.queryHash);
          _
            ? _.push({
                defaultedQueryOptions: _,
                observer: _,
              })
            : _.push({
                defaultedQueryOptions: _,
                observer: new _(this.#e, _),
              });
        }),
        _
      );
    }
    #d(_, _) {
      let _ = this.#i.indexOf(_);
      _ !== -1 && ((this.#t = _(this.#t, _, _)), this.#f());
    }
    #f() {
      this.hasListeners() &&
        this.#a !== this.#l(this.#c(this.#t, this.#n), this.#r?.combine) &&
        _.batch(() => {
          this.listeners.forEach((_) => {
            _(this.#t);
          });
        });
    }
  },
  _ = class extends _ {
    constructor(_, _) {
      super(_, _);
    }
    bindMethods() {
      (super.bindMethods(),
        (this.fetchNextPage = this.fetchNextPage.bind(this)),
        (this.fetchPreviousPage = this.fetchPreviousPage.bind(this)));
    }
    setOptions(_, _) {
      super.setOptions(
        {
          ..._,
          behavior: _(),
        },
        _,
      );
    }
    getOptimisticResult(_) {
      return ((_.behavior = _()), super.getOptimisticResult(_));
    }
    fetchNextPage(_) {
      return this.fetch({
        ..._,
        meta: {
          fetchMore: {
            direction: `forward`,
          },
        },
      });
    }
    fetchPreviousPage(_) {
      return this.fetch({
        ..._,
        meta: {
          fetchMore: {
            direction: `backward`,
          },
        },
      });
    }
    createResult(_, _) {
      let { state: _ } = _,
        _ = super.createResult(_, _),
        { isFetching: _, isRefetching: _, isError: _, isRefetchError: _ } = _,
        _ = _.fetchMeta?.fetchMore?.direction,
        _ = _ && _ === `forward`,
        _ = _ && _ === `forward`,
        _ = _ && _ === `backward`,
        _ = _ && _ === `backward`;
      return {
        ..._,
        fetchNextPage: this.fetchNextPage,
        fetchPreviousPage: this.fetchPreviousPage,
        hasNextPage: _(_, _.data),
        hasPreviousPage: _(_, _.data),
        isFetchNextPageError: _,
        isFetchingNextPage: _,
        isFetchPreviousPageError: _,
        isFetchingPreviousPage: _,
        isRefetchError: _ && !_ && !_,
        isRefetching: _ && !_ && !_,
      };
    }
  };
function _({ queries: _, ..._ }, _) {
  let _ = _(_),
    _ = _(),
    _ = _(),
    _ = _.useMemo(
      () =>
        _.map((_) => {
          let _ = _.defaultQueryOptions(_);
          return ((_._optimisticResults = _ ? `isRestoring` : `optimistic`), _);
        }),
      [_, _, _],
    );
  (_.forEach((_) => {
    (_(_), _(_, _));
  }),
    _(_));
  let [_] = _.useState(() => new _(_, _, _)),
    [_, _, _] = _.getOptimisticResult(_, _.combine);
  (_.useSyncExternalStore(
    _.useCallback((_) => (_ ? _ : _.subscribe(_.batchCalls(_))), [_, _]),
    () => _.getCurrentResult(),
    () => _.getCurrentResult(),
  ),
    _.useEffect(() => {
      _.setQueries(_, _, {
        listeners: !1,
      });
    }, [_, _, _]));
  let _ = _.some((_, _) => _(_[_], _))
    ? _.flatMap((_, _) => {
        let _ = _[_];
        if (_) {
          let _ = new _(_, _);
          if (_(_, _)) return _(_, _, _);
          _(_, _) && _(_, _, _);
        }
        return [];
      })
    : [];
  if (_.length > 0) throw Promise.all(_);
  let _ = _.find((_, _) => {
    let _ = _[_];
    return (
      _ &&
      _({
        result: _,
        errorResetBoundary: _,
        throwOnError: _.throwOnError,
        query: _.getQueryCache().get(_.queryHash),
      })
    );
  });
  if (_?.error) throw _.error;
  return _(_());
}
function _(_, _) {
  return _(_, _, _);
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.activation_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            activation_code: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            purchase_platform: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            is_request_from_client: {
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
      return `CStore_RegisterCDKey_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.transactionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [18], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            transactionid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            packageid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            purchase_status: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            result_detail: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            transaction_time: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            payment_method: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            base_price: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            total_discount: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            tax: {
              _: 9,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            shipping: {
              _: 10,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            currency_code: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            country_code: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            error_headline: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            error_string: {
              _: 14,
              _: _.readString,
              _: _.writeString,
            },
            error_link_text: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            error_link_url: {
              _: 16,
              _: _.readString,
              _: _.writeString,
            },
            error_appid: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            line_items: {
              _: 18,
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
      return `CStore_PurchaseReceiptInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            line_item_description: {
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
      return `CStore_PurchaseReceiptInfo_LineItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.purchase_result_details || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            purchase_result_details: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            purchase_receipt_info: {
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
      return `CStore_RegisterCDKey_Response`;
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
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            country_code: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            favor_rarer_tags: {
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
      return `CStore_GetRecommendedTagsForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tags || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tags: {
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
      return `CStore_GetRecommendedTagsForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            weight: {
              _: 3,
              _: _.readFloat,
              _: _.writeFloat,
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
      return `CStore_GetRecommendedTagsForUser_Response_Tag`;
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
      return `CStore_GetMostPopularTags_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tags || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tags: {
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
      return `CStore_GetMostPopularTags_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
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
      return `CStore_GetMostPopularTags_Response_Tag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            tagids: {
              _: 2,
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
      return `CStore_GetLocalizedNameForTags_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tags || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tags: {
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
      return `CStore_GetLocalizedNameForTags_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            english_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            normalized_name: {
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
      return `CStore_GetLocalizedNameForTags_Response_Tag`;
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
            have_version_hash: {
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
      return `CStore_GetTagList_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.version_hash || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            version_hash: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            tags: {
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
      return `CStore_GetTagList_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
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
      return `CStore_GetTagList_Response_Tag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.os_win || _(_._()),
        _.Message.initialize(this, _, 0, -1, [10, 16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            os_win: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            os_mac: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            os_linux: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            full_controller_support: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            native_steam_controller: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            include_coming_soon: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            excluded_tagids: {
              _: 10,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            exclude_early_access: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            exclude_videos: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            exclude_software: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            exclude_dlc: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            exclude_soundtracks: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            featured_tagids: {
              _: 16,
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
      return `CStoreDiscoveryQueueSettings`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.queue_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            queue_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            rebuild_queue: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            settings_changed: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            settings: {
              _: 5,
              _: _,
            },
            rebuild_queue_if_stale: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            ignore_user_preferences: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            no_experimental_results: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            experimental_cohort: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            debug_get_solr_query: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            store_page_filter: {
              _: 12,
              _: _,
            },
            context: {
              _: 13,
              _: _,
            },
            data_request: {
              _: 14,
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
      return `CStore_GetDiscoveryQueue_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 8], null));
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
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            settings: {
              _: 3,
              _: _,
            },
            skipped: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            exhausted: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            experimental_cohort: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            debug_solr_query: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            store_items: {
              _: 8,
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
      return `CStore_GetDiscoveryQueue_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.queue_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            queue_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            store_page_filter: {
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
      return `CStore_GetDiscoveryQueueSettings_Request`;
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
            settings: {
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
      return `CStore_GetDiscoveryQueueSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.queue_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            queue_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            store_page_filter: {
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
      return `CStore_SkipDiscoveryQueueItem_Request`;
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
      return `CStore_SkipDiscoveryQueueItem_Response`;
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
            store_appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            beta_appid: {
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
      return `CStore_GetUserGameInterestState_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.owned || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 6, 7, 8, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            owned: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            wishlist: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            ignored: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            following: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            in_queues: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            queues_with_skip: {
              _: 6,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
            },
            queue_items_remaining: {
              _: 7,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            queue_items_next_appid: {
              _: 8,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            temporarily_owned: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            queues: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            ignored_reason: {
              _: 11,
              _: _.readInt32,
              _: _.writeInt32,
            },
            beta_status: {
              _: 12,
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
      return `CStore_GetUserGameInterestState_Response`;
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
            skipped: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            items_remaining: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            next_appid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            experimental_cohort: {
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
      return `CStore_GetUserGameInterestState_Response_InQueue`;
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
      return `CStore_GetGamesFollowed_Request`;
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
      return `CStore_GetGamesFollowed_Response`;
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
      return `CStore_GetGamesFollowedCount_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.followed_game_count || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            followed_game_count: {
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
      return `CStore_GetGamesFollowedCount_Response`;
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
            report_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            report: {
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
      return `CStore_ReportApp_Request`;
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
      return `CStore_ReportApp_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.primary_language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            primary_language: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            secondary_languages: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            platform_windows: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            platform_mac: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            platform_linux: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            timestamp_updated: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            hide_store_broadcast: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            review_score_preference: {
              _: 10,
              _: _.readEnum,
              _: _.writeEnum,
            },
            timestamp_content_descriptor_preferences_updated: {
              _: 11,
              _: _.readInt32,
              _: _.writeInt32,
            },
            provide_deck_feedback: {
              _: 12,
              _: _.readEnum,
              _: _.writeEnum,
            },
            additional_languages: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            game_frame_rate_reporting: {
              _: 14,
              _: _.readEnum,
              _: _.writeEnum,
            },
            disable_microtrailers: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            disable_animated_marketing: {
              _: 16,
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
      return `CStore_UserPreferences`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tags_to_exclude || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tags_to_exclude: {
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
      return `CStore_UserTagPreferences`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            timestamp_added: {
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
      return `CStore_UserTagPreferences_Tag`;
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
      return `CStore_GetStorePreferences_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.preferences || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            preferences: {
              _: 1,
              _: _,
            },
            tag_preferences: {
              _: 2,
              _: _,
            },
            content_descriptor_preferences: {
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
      return `CStore_GetStorePreferences_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.num_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            num_apps: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_top_friends: {
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
      return `CStore_GetTrendingAppsAmongFriends_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.trending_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            trending_apps: {
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
      return `CStore_GetTrendingAppsAmongFriends_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            steamids_top_friends: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            total_friends: {
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
      return `CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packages_to_reserve || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packages_to_reserve: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            packages_to_unreserve: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            country_code: {
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
      return `CStore_UpdatePackageReservations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reservation_status || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reservation_status: {
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
      return `CStore_UpdatePackageReservations_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.edistributor || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            edistributor: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            product_identifier: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            start_queue_position: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_estimated_notification: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            localization_token: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            accountid: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_created: {
              _: 7,
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
      return `CReservationPositionMessage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.settings || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            settings: {
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
      return `CStore_SetReservationPositionMessage_Request`;
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
      return `CStore_SetReservationPositionMessage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.edistributor || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            edistributor: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            product_identifier: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            start_queue_position: {
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
      return `CStore_DeleteReservationPositionMessage_Request`;
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
      return `CStore_DeleteReservationPositionMessage_Response`;
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
      return `CStore_GetAllReservationPositionMessages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.settings || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            settings: {
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
      return `CStore_GetAllReservationPositionMessages_Response`;
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
      return `CStore_ReloadAllReservationPositionMessages_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            browserid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            backfill_source: {
              _: 3,
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
      return `CStore_MigratePartnerLinkTracking_Notification`;
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
            feedback: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            feedback_details: {
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
      return `CSteamDeckCompatibility_SetFeedback_Request`;
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
      return `CSteamDeckCompatibility_SetFeedback_Response`;
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
      return `CSteamDeckCompatibility_ShouldPrompt_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.prompt || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            prompt: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            feedback_eligible: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            existing_feedback: {
              _: 3,
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
      return `CSteamDeckCompatibility_ShouldPrompt_Response`;
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
            demo_appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            allow_late_firing: {
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
      return `CStore_GetWishlistDemoEmailStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.can_fire || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            can_fire: {
              _: 1,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            time_staged: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            demo_release_date: {
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
      return `CStore_GetWishlistDemoEmailStatus_Response`;
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
            demo_appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            allow_late_firing: {
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
      return `CStore_QueueWishlistDemoEmailToFire_Request`;
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
      return `CStore_QueueWishlistDemoEmailToFire_Response`;
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
            queue_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            store_page_filter: {
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
      return `CStore_GetDiscoveryQueueSkippedApps_Request`;
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
      return `CStore_GetDiscoveryQueueSkippedApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.preferences || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            preferences: {
              _: 1,
              _: _,
            },
            tag_preferences: {
              _: 2,
              _: _,
            },
            content_descriptor_preferences: {
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
      return `CStore_StorePreferencesChanged_Notification`;
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
      return `CPlaytest_RequestInvite_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invites_remaining || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invites_remaining: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            status: {
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
      return `CPlaytest_RequestInvite_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invite_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_ids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            status: {
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
      return `CPlaytest_UpdateInvites_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invites_updated || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invites_updated: {
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
      return `CPlaytest_UpdateInvites_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invite_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_id: {
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
      return `CPlaytest_GetInvites_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invites || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invites: {
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
      return `CPlaytest_GetInvites_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invite_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid_inviter: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            status: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            time_created: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            app_name: {
              _: 6,
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
      return `CPlaytest_GetInvites_Response_Invite`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.limit || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            limit: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_before: {
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
      return `CPlaytest_GetInviteHistory_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invites || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invites: {
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
      return `CPlaytest_GetInviteHistory_Response`;
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
            steamid_invited: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            time_created: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            app_name: {
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
      return `CPlaytest_GetInviteHistory_Response_Invite`;
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
      return `CPlaytest_GetUserStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            results: {
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
      return `CPlaytest_GetUserStatus_Response`;
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
            status: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            invites_remaining: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            time_joined: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            packageid: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            invites_sent: {
              _: 6,
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
      return `CPlaytest_GetUserStatus_Response_AppStatus`;
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
      return `CPlaytest_GetInviteOptions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.ineligible_friends || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ineligible_friends: {
              _: 1,
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
      return `CPlaytest_GetInviteOptions_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Store.RegisterCDKey#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RegisterCDKey = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetRecommendedTagsForUser#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.GetRecommendedTagsForUser = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetMostPopularTags#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetMostPopularTags = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetLocalizedNameForTags#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetLocalizedNameForTags = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetTagList#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetTagList = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetDiscoveryQueue#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetDiscoveryQueue = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetDiscoveryQueueSettings#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetDiscoveryQueueSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.SkipDiscoveryQueueItem#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.SkipDiscoveryQueueItem = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetUserGameInterestState#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetUserGameInterestState = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetGamesFollowed#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.GetGamesFollowed = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetGamesFollowedCount#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.GetGamesFollowedCount = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetDiscoveryQueueSkippedApps#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetDiscoveryQueueSkippedApps = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.ReportApp#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.ReportApp = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetStorePreferences#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetStorePreferences = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetTrendingAppsAmongFriends#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetTrendingAppsAmongFriends = _;
  function _(_, _) {
    return _.SendNotification(`Store.MigratePartnerLinkTracking#1`, _(_, _), {
      ePrivilege: 1,
    });
  }
  _.MigratePartnerLinkTracking = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.UpdatePackageReservations#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.UpdatePackageReservations = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.GetWishlistDemoEmailStatus#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.GetWishlistDemoEmailStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.QueueWishlistDemoEmailToFire#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.QueueWishlistDemoEmailToFire = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.SetReservationPositionMessage#1`, _(_, _, _), _, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.SetReservationPositionMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Store.DeleteReservationPositionMessage#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.DeleteReservationPositionMessage = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Store.GetAllReservationPositionMessages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
      },
    );
  }
  _.GetAllReservationPositionMessages = _;
  function _(_, _) {
    return _.SendNotification(
      `Store.ReloadAllReservationPositionMessages#1`,
      _(_, _),
      {
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.ReloadAllReservationPositionMessages = _;
  function _(_, _, _) {
    return _.SendMsg(`Store.SetCompatibilityFeedback#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SetCompatibilityFeedback = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Store.ShouldPromptForCompatibilityFeedback#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.ShouldPromptForCompatibilityFeedback = _;
})((_ ||= {}));
var _;
(function (_) {
  _.NotifyStorePreferencesChangedHandler = {
    name: `StoreClient.NotifyStorePreferencesChanged#1`,
    request: _,
  };
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Playtest.RequestInvite#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RequestInvite = _;
  function _(_, _, _) {
    return _.SendMsg(`Playtest.UpdateInvites#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.UpdateInvites = _;
  function _(_, _, _) {
    return _.SendMsg(`Playtest.GetInvites#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.GetInvites = _;
  function _(_, _, _) {
    return _.SendMsg(`Playtest.GetInviteHistory#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetInviteHistory = _;
  function _(_, _, _) {
    return _.SendMsg(`Playtest.GetUserStatus#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.GetUserStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`Playtest.GetInviteOptions#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetInviteOptions = _;
})((_ ||= {}));
function _() {
  let _ = _(),
    _ = _.accountid,
    _ = _.country_code;
  return _(_(_, _, _));
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      if (!_) return _();
      let _ = _.Init(_);
      _.Body().set_country_code(_);
      let _ = await _.GetStorePreferences(_, _);
      if (!_.BSuccess())
        throw `Error loading store preferences: ${_.GetErrorMessage()}`;
      return _.Body().toObject();
    },
    staleTime: 36e5,
  };
}
function _() {
  let _ = _(),
    _ = _.accountid,
    _ = _.country_code;
  return _({
    ..._(_, _, _),
    select: (_) => _(_, _(_.LANGUAGE)),
  });
}
var _ = [4, 3];
function _(_, _) {
  let _ = [_];
  if (
    _ &&
    _.preferences &&
    _.preferences.primary_language !== void 0 &&
    _.preferences.primary_language !== -1
  ) {
    let { primary_language: _, secondary_languages: _ } = _.preferences;
    if ((_ !== _ && _.push(_), _)) {
      let _ = BigInt(_);
      for (let _ = 0; _ < 32; _++)
        (_ >> BigInt(_)) & BigInt(1) && _ != _ && _ != _ && _.push(_);
    }
  }
  return _;
}
function _() {
  return {
    preferences: {
      primary_language: _(_.LANGUAGE),
    },
    content_descriptor_preferences: {
      content_descriptors_to_exclude: _.map((_) => ({
        content_descriptorid: _,
      })),
    },
  };
}
function _(_) {
  return [`StorePreferencesQueryKey`, _ ?? 0];
}
var _ = `unUserdataVersion`;
function _() {
  return Number.parseInt(window.localStorage.getItem(_) || `0`);
}
function _(_, _, _) {
  let _ = _(),
    _ = `${_}dynamicstore/userdata/?id=${_}&cc=${_}&origin=${self.origin}`;
  return (_ && (_ += `&v=${_}`), _);
}
function _() {
  window.localStorage.setItem(
    _,
    (Number.parseInt(window.localStorage.getItem(_) || `0`) + 1).toString(),
  );
}
var _ = _();
async function _(_, _) {
  let _ = _(_.STORE_BASE_URL, _, _.country_code);
  return (await (await fetch(_)).json()).rgOwnedApps || [];
}
async function _(_, _, _) {
  return (await _(_, _)).includes(_);
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      if (!_) return new Set();
      let _ = await _(_, _);
      return new Set(_);
    },
    staleTime: 6e5,
  };
}
function _(_, _, _) {
  return {
    queryKey: [`AccountOwnsApp`, _, _],
    queryFn: async () => (_ ? await _(_, _, _) : !1),
    staleTime: 6e5,
  };
}
function _(_) {
  let _ = _(),
    _ = _.accountid,
    { data: _ } = _(_(_, _, _));
  return _ === void 0 ? void 0 : _;
}
function _(_) {
  let _ = _(),
    _ = _.accountid;
  return _.useCallback(
    (_) => {
      _.setQueryData(_(_), (_) =>
        _ ? new Set([..._.values(), ..._]) : _ ? new Set(_) : void 0,
      );
    },
    [_, _, _],
  );
}
function _(_) {
  return [`AccountOwnedApps`, _ ?? 0];
}
function _(_) {
  let { data: _ } = _(_ && `appid` in _ ? void 0 : _),
    { data: _ } = _(),
    _;
  return (
    _ && `appid` in _ ? (_ = [_.appid]) : _ && (_ = _.included_appids),
    _ === void 0 || _ === void 0 || _.length == 0
      ? {
          bIsOwned: void 0,
          unAppID: void 0,
        }
      : {
          bIsOwned: !_.some((_) => !_.has(_)),
          unAppID: _[0],
        }
  );
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clanid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clanid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            listid: {
              _: 2,
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
      return `CUserInterface_CuratorData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.domain || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            domain: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            controller: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            method: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            submethod: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            feature: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            depth: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            countrycode: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            webkey: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            is_client: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            curator_data: {
              _: 10,
              _: _,
            },
            is_likely_bot: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            is_utm: {
              _: 12,
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
      return `CUserInterface_NavData`;
    }
  },
  _ = (function (_) {
    return (
      (_[(_.AnyController = 0)] = `AnyController`),
      (_[(_.XboxController = 1)] = `XboxController`),
      (_[(_.Ps3Controller = 2)] = `Ps3Controller`),
      (_[(_.Ps4Controller = 3)] = `Ps4Controller`),
      (_[(_.Ps5Controller = 4)] = `Ps5Controller`),
      (_[(_.SwitchController = 5)] = `SwitchController`),
      (_[(_.SteamController = 6)] = `SteamController`),
      (_[(_.SteamDeckNeptune = 7)] = `SteamDeckNeptune`),
      (_[(_.SteamDeckGalileo = 8)] = `SteamDeckGalileo`),
      (_[(_.Switch2Controller = 9)] = `Switch2Controller`),
      (_[(_.SteamControllerTriton = 10)] = `SteamControllerTriton`),
      _
    );
  })({}),
  _ = {
    any_controller: 0,
    xbox_controller: 1,
    ps3_controller: 2,
    ps4_controller: 3,
    ps5_controller: 4,
    switch_controller: 5,
    steam_controller: 6,
    steam_deck_neptune: 7,
    steam_deck_galileo: 8,
    switch2_controller: 9,
    steam_controller_triton: 10,
  };
function _() {
  let _ = [..._.excluded_content_descriptors];
  return {
    bLoaded: !1,
    setWishlist: new Set(),
    rgWishlistInOrder: [],
    setOwnedApps: new Set(),
    setOwnedPackages: new Set(),
    setExcludedTagIDs: new Set(),
    rgExcludedTagIDsSorted: [],
    setExcludedContentDescriptors: new Set(_),
    rgExcludedContentDescriptors: _,
    setRecommendedApps: new Set(),
    rgRecommendedAppsInOrder: [],
    mapIgnoredApps: new Map(),
    mapIgnoredPackages: new Map(),
    setCuratorsFollowed: new Set(),
    rgCuratorsFollowed: [],
    setCuratorsIgnored: new Set(),
    mapRecommendingCuratorsForApp: new Map(),
    setPreferredPlatforms: new Set(),
    setHardwareUsed: new Set(),
    rgRecommendedTags: [],
    ePrimaryLanguage: -1,
    setSecondaryLanguages: new Set(),
    bShowFilteredUserReviewScores: !0,
    bAllowAppImpressions: !1,
  };
}
var _;
function _() {
  return (_ ??= _());
}
function _() {
  return !!_(`wants_mature_content`);
}
function _(_) {
  let _ = _();
  if (
    ((_.bLoaded = !0),
    _.rgCurators &&
      ((_.rgCuratorsFollowed = Object.keys(_.rgCurators).map(Number)),
      (_.setCuratorsFollowed = new Set(_.rgCuratorsFollowed))),
    _.rgCuratorsIgnored &&
      (_.setCuratorsIgnored = new Set(_.rgCuratorsIgnored.map(Number))),
    _.rgWishlist &&
      ((_.rgWishlistInOrder = _.rgWishlist.map(Number)),
      (_.setWishlist = new Set(_.rgWishlistInOrder))),
    _.rgOwnedApps && (_.setOwnedApps = new Set(_.rgOwnedApps.map(Number))),
    _.rgOwnedPackages &&
      (_.setOwnedPackages = new Set(_.rgOwnedPackages.map(Number))),
    _.rgIgnoredApps && (_.mapIgnoredApps = _(_.rgIgnoredApps)),
    _.rgIgnoredPackages && (_.mapIgnoredPackages = _(_.rgIgnoredPackages)),
    _.rgExcludedTags &&
      ((_.setExcludedTagIDs = new Set(
        _.rgExcludedTags.map((_) => Number(_.tagid)),
      )),
      (_.rgExcludedTagIDsSorted = Array.from(_.setExcludedTagIDs).sort())),
    _()
      ? ((_.setExcludedContentDescriptors = new Set()),
        (_.rgExcludedContentDescriptors = []))
      : _.rgExcludedContentDescriptorIDs &&
        ((_.rgExcludedContentDescriptors = _.rgExcludedContentDescriptorIDs.map(
          (_) => Number(_),
        )),
        (_.setExcludedContentDescriptors = new Set(
          _.rgExcludedContentDescriptors,
        ))),
    _.rgRecommendedApps &&
      ((_.rgRecommendedAppsInOrder = _.rgRecommendedApps.map(Number)),
      (_.setRecommendedApps = new Set(_.rgRecommendedAppsInOrder))),
    _.rgPreferredPlatforms &&
      (_.setPreferredPlatforms = new Set(_.rgPreferredPlatforms)),
    _.bAllowAppImpressions && (_.bAllowAppImpressions = _.bAllowAppImpressions),
    (_.bShowFilteredUserReviewScores = !!_.bShowFilteredUserReviewScores),
    _.rgPrimaryLanguage !== void 0 &&
      (_.ePrimaryLanguage = _.rgPrimaryLanguage),
    _.rgSecondaryLanguages &&
      (_.setSecondaryLanguages = new Set(_.rgSecondaryLanguages)),
    _.rgRecommendedTags &&
      (_.rgRecommendedTags = _.rgRecommendedTags.map((_) => _.tagid)),
    _.rgCurations)
  )
    for (let _ of Object.keys(_.rgCurations)) {
      let _ = [];
      for (let _ of Object.keys(_.rgCurations[_]))
        _.rgCurations[_][_] === 0 && _.push(Number(_));
      _.mapRecommendingCuratorsForApp.set(Number(_), _);
    }
  if (_.rgHardwareUsed)
    for (let _ of _.rgHardwareUsed) {
      let _ = _[_];
      _ !== void 0 && _.setHardwareUsed.add(_);
    }
  return _;
}
function _(_) {
  let _ = new Map();
  for (let [_, _] of Object.entries(_)) {
    let _ = Number(_);
    _ && _.set(_, Number(_));
  }
  return _;
}
var _ = `dynamicuserdata`;
function _(_) {
  return [_, _];
}
function _(_) {
  return _?.[0] == _;
}
async function _(_) {
  try {
    let _ = await fetch(_(_.STORE_BASE_URL, _, _.country_code), {
      credentials: `include`,
    });
    if (!_._) throw Error(`Server returned ${_.status}`);
    return _(await _.json());
  } catch (_) {
    return (
      console.warn(`LoadDynamicUserData`, _),
      _().ReportError(Error(`LoadDynamicUserData ${_}`), {
        bIncludeMessageInIdentifier: !0,
      }),
      _()
    );
  }
}
var _ = 6e4;
function _() {
  let _ = _.accountid;
  return {
    queryKey: _(_),
    queryFn: () => _(_),
    staleTime: (_) => (_.state.data?.bLoaded === !1 ? _ : 1 / 0),
    gcTime: 1 / 0,
    retry: !1,
    enabled: !0,
  };
}
function _() {
  return _(_());
}
function _(_) {
  let _ = _.getQueryData(_(_.accountid));
  return (_ && !_.bLoaded && _(_), _ ?? _());
}
function _(_) {
  let _ = _.getQueryState(_(_.accountid));
  _?.fetchStatus == `idle` &&
    Date.now() - _.dataUpdatedAt >= _ &&
    _.prefetchQuery(_());
}
async function _(_) {
  return _.fetchQuery(_());
}
function _(_, _) {
  _.setQueryData(_(_.accountid), (_) => {
    if (!_) return;
    let _ = _(_);
    return _
      ? {
          ..._,
          ..._,
        }
      : _;
  });
}
var _ = 3871,
  _ = 1664,
  _ = 1684,
  _ = 1667,
  _ = 3942,
  _ = 1774,
  _ = 1695,
  _ = 3839,
  _ = 1625,
  _ = 1685,
  _ = 1662,
  _ = 1663,
  _ = 1773,
  _ = 3834,
  _ = 3799,
  _ = 1654,
  _ = 1698,
  _ = 1721,
  _ = 1755,
  _ = 5716,
  _ = 4175,
  _ = 3978,
  _ = 12472,
  _ = 10695,
  _ = 4106,
  _ = 4231,
  _ = 1716,
  _ = 1702,
  _ = 5900,
  _ = 1741,
  _ = 1676,
  _ = 3959,
  _ = 4885,
  _ = 1775,
  _ = 1738,
  _ = 1687,
  _ = 4604,
  _ = 4434,
  _ = 9551,
  _ = 3835,
  _ = 1645,
  _ = 1720,
  _ = 4172,
  _ = 1666,
  _ = 4115,
  _ = 1628,
  _ = 4486,
  _ = 5395,
  _ = 4328,
  _ = 5613,
  _ = 4191,
  _ = 44868,
  _ = 6730,
  _ = 6129,
  _ = 1665,
  _ = 560542,
  _ = 5154,
  _ = 17305,
  _ = 21725,
  _ = 3813,
  _ = 31579,
  _ = 4474,
  _ = 1254546,
  _ = 18594,
  _ = 7038,
  _ = 1746,
  _ = 5727,
  _ = 791774,
  _ = 5652,
  _ = 615955,
  _ = 4102,
  _ = 3877,
  _ = 5537,
  _ = 5379,
  _ = 10235,
  _ = 220585,
  _ = 87918,
  _ = 1100687,
  _ = 26921,
  _ = 1100688,
  _ = 91114,
  _ = 7178,
  _ = 723991,
  _ = 1239876,
  _ = 23491;
function _(_) {
  let _ = _(),
    _ = _();
  return _(_(_.GetAnonymousServiceTransport(), _, _));
}
function _(_) {
  return `LocalizedTagNames2_${_}`;
}
function _(_) {
  let _ = {};
  return ((_?.tags || []).forEach(({ tagid: _, name: _ }) => (_[_] = _)), _);
}
function _(_, _, _) {
  return {
    queryKey: [`LocalizedTagNames`, _],
    queryFn: async () => {
      let _ = _(_),
        _ = await _.GetObject(_),
        _ = _.Init(_);
      (_.Body().set_language(_),
        _?.version_hash && _.Body().set_have_version_hash(_.version_hash));
      let _ = await _.GetTagList(_, _),
        _;
      if (_.GetEResult() == 1)
        ((_ = _.Body().toObject()), _ && _.StoreObject(_, _));
      else if (_.GetEResult() == 29) _ = _ || void 0;
      else if (_)
        (console.warn(
          `Couldn't load updated tag localization, will continue with what we have from storage.`,
        ),
          (_ = _));
      else throw _.GetErrorMessage();
      return _(_);
    },
    staleTime: 36e5,
  };
}
async function _(_, _, _) {
  return _.fetchQuery(_(_.GetAnonymousServiceTransport(), _, _));
}
function _(_, _) {
  let { data: _ } = _(_);
  return _ && _[_];
}
function _(_) {
  let { data: _ } = _(_);
  return !!_;
}
function _(_) {
  let { data: _ } = _(_);
  return (0, _.useMemo)(
    () => (_ ? (_.item_type == 0 ? [_.appid] : _.included_appids || []) : []),
    [_],
  );
}
function _(_) {
  if (!_?.length) return [];
  let _ = _.map((_) => _.creator_clan_account_id).filter((_) => !!_);
  return Array.from(new Set(_));
}
function _(_) {
  let { data: _ } = _(_);
  return (0, _.useMemo)(() => {
    if (_ && _.related_items && _.related_items.parent_appid)
      return {
        appid: _.related_items.parent_appid,
      };
  }, [_]);
}
function _(_) {
  return (0, _.useMemo)(
    () =>
      _
        ? {
            appid: _,
          }
        : void 0,
    [_],
  );
}
function _(_) {
  return (0, _.useMemo)(
    () =>
      _
        ? {
            packageid: _,
          }
        : void 0,
    [_],
  );
}
function _(_, _) {
  return _.classList
    ? !!_ && _.classList.contains(_)
    : (` ` + (_.className.baseVal || _.className) + ` `).indexOf(
        ` ` + _ + ` `,
      ) !== -1;
}
function _(_, _) {
  _.classList
    ? _.classList.add(_)
    : _(_, _) ||
      (typeof _.className == `string`
        ? (_.className = _.className + ` ` + _)
        : _.setAttribute(
            `class`,
            ((_.className && _.className.baseVal) || ``) + ` ` + _,
          ));
}
function _(_, _) {
  return _.replace(RegExp(`(^|\\s)` + _ + `(?:\\s|$)`, `g`), `$1`)
    .replace(/\s+/g, ` `)
    .replace(/^\s*|\s*$/g, ``);
}
function _(_, _) {
  _.classList
    ? _.classList.remove(_)
    : typeof _.className == `string`
      ? (_.className = _(_.className, _))
      : _.setAttribute(
          `class`,
          _((_.className && _.className.baseVal) || ``, _),
        );
}
var _ = _(_()),
  _ = {
    disabled: !1,
  },
  _ = _.createContext(null),
  _ = function (_) {
    return _.scrollTop;
  },
  _ = `unmounted`,
  _ = `exited`,
  _ = `entering`,
  _ = `entered`,
  _ = `exiting`,
  _ = (function (_) {
    _(_, _);
    function _(_, _) {
      var _ = _.call(this, _, _) || this,
        _ = _,
        _ = _ && !_.isMounting ? _.enter : _.appear,
        _;
      return (
        (_.appearStatus = null),
        _._
          ? _
            ? ((_ = _), (_.appearStatus = _))
            : (_ = _)
          : (_ = _.unmountOnExit || _.mountOnEnter ? _ : _),
        (_.state = {
          status: _,
        }),
        (_.nextCallback = null),
        _
      );
    }
    _.getDerivedStateFromProps = function (_, _) {
      return _._ && _.status === `unmounted`
        ? {
            status: _,
          }
        : null;
    };
    var _ = _.prototype;
    return (
      (_.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (_.componentDidUpdate = function (_) {
        var _ = null;
        if (_ !== this.props) {
          var _ = this.state.status;
          this.props._
            ? _ !== `entering` && _ !== `entered` && (_ = _)
            : (_ === `entering` || _ === `entered`) && (_ = _);
        }
        this.updateStatus(!1, _);
      }),
      (_.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (_.getTimeouts = function () {
        var _ = this.props.timeout,
          _ = (_ = _ = _),
          _,
          _;
        return (
          _ != null &&
            typeof _ != `number` &&
            ((_ = _.exit),
            (_ = _.enter),
            (_ = _.appear === void 0 ? _ : _.appear)),
          {
            exit: _,
            enter: _,
            appear: _,
          }
        );
      }),
      (_.updateStatus = function (_, _) {
        if ((_ === void 0 && (_ = !1), _ !== null)) {
          if ((this.cancelNextCallback(), _ === `entering`)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var _ = this.props.nodeRef
                ? this.props.nodeRef.current
                : _.default.findDOMNode(this);
              _ && _(_);
            }
            this.performEnter(_);
          } else this.performExit();
        } else
          this.props.unmountOnExit &&
            this.state.status === `exited` &&
            this.setState({
              status: _,
            });
      }),
      (_.performEnter = function (_) {
        var _ = this,
          _ = this.props.enter,
          _ = this.context ? this.context.isMounting : _,
          _ = this.props.nodeRef ? [_] : [_.default.findDOMNode(this), _],
          _ = _[0],
          _ = _[1],
          _ = this.getTimeouts(),
          _ = _ ? _.appear : _.enter;
        (!_ && !_) || _.disabled
          ? this.safeSetState(
              {
                status: _,
              },
              function () {
                _.props.onEntered(_);
              },
            )
          : (this.props.onEnter(_, _),
            this.safeSetState(
              {
                status: _,
              },
              function () {
                (_.props.onEntering(_, _),
                  _.onTransitionEnd(_, function () {
                    _.safeSetState(
                      {
                        status: _,
                      },
                      function () {
                        _.props.onEntered(_, _);
                      },
                    );
                  }));
              },
            ));
      }),
      (_.performExit = function () {
        var _ = this,
          _ = this.props.exit,
          _ = this.getTimeouts(),
          _ = this.props.nodeRef ? void 0 : _.default.findDOMNode(this);
        !_ || _.disabled
          ? this.safeSetState(
              {
                status: _,
              },
              function () {
                _.props.onExited(_);
              },
            )
          : (this.props.onExit(_),
            this.safeSetState(
              {
                status: _,
              },
              function () {
                (_.props.onExiting(_),
                  _.onTransitionEnd(_.exit, function () {
                    _.safeSetState(
                      {
                        status: _,
                      },
                      function () {
                        _.props.onExited(_);
                      },
                    );
                  }));
              },
            ));
      }),
      (_.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (_.safeSetState = function (_, _) {
        ((_ = this.setNextCallback(_)), this.setState(_, _));
      }),
      (_.setNextCallback = function (_) {
        var _ = this,
          _ = !0;
        return (
          (this.nextCallback = function (_) {
            _ && ((_ = !1), (_.nextCallback = null), _(_));
          }),
          (this.nextCallback.cancel = function () {
            _ = !1;
          }),
          this.nextCallback
        );
      }),
      (_.onTransitionEnd = function (_, _) {
        this.setNextCallback(_);
        var _ = this.props.nodeRef
            ? this.props.nodeRef.current
            : _.default.findDOMNode(this),
          _ = _ == null && !this.props.addEndListener;
        if (!_ || _) setTimeout(this.nextCallback, 0);
        else {
          if (this.props.addEndListener) {
            var _ = this.props.nodeRef
                ? [this.nextCallback]
                : [_, this.nextCallback],
              _ = _[0],
              _ = _[1];
            this.props.addEndListener(_, _);
          }
          _ != null && setTimeout(this.nextCallback, _);
        }
      }),
      (_.render = function () {
        var _ = this.state.status;
        if (_ === `unmounted`) return null;
        var _ = this.props,
          _ = _.children;
        (_._,
          _.mountOnEnter,
          _.unmountOnExit,
          _.appear,
          _.enter,
          _.exit,
          _.timeout,
          _.addEndListener,
          _.onEnter,
          _.onEntering,
          _.onEntered,
          _.onExit,
          _.onExiting,
          _.onExited,
          _.nodeRef);
        var _ = _(_, [
          `children`,
          `in`,
          `mountOnEnter`,
          `unmountOnExit`,
          `appear`,
          `enter`,
          `exit`,
          `timeout`,
          `addEndListener`,
          `onEnter`,
          `onEntering`,
          `onEntered`,
          `onExit`,
          `onExiting`,
          `onExited`,
          `nodeRef`,
        ]);
        return _.createElement(
          _.Provider,
          {
            value: null,
          },
          typeof _ == `function`
            ? _(_, _)
            : _.cloneElement(_.Children.only(_), _),
        );
      }),
      _
    );
  })(_.Component);
((_.contextType = _), (_.propTypes = {}));
function _() {}
((_.defaultProps = {
  _: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: _,
  onEntering: _,
  onEntered: _,
  onExit: _,
  onExiting: _,
  onExited: _,
}),
  (_.UNMOUNTED = _),
  (_.EXITED = _),
  (_.ENTERING = _),
  (_.ENTERED = _),
  (_.EXITING = _));
var _ = function (_, _) {
    return (
      _ &&
      _ &&
      _.split(` `).forEach(function (_) {
        return _(_, _);
      })
    );
  },
  _ = function (_, _) {
    return (
      _ &&
      _ &&
      _.split(` `).forEach(function (_) {
        return _(_, _);
      })
    );
  },
  _ = (function (_) {
    _(_, _);
    function _() {
      var _,
        _ = [...arguments];
      return (
        (_ = _.call.apply(_, [this].concat(_)) || this),
        (_.appliedClasses = {
          appear: {},
          enter: {},
          exit: {},
        }),
        (_.onEnter = function (_, _) {
          var _ = _.resolveArguments(_, _),
            _ = _[0],
            _ = _[1];
          (_.removeClasses(_, `exit`),
            _.addClass(_, _ ? `appear` : `enter`, `base`),
            _.props.onEnter && _.props.onEnter(_, _));
        }),
        (_.onEntering = function (_, _) {
          var _ = _.resolveArguments(_, _),
            _ = _[0],
            _ = _[1] ? `appear` : `enter`;
          (_.addClass(_, _, `active`),
            _.props.onEntering && _.props.onEntering(_, _));
        }),
        (_.onEntered = function (_, _) {
          var _ = _.resolveArguments(_, _),
            _ = _[0],
            _ = _[1] ? `appear` : `enter`;
          (_.removeClasses(_, _),
            _.addClass(_, _, `done`),
            _.props.onEntered && _.props.onEntered(_, _));
        }),
        (_.onExit = function (_) {
          var _ = _.resolveArguments(_)[0];
          (_.removeClasses(_, `appear`),
            _.removeClasses(_, `enter`),
            _.addClass(_, `exit`, `base`),
            _.props.onExit && _.props.onExit(_));
        }),
        (_.onExiting = function (_) {
          var _ = _.resolveArguments(_)[0];
          (_.addClass(_, `exit`, `active`),
            _.props.onExiting && _.props.onExiting(_));
        }),
        (_.onExited = function (_) {
          var _ = _.resolveArguments(_)[0];
          (_.removeClasses(_, `exit`),
            _.addClass(_, `exit`, `done`),
            _.props.onExited && _.props.onExited(_));
        }),
        (_.resolveArguments = function (_, _) {
          return _.props.nodeRef ? [_.props.nodeRef.current, _] : [_, _];
        }),
        (_.getClassNames = function (_) {
          var _ = _.props.classNames,
            _ = typeof _ == `string`,
            _ = _ && _ ? _ + `-` : ``,
            _ = _ ? `` + _ + _ : _[_];
          return {
            baseClassName: _,
            activeClassName: _ ? _ + `-active` : _[_ + `Active`],
            doneClassName: _ ? _ + `-done` : _[_ + `Done`],
          };
        }),
        _
      );
    }
    var _ = _.prototype;
    return (
      (_.addClass = function (_, _, _) {
        var _ = this.getClassNames(_)[_ + `ClassName`],
          _ = this.getClassNames(`enter`).doneClassName;
        (_ === `appear` && _ === `done` && _ && (_ += ` ` + _),
          _ === `active` && _ && _(_),
          _ && ((this.appliedClasses[_][_] = _), _(_, _)));
      }),
      (_.removeClasses = function (_, _) {
        var _ = this.appliedClasses[_],
          _ = _.base,
          _ = _.active,
          _ = _.done;
        ((this.appliedClasses[_] = {}),
          _ && _(_, _),
          _ && _(_, _),
          _ && _(_, _));
      }),
      (_.render = function () {
        var _ = this.props;
        _.classNames;
        var _ = _(_, [`classNames`]);
        return _.createElement(
          _,
          _({}, _, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      _
    );
  })(_.Component);
((_.defaultProps = {
  classNames: ``,
}),
  (_.propTypes = {}));
function _(_, _, _, _) {
  _.useEffect(() => {
    let _ = (_) => {
      _.key === _ && (_(_), _ && _.preventDefault(), _ && _.stopPropagation());
    };
    return (
      document.addEventListener(`keydown`, _),
      () => document.removeEventListener(`keydown`, _)
    );
  }, [_, _, _, _]);
}
var _ = `oliNocjo3ok-`,
  _ = `x3qY8Eev7UU-`,
  _ = `_3lYhLNSBOpE-`,
  _ = `tyYNnQMYYyw-`,
  _ = `-WD8g17w7iA-`;
function _() {
  let [_, _] = _.useState(void 0),
    _ = _.useCallback(() => _(void 0), []);
  return [
    _,
    (0, _.jsx)(_, {
      active: _ !== void 0,
      children: (0, _.jsx)(_, {
        closeModal: _,
        rgImageURL: _,
      }),
    }),
  ];
}
function _(_) {
  let { closeModal: _, rgImageURL: _ } = _,
    [_, _] = _.useState(0),
    _ = _?.length ?? 0,
    _ = _.useCallback(() => {
      _(_ == 0 ? _ - 1 : _ - 1);
    }, [_, _]),
    _ = _.useCallback(() => {
      _ && _ + 1 >= _ ? _(0) : _(_ + 1);
    }, [_, _, _]);
  return (0, _.jsxs)(_, {
    title: _(`#SaleTech_Screenshot_Viewer`),
    bAllowFullSize: !0,
    bOKDisabled: !0,
    closeModal: _,
    bHideCloseIcon: !0,
    modalClassName: _,
    children: [
      (0, _.jsx)(_, {
        index: _,
        numElements: _?.length || 0,
        fnForward: _,
        fnBackwards: _,
        fnClose: _,
        bCircular: !0,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`img`, {
          className: _,
          src: _?.[_],
          alt: ``,
        }),
      }),
    ],
  });
}
function _(_) {
  let {
    index: _,
    numElements: _,
    fnForward: _,
    fnBackwards: _,
    fnClose: _,
    bCircular: _,
  } = _;
  (_(`ArrowLeft`, () => _?.(), !0, !0),
    _(`Left`, () => _?.(), !0, !0),
    _(`ArrowRight`, () => _?.(), !0, !0),
    _(`Right`, () => _?.(), !0, !0),
    _(`Escape`, () => _ && _(), !0, !0),
    _(`Esc`, () => _ && _(), !0, !0));
  let _ = _ > 1;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`button`, {
              type: `button`,
              className: _(
                `-WD8g17w7iA-`,
                _ === 0 && !_ ? `apJ9YvEIT9k-` : null,
              ),
              onClick: _,
              "aria-label": _(`#Carousel_Prev`),
              children: (0, _.jsx)(_, {
                angle: 270,
              }),
            }),
            (0, _.jsx)(`button`, {
              type: `button`,
              className: _(
                `-WD8g17w7iA-`,
                _ === _ - 1 && !_ ? `apJ9YvEIT9k-` : null,
              ),
              onClick: _,
              "aria-label": _(`#Carousel_Next`),
              children: (0, _.jsx)(_, {
                angle: 90,
              }),
            }),
          ],
        }),
      (0, _.jsx)(`button`, {
        type: `button`,
        className: _,
        onClick: _,
        "aria-label": _(`#Button_Close`),
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
async function _(_) {
  let _ = {
      get_appids: !0,
      _: _.LANGUAGE,
    },
    _ = new URLSearchParams(_).toString(),
    _ = `${_.STORE_BASE_URL}curator/${_}/ajaxgetcreatorhomeinfo/?${_}`,
    _ = await fetch(_, {
      method: `GET`,
    });
  if (!_._) throw Error(`Server returned ${_.status}`);
  let _ = await _.json();
  return _.success == 1 ? _ : null;
}
function _(_) {
  return _(_(_));
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = await _(_);
      if (_) {
        let { success: _, err_msg: _, warning: _, warning_msg: _, ..._ } = _;
        return _;
      }
      return null;
    },
    enabled: !!_,
  };
}
function _(_) {
  return [`creatorhomebyaccount`, _];
}
function _(_, _) {
  if (_.vanity) {
    switch (_) {
      case `publisher`:
        return `${_.STORE_BASE_URL}publisher/${_.vanity}/`;
      case `franchise`:
        return `${_.STORE_BASE_URL}franchise/${_.vanity}/`;
    }
    return `${_.STORE_BASE_URL}developer/${_.vanity}/`;
  }
  return `${_.STORE_BASE_URL}curator/${_.creator_clan_id}/`;
}
var _ = `{STEAM_CLAN_IMAGE}`,
  _ = `{STEAM_CLAN_LOC_IMAGE}`;
function _(_) {
  let _ = _.toLowerCase();
  if (_.endsWith(`.jpg`) || _.endsWith(`.jpeg`)) return `image/jpeg`;
  if (_.endsWith(`.png`)) return `image/png`;
  if (_.endsWith(`.gif`)) return `image/gif`;
  if (_.endsWith(`.mp4`)) return `video/mp4`;
  if (_.endsWith(`.webm`)) return `video/webm`;
  if (_.endsWith(`.srt`)) return `text/srt`;
  if (_.endsWith(`.vtt`)) return `text/vtt`;
  if (_.endsWith(`.webp`)) return `image/webp`;
}
function _(_) {
  switch (_) {
    case 1:
      return `.jpg`;
    case 2:
      return `.gif`;
    case 3:
      return `.png`;
    case 5:
      return `.webm`;
    case 4:
      return `.mp4`;
    case 7:
      return `.srt`;
    case 6:
      return `.vtt`;
    case 10:
      return `.webp`;
  }
}
function _(_) {
  let _ = _(),
    _ = new Image();
  return (
    (_.onload = () => _.resolve(_)),
    (_.onerror = (_) => {
      (console.error(`LoadImage failed to load the image, details`, _),
        _.resolve(void 0));
    }),
    (_.src = _),
    _.promise
  );
}
function _(_) {
  let _ = _(),
    _ = document.createElement(`video`);
  return (
    (_.preload = `metadata`),
    _.addEventListener(`loadedmetadata`, () => _.resolve(_)),
    (_.onerror = (_) => {
      (console.error(`LoadVideo failed to load the video, details`, _),
        _.resolve(void 0));
    }),
    (_.src = _),
    _.promise
  );
}
function _(_) {
  return _.startsWith(`image/`);
}
function _(_) {
  return _.startsWith(`video/`);
}
async function _(_, _) {
  if (_) return _(URL.createObjectURL(_));
  {
    let _ = _(),
      _ = new FileReader();
    ((_.onload = () => _.resolve(_.result ?? void 0)),
      (_.onerror = () => {
        (console.error(
          `GetMediaElementFromFile failed to load the image, details`,
          _.error,
        ),
          _.resolve(void 0));
      }),
      _.readAsDataURL(_));
    let _ = await _.promise;
    return _ ? _(_.toString()) : void 0;
  }
}
function _(_) {
  return _
    ? _ instanceof HTMLVideoElement
      ? {
          width: _.videoWidth,
          height: _.videoHeight,
        }
      : {
          width: _.width,
          height: _.height,
        }
    : {
        width: 0,
        height: 0,
      };
}
function _(_, _) {
  if (!_) return _;
  let _ = new Set([
    `content-length`,
    `host`,
    `origin`,
    `referer`,
    `user-agent`,
    `cookie`,
    `set-cookie`,
    `connection`,
    `upgrade`,
  ]);
  for (let _ of _) _.has(_.name.toLowerCase()) || (_[_.name] = _.value);
  return _;
}
function _(_, _) {
  return `${_}/${_}`;
}
var _ = _.createContext({});
function _() {
  return _.useContext(_);
}
RegExp(`${_.replace(/[{}]/g, `\\$&`)}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`, `gi`);
function _(_, _, _ = 0) {
  return _(_, _, _, _());
}
async function _(_, _, _ = 0) {
  return _(_, _, _);
}
function _(_, _, _ = 0, _) {
  if (!_ || _.length == 0) return null;
  if (_?.startsWith(`{STEAM_CLAN_IMAGE}`))
    return _.ReplacementTokenToClanImageURL(_);
  if (_?.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)) {
    let _ = _.GetBaseURL(),
      _ = _.substring(_.length + 1),
      _ = parseInt(_.substring(0, _.indexOf(`/`))),
      _ = _.substring(_.indexOf(`/`) + 1),
      _ = _.GenerateURLFromHashAndExt(_, _);
    if (_?.[_(_, _)] === !1) return _;
    let _ = _.GetLocalizedClanImageFileNames(_, _).map(
      (_) => _ + _ + `/` + _ + `?t=` + _,
    );
    return (_.push(_), _);
  }
  return _;
}
var _ = {
    GetBaseURL() {
      return `${_.CLAN_CDN_ASSET_URL}images/`;
    },
    GetBaseURLV2() {
      return `${_.CLAN_CDN_ASSET_URL}locimages/`;
    },
    ReplacementTokenToClanImageURL(_) {
      return (
        (_ = _.replace(_, this.GetBaseURL())), _.replace(`http://`, `https://`)
      );
    },
    ExtractHashFromBBCodeURL(_) {
      let _ =
        /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
          _,
        );
      return _?.groups
        ? [_.groups.filename, parseInt(_.groups.clanid)]
        : [void 0, void 0];
    },
    GetExtensionString(_) {
      return (_.file_type == null ? null : _(_.file_type)) ?? `.jpg`;
    },
    GetHashAndExt(_) {
      return _ ? _.image_hash + this.GetExtensionString(_) : null;
    },
    GetThumbHashAndExt(_) {
      return _ ? _.thumbnail_hash + this.GetExtensionString(_) : null;
    },
    GetHashFromHashAndExt(_) {
      let _ = _.substring(_.lastIndexOf(`.`));
      return _.substring(0, _.length - _.length);
    },
    GetExtStringFromHashAndExt(_) {
      return _.substring(_.lastIndexOf(`.`));
    },
    GetLocalizedClanImageFileNames(_, _) {
      if (_ == null) return [];
      let _ = this.GetHashFromHashAndExt(_),
        _ = this.GetExtStringFromHashAndExt(_),
        _ = [_ + `/` + _(_) + _];
      return (_ == 4 && _.push(_ + `/` + _(_(_)) + _), _);
    },
    GenerateURLFromHashAndExt(_, _, _ = _.full) {
      return this.GenerateURLFromHashAndExtAndLang(_, _, _, -1, void 0);
    },
    GenerateURLFromHashAndExtAndLang(_, _, _ = _.full, _, _) {
      _ instanceof _ && (_ = _.GetAccountID());
      let _ = this.GetBaseURL(),
        _ = _ != null && _ != -1;
      if (_ == _.full && !_) return _ + _ + `/` + _;
      {
        let _ = _.substring(_.lastIndexOf(`.`)),
          _ = _.substring(0, _.length - _.length);
        return !_ || _ == 0 || _ != `localized_image_group`
          ? _ + _ + `/` + _ + _ + _
          : _ + _ + `/` + _ + `/` + _(_(_)) + _;
      }
    },
    GetHashAndExtFromURL(_) {
      let _ = this.GetBaseURL();
      return !_?.startsWith(_) ||
        ((_ = _.substring(_.length)), _.indexOf(`/`) == -1)
        ? null
        : ((_ = _.substring(_.indexOf(`/`) + 1)), _);
    },
    GenerateEditableURLFromHashAndExt(_, _, _) {
      let _ =
        _.COMMUNITY_BASE_URL +
        `gid/` +
        _.ConvertTo64BitString() +
        `/showclanimage/?image_hash_and_ext=` +
        _;
      return (_ && (_ += `&lang=` + _), _);
    },
    GetMimeType(_) {
      return _(_);
    },
    async AsyncGetImageResolution(_, _, _, _, _) {
      let _ =
          _ +
          this.GetExtensionString({
            file_type: _,
          }),
        _ = this.GenerateEditableURLFromHashAndExt(_, _);
      return await this.AsyncGetImageResolutionInternal(_, _, _);
    },
    async AsyncGetImageResolutionInternal(_, _, _) {
      let _ = _(),
        _ = new Image();
      ((_.crossOrigin = `anonymous`),
        (_.onerror = (_) => {
          let _ = {
            success: 2,
          };
          (_ ||
            ((_.err_msg =
              `Load fail on url ` + _ + ` with error: ` + _(_).strErrorMsg),
            console.error(_.err_msg)),
            (_.success = 2),
            _.resolve(_));
        }),
        (_.onload = () => {
          let _ = {
            success: 2,
          };
          ((_.width = _.width),
            (_.height = _.height),
            !(_.width > 0) || !(_.height > 0)
              ? (_(
                  !1,
                  `unexpected image resolution discovered for strURL: ` + _,
                ),
                (_.err_msg = `No resolution reported for url ` + _),
                _.resolve(_))
              : ((_.success = 1), _.resolve(_)));
        }),
        (_.src = _),
        _.token.promise.catch(() => {
          ((_.onload = () => {}),
            (_.onerror = () => {}),
            _.resolve({
              success: 52,
            }));
        }));
      let _,
        _ = new Promise((_, _) => {
          _ = setTimeout(() => _(), 1e4);
        }),
        _;
      try {
        _ = await Promise.race([_, _.promise]);
      } catch {
        _ = {
          success: 16,
          err_msg: `We timed out processing images`,
        };
      } finally {
        clearTimeout(_);
      }
      return _;
    },
    BIsClanImageVideo(_) {
      return _.file_type == 4 || _.file_type == 5;
    },
  },
  _ = (function (_) {
    return (
      (_.full = ``),
      (_.background_main = `_960x311`),
      (_.background_mini = `_480x156`),
      (_.capsule_main = `_400x225`),
      (_.spotlight_main = `_1054x230`),
      _
    );
  })({}),
  _ = [
    `localized_image_group`,
    `link_capsule`,
    `product_mobile_banner_override`,
    `product_banner_override`,
    `sale_section_title`,
    `schedule_track_art`,
    `localized_background_art`,
  ],
  _ = 4145017,
  _ = 35143931,
  _ = 39049601,
  _ = 45479024,
  _ = 41316928,
  _ = [_, _, _, 4, _],
  _ = _(_(), 1),
  _ = _(_()),
  _ = _(_(), 1);
function _(_, _, _) {
  return _ == 45559995
    ? `charts/topnewreleases/${_}`
    : _ == 45902273
      ? `charts/bestofyear/${_}`
      : _
        ? `sale/${_}`
        : `curator/${_}/sale/${_}`;
}
function _(_, _) {
  return _(_, ``, _).startsWith(`curator/`);
}
function _(_) {
  return _
    ? !!(
        _.related_items &&
        _.related_items.standalone_demo_appid &&
        _.related_items.standalone_demo_appid.length > 0 &&
        _.related_items.standalone_demo_appid[0]
      )
    : !1;
}
function _(_) {
  return !_ || !_.related_items?.standalone_demo_appid
    ? []
    : _.related_items?.standalone_demo_appid;
}
function _(_, _ = !1) {
  if (_)
    return _ && _(_)
      ? `${_.STORE_BASE_URL}app/${_(_)[0]}`
      : `${_.STORE_BASE_URL}${_.store_url_path}`;
}
function _() {
  window.location.href = `${_.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
}
var _ = `Og4Odc3VLI8-`,
  _ = `700px`,
  _ = {
    strMaxMobileWidth: _,
    strMaxResponsiveWidth: `910px`,
    strMaxTabletWidth: `1080px`,
  };
function _() {
  return window.innerWidth < parseInt(_);
}
function _() {
  let _ = _();
  return (
    _.useEffect(
      () => (
        window.addEventListener(`resize`, _),
        () => window.removeEventListener(`resize`, _)
      ),
      [_],
    ),
    window.innerWidth < parseInt(_)
  );
}
var _ = `xq-I5249Blg-`,
  _ = `_-8Ur6QivGZk-`,
  _ = 1.3,
  _ = 3,
  _ = 256;
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)({
      naturalWidth: 0,
      naturalHeight: 0,
      displayWidth: 0,
      displayHeight: 0,
    }),
    _ = (0, _.useRef)(null),
    [_, _] = _();
  return (
    (0, _.useEffect)(() => {
      _.naturalWidth > _.displayWidth * _ &&
        _.naturalHeight > _.displayHeight * _ &&
        _.naturalWidth > _ &&
        _.naturalWidth / _.naturalHeight < _ &&
        _(!0);
    }, [_]),
    _
      ? (0, _.jsxs)(`span`, {
          className: _,
          children: [
            _,
            (0, _.jsx)(`span`, {
              className: _,
              children: (0, _.jsx)(_, {}),
            }),
            (0, _.jsx)(`img`, {
              ..._,
              className: _({
                ...(_.className && {
                  [_.className]: !0,
                }),
              }),
              onClick: (_) => {
                _.src && _([_.src]);
              },
            }),
          ],
        })
      : (0, _.jsx)(`img`, {
          ..._,
          ref: _,
          onLoad: (_) => {
            if (!_.currentTarget.closest(`a`) && !_()) {
              let {
                naturalWidth: _,
                naturalHeight: _,
                width: _,
                height: _,
              } = _.currentTarget;
              _({
                naturalWidth: _,
                naturalHeight: _,
                displayWidth: _,
                displayHeight: _,
              });
            }
          },
        })
  );
}
function _(_) {
  let {
      className: _,
      srcs: _,
      lazyLoad: _,
      width: _,
      height: _,
      alt: _,
      crossOrigin: _,
    } = _,
    [_, _] = _.useState(_.length),
    [_, _] = _.useState(0);
  _.useEffect(() => {
    _ != _.length && (_(_.length), _(0));
  }, [_, _.length]);
  let _ = _.useCallback(() => {
    (_.onImageError && _.onImageError(_.srcs[_]),
      _ + 1 < _.srcs.length && _(_ + 1));
  }, [_, _]);
  return _.length == 0
    ? null
    : (0, _.jsx)(`img`, {
        className: _,
        src: _[_],
        crossOrigin: _,
        onError: _,
        loading: _ ? `lazy` : void 0,
        width: _,
        height: _,
        alt: _,
      });
}
function _(_) {
  let [_, _] = _.useState(!1),
    {
      className: _,
      src: _,
      lazyLoad: _,
      width: _,
      height: _,
      alt: _,
      crossOrigin: _,
    } = _;
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`p`, {
            children: _(`#Image_ErrorTitle`, _),
          }),
          (0, _.jsx)(`ul`, {
            children: (0, _.jsx)(`li`, {
              children: _(`#Image_Error_msg1`),
            }),
          }),
          (0, _.jsx)(`p`, {
            children: _(`#Image_Error_suggestion`),
          }),
        ],
      })
    : (0, _.jsx)(_, {
        className: _,
        src: _,
        onError: () => _(!0),
        crossOrigin: _,
        loading: _ ? `lazy` : void 0,
        width: _,
        height: _,
        alt: _,
      });
}
var _ = `_8Wp5WbqAbJA-`,
  _ = `K2PjXmYWvSg-`,
  _ = `UYfcYZDtfbs-`,
  _ = `O-TsWDon65A-`,
  _ = `E8DrK8oV4Hs-`,
  _ = `XTfMA1ObAn4-`,
  _ = `-Rv33oXsbT0-`,
  _ = `MN6Xv-pm6i8-`,
  _ = `uvLRAREPa4E-`,
  _ = `bdPmPtfuqIY-`,
  _ = `JCVuyoKAC-k-`,
  _ = `kjiBcsaqA8o-`,
  _ = `UFAsjplGzxc-`,
  _ = `vL-XYGsLedM-`,
  _ = `aCttqIa8NC4-`,
  _ = `-rXzhlz0w3Q-`,
  _ = `R9ivMzB3Gic-`,
  _ = `W9-byrNtR9Q-`,
  _ = `llT8dhJgnqw-`,
  _ = `kxs4VtommH4-`,
  _ = `ncKEDk26SHQ-`,
  _ = `VGzHGCF3I5o-`,
  _ = `fNtXEMzHz58-`,
  _ = `jrHvWWIOlw4-`,
  _ = `FOKKfGVYUDk-`,
  _ = `OClIuwfiMKQ-`,
  _ = `ZLlm68-AqhM-`,
  _ = `raYV6Y-MQ7I-`,
  _ = `IWFCYfhR05U-`,
  _ = `KtOQKgU1W5w-`,
  _ = `jXpKqo3-cWA-`,
  _ = `_-7gyAR9oUx4-`,
  _ = `GcBGxmj4uvE-`,
  _ = `QwN0eH2k0O0-`,
  _ = `sgCiKk3DUeg-`,
  _ = `N86EuolnWHc-`,
  _ = `A8oyzoRvWQ8-`,
  _ = `V7rq-SSC9xQ-`,
  _ = `pNXxwljIaD8-`,
  _ = `lsjYiHotCwA-`,
  _ = `iVV26V5rbpU-`,
  _ = `XosTQwEOBO0-`,
  _ = `ITE-CUK3U10-`,
  _ = `zMMJGDB8n-o-`,
  _ = `XPrPiD27WdE-`,
  _ = `R0sGSaFdUWo-`,
  _ = `PON8X0ze5G8-`,
  _ = `rfhpla0PGMA-`,
  _ = `OySWwOLLxFc-`,
  _ = `tkR3-aHpyI4-`,
  _ = `yyrI0Nka69I-`,
  _ = `D3fuhd6kG6I-`,
  _ = `Xk-QP-zS-18-`,
  _ = `I9cM1cZTYqc-`,
  _ = `LkW8eRLttsM-`,
  _ = `_4KL8m0wDedE-`,
  _ = `E3GBmOK5lMc-`,
  _ = `lOHW8g-YyoY-`,
  _ = `RQzfcqJK1Eg-`,
  _ = `_0MLgqm-W-nA-`,
  _ = `iwrzh-mg8hE-`,
  _ = `oZCOhIQDgxo-`,
  _ = `-G-r65tUoo0-`,
  _ = `qVhohSfcErA-`,
  _ = `GqNlebj1uds-`,
  _ = `oqhyMK1Krt0-`,
  _ = `GRw4r5TpD5s-`,
  _ = `mspnwaz0EAg-`,
  _ = `_06Z7Ej-J6OU-`,
  _ = `lO9B4Ti6gBk-`,
  _ = `lkVpo86MFuI-`,
  _ = `chTH6btujQ0-`,
  _ = `_96v5CHkkJJY-`,
  _ = `GxypNLhVZWE-`,
  _ = `_-4JZsb8K2FY-`,
  _ = `BD3vXqZ-6yI-`,
  _ = `l9by-6sJDpM-`,
  _ = `LCYi5cxHqgI-`,
  _ = `eASrfjoxe3o-`,
  _ = `WWolAsqP274-`,
  _ = `mP8HbLoIUo0-`,
  _ = `BuCaaYRb4Cg-`,
  _ = `bYNmqkeEJGc-`,
  _ = `_4xLBehMPMIU-`,
  _ = `XiCMCQH8z2U-`,
  _ = `_3wT3W-azVyE-`,
  _ = `EpyWQfQU-D4-`,
  _ = `FDvyBhD2AA0-`,
  _ = `RIck6AI1vX8-`,
  _ = `Sndyr6iqn8g-`,
  _ = `qUsoY9s6daM-`,
  _ = `v7ul8g8zqHs-`,
  _ = `aN31caRmRcQ-`,
  _ = `tobj1evrU4w-`,
  _ = `NqZ9uMSo13A-`,
  _ = `RAahmG4F6sc-`;
function _(_) {
  let {
      _: _,
      imageType: _,
      bPreferAssetWithoutOverride: _,
      strAdditionalClassName: _,
      bNoShadow: _,
    } = _,
    { storeItemAsset: _, storeItemDefaultInfo: _ } = _(_, _, _);
  if (_ === `library` || _ == `vertical`)
    return (0, _.jsx)(_, {
      _: _,
      bPreferAssetWithoutOverride: _,
      bNoShadow: _,
    });
  let _ = ``;
  switch (_) {
    case `main`:
      _ = _;
      break;
    default:
      _ = _;
  }
  if (_ === void 0 || !_)
    return (0, _.jsx)(`div`, {
      className: _(_, `CapsuleImageCtn`, _),
    });
  if (_ == null) return null;
  let _ = _(_, _ === `header`);
  return (0, _.jsx)(`div`, {
    className: _(_, `CapsuleImageCtn`, _),
    children: (0, _.jsx)(_, {
      lazyLoad: !0,
      srcs: _,
      className: _(_),
      alt: _.name,
    }),
  });
}
function _(_, _) {
  let _ = [];
  return (_ && _(_, _, _), _.filter((_) => !!_));
}
function _(_, _) {
  return {
    strStoreVerticalURL: _(_, `hero_capsule`),
    strLibraryVerticalURL: _(_, `library_capsule`),
  };
}
function _(_, _, _) {
  let _ = _(_, `header_2x`) ?? _(_, `header`),
    _ = _(_, `main_capsule_2x`) ?? _(_, `main_capsule`);
  _ ? _.push(_, _) : _.push(_, _);
}
var _ = `GL0tHV4bOk8-`,
  _ = `LPcYz6LIoNo-`,
  _ = `IPcip0GPG-I-`,
  _ = `GCeo-xmfx1A-`,
  _ = 6,
  _ = 1e3,
  _ = (function (_) {
    return (
      (_[(_.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (_[(_.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (_[(_.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      _
    );
  })({});
function _(_) {
  let { _: _, active: _, bIsHoverMode: _, eGrowOnActivate: _ } = _,
    { data: _ } = _(_),
    _ = _.useRef(0),
    _ = _.useRef(null);
  _.useLayoutEffect(() => {
    _ && _.current && (_.current.currentTime = _.current);
  }, [_]);
  let _ = (_) => {
      _.current = _.currentTarget.currentTime;
    },
    _ = _(_),
    _ = _ && !_ ? _ : void 0,
    _ = _(_),
    _ = _(_, !0);
  if ((_ && _.IN_MOBILE) || !_ || !_ || !_.visible) return null;
  if (_)
    return (0, _.jsx)(_, {
      _: _,
    });
  if (!_) return null;
  let _ = _.filter(_);
  if (_.length === 0)
    return _?.some(_)
      ? (0, _.jsx)(_, {
          _: _,
        })
      : _ && _.related_items?.parent_appid && (_.type == 1 || _.type == 12)
        ? (0, _.jsx)(_, {
            ..._,
            _: {
              appid: _.related_items.parent_appid,
            },
          })
        : null;
  let _;
  switch (_) {
    case 1:
      _ = _;
      break;
    case 2:
      _ = _;
  }
  let _ = _[0];
  return (0, _.jsx)(`video`, {
    className: (0, _.default)(_, _),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: _,
    playsInline: !0,
    onTimeUpdate: _,
    children: (0, _.jsx)(_, {
      trailer: _,
    }),
  });
}
function _(_) {
  return !!_.microtrailer && _.microtrailer.length > 0;
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    [_, _] = _.useState(0),
    _ = _.useMemo(
      () =>
        [...(_?.all_ages_screenshots || [])]
          .sort((_, _) => _.ordinal - _.ordinal)
          .slice(0, _),
      [_],
    );
  return (
    _(() => {
      _.length > 0 && _((_) => (_ + 1) % _.length);
    }, _),
    _.length == 0
      ? null
      : (0, _.jsx)(`div`, {
          className: _,
          children: _.map((_, _) =>
            (0, _.jsx)(
              `img`,
              {
                className: (0, _.default)(_, _ == _ && `_8Ek7qtVBxvk-`),
                src: _(_, `600x338`),
                alt: ``,
              },
              _.filename,
            ),
          ),
        })
  );
}
function _(_) {
  let { trailer: _ } = _;
  return !_ || !_.microtrailer
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: _.microtrailer?.map((_) =>
          _.IN_CLIENT && _.type == `video/mp4`
            ? null
            : (0, _.jsx)(
                `source`,
                {
                  src: _(_, _.filename || ``),
                  type: _.type,
                },
                _.filename,
              ),
        ),
      });
}
function _(_) {
  return _?.is_coming_soon
    ? _(
        _.coming_soon_display,
        _.steam_release_date,
        _.custom_release_date_message,
      )
    : _?.steam_release_date
      ? _(_.steam_release_date)
      : ``;
}
function _(_, _, _) {
  switch (_) {
    case `date_full`:
      return _(_);
    case `date_month`:
      return _(new Date(_ * 1e3));
    case `date_quarter`:
      return _(new Date(_ * 1e3));
    case `date_year`:
      return _(new Date(_ * 1e3));
    case `text_comingsoon`:
      return _ || _.Localize(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return _ || _.Localize(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function _(_) {
  if (!_) return ``;
  if (_ && _.is_coming_soon) {
    if (_.coming_soon_display) return _(_);
    if (_.custom_release_date_message) return _.custom_release_date_message;
    let _ = _.steam_release_date;
    return _ ? (_.is_abridged_release_date ? _(new Date(_ * 1e3)) : _(_)) : ``;
  }
  let _ = _.steam_release_date;
  return ((_ ||= _.original_release_date), _ ? _(_) : ``);
}
function _(_, _ = !1) {
  if (_.is_coming_soon && !_) return 0;
  let _ = _.steam_release_date;
  return ((_ ||= _.original_release_date), _);
}
var _ = 7;
function _(_, _) {
  if (!_) return !1;
  let _ = _(_);
  return _ ? !_.is_coming_soon && _ + _ * _.PerDay > _ : !1;
}
function _(_, _) {
  return !!(_ && _.is_coming_soon && _ && _.packageid);
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.context || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            context: {
              _: 2,
              _: _,
            },
            data_request: {
              _: 3,
              _: _,
            },
            gift_info: {
              _: 4,
              _: _,
            },
            gidshoppingcart: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidreplayoftransid: {
              _: 5,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            for_init_purchase: {
              _: 6,
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
      return `CCheckout_ValidateCart_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cart_items || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cart_items: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            estimated_totals: {
              _: 5,
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
      return `CCheckout_ValidateCart_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.line_item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            line_item_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            item_id: {
              _: 2,
              _: _,
            },
            store_item: {
              _: 3,
              _: _,
            },
            gift_info: {
              _: 4,
              _: _,
            },
            errors: {
              _: 5,
              _: _,
            },
            warnings: {
              _: 6,
              _: _,
            },
            subtotal: {
              _: 7,
              _: _,
            },
            price_when_added: {
              _: 8,
              _: _,
            },
            original_price: {
              _: 9,
              _: _,
            },
            coupon_applied: {
              _: 10,
              _: _,
            },
            coupon_discount: {
              _: 11,
              _: _,
            },
            can_purchase_as_gift: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            restrict_add_additional_to_cart: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            quantity: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            included_packageids: {
              _: 15,
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
      return `CCheckout_ValidateCart_Response_CartItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.owned_appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            owned_appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            duplicate_appids_in_cart: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            unavailable_in_country: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            invalid_coupon: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            invalid_coupon_for_item: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            coupon_exclusive_promo: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            cannot_purchase_as_gift: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            invalid_item: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            too_many_in_cart: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            has_existing_billing_agreement: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            missing_must_own_appids: {
              _: 11,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            adult_content_restricted: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            commercial_license_restricted: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            gift_not_valid_for_recipient_region: {
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
      return `CCheckout_ValidateCart_Response_CartItem_Errors`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.owned_appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            owned_appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            owned_appids_extra_copy: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            appids_in_mastersub: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            price_has_changed: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            non_refundable: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            gift_recipient_higher_price: {
              _: 6,
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
      return `CCheckout_ValidateCart_Response_CartItem_Warnings`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cart_appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cart_appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            mastersub_appid: {
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
      return `CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.subtotal || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            subtotal: {
              _: 1,
              _: _,
            },
            wallet_balance: {
              _: 2,
              _: _,
            },
            exceeding_wallet_balance: {
              _: 3,
              _: _,
            },
            remaining_wallet_balance: {
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
      return `CCheckout_ValidateCart_Response_EstimatedTotals`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_ids: {
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
      return `CCheckout_GetFriendOwnershipForGifting_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.ownership_info || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ownership_info: {
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
      return `CCheckout_GetFriendOwnershipForGifting_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            already_owns: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            wishes_for: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            partial_owns_appids: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            partial_wishes_for: {
              _: 5,
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
      return `CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_id: {
              _: 1,
              _: _,
            },
            friend_ownership: {
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
      return `CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_id: {
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
      return `CCheckout_AddFreeLicense_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageids_added || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageids_added: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            appids_added: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            purchase_result_detail: {
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
      return `CCheckout_AddFreeLicense_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Checkout.ValidateCart#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.ValidateCart = _;
  function _(_, _, _) {
    return _.SendMsg(`Checkout.GetFriendOwnershipForGifting#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetFriendOwnershipForGifting = _;
  function _(_, _, _) {
    return _.SendMsg(`Checkout.AddFreeLicense#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.AddFreeLicense = _;
})((_ ||= {}));
function _(_) {
  let _ = _(),
    _ = _.accountid;
  return _.useCallback(
    (_) => {
      _.setQueryData(_(_), (_) =>
        _ ? new Set([..._.values(), ..._]) : _ ? new Set(_) : void 0,
      );
    },
    [_, _, _],
  );
}
function _(_) {
  return [`AccountOwnedPackages`, _ ?? 0];
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: () => _(_, _),
    onSuccess(_) {
      let [
        _,
        { packageids_added: _, appids_added: _, purchase_result_detail: _ },
      ] = _;
      (_ && _(_), _ && _(_));
    },
  });
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_item_id(_.fromObject(_));
  let _ = await _.AddFreeLicense(_, _);
  return [_.GetEResult(), _.Body().toObject()];
}
var _ = _.createContext({
    bForceShowCompatInfo: !1,
    bSteamOS: !1,
    bSteamDeck: !1,
    bSteamMachine: !1,
    bSteamFrame: !1,
  }),
  _ = () => _.useContext(_);
function _() {
  let {
    bForceShowCompatInfo: _,
    bSteamDeck: _,
    bSteamOS: _,
    bSteamMachine: _,
    bSteamFrame: _,
  } = _();
  return (_ && _) || _ || _()?.FORCED_DISPLAY_MODE == `steamdeck`
    ? [!0, 1]
    : (_ && _) || _()?.FORCED_DISPLAY_MODE == `steammachine`
      ? [!0, 3]
      : _ && _
        ? [!0, 4]
        : _
          ? [!0, 2]
          : [!1, 0];
}
function _(_) {
  let { _: _, eHWCompat: _, className: _ } = _,
    { data: _ } = _(_);
  if (!_) return null;
  switch (_) {
    case 1:
      return (0, _.jsx)(_, {
        category: _.steam_deck_compat_category,
        className: _,
      });
    case 4:
      return (0, _.jsx)(_, {
        category: _.steam_frame_compat_category,
        className: _,
      });
    case 3:
      return (0, _.jsx)(_, {
        category: _.steam_machine_compat_category,
        className: _,
      });
    case 2:
      return (0, _.jsx)(_, {
        category: _.steam_os_compat_category,
        className: _,
      });
    default:
      return null;
  }
}
var _ = (_) => {
    let { category: _ = 0, className: _ } = _,
      _ = _(_);
    return (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    });
  },
  _ = (_) => {
    let { category: _ = 0, className: _ } = _,
      _ = _(_);
    return (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    });
  },
  _ = (_) => {
    let { category: _ = 0, className: _ } = _,
      _ = _(_);
    return (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    });
  },
  _ = (_) => {
    let { category: _ = 0, elControllerSupport: _ } = _,
      _ = _(_);
    return (0, _.jsxs)(`div`, {
      className: _(_, _.className),
      children: [
        _,
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    });
  };
function _(_) {
  let { eDisplay: _, storeItemPlatform: _, className: _ } = _;
  return _ == 1
    ? (0, _.jsx)(_, {
        category: _?.steam_deck_compat_category ?? 0,
        className: _,
      })
    : _ == 3
      ? (0, _.jsx)(_, {
          category: _?.steam_machine_compat_category ?? 0,
          className: _,
        })
      : _ == 2
        ? (0, _.jsx)(_, {
            category: _?.steam_os_compat_category ?? 0,
            className: _,
          })
        : _ == 4
          ? (0, _.jsx)(_, {
              category: _?.steam_frame_compat_category ?? 0,
              className: _,
            })
          : null;
}
var _ = {
    1: _,
    2: _,
    3: _,
    0: _,
  },
  _ = {
    0: _,
    1: _,
    2: _,
  };
function _(_) {
  return _[_] || _;
}
function _(_) {
  return _[_] || _;
}
var _ = `x33TRfA9NLE-`,
  _ = `UWpi28gEMso-`,
  _ = `K2BGbCx37Cg-`,
  _ = `wnVw5QEjvtw-`,
  _ = `-a-3HG4gESE-`,
  _ = `-OQDE-IeSKo-`,
  _ = `iVqIvGU08cQ-`,
  _ = `vO3l7X14-dI-`,
  _ = `n1QMIymiV0w-`,
  _ = `ebRw2SGSkSY-`,
  _ = `qN5ejX3iSmI-`,
  _ = `_7Xd-p6v3h-U-`,
  _ = `_6uN5TDmIPak-`,
  _ = `_4UX-whX3nGs-`,
  _ = `f0EapRMh-PI-`,
  _ = `q4JwMxF0b-8-`,
  _ = `otywAXtYosA-`;
function _(_) {
  let { _: _, ..._ } = _,
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    ..._,
    platforms: _,
  });
}
_.memo(function (_) {
  let { platforms: _ } = _;
  if (!_) return null;
  let { windows: _, mac: _, steamos_linux: _, vr_support: _ } = _;
  return (0, _.jsxs)(`span`, {
    className: _,
    children: [
      _ && (0, _.jsx)(_, {}),
      _ && (0, _.jsx)(_, {}),
      _ && (0, _.jsx)(_, {}),
      _?.vrhmd && (0, _.jsx)(_, {}),
    ],
  });
});
var _ = _.memo(function (_) {
  let { platforms: _, eHWCompat: _, size: _ = `small` } = _,
    _;
  if (_ == 0)
    return (
      _(!1, `SteamHWCompatIndicator called for k_ESteamHWCompatibility_None`),
      null
    );
  if (_ == 2) {
    let _ = _?.steam_os_compat_category;
    if (_ === void 0) return null;
    switch (_) {
      case 2:
        _ = _;
        break;
      case 1:
        _ = _;
        break;
      case 0:
        _ = _;
        break;
      default:
        return (_(_, `Unhandled steam os category: ${_}`), null);
    }
  } else {
    let _;
    if (
      ((_ =
        _ == 3
          ? _?.steam_machine_compat_category
          : _ == 4
            ? _?.steam_frame_compat_category
            : _?.steam_deck_compat_category),
      _ === void 0)
    )
      return null;
    switch (_) {
      case 3:
        _ = _;
        break;
      case 2:
        _ = _;
        break;
      case 1:
        _ = _;
        break;
      case 0:
        _ = _;
        break;
      default:
        return (_(_, `Unhandled deck compat category: ${_}`), null);
    }
  }
  return (0, _.jsxs)(`span`, {
    className: (0, _.default)(
      _,
      _ == `small` && void 0,
      _ == `fill` && `_4H-iJ5vlNuc-`,
    ),
    children: [
      _ == 1 && (0, _.jsx)(_, {}),
      _ == 3 && (0, _.jsx)(_, {}),
      _ == 4 && (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {}),
    ],
  });
});
function _() {
  return (0, _.jsx)(`span`, {
    className: (0, _.default)(_, _),
    title: _.Localize(`#Platform_Windows`),
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    className: (0, _.default)(_, _),
    title: _.Localize(`#Platform_Mac`),
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    className: (0, _.default)(_, _),
    title: _.Localize(`#Platform_Linux`),
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    className: _,
    title: _.Localize(`#Platform_VR`),
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    className: `SVGIcon_Button SVGIcon_WindowsLogo`,
    width: `100%`,
    height: `100%`,
    viewBox: `0 0 128 128`,
    enableBackground: `new 0 0 128 128`,
    children: [
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `60.834`,
        height: `60.835`,
      }),
      (0, _.jsx)(`rect`, {
        _: `67.165`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.835`,
      }),
      (0, _.jsx)(`rect`, {
        _: `67.164`,
        fill: `currentColor`,
        width: `60.834`,
        height: `60.836`,
      }),
      (0, _.jsx)(`rect`, {
        _: `67.165`,
        _: `67.164`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.836`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    fill: `#FFFFFF`,
    _: `0px`,
    _: `0px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`),
    className: (0, _.default)(_),
    children: (0, _.jsx)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, _.jsx)(`path`, {
        opacity: `0.84`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z`,
        fill: `white`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, _.default)(_),
    children: (0, _.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, _.jsx)(`path`, {
          opacity: `0.84`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z`,
          fill: `white`,
        }),
        (0, _.jsx)(`path`, {
          opacity: `0.84`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M16.7002 3C16.8658 3.00006 16.9999 3.13429 17 3.2998V16.7002C16.9999 16.8658 16.8658 16.9999 16.7002 17H3.2998C3.13431 16.9999 3.0001 16.8657 3 16.7002V3.2998C3.00014 3.13435 3.13435 3.00014 3.2998 3H16.7002ZM10 5.51953C7.52551 5.51953 5.51953 7.52551 5.51953 10C5.51953 12.4745 7.52551 14.4805 10 14.4805C12.4745 14.4805 14.4805 12.4745 14.4805 10C14.4805 7.52551 12.4745 5.51953 10 5.51953Z`,
          fill: `white`,
        }),
      ],
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, _.default)(_),
    children: (0, _.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, _.jsx)(`path`, {
          opacity: `0.84`,
          _: `M16.9997 7.85352C11.9484 7.85352 7.85352 11.9484 7.85352 16.9997H16.9997V7.85352Z`,
          fill: `white`,
        }),
        (0, _.jsx)(`path`, {
          opacity: `0.84`,
          "fill-rule": `evenodd`,
          "clip-rule": `evenodd`,
          _: `M3 3.30201C3 3.13522 3.13522 3 3.30201 3H17V6.02012H6.02012V17H3V3.30201Z`,
          fill: `white`,
        }),
      ],
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Verified`),
    className: _,
    children: (0, _.jsx)(`svg`, {
      className: (0, _.default)(_),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Playable`),
    className: _,
    children: (0, _.jsx)(`svg`, {
      className: (0, _.default)(_),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Unsupported`),
    className: _,
    children: (0, _.jsx)(`svg`, {
      className: (0, _.default)(_),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(`#SteamDeckVerified_Category_Unknown`),
    className: _,
    children: (0, _.jsx)(`svg`, {
      className: (0, _.default)(_),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    title: _.Localize(`#SteamOSCompatibility_Category_Compatible`),
    className: _,
    children: (0, _.jsx)(`svg`, {
      className: (0, _.default)(_),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function _(_) {
  let { bAllowOutsideOfDeck: _ } = _;
  return !_() && !_
    ? null
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let { className: _, _: _ } = _,
    [_, _] = _(),
    _ = _;
  if ((_ == 0 && (_ = 1), !_)) return null;
  let _;
  return (
    _ == 4 && (_ = _),
    (0, _.jsx)(`div`, {
      className: _(_, _, _),
      children: (0, _.jsx)(_, {
        _: _,
        eHWCompat: _,
      }),
    })
  );
}
var _ = `PFP2RDjCi0w-`,
  _ = `Cbfoq6WaXq4-`,
  _ = `_4lcICEhYuQw-`,
  _ = `unoV6P6DXbM-`,
  _ = `p8d03I0RAAs-`,
  _ = `brHZRAeRCnw-`,
  _ = `hATzo-Hjaaw-`,
  _ = `_7vEy4qHpqHo-`,
  _ = `KoUJweWUwjY-`,
  _ = `XAGO1LWGig0-`,
  _ = `uN9-XHR7odQ-`,
  _ = `CnbkzZzYDxs-`,
  _ = `_8UjVVV-S-j8-`,
  _ = `k0yt-Gxhbs4-`,
  _ = `io6uTUtzW-A-`,
  _ = `_58-zzK2uRws-`,
  _ = `mGygcOFcFcQ-`,
  _ = `mW8gl4NPYGg-`,
  _ = `X9907eDQcow-`,
  _ = `GwjmtMACpAo-`,
  _ = `S8JsHzHuIMA-`,
  _ = `_4nNWbL6J2cI-`,
  _ = `Djw7Ta0NL0Q-`,
  _ = `u-mW6oZelJ4-`,
  _ = `j0BUhYRjGwM-`,
  _ = `I-L7P5K0HUM-`,
  _ = `VYzpavMEA5M-`,
  _ = `iXn31HpcmTo-`;
function _(_) {
  let { _: _, bTruncateTotalReviews: _, bShowTooltip: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _();
  if (!_ || !_ || (_.type == 1 && !_(_))) return null;
  let _ = _.summary_unfiltered || _.summary_filtered,
    _ = `#ReviewScore_UserReviewScoreAria`,
    _ = !1,
    _ = _.Localize(`#Language_` + _.LANGUAGE);
  if (
    (_(_?.preferences?.review_score_preference) &&
      (_.summary_language_specific
        ? ((_ = !0),
          (_ = `#ReviewScore_UserReviewScoreAria_LanguageSpecific`),
          (_ = _.summary_language_specific))
        : (_ = _.summary_filtered)),
    !_ || !_.review_score)
  )
    return null;
  let _ = _;
  _ =
    _.review_score > 0 && _.review_score < 5 ? _ : _.review_score == 5 ? _ : _;
  let _ = `${_.STORE_BASE_URL}app/${_.appid}/#app_reviews_hash`,
    _ = (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          "aria-label": _.Localize(_, _.review_score_label, _),
          children: _.review_score_label,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          "aria-label": _.Localize(
            `#GameHover_UserReviewCount`,
            _.review_count.toLocaleString(_()),
          ),
          children: [
            `(`,
            _
              ? `(` + _.review_count.toLocaleString(_()) + `)`
              : _
                ? _.Localize(
                    `#GameHover_UserReviewCount_Lang`,
                    _.review_count.toLocaleString(_()),
                    _,
                  )
                : _.Localize(
                    `#GameHover_UserReviewCount`,
                    _.review_count.toLocaleString(_()),
                  ),
            `)`,
          ],
        }),
        !_ &&
          (0, _.jsxs)(`div`, {
            className: `ZBPprMOYoMs-`,
            children: [` `, _.Localize(`#GameHover_UserReviewsHeader`)],
          }),
      ],
    }),
    _ = `#ReviewScore_PercentPositive`;
  if (_.item_type === 2) _ = `#ReviewScore_PercentPositive_bundle`;
  else if (_.item_type === 0)
    switch (_.type) {
      case 6:
        _ = `#ReviewScore_PercentPositive_software`;
        break;
      case 7:
        _ = `#ReviewScore_PercentPositive_video`;
        break;
      case 10:
        _ = `#ReviewScore_PercentPositive_hardware`;
        break;
      case 8:
        _ = `#ReviewScore_PercentPositive_series`;
    }
  return (0, _.jsx)(_, {
    url: _,
    className: _(_, `ReviewScore`),
    children:
      _ && _.percent_positive != null && _.review_count != null && _
        ? (0, _.jsx)(_, {
            bTopmost: !0,
            toolTipContent: _.Localize(_, _.percent_positive, _.review_count),
            children: _,
          })
        : _,
  });
}
function _(_) {
  return _ === void 0 || _ === 0 || _ === 2;
}
async function _(_, _) {
  let _ = _(_.STORE_BASE_URL, _, _.country_code);
  return (await (await fetch(_)).json()).rgWishlist || [];
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      if (!_) return new Set();
      let _ = await _(_, _);
      return new Set(_);
    },
    staleTime: 6e5,
  };
}
function _(_) {
  let { data: _ } = _();
  return _ === void 0 || _ == null ? void 0 : _.has(_);
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return (_, _) => {
    _.setQueryData(_(_), (_) => {
      if (!_) return;
      let _ = new Set(_);
      if (_) for (let _ of _) _.delete(_);
      if (_) for (let _ of _) _.add(_);
      return _;
    });
  };
}
function _(_) {
  return [`AccountWishlistApps`, _ ?? 0];
}
function _(_, _, _) {
  let _ = _(),
    _ = _.accountid;
  return _({
    mutationKey: [`useUpdateWishlist`, _, _, _],
    mutationFn: async () => {
      if (_ == null) return;
      let _ =
          _.STORE_BASE_URL +
          `api/` +
          (_ ? `addtowishlist` : `removefromwishlist`),
        _ = new FormData();
      (_.append(`appid`, `` + _),
        _.append(`sessionid`, _()),
        _ && _.append(`snr`, _));
      let _ = await fetch(_, {
        method: `POST`,
        body: _,
        credentials: `include`,
      });
      if (!_._)
        throw Error(
          `Wishlist ${_ ? `add` : `remove`} of appid ${_} failed (${_.status})`,
        );
    },
    onMutate: () => {
      _ != null && _(_ ? [_] : void 0, _ ? void 0 : [_]);
    },
    onError: () => {
      _ != null && _(_ ? void 0 : [_], _ ? [_] : void 0);
    },
    onSuccess: () => {
      _();
    },
  });
}
function _(_) {
  let {
      _: _,
      snr: _,
      classOverride: _,
      styleOverride: _,
      bShowInGamepadUI: _,
    } = _,
    { data: _ } = _(_),
    { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    [_, _] = (0, _.useState)(() => {
      if (_ && (_.type == 1 || _.type == 12) && _.related_items?.parent_appid)
        return _.related_items?.parent_appid;
      if (_ && `appid` in _) return _.appid;
    }),
    _ = _(_),
    _ = _(_),
    { bIsOwned: _ } = _(_),
    [_, _] = (0, _.useState)(!1),
    _ = _(`GameHoverWishlistButton`),
    { mutateAsync: _ } = _(_, !_, _);
  (0, _.useEffect)(() => {
    _ &&
      `appid` in _ &&
      (_?.type == 1 || _?.type == 12) &&
      _(_.related_items?.parent_appid || _.appid);
  }, [_, _]);
  let _ = (0, _.useCallback)(
    async (_) => {
      _.logged_in
        ? (_.preventDefault(),
          _.stopPropagation(),
          _(!0),
          await _(),
          _.token.reason || _(!1))
        : _();
    },
    [_.token.reason, _, _],
  );
  return _ && _?.type != 10
    ? null
    : (0, _.jsxs)(_, {
        className: _(_, _ && `B7tWNVp-vns-`, _),
        onActivate: _,
        style: _,
        children: [
          _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
          (0, _.jsx)(`div`, {
            className: _(_, _ && `u8yceEMO9LM-`, `WishlistButtonText`),
            children: _.Localize(
              _ ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
            ),
          }),
          _,
        ],
      });
}
var _ = class _ {
  m_mapAppResults = new Map();
  m_mapAppCallbackList = new Map();
  m_mapAppResultsPromises = new Map();
  GetCompatabilityResultForApp(_) {
    return this.m_mapAppResults.get(_);
  }
  BHasCompatabilityResultForApp(_) {
    return this.m_mapAppResults.has(_);
  }
  GetCallbackForAppList(_) {
    return (
      this.m_mapAppCallbackList.has(_) ||
        this.m_mapAppCallbackList.set(_, new _()),
      this.m_mapAppCallbackList.get(_)
    );
  }
  AddCompatabilityResult(_) {
    _.appid &&
      (this.m_mapAppResults.set(_.appid, _),
      this.GetCallbackForAppList(_.appid).Dispatch(_));
  }
  async LoadAppCompabitilityResult(_) {
    return this.m_mapAppResults.has(_)
      ? !0
      : (this.m_mapAppResultsPromises.has(_) ||
          this.m_mapAppResultsPromises.set(
            _,
            this.InternalLoadAppCompatability(_),
          ),
        this.m_mapAppResultsPromises.get(_));
  }
  async InternalLoadAppCompatability(_) {
    let _ = null;
    try {
      let _ = {
          nAppID: _,
          _: _.LANGUAGE,
          _: _.COUNTRY,
        },
        _ = _.STORE_BASE_URL + `saleaction/ajaxgetdeckappcompatibilityreport`,
        _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
        });
      if (_?.status == 200 && _.data?.success == 1 && _.data?.results)
        return (this.AddCompatabilityResult(_.data.results), !0);
      _ = _(_);
    } catch (_) {
      _ = _(_);
    }
    return (
      console.error(
        `CDeckVerifiedDetailsStore.InternalLoadAppCompatability failed: ` +
          _?.strErrorMsg,
        _,
      ),
      !1
    );
  }
  static s_Singleton;
  static Get() {
    return ((_.s_Singleton ||= new _()), _.s_Singleton);
  }
  constructor() {
    if (document.getElementById(`application_config`)) {
      let _ = _(`hardwarecompatibility`, `application_config`);
      _.ValidateCompatabilityResult(_) && this.AddCompatabilityResult(_);
    }
  }
  static ValidateCompatabilityResult(_) {
    let _ = _;
    return (
      _ &&
      typeof _.appid == `number` &&
      typeof _.resolved_category == `number` &&
      typeof _.resolved_items == `object`
    );
  }
};
_([_], _.prototype, `LoadAppCompabitilityResult`, null);
function _(_) {
  let [_, _] = _.useState(_.Get().GetCompatabilityResultForApp(_));
  return (
    _(_.Get().GetCallbackForAppList(_), _),
    _.useEffect(() => {
      _.Get().BHasCompatabilityResultForApp(_) ||
        _.Get()
          .LoadAppCompabitilityResult(_)
          .then(() => _(_.Get().GetCompatabilityResultForApp(_)));
    }, [_]),
    _
  );
}
var _ = (function (_) {
  return (
    (_[(_._ = 0)] = `A`),
    (_[(_._ = 1)] = `B`),
    (_[(_._ = 2)] = `X`),
    (_[(_._ = 3)] = `Y`),
    (_[(_.Left = 4)] = `Left`),
    (_[(_.Right = 5)] = `Right`),
    (_[(_._ = 6)] = `Up`),
    (_[(_.Down = 7)] = `Down`),
    (_[(_.HomeMenu = 8)] = `HomeMenu`),
    (_[(_.QuickMenu = 9)] = `QuickMenu`),
    (_[(_.Select = 10)] = `Select`),
    (_[(_.Start = 11)] = `Start`),
    (_[(_.LeftBumper = 12)] = `LeftBumper`),
    (_[(_.RightBumper = 13)] = `RightBumper`),
    (_[(_.LeftTrigger = 14)] = `LeftTrigger`),
    (_[(_.RightTrigger = 15)] = `RightTrigger`),
    (_[(_.LeftStick = 16)] = `LeftStick`),
    (_[(_.LeftStickClick = 17)] = `LeftStickClick`),
    (_[(_.RightStick = 18)] = `RightStick`),
    (_[(_.RightStickClick = 19)] = `RightStickClick`),
    (_[(_.LeftTrackpad = 20)] = `LeftTrackpad`),
    (_[(_.LeftTrackpadClick = 21)] = `LeftTrackpadClick`),
    (_[(_.RightTrackpad = 22)] = `RightTrackpad`),
    (_[(_.RightTrackpadClick = 23)] = `RightTrackpadClick`),
    (_[(_.RearLeftUpper = 24)] = `RearLeftUpper`),
    (_[(_.RearLeftLower = 25)] = `RearLeftLower`),
    (_[(_.RearRightUpper = 26)] = `RearRightUpper`),
    (_[(_.RearRightLower = 27)] = `RearRightLower`),
    _
  );
})({});
function _(_) {
  switch (_) {
    case _._:
      return 0;
    case _.CANCEL:
      return 1;
    case _.SECONDARY:
      return 2;
    case _.OPTIONS:
      return 3;
    case _.DIR_LEFT:
      return 4;
    case _.DIR_RIGHT:
      return 5;
    case _.DIR_UP:
      return 6;
    case _.DIR_DOWN:
      return 7;
    case _.STEAM_GUIDE:
      return 8;
    case _.STEAM_QUICK_MENU:
      return 9;
    case _.SELECT:
      return 10;
    case _.START:
      return 11;
    case _.BUMPER_LEFT:
      return 12;
    case _.BUMPER_RIGHT:
      return 13;
    case _.TRIGGER_LEFT:
      return 14;
    case _.TRIGGER_RIGHT:
      return 15;
    case _.REAR_LEFT_UPPER:
      return 24;
    case _.REAR_LEFT_LOWER:
      return 25;
    case _.REAR_RIGHT_UPPER:
      return 26;
    case _.REAR_RIGHT_LOWER:
      return 27;
    default:
      return 0;
  }
}
var _ = class _ {
  m_boundActions = new Map();
  m_defaultActions = new Map();
  m_globalActionsSubscriptions = [];
  m_actionDescriptionChangedCallbackRegistrations = [];
  static Log = new _(`ActionDescription`).Debug;
  m_nodeForCurrentDescriptions;
  InitContext(_) {
    let _ = new _();
    return (
      _.Push(
        _.FocusChangedCallbacks.Register(this.OnFocusNavigationChanged)
          .Unregister,
      ),
      _.Push(
        _.NavTreeActivatedOrReactivatedCallbacks.Register(
          this.OnActiveNavTreeChanged,
        ).Unregister,
      ),
      _.GetUnregisterFunc()
    );
  }
  BFromActiveNavTree(_, _) {
    let _ = _?.Tree;
    return ((_ ||= _?.Tree), _ && _.Controller.IsActiveFocusNavTree(_));
  }
  OnFocusNavigationChanged(_, _, _) {
    this.BFromActiveNavTree(_, _) && this.UpdateForFocusedNode(_);
  }
  OnActiveNavTreeChanged(_) {
    if (!_.Controller.IsActiveFocusNavTree(_)) return;
    let _ = _.GetLastFocusedNode() ?? _.Root;
    _ != this.m_nodeForCurrentDescriptions && this.UpdateForFocusedNode(_);
  }
  UpdateForFocusedNode(_) {
    if (
      ((this.m_nodeForCurrentDescriptions = _),
      this.m_actionDescriptionChangedCallbackRegistrations.forEach((_) =>
        _.Unregister(),
      ),
      (this.m_actionDescriptionChangedCallbackRegistrations = []),
      _)
    ) {
      let _ = () =>
        this.SetActionDescriptionsFromMap(
          _.GetActiveActionDescriptions() ?? {},
        );
      _();
      for (let _ = _; _ != null; _ = _.Parent)
        this.m_actionDescriptionChangedCallbackRegistrations.push(
          _.ActionDescriptionChangedCallbackList.Register(() => _()),
        );
    } else
      this.SetActionDescriptionsFromMap({
        [_._]: null,
      });
  }
  GetActionDescription(_) {
    let _;
    return (
      this.m_boundActions.has(_)
        ? (_ = this.m_boundActions.get(_))
        : this.m_defaultActions.has(_) && (_ = this.m_defaultActions.get(_)),
      _.Log(`GetActionDescription`, _),
      _
    );
  }
  GetActionDescriptions() {
    let _ = Object.values(_).filter((_) => typeof _ == `number`),
      _ = {};
    for (let _ of _) _[_] = this.GetActionDescription(_);
    return _;
  }
  Notify() {
    let _ = this.GetActionDescriptions();
    this.m_globalActionsSubscriptions.forEach((_) => _(_));
  }
  IsDefaultAction(_) {
    return this.GetActionDescription(_) === this.m_defaultActions.get(_);
  }
  SetDefaultAction(_, _) {
    return (
      _ === void 0
        ? this.m_defaultActions.delete(_)
        : this.m_defaultActions.set(_, _),
      !this.m_boundActions.has(_)
    );
  }
  SetDefaultActionsFromMap(_) {
    let _ = !1;
    for (let _ in _) {
      let _ = parseInt(_);
      this.SetDefaultAction(_, _[_]) && (_ = !0);
    }
    _ && this.Notify();
  }
  ClearActions() {
    (_.Log(`ClearActionDescriptions`),
      this.m_boundActions.clear(),
      this.Notify());
  }
  SetActionsFromMap(_) {
    let _ = !1,
      _ = Array.from(this.m_boundActions.keys());
    for (let _ of _) _[_] === void 0 && this.SetAction(_, void 0) && (_ = !0);
    for (let _ in _) {
      let _ = parseInt(_);
      this.SetAction(_, _[_]) && (_ = !0);
    }
    _ && this.Notify();
  }
  SetActionDescriptionsFromMap(_) {
    let _ = {};
    for (let _ in _) {
      let _ = parseInt(_),
        _ = _(_);
      _[_] = _[_];
    }
    this.SetActionsFromMap(_);
  }
  SetAction(_, _) {
    if ((_.Log(`SetActionDescription`, _, _), _ === void 0)) {
      if (!this.m_boundActions.has(_)) return !1;
      this.m_boundActions.delete(_);
    } else {
      if (_(this.m_boundActions.get(_), _)) return !1;
      this.m_boundActions.set(_, _);
    }
    return !0;
  }
  SubscribeToActions(_) {
    return (
      this.m_globalActionsSubscriptions.push(_),
      _(this.GetActionDescriptions()),
      () => {
        let _ = this.m_globalActionsSubscriptions?.indexOf(_);
        this.m_globalActionsSubscriptions && _ != null && _ >= 0
          ? this.m_globalActionsSubscriptions.splice(_, 1)
          : console.error(
              `Unsubscribing an actions handler that was already unsubscribed`,
            );
      }
    );
  }
};
(_([_], _.prototype, `OnFocusNavigationChanged`, null),
  _([_], _.prototype, `OnActiveNavTreeChanged`, null),
  _([_], _.prototype, `SetActionDescriptionsFromMap`, null));
var _ = `_6t-T9facds8-`,
  _ = `_9ltdnbqRBVs-`,
  _ = `KMiaP3xxJic-`,
  _ = `-f6--J8iYK8-`,
  _ = `tlFgqgPT5b8-`,
  _ = `LR3Stix-A4Y-`,
  _ = `zxsM3zpa9JU-`,
  _ = `c3ZsONtZeOk-`,
  _ = `uboNutS5k7k-`,
  _ = `_31u9Wgg0oro-`,
  _ = `m9cG66kvPgg-`,
  _ = `WGUFkBLPn8E-`,
  _ = `WFe7p-8r4T4-`,
  _ = `_5sgfQl5H11I-`,
  _ = `ifxfOQVR6MY-`,
  _ = `nPQe387f344-`,
  _ = `Z8zypUObkYE-`,
  _ = `_1GTC22hSCmY-`,
  _ = `toY0I97PWjg-`,
  _ = `_1ArCdbgfzNY-`,
  _ = `IBiSpw0atyM-`,
  _ = `mDOopKELMBg-`,
  _ = `C8-HMz-fVag-`,
  _ = `lDDPCoGwJAU-`,
  _ = `ZAn1-qmM-Iw-`,
  _ = `dNQ1ofH4Cbs-`,
  _ = `rmDLW23h1zQ-`,
  _ = `CT05Js5REus-`,
  _ = `CAlqxCfPEko-`,
  _ = `hH8fUDD712k-`,
  _ = `c1DR5MyoXPo-`,
  _ = `KnF9XvfALGs-`,
  _ = `voFKnm6BHlI-`,
  _ = `XRBn-My-JYo-`,
  _ = `MnMGQkxU8KU-`,
  _ = `BPpr5dZdGc4-`,
  _ = `QeQ6K92V-ik-`,
  _ = `jlNNNIYiAYQ-`,
  _ = `dXUGCsJI9Qw-`,
  _ = `N88ag1lENrA-`,
  _ = `-m9XoDI2d0Q-`,
  _ = `IulAmRs78UQ-`,
  _ = `X86r8MkR480-`,
  _ = (function (_) {
    return (
      (_[(_.Knockout = 0)] = `Knockout`),
      (_[(_.Light = 1)] = `Light`),
      (_[(_.Dark = 2)] = `Dark`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.Small = 0)] = `Small`),
      (_[(_.Medium = 1)] = `Medium`),
      (_[(_.Large = 2)] = `Large`),
      _
    );
  })({});
function _(_) {
  switch (_) {
    case 0:
      return _;
    case 1:
      return _;
    case 2:
      return _;
    default:
      return _;
  }
}
function _(_) {
  switch (_) {
    case 0:
      return _;
    case 1:
      return _;
    case 2:
      return _;
    default:
      return _;
  }
}
function _(_) {
  let _ = _(
      _.size == null ? _(1) : _(_.size),
      _.type == null ? _(1) : _(_.type),
      _.additionalClassName,
    ),
    _ = _.type == 0;
  switch (_.button) {
    case _._:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_A`),
      });
    case _._:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_B`),
      });
    case _._:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_X`),
      });
    case _._:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_Y`),
      });
    case _.Left:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_DpadLeft`),
      });
    case _.Right:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_DpadRight`),
      });
    case _._:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_DpadUp`),
      });
    case _.Down:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_DpadDown`),
      });
    case _.HomeMenu:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_Steam`),
      });
    case _.QuickMenu:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_QAM`),
      });
    case _.Select:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_View`),
      });
    case _.Start:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_Menu`),
      });
    case _.LeftBumper:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_L1`),
      });
    case _.RightBumper:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_R1`),
      });
    case _.LeftTrigger:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_L2`),
      });
    case _.RightTrigger:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_R2`),
      });
    case _.LeftStick:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_LS`),
      });
    case _.RightStick:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_RS`),
      });
    case _.LeftStickClick:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_L3`),
      });
    case _.RightStickClick:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_R3`),
      });
    case _.LeftTrackpad:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_LPad`),
      });
    case _.RightTrackpad:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_RPad`),
      });
    case _.LeftTrackpadClick:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_LPad_Click`),
      });
    case _.RightTrackpadClick:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_RPad_Click`),
      });
    case _.RearLeftUpper:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_L4`),
      });
    case _.RearRightUpper:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_R4`),
      });
    case _.RearLeftLower:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_L5`),
      });
    case _.RearRightLower:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_R5`),
      });
    default:
      return (0, _.jsx)(_, {
        bIsKnockout: _,
        className: _,
        "aria-label": _(`#ControllerButton_Default`),
      });
  }
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM21.2697 24H24.1317L19.2717 11.4H16.6077L11.8917 24H14.6457L15.4737 21.552H20.4057L21.2697 24ZM16.1937 19.446L17.9217 14.406L19.6857 19.446H16.1937Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`circle`, {
            className: _,
            _: `18`,
            _: `18`,
            _: `18`,
            fill: `currentColor`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M24.1317 24H21.2697L20.4057 21.552H15.4737L14.6457 24H11.8917L16.6077 11.4H19.2717L24.1317 24ZM17.9217 14.406L16.1937 19.446H19.6857L17.9217 14.406Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.173 20.382C23.173 18.81 22.369 17.778 20.761 17.286C21.349 16.974 21.775 16.584 22.039 16.116C22.303 15.648 22.435 15.132 22.435 14.568C22.435 13.56 22.081 12.78 21.373 12.228C20.665 11.676 19.573 11.4 18.097 11.4H13.435V24H18.601C19.993 24 21.103 23.682 21.931 23.046C22.759 22.41 23.173 21.522 23.173 20.382ZM16.117 16.674V13.596H17.881C19.165 13.596 19.807 14.082 19.807 15.054C19.807 15.57 19.645 15.972 19.321 16.26C18.997 16.536 18.535 16.674 17.935 16.674H16.117ZM19.843 21.372C19.507 21.672 19.003 21.822 18.331 21.822H16.117V18.582H18.403C19.039 18.582 19.525 18.72 19.861 18.996C20.197 19.26 20.365 19.656 20.365 20.184C20.365 20.676 20.191 21.072 19.843 21.372Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`circle`, {
            className: _,
            fill: `currentColor`,
            _: `18`,
            _: `18`,
            _: `18`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M20.761 17.286C22.369 17.778 23.173 18.81 23.173 20.382C23.173 21.522 22.759 22.41 21.931 23.046C21.103 23.682 19.993 24 18.601 24H13.435V11.4H18.097C19.573 11.4 20.665 11.676 21.373 12.228C22.081 12.78 22.435 13.56 22.435 14.568C22.435 15.132 22.303 15.648 22.039 16.116C21.775 16.584 21.349 16.974 20.761 17.286ZM16.117 13.596V16.674H17.935C18.535 16.674 18.997 16.536 19.321 16.26C19.645 15.972 19.807 15.57 19.807 15.054C19.807 14.082 19.165 13.596 17.881 13.596H16.117ZM18.331 21.822C19.003 21.822 19.507 21.672 19.843 21.372C20.191 21.072 20.365 20.676 20.365 20.184C20.365 19.656 20.197 19.26 19.861 18.996C19.525 18.72 19.039 18.582 18.403 18.582H16.117V21.822H18.331Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          _: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.7101 11.4H20.3621L17.8601 15.45L15.3581 11.4H12.1001L16.4021 17.484L11.9201 24H15.0881L17.9141 19.41L20.8661 24H24.1061L19.2821 17.394L23.7101 11.4Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`circle`, {
            className: _,
            fill: `currentColor`,
            _: `18`,
            _: `18`,
            _: `18`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M20.3621 11.4H23.7101L19.2821 17.394L24.1061 24H20.8661L17.9141 19.41L15.0881 24H11.9201L16.4021 17.484L12.1001 11.4H15.3581L17.8601 15.45L20.3621 11.4Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          _: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM16.69 24H19.318V18.996L23.71 11.4H20.848L18.094 16.44L15.358 11.4H12.298L16.69 18.978V24Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`circle`, {
            className: _,
            _: `18`,
            _: `18`,
            _: `18`,
            fill: `currentColor`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M19.318 24H16.69V18.978L12.298 11.4H15.358L18.094 16.44L20.848 11.4H23.71L19.318 18.996V24Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM25 20.1998L19.5555 14.7554V27.1998H16.4444V14.7554L11 20.1998L8.66663 17.8665L18 8.66661L27.3333 17.8665L25 20.1998Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`circle`, {
            className: _,
            fill: `currentColor`,
            _: `18`,
            _: `18`,
            _: `18`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M19.5555 14.7554L25 20.1998L27.3333 17.8665L18 8.66661L8.66663 17.8665L11 20.1998L16.4444 14.7554V27.1998H19.5555V14.7554Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM10.9999 15.6666L16.4444 21.1111L16.4444 8.66663H19.5555L19.5555 21.1111L24.9999 15.6666L27.3333 18L17.9999 27.1998L8.66659 18L10.9999 15.6666Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`circle`, {
            className: _,
            fill: `currentColor`,
            _: `18`,
            _: `18`,
            _: `18`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M16.4444 21.1111L10.9999 15.6666L8.66659 18L17.9999 27.1998L27.3333 18L24.9999 15.6666L19.5555 21.1111L19.5555 8.66663L16.4444 8.66663L16.4444 21.1111Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.2664 10.9332L14.8219 16.3777H27.2664V19.4888H14.8219L20.2664 24.9332L17.933 27.2665L8.73314 17.9332L17.933 8.59988L20.2664 10.9332Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`circle`, {
            className: _,
            fill: `currentColor`,
            _: `18`,
            _: `18`,
            _: `18`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M14.8219 16.3777L20.2664 10.9333L17.933 8.59994L8.73314 17.9332L17.933 27.2666L20.2664 24.9333L14.8219 19.4888L27.2664 19.4888L27.2664 16.3777L14.8219 16.3777Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM15.7332 24.9332L21.1776 19.4888H8.73315V16.3777H21.1776L15.7332 10.9332L18.0665 8.59991L27.2664 17.9333L18.0665 27.2666L15.7332 24.9332Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`circle`, {
            className: _,
            fill: `currentColor`,
            _: `18`,
            _: `18`,
            _: `18`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M21.1776 19.4887L15.7332 24.9332L18.0665 27.2665L27.2664 17.9332L18.0665 8.59985L15.7332 10.9332L21.1776 16.3776L8.73315 16.3776L8.73315 19.4887L21.1776 19.4887Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 100 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          _: `M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H82C91.9411 36 100 27.9411 100 18C100 8.05888 91.9411 0 82 0H18ZM21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5ZM35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388ZM50.8108 11.788H42.3148V24.388H50.8108V22.102H44.9608V19.15H50.0008V16.882H44.9608V14.038H50.8108V11.788ZM65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794ZM79.7729 11.788L75.8489 20.734L71.6009 11.788H69.0629V24.388H71.4749V16.468L74.9309 24.028H76.5329L79.9169 16.378V24.388H82.4549V11.788H79.7729Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 100 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M0 18C0 8.05888 8.05888 0 18 0H82C91.9411 0 100 8.05888 100 18C100 27.9411 91.9411 36 82 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M42.3148 11.788H50.8108V14.038H44.9608V16.882H50.0008V19.15H44.9608V22.102H50.8108V24.388H42.3148V11.788Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M75.8489 20.734L79.7729 11.788H82.4549V24.388H79.9169V16.378L76.5329 24.028H74.9309L71.4749 16.468V24.388H69.0629V11.788H71.6009L75.8489 20.734Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 81 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H61C70.9411 36 79 27.9411 79 18C79 8.05888 70.9411 0 61 0H18ZM21.5 22.5C23.9853 22.5 26 20.4853 26 18C26 15.5147 23.9853 13.5 21.5 13.5C19.0147 13.5 17 15.5147 17 18C17 20.4853 19.0147 22.5 21.5 22.5ZM44 18C44 20.4853 41.9853 22.5 39.5 22.5C37.0147 22.5 35 20.4853 35 18C35 15.5147 37.0147 13.5 39.5 13.5C41.9853 13.5 44 15.5147 44 18ZM57.5 22.5C59.9853 22.5 62 20.4853 62 18C62 15.5147 59.9853 13.5 57.5 13.5C55.0147 13.5 53 15.5147 53 18C53 20.4853 55.0147 22.5 57.5 22.5Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 81 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M0 18C0 8.05888 8.05888 0 18 0H61C70.9411 0 79 8.05888 79 18C79 27.9411 70.9411 36 61 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, _.jsx)(`circle`, {
            className: _,
            fill: `currentColor`,
            _: `21.5`,
            _: `18`,
            _: `4.5`,
          }),
          (0, _.jsx)(`circle`, {
            className: _,
            fill: `currentColor`,
            _: `39.5`,
            _: `18`,
            _: `4.5`,
          }),
          (0, _.jsx)(`circle`, {
            className: _,
            fill: `currentColor`,
            _: `57.5`,
            _: `18`,
            _: `4.5`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V25H31V11Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`rect`, {
            className: _,
            fill: `currentColor`,
            _: `6`,
            width: `48`,
            height: `24`,
            _: `12`,
          }),
          (0, _.jsx)(`rect`, {
            className: _,
            fill: `currentColor`,
            _: `17`,
            _: `11`,
            width: `14`,
            height: `14`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V13.8H31V11ZM17 22.2H31V25H17V22.2ZM31 16.6H17V19.4H31V16.6Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`rect`, {
            className: _,
            fill: `currentColor`,
            _: `6`,
            width: `48`,
            height: `24`,
            _: `12`,
          }),
          (0, _.jsx)(`rect`, {
            className: _,
            fill: `currentColor`,
            _: `17`,
            _: `11`,
            width: `14`,
            height: `2.8`,
          }),
          (0, _.jsx)(`rect`, {
            className: _,
            fill: `currentColor`,
            _: `17`,
            _: `22.2`,
            width: `14`,
            height: `2.8`,
          }),
          (0, _.jsx)(`rect`, {
            className: _,
            fill: `currentColor`,
            _: `17`,
            _: `16.6`,
            width: `14`,
            height: `2.8`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M7.5 0C3.35786 0 0 4.47715 0 10V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895431 35.3284 0 34.5 0H7.5ZM9.36182 23H17.8218V20.624H12.0078V10.4H9.36182V23ZM25.7635 20.714V10.4H23.7296L19.5896 12.452L20.4356 14.432L23.0816 13.316V20.714H20.1115V23H28.1576V20.714H25.7635Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M0 10C0 4.47715 3.35786 0 7.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671574 32 0 31.1046 0 30V10Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M17.8218 23H9.36182V10.4H12.0078V20.624H17.8218V23Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M25.7635 10.4V20.714H28.1576V23H20.1116V20.714H23.0816V13.316L20.4356 14.432L19.5896 12.452L23.7296 10.4H25.7635Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M28.5 0C32.6421 0 36 4.47715 36 10V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671573 32 0 31.1046 0 30V2C0 0.895431 0.671573 0 1.5 0H28.5ZM15.8185 23H18.7525L15.7825 18.23C16.5505 17.894 17.1445 17.402 17.5645 16.754C17.9965 16.106 18.2125 15.296 18.2125 14.324C18.2125 13.088 17.8045 12.128 16.9885 11.444C16.1725 10.748 14.9005 10.4 13.1725 10.4H8.45654V23H11.1025V18.752H12.9745H13.2805L15.8185 23ZM11.1025 16.484V12.65H13.0105C13.8385 12.65 14.4385 12.806 14.8105 13.118C15.1945 13.418 15.3865 13.874 15.3865 14.486C15.3865 15.11 15.1885 15.602 14.7925 15.962C14.4085 16.31 13.8685 16.484 13.1725 16.484H11.1025ZM26.6688 20.714V10.4H24.6348L20.4948 12.452L21.3408 14.432L23.9868 13.316V20.714H21.0168V23H29.0628V20.714H26.6688Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M36 10C36 4.47715 32.6421 0 28.5 0H1.5C0.671574 0 0 0.895431 0 2V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V10Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M18.7525 23H15.8185L13.2805 18.752H12.9745H11.1025V23H8.45654V10.4H13.1725C14.9005 10.4 16.1725 10.748 16.9885 11.444C17.8045 12.128 18.2125 13.088 18.2125 14.324C18.2125 15.296 17.9965 16.106 17.5645 16.754C17.1445 17.402 16.5505 17.894 15.7825 18.23L18.7525 23ZM11.1025 12.65V16.484H13.1725C13.8685 16.484 14.4085 16.31 14.7925 15.962C15.1885 15.602 15.3865 15.11 15.3865 14.486C15.3865 13.874 15.1945 13.418 14.8105 13.118C14.4385 12.806 13.8385 12.65 13.0105 12.65H11.1025Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M26.6688 10.4V20.714H29.0628V23H21.0168V20.714H23.9868V13.316L21.3408 14.432L20.4948 12.452L24.6348 10.4H26.6688Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M7.5 32C3.35786 32 0 27.5228 0 22V2C0 0.895431 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H7.5ZM29.0743 20.714H23.0083L25.6183 18.554C26.6623 17.69 27.4363 16.91 27.9403 16.214C28.4443 15.506 28.6963 14.72 28.6963 13.856C28.6963 12.68 28.2583 11.774 27.3823 11.138C26.5063 10.502 25.3423 10.184 23.8903 10.184C23.0743 10.184 22.3063 10.298 21.5863 10.526C20.8783 10.754 20.2483 11.06 19.6963 11.444L20.5963 13.388C20.9683 13.136 21.4003 12.926 21.8923 12.758C22.3963 12.59 22.9123 12.506 23.4403 12.506C24.1483 12.506 24.7243 12.668 25.1683 12.992C25.6243 13.304 25.8523 13.772 25.8523 14.396C25.8523 14.78 25.7623 15.134 25.5823 15.458C25.4023 15.782 25.1623 16.088 24.8623 16.376C24.5743 16.664 24.1543 17.042 23.6023 17.51L23.2963 17.78L19.6603 20.804V23H29.0743V20.714ZM9.32458 23H17.7846V20.624H11.9706V10.4H9.32458V23Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M0 22C0 27.5228 3.35786 32 7.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895432 35.3284 0 34.5 0H1.5C0.671574 0 0 0.895432 0 2V22Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M17.7846 23H9.32458V10.4H11.9706V20.624H17.7846V23Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M23.0083 20.714H29.0743V23H19.6603V20.804L23.2963 17.78L23.6023 17.51C24.1543 17.042 24.5743 16.664 24.8623 16.376C25.1623 16.088 25.4023 15.782 25.5823 15.458C25.7623 15.134 25.8523 14.78 25.8523 14.396C25.8523 13.772 25.6243 13.304 25.1683 12.992C24.7243 12.668 24.1483 12.506 23.4403 12.506C22.9123 12.506 22.3963 12.59 21.8923 12.758C21.4003 12.926 20.9683 13.136 20.5963 13.388L19.6963 11.444C20.2483 11.06 20.8783 10.754 21.5863 10.526C22.3063 10.298 23.0743 10.184 23.8903 10.184C25.3423 10.184 26.5063 10.502 27.3823 11.138C28.2583 11.774 28.6963 12.68 28.6963 13.856C28.6963 14.72 28.4443 15.506 27.9403 16.214C27.4363 16.91 26.6623 17.69 25.6183 18.554L23.0083 20.714Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M28.5 32C32.6421 32 36 27.5228 36 22V2C36 0.895431 35.3284 0 34.5 0H1.5C0.671573 0 0 0.895431 0 2V30C0 31.1046 0.671573 32 1.5 32H28.5ZM28.9796 20.714H22.9136L25.5236 18.554C26.5676 17.69 27.3416 16.91 27.8456 16.214C28.3496 15.506 28.6016 14.72 28.6016 13.856C28.6016 12.68 28.1636 11.774 27.2876 11.138C26.4116 10.502 25.2476 10.184 23.7956 10.184C22.9796 10.184 22.2116 10.298 21.4916 10.526C20.7836 10.754 20.1536 11.06 19.6016 11.444L20.5016 13.388C20.8736 13.136 21.3056 12.926 21.7976 12.758C22.3016 12.59 22.8176 12.506 23.3456 12.506C24.0536 12.506 24.6296 12.668 25.0736 12.992C25.5296 13.304 25.7576 13.772 25.7576 14.396C25.7576 14.78 25.6676 15.134 25.4876 15.458C25.3076 15.782 25.0676 16.088 24.7676 16.376C24.4796 16.664 24.0596 17.042 23.5076 17.51L23.2016 17.78L19.5656 20.804V23H28.9796V20.714ZM14.7813 23H17.7153L14.7453 18.23C15.5133 17.894 16.1073 17.402 16.5273 16.754C16.9593 16.106 17.1753 15.296 17.1753 14.324C17.1753 13.088 16.7673 12.128 15.9513 11.444C15.1353 10.748 13.8633 10.4 12.1353 10.4H7.41931V23H10.0653V18.752H11.9373H12.2433L14.7813 23ZM10.0653 16.484V12.65H11.9733C12.8013 12.65 13.4013 12.806 13.7733 13.118C14.1573 13.418 14.3493 13.874 14.3493 14.486C14.3493 15.11 14.1513 15.602 13.7553 15.962C13.3713 16.31 12.8313 16.484 12.1353 16.484H10.0653Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M36 22C36 27.5228 32.6421 32 28.5 32H1.5C0.671574 32 0 31.1046 0 30V2C0 0.895432 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895432 36 2V22Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M17.7153 23H14.7813L12.2433 18.752H11.9373H10.0653V23H7.41931V10.4H12.1353C13.8633 10.4 15.1353 10.748 15.9513 11.444C16.7673 12.128 17.1753 13.088 17.1753 14.324C17.1753 15.296 16.9593 16.106 16.5273 16.754C16.1073 17.402 15.5133 17.894 14.7453 18.23L17.7153 23ZM10.0653 12.65V16.484H12.1353C12.8313 16.484 13.3713 16.31 13.7553 15.962C14.1513 15.602 14.3493 15.11 14.3493 14.486C14.3493 13.874 14.1573 13.418 13.7733 13.118C13.4013 12.806 12.8013 12.65 11.9733 12.65H10.0653Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M22.9136 20.714H28.9796V23H19.5656V20.804L23.2016 17.78L23.5076 17.51C24.0596 17.042 24.4796 16.664 24.7676 16.376C25.0676 16.088 25.3076 15.782 25.4876 15.458C25.6676 15.134 25.7576 14.78 25.7576 14.396C25.7576 13.772 25.5296 13.304 25.0736 12.992C24.6296 12.668 24.0536 12.506 23.3456 12.506C22.8176 12.506 22.3016 12.59 21.7976 12.758C21.3056 12.926 20.8736 13.136 20.5016 13.388L19.6016 11.444C20.1536 11.06 20.7836 10.754 21.4916 10.526C22.2116 10.298 22.9796 10.184 23.7956 10.184C25.2476 10.184 26.4116 10.502 27.2876 11.138C28.1636 11.774 28.6016 12.68 28.6016 13.856C28.6016 14.72 28.3496 15.506 27.8456 16.214C27.3416 16.91 26.5676 17.69 25.5236 18.554L22.9136 20.714Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            _: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            _: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            _: `M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM25.4679 14.284C24.7852 13.7613 23.7879 13.5 22.4759 13.5C21.6972 13.5 20.9666 13.6173 20.2839 13.852C19.6119 14.0867 19.0092 14.4227 18.4759 14.86L19.4679 16.364C19.8199 16.0973 20.2146 15.8893 20.6519 15.74C21.0999 15.58 21.5639 15.5 22.0439 15.5C22.6732 15.5 23.1639 15.6227 23.5159 15.868C23.8786 16.1133 24.0599 16.4387 24.0599 16.844C24.0599 17.2813 23.8679 17.6227 23.4839 17.868C23.1106 18.1027 22.6146 18.22 21.9959 18.22H20.6999V19.996H22.1399C23.7079 19.996 24.4919 20.508 24.4919 21.532C24.4919 22.0547 24.2839 22.4653 23.8679 22.764C23.4626 23.0627 22.8972 23.212 22.1719 23.212C21.0306 23.212 20.0439 22.876 19.2119 22.204L18.2039 23.932C18.7052 24.3373 19.3186 24.652 20.0439 24.876C20.7799 25.1 21.5532 25.212 22.3639 25.212C23.2172 25.212 23.9959 25.068 24.6999 24.78C25.4039 24.4813 25.9586 24.0653 26.3639 23.532C26.7692 22.988 26.9719 22.364 26.9719 21.66C26.9719 20.892 26.7479 20.2787 26.2999 19.82C25.8626 19.3507 25.2866 19.0413 24.5719 18.892V18.844C25.1799 18.6093 25.6492 18.2733 25.9799 17.836C26.3212 17.388 26.4919 16.8813 26.4919 16.316C26.4919 15.484 26.1506 14.8067 25.4679 14.284ZM9.48901 24.956H17.009V22.844H11.841V13.756H9.48901V24.956Z`,
          }),
        ],
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`ellipse`, {
            className: _,
            fill: `currentColor`,
            _: `18`,
            _: `19.5`,
            _: `18`,
            _: `11.25`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M17.009 24.956H9.48901V13.756H11.841V22.844H17.009V24.956Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M22.4759 13.5C23.7879 13.5 24.7852 13.7613 25.4679 14.284C26.1506 14.8067 26.4919 15.484 26.4919 16.316C26.4919 16.8813 26.3212 17.388 25.9799 17.836C25.6492 18.2733 25.1799 18.6093 24.5719 18.844V18.892C25.2866 19.0413 25.8626 19.3507 26.2999 19.82C26.7479 20.2787 26.9719 20.892 26.9719 21.66C26.9719 22.364 26.7692 22.988 26.3639 23.532C25.9586 24.0653 25.4039 24.4813 24.6999 24.78C23.9959 25.068 23.2172 25.212 22.3639 25.212C21.5532 25.212 20.7799 25.1 20.0439 24.876C19.3186 24.652 18.7052 24.3373 18.2039 23.932L19.2119 22.204C20.0439 22.876 21.0306 23.212 22.1719 23.212C22.8972 23.212 23.4626 23.0627 23.8679 22.764C24.2839 22.4653 24.4919 22.0547 24.4919 21.532C24.4919 20.508 23.7079 19.996 22.1399 19.996H20.6999V18.22H21.9959C22.6146 18.22 23.1106 18.1027 23.4839 17.868C23.8679 17.6227 24.0599 17.2813 24.0599 16.844C24.0599 16.4387 23.8786 16.1133 23.5159 15.868C23.1639 15.6227 22.6732 15.5 22.0439 15.5C21.5639 15.5 21.0999 15.58 20.6519 15.74C20.2146 15.8893 19.8199 16.0973 19.4679 16.364L18.4759 14.86C19.0092 14.4227 19.6119 14.0867 20.2839 13.852C20.9666 13.6173 21.6972 13.5 22.4759 13.5Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            _: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            _: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            _: `M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM26.5882 14.284C25.9056 13.7613 24.9082 13.5 23.5962 13.5C22.8176 13.5 22.0869 13.6173 21.4043 13.852C20.7323 14.0867 20.1296 14.4227 19.5963 14.86L20.5882 16.364C20.9403 16.0973 21.3349 15.8893 21.7723 15.74C22.2202 15.58 22.6842 15.5 23.1642 15.5C23.7936 15.5 24.2843 15.6227 24.6362 15.868C24.9989 16.1133 25.1803 16.4387 25.1803 16.844C25.1803 17.2813 24.9883 17.6227 24.6043 17.868C24.2309 18.1027 23.7349 18.22 23.1162 18.22H21.8203V19.996H23.2603C24.8283 19.996 25.6122 20.508 25.6122 21.532C25.6122 22.0547 25.4042 22.4653 24.9883 22.764C24.5829 23.0627 24.0176 23.212 23.2923 23.212C22.1509 23.212 21.1643 22.876 20.3323 22.204L19.3242 23.932C19.8256 24.3373 20.4389 24.652 21.1642 24.876C21.9002 25.1 22.6736 25.212 23.4842 25.212C24.3376 25.212 25.1162 25.068 25.8202 24.78C26.5243 24.4813 27.0789 24.0653 27.4842 23.532C27.8896 22.988 28.0923 22.364 28.0923 21.66C28.0923 20.892 27.8682 20.2787 27.4202 19.82C26.9829 19.3507 26.4069 19.0413 25.6922 18.892V18.844C26.3002 18.6093 26.7696 18.2733 27.1003 17.836C27.4416 17.388 27.6122 16.8813 27.6122 16.316C27.6122 15.484 27.2709 14.8067 26.5882 14.284ZM15.544 24.956H18.152L15.512 20.716C16.1947 20.4173 16.7227 19.98 17.096 19.404C17.48 18.828 17.672 18.108 17.672 17.244C17.672 16.1453 17.3093 15.292 16.584 14.684C15.8587 14.0653 14.728 13.756 13.192 13.756H9V24.956H11.352V21.18H13.016H13.288L15.544 24.956ZM11.352 19.164V15.756H13.048C13.784 15.756 14.3173 15.8947 14.648 16.172C14.9893 16.4387 15.16 16.844 15.16 17.388C15.16 17.9427 14.984 18.38 14.632 18.7C14.2907 19.0093 13.8107 19.164 13.192 19.164H11.352Z`,
          }),
        ],
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`ellipse`, {
            className: _,
            fill: `currentColor`,
            _: `18`,
            _: `19.5`,
            _: `18`,
            _: `11.25`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M18.152 24.956H15.544L13.288 21.18H13.016H11.352V24.956H9V13.756H13.192C14.728 13.756 15.8587 14.0653 16.584 14.684C17.3093 15.292 17.672 16.1453 17.672 17.244C17.672 18.108 17.48 18.828 17.096 19.404C16.7227 19.98 16.1947 20.4173 15.512 20.716L18.152 24.956ZM11.352 15.756V19.164H13.192C13.8107 19.164 14.2907 19.0093 14.632 18.7C14.984 18.38 15.16 17.9427 15.16 17.388C15.16 16.844 14.9893 16.4387 14.648 16.172C14.3173 15.8947 13.784 15.756 13.048 15.756H11.352Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M23.5962 13.5C24.9082 13.5 25.9056 13.7613 26.5882 14.284C27.2709 14.8067 27.6122 15.484 27.6122 16.316C27.6122 16.8813 27.4416 17.388 27.1003 17.836C26.7696 18.2733 26.3002 18.6093 25.6922 18.844V18.892C26.4069 19.0413 26.9829 19.3507 27.4202 19.82C27.8682 20.2787 28.0923 20.892 28.0923 21.66C28.0923 22.364 27.8896 22.988 27.4842 23.532C27.0789 24.0653 26.5243 24.4813 25.8202 24.78C25.1162 25.068 24.3376 25.212 23.4843 25.212C22.6736 25.212 21.9003 25.1 21.1643 24.876C20.4389 24.652 19.8256 24.3373 19.3243 23.932L20.3323 22.204C21.1643 22.876 22.1509 23.212 23.2923 23.212C24.0176 23.212 24.5829 23.0627 24.9882 22.764C25.4042 22.4653 25.6122 22.0547 25.6122 21.532C25.6122 20.508 24.8283 19.996 23.2603 19.996H21.8203V18.22H23.1163C23.7349 18.22 24.2309 18.1027 24.6043 17.868C24.9883 17.6227 25.1803 17.2813 25.1803 16.844C25.1803 16.4387 24.9989 16.1133 24.6363 15.868C24.2843 15.6227 23.7936 15.5 23.1643 15.5C22.6842 15.5 22.2203 15.58 21.7723 15.74C21.3349 15.8893 20.9403 16.0973 20.5883 16.364L19.5963 14.86C20.1296 14.4227 20.7323 14.0867 21.4043 13.852C22.0869 13.6173 22.8176 13.5 23.5962 13.5Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            _: `M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM20.8833 18.9875H23.6775L20.849 14.4447C21.5804 14.1247 22.1461 13.6561 22.5461 13.039C22.9575 12.4218 23.1633 11.6504 23.1633 10.7247C23.1633 9.54755 22.7747 8.63326 21.9975 7.98183C21.2204 7.31898 20.009 6.98755 18.3633 6.98755H13.8718V18.9875H16.3918V14.9418H18.1747H18.4661L20.8833 18.9875ZM16.3918 12.7818V9.13041H18.209C18.9975 9.13041 19.569 9.27898 19.9233 9.57612C20.289 9.86183 20.4718 10.2961 20.4718 10.879C20.4718 11.4733 20.2833 11.9418 19.9061 12.2847C19.5404 12.6161 19.0261 12.7818 18.3633 12.7818H16.3918Z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            _: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`ellipse`, {
            className: _,
            fill: `currentColor`,
            _: `18`,
            _: `13.5`,
            _: `18`,
            _: `11.25`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M23.6775 18.9875H20.8833L18.4661 14.9418H18.1747H16.3918V18.9875H13.8718V6.98755H18.3633C20.009 6.98755 21.2204 7.31898 21.9975 7.98184C22.7747 8.63326 23.1633 9.54755 23.1633 10.7247C23.1633 11.6504 22.9575 12.4218 22.5461 13.039C22.1461 13.6561 21.5804 14.1247 20.849 14.4447L23.6775 18.9875ZM16.3918 9.13041V12.7818H18.3633C19.0261 12.7818 19.5404 12.6161 19.9061 12.2847C20.2833 11.9418 20.4718 11.4733 20.4718 10.879C20.4718 10.2961 20.289 9.86183 19.9233 9.57612C19.569 9.27898 18.9975 9.13041 18.209 9.13041H16.3918Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            _: `M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM14 19H23V16.7371H16.8149V7H14V19Z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            _: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`ellipse`, {
            className: _,
            fill: `currentColor`,
            _: `18`,
            _: `13.5`,
            _: `18`,
            _: `11.25`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M23 19H14V7H16.8149V16.7371H23V19Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.62341 24.75H17.0834V22.374H11.2694V12.15H8.62341V24.75ZM27.3111 19.854V12.15H24.8631L18.6891 20.16V21.888H24.6291V24.75H27.3111V21.888H29.1291V19.854H27.3111ZM21.2631 19.854L24.7371 15.3V19.854H21.2631Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M17.0834 24.75H8.62341V12.15H11.2694V22.374H17.0834V24.75Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M27.3111 12.15V19.854H29.1291V21.888H27.3111V24.75H24.6291V21.888H18.6891V20.16L24.8631 12.15H27.3111ZM24.7371 15.3L21.2631 19.854H24.7371V15.3Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.23669 24.75H16.6967V22.374H10.8827V12.15H8.23669V24.75ZM27.3744 14.4V12.15H19.3284V18.648L21.0024 19.566C21.3744 19.266 21.7524 19.044 22.1364 18.9C22.5204 18.744 22.9404 18.666 23.3964 18.666C24.0084 18.666 24.4884 18.828 24.8364 19.152C25.1964 19.476 25.3764 19.944 25.3764 20.556C25.3764 21.252 25.1424 21.786 24.6744 22.158C24.2064 22.53 23.5464 22.716 22.6944 22.716C21.5664 22.716 20.5404 22.404 19.6164 21.78L18.6804 23.796C19.1484 24.192 19.7364 24.498 20.4444 24.714C21.1524 24.93 21.9144 25.038 22.7304 25.038C23.8344 25.038 24.7884 24.852 25.5924 24.48C26.4084 24.096 27.0264 23.562 27.4464 22.878C27.8784 22.194 28.0944 21.396 28.0944 20.484C28.0944 19.26 27.7524 18.33 27.0684 17.694C26.3964 17.046 25.4964 16.722 24.3684 16.722C23.9244 16.722 23.4804 16.776 23.0364 16.884C22.6044 16.98 22.2144 17.136 21.8664 17.352V14.4H27.3744Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M16.6967 24.75H8.23669V12.15H10.8827V22.374H16.6967V24.75Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M27.3744 12.15V14.4H21.8664V17.352C22.2144 17.136 22.6044 16.98 23.0364 16.884C23.4804 16.776 23.9244 16.722 24.3684 16.722C25.4964 16.722 26.3964 17.046 27.0684 17.694C27.7524 18.33 28.0944 19.26 28.0944 20.484C28.0944 21.396 27.8784 22.194 27.4464 22.878C27.0264 23.562 26.4084 24.096 25.5924 24.48C24.7884 24.852 23.8344 25.038 22.7304 25.038C21.9144 25.038 21.1524 24.93 20.4444 24.714C19.7364 24.498 19.1484 24.192 18.6804 23.796L19.6164 21.78C20.5404 22.404 21.5664 22.716 22.6944 22.716C23.5464 22.716 24.2064 22.53 24.6744 22.158C25.1424 21.786 25.3764 21.252 25.3764 20.556C25.3764 19.944 25.1964 19.476 24.8364 19.152C24.4884 18.828 24.0084 18.666 23.3964 18.666C22.9404 18.666 22.5204 18.744 22.1364 18.9C21.7524 19.044 21.3744 19.266 21.0024 19.566L19.3284 18.648V12.15H27.3744Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.5176 24.75H17.4516L14.4816 19.98C15.2496 19.644 15.8436 19.152 16.2636 18.504C16.6956 17.856 16.9116 17.046 16.9116 16.074C16.9116 14.838 16.5036 13.878 15.6876 13.194C14.8716 12.498 13.5996 12.15 11.8716 12.15H7.15564V24.75H9.80164V20.502H11.6736H11.9796L14.5176 24.75ZM9.80164 18.234V14.4H11.7096C12.5376 14.4 13.1376 14.556 13.5096 14.868C13.8936 15.168 14.0856 15.624 14.0856 16.236C14.0856 16.86 13.8876 17.352 13.4916 17.712C13.1076 18.06 12.5676 18.234 11.8716 18.234H9.80164ZM27.6539 19.854V12.15H25.2059L19.0319 20.16V21.888H24.9719V24.75H27.6539V21.888H29.4719V19.854H27.6539ZM21.6059 19.854L25.0799 15.3V19.854H21.6059Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M17.4516 24.75H14.5176L11.9796 20.502H11.6736H9.80164V24.75H7.15564V12.15H11.8716C13.5996 12.15 14.8716 12.498 15.6876 13.194C16.5036 13.878 16.9116 14.838 16.9116 16.074C16.9116 17.046 16.6956 17.856 16.2636 18.504C15.8436 19.152 15.2496 19.644 14.4816 19.98L17.4516 24.75ZM9.80164 14.4V18.234H11.8716C12.5676 18.234 13.1076 18.06 13.4916 17.712C13.8876 17.352 14.0856 16.86 14.0856 16.236C14.0856 15.624 13.8936 15.168 13.5096 14.868C13.1376 14.556 12.5376 14.4 11.7096 14.4H9.80164Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M27.6539 12.15V19.854H29.4719V21.888H27.6539V24.75H24.9719V21.888H19.0319V20.16L25.2059 12.15H27.6539ZM25.0799 15.3L21.6059 19.854H25.0799V15.3Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.6934 24.75H17.6274L14.6574 19.98C15.4254 19.644 16.0194 19.152 16.4394 18.504C16.8714 17.856 17.0874 17.046 17.0874 16.074C17.0874 14.838 16.6794 13.878 15.8634 13.194C15.0474 12.498 13.7754 12.15 12.0474 12.15H7.33142V24.75H9.97742V20.502H11.8494H12.1554L14.6934 24.75ZM9.97742 18.234V14.4H11.8854C12.7134 14.4 13.3134 14.556 13.6854 14.868C14.0694 15.168 14.2614 15.624 14.2614 16.236C14.2614 16.86 14.0634 17.352 13.6674 17.712C13.2834 18.06 12.7434 18.234 12.0474 18.234H9.97742ZM28.2797 14.4V12.15H20.2337V18.648L21.9077 19.566C22.2797 19.266 22.6577 19.044 23.0417 18.9C23.4257 18.744 23.8457 18.666 24.3017 18.666C24.9137 18.666 25.3937 18.828 25.7417 19.152C26.1017 19.476 26.2817 19.944 26.2817 20.556C26.2817 21.252 26.0477 21.786 25.5797 22.158C25.1117 22.53 24.4517 22.716 23.5997 22.716C22.4717 22.716 21.4457 22.404 20.5217 21.78L19.5857 23.796C20.0537 24.192 20.6417 24.498 21.3497 24.714C22.0577 24.93 22.8197 25.038 23.6357 25.038C24.7397 25.038 25.6937 24.852 26.4977 24.48C27.3137 24.096 27.9317 23.562 28.3517 22.878C28.7837 22.194 28.9997 21.396 28.9997 20.484C28.9997 19.26 28.6577 18.33 27.9737 17.694C27.3017 17.046 26.4017 16.722 25.2737 16.722C24.8297 16.722 24.3857 16.776 23.9417 16.884C23.5097 16.98 23.1197 17.136 22.7717 17.352V14.4H28.2797Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M17.6274 24.75H14.6934L12.1554 20.502H11.8494H9.97742V24.75H7.33142V12.15H12.0474C13.7754 12.15 15.0474 12.498 15.8634 13.194C16.6794 13.878 17.0874 14.838 17.0874 16.074C17.0874 17.046 16.8714 17.856 16.4394 18.504C16.0194 19.152 15.4254 19.644 14.6574 19.98L17.6274 24.75ZM9.97742 14.4V18.234H12.0474C12.7434 18.234 13.2834 18.06 13.6674 17.712C14.0634 17.352 14.2614 16.86 14.2614 16.236C14.2614 15.624 14.0694 15.168 13.6854 14.868C13.3134 14.556 12.7134 14.4 11.8854 14.4H9.97742Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M28.2797 12.15V14.4H22.7717V17.352C23.1197 17.136 23.5097 16.98 23.9417 16.884C24.3857 16.776 24.8297 16.722 25.2737 16.722C26.4017 16.722 27.3017 17.046 27.9737 17.694C28.6577 18.33 28.9997 19.26 28.9997 20.484C28.9997 21.396 28.7837 22.194 28.3517 22.878C27.9317 23.562 27.3137 24.096 26.4977 24.48C25.6937 24.852 24.7397 25.038 23.6357 25.038C22.8197 25.038 22.0577 24.93 21.3497 24.714C20.6417 24.498 20.0537 24.192 19.5857 23.796L20.5217 21.78C21.4457 22.404 22.4717 22.716 23.5997 22.716C24.4517 22.716 25.1117 22.53 25.5797 22.158C26.0477 21.786 26.2817 21.252 26.2817 20.556C26.2817 19.944 26.1017 19.476 25.7417 19.152C25.3937 18.828 24.9137 18.666 24.3017 18.666C23.8457 18.666 23.4257 18.744 23.0417 18.9C22.6577 19.044 22.2797 19.266 21.9077 19.566L20.2337 18.648V12.15H28.2797Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M5.73583 3C3.6326 3 1.88863 4.6288 1.74515 6.72713L0.292161 27.9771C0.134133 30.2883 1.96629 32.25 4.28284 32.25H31.7172C34.0337 32.25 35.8659 30.2883 35.7078 27.9771L34.2548 6.72713C34.1114 4.6288 32.3674 3 30.2642 3H5.73583ZM14.8236 24.0625H23.2836V21.6865H17.4696V11.4625H14.8236V24.0625Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M23.2836 24.0625H14.8236V11.4625H17.4696V21.6865H23.2836V24.0625Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            _: `M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM14.8237 28.0625H23.2837V25.6865H17.4697V15.4625H14.8237V28.0625Z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            _: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M23.2836 28.0625H14.8236V15.4625H17.4696V25.6865H23.2836V28.0625Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M5.7359 3C3.63266 3 1.88869 4.6288 1.74521 6.72713L0.292222 27.9771C0.134194 30.2883 1.96635 32.25 4.2829 32.25H31.7172C34.0338 32.25 35.8659 30.2883 35.7079 27.9771L34.2549 6.72713C34.1114 4.6288 32.3675 3 30.2642 3H5.7359ZM20.7179 24.0625H23.6519L20.6819 19.2925C21.4499 18.9565 22.0439 18.4645 22.4639 17.8165C22.8959 17.1685 23.1119 16.3585 23.1119 15.3865C23.1119 14.1505 22.7039 13.1905 21.8879 12.5065C21.0719 11.8105 19.7999 11.4625 18.0719 11.4625H13.3559V24.0625H16.0019V19.8145H17.8739H18.1799L20.7179 24.0625ZM16.0019 17.5465V13.7125H17.9099C18.7379 13.7125 19.3379 13.8685 19.7099 14.1805C20.0939 14.4805 20.2859 14.9365 20.2859 15.5485C20.2859 16.1725 20.0879 16.6645 19.6919 17.0245C19.3079 17.3725 18.7679 17.5465 18.0719 17.5465H16.0019Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M23.6518 24.0625H20.7178L18.1798 19.8145H17.8738H16.0018V24.0625H13.3558V11.4625H18.0718C19.7998 11.4625 21.0718 11.8105 21.8878 12.5065C22.7038 13.1905 23.1118 14.1505 23.1118 15.3865C23.1118 16.3585 22.8958 17.1685 22.4638 17.8165C22.0438 18.4645 21.4498 18.9565 20.6818 19.2925L23.6518 24.0625ZM16.0018 13.7125V17.5465H18.0718C18.7678 17.5465 19.3078 17.3725 19.6918 17.0245C20.0878 16.6645 20.2858 16.1725 20.2858 15.5485C20.2858 14.9365 20.0938 14.4805 19.7098 14.1805C19.3378 13.8685 18.7378 13.7125 17.9098 13.7125H16.0018Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            _: `M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM20.7179 28.0625H23.6519L20.6819 23.2925C21.4499 22.9565 22.0439 22.4645 22.4639 21.8165C22.8959 21.1685 23.1119 20.3585 23.1119 19.3865C23.1119 18.1505 22.7039 17.1905 21.8879 16.5065C21.0719 15.8105 19.7999 15.4625 18.0719 15.4625H13.3559V28.0625H16.0019V23.8145H17.8739H18.1799L20.7179 28.0625ZM16.0019 21.5465V17.7125H17.9099C18.7379 17.7125 19.3379 17.8685 19.7099 18.1805C20.0939 18.4805 20.2859 18.9365 20.2859 19.5485C20.2859 20.1725 20.0879 20.6645 19.6919 21.0245C19.3079 21.3725 18.7679 21.5465 18.0719 21.5465H16.0019Z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            _: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M23.6518 28.0625H20.7178L18.1798 23.8145H17.8738H16.0018V28.0625H13.3558V15.4625H18.0718C19.7998 15.4625 21.0718 15.8105 21.8878 16.5065C22.7038 17.1905 23.1118 18.1505 23.1118 19.3865C23.1118 20.3585 22.8958 21.1685 22.4638 21.8165C22.0438 22.4645 21.4498 22.9565 20.6818 23.2925L23.6518 28.0625ZM16.0018 17.7125V21.5465H18.0718C18.7678 21.5465 19.3078 21.3725 19.6918 21.0245C20.0878 20.6645 20.2858 20.1725 20.2858 19.5485C20.2858 18.9365 20.0938 18.4805 19.7098 18.1805C19.3378 17.8685 18.7378 17.7125 17.9098 17.7125H16.0018Z`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function _({ bIsKnockout: _, ..._ }) {
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          _: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.4999 10.8201C19.7519 10.4974 18.8719 10.3361 17.8599 10.3361C16.9799 10.3361 16.1219 10.4681 15.2859 10.7321C14.4499 10.9961 13.7166 11.3407 13.0859 11.7661L14.0759 13.9881C15.0586 13.2547 16.1073 12.8881 17.2219 12.8881C17.9699 12.8881 18.5493 13.0494 18.9599 13.3721C19.3853 13.6801 19.5979 14.1201 19.5979 14.6921C19.5979 15.1027 19.4953 15.4474 19.2899 15.7261C19.0846 16.0047 18.7693 16.3201 18.3439 16.6721C17.8893 17.0681 17.5153 17.4347 17.2219 17.7721C16.9286 18.1094 16.6793 18.5641 16.4739 19.1361C16.2686 19.7081 16.1659 20.4047 16.1659 21.2261H18.8499C18.8499 20.6541 18.9453 20.1554 19.1359 19.7301C19.3266 19.2901 19.5539 18.9234 19.8179 18.6301C20.0966 18.3221 20.4633 17.9701 20.9179 17.5741C21.3579 17.1781 21.7026 16.8407 21.9519 16.5621C22.2159 16.2834 22.4359 15.9461 22.6119 15.5501C22.7879 15.1541 22.8759 14.6994 22.8759 14.1861C22.8759 13.4234 22.6706 12.7561 22.2599 12.1841C21.8493 11.5974 21.2626 11.1427 20.4999 10.8201ZM18.7839 23.2721C18.4759 22.9494 18.0653 22.7881 17.5519 22.7881C17.0386 22.7881 16.6279 22.9494 16.3199 23.2721C16.0119 23.5801 15.8579 23.9907 15.8579 24.5041C15.8579 25.0467 16.0119 25.4794 16.3199 25.8021C16.6279 26.1101 17.0386 26.2641 17.5519 26.2641C18.0653 26.2641 18.4759 26.1101 18.7839 25.8021C19.0919 25.4794 19.2459 25.0467 19.2459 24.5041C19.2459 23.9907 19.0919 23.5801 18.7839 23.2721Z`,
        }),
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`circle`, {
            className: _,
            fill: `currentColor`,
            _: `18`,
            _: `18`,
            _: `18`,
          }),
          (0, _.jsx)(`path`, {
            className: _,
            fill: `currentColor`,
            _: `M17.8599 10.3361C18.8719 10.3361 19.7519 10.4974 20.4999 10.8201C21.2626 11.1427 21.8493 11.5974 22.2599 12.1841C22.6706 12.7561 22.8759 13.4234 22.8759 14.1861C22.8759 14.6994 22.7879 15.1541 22.6119 15.5501C22.4359 15.9461 22.2159 16.2834 21.9519 16.5621C21.7026 16.8407 21.3579 17.1781 20.9179 17.5741C20.4633 17.9701 20.0966 18.3221 19.8179 18.6301C19.5539 18.9234 19.3266 19.2901 19.1359 19.7301C18.9453 20.1554 18.8499 20.6541 18.8499 21.2261H16.1659C16.1659 20.4047 16.2686 19.7081 16.4739 19.1361C16.6793 18.5641 16.9286 18.1094 17.2219 17.7721C17.5153 17.4347 17.8893 17.0681 18.3439 16.6721C18.7693 16.3201 19.0846 16.0047 19.2899 15.7261C19.4953 15.4474 19.5979 15.1027 19.5979 14.6921C19.5979 14.1201 19.3853 13.6801 18.9599 13.3721C18.5493 13.0494 17.9699 12.8881 17.2219 12.8881C16.1073 12.8881 15.0586 13.2547 14.0759 13.9881L13.0859 11.7661C13.7166 11.3407 14.4499 10.9961 15.2859 10.7321C16.1219 10.4681 16.9799 10.3361 17.8599 10.3361ZM17.5519 22.7881C18.0653 22.7881 18.4759 22.9494 18.7839 23.2721C19.0919 23.5801 19.2459 23.9907 19.2459 24.5041C19.2459 25.0467 19.0919 25.4794 18.7839 25.8021C18.4759 26.1101 18.0653 26.2641 17.5519 26.2641C17.0386 26.2641 16.6279 26.1101 16.3199 25.8021C16.0119 25.4794 15.8579 25.0467 15.8579 24.5041C15.8579 23.9907 16.0119 23.5801 16.3199 23.2721C16.6279 22.9494 17.0386 22.7881 17.5519 22.7881Z`,
          }),
        ],
      });
}
var _ = class _ extends _.Message {
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
      return `CGamePerformanceStats_GetGameFrameRateStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.frame_rates || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            frame_rates: {
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
      return `CGamePerformanceStats_GetGameFrameRateStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clusterid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clusterid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            report_days: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            report_count: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            mean_frame_rate: {
              _: 6,
              _: _.readDouble,
              _: _.writeDouble,
            },
            frame_rate_histogram: {
              _: 8,
              _: !0,
              _: !0,
              _: _.readDouble,
              pbr: _.readPackedDouble,
              _: _.writeRepeatedDouble,
            },
            histogram_report_count: {
              _: 9,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            last_updated: {
              _: 10,
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
      return `CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `GamePerformanceStats.GetGameFrameRateStats#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `store`, `community`],
      },
    );
  }
  _.GetGameFrameRateStats = _;
})((_ ||= {}));
function _(_) {
  let _ = _(),
    { data: _ } = _({
      queryKey: [`performancestats_` + _],
      queryFn: async () => {
        if (!_) return null;
        let _ = _.Init(_);
        _.Body().set_appid(_);
        let _ = await _.GetGameFrameRateStats(_, _);
        return _.BSuccess() ? _.Body().toObject() : null;
      },
    });
  return _ ?? void 0;
}
function _(_, _ = !0) {
  return _({
    queryKey: [`GetControllersUsed`],
    queryFn: async () => {
      let _;
      try {
        let _ = `${_.STORE_BASE_URL}account/ajaxgetcontrollersused`,
          _ = await _.default.get(_, {
            withCredentials: !0,
          });
        if (_?.status === 200 && _?.data?.success === 1) return _.data.data;
        _ = _(_);
      } catch (_) {
        _ = _(_);
      }
      return (console.error(`usePlayerHardwareUsed failed:`, _), null);
    },
    select: _,
    enabled: _ && !!_.accountid,
  });
}
var _ = [`axis`, `item`],
  _ = (0, _.forwardRef)((_, _) =>
    _.createElement(_, {
      chartName: `BarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: _,
      tooltipPayloadSearcher: _,
      categoricalChartProps: _,
      ref: _,
    }),
  ),
  _ = `nK2pFw6yu3o-`,
  _ = `nzXI4r-KhTY-`,
  _ = `iKEtAveWi-8-`,
  _ = `ZXpki9wJyL0-`,
  _ = 5;
function _({ active: _, payload: _ }) {
  if (!_ || !_?.length) return null;
  let _ = _[0].payload;
  return (0, _.jsx)(`div`, {
    className: _,
    children: `${_.Localize(`#GamePerformanceStats_FPS`, _.framerate ?? 0)}: ${_.percentage ?? 0}%`,
  });
}
function _(_) {
  let { histogram: _, className: _, minWidth: _ = 400, minHeight: _ = 300 } = _,
    _ = _.useMemo(() => {
      if (!_) return;
      let _ = -1;
      if (
        (_.forEach((_, _) => {
          Math.floor(_) > 0 && (_ = _);
        }),
        _ < 0)
      )
        return;
      let _ = [];
      return (
        _.slice(0, _ + 1).forEach((_, _) => {
          _.push({
            framerate: _ * _,
            percentage: Math.round(_),
          });
        }),
        _.sort((_, _) => _.framerate - _.framerate)
      );
    }, [_]);
  return _?.length
    ? (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#GamePerformanceStats_SessionLabel`),
          }),
          (0, _.jsx)(_, {
            width: `100%`,
            minWidth: _,
            minHeight: _,
            children: (0, _.jsxs)(_, {
              accessibilityLayer: !1,
              margin: {
                top: 35,
                left: 0,
                right: 0,
                bottom: 25,
              },
              data: _,
              children: [
                (0, _.jsx)(_, {
                  stroke: `#888`,
                  strokeWidth: `0.5`,
                  vertical: !1,
                }),
                (0, _.jsx)(_, {
                  dataKey: `framerate`,
                  stroke: `white`,
                  label: {
                    value: _.Localize(`#GamePerformanceStats_Framerate`),
                    position: `bottom`,
                    fill: `#A9A9A9`,
                    fontSize: 14,
                  },
                }),
                (0, _.jsx)(_, {
                  stroke: `white`,
                  domain: [() => 0, (_) => Math.max(_, 100)],
                }),
                (0, _.jsx)(_, {
                  content: _,
                  cursor: !1,
                  isAnimationActive: !1,
                }),
                (0, _.jsx)(_, {
                  fill: `#1a9fff`,
                  activeBar: {
                    fill: `white`,
                  },
                  dataKey: `percentage`,
                  name: ``,
                }),
              ],
            }),
          }),
        ],
      })
    : (0, _.jsx)(`div`, {
        className: _(_, _),
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(
            `#GamePerformanceStats_StillGatheringData_NoDevice`,
          ),
        }),
      });
}
function _(_) {
  let {
    results: _,
    titleId: _,
    descriptionId: _,
    appName: _,
    buttonProps: _,
    autoFocus: _,
    onOpenBlogPost: _,
    eStartingTab: _ = 1,
    bShowTabs: _ = !0,
  } = _;
  if (!_) return null;
  let _ = () => {
      _
        ? _()
        : _.steam_deck_blog_url &&
          (window.location.href = _.steam_deck_blog_url);
    },
    _ = _ ?? {},
    _ = null,
    _ = null;
  if (
    (_.steam_deck_blog_url &&
      ((_.onOptionsActionDescription = _.Localize(
        `#SteamDeckVerified_ViewDeveloperPost`,
      )),
      (_.onOptionsButton = _),
      (_ = (0, _.jsx)(_, {
        blogURL: _.steam_deck_blog_url,
        eHWCompatibiltyDisplay: 1,
      })),
      (_ = (0, _.jsx)(_, {
        blogURL: _.steam_deck_blog_url,
        eHWCompatibiltyDisplay: 2,
      }))),
    !_.resolved_items?.length &&
      !_.machine_resolved_items?.length &&
      !_.frame_resolved_items?.length)
  ) {
    let _ = ``,
      _ = null,
      _ = null,
      _ = (0, _.jsx)(_, {
        category: _.resolved_category,
      });
    return (
      _ == 3
        ? ((_ = _.Localize(
            `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
          )),
          (_ = (0, _.jsx)(_, {
            _: _,
            category: _.machine_resolved_category,
            appName: _,
          })),
          (_ = (0, _.jsx)(_, {
            category: _.machine_resolved_category,
          })))
        : _ == 2
          ? ((_ = _.Localize(
              `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
            )),
            (_ = (0, _.jsx)(_, {
              _: _,
              category: _.steamos_resolved_category,
              appName: _,
            })),
            (_ = (0, _.jsx)(_, {
              category: _.steamos_resolved_category,
            })),
            (_ = _))
          : _ == 4
            ? ((_ = _.Localize(
                `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
              )),
              (_ = (0, _.jsx)(_, {
                _: _,
                category: _.frame_resolved_category,
                appName: _,
              })),
              (_ = (0, _.jsx)(_, {
                category: _.frame_resolved_category,
              })))
            : ((_ = _.Localize(
                `#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`,
              )),
              (_ = (0, _.jsx)(_, {
                category: _.resolved_category,
                appName: _,
              })),
              (_ = _)),
      (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          autoFocus: _,
          focusableIfEmpty: _,
          noFocusRing: !0,
          className: _,
          ..._,
          children: [
            (0, _.jsxs)(`div`, {
              _: _,
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
              ],
            }),
            _,
            _,
            (0, _.jsx)(_, {
              appid: _.appid,
              appName: _,
            }),
          ],
        }),
      })
    );
  }
  let _ = _(_.resolved_category),
    _ = _(_.steamos_resolved_category),
    _ = _(_.machine_resolved_category),
    _ = _(_.frame_resolved_category || 0);
  if (!_) {
    let _ = null;
    switch (_) {
      case 3:
        _ = (0, _.jsx)(_, {
          ..._,
        });
        break;
      case 2:
      case 5:
        _ = (0, _.jsx)(_, {
          ..._,
          deckBlogContent: _,
        });
        break;
      case 4:
        _ = (0, _.jsx)(_, {
          ..._,
        });
        break;
      default:
        _ = (0, _.jsx)(_, {
          ..._,
          deckBlogContent: _,
        });
    }
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        children: _,
      }),
    });
  }
  let _ = (_) =>
      window.sessionStorage.setItem(`steamdeckcompatibility`, `?tab=${_.key}`),
    _ = [
      {
        name: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              className: _,
            }),
            (0, _.jsx)(_, {
              className: _,
            }),
          ],
        }),
        key: `1`,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            ..._,
            deckBlogContent: _,
          }),
        }),
        onClick: _,
      },
      {
        name: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              className: _,
            }),
            (0, _.jsx)(_, {
              className: _,
            }),
          ],
        }),
        key: `3`,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            ..._,
          }),
        }),
        onClick: _,
      },
      {
        name: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            `steamos`,
            (0, _.jsx)(_, {
              className: _,
            }),
          ],
        }),
        key: `2`,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            ..._,
            deckBlogContent: _,
          }),
        }),
        onClick: _,
      },
      {
        name: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              className: _,
            }),
            (0, _.jsx)(_, {
              className: _,
            }),
          ],
        }),
        key: `4`,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            ..._,
          }),
        }),
        onClick: _,
      },
    ];
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      tabs: _,
      classNameCtn: _,
      classNameTabContent: _,
      startingTab: _.toString(),
      preferredFocus: !0,
      bDisableRouting: !0,
      focusRingHasBorderRadius: !0,
    }),
  });
}
function _(_) {
  let [_, _] = _.useState(!1),
    _ = _.useRef(null),
    _ = _.useCallback(() => {
      let _ = _.current;
      _ && _(_.scrollHeight > _.clientHeight);
    }, []),
    _ = _(_);
  return (0, _.jsx)(_, {
    ref: _,
    className: _,
    children: (0, _.jsx)(_, {
      ref: _,
      className: _,
      focusableIfEmpty: _,
      noFocusRing: !0,
      children: _.children,
    }),
  });
}
function _(_) {
  let {
      titleId: _,
      title: _,
      autoFocus: _,
      buttonProps: _,
      ratingIcon: _,
      ratingSummary: _,
      deckBlogContent: _,
      children: _,
    } = _,
    _ = _ ?? {};
  return (0, _.jsxs)(_, {
    className: _,
    ..._,
    children: [
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsxs)(`div`, {
            _: _,
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
            ],
          }),
          _,
        ],
      }),
      _,
      (0, _.jsx)(_, {
        autoFocus: _,
        focusableIfEmpty: _,
        noFocusRing: !0,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { titleId: _, descriptionId: _, results: _, appName: _ } = _,
    _ =
      _.steamos_resolved_items &&
      _.steamos_resolved_items?.findIndex((_) => _.display_type == 1) !== -1,
    _ = (0, _.jsx)(_, {
      _: _,
      category: _.steamos_resolved_category ?? 0,
      appName: _,
    }),
    _ = (0, _.jsx)(_, {
      category: _.steamos_resolved_category,
    }),
    _ = _.steamos_resolved_items && _.steamos_resolved_items?.length > 0;
  return (0, _.jsx)(_, {
    titleId: _,
    title: _.Localize(
      `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: _,
    ratingSummary: _,
    ..._,
    children: (0, _.jsxs)(_.Fragment, {
      children: [
        _ &&
          (0, _.jsx)(`div`, {
            className: `BlWeoXRF0aE-`,
          }),
        _.steamos_resolved_items &&
          _.steamos_resolved_items
            .filter((_) => _.display_type != 1)
            .map((_) =>
              (0, _.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, _.jsx)(_, {
                      displaytype: _.display_type,
                    }),
                    (0, _.jsx)(`span`, {
                      children: _.Localize(_.loc_token),
                    }),
                  ],
                },
                _.loc_token + _.display_type,
              ),
            ),
        _ &&
          (0, _.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: _.steamos_resolved_items
              ?.filter((_) => _.display_type == 1)
              .map((_) =>
                (0, _.jsxs)(
                  `div`,
                  {
                    className: `-vnBPYbU1nw-`,
                    children: [
                      (0, _.jsx)(_, {
                        displaytype: _.display_type,
                      }),
                      (0, _.jsx)(`span`, {
                        children: _.Localize(_.loc_token),
                      }),
                    ],
                  },
                  _.loc_token + _.display_type,
                ),
              ),
          }),
      ],
    }),
  });
}
function _(_) {
  let { titleId: _, descriptionId: _, results: _, appName: _ } = _,
    _ = _.resolved_items?.findIndex((_) => _.display_type == 1) !== -1,
    _ = (0, _.jsx)(_, {
      _: _,
      category: _.resolved_category,
      appName: _,
    }),
    _ = (0, _.jsx)(_, {
      category: _.resolved_category,
    }),
    _ = _.resolved_items && _.resolved_items?.length > 0;
  return (0, _.jsx)(_, {
    titleId: _,
    title: _.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`),
    ratingIcon: _,
    ratingSummary: _,
    ..._,
    children: (0, _.jsxs)(_.Fragment, {
      children: [
        _ &&
          (0, _.jsx)(`div`, {
            className: `BlWeoXRF0aE-`,
          }),
        _.resolved_items &&
          _.resolved_items
            .filter((_) => _.display_type !== 1)
            .map((_) =>
              (0, _.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, _.jsx)(_, {
                      displaytype: _.display_type,
                    }),
                    (0, _.jsx)(`span`, {
                      children:
                        _.loc_token.charAt(0) == `#`
                          ? _.Localize(_.loc_token)
                          : _.Localize(`#` + _.loc_token),
                    }),
                  ],
                },
                _.loc_token + _.display_type,
              ),
            ),
        _ &&
          _.resolved_items &&
          (0, _.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: _.resolved_items
              .filter((_) => _.display_type == 1)
              .map((_) =>
                (0, _.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, _.jsx)(`span`, {
                      children: _.Localize(_.loc_token),
                    }),
                  },
                  _.loc_token + _.display_type,
                ),
              ),
          }),
        (0, _.jsx)(_, {
          appid: _.appid,
          appName: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { titleId: _, descriptionId: _, results: _, appName: _ } = _,
    _ = _.machine_resolved_items?.findIndex((_) => _.display_type == 1) !== -1,
    _ = (0, _.jsx)(_, {
      _: _,
      category: _.machine_resolved_category,
      appName: _,
    }),
    _ = (0, _.jsx)(_, {
      category: _.machine_resolved_category,
    }),
    _ = _.machine_resolved_items && _.machine_resolved_items?.length > 0;
  return (0, _.jsx)(_, {
    titleId: _,
    title: _.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: _,
    ratingSummary: _,
    ..._,
    children: (0, _.jsxs)(_.Fragment, {
      children: [
        _ &&
          (0, _.jsx)(`div`, {
            className: `BlWeoXRF0aE-`,
          }),
        _.machine_resolved_items &&
          _.machine_resolved_items
            .filter((_) => _.display_type !== 1)
            .map((_) =>
              (0, _.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, _.jsx)(_, {
                      displaytype: _.display_type,
                    }),
                    (0, _.jsx)(`span`, {
                      children: _.Localize(_.loc_token),
                    }),
                  ],
                },
                _.loc_token + _.display_type,
              ),
            ),
        _ &&
          _.machine_resolved_items &&
          (0, _.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: _.machine_resolved_items
              .filter((_) => _.display_type == 1)
              .map((_) =>
                (0, _.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, _.jsx)(`span`, {
                      children: _.Localize(_.loc_token),
                    }),
                  },
                  _.loc_token + _.display_type,
                ),
              ),
          }),
      ],
    }),
  });
}
function _(_) {
  let { titleId: _, descriptionId: _, results: _, appName: _ } = _,
    _ = _.frame_resolved_items?.findIndex((_) => _.display_type == 1) !== -1,
    _ = (0, _.jsx)(_, {
      _: _,
      category: _.frame_resolved_category ?? 0,
      appName: _,
    }),
    _ = (0, _.jsx)(_, {
      category: _.frame_resolved_category ?? 0,
    }),
    _ = _.frame_resolved_items && _.frame_resolved_items?.length > 0;
  return (0, _.jsx)(_, {
    titleId: _,
    title: _.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: _,
    ratingSummary: _,
    ..._,
    children: (0, _.jsxs)(_.Fragment, {
      children: [
        _ &&
          (0, _.jsx)(`div`, {
            className: `BlWeoXRF0aE-`,
          }),
        _.frame_resolved_items &&
          _.frame_resolved_items
            .filter((_) => _.display_type !== 1)
            .map((_) =>
              (0, _.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, _.jsx)(_, {
                      displaytype: _.display_type,
                    }),
                    (0, _.jsx)(`span`, {
                      children: _.Localize(_.loc_token),
                    }),
                  ],
                },
                _.loc_token + _.display_type,
              ),
            ),
        _ &&
          _.frame_resolved_items &&
          (0, _.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: _.frame_resolved_items
              .filter((_) => _.display_type == 1)
              .map((_) =>
                (0, _.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, _.jsx)(`span`, {
                      children: _.Localize(_.loc_token),
                    }),
                  },
                  _.loc_token + _.display_type,
                ),
              ),
          }),
      ],
    }),
  });
}
function _(_) {
  let { blogURL: _, eHWCompatibiltyDisplay: _ } = _,
    _ = _();
  if (!_) return null;
  if (_) {
    let _ =
      _ == 2
        ? _.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog`)
        : _.Localize(`#SteamDeckVerified_DescriptionHeader_DeveloperBlog`);
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _,
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            button: _._,
            type: _.Knockout,
          }),
        }),
      ],
    });
  }
  let _ =
    _ == 2
      ? _.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog_Desktop`)
      : _.Localize(
          `#SteamDeckVerified_DescriptionHeader_DeveloperBlog_Desktop`,
        );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _,
      (0, _.jsx)(`a`, {
        href: _,
        className: _,
        children: _.Localize(`#SteamDeckVerified_ViewDeveloperPost`),
      }),
    ],
  });
}
function _(_) {
  let { displaytype: _ } = _;
  switch (_) {
    case 4:
      return (0, _.jsx)(_, {
        className: _,
      });
    case 3:
      return (0, _.jsx)(_, {
        className: _,
      });
    case 2:
      return (0, _.jsx)(_, {
        className: _,
      });
    case 0:
      return (0, _.jsx)(_, {
        className: _,
      });
    case 1:
      return null;
  }
}
function _(_) {
  let { displaytype: _ } = _;
  switch (_) {
    case 3:
      return (0, _.jsx)(_, {
        className: _,
      });
    case 1:
      return (0, _.jsx)(_, {
        className: _,
      });
    default:
      return null;
  }
}
function _(_) {
  let { histogram: _, deviceName: _, nFrameLimit: _, appName: _ } = _,
    _ = _
      ? _.Localize(`#GamePerformanceStats_FrameRateDistribution`, _, _)
      : _.Localize(`#GamePerformanceStats_FrameRateDistribution_ThisGame`, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#GamePerformanceStats_MoreInfoTitle`),
          }),
          (0, _.jsx)(`div`, {
            children: _,
          }),
        ],
      }),
      (0, _.jsx)(_, {
        histogram: _,
        minWidth: 200,
        minHeight: 200,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#GamePerformanceStats_MoreDetailsTitle`),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            children: _.Localize(
              `#GamePerformanceStats_MoreDetails_Filtering`,
              _,
              _,
            ),
          }),
          (0, _.jsx)(`div`, {
            children: _.Localize(
              `#GamePerformanceStats_MoreDetails_VSync`,
              _ / 2,
              _,
            ),
          }),
        ],
      }),
    ],
  });
}
var _ = [4, 3];
function _(_) {
  let { appid: _, appName: _ } = _,
    _ = _(_),
    { data: _ } = _(void 0, !!_),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(void 0),
    _ = _.useRef(null),
    _ = (0, _.useMemo)(() => {
      let _ = new Map();
      for (let _ of _) {
        let _ = _?.frame_rates?.find((_) => _.clusterid == `` + _);
        if (_) {
          let _ = _.mean_frame_rate ?? 0;
          _.set(_, {
            average: _ > 0 ? _.toFixed(0) : void 0,
            histogram: _.frame_rate_histogram,
            lastUpdated: _.last_updated,
          });
        }
      }
      return _;
    }, [_]),
    _ = (0, _.useMemo)(() => {
      let _ = !!_.get(3)?.average,
        _ = !!_.get(4)?.average;
      return _ &&
        ((_?.has_steam_deck_neptune && !_?.has_steam_deck_galileo) || !_)
        ? 3
        : 4;
    }, [_, _]),
    _ = _.useMemo(
      () =>
        new Map([
          [3, _.Localize(`#GamePerformanceStats_SteamDeckLCD`)],
          [4, _.Localize(`#GamePerformanceStats_SteamDeckOLED`)],
        ]),
      [],
    );
  if (!_) return null;
  if (!Array.from(_.values()).some((_) => !!_.average))
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(
            `#GamePerformanceStats_StillGatheringData_NoDevice`,
          ),
        }),
      ],
    });
  let _ = _.map((_) => ({
      name: (0, _.jsx)(`div`, {
        className: _,
        children: _.get(_),
      }),
      key: _.toString(),
      contents: (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          histogram: _.get(_)?.histogram,
          deviceName: _.get(_) ?? ``,
          nFrameLimit: _ == 3 ? 60 : 90,
          appName: _,
        }),
      }),
      onClick: () => _(_),
    })),
    _ = _ ?? _,
    _ = _.get(_) ?? ``,
    _ = _.get(_)?.average,
    _ = _.get(_)?.lastUpdated ?? 0,
    _;
  if (_) {
    let _ = (0, _.jsx)(`span`, {
      className: _,
      children: _.Localize(`#GameFrameRate_FPS`, _),
    });
    _ = _.LocalizeReact(`#GameFrameRate_Description_ThisGame`, _, _);
  } else
    _ = _
      ? _.Localize(`#GamePerformanceStats_StillGatheringData`, _, _)
      : _.Localize(`#GamePerformanceStats_StillGatheringData_ThisGame`, _);
  let _ = !!_ && !_;
  return (0, _.jsxs)(`div`, {
    className: _,
    onTransitionEnd: (_) => {
      _.propertyName == `height` &&
        _.current?.scrollIntoView({
          behavior: `smooth`,
          block: `nearest`,
        });
    },
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsxs)(_, {
        className: _,
        onActivate: _ ? () => _(!_) : void 0,
        focusable: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _,
              _ &&
                (0, _.jsx)(_, {
                  className: `heKA7rr02xo-`,
                  direction: _ ? `up` : `down`,
                }),
            ],
          }),
          !!_ &&
            _ > 0 &&
            (0, _.jsx)(`div`, {
              className: `HKN5tcQd-XE-`,
              children: _.Localize(`#GameFrameRate_LastUpdated`, _(_)),
            }),
        ],
      }),
      (0, _.jsx)(_, {
        visible: _,
        children: (0, _.jsx)(`div`, {
          ref: _,
          className: _,
          children: (0, _.jsx)(_, {
            tabs: _,
            classNameCtn: _,
            startingTab: _.toString(),
            controlledTab: _.toString(),
            preferredFocus: !0,
            bDisableRouting: !0,
            focusRingHasBorderRadius: !0,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { _: _, compatibility: _, onShowDialog: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_),
    [_, _, _] = _();
  if (!_ || !_ || _.item_type !== 0) return null;
  let _ = null,
    _ = null;
  if (_ == 4) {
    let _ = _.steam_frame_compat_category || 0;
    ((_ = (0, _.jsx)(_, {
      category: _,
    })),
      (_ = _.Localize(
        `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else if (_ == 3) {
    let _ = _.steam_machine_compat_category || 0;
    ((_ = (0, _.jsx)(_, {
      category: _,
    })),
      (_ = _.Localize(
        `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else {
    let _ = _.steam_deck_compat_category || 0;
    ((_ = (0, _.jsx)(_, {
      category: _,
    })),
      (_ = _.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`)));
  }
  return (0, _.jsxs)(`div`, {
    className: _(_, `LearnMoreCtn`),
    children: [
      _,
      (0, _.jsx)(_, {
        onClick: (_) => {
          (_.preventDefault(), (_ ?? _)());
        },
        children: (0, _.jsx)(`span`, {
          className: _,
          children: _,
        }),
      }),
      !_ &&
        (0, _.jsx)(_, {
          nAppID: _.appid,
          appName: _.name,
          active: _,
          startingTab: _,
          closeModal: _,
        }),
    ],
  });
}
function _(_) {
  let { nAppID: _, active: _, appName: _, startingTab: _, closeModal: _ } = _;
  return (0, _.jsx)(_, {
    active: _,
    children: (0, _.jsx)(_, {
      nAppID: _,
      appName: _,
      startingTab: _,
      closeModal: _,
    }),
  });
}
function _(_) {
  let { nAppID: _, appName: _, startingTab: _, closeModal: _ } = _,
    _ = _(_),
    _ = _.useId();
  return (0, _.jsx)(_, {
    "aria-labelledby": _,
    modalClassName: `DeckVerifiedModalDialog`,
    closeModal: _,
    onCancel: _,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        focusable: !1,
        "flow-children": `column`,
        className: _,
        children: _
          ? (0, _.jsx)(_, {
              titleId: _,
              appName: _,
              results: _,
              eStartingTab: _,
            })
          : (0, _.jsx)(_, {
              size: `medium`,
              position: `center`,
              string: _.Localize(`#Loading`),
            }),
      }),
    }),
  });
}
function _(_) {
  let { category: _ } = _;
  switch (_) {
    case 3:
      return (0, _.jsx)(_, {
        className: _,
        role: `presentation`,
      });
    case 2:
      return (0, _.jsx)(_, {
        className: _,
        role: `presentation`,
      });
    case 1:
      return (0, _.jsx)(_, {
        className: _,
        role: `presentation`,
      });
    default:
      return (0, _.jsx)(_, {
        className: _,
        role: `presentation`,
      });
  }
}
function _(_) {
  let { category: _ } = _;
  switch (_) {
    case 2:
      return (0, _.jsx)(_, {
        className: _,
        role: `presentation`,
      });
    case 1:
      return (0, _.jsx)(_, {
        className: _,
        role: `presentation`,
      });
    default:
      return (0, _.jsx)(_, {
        className: _,
        role: `presentation`,
      });
  }
}
function _(_) {
  let { _: _, category: _, appName: _, descriptionToken: _ } = _;
  if (_ == 0)
    return (0, _.jsx)(`div`, {
      _: _,
      className: _,
      children: _
        ? _.LocalizeReact(
            `#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, _.jsx)(`b`, {
              children: _(_),
            }),
          )
        : _.Localize(`#SteamDeckVerified_DescriptionHeader_Unknown`),
    });
  let _ = ``,
    _ = null;
  switch (_) {
    case 3:
      ((_ = `#SteamDeckVerified_DescriptionHeader_Verified`), (_ = _));
      break;
    case 2:
      ((_ = `#SteamDeckVerified_DescriptionHeader_Playable`), (_ = _));
      break;
    case 1:
      ((_ = `#SteamDeckVerified_DescriptionHeader_Unsupported`), (_ = _));
  }
  let _ = (0, _.jsx)(`span`, {
      className: _,
      children: _.Localize(_(_)),
    }),
    _ = (0, _.jsx)(`span`, {
      className: _,
      children: _.Localize(_ || _),
    }),
    _ = _
      ? _.LocalizeReact(
          `#SteamDeckVerified_DescriptionHeader_WithAppName`,
          (0, _.jsx)(`b`, {
            children: _(_),
          }),
          _,
          _,
        )
      : _.LocalizeReact(`#SteamDeckVerified_DescriptionHeader`, _, _);
  return (0, _.jsx)(`div`, {
    _: _,
    className: _,
    children: _,
  });
}
function _(_) {
  let { _: _, category: _, appName: _, descriptionToken: _ } = _;
  if (_ == 0)
    return (0, _.jsx)(`div`, {
      className: _,
      children: _
        ? _.LocalizeReact(
            `#SteamOSCompatibility_DescriptionHeader_Unknown_WithAppName`,
            (0, _.jsx)(`b`, {
              children: _(_),
            }),
          )
        : _.Localize(`#SteamOSCompatibility_DescriptionHeader_Unknown`),
    });
  let _ = ``,
    _ = null;
  switch (_) {
    case 2:
      ((_ = `#SteamOSCompatibility_DescriptionHeader_Compatible`), (_ = _));
      break;
    case 1:
      ((_ = `#SteamOSCompatibility_DescriptionHeader_Unsupported`), (_ = _));
  }
  let _ = (0, _.jsx)(`span`, {
      className: _,
      children: _.Localize(_(_)),
    }),
    _ = (0, _.jsx)(`span`, {
      className: _,
      children: _.Localize(_ || _),
    }),
    _ = _
      ? _.LocalizeReact(
          `#SteamOSCompatibility_DescriptionHeader_WithAppName`,
          (0, _.jsx)(`b`, {
            children: _(_),
          }),
          _,
          _,
        )
      : _.LocalizeReact(`#SteamOSCompatibility_DescriptionHeader`, _, _);
  return (0, _.jsx)(`div`, {
    _: _,
    className: _,
    children: _,
  });
}
function _(_) {
  let { _: _, category: _, appName: _, descriptionToken: _ } = _;
  if (_ == 0)
    return (0, _.jsx)(`div`, {
      className: _,
      children: _
        ? _.LocalizeReact(
            `#SteamMachineVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, _.jsx)(`b`, {
              children: _(_),
            }),
          )
        : _.Localize(`#SteamMachineVerified_DescriptionHeader_Unknown`),
    });
  let _ = ``,
    _ = null;
  switch (_) {
    case 3:
      ((_ = `#SteamMachineVerified_DescriptionHeader_Verified`), (_ = _));
      break;
    case 2:
      ((_ = `#SteamMachineVerified_DescriptionHeader_Playable`), (_ = _));
      break;
    case 1:
      ((_ = `#SteamMachineVerified_DescriptionHeader_Unsupported`), (_ = _));
  }
  let _ = (0, _.jsx)(`span`, {
      className: _,
      children: _.Localize(_(_)),
    }),
    _ = (0, _.jsx)(`span`, {
      className: _,
      children: _.Localize(_ || _),
    }),
    _ = _
      ? _.LocalizeReact(
          `#SteamMachineVerified_DescriptionHeader_WithAppName`,
          (0, _.jsx)(`b`, {
            children: _(_),
          }),
          _,
          _,
        )
      : _.LocalizeReact(`#SteamMachineVerified_DescriptionHeader`, _, _);
  return (0, _.jsx)(`div`, {
    _: _,
    className: _,
    children: _,
  });
}
function _(_) {
  let { _: _, category: _, appName: _, descriptionToken: _ } = _;
  if (_ == 0)
    return (0, _.jsx)(`div`, {
      className: _,
      children: _
        ? _.LocalizeReact(
            `#SteamFrameVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, _.jsx)(`b`, {
              children: _(_),
            }),
          )
        : _.Localize(`#SteamFrameVerified_DescriptionHeader_Unknown`),
    });
  let _ = ``,
    _ = null;
  switch (_) {
    case 3:
      ((_ = `#SteamFrameVerified_DescriptionHeader_Verified`), (_ = _));
      break;
    case 2:
      ((_ = `#SteamFrameVerified_DescriptionHeader_Playable`), (_ = _));
      break;
    case 1:
      ((_ = `#SteamFrameVerified_DescriptionHeader_Unsupported`), (_ = _));
  }
  let _ = (0, _.jsx)(`span`, {
      className: _,
      children: _.Localize(_(_)),
    }),
    _ = (0, _.jsx)(`span`, {
      className: _,
      children: _.Localize(_ || _),
    }),
    _ = _
      ? _.LocalizeReact(
          `#SteamFrameVerified_DescriptionHeader_WithAppName`,
          (0, _.jsx)(`b`, {
            children: _(_),
          }),
          _,
          _,
        )
      : _.LocalizeReact(`#SteamFrameVerified_DescriptionHeader`, _, _);
  return (0, _.jsx)(`div`, {
    _: _,
    className: _,
    children: _,
  });
}
function _(_) {
  switch (_) {
    case 3:
      return `#SteamDeckVerified_Category_Verified`;
    case 2:
      return `#SteamDeckVerified_Category_Playable`;
    case 1:
      return `#SteamDeckVerified_Category_Unsupported`;
    default:
      return `#SteamDeckVerified_Category_Unknown`;
  }
}
function _(_) {
  switch (_) {
    case 2:
      return `#SteamOSCompatibility_Category_Compatible`;
    case 1:
      return `#SteamOSCompatibility_Category_Unsupported`;
    default:
      return `#SteamOSCompatibility_Category_Unknown`;
  }
}
function _(_) {
  return _ == 2 ? `bundle` : _ == 1 ? `sub` : `app`;
}
function _(_, _) {
  let _ = _ || +!!_;
  return [!!_, _];
}
var _ = (_) => {
  let { appid: _ } = _,
    _ = (0, _.jsx)(`div`, {
      className: `ImpressionTrackedElement`,
      children: _.children,
    });
  return _
    ? (0, _.jsx)(_, {
        appID: _,
        children: _,
      })
    : _;
};
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_);
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _.slice(0, 10)
            .filter((_) => _.tagid)
            .map((_) =>
              (0, _.jsx)(
                _,
                {
                  tagid: _.tagid,
                  className: _,
                },
                `tag_` + _.tagid,
              ),
            ),
        }),
      })
    : null;
}
function _(_) {
  let {
      _: _,
      displayID: _,
      name: _,
      strStoreUrl: _,
      elElementToAppend: _,
      bShowDemoButton: _,
      bHideBottomHalf: _,
      bHidePrice: _,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: _,
      onShowDeckCompatibilityDialog: _,
      bUseSubscriptionLayout: _,
      nCreatorAccountID: _,
      bPreventNavigation: _,
      bShowDescription: _,
    } = _,
    _ = _(),
    _ =
      _ &&
      (() => {
        (_?.(), _());
      }),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(``),
    _ = (_) => _(`translateY( -${_?.clientHeight || 0}px )`),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = !_ && !_ && !_,
    _ = _ && _.item_type == 0,
    [_, _] = _(_, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    style: {
      transform: _ && _ ? _ : ``,
    },
    onMouseEnter: () => _(!0),
    onFocus: () => _(!0),
    onMouseLeave: () => _(!1),
    onBlur: () => _(!1),
    children: [
      (0, _.jsxs)(`a`, {
        href: _,
        className: _,
        onClick: (_) => {
          _ && _.preventDefault();
        },
        "aria-disabled": _,
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `JsLUT-ZChQQ-`,
              children: (0, _.jsx)(`div`, {
                className: _(`-G728TP4qEc-`, `AWrycDVaY80-`),
                children: (0, _.jsx)(`img`, {
                  loading: `lazy`,
                  src: _(_, `header`),
                  alt: _?.name,
                }),
              }),
            }),
          !_ &&
            !_ &&
            (0, _.jsx)(`div`, {
              className: `Er5Gw2jrA3A-`,
              children: (0, _.jsx)(_, {
                _: _,
                onlyOneDiscountPct: !0,
              }),
            }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        ref: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`a`, {
              href: _,
              onClick: (_) => {
                _ && _.preventDefault();
              },
              "aria-disabled": _,
              children: (0, _.jsx)(`div`, {
                className: _,
                children: _?.name || _,
              }),
            }),
            _ &&
              (0, _.jsx)(_, {
                _: _,
              }),
            (0, _.jsx)(_, {
              _: _,
            }),
            !_ &&
              (0, _.jsx)(_, {
                _: _,
              }),
            !(_ || !_) &&
              (0, _.jsxs)(`div`, {
                className: `N6R56w3oY8s-`,
                children: [
                  (0, _.jsx)(_, {
                    _: _,
                    strClassName: `aRGldfNGEPM-`,
                  }),
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                ],
              }),
            _ &&
              (0, _.jsx)(_, {
                _: _,
                className: `mVkwv5PYwMg-`,
              }),
            !!(_ && _) &&
              (0, _.jsx)(_, {
                _: _,
                compatibility: _,
                onShowDialog: _,
              }),
            !!_ && _,
            _ &&
              _ &&
              _ &&
              `appid` in _ &&
              _.appid &&
              (0, _.jsx)(_, {
                appid: _.appid,
                bIsMuted: !1,
              }),
            _ &&
              (0, _.jsx)(_, {
                nCreatorAccountID: _,
              }),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_);
  if (!_) return null;
  let _ = _(_);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _,
  });
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_);
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _?.short_description,
      })
    : null;
}
function _(_) {
  let {
      _: _,
      displayID: _,
      strStoreUrl: _,
      bHideBottomHalf: _,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: _,
      bShowWishlistButton: _ = !0,
      bShowIgnoreButton: _ = !1,
    } = _,
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _ === void 0 && _ === void 0,
    [_] = _(!!_, _);
  return (0, _.jsxs)(`div`, {
    className: _(_, _ && `dNo27dzDPfI-`, _, _ && `djLCJl8FKv8-`),
    children: [
      (0, _.jsxs)(`a`, {
        href: _,
        className: _,
        children: [
          !(!_ || _) &&
            (0, _.jsx)(_, {
              _: _,
              snr: _.strSNR,
            }),
          !(!_ || _) &&
            (0, _.jsx)(_, {
              _: _,
              snr: _.strSNR,
            }),
          _ &&
            (0, _.jsx)(_, {
              _: _,
            }),
        ],
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  let {
      _: _,
      name: _,
      bPreventNavigation: _,
      elElementToAppend: _,
      bShowDemoButton: _,
      bPreferDemoStorePage: _,
      bHidePrice: _,
      bUseSubscriptionLayout: _,
      strExtraParams: _,
      children: _,
      nCreatorAccountID: _,
      nWidthMultiplier: _,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: _,
      bShowWishlistButton: _ = !0,
      bShowIgnoreButton: _ = !1,
      bShowDescription: _ = !1,
      strChildLinkURL: _,
      ..._
    } = _,
    { data: _ } = _(_),
    _ = _(),
    [_, _, _] = _(),
    { strStoreURL: _, snr: _ } = _(_, _);
  if ((!_ && !_) || _)
    return (0, _.jsx)(_.Fragment, {
      children: _,
    });
  let _ = _;
  _ &&
    _.item_type == 1 &&
    _.included_appids?.length == 1 &&
    (_ = {
      appid: _.included_appids[0],
    });
  let _ = _() == `hiding`,
    _;
  _ || (_ = _ ?? (_ ? _ : void 0));
  let [, _] = _(_, _),
    _;
  _ != 0 && _?.appid && _?.item_type == 0 && (_ = _.appid);
  let _ = (0, _.jsx)(_, {
      _: _,
      displayID: _,
      name: _,
      bPreventNavigation: _,
      strStoreUrl: _,
      elElementToAppend: _,
      bShowDemoButton: _,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: _,
      bHideBottomHalf: _,
      bHidePrice: _,
      bUseSubscriptionLayout: _,
      strSNR: _,
      nCreatorAccountID: _,
      bShowWishlistButton: _,
      bShowIgnoreButton: _,
      bShowDescription: _,
      onShowDeckCompatibilityDialog: _ ? _ : void 0,
    }),
    _ =
      _ && !_
        ? (0, _.jsx)(`a`, {
            href: _,
            children: _,
          })
        : _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        hoverContent: _,
        nWidthMultiplier: _,
        ..._,
        children: _,
      }),
      _ &&
        (0, _.jsx)(_, {
          nAppID: _,
          appName: _?.name || _,
          startingTab: _,
          active: _,
          closeModal: _,
        }),
    ],
  });
}
function _(_) {
  return (0, _.useMemo)(() => _(_), [_?._, _?.type]);
}
function _(_, _) {
  return (0, _.useMemo)(() => _(_, _), [_, _]);
}
function _(_, _) {
  return (0, _.useMemo)(() => _(_, _), [_, _]);
}
function _(_) {
  if (_ && _._) {
    if (!_.type)
      return {
        appid: _._,
      };
    switch (_.type) {
      case `sub`:
        return {
          packageid: _._,
        };
      case `bundle`:
        return {
          bundleid: _._,
        };
      default:
        return {
          appid: _._,
        };
    }
  }
}
function _(_, _) {
  switch (_) {
    case `sub`:
      return {
        packageid: _,
      };
    case `bundle`:
      return {
        bundleid: _,
      };
    default:
      return {
        appid: _,
      };
  }
}
function _(_, _) {
  switch (_) {
    case `sub`:
      return {
        packageid: _,
      };
    case `bundle`:
      return {
        bundleid: _,
      };
    default:
      return {
        appid: _,
      };
  }
}
var _ = 6;
function _(_) {
  let { _: _, bHideInLibraryApps: _ } = _,
    { data: _ } = _(_),
    _ = _?.item_type == 2,
    { data: _ } = _(),
    _ = _.useMemo(() => {
      if (_)
        return _.item_type === 1 || _.item_type === 2
          ? (_.included_appids || [])
              .filter((_) => !_ || !_ || !_?.has(_))
              .map((_) => ({
                appid: _,
              }))
          : (console.error(
              `ContentsPreviewList unexpected store item type:`,
              _.item_type,
            ),
            null);
    }, [_, _, _, _]);
  if (!_ || _.length == 0) return null;
  let _ = _.length,
    _ = _.LocalizePlural(`#Sale_ContentPreview`, _);
  if (_ && _) {
    let _ = _.included_appids?.length || 0;
    _ != _ && (_ = _.Localize(`#Sale_Bundle_CompletePartialSet`, _ - _, _));
  }
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: _.Localize(`#AppType_bundle`),
            }),
          _,
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.slice(0, _).map((_) =>
          (0, _.jsx)(
            _,
            {
              _: _,
            },
            `preview${_(_)}`,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_ || !_) return null;
  let _ = _(_, `small_capsule`);
  return (0, _.jsx)(_, {
    _: _,
    className: _,
    hoverProps: {
      direction: `right`,
      style: {
        minWidth: `350px`,
      },
    },
    children: (0, _.jsx)(`img`, {
      src: _,
      className: _,
      loading: `lazy`,
      alt: _.name || ``,
    }),
  });
}
function _(_) {
  let { _: _, strClassName: _, bMinimizePlatforms: _, bHideWindows: _ } = _,
    { data: _ } = _(_);
  if (!_) return null;
  if (_) {
    let _ = _
      ? null
      : _?.windows &&
        (0, _.jsx)(`span`, {
          title: _.Localize(`#Platform_Windows`),
          children: (0, _.jsx)(_, {
            "aria-label": _.Localize(`#Platform_Windows`),
          }),
        });
    return (
      _.PLATFORM === `linux` && _?.steamos_linux
        ? (_ = (0, _.jsx)(`span`, {
            title: _.Localize(`#Platform_Linux`),
            children: (0, _.jsx)(_, {
              "aria-label": _.Localize(`#Platform_Linux`),
            }),
          }))
        : _.PLATFORM === `macos` && _?.mac
          ? (_ = (0, _.jsx)(`span`, {
              title: _.Localize(`#Platform_Mac`),
              children: (0, _.jsx)(_, {
                "aria-label": _.Localize(`#Platform_Mac`),
              }),
            }))
          : _.vr_support?.vrhmd &&
            (_ = (0, _.jsx)(`span`, {
              title: _.Localize(`#Platform_VR`),
              children: (0, _.jsx)(_, {
                "aria-label": _.Localize(`#Platform_VR`),
              }),
            })),
      _
        ? (0, _.jsx)(`span`, {
            className: _(_, _),
            children: _,
          })
        : null
    );
  }
  return (0, _.jsxs)(`span`, {
    className: _(_, _),
    children: [
      !_ &&
        _.windows &&
        (0, _.jsx)(`span`, {
          title: _.Localize(`#Platform_Windows`),
          children: (0, _.jsx)(_, {
            "aria-label": _.Localize(`#Platform_Windows`),
          }),
        }),
      _.mac &&
        (0, _.jsx)(`span`, {
          title: _.Localize(`#Platform_Mac`),
          children: (0, _.jsx)(_, {
            "aria-label": _.Localize(`#Platform_Mac`),
          }),
        }),
      _.steamos_linux &&
        (0, _.jsx)(`span`, {
          title: _.Localize(`#Platform_Linux`),
          children: (0, _.jsx)(_, {
            "aria-label": _.Localize(`#Platform_Linux`),
          }),
        }),
      _.vr_support?.vrhmd &&
        (0, _.jsx)(`span`, {
          title: _.Localize(`#Platform_VR`),
          children: (0, _.jsx)(_, {
            "aria-label": _.Localize(`#Platform_VR`),
          }),
        }),
    ],
  });
}
function _(_) {
  let {
      bundle_discount_pct: _ = 0,
      discount_pct: _ = 0,
      price_before_bundle_discount: _,
      formatted_price_before_bundle_discount: _,
      final_price_in_cents: _,
      price_to_base_discount_on: _,
    } = _,
    _ = Number.parseInt(_ || `0`);
  if (!(_ <= 0 || _ <= 0 || !_) && !(Number.parseInt(_ || `0`) > 0))
    return _ <= 0
      ? {
          nDiscountPct: _,
          strOriginalPrice: _,
          nSupersededBundlePct: 0,
        }
      : {
          nDiscountPct: Math.min(
            Math.floor(((_ - Number.parseInt(_ || `0`)) / _) * 100 + 0.5),
            99,
          ),
          strOriginalPrice: _,
          nSupersededBundlePct: _,
        };
}
function _(_, _, _) {
  return _
    ? _
      ? _
        ? `#Sale_Bundle_Discount_Limited_ttip`
        : `#Sale_Bundle_Discount_ttip`
      : _
        ? `#Sale_CompleteTheSet_Discount_Limited_ttip`
        : `#Sale_CompleteTheSet_Discount_ttip`
    : `#Sale_Discount_ttip`;
}
function _(_) {
  let { _: _, bSelfPurchaseOption: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_) return null;
  let _ = _ && _.item_type == 1 ? _.self_purchase_option : _;
  return (0, _.jsx)(_, {
    purchaseOption: _,
    ..._,
  });
}
function _(_) {
  let {
      bSingleLineMode: _,
      onlyOneDiscountPct: _,
      _: _,
      purchaseOption: _,
      bHidePrePurchase: _,
      bHideReleaseDate: _,
      bHideIfDemo: _,
      bPurchaseOptionDisplay: _,
      strContainerClassName: _,
      strDiscountAndPriceClassName: _,
      strPriceFormattedClassName: _,
      bPreferWholeNumbers: _,
      bSelfPurchaseOption: _,
      bHideNewTag: _,
      bPrePurchaseBesidePrice: _,
    } = _,
    _ = _.NOW,
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_) return null;
  let _ = _,
    _ = !_ && _(_, _),
    _ = _({
      [_]: !0,
      [_]: _,
      StoreSalePriceWidgetContainer: !0,
      [_]: _,
      [_]: _,
      [_ ?? ``]: !!_,
    });
  if (_.bShowInLibrary)
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#EventDisplay_CallToAction_InLibrary`),
      }),
    });
  if (_ && _.is_coming_soon && (!_ || (!_.packageid && !_.bundleid))) {
    if (_) return null;
    let _ =
      _.coming_soon_display &&
      [`text_comingsoon`, `text_tba`].includes(_.coming_soon_display)
        ? _(_)
        : _.Localize(`#EventDisplay_CallToAction_ComingSoon_Date`, _(_));
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    });
  }
  if (_.is_free) {
    if (!_.is_free_temporarily)
      return _.item_type == 0 && _.type == 1
        ? _
          ? null
          : (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _ &&
                  (0, _.jsx)(`div`, {
                    className: `eNdjZ1XB-fk-`,
                    children: _.Localize(`#Flag_New`),
                  }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _.Localize(`#EventDisplay_CallToAction_FreeDemo`),
                }),
              ],
            })
        : (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _ &&
                (0, _.jsx)(`div`, {
                  className: `eNdjZ1XB-fk-`,
                  children: _.Localize(`#Flag_New`),
                }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _.Localize(`#EventDisplay_CallToAction_FreeToPlay`),
              }),
            ],
          });
    if (_ && _.is_free_to_keep && !_.formatted_original_price)
      return (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#EventDisplay_CallToAction_Free`),
        }),
      });
  }
  if (!_ || !_.formatted_final_price) return null;
  let _ = _.item_type == 2,
    _ = _(_),
    _ = !!_ && !_.nSupersededBundlePct,
    _ = _?.nSupersededBundlePct ? _.nDiscountPct : _.discount_pct || 0,
    _ = ((_ || _) && (!_ || _ || (_ && !_)) && _.bundle_discount_pct) || 0,
    _ = _.formatted_final_price;
  if (_) {
    let _ = _(_.country_code.toUpperCase()),
      _ = {
        ..._(_),
        bWholeUnitsOnly: !0,
      };
    _ = _(Number.parseInt(_.final_price_in_cents || `0`), _);
  }
  let _ = _(_, _);
  return (0, _.jsx)(_, {
    bSingleLineMode: !!_,
    bBundleItem: _,
    nBaseDiscountPercentage: _,
    nDiscountPercentage: _,
    bIsPrePurchase: _,
    strBestPurchaseOriginalPriceFormatted:
      _?.strOriginalPrice || _.formatted_original_price || ``,
    strBestPurchasePriceFormatted: _,
    bHideDiscountPercentForCompliance: !!_.hide_discount_pct_for_compliance,
    bShowNewFlag: _,
    bHidePrePurchase: !!_,
    bPrePurchaseBesidePrice: _,
    strDiscountAndPriceClassName: _,
    strPriceFormattedClassName: _,
    bPurchaseOptionDisplay: _,
  });
}
function _(_) {
  let {
      bSingleLineMode: _,
      nDiscountPercentage: _,
      bIsPrePurchase: _,
      nBaseDiscountPercentage: _,
      strBestPurchaseOriginalPriceFormatted: _,
      strBestPurchasePriceFormatted: _,
      bHideDiscountPercentForCompliance: _,
      bShowNewFlag: _,
      bHidePrePurchase: _,
      bPrePurchaseBesidePrice: _,
      strDiscountAndPriceClassName: _,
      strPriceFormattedClassName: _,
      bPurchaseOptionDisplay: _,
      bBundleItem: _,
    } = _,
    _ = _,
    _;
  _ &&
    (_ = _
      ? _.Localize(`#Discount_ARIA_Label_SpecialPrice`, _)
      : _.Localize(`#Discount_ARIA_Label`, _, _, _));
  let _ = !((!_ && !_) || _) && !!_,
    _ = !(!_ || !_ || _ || _),
    _ = _.Localize(_(!!_, !!_, !!_));
  return (0, _.jsxs)(`div`, {
    className: _({
      [_]: !0,
      [_]: _,
      StoreSalePriceWidgetContainer: !0,
      [_]: !!_,
      Discounted: !!_,
      [_]: !!_,
      [_]: !!_,
      [_]: !!_,
      [_]: _,
      [_ ?? ``]: !!_,
    }),
    "aria-label": _,
    children: [
      !(!_ || _) &&
        (0, _.jsx)(`div`, {
          className: _(`DfwzMU92EL4-`, `StoreSalePrepurchaseLabel`),
          children: (0, _.jsxs)(`span`, {
            children: [
              (0, _.jsx)(_, {}),
              _.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
            ],
          }),
        }),
      !(_ || !_) &&
        (0, _.jsx)(`div`, {
          className: `eNdjZ1XB-fk-`,
          children: _.Localize(`#Flag_New`),
        }),
      _ &&
        (0, _.jsx)(_, {
          toolTipContent: _,
          children: (0, _.jsxs)(`span`, {
            className: _(`kjiBcsaqA8o-`, `_3jMC2e33p3s-`),
            children: [
              (0, _.jsx)(`span`, {
                className: `cCmCiA6FCMc-`,
                children: `-${_}%`,
              }),
              `-${_}%`,
            ],
          }),
        }),
      !(!_ || _ || _) &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              toolTipContent: _,
              children: (0, _.jsx)(`span`, {
                className: _(`_-1f811oo4iw-`),
                children: `-${_}%`,
              }),
            }),
            !!_ &&
              (0, _.jsx)(_, {
                toolTipContent: _,
                children: (0, _.jsx)(`span`, {
                  className: _(`kjiBcsaqA8o-`),
                  children: `-${_}%`,
                }),
              }),
          ],
        }),
      !(_ || !_ || _) &&
        (0, _.jsx)(_, {
          toolTipContent: _,
          children: (0, _.jsx)(`div`, {
            className: _(`kjiBcsaqA8o-`, `StoreSaleDiscountBox`),
            children: `-${_}%`,
          }),
        }),
      !!(_ && _) &&
        (0, _.jsx)(`div`, {
          className: `NqZ9uMSo13A-`,
          children: (0, _.jsx)(_, {}),
        }),
      _
        ? (0, _.jsxs)(`div`, {
            className: _(_),
            children: [
              (0, _.jsx)(`div`, {
                className: _({
                  [_]: _,
                  [_]: !_,
                }),
                children: _,
              }),
              (0, _.jsx)(`div`, {
                className: _({
                  [_]: !0,
                  [_]: _,
                  [_ ?? ``]: !!_,
                }),
                children: _,
              }),
            ],
          })
        : (0, _.jsx)(`div`, {
            className: _({
              [_]: !0,
              [_ ?? ``]: !!_,
            }),
            children: _,
          }),
    ],
  });
}
async function _() {
  let _ = _(`broadcast_available_for_page`, `application_config`);
  if (_(_)) {
    let _ = new Set();
    return (
      _.filtered.forEach((_) => {
        _.appid && _.add(_.appid);
      }),
      Array.from(_)
    );
  }
  return [];
}
var _ = class {
  constructor() {
    _(this);
  }
  accountid;
  steamid;
  appid;
  hub_popular;
  popular;
  relay_broadcast_id;
  rowversion;
  thumbnail_http_address;
  nAppIDVOD;
  title = void 0;
  viewer_count = void 0;
  whitelist_rank;
  gamedata_subtitle = void 0;
  store_title;
  left_panel;
  right_panel;
  snr;
  broadcast_chat_visibility;
  default_selection_priority = 0;
  current_selection_priority = 0;
};
(_([_], _.prototype, `title`, void 0),
  _([_], _.prototype, `viewer_count`, void 0),
  _([_], _.prototype, `gamedata_subtitle`, void 0),
  _([_], _.prototype, `current_selection_priority`, void 0));
var _ = `primary`,
  _ = `featured`,
  _ = `default_featured`,
  _ = `general`,
  _ = (function (_) {
    return (
      (_[(_.k_ePrimary = 3)] = `k_ePrimary`),
      (_[(_.k_eFeatured = 2)] = `k_eFeatured`),
      (_[(_.k_eDefaultFeatured = 1)] = `k_eDefaultFeatured`),
      (_[(_.k_eGeneral = 0)] = `k_eGeneral`),
      _
    );
  })({});
function _(_) {
  switch (_) {
    case _:
      return 3;
    case _:
      return 2;
    case _:
      return 1;
    case _:
    default:
      return 0;
  }
}
function _(_) {
  let _ = _;
  return _ &&
    typeof _.success == `number` &&
    _.filtered &&
    Array.isArray(_.filtered) &&
    _.broadcast_chat_visibility
    ? _.filtered.length == 0 || typeof _.filtered[0].accountid == `string`
    : !1;
}
function _() {
  return _(_());
}
function _(_) {
  let { data: _ } = _(),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (!_ || _.length == 0 || !_) return _(!1);
      (async () => {
        let _ = await Promise.all(
          _.filter((_) => !!_).map((_) =>
            _.fetchQuery(
              _(_, {
                appid: _,
              }),
            ),
          ),
        );
        _(
          _.some(
            (_) =>
              (_ && _.appid && _.has(_.appid)) ||
              (_?.related_items?.parent_appid &&
                _.has(_.related_items.parent_appid)),
          ),
        );
      })();
    }, [_, _, _, _]),
    _
  );
}
function _() {
  return {
    queryKey: _(),
    queryFn: async () => {
      let _ = await _();
      return new Set(_);
    },
  };
}
function _() {
  return [`BroadcastApps`];
}
var _ = `hRwhHwwKlgI-`;
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(`#home_page_live_broadcast`),
  });
}
function _(_) {
  let { appids: _, hide_status_banners: _, show_early_access: _ } = _,
    { data: _ } = _(),
    { data: _ } = _(),
    _ = _.length > 0 && _.every((_) => _ && _.has(_)),
    _ = _.length > 0 && _.every((_) => _ && _.has(_)),
    _ = _(_),
    _ = _ && !_,
    _ = _ && !_,
    _ = !_ && _;
  return (0, _.jsxs)(`div`, {
    className: _(_, `CapsuleDecorators`),
    children: [
      _ &&
        (0, _.jsxs)(`span`, {
          className: _(`LCYi5cxHqgI-`, `ZuMhm9DQqbw-`),
          children: [
            (0, _.jsx)(`img`, {
              src: _(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `ppO76q5Y-Zg-`,
              alt: _.Localize(`#Sale_InLibrary`),
            }),
            _.Localize(`#Sale_InLibrary`),
          ],
        }),
      _ &&
        (0, _.jsxs)(`span`, {
          className: `LCYi5cxHqgI-`,
          children: [
            (0, _.jsx)(_, {
              className: `ppO76q5Y-Zg-`,
            }),
            _.Localize(`#Sale_OnWishlist`),
          ],
        }),
      _ &&
        !_ &&
        !_ &&
        (0, _.jsx)(_, {
          appids: _,
        }),
      _ && (0, _.jsx)(_, {}),
    ],
  });
}
function _(_) {
  let { appids: _ } = _;
  return _(_)
    ? (0, _.jsx)(`span`, {
        className: _(_, _),
        children: _.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (!_ || _.length == 0) return _(!1);
      (async () => {
        let _ = await Promise.all(
          _.map((_) =>
            _.fetchQuery(
              _(_, {
                appid: _,
              }),
            ),
          ),
        );
        _(_.some((_) => _ && _.is_early_access));
      })();
    }, [_, _, _]),
    _
  );
}
var _ = `WYXlhoxwBlU-`,
  _ = `Ypf4QLCxqQU-`,
  _ = `jP-Qr-tpETg-`,
  _ = `triBTPpfZNQ-`,
  _ = `Ep0wQ-6tJLw-`,
  _ = `-Rp0JgQXMoA-`,
  _ = `QWDBAVIUpho-`,
  _ = `JAphvRffM9M-`,
  _ = `FQQL32BdomI-`,
  _ = `xNRz-0kPOeE-`,
  _ = `-F6L5ywkZiU-`,
  _ = `_4eS9H8fFOdo-`,
  _ = `_7fjzkXY-Nhs-`,
  _ = `qNcrltVSVzI-`,
  _ = `A-4nfbw4-fY-`,
  _ = `oe2Jr-slLMU-`,
  _ = `DGZ5Ptl37g4-`,
  _ = `zstB61TOiBA-`,
  _ = `-ZEsfMgRePw-`,
  _ = `P-N-CSZ-VX8-`,
  _ = `aZng9sDwNZg-`,
  _ = `x80z1JoR9dc-`,
  _ = `X-2r-tUH1gQ-`,
  _ = `-A11cjkYCU8-`,
  _ = `_10gRNaJtPOU-`,
  _ = `UskT6FngUB8-`,
  _ = `L03Y6ydPSDM-`,
  _ = `rX8DGzBU5pU-`,
  _ = `_8mKyAzWvx8I-`,
  _ = `RfxR9kxm2-o-`,
  _ = `_3EpVljmp8Bg-`,
  _ = `h1-hm2PiNH0-`,
  _ = `ruaMViMLvdA-`;
function _(_) {
  let {
    capsules_per_row: _,
    is_generic: _,
    is_generic_trailer: _,
    is_event_dash_row: _,
    is_trailer_carousel: _,
    is_spotlights: _,
    is_item_browser: _,
    is_maincap: _,
    is_expanded_maincap: _,
    is_expanded_display: _,
    show_auto_advance_bar: _,
  } = _;
  if (!_) return null;
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
        }),
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
        }),
      }),
    });
  if (_)
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`div`, {
                className: _,
              }),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`div`, {
                className: _,
              }),
            }),
          ],
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `lvoTx8-ZMMw-`,
            children: (0, _.jsx)(`div`, {
              className: `triBTPpfZNQ-`,
            }),
          }),
      ],
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _(_, _),
          }),
          (0, _.jsxs)(`div`, {
            className: _(_),
            children: [
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
            ],
          }),
        ],
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
              }),
            ],
          }),
        ],
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _({
          [_]: !0,
          [void 0]: _,
        }),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _(_),
            children: [
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
            ],
          }),
        ],
      }),
    });
  if (_)
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _(_, _),
          }),
          (0, _.jsx)(`div`, {
            className: _(_, _),
          }),
        ],
      }),
    });
  if (_) {
    let _ = [];
    for (let _ = 0; _ < _[0]; _++)
      _.push(
        (0, _.jsx)(
          _,
          {
            className: _,
            focusable: !0,
            children: (0, _.jsx)(`div`, {
              className: _,
            }),
          },
          `item_browse_ghost_` + _,
        ),
      );
    return (0, _.jsx)(_, {
      children: _,
    });
  }
  return _?.length == 1
    ? _[0] == 1
      ? (0, _.jsx)(_, {
          children: (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _,
            }),
          }),
        })
      : _[0] == 4
        ? (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
              ],
            }),
          })
        : (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                }),
              ],
            }),
          })
    : _?.length == 2
      ? _[0] == 3 && _[1] == 3
        ? (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
              ],
            }),
          })
        : (0, _.jsx)(_, {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                    }),
                  ],
                }),
              ],
            }),
          })
      : (0, _.jsx)(_, {
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _(_, _),
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _(_, _),
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _(_, _),
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                ],
              }),
            ],
          }),
        });
}
function _(_) {
  return (0, _.jsx)(_, {
    className: _(_, _.className),
    focusableIfEmpty: !0,
    children: _.children,
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(void 0),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (_) {
        if (_ && _.length > 0) _(_);
        else if (_.related_items?.parent_appid) {
          let _ = {
            appid: _.related_items?.parent_appid,
          };
          (async () => {
            let _ = await _.fetchQuery(_(_, _));
            _ && _.length > 0 && _(_);
          })();
        }
      }
    }, [_, _, _, _]),
    _
  );
}
function _(_) {
  let { _: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        _: _,
      })
    : null;
}
function _(_) {
  let { _: _ } = _,
    _ = _(_);
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.slice(0, 10).map((_) =>
          (0, _.jsx)(
            _,
            {
              tagid: _.tagid,
              className: _,
            },
            `tag_` + _.tagid,
          ),
        ),
      })
    : null;
}
var _ = `pE3kiYj-T9c-`,
  _ = `bXqn3-4kGc8-`,
  _ = `bNGFzJt9CmI-`,
  _ = `vE1beFyJ7fE-`,
  _ = `jLH2MgXW2QA-`,
  _ = `dGNTZWr-al8-`,
  _ = `_8aFotqvmohI-`,
  _ = `sjibpkgu4sc-`,
  _ = `I09IQjtbMSg-`,
  _ = `C4-YRfvAL7Q-`;
async function _(_, _) {
  let _ = `steam://run/` + _;
  _.IN_CLIENT
    ? (console.log(`Running game ${_} locally.`), (window.location.href = _))
    : (console.log(
        `Cannot identify local client. Prompting user to launch ${_}.`,
      ),
      _(_, _, _));
}
async function _(_, _, _) {
  console.log(`prompting for`, _);
  let _ = _.STORE_BASE_URL + `about/`;
  _(
    (0, _.jsx)(_, {
      appid: _,
      strGameName: _ || ``,
      strOnOKUrl: _,
      strDownloadSteamUrl: _,
    }),
    window,
  );
}
var _ = (_) => {
  let _ = () => _.closeModal && _.closeModal();
  return (0, _.jsx)(_, {
    onEscKeypress: _,
    className: _,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          children: [` `, _(`#GotSteam_Title`), ` `],
        }),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              children: _(
                `#GotSteam_PromptWithDownloadLink`,
                (0, _.jsx)(`a`, {
                  href: _.strDownloadSteamUrl,
                  className: _,
                  children: _(`#GotSteam_DownloadLinkText`),
                }),
                (0, _.jsx)(`span`, {
                  className: _,
                  children: _.strGameName,
                }),
              ),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`a`, {
                  href: _.strOnOKUrl,
                  onClick: _,
                  className: _(_, _),
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [` `, _(`#GotSteam_Yes`), ` `],
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [` `, _(`#GotSteam_Yes_Play`), ` `],
                    }),
                  ],
                }),
                (0, _.jsxs)(`a`, {
                  href: _.strDownloadSteamUrl,
                  onClick: _,
                  className: _,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [` `, _(`#GotSteam_No`), ` `],
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [` `, _(`#GotSteam_No_Download`), ` `],
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  className: _,
                }),
                _(`#GotSteam_Blurb`),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
function _(_) {
  let { appid: _, bIsMuted: _ } = _,
    _ = _(_),
    _ = _(_),
    { data: _ } = _(_),
    { mutate: _ } = _(_),
    _ = (_) => {
      (_.preventDefault(), _ ? _(_, _?.name) : _());
    },
    _ = _(_, _ && void 0, _ ? _ : _);
  return (0, _.jsx)(`div`, {
    role: `button`,
    tabIndex: 0,
    onClick: _,
    className: _,
    onKeyDown: (_) => {
      (_.key === `Enter` || _.key === ` `) && (_.preventDefault(), _(_));
    },
    children: _(_ ? `#Sale_PlayNow` : `#Sale_AddToLibrary`),
  });
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    _ = _(_(_, _));
  return {
    snr: _(_),
    strStoreURL: _(_, _, _),
  };
}
function _(_) {
  return _
    ? {
        type: `replay`,
        gid: _,
      }
    : _.logged_in
      ? {
          type: `account`,
        }
      : {
          type: `anonymous`,
          gid: _(_),
        };
}
var _ = _.createContext({
  cartID: void 0,
});
function _() {
  return _.useContext(_).cartID || _();
}
function _(_) {
  return _.type === `account`;
}
function _(_) {
  return _.type === `anonymous`;
}
var _ = {
  bCanAddItems: !0,
  bCanModify: !0,
  bCanPurchase: !0,
  bShowValidationNotices: !0,
  bShowPurchaseOptionPicker: !0,
  bShowPageFooter: !0,
  bCanChangeCountry: !0,
};
({
  ..._,
},
  {
    ..._,
  });
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.validation_failure || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            validation_failure: {
              _: 1,
              _: 0,
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
      return `AccountCartValidationDetails`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.is_gift || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            is_gift: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            is_private: {
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
      return `AccountCartLineItemFlags`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.line_item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            line_item_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            packageid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            bundleid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            is_valid: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            validation_details: {
              _: 9,
              _: _,
            },
            time_added: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            price_when_added: {
              _: 11,
              _: _,
            },
            gift_info: {
              _: 12,
              _: _,
            },
            flags: {
              _: 13,
              _: _,
            },
            gidcoupon_applied: {
              _: 14,
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
      return `AccountCartLineItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.line_items || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            line_items: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            subtotal: {
              _: 2,
              _: _,
            },
            is_valid: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            validation_details: {
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
      return `AccountCartContents`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.user_country || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            user_country: {
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
      return `CAccountCart_GetCart_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cart || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cart: {
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
      return `CAccountCart_GetCart_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.user_country || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            user_country: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            items: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            navdata: {
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
      return `CAccountCart_AddItemsToCart_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            bundleid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            gift_info: {
              _: 10,
              _: _,
            },
            flags: {
              _: 11,
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
      return `CAccountCart_AddItemsToCart_Request_ItemToAdd`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.line_item_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            line_item_ids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            cart: {
              _: 2,
              _: _,
            },
            replaced_packages: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            existing_billing_agreementid: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            new_billing_agreement_recurring_packageid: {
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
      return `CAccountCart_AddItemsToCart_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.line_item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            line_item_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            user_country: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            gift_info: {
              _: 10,
              _: _,
            },
            flags: {
              _: 11,
              _: _,
            },
            apply_gidcoupon: {
              _: 12,
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
      return `CAccountCart_ModifyLineItem_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cart || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cart: {
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
      return `CAccountCart_ModifyLineItem_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.line_item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            line_item_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            user_country: {
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
      return `CAccountCart_RemoveItemFromCart_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cart || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cart: {
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
      return `CAccountCart_RemoveItemFromCart_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gidshoppingcart || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gidshoppingcart: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            user_country: {
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
      return `CAccountCart_MergeShoppingCartContents_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cart || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cart: {
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
      return `CAccountCart_MergeShoppingCartContents_Response`;
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
      return `CAccountCart_DeleteCart_Request`;
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
      return `CAccountCart_DeleteCart_Response`;
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
      return `CAccountCart_GetRelevantCoupons_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.line_items || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            line_items: {
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
      return `CAccountCart_GetRelevantCoupons_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.line_item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            line_item_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            coupons: {
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
      return `CAccountCart_GetRelevantCoupons_Response_LineItemCoupons`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`AccountCart.GetCart#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetCart = _;
  function _(_, _, _) {
    return _.SendMsg(`AccountCart.AddItemsToCart#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.AddItemsToCart = _;
  function _(_, _, _) {
    return _.SendMsg(`AccountCart.ModifyLineItem#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ModifyLineItem = _;
  function _(_, _, _) {
    return _.SendMsg(`AccountCart.RemoveItemFromCart#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RemoveItemFromCart = _;
  function _(_, _, _) {
    return _.SendMsg(`AccountCart.MergeShoppingCartContents#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.MergeShoppingCartContents = _;
  function _(_, _, _) {
    return _.SendMsg(`AccountCart.DeleteCart#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.DeleteCart = _;
  function _(_, _, _) {
    return _.SendMsg(`AccountCart.GetRelevantCoupons#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetRelevantCoupons = _;
})((_ ||= {}));
function _(_) {
  return _(_) ? _.type : _.gid;
}
function _(_) {
  return [`shopping_cart`, _(_), _.accountid];
}
function _(_) {
  _.invalidateQueries({
    queryKey: [`validate_checkout`],
    exact: !1,
  });
}
function _(_, _, _) {
  (_.setQueryData(_(_), _), _(_));
}
async function _(_, _, _, _, _) {
  let _ = new FormData();
  (_ &&
    (_.length === 1
      ? _.set(`subid`, _[0].toString())
      : _.forEach((_) => _.append(`subid[]`, _.toString()))),
    _ && _.set(`bundleid`, _.toString()),
    (_ || _) &&
      (_.set(`isgift`, `1`), _ && _.set(`gifteeaccountid`, _.toString())),
    _.set(`action`, `add_to_cart`));
  let _ = await fetch(`${_.STORE_BASE_URL}cart/addtocart`, {
    method: `post`,
    body: _,
  });
  if (!_._) throw Error(`Failed to fetch /cart/addtocart`);
  let _ = await _.json();
  return [_?.success ? 1 : 2, _?.contents];
}
async function _(_, _, _, _) {
  let _ = _.Init(_);
  if (!_ || _.length === 0)
    return (
      console.error(`No valid Package or Bundle provided to add to cart`),
      [8, null]
    );
  (_.forEach((_) => {
    let _ = _.Body().add_items();
    (_.packageid
      ? _.set_packageid(_.packageid)
      : _.bundleid
        ? _.set_bundleid(_.bundleid)
        : console.error(
            `Neither a package nor bundle ID were provided with an item in AddItemsToAccountCart`,
          ),
      _.bIsGift &&
        (_.flags(!0).set_is_gift(!0),
        _.nAccountIDGiftee &&
          _.gift_info(!0).set_accountid_giftee(_.nAccountIDGiftee)));
  }),
    _ && _.Body().set_navdata(_.fromObject(_(_))),
    _.Body().set_user_country(_));
  let _ = await _.AddItemsToCart(_, _);
  return (
    _.BSuccess() ||
      console.warn(`Failed to add item to account cart: ${_.GetEResult()}`),
    [_.GetEResult(), _.Body().toObject()]
  );
}
function _(_) {
  let _ = {
    line_items: [],
  };
  return (
    _?.lineitems?.length &&
      (_.line_items = _.lineitems
        .map((_) => (_.package_item?.gidbundle ? null : _(_)))
        .filter(_)),
    _
  );
}
function _(_) {
  let _ = {
    price_when_added: {},
    flags: {},
  };
  return (
    (_.line_item_id = _.gidlineitem),
    _.bundle_item?.bundleid
      ? ((_.bundleid = _.bundle_item.bundleid),
        (_.type = 2),
        _.bundle_item.is_gift &&
          ((_.flags.is_gift = _.bundle_item.is_gift),
          (_.gift_info = _.bundle_item.gift_info)))
      : _.package_item &&
        ((_.packageid = _.package_item.packageid),
        (_.price_when_added.amount_in_cents =
          _.package_item.costwhenadded?.amount ?? ``),
        (_.price_when_added.currency_code =
          _.package_item.costwhenadded?.currencycode ?? 0),
        (_.type = 1),
        _.package_item.is_gift &&
          ((_.flags.is_gift = _.package_item.is_gift),
          (_.gift_info = _.package_item.gift_info))),
    _
  );
}
function _(_, _, _, _, _) {
  return _(
    [
      {
        packageid: _,
        bundleid: _,
        bIsGift: _,
        nAccountIDGiftee: _,
      },
    ],
    _,
  );
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    _ = _(),
    { storeBrowseContext: _, dataLoader: _ } = _(),
    { country: _ } = _,
    _ = _(_);
  return _({
    mutationFn: async () => {
      if (_.length == 0 || !_.every((_) => _.packageid || _.bundleid))
        throw `Every item must have a valid package or bundle id`;
      let _;
      if (_(_)) {
        let [_, _] = await _(_, _, _, _);
        if (_ == 1) ((_ = _.line_item_ids), _(_, _, _.cart));
        else throw `AddItemsToAccountCart failed with ${_}`;
      } else if (_(_)) {
        let _ = _.map((_) => _.packageid).filter(_),
          _ = _.map((_) => _.bundleid).filter(_);
        if (_.length > 1)
          throw `The anonymous cart can only take one bundle per call`;
        let [_, _] = await _(
          _,
          _.length > 0 ? _ : void 0,
          _[0],
          _.some((_) => _.bIsGift),
          _.find((_) => _.nAccountIDGiftee)?.nAccountIDGiftee,
        );
        if (_ == 1 && _) {
          let _ = new Set(_),
            _ = new Set(_);
          ((_ =
            _.lineitems
              ?.filter(
                (_) =>
                  (_.package_item &&
                    !_.package_item.gidbundle &&
                    _.has(_.package_item.packageid)) ||
                  (_.bundle_item && _.has(_.bundle_item.bundleid)),
              )
              ?.map((_) => _.gidlineitem) || []),
            _(_, _, _(_)));
        } else throw `AddItemsToAnonymousCart failed with ${_}`;
      } else throw `Invalid cart type`;
      return _;
    },
    onMutate: () => {
      (async () => {
        let _ = _.map((_) =>
          _.packageid
            ? {
                packageid: _.packageid,
              }
            : {
                bundleid: _.bundleid,
              },
        );
        (await Promise.all(_.map((_) => _.fetchQuery(_(_, _))))).forEach(
          (_, _) => {
            let _ =
              _?.included_appids?.length == 1
                ? {
                    appid: _.included_appids[0],
                  }
                : _[_];
            (_.prefetchQuery(_(_, _)), _.prefetchQuery(_(_, _)));
          },
        );
      })();
    },
  });
}
async function _(_, _) {
  let _ = _.Init(_);
  (_.Body().set_context(_(!1)), _.forEach((_) => _.Body().add_packageid(_)));
  let _ = await _.GetHardwareItems(_, _);
  return _.BSuccess()
    ? _.Body()
        .details()
        .map((_) => _.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${_.join(`,`)}`),
      null);
}
function _(_) {
  let _ = _(_());
  return _(_(_, _));
}
var _ = (function (_) {
  return (
    (_[(_.k_Loading = 0)] = `k_Loading`),
    (_[(_.k_LoadSuccess = 1)] = `k_LoadSuccess`),
    (_[(_.k_LoadFailure = 2)] = `k_LoadFailure`),
    _
  );
})({});
function _(_) {
  let _ = _(_()),
    _ = _({
      queries: _.map((_) => ({
        ..._(_, _),
        enabled: _.length > 0,
      })),
    }),
    _ = _.some((_) => _.isLoading),
    _ = _.some((_) => _.isError || _.data === null),
    _,
    _ = 0;
  return (
    _
      ? ((_ = null), (_ = 2))
      : _
        ? ((_ = void 0), (_ = 0))
        : ((_ = _.map((_) => _.data)), (_ = 1)),
    {
      rgHardwareDetails: _,
      eHardwareLoadingState: _,
    }
  );
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => _.load(_),
    enabled: !!_,
  };
}
function _(_) {
  return [`hardwaredetail`, _];
}
function _(_) {
  return _(`HardwareDetailLoader`, () => _(_));
}
function _(_) {
  return new _.default(async (_) => {
    let _ = await _(_, _),
      _ = new Map();
    return (
      _ &&
        _.forEach((_) => {
          _.packageid && _.set(_.packageid, _);
        }),
      _.map((_) => _.get(_) || null)
    );
  });
}
var _ = {
  high_pending_orders: !1,
  inventory_available: !0,
};
function _(_) {
  let { data: _ } = _(_),
    _ = _?.item_type === 1 && _.type === 10,
    { data: _ } = _(_ ? _._ : void 0);
  return _ ? (_ ? (_ ?? null) : _) : null;
}
var _ = `wvEYeGaFmt0-`,
  _ = `GW1050ijiP0-`;
function _(_) {
  let { _: _, className: _ } = _,
    _ = _(),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(_),
    { bIsOwned: _ } = _(_),
    _ = _(_),
    _ = (0, _.useCallback)(() => {
      if (_) {
        let _ = _.appid;
        (_.related_items?.parent_appid &&
          _.type != 11 &&
          (_ = _.related_items.parent_appid),
          _(window, `steam://run/${_}`));
      }
    }, [_]);
  if (!_ || !_ || !_ || _.type == 8) return null;
  let _ =
    _.is_free ||
    (_.final_price_in_cents != null && _.final_price_in_cents == `0`) ||
    (_.discount_pct && _.discount_pct >= 100);
  if (_.item_type == 1) {
    if (_.type == 10) {
      if (!_)
        return (0, _.jsx)(_, {
          size: `small`,
          position: `center`,
        });
      if (!_.inventory_available)
        return (0, _.jsx)(`div`, {
          className: _(_, _),
          children: (0, _.jsxs)(`span`, {
            children: [` `, _.Localize(`#Sale_ReserveExhausted`)],
          }),
        });
    } else if (_ && _.included_appids && _.included_appids.length > 1)
      return null;
  }
  if (_.item_type == 0) {
    if ((_.is_coming_soon && !_.packageid) || (_ && _.type === 10)) return null;
    if (!_ && _.is_free_to_keep) {
      if (_.IN_CLIENT || _() != `store`) {
        let _ = `${_.IN_CLIENT ? `steam://openurl/` : ``}${_}`;
        return (0, _.jsx)(`div`, {
          onClick: (_) => _(_, _),
          className: _(_, _),
          children: (0, _.jsx)(`span`, {
            children: _.Localize(`#EventDisplay_CallToAction_VisitStore`),
          }),
        });
      }
      {
        let _ = _(`${_.STORE_BASE_URL}freelicense/addfreelicense`, _);
        return (0, _.jsxs)(`form`, {
          action: _,
          method: `POST`,
          children: [
            (0, _.jsx)(`input`, {
              type: `hidden`,
              name: `subid`,
              value: _.packageid,
            }),
            (0, _.jsx)(`input`, {
              type: `hidden`,
              name: `sessionid`,
              value: _(),
            }),
            (0, _.jsx)(`button`, {
              className: _(_, _),
              type: `submit`,
              children: _.Localize(`#EventDisplay_CallToAction_AddToAccount`),
            }),
          ],
        });
      }
    }
    if ((_ || _) && !_.is_coming_soon) {
      let _ = _.Localize(`#EventDisplay_CallToAction_PlayNowForFree`);
      return (
        _
          ? (_ = _.Localize(`#EventDisplay_CallToAction_PlayNow`))
          : _.is_free_temporarily &&
            (_ = _.Localize(`#EventDisplay_CallToAction_AddToAccount`)),
        (0, _.jsx)(`div`, {
          className: _(_, _),
          onClick: _,
          children: (0, _.jsx)(`span`, {
            children: _,
          }),
        })
      );
    }
    if (_.formatted_final_price == ``)
      return (0, _.jsx)(`a`, {
        href: _,
        className: _(_, _),
        children: _.Localize(`#EventDisplay_CallToAction_VisitStore`),
      });
  }
  return (0, _.jsx)(_, {
    className: _,
    storeItemBestPurchaseOption: _,
    storeItemDefaultData: _,
  });
}
function _(_) {
  let {
      className: _,
      storeItemBestPurchaseOption: _,
      storeItemDefaultData: _,
    } = _,
    _ = _(),
    { mutate: _ } = _(_?.packageid, _?.bundleid, !1, void 0, _.feature);
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    onClick: () => _(),
    children: (0, _.jsx)(`span`, {
      children: _.Localize(`#Store_AddToCart`),
    }),
  });
}
var _ = `_8xhMURZRDBY-`;
function _(_) {
  let { _: _, className: _ } = _,
    { data: _ } = _(_);
  if (!_) return null;
  let _ =
      _.related_items?.demo_appid && _.related_items.demo_appid
        ? _.related_items.demo_appid
        : [],
    _ = _.length > 0,
    _ = _ || _.type === 1,
    _ = _
      ? _.Localize(`#Sale_InstallDemo_ttip`, _.name || ``)
      : _
        ? _.Localize(`#Sale_CannotInstallDemo_ttip`, _.name || ``)
        : _.Localize(`#Loading`);
  if (_.IN_MOBILE_WEBVIEW) {
    if (_ && _) {
      let _ = _.type === 1 ? _.appid : _[0];
      return (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          appid: _,
        }),
      });
    }
    return null;
  }
  return !_ && _ && _.is_free
    ? (0, _.jsx)(_, {
        _: _,
        className: _,
      })
    : (0, _.jsx)(_, {
        toolTipContent: _,
        onClick: (_) => {
          (_.preventDefault(),
            _.stopPropagation(),
            _ && _(_.type === 1 ? _.appid : _[0], _.name));
        },
        className: _(_, _, !_ && `gpIFsnR2ZGs-`),
        children: _
          ? _.Localize(`#Sale_InstallDemo`)
          : _.Localize(`#Sale_DemoNotFound`),
      });
}
function _(_) {
  let {
      _: _,
      bShowDemoButton: _,
      bShowPurchaseOptionsButton: _,
      fnOnPurchaseOptionsClick: _,
      bHidePrice: _,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: _,
      className: _,
      bShowCartButton: _,
    } = _,
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { bIsOwned: _ } = _(_),
    [_, _] = _(_, _);
  if (!_) return null;
  let _ =
      (_.type === 1 && !_?.is_coming_soon) ||
      (_.related_items?.demo_appid && _.related_items?.demo_appid.length > 0),
    _ = _(_.type),
    _ = _ && _ && _,
    _ = null;
  if (!_ && _?.is_free_to_keep && _?.free_to_keep_ends) {
    let _ = _.free_to_keep_ends,
      _ = _(
        `#Sale_default_label_Free_Promo_Description_Short`,
        _(_) +
          ` @ ` +
          _(_, {
            bForce24HourClock: !1,
          }),
      );
    _ = (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _,
        (0, _.jsx)(_, {
          tooltip: _(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      _,
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !!_ &&
            (0, _.jsx)(_, {
              _: _,
              className: `R0sGSaFdUWo-`,
            }),
          !_ &&
            _.type !== 1 &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                !(!_ || _.is_free) &&
                  (0, _.jsx)(_, {
                    fnOnPurchaseOptionsClick: _,
                  }),
                !(!_ || _.is_free) &&
                  (0, _.jsx)(_, {
                    _: _,
                    className: `CartBtn`,
                  }),
              ],
            }),
          !_ &&
            (0, _.jsx)(_, {
              _: _,
            }),
          _ &&
            (0, _.jsx)(_, {
              _: _,
              compatibility: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    onClick: _.fnOnPurchaseOptionsClick,
    children: (0, _.jsx)(`span`, {
      children: _(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function _(_, _, _, _, _, _) {
  if (!_) return;
  if (!_(_.item_type)) {
    _(!1, `StoreItemWidgetSalePageAction: unexpected type: ` + _.item_type);
    return;
  }
  let _ = _(`${_(_, _)}${_ ? `?${_}` : ``}`, _);
  return {
    onClick: (_) => {
      let _ = _(_) || window;
      _ ? _(_) : _.startsWith(`steam://`) || (_.location.href = _(_));
    },
    onOKActionDescription: _.Localize(`#Sale_Gamepad_Action_Select`),
  };
}
function _(_) {
  let {
      _: _,
      type: _,
      bShowDemoButton: _,
      bPreferDemoStorePage: _,
      bHidePrice: _,
      bUseSubscriptionLayout: _,
      bHidePlatforms: _,
      bHideContainedApps: _,
      bAllowTwoLinesForHeader: _,
      bShowReviewSummary: _,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: _,
      bAutoFocus: _,
      fnOnClickOverride: _,
      bIsMarketingMessage: _,
      bPreferAssetWithoutOverride: _,
    } = _,
    _ = _(_, _),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    { data: _, isPending: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(),
    _ = _(_),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    [_, _] = (0, _.useState)(!1);
  ((0, _.useEffect)(() => {
    if (!_) {
      _(!1);
      return;
    }
    let _ = window.setTimeout(() => _(!0), 500);
    return () => window.clearTimeout(_);
  }, [_]),
    (0, _.useEffect)(() => {
      _.current && _(_.current.offsetWidth < 370);
    }, [_]));
  let _ = (0, _.useMemo)(
      () =>
        _ && _ && _(_)
          ? {
              appid: _(_)[0],
            }
          : _,
      [_, _, _],
    ),
    { strStoreURL: _, snr: _ } = _(_, _);
  if (!_)
    return _
      ? (0, _.jsx)(_, {
          capsules_per_row: [1],
          is_item_browser: !0,
        })
      : null;
  let _ = _.included_appids?.length || 0,
    _ = _.included_appids?.filter((_) => _?.has(_))?.length || 0,
    _ = _.item_type == 2 && !!_?.must_purchase_as_set,
    _ = !_ && _ > 1,
    _ = _.item_type == 1 && _ == 1,
    _ = _.item_type == 0 || _,
    _ = _ && _.appid,
    _ = _.name || ``,
    _ = _(_, _),
    _ = _ || !_?.is_coming_soon || _,
    [_, _] = _(_, _);
  return (0, _.jsxs)(_, {
    className: _({
      [_]: !0,
      [void 0]: _,
      StoreSaleWidgetOuterContainer: !0,
    }),
    "flow-children": `grid`,
    navEntryPreferPosition: _.PREFERRED_CHILD,
    autoFocus: _,
    navKey: `preview_widget_` + _(_),
    children: [
      (0, _.jsx)(_, {
        appid: _ && `appid` in _ ? _.appid : void 0,
        children: (0, _.jsxs)(_, {
          onClick: _ ? _ : void 0,
          className: _({
            [_]: !0,
            [_]: !0,
            [_]: _,
          }),
          ..._(_, _, _, !!_, void 0, _),
          preferredFocus: _,
          onFocusWithin: _ ? _ : void 0,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_),
              children: (0, _.jsx)(_, {
                _: _,
                strURL: _,
                children: (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      appids: _,
                    }),
                    (0, _.jsx)(_, {
                      _: _,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: _,
                    }),
                    (0, _.jsx)(_, {
                      _: _,
                    }),
                    (0, _.jsx)(_, {
                      _: _,
                      active: _ && _,
                      bIsHoverMode: !0,
                      eGrowOnActivate: _
                        ? void 0
                        : _.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _({
                [_]: !0,
                [_]: _,
              }),
              children: [
                !(!_ || _) &&
                  (0, _.jsx)(_, {
                    _: _,
                    classOverride: _(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: _,
                  }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(`a`, {
                    href: _ ? void 0 : _,
                    target: _.IN_CLIENT ? void 0 : `_blank`,
                    onClick: _,
                    children: (0, _.jsx)(`div`, {
                      className: _(_, `StoreSaleWidgetTitle`),
                      children: _,
                    }),
                  }),
                }),
                !_ &&
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  ref: _,
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        _: _,
                      }),
                    !_ &&
                      !_ &&
                      _ &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)(_, {
                            _: _,
                            bMinimizePlatforms: _,
                            bHideWindows: _,
                          }),
                          !!(_ && _.item_type == 0) &&
                            (0, _.jsx)(_, {
                              eHWCompat: _,
                              className: `tUIs-i3NWoU-`,
                              _: _,
                            }),
                        ],
                      }),
                  ],
                }),
                !_ &&
                  _ &&
                  _ &&
                  (0, _.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, _.jsx)(_, {
                      _: _,
                    }),
                  }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    _: _,
                    bHideInLibraryApps: !_ && _.item_type == 2 && _ < _,
                  }),
                !!_ &&
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                _
                  ? (0, _.jsx)(`div`, {
                      className: _,
                      children: (0, _.jsx)(`div`, {
                        className: _,
                        children: (0, _.jsx)(_, {
                          _: _,
                        }),
                      }),
                    })
                  : (0, _.jsx)(_.Fragment, {
                      children:
                        _ && _ && _
                          ? (0, _.jsx)(_, {
                              appid: _,
                              bIsMuted: !!_,
                            })
                          : (0, _.jsx)(_, {
                              _: _,
                              bShowDemoButton: _,
                              bHidePrice: _,
                              bHideWishlistButton: _,
                              eHardwareCompatibilityDisplay: _,
                            }),
                    }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(_, {
                    _: _,
                    bPreferAssetWithoutOverride: _,
                    imageType: `header`,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      !!(_.strReason && _.strReason.length > 0) &&
        (0, _.jsx)(`div`, {
          className: `-cW4bgqyLAo-`,
          children: _.strReason,
        }),
    ],
  });
}
function _(_) {
  let { _: _, strURL: _, children: _ } = _;
  return `appid` in _
    ? (0, _.jsxs)(_, {
        _: _,
        children: [_, ` `],
      })
    : (0, _.jsx)(`a`, {
        href: _,
        children: _,
      });
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_);
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _(_),
      })
    : null;
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _();
  if (!_ || !_ || !_.short_description || !_) return null;
  let _ = _?.discount_pct || 0,
    _ = _.included_appids?.length || 0,
    _ = _.included_appids?.filter((_) => _?.has(_))?.length || 0,
    _ = _.short_description,
    _ = _.item_type == 1 && _ == 1,
    _ = _.item_type == 2 && !!_?.must_purchase_as_set;
  return (
    (_.item_type == 2 || (_.item_type == 1 && !_)) &&
      (_ =
        !_ && _ > 0 && _ < _
          ? _(`#Sale_Bundle_CompletePartialSet`, _, _)
          : _ > 0
            ? _(`#Sale_BundleSave_WithDiscount`, _, _)
            : _(`#Sale_BundleSave`, _)),
    (0, _.jsx)(`div`, {
      className: _(_, `StoreSaleWidgetShortDesc`),
      children:
        _.startsWith(`#`) && _.indexOf(` `) == -1
          ? (0, _.jsx)(`span`, {
              className: _,
              children: _(
                _,
                (0, _.jsx)(`i`, {}),
                (0, _.jsx)(`i`, {}),
                (0, _.jsx)(`i`, {}),
                (0, _.jsx)(`i`, {}),
              ),
            })
          : _,
    })
  );
}
function _(_) {
  let {
      _: _,
      bPreferLibrary: _,
      bPreferAssetWithoutOverride: _,
      bNoShadow: _,
    } = _,
    _ = _ ? _ : ``,
    { storeItemDefaultInfo: _, storeItemAsset: _ } = _(_, `vertical`, _),
    [_, _] = _.useState(0);
  if (!_ || !_)
    return (0, _.jsx)(`div`, {
      className: _,
    });
  let { strStoreVerticalURL: _, strLibraryVerticalURL: _ } = _(_, _);
  if (_ && (!_ || !_))
    return (0, _.jsxs)(`div`, {
      className: _(_, `HeroCapsuleImageContainer`),
      children: [
        (0, _.jsx)(`img`, {
          src: _,
          className: _,
          alt: _.name,
        }),
        _.type == 4 &&
          (0, _.jsx)(`img`, {
            className: `eEjnmAoA07c-`,
            src: `${_.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (_)
    return (0, _.jsxs)(`div`, {
      className: _(_, _, _ ? _ : ``, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
        (0, _.jsx)(`img`, {
          src: _,
          className: _,
          alt: _.name,
        }),
      ],
    });
  let _ = _(_, !0),
    _ = _.length - 1,
    _ = (_) => {
      let _ = _.indexOf(_);
      _ >= _ && _ < _.length - 1 && _(_ + 1);
    };
  if (_ < _.length) {
    let _ = _[_];
    return (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
        (0, _.jsx)(_, {
          lazyLoad: !0,
          srcs: _,
          className: _,
          alt: _.name,
          onImageError: _,
        }),
      ],
    });
  }
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
var _ = {};
((_.arabic = () =>
  _(() => import(`./chunk~c5d4d9f487.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./chunk~5b14e15845.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./chunk~e6804a7c39.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./chunk~011b02a705.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./chunk~bc66c3007c.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./chunk~49954cb272.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./chunk~7c274cb1c2.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./chunk~b7f3eeb690.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./chunk~6bd2940d6a.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./chunk~00759a0a90.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./chunk~f06ab35bc3.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./chunk~95f40030c1.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./chunk~255a7fb0ce.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./chunk~312a3e9f89.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./chunk~da7a86533d.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./chunk~5f3cea0129.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./chunk~d3fd903a21.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./chunk~89af101b8a.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./chunk~82ce4a17ed.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./chunk~e15e01f79d.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./chunk~28b3f0fcc7.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./chunk~e84382cc61.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./chunk~2b4b48d26d.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./chunk~5f0c8b3e25.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./chunk~3d85d70986.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./chunk~5e9e7a2779.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./chunk~a8b7dc8234.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./chunk~0c230b4590.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./chunk~4a94c13835.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./chunk~69ffc7ad72.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./chunk~84156208b9.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./chunk~7c06e5ece9.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_) {
  let { closeModal: _, strDescOverride: _ } = _;
  return (0, _.jsx)(_, {
    strTitle: _.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: _ || _.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: _,
    strOKButtonText: _.Localize(`#Button_OK`),
    onOK: () => {
      (_(), _());
    },
  });
}
function _(_) {
  let [_, _, _] = _();
  return {
    elDialogElement: (0, _.jsx)(_, {
      active: _,
      children: (0, _.jsx)(_, {
        closeModal: _,
        strDescOverride: _,
      }),
    }),
    fnShowLogonDialog: _,
  };
}
function _(_) {
  let { label: _, strDialogDesc: _ } = _,
    { elDialogElement: _, fnShowLogonDialog: _ } = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        onClick: _,
        children: _ || _.Localize(`#Login_SignIn`),
      }),
      _,
    ],
  });
}
var _ =
    `p.h1.h2.h3.h4.h5.smalltext.b.u.hr.i.emoticon.dynamiclink.img.strike.spoiler.noparse.url.list.olist.*.quote.pullquote.code.table.tr.td.th.carousel.previewyoutube.looping_media.roomeffect.sticker.price.pricesavings.trailer.speaker.doclink.video.vod.youtubeorvideo.giveawayeligible.claimitem.packagepurchaseable.actiondialog.uploadfilebutton.docimg.meetsteamsessiongroup.meetsteamscheduleview.center.c.expand.remindme.calendarevent.color.bgcolor.userpolls`.split(
      `.`,
    ),
  _ = [`h1`, `h2`, `h3`, `b`, `u`, `i`, `strike`, `spoiler`, `noparse`, `url`],
  _ = [
    `img`,
    `carousel`,
    `previewyoutube`,
    `looping_media`,
    `roomeffect`,
    `video`,
    `vod`,
    `trailer`,
    `youtubeorvideo`,
    `docimg`,
  ],
  _ = _.filter((_) => !_.includes(_)),
  _ = [
    `pullquote`,
    `price`,
    `pricesavings`,
    `video`,
    `youtubeorvideo`,
    `speaker`,
    `trailer`,
    `vod`,
    `giveawayeligible`,
    `claimitem`,
    `packagepurchaseable`,
    `actiondialog`,
    `claimitem`,
    `packagepurchaseable`,
    `actiondialog`,
    `uploadfilebutton`,
    `docimg`,
    `meetsteamsessiongroup`,
  ];
function _(_) {
  let { bIncludeMedia: _ = !1, bIncludeValveOnly: _ = !1 } = _,
    _ = new Set();
  return (
    _ || _.forEach((_) => _.add(_)),
    _ || _.forEach((_) => _.add(_)),
    _.filter((_) => !_.has(_))
  );
}
var _ = void 0;
function _(_) {
  return _ ? _.map((_) => (_ == `*` ? `\\*` : _)).join(`|`) : ((_ ||= _(_)), _);
}
function _(_, _ = null, _ = ` `) {
  let _ = RegExp(`\\[(` + _(_) + `)\\b[^\\]]*\\].*?\\[/\\1\\]`, `gi`);
  return _.replace(_, _);
}
function _(_, _ = null, _ = ``) {
  let _ = `\\[\\/?(?:` + _(_) + `){1,}.*?]`;
  return _.replace(new RegExp(_, `gi`), _);
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.voteid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voteid: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            active: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            start_time: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_time: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            app_discounts: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            grouped_vote_options: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            groups: {
              _: 7,
              _: _,
              _: !0,
              _: !0,
            },
            internal_name: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            localization: {
              _: 9,
              _: _,
            },
            reveal_time: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            release_date_min: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            winner_appid: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            flag: {
              _: 13,
              _: _.readEnum,
              _: _.writeEnum,
            },
            release_date_max: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            item_type: {
              _: 15,
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
      return `CStore_VoteDefinition`;
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
            discount: {
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
      return `CStore_VoteDefinition_AppDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            groupid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            group_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            app_discounts: {
              _: 3,
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
      return `CStore_VoteDefinition_GroupDefinition`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.title || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            title: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            title_linebreak: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            title_award: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            award_description: {
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
      return `CStore_VoteDefinition_Localization`;
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
            sale_appid: {
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
      return `CStore_GetVoteDefinitions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.votes || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            votes: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            labor_of_love_winners: {
              _: 2,
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
      return `CStore_GetVoteDefinitions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.voteid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voteid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            communityitemid: {
              _: 3,
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
      return `SteamAwardsUserVote`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sale_appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_appid: {
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
      return `CStore_GetUserVotes_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.user_votes || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            user_votes: {
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
      return `CStore_GetUserVotes_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.voteid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voteid: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            sale_appid: {
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
      return `CStore_SetVote_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.user_votes || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            user_votes: {
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
      return `CStore_SetVote_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.category_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            category_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_updated: {
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
      return `CSteamAwardsNomination`;
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
      return `CSteamAwards_GetUserNominations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.nominations || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            nominations: {
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
      return `CSteamAwards_GetUserNominations_Response`;
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
            code: {
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
      return `CSteamAwards_GetOtherUserNominations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.category_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            category_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            nominated_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            source: {
              _: 3,
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
      return `CSteamAwards_Nominate_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.nominations || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            nominations: {
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
      return `CSteamAwards_Nominate_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.category_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            category_id: {
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
      return `CSteamAwards_GetNominationRecommendations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.played_app || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            played_app: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            suggested_events: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            suggested_apps: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            debug_query: {
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
      return `CSteamAwards_GetNominationRecommendations_Response`;
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
            playtime: {
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
      return `CSteamAwards_GetNominationRecommendations_Response_PlayedApps`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clanid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clanid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            event_gid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
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
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent`;
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
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.generate_new || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            generate_new: {
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
      return `CSteamAwards_GetNominationShareLink_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            code: {
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
      return `CSteamAwards_GetNominationShareLink_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StoreSales.GetVoteDefinitions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetVoteDefinitions = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreSales.SetVote#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.SetVote = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreSales.GetUserVotes#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetUserVotes = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.GetUserNominations#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetUserNominations = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.GetOtherUserNominations#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetOtherUserNominations = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.Nominate#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.Nominate = _;
  function _(_, _, _) {
    return _.SendMsg(
      `SteamAwards.GetNominationRecommendations#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  _.GetNominationRecommendations = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamAwards.GetNominationShareLink#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetNominationShareLink = _;
})((_ ||= {}));
var _ = [`show`, `hide`, `remove`],
  _ = {
    bBroadcastEnabled: !1,
    broadcastChatSetting: `hide`,
    default_broadcast_title: `#Broadcast_default_title_dev`,
    localized_broadcast_title: Array(32),
    localized_broadcast_left_image: Array(32),
    localized_broadcast_right_image: Array(32),
    broadcast_whitelist: [],
  };
function _(_) {
  return _ !== 28;
}
function _(_) {
  switch (_) {
    case 29:
    case 27:
    case 2:
    case 4:
    case 5:
    case 6:
    case 8:
    case 7:
    case 9:
    case 11:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 35:
    case 25:
    case 26:
    case 31:
    case 32:
    case 1:
    case 34:
      return !0;
  }
  return !1;
}
function _(_, _) {
  return !(_ == 12 || _ == 36 || (_ && _.indexOf(`curator`) != -1));
}
function _(_) {
  return [14, 10, 15, 32].includes(_);
}
function _(_) {
  let _ = `#PartnerEvent_` + _,
    _ = _.Localize(_);
  return _ == _ ? _.Localize(`#PartnerEvent_Other`) : _;
}
var _ = {
  bScheduleEnabled: !1,
  scheduleEntries: [],
};
_(
  [_],
  class {
    m_eventModel;
    m_entry;
    constructor(_, _) {
      ((this.m_eventModel = _), (this.m_entry = _));
    }
    GetEventStartTime() {
      return this.m_entry.rtime_start_specific
        ? this.m_entry.rtime_start_specific
        : (this.m_eventModel.startTime ?? 0) +
            (this.m_entry.delta_from_event_start_seconds ?? 0);
    }
  }.prototype,
  `GetEventStartTime`,
  null,
);
var _ = 1e4,
  _ = 99999;
function _() {
  return Math.floor(_ + Math.random() * 9e4);
}
var _ = `exploration`,
  _ = (function (_) {
    return ((_.Random = `r`), (_.Personalized = `p`), _);
  })({});
function _(_) {
  switch (_) {
    case 32:
      return 28;
    case 34:
      return 55;
    case 45:
      return 57;
    case 2:
      return 59;
    default:
      return;
  }
}
function _(_) {
  switch (_) {
    case 28:
      return 32;
    case 55:
      return 34;
    case 57:
      return 45;
    default:
      return;
  }
}
var _ = [13, 14, 17, 18, 19, 22, 23, 24, 35, 25, 26, 28, 15, 32, 10];
function _(_) {
  return (
    _.some((_) => _ == _.GetEventType()) &&
    !_.BHasTag(`steam_award_nomination_request`) &&
    !_.BHasTag(`curator`)
  );
}
var _ = [20, 31, 34];
function _(_) {
  return !_.some((_) => _ == _.GetEventType()) && !_.BHasTag(`curator`);
}
var _ = [12, 34];
function _(_) {
  return !_.some((_) => _ == _.GetEventType()) && !_.BHasTag(`curator`);
}
var _ = 593110,
  _ = 221410,
  _ = 1675200,
  _ = 4165890,
  _ = [_, 766, _],
  _ = [12, 34];
function _(_) {
  return !_.some((_) => _ == _.GetEventType()) && !_.BHasTag(`curator`);
}
function _(_, _ = _()) {
  let _ = 60 * _.PerDay;
  return (
    _.BIsVisibleEvent(_) &&
    _.BIsOGGEvent() &&
    (_.rtime32_last_modified ?? 0) > _ - _ &&
    !_(_)
  );
}
function _(_) {
  return _.BHasTag(`mod_reviewed`) && !_.BHasTag(`mod_require_rereview`);
}
var _ = (function (_) {
  return (
    (_[(_.k_EEventStateUnpublished = 0)] = `k_EEventStateUnpublished`),
    (_[(_.k_EEventStateStaged = 1)] = `k_EEventStateStaged`),
    (_[(_.k_EEventStateVisible = 2)] = `k_EEventStateVisible`),
    (_[(_.k_EEventStateUnlisted = 3)] = `k_EEventStateUnlisted`),
    _
  );
})({});
function _(_) {
  switch (_) {
    case `links`:
      return {
        nMaxItemsPerRow: 5,
        nItemMinimumWidth: 200,
      };
    case `itemdef`:
      return {
        nMaxItemsPerRow: 5,
        nItemMinimumWidth: 200,
      };
    case `contenthubspecials`:
      return {
        nMaxItemsPerRow: 3,
        nItemMinimumWidth: 306,
      };
    default:
      return {
        nMaxItemsPerRow: 4,
        nItemMinimumWidth: 280,
      };
  }
}
var _ = `bordered`,
  _ = (function (_) {
    return (
      (_[(_.k_EStoreFilterClauseTypeOr = 0)] = `k_EStoreFilterClauseTypeOr`),
      (_[(_.k_EStoreFilterClauseTypeAnd = 1)] = `k_EStoreFilterClauseTypeAnd`),
      (_[(_.k_EStoreFilterClauseTypeStoreTag = 2)] =
        `k_EStoreFilterClauseTypeStoreTag`),
      (_[(_.k_EStoreFilterClauseTypeFeatureTag = 3)] =
        `k_EStoreFilterClauseTypeFeatureTag`),
      (_[(_.k_EStoreFilterClauseTypeLanguage = 4)] =
        `k_EStoreFilterClauseTypeLanguage`),
      (_[(_.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
        `k_EStoreFilterClauseTypeContentDescriptor`),
      (_[(_.k_EStoreFilterClauseTypePrice = 6)] =
        `k_EStoreFilterClauseTypePrice`),
      (_[(_.k_EStoreFilterClauseTypeAppType = 7)] =
        `k_EStoreFilterClauseTypeAppType`),
      (_[(_.k_EStoreFilterClauseTypeOptInRegistrationTag = 8)] =
        `k_EStoreFilterClauseTypeOptInRegistrationTag`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.k_ESaleTagFilter = 0)] = `k_ESaleTagFilter`),
      (_[(_.k_ELanguage = 1)] = `k_ELanguage`),
      (_[(_.k_EContentDescriptor = 2)] = `k_EContentDescriptor`),
      (_[(_.k_EUserPreference = 3)] = `k_EUserPreference`),
      (_[(_.k_EPrice = 4)] = `k_EPrice`),
      (_[(_.k_EAppType = 5)] = `k_EAppType`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.k_EHideOwnedItems = 0)] = `k_EHideOwnedItems`),
      (_[(_.k_EHideWishlistedItems = 1)] = `k_EHideWishlistedItems`),
      (_[(_.k_EHideIgnoredItems = 2)] = `k_EHideIgnoredItems`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.k_ESortFacetsByName = 0)] = `k_ESortFacetsByName`),
      (_[(_.k_ESortFacetsByMatchCount = 1)] = `k_ESortFacetsByMatchCount`),
      (_[(_.k_ESortFacetsManually = 2)] = `k_ESortFacetsManually`),
      _
    );
  })({});
function _(_) {
  _.section_type === `crosspromotesalepage` &&
    !_.sale_page_cross_promo_sales &&
    (_.sale_page_cross_promo_event_gid ||
      _.sale_page_cross_promo_clan_account_id ||
      _.sale_page_cross_promo_featured_app_tagid) &&
    ((_.sale_page_cross_promo_sales = [
      {
        event_gid: _.sale_page_cross_promo_event_gid,
        clan_account_id: _.sale_page_cross_promo_clan_account_id,
        featured_app_tagid: _.sale_page_cross_promo_featured_app_tagid,
      },
    ]),
    delete _.sale_page_cross_promo_event_gid,
    delete _.sale_page_cross_promo_clan_account_id,
    delete _.sale_page_cross_promo_featured_app_tagid);
}
var _ = (function (_) {
    return (
      (_.Steam = `Steam`),
      (_.Facebook = `Facebook`),
      (_.Twitter = `Twitter`),
      (_.Reddit = `Reddit`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_.Summary = `summary`), (_.SummaryLargeImage = `summary_large_image`), _
    );
  })({}),
  _ =
    `sale_tag_filter.store_filter.smart_section_type.smart_section_tag.smart_section_category.smart_section_max_apps.smart_section_event_tags.smart_section_deck_compatibility.smart_section_data_source.smart_section_personalized_carousel_sort.smart_section_personalized_carousel_min_items.smart_section_personalized_carousel_randomize.smart_section_filter_by_deck_compatibility.smart_section_creator_listid.smart_section_min_discount_percent.smart_section_include_packages.smart_section_include_bundles.smart_section_include_dlc.random_from_entire_set.prioritize_discounts.store_item_filter_require_discount.store_item_filter_require_coming_soon.store_item_filter_require_released.store_item_filter_require_free.store_item_filter_require_demo.store_item_filter_require_playtest`.split(
      `.`,
    );
function _(_) {
  return _ && !!_.show_as_carousel && !_.enable_faceted_browsing;
}
function _(_) {
  return _.carousel_rows || 1;
}
function _(_) {
  return _.cap_item_count || 0;
}
function _(_) {
  return _.cap_section_row_count && _.cap_section_row_count > 0
    ? _.cap_section_row_count
    : _.section_type == `trailercarousel`
      ? 1
      : _.cap_section_content
        ? 4
        : 0;
}
function _(_) {
  return _?.store_filter ? JSON.stringify(_.store_filter) : void 0;
}
function _(_) {
  switch (_) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
      return !0;
  }
  return !1;
}
function _(_) {
  switch (_) {
    case `items`:
    case `crosspromotesalepage`:
    case `creator_list`:
      return !0;
  }
  return !1;
}
function _(_) {
  switch (_) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
    case `events`:
    case `sale_events`:
    case `contenthubspecials`:
      return !0;
  }
  return !1;
}
function _(_, _ = !1) {
  return !_ || !_(_.section_type)
    ? !1
    : _
      ? _.sale_tag_filter?.clauses?.length
        ? !0
        : !!_.smart_section
      : !!_.smart_section && _.smart_section_type != null;
}
function _(_) {
  return _(_) ? _?.smart_section_type : void 0;
}
function _(_) {
  return (
    (_.jsondata.sale_ml_recommender_delay_hours &&
      (_.startTime ?? 0) +
        _.jsondata.sale_ml_recommender_delay_hours * _.PerHour -
        new Date().getTime() / 1e3) ??
    0
  );
}
var _ = 2.5;
function _(_, _, _) {
  return !_.BIsNextFest() || !_(_.section_type)
    ? !1
    : _ == _.Random || _(_) > 0;
}
function _(_, _, _, _) {
  if (!_.next_fest_exploration_visibility || !_.BIsNextFest()) return !1;
  switch (_.next_fest_exploration_visibility) {
    case `show-only-personalized`:
      return _ != _.Personalized;
    case `show-only-personalized-available`:
      return !_;
    case `show-only-personalized-unavailable`:
      return _;
  }
  return !1;
}
function _(_, _, _) {
  return !!(_.use_random_order || _(_, _, _));
}
var _ = {
  capsules: [],
  events: [],
  links: [],
  localized_label: Array(32),
  localized_label_image: Array(32),
  default_label: `#Sale_default_label`,
  section_type: `unselected_empty`,
};
function _(_) {
  _.sale_sections?.forEach((_, _) => {
    ((_.localized_label &&= _(_.localized_label, 32, null)),
      _.section_type === `trailercarousel` && (_.show_as_carousel = !1),
      _(_),
      (_.sale_sections[_] = {
        ..._,
        ..._,
      }));
  });
}
var _ = {
    internal_type: `subscription_pricing`,
  },
  _ = (function (_) {
    return (
      (_[(_.k_ETaggedItems = 0)] = `k_ETaggedItems`),
      (_[(_.k_EContentHub = 1)] = `k_EContentHub`),
      _
    );
  })({});
function _(_) {
  return {
    arrowFill: _?.sale_carousel_arrow_color,
    arrowStyle: _?.sale_carousel_arrow_style,
    breadcrumbActiveColor: _?.sale_carousel_active_breadcrumb_color,
    breadcrumbColor: _?.sale_carousel_breadcrumb_color,
    breadcrumbStyle: _?.sale_carousel_breadcrumb_style,
  };
}
function _(_, _, _) {
  ((_.library_spotlight = void 0),
    _.email_setting &&
      ((_.email_setting.locked = void 0),
      (_.email_setting.force_feature_id = void 0)),
    (_.steam_award_category_suggestion = void 0),
    (_.steam_award_category_voteids = void 0),
    (_.action_end_time = void 0),
    (_.ownership_requirement_info = void 0),
    (_.sale_use_subscription_layout = void 0),
    (_.app_right_requirement_info = void 0),
    (_.clone_from_event_gid = _),
    (_.clone_from_sale_enabled = _.bSaleEnabled),
    (_.bSaleEnabled = _ == 36),
    (_.sale_discount_event_id = void 0),
    (_.valve_access_log = []),
    (_.bInvisibleGameOptIn = void 0),
    (_.rt_migrated_time = void 0),
    (_.optin_tagid || _.sale_opt_in_page_name) &&
      ((_.tagged_items = void 0),
      (_.tagged_item_filter = void 0),
      (_.auto_item_tags = void 0)),
    (_.optin_prune_tagid = void 0),
    (_.optin_tagid = void 0),
    (_.sale_opt_in_page_name = void 0),
    (_.prune_list_optin_name = void 0),
    (_.optin_only = void 0),
    (_.child_demo_appid_for_repost = void 0),
    (_.sale_vanity_id = void 0),
    (_.sale_update_landing_page_vanity_id = void 0),
    (_.automatically_push_updated_source = void 0),
    (_.country_restriction = void 0));
}
var _ = {
    localized_subtitle: Array(32),
    localized_summary: Array(32),
    localized_title_image: Array(32),
    localized_capsule_image: Array(32),
    bSaleEnabled: !1,
    sale_show_creator: !1,
    sale_sections: [],
    sale_browsemore_text: ``,
    sale_browsemore_url: ``,
    sale_browsemore_color: ``,
    sale_browsemore_bgcolor: ``,
    localized_sale_header: Array(32),
    localized_sale_overlay: Array(32),
    localized_sale_product_banner: Array(32),
    localized_sale_product_mobile_banner: Array(32),
    localized_sale_logo: Array(32),
    sale_font: ``,
    sale_background_color: ``,
    sale_header_offset: 530,
    referenced_appids: [],
    ..._,
    ..._,
  },
  _ = `old_announce_`,
  _ = `hide_from_events_and_discount`;
function _(_, _, _) {
  let _ = (_) => _.includes(_);
  return _(`steam_award_nomination_request`)
    ? _(`#PartnerEvent_SteamAwardNominations`)
    : _(`steam_award_vote_request`)
      ? _(`#PartnerEvent_SteamAwardVoteRequest`)
      : _(`steam_game_festival_artist_statement`)
        ? _(`#PartnerEvent_SteamGameFestival_ArtistState`)
        : _(`steam_game_festival_office_hour`)
          ? _(`#PartnerEvent_SteamGameFestival_OfficeHour`)
          : _(`steam_game_festival_broadcast`) ||
              (_.some((_) => _?.startsWith(`sale_nextfest_`)) && _ == 11)
            ? _(`#PartnerEvent_SteamGameFestival_Broadcast`)
            : _(`vo_marketing_message`) && _
              ? _(`#PartnerEvent_MM_MajorUpdate`)
              : _(_);
}
var _ = [
    `workshop`,
    `patchnotes`,
    `contenthub`,
    `skip_megaphone`,
    `curator`,
    `curator_group_members`,
    `curator_public`,
    `audience_followers`,
    `enable_steam_china`,
    `disable_steam_global`,
    `adult_only_content`,
    `stablechannel`,
    `betachannel`,
    `previewchannel`,
  ],
  _ = [
    `patchnotes`,
    `steam_award_nomination_request`,
    `steam_award_vote_request`,
    `mod_hide_library_overview`,
    `steam_game_festival_artist_statement`,
    `steam_game_festival_office_hour`,
    `steam_game_festival_broadcast`,
    `halloween`,
    `curator`,
    `curator_group_members`,
    `curator_public`,
    `audience_followers`,
  ],
  _ = [20, 31, 34],
  _ = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35],
  _ = [_.k_ESteamRealmGlobal],
  _ = [_.k_ESteamRealmChina],
  _ = [_.k_ESteamRealmGlobal, _.k_ESteamRealmChina],
  _ = [],
  _ = class _ {
    constructor() {
      _(this);
    }
    GID = void 0;
    AnnouncementGID = void 0;
    clanSteamID = new _();
    forumTopicGID = void 0;
    clanSteamIDOriginal = void 0;
    type = 1;
    appid = 0;
    name = new Map();
    description = new Map();
    timestamp_loc_updated = new Map();
    createTime = void 0;
    startTime = void 0;
    endTime = void 0;
    visibilityStartTime = void 0;
    visibilityEndTime = void 0;
    m_nBuildID = void 0;
    m_strBuildBranch = void 0;
    postTime = void 0;
    visibility_state = 0;
    broadcaster = void 0;
    jsondata = _;
    nCommentCount = 0;
    nVotesUp = 0;
    nVotesDown = 0;
    comment_type;
    gidfeature;
    gidfeature2;
    featured_app_tagid;
    bOldAnnouncement = !1;
    announcementClanSteamID = void 0;
    loadedAllLanguages = !1;
    bLoaded = !1;
    deleteInProgress = !1;
    vecTags = [];
    creator_steamid;
    last_update_steamid = void 0;
    rtime32_last_modified = void 0;
    rtime32_last_solr_search_col_updated = void 0;
    rtime32_last_local_modification = void 0;
    rtime32_moderator_reviewed = void 0;
    video_preview_type = void 0;
    video_preview_id = void 0;
    has_live_stream;
    live_stream_viewer_count;
    m_overrideCurrentDay = void 0;
    fnGetLocalizedGroupImages;
    BIsPartnerEvent() {
      return !this.bOldAnnouncement && !!this.GID;
    }
    static FromJSON(_) {
      let _ = new _(),
        _ = JSON.parse(_);
      return (
        Object.assign(_, _),
        (_.name = new Map(_.name)),
        (_.description = new Map(_.description)),
        (_.vecTags = [...(_.vecTags ?? _.tags ?? [])]),
        (_.clanSteamID = new _(_.clanSteamID)),
        _(
          _.clanSteamID && _.clanSteamID.BIsValid(),
          `Invalid Clan SteamID: ` + _.clanSteamID.ConvertTo64BitString(),
        ),
        _.broadcaster &&
          ((_.broadcaster = new _(_.broadcaster)),
          _(
            _.broadcaster && _.broadcaster.BIsValid(),
            `Invalid Broadcast SteamID: ` +
              _.broadcaster.ConvertTo64BitString(),
          )),
        _(_.jsondata),
        _
      );
    }
    static FromCClanEventData(_, _) {
      let _ = new _();
      ((_.GID = _.gid),
        (_.clanSteamID = new _(_.clan_steamid)),
        _.name.set(_, _.event_name ?? ``),
        (_.type = _.event_type),
        (_.appid = _.appid ?? 0),
        (_.startTime = _.rtime32_start_time),
        (_.endTime = _.rtime32_end_time),
        (_.nCommentCount = _.comment_count ?? 0),
        (_.creator_steamid = _.creator_steamid),
        (_.last_update_steamid = _.last_update_steamid),
        (_.jsondata = JSON.parse(_.jsondata ?? `{}`)),
        _(_.jsondata),
        (_.rtime32_last_local_modification = _.rtime32_last_modified),
        (_.visibility_state = _.published
          ? _.hidden
            ? _.unlisted
              ? 3
              : 1
            : 2
          : 0),
        (_.createTime = _.rtime_created),
        (_.m_nBuildID = _.build_id),
        (_.m_strBuildBranch = _.build_branch),
        (_.visibilityStartTime = _.rtime32_visibility_start),
        (_.visibilityEndTime = _.rtime32_visibility_end),
        (_.rtime32_moderator_reviewed = _.rtime_mod_reviewed),
        (_.featured_app_tagid = _.featured_app_tagid),
        _.broadcaster_accountid &&
          (_.broadcaster = _.InitFromAccountID(
            _.broadcaster_accountid,
            _.EUNIVERSE,
          )),
        (_.AnnouncementGID = _.announcement_body?.gid ?? `0`));
      let _ = _.clan_steamid_original;
      return (
        _
          ? (_.clanSteamIDOriginal = new _(_))
          : _.announcement_body?.clanid &&
            (_.clanSteamIDOriginal = _.InitFromClanID(
              Number(_.announcement_body.clanid),
              _.EUNIVERSE,
            )),
        (_.postTime = _.announcement_body?.posttime),
        (_.forumTopicGID = _.forum_topic_id),
        _.name.set(_, _.announcement_body?.headline ?? ``),
        _.description.set(_, _.announcement_body?.body ?? ``),
        (_.nCommentCount = _.comment_count ?? 0),
        (_.vecTags = [...(_.announcement_body?.tags ?? [])]),
        (_.forumTopicGID = _.announcement_body?.forum_topic_id),
        (_.nVotesUp = _.announcement_body?.voteupcount ?? 0),
        (_.nVotesDown = _.announcement_body?.votedowncount ?? 0),
        _
      );
    }
    toJSON(_) {
      let _ = {};
      return (
        Object.assign(_, this),
        (_.name = Array.from(this.name)),
        (_.description = Array.from(this.description)),
        (_.vecTags = Array.from(this.vecTags)),
        (_.tags = _.vecTags),
        (_.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
        this.broadcaster &&
          (_.broadcaster = this.broadcaster.ConvertTo64BitString()),
        _
      );
    }
    clone(_ = !1) {
      let _ = new _();
      if (
        ((_.GID = this.GID),
        (_.AnnouncementGID = this.AnnouncementGID),
        (_.clanSteamID = this.clanSteamID),
        (_.clanSteamIDOriginal = this.clanSteamIDOriginal),
        (_.bOldAnnouncement = this.bOldAnnouncement),
        (_.nCommentCount = this.nCommentCount),
        (_.nVotesUp = this.nVotesUp),
        (_.nVotesDown = this.nVotesDown),
        (_.forumTopicGID = this.forumTopicGID),
        (_.comment_type = this.comment_type),
        (_.gidfeature = this.gidfeature),
        (_.gidfeature2 = this.gidfeature2),
        (_.featured_app_tagid = this.featured_app_tagid),
        (_.creator_steamid = this.creator_steamid),
        (_.last_update_steamid = this.last_update_steamid),
        (_.rtime32_last_modified = this.rtime32_last_modified),
        (_.rtime32_last_solr_search_col_updated =
          this.rtime32_last_solr_search_col_updated),
        (_.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
        (_.type = this.type),
        (_.appid = this.appid),
        (_.name = new Map()),
        this.name.forEach((_, _) => {
          _.name.set(_, _);
        }),
        (_.description = new Map()),
        this.description.forEach((_, _) => {
          _.description.set(_, _);
        }),
        (_.timestamp_loc_updated = new Map()),
        this.timestamp_loc_updated.forEach((_, _) => {
          _.timestamp_loc_updated.set(_, _);
        }),
        (_.createTime = this.createTime ?? 0),
        (_.startTime = this.startTime),
        (_.endTime = this.endTime),
        (_.visibilityStartTime = this.visibilityStartTime),
        (_.visibilityEndTime = this.visibilityEndTime),
        (_.postTime = this.postTime),
        (_.visibility_state = this.visibility_state),
        (_.loadedAllLanguages = this.loadedAllLanguages),
        (_.bLoaded = this.bLoaded),
        (_.broadcaster = this.broadcaster
          ? new _(this.broadcaster.ConvertTo64BitString())
          : void 0),
        (_.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
        (_.vecTags = []),
        _
          ? ((_.m_nBuildID = this.m_nBuildID),
            (_.m_strBuildBranch = this.m_strBuildBranch),
            this.vecTags.forEach((_) => _.vecTags.push(_)))
          : this.vecTags.forEach((_) => {
              _.includes(_) && _.vecTags.push(_);
            }),
        _.jsondata.email_setting)
      ) {
        let _ = 100;
        for (let _ of _.jsondata.email_setting.sections)
          _.unique_id || ((_.unique_id = `email_section_${_}`), _++);
      }
      return _;
    }
    GetLastReferencedSaleDayFromCapsules(_, _) {
      let _ = _;
      return (
        _?.forEach((_) => {
          _.visibility_index !== void 0 &&
            (_ =
              _ === void 0
                ? _.visibility_index
                : Math.max(_, _.visibility_index));
        }),
        _
      );
    }
    GetLastReferencedSaleDay() {
      let _;
      for (let _ of this.GetSaleSections())
        if (_.section_type === `tabs`) {
          if ((_.tabs?.length ?? 0) > 0)
            for (let _ of _.tabs ?? [])
              _ = this.GetLastReferencedSaleDayFromCapsules(_.capsules, _);
        } else _ = this.GetLastReferencedSaleDayFromCapsules(_.capsules, _);
      return (
        (this.jsondata.sale_num_headers ?? 0) > 1 &&
          (_ == null || _ < (this.jsondata.sale_num_headers ?? 0)) &&
          (_ = this.jsondata.sale_num_headers),
        _
      );
    }
    GetDayIndexFromEventStart(_ = _()) {
      let _ = 0;
      (this.startTime !== void 0 &&
        _ >= this.startTime &&
        (_ = Math.floor((_ - this.startTime) / 86400)),
        this.m_overrideCurrentDay !== void 0 &&
          this.m_overrideCurrentDay >= 0 &&
          (_ = this.m_overrideCurrentDay));
      let _ = this.GetLastReferencedSaleDay() || 0;
      return Math.min(_, _);
    }
    GetNameWithFallback(_) {
      let _ = _.GetELanguageFallback(_);
      return this.name.get(_) || this.name.get(_);
    }
    BInRealmGlobal() {
      return !this.BHasTag(`disable_steam_global`);
    }
    BInRealmChina() {
      return this.BHasTag(`enable_steam_china`);
    }
    BIsLanguageValidForRealms(_) {
      return !!(
        (this.BInRealmGlobal() &&
          _.IsELanguageValidInRealm(_, _.k_ESteamRealmGlobal)) ||
        (this.BInRealmChina() &&
          _.IsELanguageValidInRealm(_, _.k_ESteamRealmChina))
      );
    }
    GetImgArray(_) {
      let _ = [];
      if (
        ((_ === `background` || _ == `localized_title_image`) &&
          (_ = this.jsondata.localized_title_image),
        _ === `capsule`)
      )
        _ = this.jsondata.localized_capsule_image;
      else if (_ === `spotlight`) _ = this.jsondata.localized_spotlight_image;
      else if (_ === `email_full` || _ === `email_centered`)
        _ = this.jsondata.email_setting
          ? this.jsondata.email_setting.sections[0].localized_image
          : [];
      else if (_ === `broadcast_left`)
        _ = this.jsondata.localized_broadcast_left_image;
      else if (_ === `broadcast_right`)
        _ = this.jsondata.localized_broadcast_right_image;
      else if (_ === `sale_header`) {
        if ((this.jsondata.sale_num_headers ?? 0) > 1) {
          let _ = Math.min(
            (this.jsondata.sale_num_headers ?? 0) - 1,
            this.GetDayIndexFromEventStart(),
          );
          _ = this.jsondata.localized_per_day_sales_header?.[_];
        } else _ = this.jsondata.localized_sale_header;
      } else
        _ === `sale_logo`
          ? (_ = this.jsondata.localized_sale_logo)
          : _ === `sale_overlay`
            ? (_ = this.jsondata.localized_sale_overlay)
            : _ === `sale_cross_promo_logo`
              ? (_ = this.jsondata.localized_sale_cross_promo_logo_image)
              : _.includes(_)
                ? (_ = this.fnGetLocalizedGroupImages?.())
                : _ === `product_banner`
                  ? (_ = this.jsondata.localized_sale_product_banner)
                  : _ === `product_mobile_banner`
                    ? (_ = this.jsondata.localized_sale_product_mobile_banner)
                    : _ === `bestofyear_banner`
                      ? (_ = this.jsondata.localized_bestofyear_banner)
                      : _ === `bestofyear_banner_mobile`
                        ? (_ = this.jsondata.localized_bestofyear_banner_mobile)
                        : _ === `localized_store_app_spotlight`
                          ? (_ = this.jsondata.localized_store_app_spotlight)
                          : _ === `localized_store_app_spotlight_mobile` &&
                            (_ =
                              this.jsondata
                                .localized_store_app_spotlight_mobile);
      return _;
    }
    GetImageURL(_, _ = 0, _ = _.full) {
      let _ = this.GetImgArray(_),
        _ = _ && _.length > _ && _[_] != null;
      return _ && _[_]?.startsWith(`http`)
        ? _[_]
        : _
          ? _.GenerateURLFromHashAndExt(this.clanSteamID, _[_] ?? ``, _)
          : void 0;
    }
    GetImageHash(_, _ = 0) {
      let _ = this.GetImgArray(_);
      return _ && _.length > _ && _[_] != null
        ? _[_].substr(0, _[_].length - 4)
        : null;
    }
    GetImageHashAndExt(_, _ = 0) {
      let _ = this.GetImgArray(_);
      return _ && _.length > _ && _[_] != null ? _[_] : null;
    }
    BHasSomeImage(_) {
      let _ = this.GetImgArray(_);
      return !!_ && _.some((_) => _ != null && _.length > 0);
    }
    BHasImage(_, _) {
      let _ = this.GetImgArray(_);
      return !!_ && _.length > _ && _[_] != null;
    }
    BHasAnnouncementGID() {
      return (
        this.AnnouncementGID !== null &&
        this.AnnouncementGID !== void 0 &&
        this.AnnouncementGID.length > 1
      );
    }
    GetAnnouncementGID() {
      return this.AnnouncementGID;
    }
    BHasForumTopicGID() {
      return (
        this.forumTopicGID !== null &&
        this.forumTopicGID !== void 0 &&
        this.forumTopicGID.length > 1
      );
    }
    GetForumTopicURL(_) {
      return this.BHasForumTopicGID()
        ? this.appid
          ? _.COMMUNITY_BASE_URL +
            `app/` +
            this.appid +
            `/eventcomments/` +
            this.forumTopicGID
          : _
            ? _.COMMUNITY_BASE_URL +
              `groups/` +
              _ +
              `/eventcomments/` +
              this.forumTopicGID
            : _.COMMUNITY_BASE_URL +
              `gid/` +
              this.clanSteamID.ConvertTo64BitString() +
              `/eventcomments/` +
              this.forumTopicGID
        : ``;
    }
    GetDiscussionURL(_) {
      return this.BHasForumTopicGID()
        ? this.GetForumTopicURL(_)
        : this.GetLegacyAnnouncementCommentsURL();
    }
    GetLegacyAnnouncementCommentsURL() {
      let _ = this.clanSteamIDOriginal ?? this.clanSteamID;
      return !this.BHasAnnouncementGID() || !_ || !_.BIsValid()
        ? ``
        : _.COMMUNITY_BASE_URL +
            `gid/` +
            _.ConvertTo64BitString() +
            `/announcements/old_detail/` +
            this.AnnouncementGID;
    }
    BIsEventInFuture(_ = _()) {
      return _ < (this.startTime ?? 0);
    }
    BHasEventEnded(_ = _()) {
      return (this.endTime ?? 0) < _;
    }
    UpdateVoteCount(_, _) {
      _ == `up`
        ? (this.nVotesUp = _(this.nVotesUp + _, 0, 2 ** 53 - 1))
        : _ == `down` &&
          (this.nVotesDown = _(this.nVotesDown + _, 0, 2 ** 53 - 1));
    }
    GetImageFromBeginningOfDescription(_, _) {
      let _ = this.GetDescriptionWithFallback(_);
      if (_) {
        let _ = _.indexOf(`[img]`);
        if (_ !== -1 && _ < _) {
          _ += 5;
          let _ = _.indexOf(`[/img]`, _);
          if (_ != -1) {
            let _ = _.substring(_, _).trim();
            if (_.length != 0) return _.ReplacementTokenToClanImageURL(_);
          }
        }
      }
      return null;
    }
    GetAppIDOrReferenceAppID() {
      return this.appid ? this.appid : this.jsondata?.referenced_appids?.[0];
    }
    BImageNeedScreenshotFallback(_, _) {
      let _ = this.GetImageURL(_, _);
      if (!_ || _.length == 0) {
        let _ = _.GetELanguageFallback(_);
        _ != _ && (_ = this.GetImageURL(_, _));
      }
      return !_ || _.length == 0;
    }
    GetDescriptionWithFallback(_) {
      let _ = _.GetELanguageFallback(_);
      return this.description.get(_) || this.description.get(_);
    }
    BIsImageSafeForAllAges(_, _, _ = {}) {
      let _ = _.GetELanguageFallback(_);
      return (
        this.GetImageURL(_, _) != null ||
        (_ != _ && this.GetImageURL(_, _) != null) ||
        (this.appid && _.bAppHasAgeSafeScreenshots) ||
        (!this.appid &&
          _.clanInfo &&
          ((_.clanInfo.is_creator_home && !_.clanInfo.is_ogg) ||
            _.clanInfo.is_curator))
      );
    }
    BIsVisibleEvent(_ = _()) {
      let _ = Math.floor(_);
      return (
        this.visibility_state == 3 ||
        (this.visibility_state == 2 &&
          _ > (this.visibilityStartTime ?? 0) &&
          ((this.visibilityEndTime ?? 0) < 10 ||
            _ < (this.visibilityEndTime ?? 0)))
      );
    }
    BIsStagedEvent() {
      return this.visibility_state == 1;
    }
    BIsUnlistedEvent() {
      return this.visibility_state == 3;
    }
    GetStartTimeAndDateUnixSeconds() {
      return this.startTime ?? 0;
    }
    GetEndTimeAndDateUnixSeconds() {
      return this.endTime ?? 0;
    }
    GetPostTimeAndDateUnixSeconds() {
      return this.postTime ?? 0;
    }
    GetVisibilityStartTimeAndDateUnixSeconds() {
      return this.visibilityStartTime ?? 0;
    }
    BIsEventActionEnabled(_ = _()) {
      return (
        !!this.jsondata.action_end_time &&
        (this.jsondata.action_end_time > _ ||
          (this.jsondata.action_end_time == 1575396e3 && 1606845600 > _))
      );
    }
    BHasSubTitle(_) {
      if (
        !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        _ >= this.jsondata.localized_subtitle.length
      )
        return !1;
      let _ = this.jsondata.localized_subtitle[_];
      return _ != null && _ != ``;
    }
    GetSubTitle(_) {
      return !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        _ >= this.jsondata.localized_subtitle.length
        ? ``
        : this.jsondata.localized_subtitle[_] || ``;
    }
    GetSubTitleWithLanguageFallback(_) {
      return this.jsondata
        ? _.GetWithFallback(this.jsondata.localized_subtitle, _)
        : ``;
    }
    GetSubTitleWithSummaryFallback(_) {
      return (
        _.GetWithFallback(this.jsondata?.localized_subtitle, _) ||
        _.GenerateSummaryFromText(this.GetDescriptionWithFallback(_))
      );
    }
    GetSummaryWithFallback(_, _) {
      return (
        _.GetWithFallback(this.jsondata?.localized_summary, _) ||
        _.GenerateSummaryFromText(this.GetDescriptionWithFallback(_), _)
      );
    }
    GetSummary(_) {
      return _.Get(this.jsondata?.localized_summary ?? [], _);
    }
    BHasSummary(_) {
      return !!this.GetSummary(_);
    }
    static GenerateSummaryFromText(_, _) {
      return !_ || _.trim().length == 0
        ? ``
        : ((_ = _(_, [
            `img`,
            `h1`,
            `h2`,
            `h3`,
            `spoiler`,
            `table`,
            `previewyoutube`,
            `looping_media`,
            `roomeffect`,
            `sticker`,
          ])),
          (_ = _(_, [`p`], ` `)),
          (_ = _(_)),
          (_ = _(_)),
          _(_, _ || 180));
    }
    BHasTag(_) {
      return this.vecTags.indexOf(_) != -1;
    }
    BHasTagStartingWith(_) {
      return this.vecTags.some((_) => _?.startsWith(_));
    }
    BIsOGGEvent() {
      return !!this.appid && this.appid > 0;
    }
    BShowLibrarySpotlight(_) {
      if (!_) return !!this.jsondata.library_spotlight;
      if (!this.jsondata.library_spotlight || _.includes(this.type)) return !1;
      let _ = new Date().getTime() / 1e3;
      return !(
        (_.includes(this.type) && this.endTime && _ > this.endTime) ||
        (this.startTime && _ > this.startTime + _.PerDay * 60)
      );
    }
    BShowLibrarySpotlightText() {
      return !!this.jsondata.library_spotlight_text;
    }
    BHasBroadcastEnabled() {
      return !!this.jsondata.bBroadcastEnabled;
    }
    BEventCanShowBroadcastWidget(_, _ = _()) {
      if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
      let _ = this.endTime ? this.endTime : _ + 3600;
      return (
        this.BHasBroadcastEnabled() &&
        !!this.jsondata.broadcast_whitelist &&
        this.jsondata.broadcast_whitelist.length > 0 &&
        (_ || ((this.startTime ?? 0) - 600 <= _ && _ < _))
      );
    }
    BHasBroadcastForceBanner() {
      return !!this.jsondata.broadcast_force_banner;
    }
    BSaleShowBroadcastAtTopOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some((_) => _.section_type == `broadcast`)
      );
    }
    BSaleShowCuratorRecommendationAtBottomOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some(
          (_) => _.section_type == `curator_recommendation`,
        )
      );
    }
    GetBroadcastChatVisibility() {
      return this.jsondata.broadcastChatSetting || `hide`;
    }
    GetBroadcastTitle(_) {
      return (
        _.GetWithFallback(this.jsondata.localized_broadcast_title, _) ||
        _(
          this.jsondata.default_broadcast_title ??
            `#Broadcast_default_title_dev`,
        )
      );
    }
    GetBroadcastWhitelist() {
      return this.jsondata.broadcast_whitelist ?? [];
    }
    GetBroadcastWhitelistAsSteamIDs() {
      return (
        this.jsondata.broadcast_whitelist?.map((_) =>
          _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString(),
        ) ?? []
      );
    }
    BIsBroadcastAccountIDWhiteListed(_) {
      return (this.jsondata.broadcast_whitelist || []).includes(Number(_));
    }
    BHasSaleEnabled() {
      return !!this.jsondata.bSaleEnabled;
    }
    BHasSaleVanity() {
      return !!this.jsondata.bSaleEnabled && !!this.jsondata.sale_vanity_id;
    }
    GetSaleVanity() {
      return this.jsondata.sale_vanity_id ?? ``;
    }
    BHasSaleUpdateLandingPageVanity() {
      return (
        !!this.jsondata.bSaleEnabled &&
        !!this.jsondata.sale_update_landing_page_vanity_id
      );
    }
    GetSaleUpdateLandingPageVanity() {
      return this.jsondata.sale_update_landing_page_vanity_id ?? ``;
    }
    GetSaleURL(_) {
      if (!this.jsondata.bSaleEnabled) return null;
      if (this.jsondata.sale_update_landing_page_vanity_id)
        return (
          _.STORE_BASE_URL +
          `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
        );
      if (!this.jsondata.sale_vanity_id)
        return (
          _.STORE_BASE_URL +
          `newshub/` +
          (this.appid
            ? `app/` + this.appid
            : `group/` + this.clanSteamID.GetAccountID()) +
          `/view/` +
          this.GID
        );
      if (this.BUsesContentHubForItemSource()) {
        let _ = this.jsondata.source_content_hub;
        return _
          ? typeof _ == `string`
            ? _.STORE_BASE_URL + `category/` + _
            : _.type == `category`
              ? _.STORE_BASE_URL + `category/` + _.category
              : _.type == `tags`
                ? _.STORE_BASE_URL + `tags/` + (_() || `en`) + `/` + _.tagid
                : _.type == `freetoplay`
                  ? _.STORE_BASE_URL + `genre/Free%20to%20Play/`
                  : _.type == `earlyaccess`
                    ? _.STORE_BASE_URL + `genre/Early%20Access/`
                    : _.STORE_BASE_URL + _.type
          : _.STORE_BASE_URL + `sale/` + this.jsondata.sale_vanity_id;
      }
      let _ = this.clanSteamID.GetAccountID(),
        _ = !!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
        _ = this.GetSaleVanity();
      return _ && _(_, _) ? _ + `sale/` + _ : _.STORE_BASE_URL + _(_, _, _);
    }
    BHasEmailEnabled() {
      return (
        !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
      );
    }
    GetSaleSections() {
      return this.jsondata.sale_sections ?? [];
    }
    GenerateDynamicSaleSections(_, _, _, _, _, _) {
      let _ = [],
        _ = {
          section_type: `unselected_empty`,
          capsules: [],
          events: [],
          links: [],
          localized_label: [],
          default_label: ``,
        },
        _ = _ + 10;
      return (
        _ &&
          _.push({
            ..._,
            section_type: `footer_self_creator_home`,
            unique_id: _++,
            curator_clan_id: this.clanSteamID.GetAccountID(),
          }),
        _ &&
          _.push({
            ..._,
            section_type: `footer_browse_more`,
            unique_id: _++,
          }),
        _ &&
          _.push(this.GenerateDynamicCreatorHomeItemBrowserSection(_++, _, _)),
        _ &&
          _.push({
            ..._,
            section_type: `footer_default_social_share`,
            unique_id: _++,
          }),
        _ &&
          _.push({
            ..._,
            section_type: `nextfest_header`,
            unique_id: _++,
          }),
        _
      );
    }
    GetSaleSectionIncludingFooterSections(_ = 0) {
      let _ = this.jsondata?.sale_show_creator,
        _ = this.jsondata.sale_browse_more_button,
        _ =
          this.GetSaleSectionsByType(`social_share`).length == 0 &&
          !this.jsondata.sale_default_social_media_disabled,
        _ = this.GetEventType() == 36,
        _ = this.BShowNextFestHeader(!0);
      return _ || _ || _ || _ || _
        ? [
            ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, _, _),
            ...this.GetSaleSections(),
            ...this.GenerateDynamicSaleSections(!!_, !!_, _, _, !1, _),
          ]
        : this.GetSaleSections();
    }
    GetSaleSectionByID(_, _ = 0) {
      return _ > 99999
        ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, _).find(
            (_) => _.unique_id == _,
          )
        : this.jsondata.sale_sections?.find((_) => _.unique_id == _);
    }
    GetSaleSectionCount() {
      return this.jsondata.sale_sections?.length ?? 0;
    }
    GetSaleSectionsByType(_) {
      return (
        this.jsondata.sale_sections?.filter((_) => _.section_type == _) ?? []
      );
    }
    GetLastUpdateTime() {
      return this.rtime32_last_modified ?? 0;
    }
    GetLastUpdaterSteamIDStr() {
      return this.last_update_steamid ?? ``;
    }
    GetSaleSectionFirstMatchByType(_) {
      let _ = this.jsondata.sale_sections?.length ?? 0;
      if (_ != 0) {
        for (let _ = 0; _ < _; ++_)
          if (this.jsondata.sale_sections[_].section_type === _)
            return this.jsondata.sale_sections[_];
      }
    }
    static AccumulateCapsuleListIDs(_, _, _, _) {
      _ &&
        _.forEach((_) => {
          _ && _.type && _.has(_.type) && (!_ || _(_._)) && _.add(_._);
        });
    }
    GetSaleItemOfType(_, _) {
      if (!this.jsondata.sale_sections) return new Set();
      let _ = new Set(_),
        _ = new Set();
      return (
        _(
          !this.jsondata.bOptimizedForSize,
          `Cannot find all items in optimized json`,
        ),
        this.jsondata.bOptimizedForSize,
        this.jsondata.tagged_items?.forEach((_) => {
          _.AccumulateCapsuleListIDs([_.capsule], _, _, _);
        }),
        this.jsondata.sale_sections.forEach((_) => {
          if (_(_.section_type))
            _.AccumulateCapsuleListIDs(_.capsules, _, _, _);
          else if (_.section_type === `tabs` && _.tabs)
            for (let _ of _.tabs)
              _.AccumulateCapsuleListIDs(_.capsules, _, _, _);
        }),
        _
      );
    }
    GetSaleItemCountOfType(_, _) {
      return this.GetSaleItemOfType(_, _).size;
    }
    GetSaleFeaturedAppsCount(_) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        _,
      );
    }
    GetSaleFeaturedAppsAndDemosCount(_) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        _,
      );
    }
    GetSaleFeaturedBundlesCount(_) {
      return this.GetSaleItemCountOfType([`bundle`], _);
    }
    GetSaleFeaturedPackagesCount(_) {
      return this.GetSaleItemCountOfType([`sub`], _);
    }
    GetSaleFeaturedApps(_) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        _,
      );
    }
    GetSaleFeaturedAppsAndDemos(_) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        _,
      );
    }
    GetSaleFeaturedBundles(_) {
      return this.GetSaleItemOfType([`bundle`], _);
    }
    GetSaleFeaturedPackages(_) {
      return this.GetSaleItemOfType([`sub`], _);
    }
    GetTaggedItems() {
      return this.jsondata.tagged_items || [];
    }
    BHasScheduleEnabled() {
      return this.jsondata.bScheduleEnabled;
    }
    GetEventType() {
      return this.type;
    }
    GetEventTypeAsString() {
      return _(this.type);
    }
    GetCategoryAsString(_) {
      return _(this.type, this.vecTags, _);
    }
    GetAllTags() {
      return this.vecTags;
    }
    BMatchesAllTags(_) {
      let _ = !0;
      return (
        _?.forEach((_) => {
          this.vecTags.includes(_) || (_ = !1);
        }),
        _
      );
    }
    BAllowedSteamStoreSpotlight() {
      return !!this.jsondata.store_spotlight;
    }
    BHasLibaryHomeSpotlight() {
      return !!this.jsondata.library_home_spotlight;
    }
    GetSteamAwardCategory() {
      return this.jsondata.steam_award_category_suggestion ?? 0;
    }
    GetSteamAwardNomineeCategories() {
      return this.jsondata.steam_award_category_voteids ?? [];
    }
    BIsLockedToGameOwners() {
      return !!this.jsondata.ownership_requirement_info?.bLockedToAppOwners;
    }
    GetRequiredAppIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
        : [];
    }
    GetRequiredPackageIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
        : [];
    }
    BUseSubscriptionLayout() {
      return !!this.jsondata.sale_use_subscription_layout;
    }
    BIsLockedToPartnerAppRights() {
      return !!this.jsondata.app_right_requirement_info
        ?.bLockedToPartnerAppRights;
    }
    GetRequiredPartnerAppRights() {
      return this.jsondata.app_right_requirement_info;
    }
    GetValveAccessLog() {
      return Array.isArray(this.jsondata.valve_access_log)
        ? this.jsondata.valve_access_log
        : [];
    }
    BUsesContentHubForItemSource() {
      return (
        this.jsondata.item_source_type === 1 &&
        !!this.jsondata.source_content_hub
      );
    }
    GetContentHubType() {
      if (this.BUsesContentHubForItemSource())
        return this.jsondata.source_content_hub == null
          ? `games`
          : typeof this.jsondata.source_content_hub == `string`
            ? `category`
            : this.jsondata.source_content_hub.type;
    }
    GetContentHubCategory() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? this.jsondata.source_content_hub
          : this.jsondata.source_content_hub.category;
    }
    GetContentHubTag() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? 0
          : this.jsondata.source_content_hub.tagid;
    }
    GetContentHub() {
      return typeof this.jsondata.source_content_hub == `string`
        ? {
            type: `category`,
            category: this.jsondata.source_content_hub,
          }
        : this.jsondata.source_content_hub;
    }
    BContentHubDiscountedOnly() {
      return !!this.jsondata.content_hub_discounted_only;
    }
    BIsBackgroundImageGroupingEnabled() {
      return !!this.jsondata.sale_background_img_groups?.enabled;
    }
    GetSalePageGroupDefinition() {
      return this.jsondata.sale_background_img_groups;
    }
    GetSalePageBackgroundImageGroupCount() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
        : 0;
    }
    GetAllSalePageGroups() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups
        : [];
    }
    GetSalePageBackgroundGroup(_) {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups?.[_]
        : void 0;
    }
    GetIncludedRealmList() {
      let _ = this.BInRealmGlobal(),
        _ = this.BInRealmChina();
      return (
        _(
          _ || _,
          `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
        ),
        _ && _ ? _ : _ ? _ : _ ? _ : _
      );
    }
    BIsValidForRealm(_) {
      return this.GetIncludedRealmList().includes(_);
    }
    BIsNextFest(_ = !1) {
      let _ = this.jsondata.sale_vanity_id?.toLowerCase(),
        _ = new _(this.clanSteamID).GetAccountID();
      return !(
        !_ ||
        _ != 39049601 ||
        !_.startsWith(`nextfest`) ||
        (_ && (_.endsWith(`preview`) || _.endsWith(`press`)))
      );
    }
    BShowNextFestHeader(_) {
      return _ && _.is_valve_email
        ? this.BIsNextFest(!1)
        : this.BIsNextFest(!0) &&
            !!this.startTime &&
            this.startTime > new Date(`2026-03-01`).getTime() / 1e3;
    }
    GenerateDynamicCreatorHomeItemBrowserSection(_, _, _) {
      let _ = _ >= 7;
      return {
        ..._,
        section_type: `sale_item_browser`,
        unique_id: _,
        item_browse_section_data: {
          enable_search: !0,
          tabs: [
            `all_released`,
            `popularpurchased`,
            `all_upcoming`,
            `discounted`,
          ],
          prefer_assets_without_overrides: !1,
        },
        prefer_assets_without_overrides: !1,
        enable_faceted_browsing: _,
        min_capsule_matches_for_facet_values: 5,
        max_facet_values_for_facet: 5,
        background_gradient_top: `#0000006b`,
        background_gradient_bottom: `#0000006b`,
        facet_sort_order: 1,
        cap_item_count: 24,
        show_more_count: 48,
        facet_auto_generate_options: {
          only_facets: [
            {
              loc_token: `#App_Taxonomy_Survey_QSuperGenreTitle`,
            },
            {
              loc_token: `#AppTypeLabelTitle`,
              only_values: [
                `#AppTypeLabel_game`,
                `#AppTypeLabel_dlc`,
                `#AppTypeLabel_demo`,
                `#AppTypeLabel_music`,
              ],
              initially_selected_values: [`#AppTypeLabel_game`],
            },
            {
              loc_token: `#Sale_Preferences`,
            },
          ],
          initially_expanded_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
          prioritized_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
        },
      };
    }
  };
(_([_], _.prototype, `GID`, void 0),
  _([_], _.prototype, `AnnouncementGID`, void 0),
  _([_], _.prototype, `forumTopicGID`, void 0),
  _([_], _.prototype, `type`, void 0),
  _([_], _.prototype, `appid`, void 0),
  _([_], _.prototype, `name`, void 0),
  _([_], _.prototype, `description`, void 0),
  _([_], _.prototype, `timestamp_loc_updated`, void 0),
  _([_], _.prototype, `startTime`, void 0),
  _([_], _.prototype, `endTime`, void 0),
  _([_], _.prototype, `visibilityStartTime`, void 0),
  _([_], _.prototype, `visibilityEndTime`, void 0),
  _([_], _.prototype, `m_nBuildID`, void 0),
  _([_], _.prototype, `m_strBuildBranch`, void 0),
  _([_], _.prototype, `postTime`, void 0),
  _([_], _.prototype, `visibility_state`, void 0),
  _([_], _.prototype, `broadcaster`, void 0),
  _([_], _.prototype, `jsondata`, void 0),
  _([_], _.prototype, `nCommentCount`, void 0),
  _([_], _.prototype, `nVotesUp`, void 0),
  _([_], _.prototype, `nVotesDown`, void 0),
  _([_], _.prototype, `bOldAnnouncement`, void 0),
  _([_], _.prototype, `announcementClanSteamID`, void 0),
  _([_], _.prototype, `loadedAllLanguages`, void 0),
  _([_], _.prototype, `bLoaded`, void 0),
  _([_], _.prototype, `deleteInProgress`, void 0),
  _([_], _.prototype, `vecTags`, void 0),
  _([_], _.prototype, `last_update_steamid`, void 0),
  _([_], _.prototype, `rtime32_last_modified`, void 0),
  _([_], _.prototype, `rtime32_last_solr_search_col_updated`, void 0),
  _([_], _.prototype, `rtime32_last_local_modification`, void 0),
  _([_], _.prototype, `rtime32_moderator_reviewed`, void 0),
  _([_], _.prototype, `video_preview_type`, void 0),
  _([_], _.prototype, `video_preview_id`, void 0),
  _([_], _.prototype, `m_overrideCurrentDay`, void 0));
function _(_) {
  if (_) return _?.replace(/[()]/g, `\\$&`);
}
var _ = class _ extends _.Message {
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
      return `CStorePreferences_GetIgnoreList_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.ignore_list || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ignore_list: {
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
      return `CStorePreferences_GetIgnoreList_Response`;
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
            packageid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reason: {
              _: 3,
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
      return `CStorePreferences_GetIgnoreList_Response_IgnoreListEntry`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StorePreferences.GetIgnoreList#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetIgnoreList = _;
})((_ ||= {}));
var _ = class _ {
  m_queryClient = _;
  m_boxCacheVersion = _.box(0);
  m_bInitialized = !1;
  m_boxAjaxInFlight = _.box(!1);
  LazyInit() {
    this.m_bInitialized ||
      ((this.m_bInitialized = !0),
      this.m_queryClient.getQueryCache().subscribe((_) => {
        (_?.type == `added` || _?.type == `updated` || _?.type == `removed`) &&
          _(_.query?.queryKey) &&
          _(() => this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1));
      }));
  }
  ReadData() {
    return (
      this.LazyInit(), this.m_boxCacheVersion.get(), _(this.m_queryClient)
    );
  }
  BIsLoaded() {
    return this.ReadData().bLoaded;
  }
  GetWishlistGamesInUserOrder() {
    return this.ReadData().rgWishlistInOrder;
  }
  GetRecommendedGamesInIRPriorityOrder() {
    return this.ReadData().rgRecommendedAppsInOrder;
  }
  GetFollowedCuratorCount() {
    return this.ReadData().setCuratorsFollowed.size;
  }
  GetFollowedCuratorsAccountID() {
    return this.ReadData().rgCuratorsFollowed;
  }
  BIsFollowingCurator(_) {
    return this.ReadData().setCuratorsFollowed.has(_(_));
  }
  BIsIgnoringCurator(_) {
    return this.ReadData().setCuratorsIgnored.has(_(_));
  }
  get ExcludedContentDescriptor() {
    return this.ReadData().rgExcludedContentDescriptors;
  }
  BExcludeTagIDs(_) {
    let _ = this.ReadData().setExcludedTagIDs;
    return _.some((_) => _.has(_));
  }
  GetExcludedTagsSortedByID() {
    return this.ReadData().rgExcludedTagIDsSorted;
  }
  BExcludesContentDescriptor(_) {
    let _ = this.ReadData().setExcludedContentDescriptors;
    return _.some((_) => _.has(_));
  }
  BIncludesContentDescriptor(_) {
    return !this.ReadData().setExcludedContentDescriptors.has(_);
  }
  BIsGameWishlisted(_) {
    return this.ReadData().setWishlist.has(Number(_));
  }
  BIsGameRecommended(_) {
    return this.ReadData().setRecommendedApps.has(Number(_));
  }
  BIsGameIgnored(_) {
    return !!_ && this.ReadData().mapIgnoredApps.has(Number(_));
  }
  BIsPackageIgnored(_) {
    return !!_ && this.ReadData().mapIgnoredPackages.has(Number(_));
  }
  BIsGameOwned(_) {
    return !!_ && this.ReadData().setOwnedApps.has(Number(_));
  }
  BIsStoreItemOwned(_) {
    switch (_.GetStoreItemType()) {
      case 0:
        if (this.BIsGameOwned(_.GetAppID())) return !0;
        break;
      case 1:
      case 2:
        if (_.GetIncludedAppIDs().every((_) => this.BIsGameOwned(_))) return !0;
    }
    return !1;
  }
  BOwnsApp(_) {
    return !!_ && this.ReadData().setOwnedApps.has(Number(_));
  }
  BOwnsPackage(_) {
    return this.ReadData().setOwnedPackages.has(Number(_));
  }
  BHasUsedHardware(_) {
    return this.ReadData().setHardwareUsed.has(_);
  }
  BShowFilteredUserReviewScores() {
    return this.ReadData().bShowFilteredUserReviewScores;
  }
  BAppImpressionsAllowed() {
    return this.ReadData().bAllowAppImpressions;
  }
  GetPrimaryLanguage() {
    return this.ReadData().ePrimaryLanguage;
  }
  GetSecondaryLanguages() {
    return this.ReadData().setSecondaryLanguages;
  }
  BIsAnyLanguageEnabled(_) {
    let { ePrimaryLanguage: _, setSecondaryLanguages: _ } = this.ReadData();
    return (
      _ == null || _ <= -1 || 32 <= _ || _.some((_) => _ === _ || _.has(_))
    );
  }
  GetRecommendedTags() {
    return this.ReadData().rgRecommendedTags;
  }
  BIsAjaxInFlight() {
    return this.m_boxAjaxInFlight.get();
  }
  BIsAppRecommendedBySomeCurator(_) {
    return this.ReadData().mapRecommendingCuratorsForApp.has(Number(_));
  }
  GetRecommendingCuratorsForApp(_) {
    return this.ReadData().mapRecommendingCuratorsForApp.get(Number(_));
  }
  BHasPlatformPreferenceSet() {
    let _ = this.ReadData().setPreferredPlatforms.size;
    return _ > 0 && _ < 3;
  }
  BIsPreferredPlatform(_) {
    return this.ReadData().setPreferredPlatforms.has(_);
  }
  async HintLoad() {
    return (this.LazyInit(), await _(this.m_queryClient), this);
  }
  async UpdateFollowOrIgnoreCurator(_, _, _) {
    this.LazyInit();
    let _ =
        _.STORE_BASE_URL + `curators/` + (_ ? `ajaxfollow/` : `ajaxignore/`),
      _ = _.GetAccountID(),
      _ = new FormData();
    (_.append(`clanid`, `` + _),
      _.append(`sessionid`, _()),
      _.append(_ ? `follow` : `ignore`, _ ? `1` : `0`));
    let _ = await _.default.post(_, _, {
      withCredentials: !0,
    });
    return (
      _ &&
        _.status == 200 &&
        (this.InvalidateCache(),
        _(this.m_queryClient, (_) => {
          let _ = new Set(_ ? _.setCuratorsFollowed : _.setCuratorsIgnored);
          return (
            _ ? _.add(_) : _.delete(_),
            _
              ? {
                  setCuratorsFollowed: _,
                  rgCuratorsFollowed: Array.from(_),
                }
              : {
                  setCuratorsIgnored: _,
                }
          );
        })),
      _.data
    );
  }
  async UpdateAppIgnore(_, _, _, _ = 0) {
    this.LazyInit();
    let _ = _.STORE_BASE_URL + `recommended/ignorerecommendation`,
      _ = new FormData();
    (_.append(`sessionid`, _()),
      _.append(`appid`, `` + _),
      _.append(`remove`, _ ? `0` : `1`),
      _.append(`snr`, _),
      _.append(`ignore_reason`, `` + _));
    try {
      _(() => this.m_boxAjaxInFlight.set(!0));
      let _ = await _.default.post(_, _, {
        withCredentials: !0,
      });
      return (
        _ &&
          _.status == 200 &&
          (this.InvalidateCache(),
          _(this.m_queryClient, (_) => {
            let _ = new Map(_.mapIgnoredApps);
            return (
              _ ? _.set(Number(_), _) : _.delete(Number(_)),
              {
                mapIgnoredApps: _,
              }
            );
          })),
        _.data
      );
    } catch (_) {
      let _ = _(_);
      console.error(`UpdateAppIgnore`, _.strErrorMsg, _);
    } finally {
      _(() => this.m_boxAjaxInFlight.set(!1));
    }
    return {
      success: 2,
    };
  }
  async AddToCart(_, _, _, _, _, _, _) {
    if (
      window.g_bUseNewCartAPI !== void 0 &&
      window.g_bUseNewCartAPI &&
      typeof window.AddItemToCart == `function`
    ) {
      let _;
      return (_ && (_ = _.ParseSNR(_)), window.AddItemToCart(_, _, _), !0);
    }
    let _ = new FormData();
    (_.append(`action`, `add_to_cart`),
      _ ? _.append(`bundleid`, _.toString()) : _.append(`subid`, `` + _),
      _ && _.append(`snr`, _),
      _.append(`sessionid`, _()),
      _.append(`quantity`, `1`));
    let _ = _(_);
    _.preventDefault();
    try {
      (await _.default.post(_, _, {
        withCredentials: !0,
      }),
        this.InvalidateCache(),
        _?.fnSetURL ? _.fnSetURL(_) : (_.location.href = _));
    } catch (_) {
      return (console.log(`HandleOnAddToCart`, _), !1);
    }
    return !0;
  }
  InvalidateCache() {
    _();
  }
  static s_globalSingletonStore;
  static Get() {
    return ((_.s_globalSingletonStore ||= new _()), _.s_globalSingletonStore);
  }
  static BConfirmedAdultContentAgeGate() {
    return _();
  }
  constructor() {}
};
function _(_) {
  return typeof _ == `object` && `GetAccountID` in _
    ? _.GetAccountID()
    : Number(_);
}
function _() {
  let { isPending: _ } = _();
  return [_, _.Get()];
}
var _ = `yFKurY5xd-8-`,
  _ = `x-jXNI-s184-`,
  _ = `aG-OF9IYlE8-`,
  _ = `Ef8xOk5PJbg-`,
  _ = `zhuLkiDPnzg-`,
  _ = `RTkq2WI2bK4-`,
  _ = `_4vRcmVJ4gN8-`,
  _ = `_9fTa0lmYa50-`,
  _ = `_3FDFuSiCh1s-`,
  _ = `G7E1sJby9GI-`,
  _ = `eEhfnGythD0-`,
  _ = `qtB6DnXH-bs-`,
  _ = `hBOvJNgGqZc-`,
  _ = `TsekNW90qyQ-`,
  _ = `tF-0HvIRqgQ-`,
  _ = `_0EeL7NnvnjU-`,
  _ = `L-E-bGfH1Sw-`,
  _ = `-pV6HCIaaqM-`,
  _ = `_4CGdt38X5eY-`,
  _ = `IC4k3Gish5g-`,
  _ = `MUbRKQFMT7E-`,
  _ = {
    Header1: _,
    Header2: _,
    Header3: _,
    Link: _,
    LinkHost: _,
    LinkButton: _,
    LinkPill: _,
    UnorderedList: _,
    OrderedList: _,
    StoreWidget: _,
    MedalTVWidget: _,
    LoyaltyRewardCtn: _,
    SaleSectionCtn: _,
    SaleTextCtn: _,
    ReminderCtn: _,
    BlockQuote: _,
    SocialLink: _,
    SocialIcon: _,
    LocalizeBlock: _,
    CheckMark: _,
    ScreenshotCarousel: _,
  };
function _(_) {
  let _ = _(),
    _ = _();
  return _(_(_, _, _)).data ?? void 0;
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    enabled: !!_?.GID,
    queryFn: async () => {
      if (!_) return null;
      let _ = _.appid
          ? await _.ensureQueryData(
              _(_, {
                appid: _.appid,
              }),
            )
          : null,
        _ = await _.ensureQueryData(_(_.clanSteamID.GetAccountID(), _));
      if (_.appid) {
        if (_) {
          if (_.all_ages_screenshots && _.all_ages_screenshots.length > 0) {
            let _ = Number(
              _.bOldAnnouncement
                ? _.AnnouncementGID
                : _.GID == null
                  ? 0
                  : _.GID,
            );
            return (
              (_ %= _.all_ages_screenshots.length),
              `${_.STORE_ITEM_BASE_URL}${_.all_ages_screenshots[_].filename}`
            );
          }
        } else return ``;
      }
      return _.GetEventType() != 36 &&
        _ &&
        ((_.is_creator_home && !_.is_ogg) || _.is_curator)
        ? (_.avatar_full_url ?? null)
        : null;
    },
  };
}
function _(_) {
  return [`useFallbackArtworkScreenshot`, _?.GID];
}
function _(_, _, _, _ = _.full, _ = !0) {
  let _ = _(),
    _ = _();
  return _(_(_, _, _, _, _, _, _)).data ?? void 0;
}
function _(_, _, _, _ = _.full, _ = !0) {
  return [`useEventImageURLWithFallback`, _?.GID, _, _, _, _];
}
function _(_, _, _, _, _, _ = _.full, _ = !0) {
  return {
    queryKey: _(_, _, _, _, _),
    enabled: !!_?.GID,
    initialData: () => _(_, _, _, _, _),
    queryFn: async () => {
      if (!_) return null;
      let _ = _(_, _, _, _, _);
      if (_) return _;
      let _ = await _.ensureQueryData(_(_.clanSteamID.GetAccountID(), _));
      if (_ == `capsule`) {
        let _ = _.appid;
        if (!_ && _ && ((_.is_creator_home && !_.is_ogg) || _.is_curator)) {
          if (_.jsondata?.referenced_appids?.length)
            _ = _.jsondata.referenced_appids[0];
          else return _.avatar_full_url ?? null;
        }
        let _ = await _.ensureQueryData(
          _(_, {
            appid: _,
          }),
        );
        return _
          ? (_(_, `main_capsule`) ?? null)
          : _?.avatar_full_url
            ? _.avatar_full_url
            : `${_.STORE_ITEM_BASE_URL}steam/apps/${_}/header.jpg`;
      }
      return _ == `background` &&
        _ &&
        ((_.is_creator_home && !_.is_ogg) || _.is_curator)
        ? (_.creator_page_bg_url ?? null)
        : await _.ensureQueryData(_(_, _, _));
    },
  };
}
function _(_, _, _, _ = _.full, _ = !0) {
  if (!_) return;
  let _ = _.GetImageURL(_, _, _);
  if (_ && _.trim().length > 0) return _;
  let _ = _.GetELanguageFallback(_);
  if (_ != _) {
    let _ = _.GetImageURL(_, _, _);
    if (_ && _.trim().length > 0) return _;
  }
  if (_ == `capsule`) {
    let _ = _.GetImageFromBeginningOfDescription(_, Number.MAX_VALUE);
    if (_ && (_ || _(_))) return _;
  }
}
function _(_) {
  return (
    (_.gid == null || _.gid == null || _.gid == `0`) &&
    !!_.announcement_body &&
    _.announcement_body.gid != `0`
  );
}
function _(_) {
  return _(_) ? _ + _.announcement_body?.gid : _.gid;
}
function _(_, _) {
  let _ = new _();
  if (
    ((_.clanSteamID = _),
    _(
      _.clanSteamID && _.clanSteamID.BIsValid(),
      `Invalid Clan SteamID: ` +
        _.clanSteamID.ConvertTo64BitString() +
        ` ` +
        _.EUNIVERSE,
    ),
    (_.GID = _(_)),
    (_.bOldAnnouncement = _(_)),
    (_.appid = _.appid ?? 0),
    (_.createTime = _.rtime_created),
    (_.startTime = _.rtime32_start_time),
    (_.endTime = _.rtime32_end_time),
    (_.visibilityStartTime = _.rtime32_visibility_start),
    (_.visibilityEndTime = _.rtime32_visibility_end),
    (_.loadedAllLanguages = !1),
    (_.type = _.event_type ?? 1),
    (_.nVotesUp = _.votes_up ?? 0),
    (_.nVotesDown = _.votes_down ?? 0),
    (_.comment_type = _.comment_type),
    (_.gidfeature = _.gidfeature),
    (_.gidfeature2 = _.gidfeature2),
    (_.featured_app_tagid = _.featured_app_tagid),
    (_.vecTags = []),
    (_.creator_steamid = _.creator_steamid),
    (_.last_update_steamid = _.last_update_steamid),
    (_.rtime32_last_modified = _.rtime32_last_modified),
    (_.rtime32_moderator_reviewed = _.rtime_mod_reviewed),
    (_.video_preview_type = _.video_preview_type),
    (_.video_preview_id = _.video_preview_id),
    (_.has_live_stream = _.has_live_stream),
    (_.live_stream_viewer_count = _.live_stream_viewer_count),
    (_.m_nBuildID = _.build_id),
    (_.m_strBuildBranch = _.build_branch),
    _.announcement_body)
  ) {
    let _ = _.announcement_body;
    ((_.AnnouncementGID = _.gid),
      _.name.set(_.language, _.headline),
      _.description.set(_.language, _.body),
      _.timestamp_loc_updated.clear(),
      (_.forumTopicGID = _.forum_topic_id),
      (_.nCommentCount = _.commentcount),
      (_.postTime = _.posttime),
      _.bOldAnnouncement && !_.hidden && (_.startTime = _.posttime),
      (_.announcementClanSteamID = new _(_.clanid)),
      _.tags && _.tags.length > 0 && _.tags.forEach((_) => _.vecTags.push(_)),
      !_.rtime32_last_solr_search_col_updated &&
        _.rtime32_last_modified &&
        ((_.rtime32_last_solr_search_col_updated = _.rtime32_last_modified),
        (_.rtime32_last_modified = _.updatetime)));
  } else
    ((_.AnnouncementGID = `0`),
      (_.forumTopicGID = _.forum_topic_id),
      _.name.clear(),
      _.description.clear(),
      _.timestamp_loc_updated.clear(),
      (_.postTime = _.rtime32_start_time),
      (_.nCommentCount = _.comment_count ?? 0),
      _.name.set(0, _.event_name ?? ``),
      _.description.set(0, _.event_notes ?? ``));
  _.broadcaster_accountid && (_.broadcaster = new _(_.broadcaster_accountid));
  let _ = _;
  try {
    _.jsondata = {
      ..._,
      ...(_.jsondata ? JSON.parse(_.jsondata) : void 0),
    };
  } catch (_) {
    let _ = _(_);
    throw (
      console.error(
        `PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model` +
          _.strErrorMsg,
        _,
      ),
      _
    );
  }
  if (
    ((_.jsondata.localized_capsule_image = _(
      _.jsondata.localized_capsule_image || [],
      32,
      null,
    )),
    (_.jsondata.localized_title_image = _(
      _.jsondata.localized_title_image || [],
      32,
      null,
    )),
    (_.jsondata.localized_subtitle = _(
      _.jsondata.localized_subtitle || [],
      32,
      null,
    )),
    (_.jsondata.localized_summary = _(
      _.jsondata.localized_summary || [],
      32,
      null,
    )),
    (_.jsondata.localized_broadcast_title = _(
      _.jsondata.localized_broadcast_title || [],
      32,
      null,
    )),
    (_.jsondata.localized_broadcast_left_image = _(
      _.jsondata.localized_broadcast_left_image || [],
      32,
      null,
    )),
    (_.jsondata.localized_broadcast_right_image = _(
      _.jsondata.localized_broadcast_right_image || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_header = _(
      _.jsondata.localized_sale_header || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_overlay = _(
      _.jsondata.localized_sale_overlay || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_product_banner = _(
      _.jsondata.localized_sale_product_banner || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_product_mobile_banner = _(
      _.jsondata.localized_sale_product_mobile_banner || [],
      32,
      null,
    )),
    (_.jsondata.localized_sale_logo = _(
      _.jsondata.localized_sale_logo || [],
      32,
      null,
    )),
    _.jsondata.sale_num_headers !== void 0 &&
      _.jsondata.localized_per_day_sales_header)
  )
    for (let _ = 0; _ < _.jsondata.sale_num_headers; ++_)
      _.jsondata.localized_per_day_sales_header[_] = _(
        _.jsondata.localized_per_day_sales_header[_],
        32,
        null,
      );
  return (
    _(_.jsondata),
    _.jsondata.email_setting &&
      _.jsondata.email_setting.sections &&
      _.jsondata.email_setting.sections.forEach((_) => {
        (_.localized_headline !== void 0 &&
          _.localized_headline !== null &&
          (_.localized_headline = _(_.localized_headline, 32, null)),
          _.localized_body !== void 0 &&
            _.localized_body !== null &&
            (_.localized_body = _(_.localized_body, 32, null)),
          _.localized_image !== void 0 &&
            _.localized_image !== null &&
            (_.localized_image = _(_.localized_image, 32, null)));
      }),
    _.jsondata.localized_title_image.forEach((_, _) => {
      if (_ != null && _.substr(0, 4) == `http`) {
        let _ = _.lastIndexOf(`/`),
          _ = _.substr(_ + 1);
        _.jsondata.localized_title_image[_] = _;
      }
    }),
    (_.bLoaded = !0),
    (_.visibility_state = _.published
      ? _.unlisted
        ? _.k_EEventStateUnlisted
        : _.hidden
          ? _.k_EEventStateStaged
          : _.k_EEventStateVisible
      : _.k_EEventStateUnpublished),
    _
  );
}
var _ = `L3HaktJsWWA-`,
  _ = `YebKQISqLCs-`,
  _ = `Ct9yU89TArw-`,
  _ = `_7-cDUja4KeQ-`,
  _ = `PBXxHejQZTU-`,
  _ = `JX6irDhLeng-`,
  _ = _((_) => {
    let _ = _(_.photo, _(_.LANGUAGE)),
      _ = _ ? (typeof _ == `string` ? _ : _[1]) : void 0,
      _ = !!_.title,
      _ = !!_.company;
    return (0, _.jsxs)(`div`, {
      className: _,
      onMouseLeave: _.fnClose,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _.photo &&
              (0, _.jsx)(`img`, {
                src: _,
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  children: _.name,
                }),
                (_ || _) &&
                  (0, _.jsxs)(`div`, {
                    children: [
                      _ &&
                        (0, _.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: _.title,
                        }),
                      _ &&
                        _ &&
                        (0, _.jsx)(`span`, {
                          children: `, `,
                        }),
                      _ &&
                        (0, _.jsx)(`span`, {
                          children: _.company,
                        }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        _.bio &&
          (0, _.jsxs)(`div`, {
            className: `sAGOlXZOYoQ-`,
            children: [
              _.bio,
              _.bioString &&
                (0, _.jsx)(_, {
                  text: _.bioString,
                }),
            ],
          }),
      ],
    });
  }),
  _ = class _ extends _.Component {
    static sm_embeddedElements = new _(`presenter-hover-source-elements`);
    m_refAnchor = _.createRef();
    m_fnHidePopup = null;
    m_nScrollPosAtHoverStart = 0;
    ClosePopup() {
      _() ||
        (this.m_fnHidePopup &&
          (this.m_fnHidePopup(),
          (this.m_fnHidePopup = null),
          window.removeEventListener(`scroll`, this.OnScroll)));
    }
    componentWillUnmount() {
      this.ClosePopup();
    }
    OnScroll() {
      Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50 &&
        this.ClosePopup();
    }
    OnHover(_) {
      let _ = this.m_refAnchor.current;
      if (!_) return;
      let _ = {
          direction: `right`,
          bEnablePointerEvents: !0,
          style: {
            maxWidth: 640,
            minHeight: _.clientHeight,
          },
          target: _,
        },
        _ = `presenter-hover-` + Math.floor(Math.random() * 1e8);
      ((this.m_fnHidePopup = () =>
        _.sm_embeddedElements.HideElement(_.ownerDocument, _)),
        window.addEventListener(`scroll`, this.OnScroll),
        (this.m_nScrollPosAtHoverStart = window.scrollY),
        _.sm_embeddedElements.ShowElementDelayed(
          _.ownerDocument,
          150,
          (0, _.jsx)(_, {
            ..._,
            children: (0, _.jsx)(_, {
              ...this.props,
              fnClose: this.OnLeave,
            }),
          }),
          _,
        ));
    }
    OnLeave(_) {
      this.ClosePopup();
    }
    render() {
      return (0, _.jsx)(`div`, {
        className: _,
        ref: this.m_refAnchor,
        onMouseEnter: this.OnHover,
        onFocus: this.OnHover,
        onMouseLeave: this.OnLeave,
        onBlur: this.OnLeave,
        children: this.props.children,
      });
    }
  };
(_([_], _.prototype, `ClosePopup`, null),
  _([_], _.prototype, `OnScroll`, null),
  _([_], _.prototype, `OnHover`, null),
  _([_], _.prototype, `OnLeave`, null));
function _(_) {
  let {
      photo: _,
      name: _,
      title: _,
      company: _,
      hidePhotoInCompactView: _,
    } = _,
    _ = _(_, _(_.LANGUAGE)),
    _ = _ && !_ ? (typeof _ == `string` ? _ : _[1]) : null,
    _ = !!_,
    _ = !!_;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      ..._,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            !!_ &&
              (0, _.jsx)(`img`, {
                src: _,
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  children: _,
                }),
                (_ || _) &&
                  (0, _.jsxs)(`div`, {
                    children: [
                      _ &&
                        (0, _.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: _,
                        }),
                      _ &&
                        _ &&
                        (0, _.jsx)(`span`, {
                          children: `, `,
                        }),
                      _ &&
                        (0, _.jsx)(`span`, {
                          children: _,
                        }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
var _ = _.createContext({
  enabled: !0,
});
function _(_) {
  let { enabled: _, children: _ } = _,
    _ = _.useMemo(
      () => ({
        enabled: _,
      }),
      [_],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let {
      placeholderWidth: _,
      placeholderHeight: _,
      holdGamepadFocus: _ = !1,
      onRender: _,
      style: _,
      mode: _ = `JustLoad`,
      children: _,
      ..._
    } = _,
    _ = _.useContext(_),
    [_, _] = _.useState(() => ({
      bRenderChildren: !_.enabled,
      nPrevRenderHeight: 0,
      nPrevRenderWidth: 0,
    })),
    _ = _.useRef(null),
    _ = _ === `LoadAndUnload` && _.enabled,
    _ = _.useCallback(
      (_) => {
        _((_) => {
          if (_.bRenderChildren === _ || (_.bRenderChildren && !_)) return _;
          let _ = 0,
            _ = 0;
          if (_.current) {
            let _ = _.current.getBoundingClientRect();
            _ && ((_ = _.width), (_ = _.height));
          }
          return (
            _ && _ && _(),
            {
              bRenderChildren: _,
              nPrevRenderWidth: _,
              nPrevRenderHeight: _,
            }
          );
        });
      },
      [_, _],
    );
  _.useEffect(() => {
    _.enabled || _(!0);
  }, [_.enabled, _]);
  let _ = _;
  if (!_.bRenderChildren) {
    let _ = _.nPrevRenderWidth || _,
      _ = _.nPrevRenderHeight || _;
    (_ !== void 0 || _ !== void 0) &&
      (_ = {
        ..._,
        minHeight: _,
        minWidth: _,
      });
  }
  let _ = _ ? `repeated` : `once`,
    _ = (0, _.jsx)(_, {
      containerRef: _,
      style: _,
      ..._,
      onVisibilityChange: _,
      trigger: _,
      children: _.bRenderChildren && _,
    });
  return (
    _ &&
      (_ = (0, _.jsx)(_, {
        focusableIfEmpty: !0,
        style: {
          height: `100%`,
        },
        children: _,
      })),
    _
  );
}
var _ = _({
    AlbumCoverImage: () => _,
    AlbumTitle: () => _,
    AppSummaryWidgetCtn: () => _,
    CarouselCapsuleAnimated: () => _,
    CarouselCapsuleBordered: () => _,
    CarouselDisplay: () => _,
    CarouselPage: () => _,
    CarouselSalePageCapsule: () => _,
    CustomStyle_together: () => _,
    DefaultCreatorCtn: () => _,
    DesktopTabs: () => _,
    DisabledBackground: () => _,
    EmptySectionPreview: () => _,
    EventSectionViewAllCtn: () => _,
    HorizontalScrollInDragForceCursor: () => _,
    Hover: () => _,
    JumpToButton: () => _,
    JumpToSection: () => _,
    JumpedTo: () => _,
    LinkCapsule: () => _,
    LoginButton: () => _,
    MobileTabSelector: () => _,
    MobileTabSelectorButton: () => _,
    MobileTabSelectorDropDown: () => _,
    MobileTabSelectorOption: () => _,
    MobileTabSelectorShortcut: () => _,
    NoTopPadding: () => _,
    SaleBackground: () => _,
    SaleBroadcastCtn: () => _,
    SaleBroadcastSection: () => _,
    SaleHeaderContainer: () => _,
    SaleNewSizing: () => _,
    SaleOuterContainer: () => _,
    SaleOuterTopMargin: () => _,
    SaleOverlay: () => _,
    SaleOverlayCtn: () => _,
    SalePageBroadcastContextHover: () => _,
    SalePageLogoSet: () => _,
    SaleSection: () => _,
    SaleSectionBackgroundImageGroupEdit: () => _,
    SaleSectionContainer: () => _,
    SaleSectionCtn: () => _,
    SaleSectionLivePreview: () => _,
    SaleSectionLoginPrompt: () => _,
    SaleSectionSubtext: () => _,
    SaleSectionTabListContainer: () => _,
    SaleSectionTabs: () => _,
    SaleSectionTitleCtn: () => _,
    SaleTabLabel: () => _,
    SaleViewAll: () => _,
    TabButton: () => _,
    TabButtonsCtn: () => _,
    TabContentsContainer: () => _,
    Visible: () => _,
    default: () => _,
    "duration-app-launch": () => _,
    fullscreen_bg: () => _,
    fullscreen_bg_video: () => _,
    narrowWidth: () => _,
    preview_placeholder_section: () => _,
    vr_required: () => _,
    vr_supported: () => _,
  }),
  _ = `800ms`,
  _ = `500px`,
  _ = `_5uN-ZG0AdmQ-`,
  _ = `_1z-QD5sz6XA-`,
  _ = `BjU45TzF-sA-`,
  _ = `QYv8zbj--Ck-`,
  _ = `fgKHCBFFyCk-`,
  _ = `iZzul86MCHw-`,
  _ = `A3eo6r5OuXY-`,
  _ = `dp33i3JEBBw-`,
  _ = `FyvPogThu-8-`,
  _ = `QSC5IqjmQXQ-`,
  _ = `_4V-KrqNLPmQ-`,
  _ = `_5ogwM4KIkcI-`,
  _ = `Gl6SVCjLh9k-`,
  _ = `d2m-PEeOVmY-`,
  _ = `BxPO-muNnTI-`,
  _ = `aOA-KMNFbEE-`,
  _ = `QYd-JimFMMk-`,
  _ = `_9PVhWUbR3rk-`,
  _ = `giUOrzG6Ujs-`,
  _ = `zct4M8EzfNo-`,
  _ = `FolDBzXMW2I-`,
  _ = `_0pSO3K-0Hs4-`,
  _ = `_9D3431c8-XE-`,
  _ = `G-t-vlNhbRM-`,
  _ = `BFlA7ucDxBk-`,
  _ = `_5NaHSqwUb-k-`,
  _ = `RG63SnOtLk0-`,
  _ = `XuI82j9l9uk-`,
  _ = `_29km0evCwsI-`,
  _ = `pL8IDIWBDg8-`,
  _ = `EbBLppwfKjc-`,
  _ = `EGwn6tH7C3A-`,
  _ = `p8u1MHwjP-M-`,
  _ = `h-z1TiT2EHc-`,
  _ = `lVRRRKgBwVY-`,
  _ = `DH6P5MgdIW4-`,
  _ = `v-DWOHY9-II-`,
  _ = `tXTiGEi7jtU-`,
  _ = `v2nIqzREAqo-`,
  _ = `YWSh4uKYrRw-`,
  _ = `rSkuhIlNBLw-`,
  _ = `_9tUDGLmuFv4-`,
  _ = `_4AjIhoHXOgI-`,
  _ = `Q-Ikm9aXlIY-`,
  _ = `j3KNKPgNrvY-`,
  _ = `_0TmI5Lz4Zkc-`,
  _ = `_6VXiW9d8-lQ-`,
  _ = `t274EZYLkbA-`,
  _ = `gni2wFLBcSk-`,
  _ = `Rbv-UgEUoaw-`,
  _ = `OvCIJMOKBQ8-`,
  _ = `_0lI2wcrU0XU-`,
  _ = `CuZwu-t3ukQ-`,
  _ = `bevr-bUWbuk-`,
  _ = `yedrb7j8BiU-`,
  _ = `hAnG1YoY-8k-`,
  _ = `u8sMh8Um98Q-`,
  _ = `JuZBiq95wYE-`,
  _ = `oh4R-N9DrSA-`,
  _ = {
    "duration-app-launch": `800ms`,
    narrowWidth: _,
    SaleSection: _,
    CarouselDisplay: _,
    SaleSectionCtn: _,
    NoTopPadding: _,
    SaleHeaderContainer: _,
    DisabledBackground: _,
    SaleSectionTabs: _,
    SaleViewAll: _,
    SaleSectionLoginPrompt: _,
    LoginButton: _,
    SaleSectionLivePreview: _,
    Hover: _,
    JumpedTo: _,
    JumpToSection: _,
    JumpToButton: _,
    SaleOverlayCtn: _,
    SaleOverlay: _,
    CarouselCapsuleBordered: _,
    CarouselCapsuleAnimated: _,
    AppSummaryWidgetCtn: _,
    CarouselSalePageCapsule: _,
    SaleBroadcastCtn: _,
    SaleOuterTopMargin: _,
    SaleOuterContainer: _,
    CustomStyle_together: _,
    SaleNewSizing: _,
    SalePageLogoSet: _,
    SaleBackground: _,
    SaleSectionTitleCtn: _,
    SaleSectionSubtext: _,
    SaleSectionContainer: _,
    vr_supported: _,
    vr_required: _,
    preview_placeholder_section: _,
    EmptySectionPreview: _,
    LinkCapsule: _,
    fullscreen_bg: _,
    fullscreen_bg_video: _,
    SalePageBroadcastContextHover: _,
    AlbumCoverImage: _,
    AlbumTitle: _,
    SaleSectionTabListContainer: _,
    MobileTabSelector: _,
    Visible: _,
    MobileTabSelectorButton: _,
    MobileTabSelectorShortcut: _,
    DesktopTabs: _,
    MobileTabSelectorDropDown: _,
    MobileTabSelectorOption: _,
    TabContentsContainer: _,
    HorizontalScrollInDragForceCursor: _,
    SaleBroadcastSection: _,
    CarouselPage: _,
    TabButtonsCtn: _,
    TabButton: _,
    SaleTabLabel: _,
    DefaultCreatorCtn: _,
    EventSectionViewAllCtn: _,
    SaleSectionBackgroundImageGroupEdit: _,
  },
  _ = `ewL7epZsubk-`,
  _ = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`;
function _(_) {
  let [_, _] = _.useState(!1);
  return {
    bShowSeeMoreHint: _,
    panelProps: {
      onFocusWithin: _.useCallback((_) => _(_ && !!_), [_]),
      onOptionsButton: _.useCallback(() => {
        _ && _.length !== 0 && (window.location.href = _);
      }, [_]),
    },
  };
}
function _(_) {
  let { label: _, shown: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _ && `lDd-amB-eCU-`),
    children: [
      (0, _.jsx)(`img`, {
        src: _,
        alt: `Y`,
      }),
      (0, _.jsx)(`div`, {
        children: _,
      }),
    ],
  });
}
async function _(_, _) {
  let _ = _(_.STORE_BASE_URL, _, _.country_code);
  return (await (await fetch(_)).json()).rgFollowedApps || [];
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      if (!_) return new Set();
      let _ = await _(_, _);
      return new Set(_);
    },
    staleTime: 6e5,
  };
}
function _(_) {
  let { data: _ } = _();
  return _ === void 0 || _ == null ? void 0 : _.has(_);
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return (_, _) => {
    _.setQueryData(_(_), (_) => {
      if (!_) return;
      let _ = new Set(_);
      if (_) for (let _ of _) _.delete(_);
      if (_) for (let _ of _) _.add(_);
      return _;
    });
  };
}
function _(_) {
  return [`AccountFollowApps`, _ ?? 0];
}
function _(_, _, _) {
  let _ = _(),
    _ = _.accountid;
  return _({
    mutationKey: [`useUpdateAppFollow`, _, _, _],
    mutationFn: async () => {
      if (_ == null) return;
      let _ = _.STORE_BASE_URL + `explore/followgame`,
        _ = new FormData();
      (_.append(`appid`, `` + _),
        _.append(`sessionid`, _()),
        _ || _.append(`unfollow`, `1`),
        _ && _.append(`snr`, _));
      let _ = await fetch(_, {
        method: `POST`,
        body: _,
        credentials: `include`,
      });
      if (!_._)
        throw Error(
          `Follow App ${_ ? `add` : `remove`} of appid ${_} failed (${_.status})`,
        );
    },
    onMutate: () => {
      _ != null && _(_ ? [_] : void 0, _ ? void 0 : [_]);
    },
    onError: () => {
      _ != null && _(_ ? void 0 : [_], _ ? [_] : void 0);
    },
    onSuccess: () => {
      _();
    },
  });
}
var _ = `VULTMp1PCTw-`,
  _ = `_2vLXBykr6zc-`;
async function _(_, _) {
  let _ = _(_.STORE_BASE_URL, _, _.country_code),
    _ = await (await fetch(_)).json();
  return Object.keys(_.rgIgnoredApps).map(Number) || [];
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      if (!_) return new Set();
      let _ = await _(_, _);
      return new Set(_);
    },
    staleTime: 6e5,
  };
}
function _(_) {
  let { data: _ } = _();
  return _ === void 0 || _ == null ? void 0 : _.has(_);
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return (_, _) => {
    _.setQueryData(_(_), (_) => {
      if (!_) return;
      let _ = new Set(_);
      if (_) for (let _ of _) _.delete(_);
      if (_) for (let _ of _) _.add(_);
      return _;
    });
  };
}
function _(_) {
  return [`AccountIgnoreApps`, _ ?? 0];
}
function _(_, _, _, _ = 0) {
  let _ = _(),
    _ = _.accountid;
  return _({
    mutationKey: [`useUpdateAppIgnore`, _, _, _],
    mutationFn: async () => {
      if (_ == null) return;
      let _ = _.STORE_BASE_URL + `recommended/ignorerecommendation`,
        _ = new FormData();
      (_.append(`appid`, `` + _),
        _.append(`sessionid`, _()),
        _.append(`remove`, _ ? `0` : `1`),
        _ && _.append(`snr`, _),
        _.append(`ignore_reason`, `` + _));
      let _ = await fetch(_, {
        method: `POST`,
        body: _,
        credentials: `include`,
      });
      if (!_._)
        throw Error(
          `Ignore App ${_ ? `add` : `remove`} of appid ${_} failed (${_.status})`,
        );
    },
    onMutate: () => {
      _ != null && _(_ ? [_] : void 0, _ ? void 0 : [_]);
    },
    onError: () => {
      _ != null && _(_ ? void 0 : [_], _ ? [_] : void 0);
    },
    onSuccess: () => {
      _();
    },
  });
}
function _(_) {
  let { _: _, snr: _, classOverride: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(`GameHoverIgnoreButton`),
    { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    _ = _ && `appid` in _ ? _.appid : void 0,
    { mutateAsync: _ } = _(_, !_(_), _),
    _ = _ && `appid` in _ && _.Get().BIsGameIgnored(_.appid);
  return (0, _.jsxs)(_, {
    className: _(_, _),
    onClick: async (_) => {
      (_.preventDefault(),
        _.stopPropagation(),
        _.logged_in
          ? _ && `appid` in _ && (_(!0), await _(), _.token.reason || _(!1))
          : _());
    },
    children: [
      (0, _.jsx)(_, {}),
      (0, _.jsx)(`div`, {
        className: _(_, _ && `vyz9N2LpdMs-`),
        children: _(_ ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      _,
    ],
  });
}
async function _(_, _) {
  let _ = _(_.STORE_BASE_URL, _, _.country_code),
    _ = await (await fetch(_)).json(),
    _ = new Set();
  (_.rgCreatorsIgnored?.forEach((_) => _.add(_)),
    _.rgCreatorsFollowed?.forEach((_) => _.add(_)));
  let _ = new Set();
  return (
    _.rgCreatorsIgnored?.forEach((_) => _.add(_)),
    [
      ...(_.rgCuratorsIgnored ?? []),
      ...(_.rgCurators
        ? Object.values(_.rgCurators ?? {}).map((_) => _.clanid)
        : []),
    ].map((_) => {
      let _ = _.has(_);
      return {
        clanid: _,
        ignored: _,
        followed: !_,
        is_creator: _.has(_),
      };
    })
  );
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      let _ = new Map();
      if (_)
        try {
          (await _(_, _)).forEach((_) => _.set(_.clanid, _));
        } catch (_) {
          console.error(`GetCuratorAffinityQuery`, _);
        }
      return _;
    },
    enabled: !!_,
  };
}
function _(_) {
  let { data: _ } = _();
  return _ === void 0 || _ == null ? void 0 : !!_.get(_)?.followed;
}
function _(_) {
  let { data: _ } = _();
  return _ === void 0 || _ == null ? void 0 : !!_.get(_)?.ignored;
}
function _() {
  return _.EREALM != _.k_ESteamRealmChina;
}
function _() {
  return _.EREALM != _.k_ESteamRealmChina;
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return (_, _, _, _) => {
    _.setQueryData(_(_), (_) => {
      if (!_) return;
      let _ = new Map(_);
      return (
        _?.forEach((_) => {
          _.has(_.clanAccountID)
            ? (_.get(_.clanAccountID).followed = !0)
            : _.set(_.clanAccountID, {
                clanid: _.clanAccountID,
                followed: !0,
                ignored: !1,
                is_creator: !1,
              });
        }),
        _?.forEach((_) => {
          _.has(_.clanAccountID)
            ? (_.get(_.clanAccountID).ignored = !0)
            : _.set(_.clanAccountID, {
                clanid: _.clanAccountID,
                followed: !1,
                ignored: !0,
                is_creator: !1,
              });
        }),
        _?.forEach((_) => _.delete(_.clanAccountID)),
        _?.forEach((_) => {
          let _ = _.get(_.clanAccountID);
          _ && (_.is_creator = !0);
        }),
        _
      );
    });
  };
}
function _(_) {
  return [`CuratorAffinityQueryKey`, _ ?? 0];
}
var _ = (function (_) {
  return (
    (_[(_.k_ECuratorFollow = 1)] = `k_ECuratorFollow`),
    (_[(_.k_ECuratorUnfollow = 2)] = `k_ECuratorUnfollow`),
    (_[(_.k_ECuratorIgnore = 3)] = `k_ECuratorIgnore`),
    (_[(_.k_ECuratorUnignore = 4)] = `k_ECuratorUnignore`),
    _
  );
})({});
function _(_, _) {
  let _ = _(),
    _ = _.accountid;
  return _({
    mutationKey: [`useUpdateCuratorAffinity`, _, _, _],
    mutationFn: async () => {
      if (_ == null) return !1;
      let _ = _ == _.k_ECuratorFollow || _ == _.k_ECuratorUnfollow,
        _ = _ == _.k_ECuratorFollow || _ == _.k_ECuratorIgnore,
        _ = `${_.STORE_BASE_URL}curators/${_ ? `ajaxfollow/` : `ajaxignore/`}`,
        _ = new FormData();
      (_.append(`clanid`, `` + _),
        _.append(`sessionid`, _()),
        _.append(_ ? `follow` : `ignore`, _ ? `1` : `0`));
      let _ = await fetch(_, {
          method: `POST`,
          body: _,
          credentials: `include`,
        }),
        _ = await _.json();
      if (!_._)
        throw Error(
          `Curator Affinity: ${_ ? `Follow` : `Ignore`} Currator ${_ ? `add` : `remove`} failed (${_.status} / ${_.msg})`,
        );
      return _.is_creator;
    },
    onMutate: () => {
      if (_ != null) {
        let _ = _ == _.k_ECuratorUnfollow || _ == _.k_ECuratorUnignore;
        _(
          _ == _.k_ECuratorFollow
            ? [
                {
                  clanAccountID: _,
                },
              ]
            : void 0,
          _ == _.k_ECuratorIgnore
            ? [
                {
                  clanAccountID: _,
                },
              ]
            : void 0,
          _
            ? [
                {
                  clanAccountID: _,
                },
              ]
            : void 0,
        );
      }
    },
    onError: (_) => {
      if (_ != null) {
        let _ = _ == _.k_ECuratorFollow || _ == _.k_ECuratorIgnore;
        _(
          _ == _.k_ECuratorUnfollow
            ? [
                {
                  clanAccountID: _,
                },
              ]
            : void 0,
          _ == _.k_ECuratorUnignore
            ? [
                {
                  clanAccountID: _,
                },
              ]
            : void 0,
          _
            ? [
                {
                  clanAccountID: _,
                },
              ]
            : void 0,
          _
            ? [
                {
                  clanAccountID: _,
                  is_creator: !0,
                },
              ]
            : void 0,
        );
      }
    },
    onSuccess: (_) => {
      (_ &&
        _ &&
        _(void 0, void 0, void 0, [
          {
            clanAccountID: _,
            is_creator: !0,
          },
        ]),
        _());
    },
  });
}
var _ = `b70IXFNJqco-`;
function _(_) {
  let { size: _, color: _, trackColor: _ } = _,
    _ = {
      borderColor: _,
      borderLeftColor: _,
    };
  if (typeof _ == `number`) {
    let _ = `${_}px`;
    ((_.width = _),
      (_.height = _),
      (_.minHeight = _),
      (_.minWidth = _),
      (_.borderWidth = `${_ / 10}px`));
  }
  return (0, _.jsx)(`div`, {
    className: _(
      _,
      _ == `small` && `_1aSjKS0YPT0-`,
      (_ == `medium` || !_) && `zKPudkXmNc8-`,
      _ == `large` && `_7O6Q-wUbKJ4-`,
    ),
    style: _,
  });
}
var _ = `QOSk1wMadGg-`,
  _ = `DH1jwyMHeXo-`,
  _ = `J5g1CfUd95U-`,
  _ = `_3IPvWkyhZzM-`,
  _ = `jB1S5EvgUjI-`,
  _ = `iWO-8zu8RAA-`,
  _ = `MTgAGoNV5vg-`,
  _ = `LEvP9jHHfL8-`,
  _ = `K9ZawxnkJcI-`,
  _ = `OlPIY4AN-5s-`,
  _ = `_7UT3Pb65ni0-`,
  _ = `sT74IdnPxY8-`,
  _ = `ZTz7p5tpqNU-`,
  _ = `ct7kvDppls0-`,
  _ = `SG9Xn5tF5a0-`,
  _ = `clYVRh6K2Ig-`,
  _ = `k6MwDwdCJTU-`,
  _ = `mnFUxHcas-0-`,
  _ = `_6lWvo8crYSU-`,
  _ = `r3PgsXSGPho-`,
  _ = `EWCiFLRR-T8-`,
  _ = `GEroszngeLM-`,
  _ = (_) => {
    let _ = _.HELP_BASE_URL + `wizard/HelpWithLimitedAccount`;
    return (0, _.jsx)(_, {
      strTitle: _(`#Informational_Message`),
      onCancel: _.closeModal,
      onOK: _.closeModal,
      bAlertDialog: !0,
      children: (0, _.jsx)(`div`, {
        children: _(
          _.strTokenOverride || `#User_LimitedAccount`,
          (0, _.jsx)(`a`, {
            href: _,
            target: _.IN_CLIENT ? void 0 : `_blank`,
            rel: `noopener noreferrer`,
            children: _(`#User_LimitedAccount_UrlInfo`),
          }),
        ),
      }),
    });
  },
  _ = (_) => {
    let {
        className: _,
        bIgnored: _,
        bApplyingFollowing: _,
        bFollowing: _,
        onFollowClick: _,
        followType: _,
      } = _,
      { elDialogElement: _, fnShowLogonDialog: _ } = _();
    if (!_()) return null;
    let _ = null;
    switch (_) {
      case `app`:
        _ = _(`#text_store_follow_desc`);
        break;
      case `creatorhome`:
        _ = _(`#CreatorHome_Follow_tooltip`);
        break;
      case `steamcurator`:
        _ = _(`#steam_curator_follow_ttip`);
        break;
      case `group`:
        _ = _(`#steam_group_follow_ttip`);
    }
    return _
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              toolTipContent: !_ && !_ ? _ : void 0,
              children: (0, _.jsxs)(_, {
                className: _(_, _, `FollowButton`, _, _ ? `Followed` : ``),
                onClick: () => {
                  _.logged_in ? _() : _();
                },
                children: [
                  _ &&
                    (0, _.jsx)(_, {
                      size: 15,
                    }),
                  !_ && (_ || _) && (0, _.jsx)(_, {}),
                  (0, _.jsx)(`div`, {
                    className: _(_, `FollowBtnText`),
                    children:
                      !_ &&
                      _(
                        _
                          ? `#Button_Followed`
                          : _
                            ? `#Button_Ignored`
                            : `#Button_Follow`,
                      ),
                  }),
                ],
              }),
            }),
            _,
          ],
        })
      : (console.error(`CommonFollowButton unexpected type`, _), null);
  };
function _(_) {
  let {
      followType: _,
      fnSuccessCallback: _,
      clanAccountID: _,
      className: _,
    } = _,
    [_, _] = _.useState(!1),
    { data: _ } = _(_ ? void 0 : _),
    _ = _(_),
    _ = _(_),
    { mutateAsync: _ } = _(_, _ ? _.k_ECuratorUnfollow : _.k_ECuratorFollow),
    [_, _, _] = _(),
    _ = _.useCallback(async () => {
      _ != null && (_(!0), await _(), _(!1), _?.(_));
    }, [_, _, _]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        className: _,
        bIgnored: !!_,
        bFollowing: !!_,
        bApplyingFollowing: _,
        onFollowClick: () => {
          _.is_limited ? _() : _();
        },
        followType: _ ?? (_?.is_creator_home ? `creatorhome` : `steamcurator`),
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          closeModal: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { appid: _, className: _ } = _,
    [_, _] = _.useState(!1),
    _ = _(_),
    _ = _(_),
    _ = _(),
    _ = _.GetSNRLinkParam(_),
    { mutateAsync: _ } = _(_, !_, _),
    _ = _.useCallback(async () => {
      (_(!0), await _(), _(!1));
    }, [_]);
  return (0, _.jsx)(_, {
    className: _,
    bIgnored: !!_,
    bFollowing: !!_,
    bApplyingFollowing: _,
    onFollowClick: _,
    followType: `app`,
  });
}
function _(_) {
  let {
      nCreatorAccountID: _,
      classOverride: _,
      styleOverride: _,
      followType: _,
    } = _,
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_ || !_) return null;
  let _ = _.avatar_medium_url || _.avatar_full_url;
  return (
    (_ ||= _(void 0, `medium`, `web`)),
    (0, _.jsxs)(`div`, {
      className: _(_, _),
      style: _,
      children: [
        (0, _.jsx)(`a`, {
          href: _(_, `developer`),
          children: (0, _.jsx)(`img`, {
            src: _,
            alt: _.group_name,
          }),
        }),
        (0, _.jsx)(_, {
          clanAccountID: _,
          followType: _,
        }),
      ],
    })
  );
}
var _ = new URL(
    `../../../images/applications/community/defaultappheader.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = 5500,
  _ = 2e3,
  _ = 10;
function _(_, _) {
  return _ && _ && _.main_capsule
    ? {
        stringifyID: `maincap_${_._}_${_.item_type}`,
        rctImage: (0, _.jsx)(
          `img`,
          {
            className: _,
            loading: `lazy`,
            src: _(_, `main_capsule`),
            alt: _.name,
          },
          `fallback`,
        ),
        nDurationMs: _,
      }
    : null;
}
function _(_, _) {
  return {
    stringifyID: `vid_${_(_)}`,
    rctImage: (0, _.jsx)(_, {
      _: _,
      active: !0,
    }),
    nDurationMs: _,
  };
}
function _(_) {
  let _ = _(_);
  return _(_) ? void 0 : _;
}
function _(_, _, _, _) {
  return _.slice(0, _).map((_, _) => {
    let _ = _(_, `1920x1080`);
    return {
      stringifyID: `screen${_}_${_(_)}`,
      rctImage: (0, _.jsx)(
        `img`,
        {
          className: _,
          loading: `lazy`,
          src: _,
          alt: `${_}'s screenshot ${_ + 1}`,
        },
        _,
      ),
      nDurationMs: _,
    };
  });
}
function _(_, _, _, _, _) {
  let _ = [];
  if (
    (_ && _.push(_(_, _)),
    _ && _.length > 0 && _.push(..._(_, _.name, _, _)),
    _.length == 0 && _ && _.main_capsule)
  ) {
    let _ = _(_, _);
    _ && _.push(_);
  }
  return (_ && _.length, _);
}
function _(_, _, _, _, _, _) {
  let _ = [];
  (_ && _.push(_(_, _)), _ && _.length > 0 && _.push(..._(_, _.name, _, _)));
  let _ = _ - (_?.length || 0);
  return (
    _ > 0 && _ && _.length > 0 && _.push(..._(_, _.name, _, _)),
    _ && _.length,
    _
  );
}
function _(_) {
  return (0, _.jsx)(`img`, {
    className: _,
    loading: `lazy`,
    src: _(_),
    alt: `default`,
  });
}
function _(_) {
  let { _: _ } = _,
    { data: _ } = _(_);
  if (!_ || _.unvailable_for_country_restriction || !_.visible)
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {}, `default`),
    });
  let _ = _.item_type,
    _ = _.type;
  return _ == 2 || _ == 1
    ? (0, _.jsx)(_, {
        includeAppIDs: _.included_appids,
      })
    : (_ == 1 || _ == 12) && _.related_items && _.related_items.parent_appid
      ? (0, _.jsx)(_, {
          demoItemDefaultInfo: _,
          parentAppID: _.related_items.parent_appid,
        })
      : (0, _.jsx)(_, {
          storeItemDefaultData: _,
        });
}
function _(_) {
  let { storeItemDefaultData: _ } = _,
    _ = _(_),
    _ = _(_),
    { data: _ } = _(_),
    _ = _(_),
    _ = (0, _.useMemo)(() => _(_, _, _, _, _), [_, _, _, _, _]);
  return (0, _.jsx)(_, {
    rgTrailerAndImages: _,
  });
}
function _(_) {
  let { demoItemDefaultInfo: _, parentAppID: _ } = _,
    _ = _(_);
  return _(_)
    ? (0, _.jsx)(_, {
        storeItemDefaultData: _,
      })
    : (0, _.jsx)(_, {
        demoID: _,
        demoItemDefaultInfo: _,
        parentAppID: _,
      });
}
function _(_) {
  let { parentAppID: _, demoID: _, demoItemDefaultInfo: _ } = _,
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = (0, _.useMemo)(() => _(_, _, _, _, _, _), [_, _, _, _, _, _]);
  return (0, _.jsx)(_, {
    rgTrailerAndImages: _,
  });
}
function _(_) {
  let { includeAppIDs: _ } = _,
    _ = _(),
    _ = _({
      queries: _.map((_) =>
        _(_, {
          appid: _,
        }),
      ),
    }),
    _ = _({
      queries: _.map((_) =>
        _(_, {
          appid: _,
        }),
      ),
    }),
    _ = (0, _.useMemo)(
      () =>
        _.map((_, _) => {
          let _ = _[_].data,
            _ = _.data;
          return _(_, _);
        }).filter((_) => !!_),
      [_, _],
    );
  return (0, _.jsx)(_, {
    rgTrailerAndImages: _,
  });
}
function _(_) {
  let { rgTrailerAndImages: _ } = _,
    _ = (0, _.useRef)(0),
    _ = _(),
    [_] = _.useState(new _()),
    _ = (0, _.useCallback)(
      (_ = !1) => {
        if ((_ && (_.current = 0), _?.length > 0)) {
          let _ = _[_.current].nDurationMs;
          _.Schedule(_, () => {
            let _ = _.current;
            ((_.current = (_.current + 1) % _.length),
              _ != _.current && (_(), _()));
          });
        }
      },
      [_, _, _],
    );
  return (
    (0, _.useEffect)(() => (_.length > 0 && _(), () => _.Cancel()), [_, _, _]),
    (0, _.jsx)(`div`, {
      className: _,
      children: _?.map((_, _) =>
        (0, _.jsx)(
          `div`,
          {
            className: _({
              [_]: !0,
              [_]: _ != _.current,
            }),
            children: _.rctImage,
          },
          `e-` + _ + `-` + _.stringifyID,
        ),
      ),
    })
  );
}
function _(_) {
  let { children: _, ..._ } = _,
    _ = _.useRef(null);
  return (0, _.jsx)(_, {
    nodeRef: _,
    ..._,
    children: _.children(_),
  });
}
var _ = `ghYXSqVPJ-U-`,
  _ = `lx1fe7xI0bg-`,
  _ = `ARp2qEoElPE-`,
  _ = `DwDon-U2yLI-`,
  _ = 150,
  _ = _.createContext(void 0);
function _() {
  return _.useContext(_);
}
function _(_) {
  let {
      hoverContent: _,
      hoverProps: _,
      nDelayShowMs: _,
      nWidthMultiplier: _,
      children: _,
      className: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = !_ && !_,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(void 0),
    _ = (_) => {
      (_(!0), _(_.currentTarget));
    },
    _ = () => _(!1),
    _ = _.useCallback(() => _(!1), []);
  return (0, _.jsxs)(`div`, {
    "data-key": `hover div`,
    role: `button`,
    tabIndex: 0,
    className: _(_, _),
    onMouseEnter: _,
    onMouseLeave: _,
    onTouchStart: () => _(!1),
    onKeyDown: (_) => {
      _.keyCode == 27 && (_(!1), _.preventDefault(), _.stopPropagation());
    },
    children: [
      _ &&
        _ &&
        (0, _.jsx)(_.Provider, {
          value: _,
          children: (0, _.jsx)(_, {
            visible: _,
            target: _,
            nDelayShowMs: _,
            nWidthMultiplier: _,
            hoverProps: _,
            children: _,
          }),
        }),
      (0, _.jsx)(_, {
        children: _,
      }),
    ],
  });
}
function _(_) {
  let {
      hoverProps: _,
      nDelayShowMs: _ = _,
      nWidthMultiplier: _ = 1.15,
      target: _,
      visible: _,
      children: _,
    } = _,
    [_, _] = _.useState(_);
  if (
    (_.useEffect(() => {
      if (_) {
        if (_) {
          let _ = window.setTimeout(() => _(!0), _);
          return () => window.clearTimeout(_);
        }
        _(!0);
      } else {
        if (_()) return;
        _(!1);
      }
    }, [_]),
    _.useEffect(() => {
      if (!_) return;
      let _ = _.ownerDocument.defaultView;
      if (_) {
        let _ = _.scrollY,
          _ = () => {
            Math.abs(_.scrollY - _) > 50 && _(!1);
          };
        return (
          window.addEventListener(`scroll`, _),
          () => window.removeEventListener(`scroll`, _)
        );
      }
      return () => {};
    }, [_, _?.ownerDocument.defaultView]),
    !_ || !_ || !_)
  )
    return null;
  let _ = _.clientWidth < 200 ? `8px` : `10px`,
    _ = {
      direction: `overlay-center`,
      bEnablePointerEvents: !0,
      ...(_ || {}),
      style: {
        zIndex: 98,
        width: _.clientWidth * _,
        fontSize: _,
        minHeight: _() == `hiding` ? void 0 : 300,
        height: _() == `hiding` ? _.clientWidth * 1.15 * (125 / 184) : void 0,
        ..._?.style,
      },
      target: _,
    };
  return (0, _.jsx)(_, {
    hoverProps: _,
    children: (0, _.jsx)(_, {
      children: _,
    }),
  });
}
function _(_) {
  let { hoverProps: _, children: _ } = _,
    _ = _.useCallback((_) => _?.focus(), []);
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      timeout: 500,
      _: !0,
      appear: !0,
      classNames: {
        appearActive: _(_, _),
        enterDone: _(_, _),
      },
      children: (_) =>
        (0, _.jsx)(`div`, {
          ref: _(_, _),
          className: _,
          tabIndex: -1,
          children: _,
        }),
    }),
  });
}
function _() {
  return window.sessionStorage?.getItem(_) || `default`;
}
var _ = `DEBUG_UseNewGameHover`;
function _(_) {
  window.sessionStorage.setItem(_, _);
}
window.SetHoverPresentation = _;
function _(_) {
  if (_) {
    if (`appid` in _) return `app`;
    if (`bundleid` in _) return `bundle`;
    if (`packageid` in _) return `sub`;
  }
}
function _(_) {
  let {
      _: _,
      hoverClassName: _,
      fnGetIDOverride: _,
      fnHoverState: _,
      disableScreenshots: _,
      children: _,
    } = _,
    _ = _.useRef(null),
    _ = _.useCallback(
      (_) => {
        let _ = _(_);
        _ &&
          (_ && _(!0),
          window.GameHover &&
            (_.current &&
              _ &&
              (_.current.dataset.hoverDisableScreenshots = `true`),
            window.GameHover(_ ? _() : _.current, _, `global_hover`, {
              type: _,
              _: _(_)._,
              _: 1,
            })));
      },
      [_, _, _, _],
    ),
    _ = _.useCallback(
      (_) => {
        _(_) &&
          (_ && _.relatedTarget && _(!1),
          window.HideGameHover &&
            window.HideGameHover(_ ? _() : _.current, _, `global_hover`));
      },
      [_, _, _],
    );
  return (0, _.jsx)(`div`, {
    ref: _,
    className: _,
    onMouseEnter: _,
    onMouseLeave: _,
    onFocus: _,
    onBlur: _,
    children: _,
  });
}
function _(_) {
  let { _: _, strExtraParams: _, fnOnClickOverride: _, strOverrideURL: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(
      _ ||
        (_ && `creatorid` in _
          ? _(`${_.STORE_BASE_URL}curator/${_(_)._}${_ ? `?${_}` : ``}`, _, _)
          : _(`${_.STORE_BASE_URL}${_(_)}/${_(_)._}${_ ? `?${_}` : ``}`, _, _)),
    );
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      className: _.className,
      href: _ ? void 0 : _,
      target: _.IN_CLIENT || _ ? void 0 : `_blank`,
      rel: `noopener noreferrer`,
      onClick: _,
      children: _.children,
    }),
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
function _(_) {
  return _.section_type === `crosspromotesalepage`
    ? (_.sale_page_cross_promo_sales ?? [])
    : [];
}
function _(_) {
  return _(_).map((_) => ({
    ..._,
    sale_page_cross_promo_sales: [_],
    capsules: _.capsules ?? [],
  }));
}
function _(_) {
  return _(_)[0]?.event_gid || void 0;
}
function _(_) {
  return _(_).flatMap((_) => _.event_gid || []);
}
function _(_) {
  return _(_)[0]?.featured_app_tagid || void 0;
}
function _(_, _) {
  return _(_) ? (_?.BIsVisibleEvent() ? null : `missing`) : `setup`;
}
function _(_) {
  let _ = _(_)[0];
  return !!_?.event_gid && (!!_.featured_app_tagid || !!_.capsules?.length);
}
function _(_, _) {
  return _
    ? _(`#Sale_CrossPromoSale_SectionTitle`, _.GetNameWithFallback(_) ?? ``)
    : _(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function _(_, _) {
  let _ = _.GetELanguageFallback(_),
    _ =
      _.jsondata.localized_sale_cross_promo_logo_image?.findIndex((_) => !!_) ??
      -1;
  return (
    _.GetImageURL(`sale_cross_promo_logo`, _) ||
    _.GetImageURL(`sale_cross_promo_logo`, _) ||
    (_ >= 0 ? _.GetImageURL(`sale_cross_promo_logo`, _) : void 0) ||
    _.GetImageURL(`sale_logo`, _) ||
    _.GetImageURL(`sale_logo`, _)
  );
}
var _ = `hZ-dKtI-DOE-`,
  _ = `_48uVrbfJQEM-`,
  _ = `Lt6SJZ-PR1A-`,
  _ = `vmIVedNuofw-`,
  _ = `gFqPN18pEI8-`,
  _ = `yGT3R-m6gZk-`,
  _ = `-I4fAFaLKxA-`,
  _ = `bPmDLn-lEoc-`,
  _ = `_6txFjo9b8Zk-`,
  _ = `_6y4EcbHPzTE-`,
  _ = `LQrwY5m9KjE-`,
  _ = `HHtwpv2BsZo-`,
  _ = `tdXc-z1nXGI-`,
  _ = `D0L0mwSYCaE-`,
  _ = `SGi7-TqE4Rs-`,
  _ = `uPjG9NaDuUg-`,
  _ = `G9e5dN5XFKM-`,
  _ = `Cx2zVOdOEwU-`,
  _ = `rk6-75sKTfs-`,
  _ = `D4J8JhjevEo-`,
  _ = `OobKWZLrT2Q-`,
  _ = `zoD9wRMnlzg-`,
  _ = `x25qTcshK-4-`,
  _ = `LQZsciPFbvE-`,
  _ = `oo8VFYEMJNU-`,
  _ = `_6SdwjlcjQF4-`,
  _ = `_8m3-fAAnr8I-`,
  _ = `kg-spn-7ESc-`,
  _ = `wErgDaiILYk-`,
  _ = _({
    Bottom: () => _,
    BottomLeft: () => _,
    BottomRight: () => _,
    DialogButton: () => _,
    EdgeDown: () => _,
    Left: () => _,
    LinkRegionButtonContainer: () => _,
    LinkRegionDelete: () => _,
    LinkRegionDragBox: () => _,
    LinkRegionEdge: () => _,
    LinkRegionGridBox: () => _,
    LinkRegionInfo: () => _,
    LinkRegionSettings: () => _,
    LinkText: () => _,
    Middle: () => _,
    Right: () => _,
    Top: () => _,
    TopLeft: () => _,
    TopRight: () => _,
    bottom: () => _,
    bottomleft: () => _,
    bottomright: () => _,
    default: () => _,
    left: () => _,
    middle: () => _,
    right: () => _,
    top: () => _,
    topleft: () => _,
    topright: () => _,
  }),
  _ = `nUuv5WlFHKU-`,
  _ = `JsVZp4CAPKg-`,
  _ = `s3jO9FbN4u4-`,
  _ = `SO1XLFjtCbU-`,
  _ = `TpO-SNRNS-E-`,
  _ = `lmnZa-M7bq0-`,
  _ = `LDrqaW8EJl8-`,
  _ = `WEHXDbI-0ZI-`,
  _ = `hc0dk3OoBCU-`,
  _ = `o5BUe1m-4BM-`,
  _ = `-e4w8MaVU8k-`,
  _ = `V3hcFn4-kHE-`,
  _ = `RIIVuSM7Y6Y-`,
  _ = `dkKyB9jj9aI-`,
  _ = `R4iVDKb6zeU-`,
  _ = `fzzwZd4-ISg-`,
  _ = `Oo4-WMoHDeE-`,
  _ = `D8BWJF43X-Q-`,
  _ = `Yc8TU3u-VW4-`,
  _ = `KMAHJAnBe6Q-`,
  _ = `bxVoRh5lFi4-`,
  _ = `e2-ZZOF2QKQ-`,
  _ = `XUrOCtEsKxM-`,
  _ = `TSm-D5CZFsE-`,
  _ = `fzB9IY83oAQ-`,
  _ = `RpcfV3ZNn8s-`,
  _ = `_1Be3592R7Ao-`,
  _ = `m9bHoo6uIPM-`,
  _ = {
    LinkRegionDragBox: _,
    EdgeDown: _,
    LinkRegionGridBox: _,
    LinkRegionEdge: _,
    TopLeft: _,
    Top: _,
    TopRight: _,
    Left: _,
    Middle: _,
    LinkRegionDelete: _,
    LinkRegionSettings: _,
    Right: _,
    BottomLeft: _,
    Bottom: _,
    BottomRight: _,
    topleft: _,
    top: _,
    topright: _,
    left: _,
    right: _,
    bottomleft: _,
    bottom: _,
    bottomright: _,
    middle: _,
    LinkRegionButtonContainer: _,
    DialogButton: _,
    LinkRegionInfo: _,
    LinkText: _,
  },
  _ = class extends _.Component {
    m_rectLinkRegion;
    m_elLinkRegionBox;
    m_nLocalOffsetXPct;
    m_nLocalOffsetYPct;
    m_fnMouseUp = null;
    m_fnMouseMove = null;
    m_listeners = new _();
    m_strDescription = ``;
    m_aspectRatio = 1;
    componentWillUnmount() {
      this.m_listeners.Unregister();
    }
    constructor(_) {
      (super(_),
        (this.state = {
          curLeftPosPct: this.props.xPosPct,
          curTopPosPct: this.props.yPosPct,
          curRightPosPct: 100 - (this.props.widthPct + this.props.xPosPct),
          curBottomPosPct: 100 - (this.props.yPosPct + this.props.heightPct),
          curWidthPct: this.props.widthPct,
          curHeightPct: this.props.heightPct,
          EdgeDown: void 0,
          text_link_url: this.props.link_url,
          text_link_description: this.props.link_description,
          bEditingLink: !1,
          valid_link: this.validateUrl(this.props.link_url),
        }),
        (this.m_strDescription = this.props.link_description ?? ``),
        (this.m_aspectRatio =
          this.props.heightPct > 0 && this.props.widthPct > 0
            ? this.props.widthPct / this.props.heightPct
            : 1));
    }
    LinkRegionBoxRef(_) {
      this.m_elLinkRegionBox = _;
    }
    OnMouseDown(_, _) {
      (this.m_elLinkRegionBox?.parentElement &&
        this.m_elLinkRegionBox.ownerDocument.defaultView &&
        ((this.m_fnMouseUp = (_) => {
          this.OnMouseUp(_, _);
        }),
        (this.m_fnMouseMove = (_) => {
          this.OnMouseMove(_, _);
        }),
        this.setState({
          EdgeDown: _,
        }),
        (this.m_rectLinkRegion =
          this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
        (this.m_nLocalOffsetXPct =
          ((_.clientX - this.m_rectLinkRegion.left) /
            (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
            100 -
          this.state.curLeftPosPct),
        (this.m_nLocalOffsetYPct =
          ((_.clientY - this.m_rectLinkRegion.top) /
            (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
            100 -
          this.state.curTopPosPct),
        this.m_listeners.AddEventListener(
          this.m_elLinkRegionBox.ownerDocument.defaultView,
          `mousemove`,
          this.m_fnMouseMove,
        ),
        this.m_listeners.AddEventListener(
          this.m_elLinkRegionBox.ownerDocument.defaultView,
          `mouseup`,
          this.m_fnMouseUp,
        )),
        _.preventDefault(),
        _.stopPropagation());
    }
    OnMouseMove(_, _) {
      if (this.state.EdgeDown !== void 0) {
        switch ((_.shiftKey && this.m_fnMouseUp(), _)) {
          case `left`:
            this.UpdateState({
              curLeftPosPct: this.CalcLeftEdge(_.clientX),
            });
            break;
          case `right`:
            this.UpdateState({
              curRightPosPct: this.CalcRightEdge(_.clientX),
            });
            break;
          case `top`:
            this.UpdateState({
              curTopPosPct: this.CalcTopEdge(_.clientY),
            });
            break;
          case `bottom`:
            this.UpdateState({
              curBottomPosPct: this.CalcBottomEdge(_.clientY),
            });
            break;
          case `topleft`:
            this.UpdateState({
              curTopPosPct: this.CalcBottomEdge(_.clientY),
              curLeftPosPct: this.CalcLeftEdge(_.clientX),
            });
            break;
          case `topright`:
            this.UpdateState({
              curTopPosPct: this.CalcTopEdge(_.clientY),
              curRightPosPct: this.CalcRightEdge(_.clientX),
            });
            break;
          case `bottomleft`:
            this.UpdateState({
              curLeftPosPct: this.CalcLeftEdge(_.clientX),
              curBottomPosPct: this.CalcBottomEdge(_.clientY),
            });
            break;
          case `bottomright`:
            this.UpdateState({
              curRightPosPct: this.CalcRightEdge(_.clientX),
              curBottomPosPct: this.CalcBottomEdge(_.clientY),
            });
            break;
          case `middle`: {
            let _ = _(
                this.CalcLeftEdge(_.clientX),
                0,
                100 - this.state.curWidthPct,
              ),
              _ = 100 - (_ + this.state.curWidthPct),
              _ = _(
                this.CalcTopEdge(_.clientY),
                0,
                100 - this.state.curHeightPct,
              ),
              _ = {
                curLeftPosPct: _,
                curRightPosPct: _,
                curTopPosPct: _,
                curBottomPosPct: 100 - (_ + this.state.curHeightPct),
              };
            this.setState(_);
            break;
          }
        }
        (_.preventDefault(), _.stopPropagation());
      }
    }
    IsValidPct(_) {
      return _ >= 0 && _ <= 100;
    }
    UpdateState(_) {
      let _ =
          _.curTopPosPct === void 0 ? this.state.curTopPosPct : _.curTopPosPct,
        _ =
          _.curBottomPosPct === void 0
            ? this.state.curBottomPosPct
            : _.curBottomPosPct,
        _ =
          _.curLeftPosPct === void 0
            ? this.state.curLeftPosPct
            : _.curLeftPosPct,
        _ =
          _.curRightPosPct === void 0
            ? this.state.curRightPosPct
            : _.curRightPosPct,
        _ = _(
          100 - _ - _,
          this.props.widthMinPct || 0,
          this.props.widthMaxPct || 100,
        ),
        _ = _(
          100 - _ - _,
          this.props.heightMinPct || 0,
          this.props.heightMaxPct || 100,
        );
      (this.props.bLockAspectRatio &&
        (_.curLeftPosPct !== void 0 || _.curRightPosPct !== void 0
          ? (_ = _ / this.m_aspectRatio)
          : (_ = _ * this.m_aspectRatio)),
        _.curLeftPosPct === void 0 ? (_ = 100 - (_ + _)) : (_ = 100 - _ - _),
        _.curTopPosPct === void 0 ? (_ = 100 - (_ + _)) : (_ = 100 - _ - _));
      let _ = 100 - _ - _,
        _ = 100 - _ - _;
      this.IsValidPct(_) &&
        this.IsValidPct(_) &&
        this.IsValidPct(_) &&
        this.IsValidPct(_) &&
        this.IsValidPct(_) &&
        this.IsValidPct(_) &&
        this.setState({
          curLeftPosPct: _,
          curRightPosPct: _,
          curTopPosPct: _,
          curBottomPosPct: _,
        });
    }
    GetXPercent(_) {
      return this.m_rectLinkRegion
        ? ((_ - this.m_rectLinkRegion.left) /
            (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
            100 -
            (this.m_nLocalOffsetXPct ?? 0)
        : 0;
    }
    GetYPercent(_) {
      return this.m_rectLinkRegion
        ? ((_ - this.m_rectLinkRegion.top) /
            (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
            100 -
            (this.m_nLocalOffsetYPct ?? 0)
        : 0;
    }
    CalcLeftEdge(_) {
      return _(this.GetXPercent(_), 0, 100);
    }
    CalcRightEdge(_) {
      return _(100 - (this.GetXPercent(_) + this.state.curWidthPct), 0, 100);
    }
    CalcTopEdge(_) {
      return _(this.GetYPercent(_), 0, 100);
    }
    CalcBottomEdge(_) {
      return _(100 - (this.GetYPercent(_) + this.state.curHeightPct), 0, 100);
    }
    OnMouseUp(_, _) {
      (this.setState({
        curWidthPct: 100 - this.state.curRightPosPct - this.state.curLeftPosPct,
      }),
        this.setState({
          curHeightPct:
            100 - this.state.curBottomPosPct - this.state.curTopPosPct,
        }),
        this.setState({
          EdgeDown: void 0,
        }),
        this.props.updateFn(this.props.index, {
          xPosPct: this.state.curLeftPosPct,
          yPosPct: this.state.curTopPosPct,
          widthPct: this.state.curWidthPct,
          heightPct: this.state.curHeightPct,
          link_url: this.state.text_link_url,
          link_description: this.state.text_link_description,
        }),
        this.m_listeners.Unregister());
    }
    async HandleDelete() {
      this.props.deleteFn && this.props.deleteFn(this.props.index);
    }
    OnSetLinkURLChange(_) {
      this.setState({
        text_link_url: _.target.value,
        valid_link: this.validateUrl(_.target.value),
      });
    }
    OnSetLinkDescriptionChange(_) {
      this.setState({
        text_link_description: _.target.value,
      });
    }
    validateUrl(_) {
      return (
        _ != null &&
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
          _,
        )
      );
    }
    OnSaveLink() {
      ((this.m_strDescription = this.state.text_link_description ?? ``),
        this.setState({
          bEditingLink: !this.state.bEditingLink,
        }),
        this.props.updateFn(this.props.index, {
          xPosPct: this.state.curLeftPosPct,
          yPosPct: this.state.curTopPosPct,
          widthPct: this.state.curWidthPct,
          heightPct: this.state.curHeightPct,
          link_url: this.state.text_link_url,
          link_description: this.state.text_link_description,
        }));
    }
    OnEditLink() {
      this.setState({
        bEditingLink: !this.state.bEditingLink,
      });
    }
    render() {
      let _ = {
          left: this.state.curLeftPosPct + `%`,
          top: this.state.curTopPosPct + `%`,
          right: this.state.curRightPosPct + `%`,
          bottom: this.state.curBottomPosPct + `%`,
        },
        _ = _;
      return (
        this.state.EdgeDown != null && (_ += ` ${_} ` + _[this.state.EdgeDown]),
        (0, _.jsxs)(`div`, {
          className: _,
          style: _,
          ref: this.LinkRegionBoxRef,
          draggable: !1,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `topleft`);
                  },
                  draggable: !1,
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `top`);
                  },
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `topright`);
                  },
                  draggable: !1,
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `left`);
                  },
                  draggable: !1,
                }),
                (0, _.jsxs)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `middle`);
                  },
                  draggable: !1,
                  children: [
                    this.props.deleteFn &&
                      (0, _.jsx)(`div`, {
                        className: `o5BUe1m-4BM-`,
                        onClick: this.HandleDelete,
                        children: (0, _.jsx)(_, {}),
                      }),
                    !this.props.bDisableLink &&
                      (0, _.jsx)(`div`, {
                        className: `-e4w8MaVU8k-`,
                        onClick: this.OnEditLink,
                        children: (0, _.jsx)(_, {}),
                      }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [` `, this.m_strDescription, ` `],
                    }),
                  ],
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `right`);
                  },
                  draggable: !1,
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `bottomleft`);
                  },
                  draggable: !1,
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `bottom`);
                  },
                  draggable: !1,
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `bottomright`);
                  },
                  draggable: !1,
                }),
              ],
            }),
            this.state.bEditingLink &&
              (0, _.jsxs)(`div`, {
                className: `_1Be3592R7Ao-`,
                children: [
                  (0, _.jsx)(_, {
                    className: void 0,
                    type: `text`,
                    name: `link_url`,
                    value: this.state.text_link_url,
                    label: _(`#SteamTV_LinkURL`),
                    placeholder: `https://www.example.com`,
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  (0, _.jsx)(_, {
                    className: void 0,
                    type: `text`,
                    name: `link_description`,
                    value: this.state.text_link_description,
                    label: _(`#SteamTV_LinkDescription`),
                    placeholder: _(`#SteamTV_LinkDescription_Placeholder`),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  (0, _.jsxs)(`div`, {
                    className: `fzB9IY83oAQ-`,
                    children: [
                      (0, _.jsxs)(_, {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                        children: [` `, _(`#Button_OK`), ` `],
                      }),
                      (0, _.jsxs)(_, {
                        onClick: this.OnEditLink,
                        children: [` `, _(`#Button_Cancel`)],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        })
      );
    }
  };
(_([_], _.prototype, `LinkRegionBoxRef`, null),
  _([_], _.prototype, `OnMouseDown`, null),
  _([_], _.prototype, `OnMouseMove`, null),
  _([_], _.prototype, `OnMouseUp`, null),
  _([_], _.prototype, `HandleDelete`, null),
  _([_], _.prototype, `OnSetLinkURLChange`, null),
  _([_], _.prototype, `OnSetLinkDescriptionChange`, null),
  _([_], _.prototype, `OnSaveLink`, null),
  _([_], _.prototype, `OnEditLink`, null),
  (_ = _([_], _)));
function _(_, _) {
  return !_ || _.startsWith(`https://`) || _.startsWith(`http://`)
    ? _
    : `${_.CLAN_CDN_ASSET_URL}images/clan/${_}/${_}`;
}
function _(_, _, _) {
  return !_ || _(_) ? _ : `${_}images/clan/${_}/${_}`;
}
var _ = `poster`,
  _ = `${_}.avif`,
  _ = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function _(_) {
  let _ = _.video_webm_src || _.video_mp4_src;
  if (!_ || _.image?.includes(`.${_}.`)) return _.image;
  let _ = _.exec(_);
  return _ ? `${_[1]}.${_}` : _.image;
}
var _ = 0.01,
  _ = 100,
  _ = 4,
  _ = [
    [16, 9],
    [9, 16],
    [4, 3],
    [3, 4],
    [3, 2],
    [2, 3],
    [1, 1],
    [21, 9],
    [2, 1],
    [1, 2],
    [5, 4],
    [4, 5],
  ],
  _ = 0.005;
function _(_, _) {
  if (!(!_ || !_ || _ <= 0 || _ <= 0)) return _(_ / _);
}
function _(_) {
  if (!_ || !Number.isFinite(_) || _ < _ || _ > _) return;
  let _ = 10 ** _;
  return Math.round(_ * _) / _;
}
function _(_) {
  let _ = _.trim();
  if (!_) return;
  let _ = /^(\d+(?:\.\d+)?)\s*[:x/]\s*(\d+(?:\.\d+)?)$/i.exec(_);
  if (_) return _(parseFloat(_[1]), parseFloat(_[2]));
  if (/^\d+(?:\.\d+)?$/.test(_)) return _(parseFloat(_));
}
function _(_) {
  let _ = _.find(([_, _]) => Math.abs(_ - _ / _) < _);
  return _ ? `${_[0]}:${_[1]}` : String(_);
}
function _(_, _) {
  let _ = _(_ ?? void 0, `capsule`, _);
  if (!_) return;
  let _ = _.clanSteamID.GetAccountID();
  return {
    clanAccountID: _,
    strEventGID: _.GID ?? ``,
    strName: _.GetNameWithFallback(_) ?? ``,
    rtEndTime: _.endTime || void 0,
    strSummary: _.GetSummaryWithFallback(_) || void 0,
    strCapsuleURL: _,
    strSaleURL: _(_) ?? void 0,
    strBackgroundURL: _(
      _,
      _.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: _.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: _(_, _),
    eDesktopLayout:
      _.jsondata.sale_cross_promo_desktop_layout === `logo_top`
        ? `logo_top`
        : void 0,
  };
}
var _ = `Es-UANTRhdg-`,
  _ = `FsYxDNcAXaI-`,
  _ = `cSFkUHyVW24-`,
  _ = `yT92BfNEvpw-`,
  _ = `_6jMisrq5Zfo-`,
  _ = `XBv92QzB8Xc-`,
  _ = `NjUCqxvhkHk-`,
  _ = `gxh8RxFKhr8-`,
  _ = `AmB85SkEC3Q-`,
  _ = `P5j4maR0i14-`;
function _(_) {
  let {
      className: _,
      url: _,
      style: _,
      children: _,
      bSkipForcingStoreLink: _,
      bOpenInline: _,
      bFocusable: _ = !0,
      fnCanTakeFocus: _,
    } = _,
    _ = _ ? _ : _ ? _(_, _.STORE_BASE_URL) : void 0,
    _ = _(_);
  return _
    ? (0, _.jsx)(_, {
        href: _,
        target: _.IN_CLIENT || _ ? void 0 : `_blank`,
        className: _,
        style: _,
        rel: `noopener noreferrer`,
        focusable: _,
        fnCanTakeFocus: _,
        children: _,
      })
    : (0, _.jsx)(`span`, {
        style: _,
        className: _,
        children: _,
      });
}
function _(_, _) {
  try {
    let _ = new URL(_),
      _ = new URL(_);
    return _.href.replace(/\/$/, ``) + _.pathname + _.search + _.hash;
  } catch {
    return ``;
  }
}
function _(_) {
  let { section: _ } = _;
  return !_.label_link || _.label_link_style
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          url: _.label_link,
          children: _.Localize(`#btn_live_streams_all`),
        }),
      });
}
function _(_) {
  let { event: _, language: _, strSaleURL: _ } = _,
    _ = _(_, _);
  if (!_) return null;
  let _ = _
    ? {
        ..._,
        strSaleURL: _,
      }
    : _;
  return _.strSaleURL
    ? (0, _.jsx)(_, {
        className: _(_, _, _),
        "flow-children": `row`,
        children: (0, _.jsx)(_, {
          saleEvent: _,
          bExploreButtonBelow: !0,
        }),
      })
    : null;
}
function _(_) {
  let {
      saleEvent: _,
      bExploreButtonBelow: _,
      bShowExploreHint: _,
      children: _,
    } = _,
    _ = _?.strSaleURL,
    _ = _?.strCapsuleURL,
    _ = _?.strSummary,
    _ = _(),
    _ = _(),
    _ = _ && _ !== void 0,
    _ = _?.rtEndTime
      ? _(_.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: _,
        })
      : void 0;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(`div`, {
          className: `qbRGxo4aWcc-`,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `HgvxVtFlDis-`,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  url: _,
                  className: _,
                  bFocusable: !1,
                  children: _?.strName,
                }),
              }),
              _ &&
                (0, _.jsx)(`div`, {
                  className: `_6iUHDist0Jc-`,
                  children: _(`#Sale_CrossPromoSale_NowThrough`, _),
                }),
            ],
          }),
          _ &&
            !_ &&
            !_ &&
            (0, _.jsx)(_, {
              url: _,
              className: _(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: _,
              children: _(`#Sale_CrossPromoSale_ExploreEvent`),
            }),
          _ &&
            _ &&
            (0, _.jsx)(_, {
              label: _(`#Sale_CrossPromoSale_ExploreEvent`),
              shown: !!_,
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsxs)(_, {
              url: _,
              className: `oztjxXYIBAk-`,
              bFocusable: !!_,
              children: [
                (0, _.jsx)(`img`, {
                  src: _,
                  alt: ``,
                }),
                _ &&
                  (0, _.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, _.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: _,
                    }),
                  }),
              ],
            }),
          _,
        ],
      }),
      _ &&
        !_ &&
        (0, _.jsx)(`div`, {
          className: _(`T1fHkhyvNkM-`, _ && `SAqjQ-F71kA-`),
          children: (0, _.jsx)(_, {
            url: _,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: _,
            children: _(`#Sale_CrossPromoSale_ExploreEvent`),
          }),
        }),
    ],
  });
}
function _(_, _, _ = !1) {
  let { data: _ } = _(_),
    { data: _ } = _(_, _),
    _ = _(_, _, _),
    { data: _ } = _(_),
    { data: _ } = _(_, _),
    _ = _?.visible ? _ : _;
  return {
    storeItemAsset: _?.visible ? _ : _,
    storeItemDefaultInfo: _,
  };
}
function _(_, _, _) {
  if (
    _ &&
    _.included_appids?.length == 1 &&
    !_(_, _) &&
    _.item_type &&
    [1, 2].includes(_.item_type)
  )
    return {
      appid: _.included_appids[0],
    };
}
function _(_, _) {
  if (!_) return !1;
  switch (_) {
    case `header`:
      return !!_.header;
    case `main`:
      return !!_.main_capsule;
    case `vertical`:
    case `library`:
      return !!_.hero_capsule || !!_.library_capsule;
    default:
      return (_(_, `Unhandled imageType: ${_}`), !1);
  }
}
var _ = -700,
  _ = -600,
  _ = -599,
  _ = -598,
  _ = -597,
  _ = -596,
  _ = -595,
  _ = -594,
  _ = -593,
  _ = -592,
  _ = -591,
  _ = -590,
  _ = -589,
  _ = -588,
  _ = -587,
  _ = -586,
  _ = -585,
  _ = -584,
  _ = -583,
  _ = -582,
  _ = -581,
  _ = -580,
  _ = -579,
  _ = -578,
  _ = -577,
  _ = -576,
  _ = -575,
  _ = -574,
  _ = -573,
  _ = -572,
  _ = -571,
  _ = -500,
  _ = -499,
  _ = -498,
  _ = -497,
  _ = -496,
  _ = -300,
  _ = -203,
  _ = -202,
  _ = -201,
  _ = -200,
  _ = -199,
  _ = -198,
  _ = -197,
  _ = -196,
  _ = -195,
  _ = -194,
  _ = -193,
  _ = -192,
  _ = -191,
  _ = -190,
  _ = -189,
  _ = -188,
  _ = -187,
  _ = -186,
  _ = -185,
  _ = -184,
  _ = -183,
  _ = -182,
  _ = -102,
  _ = -101,
  _ = -100;
function _(_) {
  switch (_) {
    case 0:
      return `Windows`;
    case 1:
      return `Windows 3.11`;
    case 2:
      return `Windows 95`;
    case 3:
      return `Windows 98`;
    case 4:
      return `Windows ME`;
    case 5:
      return `Windows NT`;
    case 6:
      return `Windows 2000`;
    case 7:
      return `Windows XP`;
    case 8:
      return `Windows 2003`;
    case 9:
      return `Windows Vista`;
    case 10:
      return `Windows 7`;
    case 11:
      return `Windows 2008`;
    case 12:
      return `Windows 2012`;
    case 15:
      return `Windows 2012 R2`;
    case 13:
      return `Windows 8`;
    case 14:
      return `Windows 8.1`;
    case 16:
      return `Windows 10`;
    case 17:
      return `Windows 2016`;
    case 18:
      return `Windows 2019`;
    case 19:
      return `Windows 2022`;
    case 20:
      return `Windows 11`;
    case _:
      return `Mac OS`;
    case _:
      return `MacOS 10.4`;
    case _:
      return `MacOS 10.5`;
    case -99:
      return `MacOS 10.5.8`;
    case -95:
      return `MacOS 10.6`;
    case -94:
      return `MacOS 10.6.3`;
    case -93:
      return `MacOS 10.6.4 with Apple's Snow Leopard Graphics Update`;
    case -92:
      return `MacOS 10.6.7`;
    case -90:
      return `MacOS 10.7`;
    case -89:
      return `MacOS 10.8`;
    case -88:
      return `MacOS 10.9`;
    case -87:
      return `MacOS 10.10`;
    case -86:
      return `MacOS 10.11`;
    case -85:
      return `MacOS 10.12`;
    case -84:
      return `MacOS 10.13`;
    case -83:
      return `MacOS 10.14`;
    case -82:
      return `MacOS 10.15`;
    case -81:
      return `MacOS 11 (as 10.16)`;
    case -75:
      return `MacOS 12 (as 10.17)`;
    case -70:
      return `MacOS 13 (as 10.18)`;
    case -80:
      return `MacOS 11`;
    case -79:
      return `MacOS 11.1`;
    case -74:
      return `MacOS 12`;
    case -69:
      return `MacOS 13`;
    case -68:
      return `MacOS 14`;
    case -67:
      return `MacOS 15`;
    case _:
      return `Linux`;
    case _:
      return `Linux 2.2`;
    case _:
      return `Linux 2.4`;
    case _:
      return `Linux 2.6`;
    case _:
      return `Linux 3.2`;
    case _:
      return `Linux 3.5`;
    case _:
      return `Linux 3.6`;
    case _:
      return `Linux 3.10`;
    case _:
      return `Linux 3.16`;
    case _:
      return `Linux 3.18`;
    case _:
      return `Linux 3.x`;
    case _:
      return `Linux 4.1`;
    case _:
      return `Linux 4.4`;
    case _:
      return `Linux 4.9`;
    case _:
      return `Linux 4.14`;
    case _:
      return `Linux 4.19`;
    case _:
      return `Linux 4.x`;
    case _:
      return `Linux 5.x`;
    case _:
      return `Linux 5.4`;
    case _:
      return `Linux 6.x`;
    case _:
      return `Linux 7.x`;
    case _:
      return `Linux 5.10`;
    case _:
      return `PS3`;
    case _:
      return `Web Client`;
    case _:
      return `Android`;
    case _:
      return `Android 6.x`;
    case _:
      return `Android 7.x`;
    case _:
      return `Android 8.x`;
    case _:
      return `Android 9.x`;
    case _:
      return `iOS`;
    case _:
      return `iOS 1`;
    case _:
      return `iOS 2`;
    case _:
      return `iOS 3`;
    case _:
      return `iOS 4`;
    case _:
      return `iOS 5`;
    case _:
      return `iOS 6`;
    case _:
      return `iOS 6.1`;
    case _:
      return `iOS 7`;
    case _:
      return `iOS 7.1`;
    case _:
      return `iOS 8`;
    case _:
      return `iOS 8.1`;
    case _:
      return `iOS 8.2`;
    case _:
      return `iOS 8.3`;
    case _:
      return `iOS 8.4`;
    case _:
      return `iOS 9`;
    case _:
      return `iOS 9.1`;
    case _:
      return `iOS 9.2`;
    case _:
      return `iOS 9_.3`;
    case _:
      return `iOS 10`;
    case _:
      return `iOS 10.1`;
    case _:
      return `iOS 10.2`;
    case _:
      return `iOS 10.3`;
    case _:
      return `iOS 11`;
    case _:
      return `iOS 11.1`;
    case _:
      return `iOS 11.2`;
    case _:
      return `iOS 11.3`;
    case _:
      return `iOS 11.4`;
    case _:
      return `iOS 12`;
    case _:
      return `iOS 12.1`;
    default:
    case -1:
      return `Unknown`;
  }
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_instanceid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_instanceid: {
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
      return `CClientComm_GetClientLogonInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.protocol_version || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            protocol_version: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            _: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            machine_name: {
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
      return `CClientComm_GetClientLogonInfo_Response`;
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
      return `CClientComm_GetAllClientLogonInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sessions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sessions: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            refetch_interval_sec: {
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
      return `CClientComm_GetAllClientLogonInfo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_instanceid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_instanceid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            protocol_version: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            os_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            machine_name: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            os_type: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            device_type: {
              _: 6,
              _: _.readInt32,
              _: _.writeInt32,
            },
            realm: {
              _: 7,
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
      return `CClientComm_GetAllClientLogonInfo_Response_Session`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_instanceid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_instanceid: {
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
      return `CClientComm_GetClientInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.package_version || _(_._()),
        _.Message.initialize(this, _, 0, -1, [7, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            package_version: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            _: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            machine_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            ip_public: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            ip_private: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            bytes_available: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            running_games: {
              _: 7,
              _: _,
              _: !0,
              _: !0,
            },
            protocol_version: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clientcomm_version: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            local_users: {
              _: 10,
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
      return `CClientComm_ClientData`;
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
            extra_info: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            time_running_sec: {
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
      return `CClientComm_ClientData_RunningGames`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_info || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_info: {
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
      return `CClientComm_GetClientInfo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.fields || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            fields: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            filters: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            client_instanceid: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            include_client_info: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            language: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            filter_appids: {
              _: 6,
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
      return `CClientComm_GetClientAppList_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.bytes_available || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bytes_available: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            apps: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            client_info: {
              _: 3,
              _: _,
            },
            refetch_interval_sec_full: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            refetch_interval_sec_changing: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            refetch_interval_sec_updating: {
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
      return `CClientComm_GetClientAppList_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [17], null));
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
            app: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            category: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            app_type: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            num_downloading: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            bytes_download_rate: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            bytes_downloaded: {
              _: 12,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            bytes_to_download: {
              _: 13,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            dlcs: {
              _: 17,
              _: _,
              _: !0,
              _: !0,
            },
            favorite: {
              _: 18,
              _: _.readBool,
              _: _.writeBool,
            },
            auto_update: {
              _: 19,
              _: _.readBool,
              _: _.writeBool,
            },
            installed: {
              _: 20,
              _: _.readBool,
              _: _.writeBool,
            },
            download_paused: {
              _: 21,
              _: _.readBool,
              _: _.writeBool,
            },
            changing: {
              _: 22,
              _: _.readBool,
              _: _.writeBool,
            },
            available_on_platform: {
              _: 23,
              _: _.readBool,
              _: _.writeBool,
            },
            bytes_staged: {
              _: 24,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            bytes_to_stage: {
              _: 25,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            bytes_required: {
              _: 26,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            source_buildid: {
              _: 27,
              _: _.readUint32,
              _: _.writeUint32,
            },
            target_buildid: {
              _: 28,
              _: _.readUint32,
              _: _.writeUint32,
            },
            estimated_seconds_remaining: {
              _: 29,
              _: _.readUint32,
              _: _.writeUint32,
            },
            queue_position: {
              _: 30,
              _: -1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            uninstalling: {
              _: 31,
              _: _.readBool,
              _: _.writeBool,
            },
            rt_time_scheduled: {
              _: 32,
              _: _.readUint32,
              _: _.writeUint32,
            },
            running: {
              _: 33,
              _: _.readBool,
              _: _.writeBool,
            },
            update_percentage: {
              _: 34,
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
      return `CClientComm_GetClientAppList_Response_AppData`;
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
            app: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            installed: {
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
      return `CClientComm_GetClientAppList_Response_AppData_DLCData`;
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
              _: !0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            client_instanceid: {
              _: 2,
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
      return `CClientComm_InstallClientApp_Request`;
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
      return `CClientComm_InstallClientApp_Response`;
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
              _: !0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            client_instanceid: {
              _: 2,
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
      return `CClientComm_UninstallClientApp_Request`;
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
      return `CClientComm_UninstallClientApp_Response`;
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
              _: !0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            action: {
              _: 2,
              _: !0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            client_instanceid: {
              _: 3,
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
      return `CClientComm_SetClientAppUpdateState_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_instanceid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_instanceid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
              _: 2,
              _: !0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            query_params: {
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
      return `CClientComm_LaunchClientApp_Request`;
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
      return `CClientComm_LaunchClientApp_Response`;
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
      return `CClientComm_SetClientAppUpdateState_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_instanceid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_instanceid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            enable: {
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
      return `CClientComm_EnableOrDisableDownloads_Request`;
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
      return `CClientComm_EnableOrDisableDownloads_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`ClientComm.GetClientLogonInfo#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetClientLogonInfo = _;
  function _(_, _, _) {
    return _.SendMsg(`ClientComm.GetAllClientLogonInfo#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetAllClientLogonInfo = _;
  function _(_, _, _) {
    return _.SendMsg(`ClientComm.GetClientInfo#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetClientInfo = _;
  function _(_, _, _) {
    return _.SendMsg(`ClientComm.GetClientAppList#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetClientAppList = _;
  function _(_, _, _) {
    return _.SendMsg(`ClientComm.InstallClientApp#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.InstallClientApp = _;
  function _(_, _, _) {
    return _.SendMsg(`ClientComm.UninstallClientApp#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.UninstallClientApp = _;
  function _(_, _, _) {
    return _.SendMsg(`ClientComm.LaunchClientApp#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.LaunchClientApp = _;
  function _(_, _, _) {
    return _.SendMsg(`ClientComm.SetClientAppUpdateState#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.SetClientAppUpdateState = _;
  function _(_, _, _) {
    return _.SendMsg(`ClientComm.EnableOrDisableDownloads#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.EnableOrDisableDownloads = _;
})((_ ||= {}));
var _ = `RemoteDownload_OnlineClient`,
  _ = `RemoteDownload_ClientAppList`,
  _ = `RemoteDownload_ClientAppData`,
  _ = class extends Error {
    constructor(_, _) {
      (super(_), (this.result = _));
    }
    result;
  };
function _() {
  let _ = _(),
    _ = _();
  return _({
    queryKey: [_, _],
    queryFn: async () => {
      let _ = _.Init(_),
        _ = await _.GetAllClientLogonInfo(_, _);
      if (_.GetEResult() !== 1)
        throw (
          console.error(
            `Received error from GetAllClientLogonInfo`,
            _.GetEResult(),
            _.Hdr().transport_error(),
          ),
          Error(`Error from GetAllClientLogonInfo: ${_.GetEResult()}`)
        );
      let _ = [];
      for (let _ of _.Body().sessions())
        _.device_type() !== 0 && _.push(_.toObject());
      return {
        sessions: _,
        refetchInterval: _.Body().refetch_interval_sec() || 300,
      };
    },
    staleTime: 3e5,
    refetchInterval: (_) => (_.state.data?.refetchInterval || 300) * 1e3,
  });
}
var _ = class {
  constructor(_) {
    (Object.assign(this, _.toObject()),
      (this.bytes_to_download = parseInt(_.bytes_to_download() ?? `0`)),
      (this.bytes_downloaded = parseInt(_.bytes_downloaded() ?? `0`)),
      (this.bytes_staged = parseInt(_.bytes_staged() ?? `0`)),
      (this.bytes_to_stage = parseInt(_.bytes_to_stage() ?? `0`)),
      (this.bytes_required = parseInt(_.bytes_required() ?? `0`)));
  }
  appid;
  app;
  category;
  app_type;
  num_downloading;
  bytes_download_rate;
  bytes_downloaded;
  bytes_to_download;
  favorite;
  auto_update;
  installed;
  download_paused;
  changing;
  available_on_platform;
  bytes_staged;
  bytes_to_stage;
  bytes_required;
  source_buildid;
  target_buildid;
  estimated_seconds_remaining;
  queue_position;
  uninstalling;
  rt_time_scheduled;
  update_percentage;
  BIsDownloading() {
    return this.num_downloading !== void 0 && this.num_downloading > 0;
  }
  SetDownloading() {
    ((this.num_downloading = 1), (this.download_paused = !1));
  }
  SetPaused(_) {
    ((this.download_paused = _), (this.num_downloading = +!_));
  }
  BIsAtTopOfQueue() {
    return this.queue_position === 0;
  }
  BIsPaused() {
    return (
      !!this.download_paused &&
      (this.bytes_downloaded < this.bytes_to_download ||
        this.bytes_staged < this.bytes_to_stage ||
        this.queue_position != -1)
    );
  }
  BHasPendingUpdate() {
    return (
      !this.BIsDownloading() &&
      !this.download_paused &&
      (this.bytes_downloaded < this.bytes_to_download ||
        this.bytes_staged < this.bytes_to_stage)
    );
  }
  GetPercentComplete() {
    return this.update_percentage
      ? this.update_percentage
      : this.bytes_to_download
        ? Math.floor((this.bytes_downloaded * 100) / this.bytes_to_download)
        : 0;
  }
};
async function _(_, _, _) {
  let _ = _.client_instanceid,
    _ = _.Init(_);
  (_.Body().set_fields(`games`),
    _.Body().set_filters(_),
    _.Body().set_client_instanceid(_),
    _.Body().set_include_client_info(!0));
  let _ = await _.GetClientAppList(_, _);
  if (_.GetEResult() !== 1)
    throw (
      console.error(
        `Received error from GetClientAppList`,
        _.GetEResult(),
        _.Hdr().transport_error(),
      ),
      new _(`Error from GetClientAppList: ${_.GetEResult()}`, _.GetEResult())
    );
  let _ = new Map();
  for (let _ of _.Body().apps()) {
    let _ = new _(_);
    _.set(_.appid(), _);
  }
  return {
    session: _,
    mapApps: _,
    clientInfo: _.Body().client_info()?.toObject(),
    refetchIntervals: {
      full: _.Body().refetch_interval_sec_full() || 3600,
      changing: _.Body().refetch_interval_sec_changing() || 60,
      updating: _.Body().refetch_interval_sec_updating() || 10,
    },
  };
}
async function _(_, _, _, _) {
  if (!_) return;
  let _ = await _(_, _, _);
  for (let [_, _] of _.mapApps) _.mapApps.set(_, _);
  return {
    ..._,
    mapApps: _.mapApps,
  };
}
function _(_, _, _) {
  return [_, _, _, _];
}
function _(_, _ = !0) {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = (_) => {
      _ && (_.result == 21 || _.result == 16) && _.refetch();
    },
    _ = _({
      queries: (_.data?.sessions || []).map((_) => ({
        queryKey: _(_, _.client_instanceid, `none`),
        queryFn: async () => _(_, _, `none`),
        staletime: 36e5,
        refetchInterval: (_) =>
          (_.state.data?.refetchIntervals.full || 3600) * 1e3,
        enabled: _.isSuccess && !_.isFetching,
        onError: _,
        retry: _,
      })),
    }),
    _ = (0, _.useCallback)(
      (_) => {
        if (!_) return _;
        let _ = new Map(Array.from(_?.mapApps.entries() ?? []).filter(_));
        return {
          ..._,
          mapApps: _,
        };
      },
      [_],
    ),
    _ = _();
  return {
    rgQueries: _({
      queries: (_.data?.sessions || []).map((_, _) => ({
        queryKey: _(_, _.client_instanceid, `changing`),
        queryFn: async () => _(_, _, `changing`, _[_].data),
        enabled: _[_].isSuccess && !_[_].isFetching,
        staletime: 1e4,
        select: _,
        refetchInterval: (_) => {
          let _ = _.state.data;
          if (!_) return 6e4;
          let _ = !1;
          for (let _ of _.mapApps.values())
            if (_.BIsDownloading() || _.uninstalling) {
              _ = !0;
              break;
            }
          let _ = _.refetchIntervals;
          return (_ ? _.updating : _.changing) * 1e3;
        },
        onError: _,
        retry: _,
      })),
    }).map((_, _) => (_[_].isError && !_[_].isFetching ? _[_] : _)),
    refetch: () => {
      for (let _ of _.data?.sessions || []) {
        let _ = _(_, _.client_instanceid, `changing`);
        _.removeQueries({
          queryKey: _,
        });
      }
      for (let _ of _) _.refetch();
    },
  };
}
function _(_, _) {
  return [_, _, _];
}
function _(_, _ = !0) {
  let _ = _(),
    { rgQueries: _ } = _(void 0, _);
  return _({
    queryKey: _(_, _),
    queryFn: () => {
      let _ = new Map();
      for (let _ of _)
        if (_.isSuccess) {
          let _ = _.data?.session?.client_instanceid,
            _ = _.data?.mapApps?.get(_);
          _ &&
            _.set(_, {
              session: _.data.session,
              app: _,
              clientInfo: _.data.clientInfo,
            });
        }
      return _;
    },
    enabled: _.reduce((_, _) => _ && _.isSuccess && !_.isFetching, !0),
    staleTime: 0,
    gcTime: 0,
  });
}
function _(_, _, _) {
  let _ = _(),
    _ = _(_),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_appid(_), _.Body().set_client_instanceid(_));
      let _ = await _.InstallClientApp(_, _);
      if (_.GetEResult() != 1)
        throw (
          console.error(`Received error from InstallClientApp`, _.GetEResult()),
          Error(`Error from InstallClientApp: ${_.GetEResult()}`)
        );
      let _ = _?.data;
      (_ && _.get(_) && _.get(_).app.SetDownloading(),
        _.setQueryData(_(_, _), _),
        _.refetch());
    },
    onSuccess: _,
  });
}
var _ = `KDJh8Ln6DTA-`,
  _ = `cwU-YKIjBO4-`,
  _ = {
    bFitToWindow: !0,
    bOverlapHorizontal: !0,
    bMatchWidth: !1,
    bShiftToFitWindow: !0,
    bDisablePopTop: !0,
  };
function _(_) {
  let { setRemoteClientID: _, rgSessions: _ } = _,
    _ = (0, _.useCallback)(
      (_) => {
        _?.length &&
          _(
            (0, _.jsx)(_, {
              sessions: _,
              setRemoteDownloadClientId: _,
            }),
            _,
            _,
          );
      },
      [_, _],
    );
  return _?.length
    ? (0, _.jsx)(`button`, {
        onClick: _,
        className: _,
        children: (0, _.jsx)(_, {}),
      })
    : null;
}
function _({ sessions: _, setRemoteDownloadClientId: _ }) {
  return (0, _.jsx)(`ul`, {
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          onSelected: () => {
            _(_.client_instanceid);
          },
          children: _(
            `#GamesList_Client_Indicator`,
            _(_.device_type) ?? ``,
            _.machine_name,
          ),
        },
        _.client_instanceid,
      ),
    ),
  });
}
function _(_) {
  switch (_) {
    case 1:
      return _(`#Library_DeviceType_PC`);
    case 544:
      return _(`#Library_DeviceType_SteamDeck`);
    case 546:
      return _(`#Library_DeviceType_SteamMachine`);
    case _:
      return _(`#Library_DeviceType_SteamFrame`);
    default:
      return;
  }
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 13 8`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z`,
    }),
  });
}
var _ = `O2hPihu9CRE-`,
  _ = `QhSrcq93V7k-`,
  _ = `_7MjE60RYT0Q-`,
  _ = `UlZXEOyFPCE-`,
  _ = `_8wO4Yx-lIIo-`,
  _ = `FA82eVIC918-`,
  _ = `_0sgpZmAY-zs-`,
  _ = `RLntJ4QtQLU-`;
function _(_) {
  let { appid: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    [_, _, _] = _(!1),
    { mutateAsync: _ } = _({
      appid: _,
    }),
    [_, _] = (0, _.useState)(!1),
    _ = _(_);
  return !_ || _
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsxs)(_, {
            onClick: async () => {
              try {
                (_(!0), await _(), _(), _(!1), _());
              } catch (_) {
                (_(!1),
                  console.error(
                    `Error AddToLibraryActionWithRemoteInstall`,
                    _,
                  ));
              }
            },
            children: [
              _ &&
                (0, _.jsx)(_, {
                  size: `small`,
                }),
              _(`#Sale_AddToLibrary_NoPlus`),
            ],
          }),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              active: _,
              children: (0, _.jsx)(_, {
                strTitle: _(`#Sale_AddedToLibrary`),
                strDescription: _(
                  `#Sale_AddToLibrary_DialogDesc`,
                  (0, _.jsx)(`span`, {
                    className: _,
                    children: _.name || ``,
                  }),
                ),
                closeModal: _,
                bAlertDialog: !0,
                children: (0, _.jsx)(_, {
                  _: _,
                }),
              }),
            }),
          }),
        ],
      });
}
function _(_) {
  let { _: _ } = _,
    _ = _(),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(!1),
    { data: _ } = _(_);
  if (!_ || !(`appid` in _) || _.IN_CLIENT || !_) return null;
  let _ = _.data?.sessions?.filter((_) => {
    switch (_.device_type) {
      default:
      case 1:
        {
          if (!_.os_type) return !1;
          let _ = _(_.os_type);
          if (
            (_.windows && _.includes(`Windows`)) ||
            (_.mac && _.includes(`Mac`)) ||
            (_.steamos_linux && _.includes(`Linux`))
          )
            return !0;
        }
        break;
      case 544:
        return _.windows || _.steamos_linux;
    }
    return !1;
  });
  if (_ && _?.length > 0) {
    let _ = _[_];
    return (0, _.jsx)(`div`, {
      className: _,
      children: _
        ? (0, _.jsx)(_, {
            session: _,
          })
        : (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                rgAcceptableSession: _,
                session: _,
                setSessionIndex: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  appid: _.appid,
                  session: _,
                  setRemoteDownloadRequested: _,
                }),
              }),
            ],
          }),
    });
  }
  return null;
}
function _(_) {
  let { rgAcceptableSession: _, session: _, setSessionIndex: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        children: _(`#Sale_AddToLibrary_RemoteDownload`),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _.machine_name,
          }),
          (0, _.jsx)(_, {
            rgSessions: _,
            setRemoteClientID: (_) => {
              let _ = _.findIndex((_) => _.client_instanceid === _);
              _ >= 0 && _(_);
            },
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { session: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _(`#Sale_AddToLibrary_DownloadStarted`),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`a`, {
        href: `${_.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${_.client_instanceid}`,
        children: _(`#Sale_AddToLibrary_SeeDownloadProgress`),
      }),
    ],
  });
}
function _(_) {
  let { appid: _, session: _, setRemoteDownloadRequested: _ } = _,
    _ = _(_, _.client_instanceid);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        onClick: () => {
          (_.mutateAsync(), _(!0));
        },
        children: [(0, _.jsx)(_, {}), _(`#Button_StartDownload`)],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`a`, {
          href: `https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409`,
          className: _,
          children: _(`#Button_Learn`),
        }),
      }),
    ],
  });
}
function _(_) {
  let {
    rgTagIDs: _,
    bShowEvenIfNoTags: _,
    bHideTitle: _,
    bLargeText: _,
    bNoStoreLinks: _,
  } = _;
  return _?.length > 0 || _
    ? (0, _.jsxs)(`div`, {
        className: _(_, _ ? _ : ``, `SaleTagBlockCtn`),
        children: [
          !_ &&
            (0, _.jsx)(`div`, {
              className: _(`F3fTh-GlONs-`, `WidgetTagTitle`),
              children: _.Localize(`#GameHover_Tags`),
            }),
          _?.length > 0
            ? (0, _.jsx)(`div`, {
                className: _(_, `TagBox`),
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      tagid: _,
                      bNoStoreLinks: _,
                    },
                    _,
                  ),
                ),
              })
            : (0, _.jsx)(`div`, {
                children: _.Localize(`#Broadcast_None`),
              }),
        ],
      })
    : null;
}
function _(_) {
  let { tagid: _, className: _ } = _,
    _ = _(_, _.LANGUAGE);
  if (!_) return null;
  let _ = _(_(_.LANGUAGE)),
    _ = `${_.STORE_BASE_URL}tags/${_}/${_}`;
  return (0, _.jsx)(_, {
    url: _,
    className: _(_, `WidgetTag`, _),
    children: _,
  });
}
function _(_) {
  let { tagid: _, className: _, bNoStoreLinks: _ } = _,
    _ = _(_(_.LANGUAGE)),
    _ = _(_, _.LANGUAGE),
    _ = `${_.STORE_BASE_URL}tags/${_}/${_}`;
  return _
    ? _
      ? (0, _.jsx)(`div`, {
          className: _(_, `WidgetTag`, _),
          children: _,
        })
      : (0, _.jsx)(_, {
          url: _,
          className: _(_, `WidgetTag`, _),
          children: _,
        })
    : null;
}
var _ = class _ extends _.Message {
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
function _(_) {
  return window.StoreDefaults ? window.StoreDefaults[_] : void 0;
}
function _(_) {
  return _(() => [_.m_nBuildID, _.m_strBuildBranch]);
}
function _(_) {
  let [_, _] = (0, _.useState)(() => _.GetClanEventModel(_)),
    _ = _(`usePartnerEventByEventGID`);
  return (
    (0, _.useEffect)(() => {
      _ &&
        _?.GID != _ &&
        (_.Init(),
        _.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([_], [], _).then(
          (_) => {
            _?.length == 1 && _[0].GID == _ && !_.token.reason && _(_[0]);
          },
        ));
    }, [_, _, _]),
    _
  );
}
function _(_, _, _) {
  let [_, _] = (0, _.useState)(_ ? _.GetClanEventModel(_) : void 0),
    [_, _] = (0, _.useState)(!!_ && !!_),
    [_, _] = (0, _.useState)(),
    [_, _] = (0, _.useState)(1),
    _ = _(`usePartnerEventByClanAccountAndEventGID`);
  return (
    (0, _.useEffect)(() => {
      (async () => {
        try {
          if (_?.GID != _ && _ && _) {
            _.Init();
            let _ = _.InitFromClanID(_, _.EUNIVERSE),
              _;
            try {
              _ = await _.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                _,
                _,
                0,
                _,
              );
            } catch (_) {
              (_(_?.response?.data?.err_msg),
                _(_?.response?.data?.success || 2));
            }
            _.token.reason || _(_);
          }
        } finally {
          _(!1);
        }
      })();
    }, [_, _, _, _, _]),
    {
      eventModel: _,
      bLoading: _,
      sErrorMessage: _,
      eResult: _,
    }
  );
}
function _(_) {
  let _ = `` + _,
    _ = _.GetELanguageFallback(_);
  return (_ != _ && (_ += `_` + _), _);
}
async function _(_, _, _, _) {
  let _ = [],
    _ = {
      clan_accountid: _ ? _.GetAccountID() : void 0,
      gidevent: _,
      count_before: 0,
      count_after: _,
      lang_list: _(_(_.LANGUAGE)),
      origin: self.origin,
      only_summaries: !0,
    },
    _ = _.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
    _ = await _.default.get(_, {
      params: _,
      cancelToken: _?.token,
    });
  if (_?.data?.success == 1) {
    let _ = _ == null ? _.data.events : _.data.events.slice(1);
    for (let _ of _) _.gid && (_.jsondata?.length ?? 0) > 0 && _.push(_);
  } else {
    let _ = _(_?.data);
    throw (
      console.error(
        `LoadAdjacentPartnerEvents Success but empty response: clanAccount:` +
          (_ ? _.GetAccountID() : 0) +
          ` ` +
          _.strErrorMsg,
        _,
      ),
      _?.data
    );
  }
  return _;
}
function _(_, _, _) {
  let {
    data: _,
    error: _,
    fetchNextPage: _,
    hasNextPage: _,
    isFetching: _,
    isFetchingNextPage: _,
    status: _,
    refetch: _,
  } = _({
    queryKey: [`ClanEventSummaries`, _, _],
    queryFn: ({ pageParam: _ }) => _(_, _, _, _),
    initialPageParam: void 0,
    getNextPageParam: (_) => (_.length > 0 ? _[_.length - 1].gid : void 0),
  });
  return {
    rgClanEventData: _,
    bHasNextPage: _,
    fnFetchNextPage: _,
    bIsFetching: _,
    bIsFetchingNextPage: _,
    clanEventSummaryStatus: _,
    clanEventSummaryLoadError: _,
    fnRefetch: _,
  };
}
var _ = class {
    appid;
    date;
    can_play;
    playtime;
    announcementid;
    constructor(_) {
      (_(
        typeof _.appid == `number`,
        `AJAX updated app returned a non-numeric AppID! Did the PHP change?`,
      ),
        (this.appid = _.appid),
        (this.date = _.date),
        (this.can_play = _.can_play),
        (this.playtime = _.playtime),
        (this.announcementid = _.announcementid));
    }
  },
  _ = class {
    constructor(_ = !1) {
      (_(this), (this.m_bOnlySummary = _));
    }
    m_bOnlySummary = !1;
    m_mapExistingEvents = new Map();
    m_mapEventUpdateCallback = new Map();
    m_mapAnnouncementBodyToEvent = new Map();
    m_mapClanToGIDs = new Map();
    m_mapAppIDToGIDs = new Map();
    m_mapAdjacentAnnouncementGIDs = new Map();
    m_mapUpdatedApps = new Map();
    m_tsUpdatedAppsQueryTime = 0;
    m_rgQueuedEventsClanIDs = [];
    m_rgQueuedEventsUniqueIDs = [];
    m_rgQueuedEventsForEditFlags = [];
    m_QueuedEventTimeout = new _();
    m_PendingInfoPromise;
    m_PendingInfoResolve;
    m_bLoadedFromConfig = !1;
    Init() {
      if (!this.m_bLoadedFromConfig) {
        let _ = _(`PartnerEventStore`);
        this.ValidateStoreDefault(_) &&
          _.forEach((_) => {
            if (_) {
              let _ = new _(_.clan_steamid),
                _ = this.InsertEventModelFromClanEventData(_, _);
              _.announcement_body &&
                this.m_mapExistingEvents.set(_ + _.announcement_body.gid, _);
            }
          });
        let _ = _(`partnereventstore`, `application_config`);
        this.ValidateStoreDefault(_) &&
          _.forEach((_) => {
            if (_) {
              let _ = new _(_.clan_steamid),
                _ = this.InsertEventModelFromClanEventData(_, _);
              _.announcement_body &&
                !this.m_mapExistingEvents.has(
                  `old_announce_` + _.announcement_body.gid,
                ) &&
                this.m_mapExistingEvents.set(_ + _.announcement_body.gid, _);
            }
          });
        let _ = _(`partnereventadjacents`, `application_config`);
        (this.ValidateAdjacentEvent(_) &&
          _.forEach((_) => {
            _ &&
              this.m_mapAdjacentAnnouncementGIDs.set(
                _.announcementGID,
                _.adjacents,
              );
          }),
          (this.m_bLoadedFromConfig = !0));
      }
    }
    ValidateStoreDefault(_) {
      let _ = _;
      return _ &&
        Array.isArray(_) &&
        _.length > 0 &&
        _[0] &&
        typeof _[0] == `object`
        ? typeof _[0].gid == `string` ||
            (typeof _[0].announcement_body == `object` &&
              typeof _[0].announcement_body.gid == `string`)
        : !1;
    }
    ValidateAdjacentEvent(_) {
      let _ = _;
      return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
        ? typeof _[0].announcementGID == `string` &&
            Array.isArray(_[0].adjacents) &&
            (_[0].adjacents.length == 0 || typeof _[0].adjacents[0] == `string`)
        : !1;
    }
    GetPartnerEventChangeCallback(_) {
      let _ = this.m_mapEventUpdateCallback.get(_);
      return (
        (_ ||=
          (this.m_mapEventUpdateCallback.set(_, new _()),
          this.m_mapEventUpdateCallback.get(_))),
        _
      );
    }
    GetClanEventGIDs(_) {
      return this.m_mapClanToGIDs.get(_.GetAccountID()) || [];
    }
    GetClanEventGIDsForApp(_) {
      return this.m_mapAppIDToGIDs.get(_) || [];
    }
    GetClanEventModel(_) {
      if (_ !== void 0) return this.m_mapExistingEvents.get(_);
    }
    BHasClanEventModel(_) {
      return this.m_mapExistingEvents.has(_);
    }
    BHasClanAnnouncementGID(_) {
      if (_ === void 0) return !1;
      let _ = this.m_mapAnnouncementBodyToEvent.get(_);
      return !!_ && this.BHasClanEventModel(_);
    }
    GetClanEventGIDFromAnnouncementGID(_) {
      return this.m_mapAnnouncementBodyToEvent.get(_);
    }
    GetClanEventFromAnnouncementGID(_) {
      if (_ === void 0) return;
      let _ = this.m_mapAnnouncementBodyToEvent.get(_);
      return _ ? this.m_mapExistingEvents.get(_) : void 0;
    }
    DefaultEventSortFunction(_, _) {
      return _.startTime == _.startTime
        ? _(_.GID ?? ``, _.GID ?? ``)
        : (_.startTime ?? 0) - (_.startTime ?? 0);
    }
    RegisterClanEvents(_) {
      if (_)
        for (let _ of _) {
          let _ = _(_);
          if (!this.m_mapExistingEvents.has(_)) {
            let _ = new _(_.clan_steamid);
            this.InsertEventModelFromClanEventData(_, _);
          }
        }
    }
    GetRankedClanEvents(_, _) {
      let _ = [],
        _ = _
          ? this.GetClanEventGIDs(_)
          : _
            ? this.GetClanEventGIDsForApp(_)
            : void 0;
      if (!_ || _.length == 0) return _;
      for (let _ of _) {
        let _ = this.GetClanEventModel(_);
        _ && _.push(_);
      }
      return (_.sort(this.DefaultEventSortFunction), _);
    }
    InsertEventModelFromClanEventData(_, _) {
      let _ = _(_, _);
      return (
        this.InsertUniqueEventGID(_.GetAccountID(), _.appid, _.GID),
        this.m_mapExistingEvents.set(_.GID, _),
        _.AnnouncementGID &&
          _.AnnouncementGID.length > 1 &&
          this.m_mapAnnouncementBodyToEvent.set(_.AnnouncementGID, _.GID),
        _
      );
    }
    HelperInitializeNumSalesHeaderArray(_) {
      if ((_.jsondata.sale_num_headers ?? 0) > 1) {
        _.jsondata.localized_per_day_sales_header = [];
        for (let _ = 0; _ < (_.jsondata.sale_num_headers ?? 0); ++_)
          _.jsondata.localized_per_day_sales_header.push(_([], 32, null));
        _.m_overrideCurrentDay = 0;
      } else _.m_overrideCurrentDay = void 0;
    }
    GetAllClanEvents(_) {
      let _ = [];
      return (
        this.m_mapClanToGIDs.has(_.GetAccountID()) &&
          this.m_mapClanToGIDs.get(_.GetAccountID()).forEach((_) => {
            let _ = this.m_mapExistingEvents.get(_);
            _ && _.push(_);
          }),
        _
      );
    }
    async QueueLoadPartnerEvent(_, _, _) {
      if (this.m_mapExistingEvents.has(_)) return;
      (this.m_rgQueuedEventsClanIDs.push(_),
        this.m_rgQueuedEventsUniqueIDs.push(_),
        this.m_rgQueuedEventsForEditFlags.push(!!_),
        (this.m_PendingInfoPromise ||= new Promise(
          (_) => (this.m_PendingInfoResolve = _),
        )));
      let _ = this.m_PendingInfoPromise,
        _ = () => {
          let _ = this.m_PendingInfoResolve,
            _ = this.m_rgQueuedEventsClanIDs,
            _ = this.m_rgQueuedEventsUniqueIDs,
            _ = this.m_rgQueuedEventsForEditFlags;
          ((this.m_PendingInfoPromise = void 0),
            (this.m_rgQueuedEventsClanIDs = []),
            (this.m_rgQueuedEventsUniqueIDs = []),
            (this.m_rgQueuedEventsForEditFlags = []),
            this.InternalLoadPartnerEventList(_, _, _).then(() => _?.()));
        };
      return (
        this.m_rgQueuedEventsClanIDs.length >= 30
          ? (this.m_QueuedEventTimeout.Cancel(), _())
          : this.m_QueuedEventTimeout.IsScheduled() ||
            this.m_QueuedEventTimeout.Schedule(50, _),
        _
      );
    }
    async InternalLoadPartnerEventList(_, _, _) {
      let _ = _.some((_) => _),
        _ =
          _.STORE_BASE_URL +
          (_
            ? `events/ajaxgeteventdetailsforedit/`
            : `events/ajaxgeteventdetails/`),
        _ = _(_(_.LANGUAGE)),
        _ = {
          clanid_list: _.join(`,`),
          uniqueid_list: _.join(`,`),
          lang_list: _,
          origin: self.origin,
        };
      try {
        let _ = await _.default.get(_, {
          params: _,
          withCredentials: _,
        });
        this.RegisterClanEvents(_.data.events);
      } catch (_) {
        let _ = _(_);
        console.error(`GetEventDetails hit error ` + _.strErrorMsg, _);
      }
    }
    async LoadAdjacentPartnerEvents(_, _, _, _, _, _, _) {
      return this.InternalLoadAdjacentPartnerEvents(
        _,
        void 0,
        _,
        _,
        _,
        _,
        _,
        _,
      );
    }
    async LoadAdjacentPartnerEventsByAnnouncement(_, _, _, _, _, _, _) {
      return this.InternalLoadAdjacentPartnerEvents(
        void 0,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
      );
    }
    async LoadAdjacentPartnerEventsByEvent(_, _, _, _, _, _, _) {
      let _ = _ || _.clanSteamID;
      return _.bOldAnnouncement
        ? this.InternalLoadAdjacentPartnerEvents(
            void 0,
            _.AnnouncementGID,
            _,
            _,
            _,
            _,
            _,
            _,
          )
        : this.InternalLoadAdjacentPartnerEvents(
            _.GID,
            _.AnnouncementGID,
            _,
            _,
            _,
            _,
            _,
            _,
          );
    }
    async InternalLoadAdjacentPartnerEvents(_, _, _, _, _, _, _, _) {
      let _ = [];
      if (!_ || !this.m_mapAdjacentAnnouncementGIDs.has(_)) {
        let _ = _.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
          _ = _(_(_.LANGUAGE));
        _?.only_summaries &&
          !this.m_bOnlySummary &&
          (_(
            this.m_bOnlySummary,
            `Only Summary: Incorrect parameter passed in, unsetting`,
          ),
          (_.only_summaries = void 0));
        let _ = {
          clan_accountid: _ ? _.GetAccountID() : void 0,
          appid: _,
          count_before: _,
          count_after: _,
          gidevent: _,
          gidannouncement: _,
          lang_list: _,
          rtime_oldestevent: _ ? _.rtime_oldestevent : void 0,
          require_tags: _ && _.require_tags ? _.require_tags.join(`,`) : void 0,
          exclude_tags: _ && _.exclude_tags ? _.exclude_tags.join(`,`) : void 0,
          require_no_tags: _ ? _.require_no_tags : void 0,
          event_type_filter:
            _ && _.event_type_filter ? _.event_type_filter.join(`,`) : void 0,
          exclude_event_types:
            _ && _.exclude_event_types
              ? _.exclude_event_types.join(`,`)
              : void 0,
          only_summaries: _ && !!_.only_summaries,
          origin: self.origin,
        };
        try {
          let _ = await _.default.get(_, {
            params: _,
            cancelToken: _?.token,
          });
          if (_?.data?.success == 1)
            _(() => {
              for (let _ of _.data.events) {
                let _ = _(_);
                if (!this.m_mapExistingEvents.has(_)) {
                  let _ = new _(_.clan_steamid);
                  this.InsertEventModelFromClanEventData(_ || _, _);
                }
                _.push(this.m_mapExistingEvents.get(_));
              }
              if (_.length == 0) {
                if (_ && this.BHasClanEventModel(_))
                  this.m_mapExistingEvents.get(_) &&
                    _.push(this.m_mapExistingEvents.get(_));
                else if (_ && this.BHasClanAnnouncementGID(_)) {
                  let _ = this.GetClanEventFromAnnouncementGID(_);
                  _ && _.push(_);
                }
              }
            });
          else {
            let _ = _(_?.data);
            console.error(
              `LoadAdjacentPartnerEvents Success but empty response:` +
                _ +
                ` clanAccount:` +
                (_ ? _.GetAccountID() : 0) +
                ` ` +
                _.strErrorMsg,
              _,
            );
          }
        } catch (_) {
          let _ = _(_);
          _.errorCode != 52 &&
            console.error(
              `LoadAdjacentPartnerEvents hit error on appid:` +
                _ +
                ` clanAccount:` +
                (_ ? _.GetAccountID() : 0) +
                ` ` +
                _.strErrorMsg,
              _,
            );
        }
      } else {
        let _ = this.m_mapAdjacentAnnouncementGIDs.get(_),
          _ = [];
        (_?.forEach((_) => {
          if (this.m_mapAnnouncementBodyToEvent.has(_)) {
            let _ = this.m_mapAnnouncementBodyToEvent.get(_);
            _ &&
              this.m_mapExistingEvents.get(_) &&
              _.push(this.m_mapExistingEvents.get(_));
          } else _.push(_);
        }),
          _.length > 0 &&
            (
              await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                void 0,
                _,
                _,
              )
            ).forEach((_) => _.push(_)));
      }
      return _;
    }
    async LoadPartnerEventsPageable(_, _, _ = 0, _ = 0, _) {
      let _ = [],
        _ = _.STORE_BASE_URL + `events/ajaxgetpartnereventspageable/`,
        _ = {
          clan_accountid: _ ? _.GetAccountID() : void 0,
          appid: _,
          offset: _,
          count: _,
          _: _.LANGUAGE,
          origin: self.origin,
          exclude_tags: _ && _.length > 0 ? _?.join(`,`) : void 0,
        };
      try {
        let _ = await _.default.get(_, {
          params: _,
        });
        _(() => {
          for (let _ of _.data.events) {
            let _ = _(_);
            if (!this.m_mapExistingEvents.has(_)) {
              let _ = new _(_.clan_steamid);
              this.InsertEventModelFromClanEventData(_, _);
            }
            _.push(this.m_mapExistingEvents.get(_));
          }
        });
      } catch (_) {
        console.error(`LoadClanEventInDateRange hit error ` + _(_).strErrorMsg);
      }
      return _;
    }
    async GetBestEventsForCurrentUser(_, _, _) {
      let _ = [],
        _ = {
          _: _.LANGUAGE,
          include_steam_blog: !0,
          filter_to_played_within_days: _,
          include_only_game_updates: _,
        },
        _ = _.STORE_BASE_URL + `events/ajaxgetbesteventsforuser`,
        _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
          cancelToken: _ ? _.token : void 0,
        });
      if (!_.data?.events) {
        let _ = _.data?.err_msg || ``;
        throw Error(`GetBestEventsForCurrentUser request failed (${_})`);
      }
      return (
        _(() => {
          for (let _ of _.data.events) {
            let _ = _(_);
            if (!this.m_mapExistingEvents.has(_)) {
              let _ = new _(_.clan_steamid);
              this.InsertEventModelFromClanEventData(_, _);
            }
            let _ = {
              nAppPriority: _.nAppPriority,
              bPossibleTakeOver: _.bPossibleTakeOver,
              event: this.m_mapExistingEvents.get(_),
            };
            _.push(_);
          }
        }),
        _
      );
    }
    async LoadImportantEventsAroundToday(_, _, _, _, _, _) {
      let _ = [],
        _ = [];
      (_.push({
        priority: 0,
        appids: _,
      }),
        _ &&
          _.push({
            priority: 1,
            appids: _,
          }),
        _ &&
          _.push({
            priority: 2,
            appids: _,
          }));
      let _ = {
          count: _,
          strAppIDPriority: JSON.stringify({
            prioritized_apps: _,
          }),
          filterToEventTypes: _ ? _.toString() : ``,
          _: _.LANGUAGE,
        },
        _ = _.STORE_BASE_URL + `events/ajaxgettodayboundedevents`,
        _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
          cancelToken: _.token,
        });
      return (
        _(() => {
          for (let _ of _.data.events) {
            let _ = _(_);
            if (!this.m_mapExistingEvents.has(_)) {
              let _ = new _(_.clan_steamid);
              this.InsertEventModelFromClanEventData(_, _);
            }
            _.push(this.m_mapExistingEvents.get(_));
          }
        }),
        _
      );
    }
    InsertUniqueEventGID(_, _, _) {
      let _ = this.m_mapClanToGIDs.get(_);
      _ ||= (this.m_mapClanToGIDs.set(_, []), this.m_mapClanToGIDs.get(_));
      let _ = this.m_mapAppIDToGIDs.get(_);
      ((_ ||= (this.m_mapAppIDToGIDs.set(_, []), this.m_mapAppIDToGIDs.get(_))),
        _.indexOf(_) == -1 && (_.push(_), _.push(_)));
    }
    ResetModel() {}
    async DeleteClanEvent(_, _) {
      this.m_mapExistingEvents.has(_) &&
        (this.m_mapExistingEvents.get(_).deleteInProgress = !0);
      let _ = new URLSearchParams();
      (_.append(`sessionid`, _()),
        _.append(`bDelete`, `1`),
        _.append(`gid`, _));
      let _ = await _.default.post(
        _.COMMUNITY_BASE_URL +
          `/gid/` +
          _.ConvertTo64BitString() +
          `/ajaxcreateupdatedeletepartnerevents/`,
        _,
      );
      return (this.RemoveGIDFromList(_, _), _.data);
    }
    RemoveGIDFromList(_, _) {
      if (
        (this.m_mapExistingEvents.delete(_),
        this.m_mapClanToGIDs.has(_.GetAccountID()))
      ) {
        let _ = this.m_mapClanToGIDs.get(_.GetAccountID()),
          _ = _.indexOf(_);
        _ >= 0 && _.splice(_, 1);
      }
    }
    FlushEventFromCache(_, _) {
      if (
        (_ &&
          this.m_mapExistingEvents.has(_) &&
          ((_ ||= this.m_mapExistingEvents.get(_).AnnouncementGID),
          this.m_mapExistingEvents.delete(_)),
        _ &&
          (this.m_mapExistingEvents.has(`old_announce_` + _) &&
            this.m_mapExistingEvents.delete(_ + _),
          this.m_mapAnnouncementBodyToEvent.has(_)))
      ) {
        let _ = this.m_mapAnnouncementBodyToEvent.get(_);
        (_ &&
          this.m_mapExistingEvents.has(_) &&
          this.m_mapExistingEvents.delete(_),
          this.m_mapAnnouncementBodyToEvent.delete(_));
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
      _,
      _,
      _,
      _,
      _,
      _ = !1,
    ) {
      let _ = _(_ ? 0 : _(_.LANGUAGE)),
        _ = {
          appid: _,
          clan_accountid: _ ? _.GetAccountID() : void 0,
          announcement_gid: _,
          event_gid: _,
          lang_list: _,
          last_modified_time: _ || 0,
          origin: self.origin,
          for_edit: _,
          only_summary: this.m_bOnlySummary,
        },
        _ = null,
        _ = null;
      if (_) {
        let _ = _();
        (_ === `community`
          ? ((_ = _.COMMUNITY_BASE_URL),
            (_ += _ ? `gid/` + _.ConvertTo64BitString() : `ogg/` + _),
            (_ += `/`))
          : (_ =
              _ === `partner`
                ? _.PARTNER_BASE_URL + `sales/`
                : _.STORE_BASE_URL + `events/`),
          (_ += `ajaxgetpartnereventforedit`),
          (_ = {
            params: _,
            withCredentials: !0,
          }));
      } else
        ((_ = _.STORE_BASE_URL + `events/ajaxgetpartnerevent`),
          (_ = {
            params: _,
            withCredentials: !1,
          }));
      try {
        let _ = await _.default.get(_, _);
        if (_.data.success !== 1) return;
        let _ = _.data.event,
          _ = _(_);
        if (
          !this.m_mapExistingEvents.has(_) ||
          (this.m_mapExistingEvents.get(_).rtime32_last_modified ?? 0) <
            (_.rtime32_last_modified ?? 0) ||
          (this.m_mapExistingEvents.get(_).rtime32_moderator_reviewed ?? 0) <
            (_.rtime_mod_reviewed ?? 0)
        ) {
          _(_.clan_steamid, `ClanSteamID is missing from data we received`);
          let _ = new _(_.clan_steamid);
          this.InsertEventModelFromClanEventData(_, _);
        }
        return this.m_mapExistingEvents.get(_);
      } catch {
        return;
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
      _,
      _,
      _,
      _,
      _,
      _,
    ) {
      if (_ && this.m_mapExistingEvents.has(_))
        return this.m_mapExistingEvents.get(_);
      if (_) {
        if (this.m_mapExistingEvents.has(`old_announce_` + _))
          return this.m_mapExistingEvents.get(_ + _);
        if (this.m_mapAnnouncementBodyToEvent.has(_)) {
          let _ = this.m_mapAnnouncementBodyToEvent.get(_);
          if (_ && this.m_mapExistingEvents.has(_))
            return this.m_mapExistingEvents.get(_);
        }
      }
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        _,
        _,
        _,
        _,
        _,
        _,
      );
    }
    async LoadPartnerEventFromAnnoucementGID(_, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        void 0,
        _,
        void 0,
        _,
        _,
        _,
      );
    }
    async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(_, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        _,
        void 0,
        void 0,
        _,
        _,
        _,
      );
    }
    async LoadPartnerEventFromClanEventGID(_, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        void 0,
        _,
        _,
        void 0,
        _,
        _,
      );
    }
    async LoadPartnerEventFromClanEventGIDAndClanSteamID(_, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        _,
        void 0,
        _,
        void 0,
        _,
        _,
      );
    }
    async LoadPartnerEventGeneric(_, _, _, _, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        _,
        _,
        _,
        _,
        _,
      );
    }
    async LoadHiddenPartnerEvent(_, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        _,
        void 0,
        _,
        void 0,
        0,
        !0,
      );
    }
    async LoadHiddenPartnerEventByAnnouncementGID(_, _) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        _,
        void 0,
        void 0,
        _,
        0,
        !0,
      );
    }
    async HintLoadImportantUpdates() {
      let _ = _(36e5);
      if (_ != this.m_tsUpdatedAppsQueryTime) {
        this.m_tsUpdatedAppsQueryTime = _;
        let _ = {
            page: 1,
            numPerPage: 500,
            includeAnnouncements: !1,
          },
          _ = _.STORE_BASE_URL + `updated/ajaxgetmyappsraw`,
          _ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
          });
        _.data.apps &&
          _.data.apps.length > 0 &&
          _(() => {
            let _ = new Map(_.data.apps?.map((_) => [_.appid, new _(_)]));
            this.m_mapUpdatedApps = _;
          });
      }
      return this.m_mapUpdatedApps;
    }
    GetAppImportantUpdate(_) {
      return (
        this.HintLoadImportantUpdates().catch((_) => {
          console.log(`UpdatedApps failed to load: `, _.response?.data);
        }),
        this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(_)
      );
    }
    async LoadClanEventLocalizationFromAnnouncementGID(_, _) {
      let _ =
        _.COMMUNITY_BASE_URL +
        `gid/` +
        _.ConvertTo64BitString() +
        `/announcements/ajaxgetlocalization/` +
        _;
      return (await _.default.get(_)).data.localization;
    }
    async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(_, _, _) {
      let _ = [],
        _ = _.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/`,
        _ = _(_(_.LANGUAGE)),
        _ = null,
        _ = null;
      if (_) {
        let _ = [];
        (_.forEach((_) => {
          this.m_mapExistingEvents.has(_)
            ? _.push(this.m_mapExistingEvents.get(_))
            : _.push(_);
        }),
          _.sort(),
          (_ = _));
      }
      if (_) {
        let _ = [];
        (_.forEach((_) => {
          if (
            this.m_mapAnnouncementBodyToEvent.has(_) &&
            this.m_mapAnnouncementBodyToEvent.get(_) &&
            this.m_mapExistingEvents.has(
              this.m_mapAnnouncementBodyToEvent.get(_),
            )
          ) {
            let _ = this.m_mapAnnouncementBodyToEvent.get(_);
            if (_) {
              let _ = this.m_mapExistingEvents.get(_);
              _ && _.push(_);
            }
          } else _.push(_);
        }),
          _.sort(),
          (_ = _));
      }
      if (!_ && !_) return _;
      let _ = [];
      for (; (_?.length ?? 0) > 0 || (_?.length ?? 0) > 0;) {
        let _ = {
          event_gids:
            (_?.length ?? 0) > 0 ? _?.splice(0, 100).join(`,`) : void 0,
          announcement_gids:
            (_?.length ?? 0) > 0 ? _?.splice(0, 100).join(`,`) : void 0,
          lang_list: _,
          origin: self.origin,
        };
        _.push(
          _.default.get(_, {
            params: _,
            cancelToken: _ ? _.token : void 0,
          }),
        );
      }
      try {
        let _ = await Promise.all([..._]),
          _ = 0;
        _(() =>
          _.forEach((_) => {
            if (_ && _.data && _.data.events)
              for (let _ of _.data.events) {
                let _ = _(_);
                if (!this.m_mapExistingEvents.has(_)) {
                  let _ = new _(_.clan_steamid);
                  this.InsertEventModelFromClanEventData(_, _);
                }
                _.push(this.m_mapExistingEvents.get(_));
              }
            else {
              let _ = _(_);
              console.error(
                `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error ` +
                  _.strErrorMsg,
                _,
              );
            }
            _ += 1;
          }),
        );
      } catch (_) {
        let _ = _(_);
        console.error(
          `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error ` +
            _.strErrorMsg,
          _,
        );
      }
      return _;
    }
    async SavePartnerEventSaleAssets(_, _, _, _) {
      let _ = null;
      if (!this.m_mapExistingEvents.has(_)) return !1;
      try {
        let _ = `${_.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${_}`,
          _ = new FormData();
        (_.append(`sessionid`, _()),
          _.append(`gidclanevent`, _),
          _.append(`json`, JSON.stringify(_)),
          _.append(`pageStyles`, JSON.stringify(_)));
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
        });
        if (_?.data?.success == 1) {
          let _ = this.m_mapExistingEvents.get(_);
          if (_ && _.jsondata) {
            for (let _ in _)
              if (_.hasOwnProperty(_) && _[_]) {
                let _ = _,
                  _ = _[_];
                _ !== void 0 && _ !== void 0 && (_.jsondata[_] = _);
              }
          }
          return (this.GetPartnerEventChangeCallback(_).Dispatch(_), !0);
        }
        _ = _(_);
      } catch (_) {
        _ = _(_);
      }
      return (
        console.error(
          `CPartnerEventStore.SavePartnerEventSaleAssets failed: ` +
            _?.strErrorMsg,
          _,
        ),
        !1
      );
    }
    BIsSummaryOnlyStore() {
      return this.m_bOnlySummary;
    }
  };
(_([_], _.prototype, `m_mapExistingEvents`, void 0),
  _([_], _.prototype, `m_mapAnnouncementBodyToEvent`, void 0),
  _([_], _.prototype, `m_mapClanToGIDs`, void 0),
  _([_], _.prototype, `m_mapAppIDToGIDs`, void 0),
  _([_], _.prototype, `m_mapUpdatedApps`, void 0),
  _([_], _.prototype, `Init`, null),
  _([_], _.prototype, `GetPartnerEventChangeCallback`, null),
  _([_], _.prototype, `RegisterClanEvents`, null),
  _([_], _.prototype, `InsertEventModelFromClanEventData`, null),
  _([_], _.prototype, `DeleteClanEvent`, null),
  _([_], _.prototype, `RemoveGIDFromList`, null),
  _([_], _.prototype, `FlushEventFromCache`, null),
  _([_], _.prototype, `SavePartnerEventSaleAssets`, null));
var _ = new _();
_(`g_PartnerEventStore`, _);
var _ = new _(!0);
_(`g_PartnerEventSummaryStore`, _);
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
