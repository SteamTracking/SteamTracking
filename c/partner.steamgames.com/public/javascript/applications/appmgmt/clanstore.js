import { _, _, _, _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _ } from "./src.js";
import { _, _, _, _ } from "./dialogs.js";
import { _, _ } from "./storebrowsequerycontext.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./saletags.js";
import { _ } from "./storenaveventcontext.js";
import "./react-router.js";
import { _ } from "./utils.js";
import { _ } from "./reactqueryroot.js";
import "./steammessages_clan_pb.js";
import { _ } from "./appidutils.js";
import { _ } from "./localization2.js";
import { _ } from "./debugglobal.js";
import "./steamid.js";
import { _ } from "./creatorhomestore.js";
import { _ } from "./loadingspinner.js";
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { appid: _, className: _, bTextMode: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    appid: _,
    bIsFree: !!_?.is_free,
    bIsComingSoon: !!_?.is_coming_soon,
    bTextMode: _,
    className: _,
  });
}
function _(_) {
  let [_, _] = _.useState(!1),
    _ = _(),
    { appid: _, bIsFree: _, bIsComingSoon: _, className: _, bTextMode: _ } = _,
    _ = _(_),
    { bIsOwned: _ } = _(_),
    _ = _(_),
    { mutateAsync: _ } = _(_, !_, _(_)),
    { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    _ = async () => {
      _.logged_in ? _ || (_(!0), await _(), _(!1)) : _();
    };
  if (_ || (!_ && _))
    return _
      ? (0, _.jsx)(_, {
          possibleDemoAppID: _,
        })
      : null;
  let _ = null;
  return (
    _ && !_
      ? (_ = (0, _.jsx)(_, {
          size: 18,
        }))
      : _
        ? _ && (_ = _ ? _(`#OnWishlist`) : (0, _.jsx)(_, {}))
        : (_ = _ ? _(`#wishlist_add_to_wishlist`) : (0, _.jsx)(_, {})),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          toolTipContent: _(`#AddToWishlist_ttip`),
          children: (0, _.jsx)(`div`, {
            className: _(_, _),
            onClick: _,
            children: _,
          }),
        }),
        _,
      ],
    })
  );
}
function _(_) {
  let { possibleDemoAppID: _, className: _ } = _,
    _ = _(_),
    { data: _ } = _(_);
  return _ && (_.type == 1 || _.type == 12) && _.related_items?.parent_appid
    ? (0, _.jsx)(_, {
        parentAppID: _.related_items?.parent_appid,
        className: _,
      })
    : null;
}
function _(_) {
  let { parentAppID: _, className: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_);
  return !_ || !_
    ? null
    : (0, _.jsx)(_, {
        appid: _,
        bIsComingSoon: !!_.is_coming_soon,
        bIsFree: !!_.is_free,
        className: _,
      });
}
var _ = new WeakSet();
function _(_ = _) {
  if (typeof window > `u` || typeof document > `u` || _.has(_)) return;
  let _ = _(`groupvanityinfo`, `application_config`);
  (_ !== void 0 || document.readyState == `complete`) &&
    (_.add(_), _(_) && _(_, _));
}
function _(_) {
  let _ = _;
  return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
    ? typeof _[0].clanAccountID == `number` &&
        (typeof _[0].appid == `number` || typeof _[0].vanity_url == `string`)
    : !1;
}
function _(_) {
  return typeof _ == `string` ? parseInt(_) : _;
}
function _(_) {
  return typeof _ == `string` ? Number.parseInt(_) : _;
}
var _ = new (class {
  m_queryClient = _;
  m_boxCacheVersion = _.box(0);
  m_bWatchingCache = !1;
  m_bBumpScheduled = !1;
  Init() {
    this.LazyInit();
  }
  LazyInit() {
    _(this.m_queryClient),
      this.m_bWatchingCache ||
        ((this.m_bWatchingCache = !0),
        this.m_queryClient.getQueryCache().subscribe((_) => {
          (_?.type == `added` ||
            _?.type == `updated` ||
            _?.type == `removed`) &&
            _(_.query?.queryKey) &&
            this.ScheduleCacheVersionBump();
        }));
  }
  ScheduleCacheVersionBump() {
    this.m_bBumpScheduled ||
      ((this.m_bBumpScheduled = !0),
      queueMicrotask(() => {
        (this.m_bBumpScheduled = !1),
          _(() => this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1));
      }));
  }
  ReadCache() {
    return this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient;
  }
  AddGroupVanities(_) {
    this.LazyInit(), _(_) && _(this.m_queryClient, _);
  }
  BHasClanInfoLoaded(_) {
    return (
      _(_.BIsValid(), `Clan SteamID is not valid when ClanInfo`),
      _(
        _.BIsClanAccount(),
        `Clan SteamID is not a clan account id when requesting clan info `,
      ),
      this.BHasClanInfoLoadedByAccountID(_.GetAccountID())
    );
  }
  BHasClanInfoLoadedByAccountID(_) {
    return !!_(_(_), this.ReadCache());
  }
  RegisterClanData(_) {
    this.LazyInit(), _(this.m_queryClient, _);
  }
  async LoadOGGClanInfoForAppID(_) {
    return (
      this.LazyInit(),
      (_ = _(_)),
      _(_ != 0, `LoadOGGClanInfoForAppID called with appid of zero`),
      _ == 0 ? null : _(_, this.m_queryClient).catch(() => null)
    );
  }
  async LoadOGGClanInfoForIdentifier(_) {
    return this.LazyInit(), _(_, this.m_queryClient, `store`);
  }
  async LoadOGGClanInfoForGroupVanity(_) {
    return this.LazyInit(), _(_, this.m_queryClient, `group`);
  }
  async LoadClanInfoForClanSteamID(_) {
    return this.LoadClanInfoForClanAccountID(_.GetAccountID());
  }
  async LoadClanInfoForClanAccountID(_) {
    return this.LazyInit(), _(_(_), this.m_queryClient);
  }
  GetOGGClanInfo(_) {
    let _ = this.ReadCache();
    return typeof _ == `string` ? _(_, _) : _(_, _);
  }
  GetClanSteamIDForAppID(_) {
    let _ = _(_(_), this.ReadCache());
    return _ ? _.InitFromClanID(_.clanAccountID, _.EUNIVERSE) : void 0;
  }
  GetClanVanityForAppID(_) {
    return _(_(_), this.ReadCache())?.vanity_url;
  }
  GetClanVanityForClanSteamID(_) {
    return _(_.GetAccountID(), this.ReadCache())?.vanity_url;
  }
  HasLoadedClanAccountID(_) {
    return this.BHasClanInfoLoadedByAccountID(_);
  }
  GetClanMemberCount(_) {
    return _(_(_), this.ReadCache())?.member_count ?? 0;
  }
  GetClanInfoByClanAccountID(_) {
    return (
      _(
        !!_,
        `Unepxected clanid when requesting information. GetClanInfoByClanAccountID `,
      ),
      _(_(_), this.ReadCache())
    );
  }
  GetCreatorStoreURL(_) {
    let _ = _.GetCreatorHome(_);
    if (_) return _.GetCreatorHomeURL(`developer`);
    let _ = this.GetClanInfoByClanAccountID(_.GetAccountID());
    return (
      _.COMMUNITY_BASE_URL +
      (_.vanity_url
        ? `groups/` + _.vanity_url
        : `gid/` + _.ConvertTo64BitString())
    );
  }
})();
_(`g_ClanStore`, _);
function _() {
  let _ = _();
  return _(_), _;
}
function _(_) {
  _();
  let { data: _, isPending: _ } = _(_ ? _(_) : void 0);
  return [!!_ && _, _ ?? void 0];
}
function _(_) {
  _();
  let _ = _ ? _(_) : void 0,
    { data: _, isPending: _ } = _(_);
  return {
    bLoadingClanInfo: !!_ && _,
    clanInfo: _ ?? null,
  };
}
export { _, _, _, _, _ };
