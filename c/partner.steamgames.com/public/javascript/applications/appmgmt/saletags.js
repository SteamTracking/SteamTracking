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
} from "./chunk~de7f2df91c.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~25a6634263.js";
import { _, _, _, _ } from "./chunk~68b7e78d68.js";
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
} from "./chunk~1fa4b8f2ff.js";
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
} from "./chunk~0a99e05c44.js";
import { _, _, _, _, _, _ } from "./chunk~9a06851bec.js";
import { _, _, _, _, _, _, _ } from "./chunk~44f252525d.js";
import { _, _, _ } from "./chunk~f8b6a4beb3.js";
import { _ } from "./chunk~8fb30ea08b.js";
import { _ } from "./chunk~ede3e357a2.js";
import { _ } from "./chunk~9aa05d2c7d.js";
import { _ } from "./chunk~6257ebd2d4.js";
import { _ } from "./chunk~4406a7b793.js";
import { _, _, _ } from "./chunk~428594b857.js";
import { _, _ } from "./chunk~d9c3dab17a.js";
import { _, _, _, _, _, _, _, _ } from "./chunk~a825a84845.js";
import "./chunk~b7c2818157.js";
import { _, _ } from "./chunk~b390ee0f78.js";
import { _ } from "./chunk~90b9831ad2.js";
import { _ } from "./chunk~e29b7ee76a.js";
import { _ } from "./chunk~8681f5c764.js";
import { _, _ } from "./chunk~2201b8cb3d.js";
import { _ } from "./chunk~f4e4ed5c17.js";
import { _ } from "./chunk~92931c6310.js";
import { _ } from "./chunk~c55709d290.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~38a44beba7.js";
import { _, _, _, _, _ } from "./chunk~8ceeb46076.js";
import { _ } from "./chunk~2f8c67b4de.js";
import "./chunk~a6b9ae1345.js";
import { _ } from "./chunk~0278ae6236.js";
import { _ } from "./chunk~ada233e34d.js";
function _(_) {
  return !!_;
}
var _ = _(_(), 1),
  _ = (0, _.createContext)(void 0);
_.Provider;
function _() {
  let _ = (0, _.useContext)(_);
  if (!_)
    throw Error(`called useActiveAccount outside of ActiveAccountProvider`);
  return _.useActiveAccount();
}
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
var _ = [4, 3];
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
var _ = _(_(), 1),
  _ = _();
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
function _(_, _) {
  let { data: _ } = _(_);
  return _ && _[_];
}
var _ = {};
((_.arabic = () =>
  _(() => import(`./chunk~d5ba2f56ae.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./chunk~39c120e92a.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./chunk~78cb7e4228.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./chunk~d8eff1052f.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./chunk~86d0580964.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./chunk~005813ba41.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./chunk~452b18c286.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./chunk~acbdc00a18.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./chunk~17125a4191.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./chunk~52ab00b62c.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./chunk~cded0e728a.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./chunk~95e95aa3e8.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./chunk~1bf0266f4e.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./chunk~0080cf5344.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./chunk~8b3750bb52.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./chunk~2724a6c2c8.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./chunk~ef055f68a2.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./chunk~ca69d45f89.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./chunk~65c6814551.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./chunk~76a251fdd1.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./chunk~2483e21f7e.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./chunk~9a3fef5eb3.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./chunk~e56e1e47d1.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./chunk~da6504af84.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./chunk~ff125744c0.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./chunk~e2f1f1b489.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./chunk~190fdb38ac.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./chunk~643cb0252e.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./chunk~80a1517842.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./chunk~7c426f534c.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./chunk~170b3740ac.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./chunk~57cbf4b218.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = {
    PerYear: 31536e3,
    PerMonth: 2628e3,
    PerWeek: 604800,
    PerDay: 86400,
    PerHour: 3600,
    PerMinute: 60,
  };
function _(_, _, _) {
  let _;
  _ =
    _ === void 0 || _ === !0 || _ === !1
      ? {
          weekday: _ ? `long` : `short`,
          year: _ ? void 0 : `numeric`,
        }
      : _;
  let _ = new Date(_ * 1e3),
    _ = {
      weekday: `short`,
      month: `long`,
      day: `numeric`,
      year: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      year: `numeric`,
      month: `short`,
      day: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_) {
  let _ = new Date();
  return (
    _.setHours(15),
    _.toLocaleTimeString(_, {
      hour: `numeric`,
    }) ==
      _.toLocaleTimeString(_, {
        hour: `numeric`,
        hour12: !1,
      })
  );
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      hour: `numeric`,
      minute: `2-digit`,
      hourCycle: `h23`,
    },
    _ = {
      hour: `numeric`,
      minute: `2-digit`,
    },
    _ = _(),
    _ = {
      ...(_?.bForce24HourClock || _(_[0]) ? _ : _),
      ..._,
    };
  return _.toLocaleTimeString(_, _);
}
function _(_) {
  return _.toLocaleDateString(_(), {
    month: `long`,
    year: `numeric`,
  });
}
function _(_) {
  let _ = Math.floor(_ / _.PerYear),
    _ = Math.floor(_ / _.PerMonth),
    _ = Math.floor((_ % _.PerMonth) / _.PerDay),
    _ = Math.floor((_ % _.PerDay) / _.PerHour),
    _ = Math.floor((_ % _.PerHour) / _.PerMinute);
  return (
    (_ %= _.PerMinute),
    _ > 0
      ? _.Localize(`#TimeRemaining_MoreThanOneYear`)
      : _ > 0
        ? _.Localize(`#TimeRemaining_MonthsDays`, _, _)
        : _ > 0
          ? _.Localize(
              `#TimeRemaining_DaysHoursMinutes`,
              _,
              _.toString().padStart(2, `0`),
              _.toString().padStart(2, `0`),
            )
          : _ > 0
            ? _.Localize(
                `#TimeRemaining_HoursMinutesSeconds`,
                _.toString().padStart(2, `0`),
                _.toString().padStart(2, `0`),
                _.toString().padStart(2, `0`),
              )
            : _.Localize(
                `#TimeRemaining_MinutesSeconds`,
                _.toString().padStart(2, `0`),
                _.toString().padStart(2, `0`),
              )
  );
}
function _(_, _) {
  if (_[_]) {
    if (_ == `community_icon`) {
      let _ = _.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${_[_]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${_.MEDIA_CDN_COMMUNITY_URL}${_}`;
    }
    if (typeof _[_] == `string`) {
      let _ = _.asset_url_format.replace("${FILENAME}", _[_]);
      return `${_.STORE_ITEM_BASE_URL}${_}`;
    }
  }
}
function _(_, _ = `full`) {
  let _ = ``;
  switch (_) {
    case `thumb`:
      _ = `.116x65`;
      break;
    case `600x338`:
      _ = `.600x338`;
      break;
    case `1920x1080`:
      _ = `.1920x1080`;
      break;
    case `full`:
      _ = ``;
      break;
    default:
      _(_, `Invalid size: ${_}`);
  }
  return (
    _.STORE_ITEM_BASE_URL + _.filename.replace(/\.([^.]+)(\?.*)?$/, `${_}.$1$2`)
  );
}
function _(_) {
  let { data: _ } = _(_),
    _ = _();
  if (_)
    return [
      ...(_.all_ages_screenshots || []),
      ...(!_ && _.mature_content_screenshots
        ? _.mature_content_screenshots
        : []),
    ].sort((_, _) => _.ordinal - _.ordinal);
}
var _ = `qkhMGgZoiEA-`,
  _ = `dR7N9Ozyb6k-`,
  _ = `_8j-XyEfRwfE-`;
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    className: _,
    type: `button`,
    ..._,
    children: (0, _.jsx)(`span`, {
      children: _,
    }),
  });
}
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    className: _,
    type: `button`,
    ..._,
    children: (0, _.jsx)(`span`, {
      children: _,
    }),
  });
}
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    className: _,
    type: `button`,
    ..._,
    children: (0, _.jsx)(`span`, {
      children: _,
    }),
  });
}
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `700px`;
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
var _ = `_8Wp5WbqAbJA-`,
  _ = `UYfcYZDtfbs-`,
  _ = `O-TsWDon65A-`,
  _ = `E8DrK8oV4Hs-`,
  _ = `XTfMA1ObAn4-`,
  _ = `-Rv33oXsbT0-`,
  _ = `MN6Xv-pm6i8-`,
  _ = `uvLRAREPa4E-`,
  _ = `UFAsjplGzxc-`,
  _ = `vL-XYGsLedM-`,
  _ = `aCttqIa8NC4-`,
  _ = `ncKEDk26SHQ-`,
  _ = `fNtXEMzHz58-`,
  _ = `jrHvWWIOlw4-`,
  _ = `FOKKfGVYUDk-`,
  _ = `OClIuwfiMKQ-`,
  _ = `ZLlm68-AqhM-`,
  _ = `raYV6Y-MQ7I-`,
  _ = `IWFCYfhR05U-`,
  _ = `KtOQKgU1W5w-`,
  _ = `jXpKqo3-cWA-`,
  _ = `QwN0eH2k0O0-`,
  _ = `sgCiKk3DUeg-`,
  _ = `A8oyzoRvWQ8-`,
  _ = `V7rq-SSC9xQ-`,
  _ = `pNXxwljIaD8-`,
  _ = `lsjYiHotCwA-`,
  _ = `iVV26V5rbpU-`,
  _ = `XosTQwEOBO0-`,
  _ = `ITE-CUK3U10-`,
  _ = `BZ9dZKOmXqE-`,
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
  _ = `BD3vXqZ-6yI-`,
  _ = `l9by-6sJDpM-`,
  _ = `LCYi5cxHqgI-`,
  _ = `ZuMhm9DQqbw-`,
  _ = `eASrfjoxe3o-`,
  _ = `ppO76q5Y-Zg-`,
  _ = `WWolAsqP274-`,
  _ = `RIck6AI1vX8-`,
  _ = `Sndyr6iqn8g-`,
  _ = `qUsoY9s6daM-`,
  _ = `tUIs-i3NWoU-`,
  _ = `_8o-dkC5O1co-`,
  _ = `v7ul8g8zqHs-`,
  _ = `-cW4bgqyLAo-`,
  _ = `aN31caRmRcQ-`,
  _ = `tobj1evrU4w-`,
  _ = `RAahmG4F6sc-`,
  _ = `GL0tHV4bOk8-`,
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
        _.prototype.accountid_giftee || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid_giftee: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            gift_message: {
              _: 2,
              _: _,
            },
            time_scheduled_send: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            email_giftee: {
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
      return `CartGiftInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gifteename || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gifteename: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            message: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            sentiment: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            signature: {
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
      return `CartGiftMessage`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.amount_in_cents || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            amount_in_cents: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            currency_code: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            formatted_amount: {
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
      return `CartAmount`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.couponid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            couponid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            gidcoupon: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            title: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            coupon_description: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            large_icon_url: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            discount_pct: {
              _: 8,
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
      return `CartCoupon`;
    }
  },
  _ = class _ extends _.Message {
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
var _ = _.createContext({
  AddImpression: () => {
    console.log(`Impression Tracking not enabled`);
  },
  BIsValid: () => !1,
});
function _() {
  return _.useContext(_);
}
function _(_) {
  let { appID: _, feature: _, depth: _, children: _ } = _,
    _ = _(_, _),
    _ = _(),
    [_, _] = _.useState(void 0),
    _ = _.useCallback(
      (_) => {
        _.isIntersecting &&
          _((_) =>
            _?.appID == _ && _?.snr == _
              ? _
              : {
                  appID: _,
                  snr: _,
                },
          );
      },
      [_, _],
    );
  (0, _.useEffect)(() => {
    _ && _.appID != null && _.AddImpression(_.appID, _.snr);
  }, [_, _]);
  let _ = _(_),
    _ = _ && (!_ || (_.appID != _ && _.snr != _)),
    _ = _(_.props.ref, _ ? _ : void 0);
  return _.cloneElement(_, {
    ref: _,
  });
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
function _(_, _ = !1) {
  if (_)
    return _ && _(_)
      ? `${_.STORE_BASE_URL}app/${_(_)[0]}`
      : `${_.STORE_BASE_URL}${_.store_url_path}`;
}
function _() {
  window.location.href = `${_.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
}
var _ = _.createContext({});
function _() {
  return _.useContext(_);
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
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid_requester || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid_requester: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            purchase_request_id: {
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
      return `CShoppingCart_CreateNew_Request`;
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
      return `CShoppingCart_CreateNew_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.amount || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            amount: {
              _: 1,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            currencycode: {
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
      return `CShoppingCart_Amount`;
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
            costwhenadded: {
              _: 2,
              _: _,
            },
            is_gift: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            gidbundle: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            quantity: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            gift_info: {
              _: 6,
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
      return `CShoppingCart_PackageItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.walletcredit || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            walletcredit: {
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
      return `CShoppingCart_WalletCreditItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.couponid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            couponid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            gidcoupontarget: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            packageid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            gidcoupon: {
              _: 4,
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
      return `CShoppingCart_CouponItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.microtxnappid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            microtxnappid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            microtxnassetclassid: {
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
      return `CShoppingCart_MicroTxnAsset`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.bundleid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bundleid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            quantity: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            is_gift: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            gift_info: {
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
      return `CShoppingCart_BundleItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.reward_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            reward_id: {
              _: 1,
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
      return `CShoppingCart_LoyaltyRewardItem`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gidparent || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gidparent: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            children: {
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
      return `CShoppingCart_RelationShip`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.couponid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            couponid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            gidcoupon: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidlineitem: {
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
      return `CShoppingCart_AvailableCoupon`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gidlineitem || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gidlineitem: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            package_item: {
              _: 2,
              _: _,
            },
            wallet_credit_item: {
              _: 3,
              _: _,
            },
            coupon_item: {
              _: 4,
              _: _,
            },
            micro_item: {
              _: 5,
              _: _,
            },
            bundle_item: {
              _: 7,
              _: _,
            },
            loyalty_item: {
              _: 8,
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
      return `CShoppingCart_Item`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.coupons || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            coupons: {
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
      return `CShoppingCart_Potentials`;
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
      return `CShoppingCart_GetContents_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.lineitems || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            lineitems: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            treeview: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            potentials: {
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
      return `CShoppingCart_Contents`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            contents: {
              _: 2,
              _: _,
            },
            time_created: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            merged_into_account_cart: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            steamid_requester: {
              _: 5,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            purchase_request_id: {
              _: 6,
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
      return `CShoppingCart_GetContents_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gidshoppingcart || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            browserid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            cart_items: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            store_country_code: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            beta_mode: {
              _: 6,
              _: !1,
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
      return `CShoppingCart_AddPackages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gidshoppingcart || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            contents: {
              _: 2,
              _: _,
            },
            result_details: {
              _: 3,
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
      return `CShoppingCart_AddPackages_Response`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidlineitem: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            quantity: {
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
      return `CShoppingCart_UpdatePackageQuantity_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gidshoppingcart || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            contents: {
              _: 2,
              _: _,
            },
            result_details: {
              _: 3,
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
      return `CShoppingCart_UpdatePackageQuantity_Response`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            bundleid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            browserid: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            store_country: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            quantity: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            beta_mode: {
              _: 7,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            gift_info: {
              _: 8,
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
      return `CShoppingCart_AddBundle_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.contents || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            contents: {
              _: 1,
              _: _,
            },
            result_details: {
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
      return `CShoppingCart_AddBundle_Response`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidlineitem: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gift_info: {
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
      return `CShoppingCart_ModifyLineItem_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.contents || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            contents: {
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
      return `CShoppingCart_ModifyLineItem_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gidshoppingcart || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidlineitems: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            browserid: {
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
      return `CShoppingCart_RemoveLineItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.contents || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            contents: {
              _: 1,
              _: _,
            },
            result_details: {
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
      return `CShoppingCart_RemoveLineItems_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`ShoppingCart.CreateNewShoppingCart#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.CreateNewShoppingCart = _;
  function _(_, _, _) {
    return _.SendMsg(`ShoppingCart.GetShoppingCartContents#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetShoppingCartContents = _;
  function _(_, _, _) {
    return _.SendMsg(`ShoppingCart.AddPackages#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.AddPackages = _;
  function _(_, _, _) {
    return _.SendMsg(`ShoppingCart.UpdatePackageQuantity#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.UpdatePackageQuantity = _;
  function _(_, _, _) {
    return _.SendMsg(`ShoppingCart.AddBundle#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.AddBundle = _;
  function _(_, _, _) {
    return _.SendMsg(`ShoppingCart.ModifyLineItem#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.ModifyLineItem = _;
  function _(_, _, _) {
    return _.SendMsg(`ShoppingCart.RemoveLineItems#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.RemoveLineItems = _;
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
function _(_, _, _) {
  return _(_ ? `${_.STORE_BASE_URL}${_.store_url_path}` : void 0, _, _);
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
async function _(_) {
  return _(
    `${_.COMMUNITY_BASE_URL}ogg/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _(_) {
  let _ = _.InitFromClanID(_, _.EUNIVERSE);
  return _(
    `${_.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _(_) {
  return _(
    `${_.COMMUNITY_BASE_URL}groups/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _(_) {
  return _(
    `${_.COMMUNITY_BASE_URL}games/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _(_) {
  let _ = await fetch(_, {
    method: `GET`,
  });
  if (_.status == 404) return null;
  if (!_._) throw Error(`Server returned ${_.status}`);
  let _ = await _.json();
  return _.success == 1 ? _ : null;
}
function _(_) {
  return [`clantoclaninfo`, _];
}
function _(_) {
  return [`apptoclanid`, _];
}
function _(_, _ = `group`) {
  return [`vanitytoclanid`, _, _?.toLocaleLowerCase()];
}
function _(_) {
  let _ = _?.[0];
  return _ == `clantoclaninfo` || _ == `apptoclanid` || _ == `vanitytoclanid`;
}
var _ = new WeakSet();
function _(_) {
  if (!_.has(_)) {
    _.add(_);
    for (let _ of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      _.setQueryDefaults(_, {
        staleTime: 1 / 0,
        gcTime: 1 / 0,
        retry: !1,
      });
  }
}
var _ = new WeakMap();
function _(_) {
  if (!_) return null;
  let _ = _.get(_);
  return (
    _ ||
      ((_ = {
        ..._,
        clanSteamID: _.clanSteamIDString
          ? new _(_.clanSteamIDString)
          : _.InitFromClanID(_.clanAccountID, _.EUNIVERSE),
      }),
      _.set(_, _)),
    _
  );
}
function _(_) {
  let { msg: _, success: _, ..._ } = _;
  return {
    ..._,
    rss_language: _.rss_language ? _.rss_language : 0,
  };
}
function _(_, _) {
  if (!_) return null;
  _(_);
  let _ = _(_);
  return (
    _.setQueryData(_(_.clanAccountID), _),
    _.appid && _.setQueryData(_(_.appid), _.clanAccountID),
    _.vanity_url && _.setQueryData(_(_.vanity_url, `group`), _.clanAccountID),
    _
  );
}
function _(_, _) {
  for (let _ of _) _(_, _);
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _) {
  return (
    _(_),
    {
      queryKey: _(_ ?? null),
      queryFn: async () => (_ ? _(_, await _(_)) : null),
      enabled: _ !== void 0,
      select: _,
    }
  );
}
function _(_, _) {
  return (
    _(_),
    {
      queryKey: _(_),
      queryFn: async () => _(_, await _(_))?.clanAccountID ?? null,
      enabled: !!_,
    }
  );
}
function _(_, _, _ = `group`) {
  return (
    _(_),
    {
      queryKey: _(_, _),
      queryFn: async () => {
        if (_ == `store`) {
          let _ = _.getQueryData(_(_, `group`));
          if (_) return _;
        }
        return (
          _(_, _ == `store` ? await _(_) : await _(_))?.clanAccountID ?? null
        );
      },
      enabled: !!_,
    }
  );
}
function _(_) {
  return _.isPending ? void 0 : (_.data ?? null);
}
function _(_) {
  let _ = _(),
    _ = _(_(_, _));
  return _(_ ? _(_) : void 0);
}
function _(_, _ = `group`) {
  let _ = _(),
    _ = _(_(_, _, _));
  return _(_ ? _(_) : void 0);
}
function _(_, _) {
  if (_) return _(_.getQueryData(_(_))) ?? void 0;
}
function _(_, _) {
  if (_) return _(_.getQueryData(_(_)), _);
}
function _(_, _, _) {
  if (!_) return;
  let _ = _ ? [_] : [`store`, `group`];
  for (let _ of _) {
    let _ = _(_.getQueryData(_(_, _)), _);
    if (_) return _;
  }
}
async function _(_, _) {
  return _ ? _(await _.fetchQuery(_(_, _))) : null;
}
async function _(_, _) {
  return _ ? _(await _.fetchQuery(_(_, _)), _) : null;
}
async function _(_, _, _ = `group`) {
  return _ ? _(await _.fetchQuery(_(_, _, _)), _) : null;
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
var _ = _(_()),
  _ = class _ {
    m_queryClient = _;
    m_boxCacheVersion = _.box(0);
    m_bInitialized = !1;
    m_boxAjaxInFlight = _.box(!1);
    LazyInit() {
      this.m_bInitialized ||
        ((this.m_bInitialized = !0),
        this.m_queryClient.getQueryCache().subscribe((_) => {
          (_?.type == `added` ||
            _?.type == `updated` ||
            _?.type == `removed`) &&
            _(_.query?.queryKey) &&
            _(() =>
              this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
            );
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
          if (_.GetIncludedAppIDs().every((_) => this.BIsGameOwned(_)))
            return !0;
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
var _ = `pL8IDIWBDg8-`,
  _ = `JuZBiq95wYE-`;
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
  _ = `oXDp-N2XFF4-`,
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
    `../../../images/applications/appmgmt/defaultappheader.png?v=valveisgoodatcaching`,
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
