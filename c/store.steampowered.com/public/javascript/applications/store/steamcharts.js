import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _, _ } from "./libraries.js";
import { _, _, _, _ } from "./salesectionfactory.js";
import { _, _ } from "./partnerevent.js";
import { _ } from "./partnersaledisplay.js";
import { _ } from "./usehotkeys.js";
import { _ } from "./historyutils.js";
import { _ } from "./throbber.js";
import { _ } from "./moment.js";
import { _, _ } from "./eventdevfeaturestore.js";
import { _ } from "./simplesuccesserror.js";
import { _ } from "./storeitemhooks.js";
import { _ } from "./storedisplayutils.js";
import { _, _, _ } from "./fakesalehelper.js";
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
} from "./main.js";
import { _ } from "./storequery.js";
import { _ } from "./react-datetime.js";
import { _, _ } from "./focusablelink.js";
import { _ } from "./browserpage.js";
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.country_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            context: {
              _: 2,
              _: _,
            },
            data_request: {
              _: 3,
              _: _,
            },
            start_date: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            page_start: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            page_count: {
              _: 6,
              _: 20,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CStoreTopSellers_GetWeeklyTopSellers_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.start_date || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start_date: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ranks: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            next_page_start: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CStoreTopSellers_GetWeeklyTopSellers_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rank || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rank: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            appid: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            item: {
              _: 3,
              _: _,
            },
            last_week_rank: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            consecutive_weeks: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            first_top100: {
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
      return `CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CStoreTopSellers_GetCountryList_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.countries || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            countries: {
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
      return `CStoreTopSellers_GetCountryList_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.country_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CStoreTopSellers_GetCountryList_Response_Country`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`StoreTopSellers.GetWeeklyTopSellers#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetWeeklyTopSellers = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreTopSellers.GetCountryList#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetCountryList = _;
})((_ ||= {}));
var _ = 20,
  _ = class _ {
    m_WebAPI;
    m_Storage;
    m_promiseInitialize;
    m_rtCurrentWeek;
    constructor(_, _) {
      (this.m_WebAPI = _), (this.m_Storage = _);
    }
    async Initialize(_) {
      return (
        (this.m_promiseInitialize ||= new Promise((_, _) => {
          let _;
          (_.EUNIVERSE == 2 || _.EUNIVERSE == 4) && (_ = 1539068400),
            this.LoadCountryList()
              .then(() =>
                this.LoadCurrentWeekStart(_, _).then((_) => {
                  (this.m_rtCurrentWeek = _), _();
                }),
              )
              .catch(_);
        })),
        this.m_promiseInitialize
      );
    }
    m_rgCountryList;
    static k_nCountryListMaxCacheTime = 864e5;
    async LoadCountryList() {
      if (!this.m_rgCountryList) {
        let _ = `TopSellersCountryList_` + _.LANGUAGE;
        if (
          ((this.m_rgCountryList = await this.m_Storage.GetObject(_)),
          !this.m_rgCountryList ||
            this.m_rgCountryList.dtTimeStored + _.k_nCountryListMaxCacheTime <
              Date.now())
        ) {
          let _ = _.Init(_);
          _.Body().set_language(_.LANGUAGE);
          let _ = await _.GetCountryList(
            this.m_WebAPI.GetServiceTransport(),
            _,
          );
          if (_.GetEResult() == 1) {
            let _ = _.Body()
              .countries()
              .map((_) => _.toObject());
            _.sort((_, _) => (_.name < _.name ? -1 : 1)),
              (this.m_rgCountryList = {
                rgCountryCodes: _,
                dtTimeStored: Date.now(),
              }),
              this.m_Storage.StoreObject(_, this.m_rgCountryList);
          } else
            this.m_rgCountryList = {
              rgCountryCodes: [
                {
                  country_code: `US`,
                  name: `United States`,
                },
              ],
              dtTimeStored: 0,
            };
        }
      }
      return this.m_rgCountryList;
    }
    BIsValidTopSellersCountry(_) {
      return !!this.ValidateCountryCode(_);
    }
    ValidateCountryCode(_) {
      return (
        _(this.m_rgCountryList, `Country list should already be loaded`),
        this.m_rgCountryList.rgCountryCodes.find((_) => _.country_code == _)
          ? _
          : ``
      );
    }
    GetCurrentWeek() {
      return this.m_rtCurrentWeek;
    }
    async LoadCurrentWeekStart(_, _) {
      let _ = this.ValidateCountryCode(_),
        _ = _.Init(_);
      _(_),
        _(_, _),
        _ && _.Body().set_country_code(_),
        _ && _.Body().set_start_date(_),
        _.Body().set_page_count(_);
      let _ = await _.GetWeeklyTopSellers(
        this.m_WebAPI.GetAnonymousServiceTransport(),
        _,
      );
      if (_.GetEResult() != 1) throw `error loading top sellers`;
      return _.Body().start_date();
    }
  },
  _ = `TopSellers`;
function _(_, _) {
  let { data: _ } = _({
    queryKey: [_, `Initialization`],
    queryFn: () =>
      _.Initialize(_).then(() => ({
        rtCurrentWeek: _.GetCurrentWeek(),
        bCountryListInitialized: !0,
      })),
    staleTime: 1 / 0,
  });
  return (
    _ || {
      rtCurrentWeek: void 0,
      bCountryListInitialized: !1,
    }
  );
}
function _(_) {
  let _ = 50;
  return _ < 2009 ? (_ = 5) : _ < 2014 ? (_ = 10) : _ < 2018 && (_ = 25), _;
}
var _ = class {
    m_WebAPI;
    constructor(_) {
      this.m_WebAPI = _;
    }
    async LoadTopMonthlyReleases(_, _) {
      let _ = _.Init(_),
        _ = new Date(_, _, 15);
      _.Body().set_rtime_month(Math.floor(_.getTime() / 1e3)),
        _.Body().set_include_dlc(!0);
      let _ = _(_);
      _.Body().set_top_results_limit(_);
      let _ = await _.GetMonthTopAppReleases(
        this.m_WebAPI.GetAnonymousServiceTransport(),
        _,
      );
      if (_.GetEResult() != 1) {
        if (_.GetEResult() == 10)
          return {
            bSQLError: !0,
          };
        if (_.GetEResult() == 42) return {};
        throw `error loading top releases`;
      }
      return _.Body().toObject();
    }
  },
  _ = `useMonthlyTopRelease`;
function _(_, _, _) {
  let { data: _ } = _({
    queryKey: [_, _, _],
    queryFn: () => _.LoadTopMonthlyReleases(_, _),
  });
  return _;
}
var _ = class {
    m_WebAPI;
    constructor(_) {
      this.m_WebAPI = _;
    }
    async LoadTopYearlyReleases(_) {
      let _ = _.Init(_),
        _ = new Date(_, 1, 15);
      _.Body().set_rtime_year(Math.floor(_.getTime() / 1e3)),
        _.Body().set_include_dlc(!0);
      let _ = (_.is_support, this.m_WebAPI.GetAnonymousServiceTransport()),
        _ = await _.GetYearTopAppReleases(_, _);
      if (_.GetEResult() != 1) {
        if (_.GetEResult() == 10)
          return {
            bSQLError: !0,
          };
        if (_.GetEResult() == 42) return {};
        throw `error loading top releases`;
      }
      let _ = _.Body().toObject();
      return _.is_support && _.top_app_list.length, _;
    }
  },
  _ = `useYearlyTopRelease`;
function _(_, _) {
  let { data: _ } = _({
    queryKey: [_, _],
    queryFn: () => _.LoadTopYearlyReleases(_),
  });
  return _;
}
var _ = class {
    m_DynamicUserStore;
    m_TopSellersStore;
    m_TopMonthlyReleasesStore;
    m_TopYearlyReleasesStore;
    m_WebAPI;
    async Initialize(_, _) {
      (this.m_WebAPI = _),
        (this.m_TopSellersStore = new _(this.m_WebAPI, _)),
        (this.m_TopMonthlyReleasesStore = new _(this.m_WebAPI)),
        (this.m_TopYearlyReleasesStore = new _(this.m_WebAPI)),
        (this.m_DynamicUserStore = await _.Get().HintLoad());
    }
    get TopSellersStore() {
      return this.m_TopSellersStore;
    }
    get TopMonthlyReleasesStore() {
      return this.m_TopMonthlyReleasesStore;
    }
    get TopYearlyReleasesStore() {
      return this.m_TopYearlyReleasesStore;
    }
    get DynamicUserStore() {
      return this.m_DynamicUserStore;
    }
  },
  _ = {
    include_basic_info: !0,
    include_assets: !0,
    include_trailers: !0,
    include_release: !0,
    include_reviews: !0,
    include_platforms: !0,
    include_screenshots: !0,
    include_tag_count: 20,
  },
  _ = `nWd1ELrYoe0-`,
  _ = `_95V-lbT5PJ4-`,
  _ = `PjNfTdZzbec-`,
  _ = `z1BmGx-3eHc-`,
  _ = `BI3ViiBatRs-`,
  _ = `-WUQRSRopgQ-`,
  _ = `K7jQn59eh0Q-`,
  _ = `VORLVa89K8w-`,
  _ = `WuFd3UO9Z8A-`,
  _ = `-M2vGhTiIBQ-`,
  _ = `_6NF3vg0mDAs-`,
  _ = `Vp9bv89KEA4-`,
  _ = `uI7wLN2bQiE-`,
  _ = `kGCpjDEp6bU-`,
  _ = `G32wdCdumF8-`,
  _ = `QPPTxaWO3x0-`,
  _ = `_7dLEN2CpT-A-`,
  _ = `YXVaLgzPykw-`,
  _ = `kiJjoM-8Yio-`,
  _ = `ncC-B6lB610-`,
  _ = `YqWcdxOb1HQ-`,
  _ = `_9fTbvJQq5II-`,
  _ = `lEUeKqj6qis-`,
  _ = `V0nSJVwdJYU-`,
  _ = `_4Hwybg0uOZA-`,
  _ = `_8wtllXu9kAY-`,
  _ = `JFpy0tqsydo-`,
  _ = _(_()),
  _ = _(_()),
  _ = _(_()),
  _ = `_2eSm1Y7y2zQ-`,
  _ = `jV834OQRLIM-`,
  _ = _();
function _(_) {
  let { toolTipContent: _ } = _,
    _ = _({
      ..._,
    });
  return (0, _.jsx)(_, {
    toolTipContent: _,
    children: (0, _.jsx)(`div`, {
      className: _(_),
      onClick: (_) =>
        _(_, {
          bDisableMouseOverlay: !0,
          bAlwaysOnTop: !0,
        }),
      children: (0, _.jsx)(_, {
        color: `#c6d4df`,
      }),
    }),
  });
}
function _(_) {
  return (0, _.useCallback)(
    (_, _) => {
      let _ = (0, _.jsx)(_, {
        ..._,
      });
      _(_, _, _);
    },
    [_],
  );
}
function _(_) {
  let { value: _, fnOnUpdate: _, minDate: _, maxDate: _ } = _,
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(null),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _.default.unix(_),
          _ = _.default.unix(_);
        return _.isSameOrAfter(_, `month`) && _.isSameOrBefore(_, `month`);
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _(_.unix()), _.current.Hide();
      },
      [_],
    ),
    _ = (0, _.useMemo)(() => {
      if (!_.default.locales().includes(`YearMonthPickerContextMenu`)) {
        let _ = Array.from(
            {
              length: 12,
            },
            (_, _) => _(new Date(2020, _, 1)),
          ),
          _ = Array.from(
            {
              length: 12,
            },
            (_, _) => _(new Date(2020, _, 1)),
          );
        _.default.defineLocale(`YearMonthPickerContextMenu`, {
          months: _,
          monthsShort: _,
        });
      }
      return (0, _.default)().clone().locale(`YearMonthPickerContextMenu`);
    }, []);
  return (0, _.jsx)(_, {
    refInstance: _,
    children: (0, _.jsx)(_, {
      onSelected: () => {},
      className: _,
      children: (0, _.jsx)(`div`, {
        onClick: (_) => {
          _.preventDefault(), _.stopPropagation();
        },
        children: (0, _.jsx)(_.default, {
          ref: _,
          value: _,
          onChange: _,
          dateFormat: `YYYY-MM`,
          timeFormat: !1,
          closeOnSelect: !0,
          isValidDate: _,
          input: !1,
          locale: `YearMonthPickerContextMenu`,
        }),
      }),
    }),
  });
}
var _ = `-ltR43mR0X4-`,
  _ = `_-02GoLJ4zss-`,
  _ = `_3eZTUI8a7YQ-`,
  _ = `_1IPE7weNS5c-`,
  _ = `_6nJy9OkrSk4-`,
  _ = `aq431rFutSg-`,
  _ = `Yl-MOWSIHeA-`,
  _ = `dbaJyRHX-xw-`;
function _(_) {
  let {
      rgAppIDs: _,
      children: _,
      nMonth: _,
      bTallCapsule: _,
      bBlurCapsules: _,
    } = _,
    _ = (0, _.useMemo)(() => {
      let _ = 0,
        _ = [..._];
      for (; _.length < 25; ) _.push(_[_ % _.length]), _++;
      return _.map((_) => _.Get().GetApp(_)).filter(Boolean);
    }, [_]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _({
          [_]: !0,
          [_]: _,
          [_]: _,
          [_]: !_,
        }),
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _({
                [_]: !0,
                [`Month${_}`]: !0,
                [_]: _.length <= 10,
                [void 0]: _.length <= 20,
              }),
              children: _.map((_, _) =>
                _
                  ? (0, _.jsx)(
                      `img`,
                      {
                        src: _.GetAssets().GetHeroCapsuleURL(),
                      },
                      `bg_` + _.GetAppID() + `+` + _,
                    )
                  : (0, _.jsx)(
                      `img`,
                      {
                        src: _.GetAssets().GetHeaderURL(),
                      },
                      `bg_` + _.GetAppID() + `+` + _,
                    ),
              ),
            }),
          }),
        }),
      }),
      _,
    ],
  });
}
function _(_) {
  let _ = new Date(_ > 0xe8d4a51000 ? _ : _ * 1e3);
  new Intl.DateTimeFormat(`en-US`, {
    timeZone: `America/Los_Angeles`,
    year: `numeric`,
    month: `numeric`,
    day: `numeric`,
    hour: `numeric`,
    minute: `numeric`,
  }).format(_);
  let _ = new Date(
      _.toLocaleString(`en-US`, {
        timeZone: `America/Los_Angeles`,
      }),
    ),
    _ = _.getMonth(),
    _ = _.getFullYear(),
    _ = _.getDate(),
    _ = _.getHours(),
    _,
    _;
  for (_ = _ > 15 || (_ === 15 && _ >= 10) ? _ - 1 : _ - 2; _ < 0; )
    (_ += 12), (_ = (_ ?? _) - 1);
  _ ??= _;
  let _ = new Date(Date.UTC(_, _, 15, 17, 0));
  return Math.floor(_.getTime() / 1e3);
}
function _(_) {
  let [_, _] = _.split(`_`),
    _ = parseInt(_, 10),
    _ = {
      january: 0,
      february: 1,
      march: 2,
      april: 3,
      may: 4,
      june: 5,
      july: 6,
      august: 7,
      september: 8,
      october: 9,
      november: 10,
      december: 11,
    }[_.toLowerCase()];
  if (_ === void 0)
    return {
      dtMidMonth: null,
      dtTestMonth: null,
    };
  let _ = _,
    _ = _;
  return (
    _ == 11 ? ((_ = 0), (_ += 1)) : (_ += 1),
    {
      dtMidMonth: new Date(_, _, 15),
      dtTestMonth: new Date(_, _, 15),
    }
  );
}
function _(_, _) {
  let _ = [
    `january`,
    `february`,
    `march`,
    `april`,
    `may`,
    `june`,
    `july`,
    `august`,
    `september`,
    `october`,
    `november`,
    `december`,
  ];
  if (_ < 0 || _ > 11)
    throw Error(`Invalid month index. Must be between 0 and 11.`);
  return `${_[_]}_${_}`;
}
var _ = `GrtMVCtr-vo-`,
  _ = `gff1kM2EfSA-`,
  _ = `YhTNq9btf6k-`,
  _ = `KDYpaqyoTj8-`,
  _ = `XCSzn66hgwE-`;
function _(_) {
  let _ = _;
  switch (_) {
    case 1:
      _ = _;
      break;
    case 2:
      _ = _;
      break;
    case 3:
      _ = _;
  }
  return _;
}
function _(_, _, _, _, _, _, _, _) {
  _?.length > 25 &&
    _.jsondata.sale_sections.push({
      ..._(`items`, `#Sale_default_label_148`),
      capsules: _.map((_) => ({
        _: _,
        type: _.has(_) ? `dlc` : `game`,
      })),
      capsules_per_row_array: [1],
      show_as_carousel: !1,
      carousel_rows: 1,
      single_item_style: `library`,
      use_random_order: !0,
      cap_section_content: !1,
      cap_section_row_count: _.length,
      disable_background: !0,
      enable_faceted_browsing: !0,
      min_capsule_matches_for_facet_values: 5,
      max_facet_values_for_facet: 5,
      facet_sort_order: 1,
      cap_item_count: 0,
      facets: _,
      show_on_tabs: _ ? [_] : void 0,
      prefer_assets_without_overrides: _,
      show_deck_compability_details: !!_,
      show_as_demos: !!_,
      prefer_demo_store_page: !!_,
    });
}
function _(_, _, _, _, _, _, _, _) {
  if (_.logged_in) {
    let _ = _.Get(),
      _ = _.filter((_) => _.BIsGameWishlisted(_));
    _?.length > 0 &&
      _.jsondata.sale_sections.push({
        ..._(`items`, `#Sale_OnWishlist`),
        capsules: _.map((_) => ({
          _: _,
          type: _.has(_) ? `dlc` : `game`,
        })),
        capsules_per_row_array: _.length < 3 ? [2] : [5],
        carousel_rows: 1,
        show_as_carousel: !0,
        disable_background: !0,
        capsule_style_per_row_array: _.length < 3 ? [`grid`] : [`tall`],
        random_from_entire_set: !0,
        show_on_tabs: _ ? [_] : void 0,
        prefer_assets_without_overrides: _,
        show_deck_compability_details: !!_,
        show_as_demos: !!_,
        prefer_demo_store_page: !!_,
      });
    let _ = _.filter((_) => _.BIsGameRecommended(_) && !_.BIsGameIgnored(_));
    if (_?.length > 0) {
      let _ = _.length;
      _.jsondata.sale_sections.push({
        ..._(`items`, `#Sale_default_label_RecommendedForYou`),
        capsules: _.map((_) => ({
          _: _,
          type: _.has(_) ? `dlc` : `game`,
        })),
        capsules_per_row_array: _ == 2 ? [2] : [3, 2],
        carousel_rows: 2,
        show_as_carousel: !0,
        disable_background: !0,
        capsule_style_per_row_array: _ == 2 ? [`grid`] : [`tall`, `grid`],
        show_on_tabs: _ ? [_] : void 0,
        prefer_assets_without_overrides: _,
        show_deck_compability_details: !!_,
        show_as_demos: !!_,
        prefer_demo_store_page: !!_,
      });
    }
    if (!_) {
      let _ = _.filter((_) => {
        if (!_.BIsGameOwned(_)) {
          let _ = _.Get().GetApp(_);
          return _.BIsGameOwned(_.GetParentAppID());
        }
        return !1;
      });
      _.length > 0 &&
        _.jsondata.sale_sections.push({
          ..._(`dlc_for_you`, `#Sale_default_label_246`),
          capsules: _.map((_) => ({
            _: _,
            type: `dlc`,
          })),
          dlc_for_you_data: {
            group_by_parent_app: !0,
            hide_dlc_stats: !0,
            parent_app_page_size: 5,
            hide_dlc_grouping: !0,
          },
          capsules_per_row_array: [3],
          show_as_carousel: !0,
          disable_background: !0,
          show_on_tabs: _ ? [_] : void 0,
          prefer_assets_without_overrides: _,
        });
    }
  }
}
function _(_, _) {
  let _ = _.Get(),
    _ = [],
    _ = [],
    _ = [],
    _ = [],
    _ = [];
  for (let _ of _)
    if (_.BIsGameIgnored(_)) continue;
    else
      _.BIsGameRecommended(_)
        ? _.push(_)
        : _.BIsGameWishlisted(_)
          ? _.push(_)
          : _[1]?.includes(_)
            ? _.push(_)
            : _[2]?.includes(_)
              ? _.push(_)
              : _.push(_);
  return [..._(_), ..._(_), ..._(_), ..._(_), ..._(_)];
}
function _(_, _, _, _, _, _, _, _) {
  _.jsondata.sale_sections.push({
    ..._(`trailercarousel`, ``),
    capsules: _(_, _).map((_) => ({
      _: _,
      type: _.has(_) ? `dlc` : `game`,
    })),
    use_random_order: !1,
    disable_background: !0,
    trailer_carousel_auto_advance_msec: 1e4,
    show_on_tabs: _ ? [_] : void 0,
    prefer_assets_without_overrides: _,
    show_deck_compability_details: !!_,
    show_as_demos: !!_,
    prefer_demo_store_page: !!_,
  });
}
function _(_, _, _, _, _) {
  let _ = _(_, 1, _, _()),
    _ = [..._, ..._],
    _ = new Set(_);
  if (
    ((_.jsondata.sale_sections = []),
    _.length > 9 && _(_, _, _, _, !1),
    _?.length > 25)
  )
    for (let _ in _) {
      let _ = _[_];
      _.jsondata.sale_sections.push({
        ..._(`items`, `#SteamCharts_Monthly_Rank_` + _),
        capsules: _.map((_) => ({
          _: _,
          type: _.has(_) ? `dlc` : `game`,
        })),
        capsules_per_row_array: [4],
        capsule_style_per_row_array: _ == `1` ? [`tall`] : [`grid`],
        show_as_carousel: !1,
        use_random_order: !0,
        border_width: 1,
        default_subtitle: `#SteamCharts_Monthly_Rank_` + _ + `_subtitle`,
        sale_section_classname: _(Number.parseInt(_)),
        prefer_assets_without_overrides: !1,
      });
    }
  else {
    let _ = Object.values(_).flat();
    _.jsondata.sale_sections.push({
      ..._(`items`, `#SteamCharts_Monthly_Rank_All`),
      capsules: _.map((_) => ({
        _: _,
        type: _.has(_) ? `dlc` : `game`,
      })),
      capsules_per_row_array:
        _?.length > 9 ? (_?.length > 15 ? [3] : [2]) : [1],
      single_item_style: _?.length < 9 ? `library` : `bordered`,
      show_as_carousel: !1,
      use_random_order: !0,
      sale_section_classname: _,
      prefer_assets_without_overrides: !1,
    });
  }
  return (
    _(_, _, _, _, !1),
    _(_, _, _, _, !1),
    _.jsondata.sale_sections.push({
      ..._(`social_share`, `#EventDisplay_Share_WithFriendsHeader`),
      social_share: _(),
    }),
    _
  );
}
function _(_, _, _, _, _) {
  let { data: _ } = _({
    queryKey: [`useMonthEventModel`, _],
    queryFn: () => {
      try {
        return _(_, _, _, _, _);
      } catch (_) {
        return console.error(`Montly new release: ${_} failed: `, _), null;
      }
    },
  });
  return _;
}
function _(_) {
  let {
      rgFilteredDLCsAppIDs: _,
      rgFilteredCombinedAppsAndDLC: _,
      promotionName: _,
      rgFilteredAppIDByTier: _,
      facets: _,
    } = _,
    _ = _(_, _, _, _, _),
    _ = _(_.LANGUAGE);
  return _
    ? (0, _.jsx)(_, {
        eventModel: _,
        language: _,
        bIsPreview: !1,
        bDynamicallyCreatedSale: !0,
      })
    : _ === null
      ? (0, _.jsx)(`div`, {
          className: _,
          children: _(`#Error_ErrorCommunicatingWithNetwork`),
        })
      : (0, _.jsx)(_, {
          string: _(`#Loading`),
          position: `center`,
        });
}
function _(_, _, _, _) {
  (0, _.useEffect)(() => {
    if (_ == null && _ != 1 && _) {
      let _ = _(_);
      _?.length > 0
        ? _.Get()
            .HintLoadStoreApps(_, _)
            .then(() => _(_))
        : _([]);
    }
  }, [_, _, _, _]);
}
function _(_) {
  let _ = _.Get(),
    _ = _.filter((_) => {
      if (!_.BIsGameOwned(_)) {
        let _ = _.Get().GetApp(_);
        return _ && _.BIsVisible() && _.BIsGameOwned(_.GetParentAppID());
      }
      return !1;
    })
      .map((_) => _.Get().GetApp(_).GetParentAppID())
      .filter(Boolean);
  return Array.from(new Set(_));
}
var _ = [`topnewreleases`, `bestofyear`];
function _(_) {
  return _.split(/[?#]/)[0];
}
function _(_) {
  let _ = _(_);
  return _.length > 1 && _.endsWith(`/`) ? _.slice(0, -1) : _;
}
function _(_) {
  if (!_) return !1;
  let _ = _.SteamCharts(),
    _ = _(_);
  if (_(_) == _(_)) return !0;
  if (!_.startsWith(_)) return !1;
  let _ = _.slice(_.length).split(`/`)[0];
  return !_.includes(_);
}
function _() {
  let _ = _();
  return _.useCallback(
    (_, _) => {
      _(_)
        ? _?.bReplace
          ? window.location.replace(_)
          : window.location.assign(_)
        : _?.bReplace
          ? _.replace(_, _?.state)
          : _.push(_, _?.state);
    },
    [_],
  );
}
function _(_, _) {
  let _ = _(window.location.pathname),
    _ = _(_);
  return _ ? _ == _ : _ == _ || _.startsWith(_ + `/`);
}
function _(_) {
  let {
      _: _,
      exact: _,
      activeClassName: _,
      className: _,
      children: _,
      ..._
    } = _,
    _ = typeof _ == `string` ? _ : void 0;
  return _(_)
    ? (0, _.jsx)(_, {
        href: _,
        className: _(_, _(_, !!_) ? _ : void 0),
        ..._,
        children: _,
      })
    : (0, _.jsx)(_, {
        _: _,
        exact: _,
        activeClassName: _,
        className: _,
        ..._,
        children: _,
      });
}
function _(_) {
  let { _: _, children: _, ..._ } = _,
    _ = typeof _ == `string` ? _ : void 0;
  return _(_)
    ? (0, _.jsx)(_, {
        href: _,
        ..._,
        children: _,
      })
    : (0, _.jsx)(_, {
        _: _,
        ..._,
        children: _,
      });
}
function _(_) {
  let { salePageName: _, TopMonthlyReleasesStore: _ } = _,
    _ = _(),
    { dtMidMonth: _, dtTestMonth: _ } = _(_);
  return !_ ||
    Math.floor(_.getTime() / 1e3) > _ ||
    _.getFullYear() < _ ||
    (_.getFullYear() == _ && _.getMonth() < _)
    ? (0, _.jsx)(`div`, {
        children: _(`#DateTimePicker_Fallback_Invalid_DateTime`),
      })
    : (0, _.jsx)(_, {
        TopMonthlyReleasesStore: _,
        nMonth: _.getMonth(),
        nYear: _.getFullYear(),
        promotionName: _,
      });
}
var _ = {
  ..._,
  apply_user_filters: !0,
};
function _(_, _, _, _) {
  let _ = _(_, _, _),
    _ = (0, _.useMemo)(
      () =>
        _
          ? Array.from(
              new Set([
                ...(_.top_dlc_releases?.map((_) => _.appid) || []),
                ...(_.top_combined_app_and_dlc_releases?.map((_) => _.appid) ||
                  []),
              ]),
            )
          : (_ && _(null), []),
      [_, _],
    ),
    _ = _(_, _),
    _ = (0, _.useMemo)(
      () =>
        !_ || _ == 1
          ? []
          : _.top_dlc_releases
              ?.filter((_) => !_.Get().BIsAppMissing(_.appid))
              .map((_) => _.appid),
      [_, _],
    ),
    { rgFilteredCombinedAppsAndDLC: _, rgFilteredAppIDByTier: _ } = (0,
    _.useMemo)(() => {
      if (!_ || _ == 1)
        return {
          rgFilteredCombinedAppsAndDLC: [],
          rgFilteredAppIDByTier: [],
        };
      let _ = _?.top_combined_app_and_dlc_releases || [],
        _ = [];
      return {
        rgFilteredCombinedAppsAndDLC: _.filter(
          (_) => !_.Get().BIsAppMissing(_.appid),
        ).map((_) => {
          let _ = _.app_release_rank;
          return _[_] || (_[_] = []), _[_].push(_.appid), _.appid;
        }),
        rgFilteredAppIDByTier: _,
      };
    }, [_, _]);
  return {
    rgAppIDs: _,
    rgMonthlyReleases: _,
    rgFilteredAppIDByTier: _,
    rgFilteredCombinedAppsAndDLC: _,
    rgFilteredDLCsAppIDs: _,
    loadState: _,
  };
}
function _(_) {
  let { TopMonthlyReleasesStore: _, nYear: _, nMonth: _, promotionName: _ } = _,
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    {
      rgAppIDs: _,
      rgMonthlyReleases: _,
      rgFilteredAppIDByTier: _,
      rgFilteredCombinedAppsAndDLC: _,
      rgFilteredDLCsAppIDs: _,
      loadState: _,
    } = _(_, _, _);
  return (
    (0, _.useEffect)(() => {
      _ ||
        _({
          bForceFeatureTagForFullController: !1,
        }).then(_);
    }, [_]),
    _(_, _, _, _),
    !_ || _ == 1 || !_ || _ == null || !_
      ? (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              nMonth: _,
              nYear: _,
            }),
            (0, _.jsx)(_, {
              string: _(`#Loading`),
              position: `center`,
            }),
          ],
        })
      : _.length == 0
        ? (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                nMonth: _,
                nYear: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(
                  _.bSQLError
                    ? `#Error_ErrorCommunicatingWithNetwork`
                    : `#SteamCharts_NewMonth_NoRelease`,
                ),
              }),
            ],
          })
        : (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                rgAppIDs: _,
                nMonth: _,
                bBlurCapsules: !0,
                children: (0, _.jsx)(_, {
                  nMonth: _,
                  nYear: _,
                }),
              }),
              (0, _.jsx)(_, {
                promotionName: _,
                rgFilteredCombinedAppsAndDLC: _,
                rgFilteredAppIDByTier: _,
                rgFilteredDLCsAppIDs: _,
                facets: _,
              }),
            ],
          })
  );
}
function _(_, _) {
  return _(
    `#SteamCharts_Monthly_Title_wMonthAndYear`,
    _(`#Sale_Reservation_MonthNoun_` + (_ + 1)),
    _,
  );
}
var _ = 2003,
  _ = 8,
  _ = 1063584e3;
function _(_) {
  let { nMonth: _, nYear: _ } = _,
    _ = _(),
    _ = _() || _(window),
    _ = _(),
    _ = _ > 0 ? _ : _ - 1,
    _ = _ > 0 ? _ - 1 : 11,
    _ = _(_, _),
    _ = _ > _ || _ > _,
    _ = _ < 11 ? _ : _ + 1,
    _ = _ < 11 ? _ + 1 : 0,
    _ = _(_, _),
    _ = new Date(_ == 11 ? _ + 1 : _, _ == 11 ? 0 : _ + 1, 15),
    _ = Math.floor(_.getTime() / 1e3) < _,
    _ = (0, _.useCallback)(
      (_) => {
        _.active_modal ||
          (_ && _ ? _(_.TopNewReleases(_)) : !_ && _ && _(_.TopNewReleases(_)));
      },
      [_.active_modal, _, _, _, _, _],
    );
  return (
    _(`ArrowLeft`, () => _(!1), !0, !0),
    _(`Left`, () => _(!1), !0, !0),
    _(`ArrowRight`, () => _(!0), !0, !0),
    _(`Right`, () => _(!0), !0, !0),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`div`, {
          className: _(_, _),
          children: (0, _.jsx)(`h1`, {
            children: _(_, _),
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: _(_),
          children: [
            _(`#SteamCharts_Monthly_SubTitle`, _(_)),
            (0, _.jsx)(`br`, {}),
            (0, _.jsx)(`span`, {
              children: _(`#SteamCharts_Monthly_PublishSchedule`),
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          className: _(_),
          children: [
            (0, _.jsx)(_, {
              toolTipContent: _(_, _),
              children: (0, _.jsx)(`div`, {
                className: _({
                  [_]: !0,
                  [_]: !_,
                }),
                children: _
                  ? (0, _.jsx)(_, {
                      _: _ ? _.TopNewReleases(_) : void 0,
                      className: _,
                      children: (0, _.jsx)(`div`, {
                        className: _,
                        children: `\xA0`,
                      }),
                    })
                  : (0, _.jsx)(`div`, {
                      className: _,
                      children: (0, _.jsx)(`div`, {
                        className: _,
                        children: `\xA0`,
                      }),
                    }),
              }),
            }),
            (0, _.jsx)(_, {
              toolTipContent: _(_, _),
              children: (0, _.jsx)(`div`, {
                className: _({
                  [_]: !0,
                  [_]: !_,
                }),
                children: _
                  ? (0, _.jsx)(_, {
                      _: _.TopNewReleases(_),
                      className: _,
                      children: (0, _.jsx)(`div`, {
                        className: _,
                        children: `\xA0`,
                      }),
                    })
                  : (0, _.jsx)(`div`, {
                      className: _,
                      children: (0, _.jsx)(`div`, {
                        className: _,
                        children: `\xA0`,
                      }),
                    }),
              }),
            }),
            (0, _.jsx)(_, {
              toolTipContent: _(`#SteamCharts_Monthly_Calendar`),
              minDate: _,
              maxDate: _(_),
              value: Math.floor(new Date(_, _, 15, 12, 0, 0).getTime() / 1e3),
              fnOnUpdate: (_) => {
                let _ = new Date(_ * 1e3),
                  _ = _(_.getFullYear(), _.getMonth());
                _(_.TopNewReleases(_));
              },
            }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  if (!_) return ``;
  let _ = new Date(_ * 1e3);
  return `${_.getUTCFullYear()}-${_.getUTCMonth() + 1}-${_.getUTCDate()}`;
}
function _(_) {
  return _ || `global`;
}
var _ = 2,
  _ = 60,
  _ = 2022;
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = `America/Los_Angeles`,
    _ = Number(
      new Intl.DateTimeFormat(`en-US`, {
        timeZone: _,
        year: `numeric`,
      }).format(_),
    ),
    _ =
      new Date(
        new Intl.DateTimeFormat(`en-US`, {
          timeZone: _,
          year: `numeric`,
          month: `2-digit`,
          day: `2-digit`,
        })
          .formatToParts(new Date(Date.UTC(_, 11, 31)))
          .reduce((_, _) => ((_[_.type] = _.value), _), {}).year +
          `-12-31T10:00:00`,
      ).getTime() -
      _ * 24 * 60 * 60 * 1e3;
  return _.getTime() >= _;
}
function _(_, _, _) {
  let _ = _ * 1e3,
    _ = new Date(_).getUTCFullYear();
  return (
    _ >= _ && _ < _ + 1 && (_ != _ || (_ && _.is_support && _(_, _)) || _(_, _))
  );
}
function _(_, _) {
  let _ = new Date().getUTCFullYear(),
    _ = [];
  for (let _ = _, _ = 0; _ >= _ && _ < _; _--, _++)
    _(_, _, !1) ? _.push(_) : _--;
  return _;
}
function _(_) {
  let {
    TopSellersStore: _,
    TopMonthlyReleasesStore: _,
    DynamicUserStore: _,
    children: _,
  } = _;
  _(_);
  let _ = _(_),
    _ = _.useMemo(
      () => ({
        content_descriptors_excluded: _,
      }),
      [_],
    ),
    _ = _.useRef(null);
  return (
    _.useEffect(() => {
      _.current && _.current.NavTree()?.Activate(!0);
    }, []),
    (0, _.jsxs)(_, {
      className: _,
      navRef: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsxs)(_, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  className: _,
                  children: (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsxs)(_, {
                      _: _.Overview(),
                      exact: !0,
                      activeClassName: _,
                      children: [
                        (0, _.jsx)(`span`, {
                          className: _(void 0),
                          children: (0, _.jsx)(_, {}),
                        }),
                        _(`#SteamCharts_Menu_Overview`),
                      ],
                    }),
                  }),
                }),
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {}),
                }),
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    TopSellersStore: _,
                  }),
                }),
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    TopMonthlyReleasesStore: _,
                  }),
                }),
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {}),
                }),
              ],
            }),
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _(_, `SteamChartsShell`),
          children: (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              defaultOptions: _,
              children: (0, _.jsx)(_, {
                children: _,
              }),
            }),
          }),
        }),
      ],
    })
  );
}
function _(_) {
  return _(() => _.ExcludedContentDescriptor);
}
function _() {
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#SteamCharts_Menu_LiveCharts`),
      }),
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            className: void 0,
            _: _.TopSelling(_.COUNTRY),
            activeClassName: _,
            children: [(0, _.jsx)(_, {}), _(`#SteamCharts_Menu_TopSelling`)],
          }),
          (0, _.jsxs)(_, {
            className: void 0,
            _: _.MostPlayed(),
            activeClassName: _,
            children: [(0, _.jsx)(_, {}), _(`#SteamCharts_Menu_MostPlayed`)],
          }),
          (0, _.jsxs)(_, {
            className: void 0,
            _: _.MostPlayedOnSteamDeck(),
            activeClassName: _,
            children: [
              (0, _.jsx)(_, {}),
              _(`#SteamCharts_Menu_MostPlayedOnDeck`),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { TopSellersStore: _ } = _,
    { rtCurrentWeek: _, bCountryListInitialized: _ } = _(_, _.COUNTRY);
  if (!_ || !_) return null;
  let _ = _(_.BIsValidTopSellersCountry(_.COUNTRY) ? _.COUNTRY : ``),
    _ = [];
  for (let _ = 0; _ < 3; _++) {
    let _ = _ - _ * 60 * 60 * 24 * 7;
    _.push(
      (0, _.jsxs)(
        _,
        {
          _: _.TopSellers(_, _(_)),
          activeClassName: _,
          fnCanTakeFocus: _,
          children: [
            (0, _.jsx)(`span`, {
              className: _(void 0),
              children: (0, _.jsx)(_, {
                color: `#C3D3D8`,
              }),
            }),
            _(_, {
              timeZone: `UTC`,
            }),
          ],
        },
        _,
      ),
    );
  }
  return (0, _.jsxs)(_, {
    className: _(_, _),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#SteamCharts_Menu_WeeklyCharts`),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let _ = _(_()),
    _ = [_, _ - 2592e3, _ - 5184e3];
  return (0, _.jsxs)(_, {
    className: _(_, _),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#SteamCharts_Menu_MonthlyCharts`),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: _.map((_) => {
          let _ = new Date(_ * 1e3),
            _ = _(_.getFullYear(), _.getMonth()),
            _ = _.TopNewReleases(_),
            _ = window.location.pathname === _;
          return (0, _.jsxs)(
            _,
            {
              className: _ ? _ : ``,
              _: _,
              fnCanTakeFocus: _,
              children: [
                (0, _.jsx)(`span`, {
                  className: _(void 0),
                  children: (0, _.jsx)(_, {
                    color: `#C3D3D8`,
                  }),
                }),
                _(_),
              ],
            },
            `month_` + _,
          );
        }),
      }),
    ],
  });
}
function _(_) {
  let _ = _(),
    _ = (0, _.useMemo)(() => _(_, 3), [_]);
  return (0, _.jsxs)(_, {
    className: _(_, _),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#SteamCharts_Menu_YearlyCharts`),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: _.map((_) => {
          let _ = _.BestOfYear(`` + _),
            _ = window.location.pathname === _;
          return (0, _.jsxs)(
            _,
            {
              className: _(_ ? _ : ``),
              _: _,
              fnCanTakeFocus: _,
              children: [
                (0, _.jsx)(`span`, {
                  className: _(void 0),
                  children: (0, _.jsx)(_, {
                    color: `#C3D3D8`,
                  }),
                }),
                _,
              ],
            },
            _,
          );
        }),
      }),
    ],
  });
}
function _(_, _, _) {
  let _ = _(_, 1, `` + _, _()),
    _ = {
      ..._(`tabs`, ``),
      tabs: [],
    };
  return (
    _.forEach((_, _) => {
      _.tabs.push({
        unique_id: _ + 1,
        default_label: _.strTabTitleToken,
        localized_label: [],
        capsules: [],
      });
    }),
    (_.jsondata.sale_sections = [_]),
    _.forEach((_, _) => {
      let {
          rgFilteredCombinedAppsAndDLC: _,
          rgFilteredAppIDByTier: _,
          rgFilteredDLCsAppIDs: _,
        } = _,
        _ = new Set(_),
        _ = [..._, ..._];
      _.jsondata.sale_sections.push({
        ..._(`text_section`, ``),
        text_section_contents: [_(_.strTabSubTitleToken, _, _ + 1)],
        show_on_tabs: [_ + 1],
        show_deck_compability_details: !!_.bShowDeckCompat,
        prefer_assets_without_overrides: !0,
      });
      for (let _ in _) {
        let _ = _[_];
        _.jsondata.sale_sections.push({
          ..._(`items`, `#SteamCharts_Yearly_Rank_` + _),
          capsules: _.map((_) => ({
            _: _,
            type: _.has(_) ? `dlc` : `game`,
          })),
          capsules_per_row_array: _ == `3` || _ == `0` ? [4] : [3],
          capsule_style_per_row_array: _ == `0` ? [`tall`] : [`grid`],
          show_as_carousel: !1,
          use_random_order: !0,
          border_width: 1,
          default_subtitle: `#SteamCharts_Yearly_Rank_` + _ + `_subtitle`,
          show_on_tabs: [_.tabs[_].unique_id],
          sale_section_classname: _(Number.parseInt(_)),
          prefer_assets_without_overrides: !0,
          show_deck_compability_details: !!_.bShowDeckCompat,
          show_as_demos: !!_.bShowDemoInfo,
          prefer_demo_store_page: !!_.bShowDemoInfo,
        });
      }
      _(
        _,
        _,
        _,
        _,
        !0,
        _.tabs[_].unique_id,
        !!_.bShowDeckCompat,
        !!_.bShowDemoInfo,
      ),
        _(
          _,
          _,
          _,
          _,
          !0,
          _.tabs[_].unique_id,
          !!_.bShowDeckCompat,
          !!_.bShowDemoInfo,
        ),
        _(
          _,
          _,
          _,
          _,
          !0,
          _.tabs[_].unique_id,
          !!_.bShowDeckCompat,
          !!_.bShowDemoInfo,
        );
    }),
    _.jsondata.sale_sections.push({
      ..._(`text_section`, ``),
      text_section_contents: [
        _(`#SteamCharts_Yearly_FAQ`) +
          `
[url=${_.HELP_BASE_URL}faqs/view/6C17-2BC1-2A01-9B76]${_(`#SteamCharts_Yearly_FAQ_link`)}[/url]`,
      ],
    }),
    _.jsondata.sale_sections.push({
      ..._(`social_share`, `#EventDisplay_Share_WithFriendsHeader`),
      social_share: _(),
    }),
    _
  );
}
function _(_, _, _) {
  let { data: _ } = _({
    queryKey: [`useYearEventModel`, _],
    queryFn: () => {
      try {
        return _(_, _, _);
      } catch (_) {
        return console.error(`Yearly new release: ${_} failed: `, _), null;
      }
    },
  });
  return _;
}
function _(_) {
  let { rgTabsData: _, nYear: _, facets: _ } = _,
    _ = _(_, _, _),
    _ = _(_.LANGUAGE);
  return _
    ? (0, _.jsx)(_, {
        eventModel: _,
        language: _,
        bIsPreview: !1,
        bDynamicallyCreatedSale: !0,
      })
    : _ === null
      ? (0, _.jsx)(`div`, {
          className: _,
          children: _(`#Error_ErrorCommunicatingWithNetwork`),
        })
      : (0, _.jsx)(_, {
          string: _(`#Loading`),
          position: `center`,
        });
}
function _(_) {
  let { salePageName: _, TopYearlyReleasesStore: _ } = _,
    _ = _(),
    _ = Number.parseInt(_),
    _ = _();
  return _(_, _, !0)
    ? (0, _.jsx)(_, {
        nYear: _,
        TopYearlyReleasesStore: _,
      })
    : (_(_.Overview(), {
        bReplace: !0,
      }),
      (0, _.jsx)(`div`, {
        children: _(`#SteamCharts_Yearly_Unavailable`),
      }));
}
var _ = {
  ..._,
  apply_user_filters: !0,
  include_assets_without_overrides: !0,
};
function _(_, _, _, _) {
  let _ = _?.filter((_) => _.type == _),
    _ = [],
    _ = [];
  return {
    strTabTitleToken: _,
    strTabSubTitleToken: _,
    rgFilteredCombinedAppsAndDLC: _?.filter(
      (_) => !_.Get().BIsAppMissing(_.appid),
    ).map((_) => {
      let _ = _.app_release_rank;
      return (
        _ == 4 && (_ = 0),
        _[_] || (_[_] = []),
        _[_].push(_.appid),
        _.Get().GetApp(_.appid)?.GetAppType() == 4 && _.push(_.appid),
        _.appid
      );
    }),
    rgFilteredAppIDByTier: _,
    rgFilteredDLCsAppIDs: _,
  };
}
function _(_, _) {
  let _ = _ + 1,
    _ = new Date(Date.UTC(_, 0, _, 1, 0, 0)),
    _ = new Intl.DateTimeFormat(`en-US`, {
      timeZone: `America/Los_Angeles`,
      year: `numeric`,
      month: `2-digit`,
      day: `2-digit`,
      hour: `2-digit`,
      minute: `2-digit`,
      second: `2-digit`,
      hour12: !1,
    }).formatToParts(_),
    _ = (_) => Number(_.find((_) => _.type === _).value),
    _ = Date.UTC(
      _(`year`),
      _(`month`) - 1,
      _(`day`),
      _(`hour`),
      _(`minute`),
      _(`second`),
    );
  return Math.floor(_ / 1e3);
}
function _(_, _, _) {
  let _ = _(),
    _ = _ < _(_, 1),
    _ = _ < _(_, 15),
    _ = _(_, _),
    _ = (0, _.useMemo)(
      () =>
        _
          ? Array.from(
              new Set([
                ...(_.top_dlc_releases?.map((_) => _.appid) || []),
                ...(_.top_combined_app_and_dlc_releases?.map((_) => _.appid) ||
                  []),
                ...(_.top_app_list?.map((_) => _.appid) || []),
              ]),
            )
          : (_ && _(null), []),
      [_, _],
    ),
    _ = _(_, _);
  return {
    rgAppIDs: _,
    rgYearlyReleases: _,
    rgTabsData: (0, _.useMemo)(() => {
      if (!_ || _ == 1) return [];
      let _ = _?.top_combined_app_and_dlc_releases || [],
        _ = [],
        _ = _.filter((_) => !_.Get().BIsAppMissing(_.appid)).map((_) => {
          let _ = _.app_release_rank;
          return (
            _ == 4 && (_ = 0), _[_] || (_[_] = []), _[_].push(_.appid), _.appid
          );
        }),
        _ = [
          {
            strTabTitleToken: `#SteamCharts_Yearly_Tab_NewReleases`,
            strTabSubTitleToken: _
              ? `#SteamCharts_Yearly_Tab_NewReleases_desc_pre`
              : `#SteamCharts_Yearly_Tab_NewReleases_desc`,
            rgFilteredDLCsAppIDs:
              _.top_dlc_releases
                ?.filter((_) => !_.Get().BIsAppMissing(_.appid))
                .map((_) => _.appid) || [],
            rgFilteredCombinedAppsAndDLC: _,
            rgFilteredAppIDByTier: _,
          },
        ],
        _ = _(
          1,
          `#SteamCharts_Yearly_Tab_TopSellers`,
          _
            ? `#SteamCharts_Yearly_Tab_TopSellers_desc_pre`
            : `#SteamCharts_Yearly_Tab_TopSellers_desc`,
          _.top_app_list,
        );
      return (
        _.rgFilteredCombinedAppsAndDLC?.length > 0 && _.push(_),
        (_ = _(
          2,
          `#SteamCharts_Yearly_Tab_MostPlayed`,
          `#SteamCharts_Yearly_Tab_MostPlayed_desc`,
          _.top_app_list,
        )),
        _.rgFilteredCombinedAppsAndDLC?.length > 0 && _.push(_),
        (_ = _(
          3,
          `#SteamCharts_Yearly_Tab_SteamDeck`,
          `#SteamCharts_Yearly_Tab_SteamDeck_desc`,
          _.top_app_list,
        )),
        _.rgFilteredCombinedAppsAndDLC?.length > 0 &&
          ((_.bShowDeckCompat = !0), _.push(_)),
        (_ = _(
          4,
          `#SteamCharts_Yearly_Tab_Controller`,
          `#SteamCharts_Yearly_Tab_Controller_desc`,
          _.top_app_list,
        )),
        _.rgFilteredCombinedAppsAndDLC?.length > 0 && _.push(_),
        (_ = _(
          5,
          `#SteamCharts_Yearly_Tab_VR`,
          `#SteamCharts_Yearly_Tab_VR_desc`,
          _.top_app_list,
        )),
        _.rgFilteredCombinedAppsAndDLC?.length > 0 && _.push(_),
        (_ = _(
          6,
          `#SteamCharts_Yearly_Tab_Demo`,
          `#SteamCharts_Yearly_Tab_Demo_desc`,
          _.top_app_list,
        )),
        _.rgFilteredCombinedAppsAndDLC?.length > 0 &&
          ((_.bShowDemoInfo = !0), _.push(_)),
        _
      );
    }, [_, _, _, _]),
    loadState: _,
  };
}
function _(_) {
  let { nYear: _, TopYearlyReleasesStore: _ } = _,
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    { rgAppIDs: _, rgYearlyReleases: _, rgTabsData: _, loadState: _ } = _(_, _);
  return (
    (0, _.useEffect)(() => {
      _ ||
        _({
          bForceFeatureTagForFullController: !1,
        }).then(_);
    }, [_]),
    _(_, _, _?.[0]?.rgFilteredDLCsAppIDs, _),
    !_ || _ == 1 || !_ || _ == null || !_
      ? (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              nYear: _,
            }),
            (0, _.jsx)(_, {
              string: _(`#Loading`),
              position: `center`,
            }),
          ],
        })
      : _.length == 0
        ? (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                nYear: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#Error_ErrorCommunicatingWithNetwork`),
              }),
            ],
          })
        : (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                rgAppIDs: _[0].rgFilteredCombinedAppsAndDLC,
                bTallCapsule: !0,
                bBlurCapsules: !1,
                children: (0, _.jsx)(_, {
                  nYear: _,
                }),
              }),
              (0, _.jsx)(_, {
                facets: _,
                nYear: _,
                rgTabsData: _,
              }),
            ],
          })
  );
}
function _(_) {
  let { nYear: _ } = _,
    _ = _(),
    _ = _(),
    [_] = _(`tab`, 1),
    _ = _ + 1,
    _ = _(_, _, !0),
    _ = _ - 1,
    _ = _(_, _, !0),
    _ = _() || _(window),
    _ = (0, _.useCallback)(
      (_) => {
        _.active_modal ||
          (_ && _
            ? _(_.BestOfYear(`` + _))
            : !_ && _ && _(_.BestOfYear(`` + _)));
      },
      [_.active_modal, _, _, _, _, _],
    );
  _(`ArrowLeft`, () => _(!1), !0, !0),
    _(`Left`, () => _(!1), !0, !0),
    _(`ArrowRight`, () => _(!0), !0, !0),
    _(`Right`, () => _(!0), !0, !0);
  let _ = _ == 1 ? `` : `?tab=${_}`;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`svg`, {
            viewBox: `0 0 100 100`,
            className: _,
            children: (0, _.jsx)(`polygon`, {
              points: `50,35 100,100 0,100`,
            }),
          }),
          (0, _.jsx)(`div`, {
            className: _(_, _),
            children: (0, _.jsx)(`h1`, {
              children: _(`#SteamCharts_Yearly_Title`, _),
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _(_),
            children: [
              _(`#SteamCharts_Yearly_SubTitle`, 100),
              (0, _.jsx)(`br`, {}),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            toolTipContent: _(`#SteamCharts_Yearly_Title`, _),
            children: (0, _.jsx)(`div`, {
              className: _({
                [_]: !0,
                [_]: !_,
              }),
              children: _
                ? (0, _.jsx)(_, {
                    _: _.BestOfYear(`` + _) + _,
                    className: _,
                    children: (0, _.jsx)(`div`, {
                      className: _,
                      children: `\xA0`,
                    }),
                  })
                : (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(`div`, {
                      className: _,
                      children: `\xA0`,
                    }),
                  }),
            }),
          }),
          (0, _.jsx)(_, {
            toolTipContent: _(`#SteamCharts_Yearly_Title`, _),
            children: (0, _.jsx)(`div`, {
              className: _({
                [_]: !0,
                [_]: !_,
              }),
              children: _
                ? (0, _.jsx)(_, {
                    _: _.BestOfYear(`` + _) + _,
                    className: _,
                    children: (0, _.jsx)(`div`, {
                      className: _,
                      children: `\xA0`,
                    }),
                  })
                : (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(`div`, {
                      className: _,
                      children: `\xA0`,
                    }),
                  }),
            }),
          }),
        ],
      }),
    ],
  });
}
var _ = {
  Overview: () => `${_.SteamCharts()}`,
  MostPlayed: () => `${_.SteamCharts()}mostplayed`,
  MostPlayedOnSteamDeck: (_) =>
    `${_.SteamCharts()}steamdecktopplayed${_ ? `/` + _ : ``}`,
  TopSelling: (_) => `${_.SteamCharts()}topselling/${_}`,
  TopSellers: (_, _) => `${_.SteamCharts()}topsellers/${_}${_ ? `/` + _ : ``}`,
  TopNewReleases: (_) => `${_.SteamCharts()}topnewreleases/${_}`,
  BestOfYear: (_) => `${_.SteamCharts()}bestofyear/${_}`,
};
async function _(_, _) {
  let _ = new _();
  return await _.Initialize(_, _), _;
}
function _(_) {
  let [_, _] = (0, _.useState)(void 0),
    _ = _(),
    _ = _();
  if (
    ((0, _.useEffect)(() => {
      _(_, _).then((_) => _(_));
    }, [_, _]),
    !_)
  )
    return null;
  let _ = _,
    {
      TopSellersStore: _,
      DynamicUserStore: _,
      TopMonthlyReleasesStore: _,
      TopYearlyReleasesStore: _,
    } = _;
  return (0, _.jsxs)(_, {
    TopSellersStore: _,
    DynamicUserStore: _,
    TopMonthlyReleasesStore: _,
    children: [
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {
        domain: `store.steampowered.com`,
        controller: `steamcharts`,
        children: (0, _.jsx)(_.Suspense, {
          fallback: null,
          children: (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                path: `${_.TopNewReleases(`:salePagename`)}`,
                render: (_) => {
                  let {
                    match: {
                      params: { salePagename: _ },
                    },
                  } = _;
                  return (0, _.jsx)(_, {
                    method: `monthlytopreleases`,
                    children: (0, _.jsx)(_, {
                      children: (0, _.jsx)(_, {
                        salePageName: _,
                        TopMonthlyReleasesStore: _,
                      }),
                    }),
                  });
                },
              }),
              (0, _.jsx)(_, {
                path: `${_.BestOfYear(`:salePagename`)}`,
                render: (_) => {
                  let {
                    match: {
                      params: { salePagename: _ },
                    },
                  } = _;
                  return (0, _.jsx)(_, {
                    method: `bestofyear`,
                    children: (0, _.jsx)(_, {
                      children: (0, _.jsx)(_, {
                        salePageName: _,
                        TopYearlyReleasesStore: _,
                      }),
                    }),
                  });
                },
              }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {}),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function _() {
  let { pathname: _ } = _();
  return (
    _.useEffect(() => {
      window.ScrollToTopStoreMobileAware === void 0
        ? window.scrollTo(0, 0)
        : window.ScrollToTopStoreMobileAware();
    }, [_]),
    null
  );
}
export { _ as SteamChartsRoutes, _ as default };
