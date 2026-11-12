import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./chunk~961c06e93e.js";
import { _ } from "./chunk~fc8a9e4879.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./main.js";
import { _ } from "./chunk~437071091c.js";
var _ = _(_()),
  _ = _(_());
function _(_) {
  _.list_jsondata && typeof _.list_jsondata == `string`
    ? (_.list_jsondata = JSON.parse(_.list_jsondata))
    : (_(
        !_.list_jsondata,
        `Found unexpected ListDetails_t.list_jsondata type: ` +
          typeof _.list_jsondata,
      ),
      (_.list_jsondata = {}));
}
function _(_, _) {
  ((_.localized_flat_title = _([], 32, null)),
    (_.localized_flat_blurb = _([], 32, null)),
    (_.localized_flat_link = _([], 32, null)),
    _.title !== `0` && (_.localized_flat_title[_] = _.title),
    _.blurb !== `0` && (_.localized_flat_blurb[_] = _.blurb),
    _.link !== `0` && (_.localized_flat_link[_] = _.link),
    _.title_localization.forEach((_) => {
      _.localized_string?.length > 0 &&
        (_.localized_flat_title[_.language] = _.localized_string);
    }),
    _.blurb_localization.forEach((_) => {
      _.localized_string?.length > 0 &&
        (_.localized_flat_blurb[_.language] = _.localized_string);
    }),
    _.link_localization.forEach((_) => {
      _.localized_string?.length > 0 &&
        (_.localized_flat_link[_.language] = _.localized_string);
    }));
}
var _ = class _ {
  m_mapList = new Map();
  m_mapEventGIDToLists = new Map();
  m_mapListIDToClanAccount = new Map();
  GetListDetails(_) {
    return this.m_mapList.get(_);
  }
  GetAllSaleCurationLists(_) {
    return this.m_mapEventGIDToLists.get(_) || [];
  }
  GetClanAccountFromListID(_) {
    return this.m_mapListIDToClanAccount.get(_);
  }
  async LoadListDetails(_, _, _) {
    let _ = this.m_mapList.get(_);
    if (_ !== void 0) return _;
    let _ =
        _.STORE_BASE_URL +
        `curator/` +
        _.GetAccountID() +
        `/admin/ajaxgetlistdetails`,
      _ = {
        listid: _,
      };
    try {
      let _ = await _.default.get(_, {
        params: _,
        cancelToken: _?.token,
      });
      if (_?.data?.success == 1) {
        let _ = {
          ..._.data.list_details,
        };
        return (
          _(_ == _?.listid, `Wanted` + _ + `but got` + _?.listid),
          _(_),
          _(_.data.curation_language, _),
          this.m_mapList.set(_, _),
          this.m_mapListIDToClanAccount.set(_, _.GetAccountID()),
          _
        );
      }
    } catch (_) {
      let _ = _(_);
      console.error(
        `CCuratorListStore.LoadListDetails: error on load: ` + _.strErrorMsg,
        _,
      );
    }
    return null;
  }
  async LoadMyFollowedSaleCurationLists(_, _, _) {
    if (
      !_.logged_in ||
      (_.Get().BIsLoaded() && _.Get().GetFollowedCuratorCount() == 0)
    )
      return [];
    let _ = _.STORE_BASE_URL + `curators/ajaxgetmycuratorsalelists`,
      _ = {
        clan_account_id: _.GetAccountID(),
        clan_event_gid: _,
        origin: self.origin,
        curator_clan_account_followed: _.Get().BIsLoaded()
          ? _.Get().GetFollowedCuratorsAccountID().join(`,`)
          : void 0,
      };
    return this.InternalLoadSaleCuratorLists(
      _,
      _,
      `CCuratorListStore.LoadMyFollowedSaleCurationLists`,
      _,
      _,
      _,
    );
  }
  async LoadAllSaleCurationLists(_, _, _) {
    let _ = this.m_mapEventGIDToLists.get(_);
    if (_ !== void 0) return _;
    let _ = _.STORE_BASE_URL + `curators/ajaxfindcuratorlists`,
      _ = {
        clan_account_id: _.GetAccountID(),
        clan_event_gid: _,
        origin: self.origin,
      };
    return this.InternalLoadSaleCuratorLists(
      _,
      _,
      `CCuratorListStore.LoadAllSaleCurationLists`,
      _,
      _,
      _,
    );
  }
  async InternalLoadSaleCuratorLists(_, _, _, _, _, _) {
    try {
      let _ = await _.default.get(_, {
        params: _,
        cancelToken: _?.token,
      });
      if (_?.data?.success == 1) {
        let _ = [];
        return (
          _(() => {
            (_.data.matches &&
              _.data.matches.forEach((_) => {
                _.multi_detail_lists.forEach((_) => {
                  (this.m_mapListIDToClanAccount.set(
                    _.listid,
                    _.clan_account_id,
                  ),
                    _(_),
                    _(_.curation_language, _),
                    this.m_mapList.set(_.listid, _),
                    _.push(_));
                });
              }),
              this.m_mapEventGIDToLists.set(_, _));
          }),
          _
        );
      }
    } catch (_) {
      let _ = _(_);
      console.error(_ + `: error on load: ` + _.strErrorMsg, _);
    }
    return [];
  }
  static s_Singleton;
  static Get() {
    return ((_.s_Singleton ||= new _()), _.s_Singleton);
  }
  constructor() {
    _(this);
    let _ = _(`curatorlistdata`, `application_config`);
    this.ValidateStoreDefault(_) &&
      _(() => {
        _.forEach((_) => {
          _.multi_detail_lists.forEach((_) => {
            (_(_), _(_.curation_language, _), this.m_mapList.set(_.listid, _));
          });
        });
      });
  }
  ValidateStoreDefault(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
      ? typeof _[0].curation_language == `number` &&
          _[0].multi_detail_lists &&
          Array.isArray(_[0].multi_detail_lists) &&
          typeof _[0].multi_detail_lists[0].listid == `string` &&
          typeof _[0].multi_detail_lists[0].list_type == `number` &&
          typeof _[0].multi_detail_lists[0].list_state == `number`
      : _ && Array.isArray(_) && _.length == 0;
  }
};
_([_], _.prototype, `m_mapList`, void 0);
function _(_, _) {
  let _ = _();
  return (
    (0, _.useEffect)(() => {
      if (_.Get().GetListDetails(_) || !_) return;
      let _ = _.default.CancelToken.source();
      return (
        (async () => {
          let _ = await _.Get().LoadListDetails(_, _);
          if (!_.token.reason) {
            if (_?.apps?.length) {
              let _ = [];
              for (let _ of _.apps) {
                let _ = _?.recommended_app?.appid;
                _ &&
                  _.push({
                    _: _,
                    type: `game`,
                  });
              }
              (_(_, {
                ..._,
                include_assets: !0,
                include_release: !0,
              }),
                _());
            } else console.error(`Found no list data`);
          }
        })(),
        () => _.cancel(`unmounting CuratorList`)
      );
    }, [_, _, _]),
    _.Get().GetListDetails(_)
  );
}
function _(_) {
  let _ = _ && _.GetClanInfoByClanAccountID(_),
    [_, _] = (0, _.useState)(!!_);
  return (
    (0, _.useEffect)(() => {
      if (_ && _) {
        let _ = _.InitFromClanID(_, _.EUNIVERSE);
        _.LoadClanInfoForClanSteamID(_).finally(() => {
          _(!0);
        });
      }
    }, [_, _]),
    _
  );
}
function _(_) {
  return !!_?.sale_clan_event_gid && !!_?.sale_clan_steamid;
}
function _(_) {
  let _ = _(),
    _ = _(_) ? _.sale_clan_event_gid : null,
    _ = _ && _.GetClanEventModel(_);
  return (
    (0, _.useEffect)(() => {
      if (_ || !_(_)) return;
      let _ = _.default.CancelToken.source();
      return (
        (async () => {
          (_.Init(),
            await _.LoadPartnerEventFromClanEventGIDAndClanSteamID(
              new _(_.sale_clan_steamid),
              _,
              0,
            ),
            !_.token.reason && _());
        })(),
        () => _.cancel(`unmounting CuratorList`)
      );
    }, [_, _, _, _]),
    _
  );
}
