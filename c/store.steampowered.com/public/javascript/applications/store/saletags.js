import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./libraries.js";
import { _ } from "./usedataloader.client.js";
import { _, _, _ } from "./storelink.js";
import { _ } from "./claninfo.js";
import { _, _ } from "./storeurl.js";
import "./modals.js";
import { _, _, _ } from "./ostype.js";
import { _ } from "./microtrailerdisplay.js";
import { _ } from "./ajaxhooks.js";
import { _, _ } from "./historyutils.js";
import { _ } from "./throbber.js";
import { _ } from "./stringutils.js";
import { _ } from "./linkfilter.js";
import { _ } from "./saletechredirectsignin.js";
import { _ } from "./partnereventshared.module.js";
import { _ } from "./personautils.js";
import { _, _ } from "./csstransitionwrapper.js";
import { _, _ } from "./remotedownloadhooks.js";
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
} from "./main.js";
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
  _ = _(_()),
  _ = `_8Wp5WbqAbJA-`,
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
  _ = `wPxkst62n-Q-`,
  _ = `gxtdwNjsesg-`,
  _ = `y1XjkIvVj6A-`,
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
  _ = `v-RxDE-Li8U-`,
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
  _ = `ZuMhm9DQqbw-`,
  _ = `eASrfjoxe3o-`,
  _ = `ppO76q5Y-Zg-`,
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
  _ = `tUIs-i3NWoU-`,
  _ = `_8o-dkC5O1co-`,
  _ = `v7ul8g8zqHs-`,
  _ = `-cW4bgqyLAo-`,
  _ = `aN31caRmRcQ-`,
  _ = `tobj1evrU4w-`,
  _ = `NqZ9uMSo13A-`,
  _ = `RAahmG4F6sc-`;
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
function _(_, _) {
  return !!(_ && _ && _.packageid);
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: () => _(_, _),
    onSuccess(_) {
      let [
        _,
        { packageids_added: _, appids_added: _, purchase_result_detail: _ },
      ] = _;
      _ && _(_);
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
var _ = `-h3mdabpWCk-`,
  _ = `z7OUnz8a2LE-`,
  _ = `-JC2DTwjTLY-`,
  _ = `gBGbg1Aq4kE-`,
  _ = `S0TPsOpik3c-`,
  _ = `_6t-T9facds8-`,
  _ = `_9ltdnbqRBVs-`,
  _ = `KMiaP3xxJic-`,
  _ = `-f6--J8iYK8-`,
  _ = `tlFgqgPT5b8-`,
  _ = `LR3Stix-A4Y-`,
  _ = `zxsM3zpa9JU-`,
  _ = `c3ZsONtZeOk-`,
  _ = `Ee3wL0zu-5c-`,
  _ = `OCfnyhzTpeE-`,
  _ = `_1ArCdbgfzNY-`,
  _ = `IBiSpw0atyM-`,
  _ = `mDOopKELMBg-`,
  _ = `C8-HMz-fVag-`,
  _ = `lDDPCoGwJAU-`,
  _ = `QvYBOAdgkPk-`,
  _ = `dNQ1ofH4Cbs-`,
  _ = `rmDLW23h1zQ-`,
  _ = `ahykWXj-Rak-`,
  _ = `TxQs7xIpj2A-`,
  _ = `xWg9uSQknuo-`,
  _ = `_2csr6Pw04gI-`,
  _ = `CT05Js5REus-`,
  _ = `CAlqxCfPEko-`,
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
var _ = `_5YxPcG58GcM-`,
  _ = `AYShSUpazpQ-`,
  _ = `HjTriTNInOs-`;
function _(_) {
  let {
      tabs: _,
      bDisableRouting: _,
      startingTab: _,
      controlledTab: _,
      OnTabChanged: _,
      classNameCtn: _,
      classNameTab: _,
      focusRingHasBorderRadius: _,
      classNameTabContent: _,
      preferredFocus: _,
      bVerticalTabs: _,
      bSticky: _,
      bChecklistMode: _,
    } = _,
    _ = _(),
    _ = _(),
    [_, _] = (0, _.useState)(
      () => _ || (!_ && _(_, `tab`) ? (_(_, `tab`) ?? ``) : ``),
    );
  (0, _.useEffect)(() => {
    if (!_.bDisableRouting && _) {
      let _ = _(_, `tab`);
      _ && _(_);
    }
  }, [_, _.key, _.bDisableRouting, _]);
  let _ = _.useCallback(
      (_) => {
        (_(_.key),
          _ || _(_, `tab`, _.key),
          _?.(_.key),
          _.onClick && _.onClick(_));
      },
      [_, _, _],
    ),
    _ = _.filter((_) => !_.hidden);
  if (!_.length) return null;
  let _ = _ ?? _,
    _ = _.find((_) => _.key === _) || _[0],
    _ = _ ? (_ ?? _[0].key) : void 0,
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          className: _(
            _,
            _ && `iBLrw-7gAIM-`,
            _ && `dLhmGXBhTkM-`,
            _ && `ShXw34CXvuE-`,
            _,
          ),
          navEntryPreferPosition: _ ? _.PREFERRED_CHILD : _.FIRST,
          children: _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                tab: _,
                OnTabClick: _,
                classNameTab: _,
                focusRingHasBorderRadius: _,
                active: _.key === _.key,
                preferredFocus: _ === _.key,
              },
              _.key,
            ),
          ),
        }),
        _ &&
          (0, _.jsx)(_, {
            className: _,
            children: _.contents,
          }),
      ],
    });
  return _
    ? (0, _.jsx)(_, {
        className: _(_),
        children: _,
      })
    : _;
}
function _(_) {
  let {
    tab: _,
    OnTabClick: _,
    classNameTab: _,
    focusRingHasBorderRadius: _,
    active: _,
    preferredFocus: _,
  } = _;
  return (0, _.jsx)(_, {
    condition: !!(_.statusToolTip || _.tooltip),
    wrap: (_) =>
      (0, _.jsx)(_, {
        toolTipContent: _.statusToolTip || _.tooltip,
        children: _,
      }),
    children: (0, _.jsxs)(_, {
      className: _(_, _ && `Tw-TchJW1T8-`, _ && `ActiveTab`, _),
      onActivate: () => _(_),
      preferredFocus: _,
      focusRingHasBorderRadius: _,
      children: [
        !!_.vo_warning &&
          (0, _.jsx)(_, {
            toolTipContent: _.vo_warning,
            children: (0, _.jsx)(`div`, {
              className: `OpvmjD098-U-`,
              children: _(`#EventEditor_VOWarning`),
            }),
          }),
        _.status,
        _.name,
      ],
    }),
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
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`, `store`, `community`],
      },
    );
  }
  _.GetGameFrameRateStats = _;
})((_ ||= {}));
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
      (0, _.jsxs)(_, {
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
          !1,
        ],
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
      children: _,
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
    tabs: _,
    classNameCtn: _,
    classNameTabContent: _,
    startingTab: _.toString(),
    preferredFocus: !0,
    bDisableRouting: !0,
    focusRingHasBorderRadius: !0,
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
    [_, _] = _.useState(!1),
    _ = _.useCallback(() => _, [_]),
    _ = _.useRef(null);
  _();
  let _ = _ ?? {};
  return (
    _.useEffect(() => {
      _?.current?.scrollHeight !== void 0 &&
        _?.current?.clientHeight !== void 0 &&
        _(_?.current?.scrollHeight > _?.current?.clientHeight);
    }, []),
    (0, _.jsxs)(_, {
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
          ref: _,
          className: _() ? _ : _,
          children: (0, _.jsx)(_, {
            autoFocus: _,
            focusableIfEmpty: _ || _(),
            noFocusRing: !0,
            children: _,
          }),
        }),
      ],
    })
  );
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
        !1,
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
  let { url: _, containerClass: _, bIncludeIcon: _, onOpenBlogPost: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    onClick: () => {
      _ ? _() : _ && (window.location.href = _);
    },
    children: [
      _ &&
        (0, _.jsx)(`div`, {
          className: `PJ-pfpmq-JI-`,
        }),
      (0, _.jsx)(`div`, {
        className: _ ? _ : _,
        children: _.Localize(
          `#SteamDeckVerified_Store_CompatSection_DeveloperComments`,
        ),
      }),
    ],
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
    _ = _ || !_ ? void 0 : _,
    [, _] = _(_, _),
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
    _ = _
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
  switch (_?.toUpperCase()) {
    case `AE`:
      return 32;
    case `AU`:
      return 21;
    case `BR`:
      return 7;
    case `CA`:
      return 20;
    case `CH`:
    case `LI`:
      return 4;
    case `CL`:
      return 25;
    case `CN`:
    case `XC`:
      return 23;
    case `CO`:
      return 27;
    case `CR`:
      return 40;
    case `AD`:
    case `AL`:
    case `AT`:
    case `AX`:
    case `BA`:
    case `BE`:
    case `BG`:
    case `CY`:
    case `CZ`:
    case `DE`:
    case `DK`:
    case `EE`:
    case `ES`:
    case `FI`:
    case `FO`:
    case `FR`:
    case `GF`:
    case `GI`:
    case `GP`:
    case `GR`:
    case `HR`:
    case `HU`:
    case `IE`:
    case `IT`:
    case `LT`:
    case `LU`:
    case `LV`:
    case `MC`:
    case `ME`:
    case `MK`:
    case `MQ`:
    case `MT`:
    case `NC`:
    case `NL`:
    case `PF`:
    case `PT`:
    case `RE`:
    case `RO`:
    case `RS`:
    case `SE`:
    case `SI`:
    case `SJ`:
    case `SK`:
    case `SM`:
    case `VA`:
      return 3;
    case `GB`:
    case `GG`:
    case `GS`:
    case `IM`:
    case `JE`:
      return 2;
    case `HK`:
      return 29;
    case `ID`:
      return 10;
    case `IL`:
      return 35;
    case `IN`:
      return 24;
    case `JP`:
      return 8;
    case `KR`:
      return 16;
    case `KW`:
      return 38;
    case `KZ`:
      return 37;
    case `MX`:
      return 19;
    case `MY`:
      return 11;
    case `NO`:
      return 9;
    case `NZ`:
      return 22;
    case `PE`:
      return 26;
    case `PH`:
      return 12;
    case `PL`:
      return 6;
    case `QA`:
      return 39;
    case `RU`:
      return 5;
    case `SA`:
      return 31;
    case `SG`:
      return 13;
    case `TH`:
      return 14;
    case `TW`:
      return 30;
    case `UA`:
      return 18;
    case `AF`:
    case `AG`:
    case `AI`:
    case `AM`:
    case `AN`:
    case `AO`:
    case `AQ`:
    case `AR`:
    case `AS`:
    case `AW`:
    case `AZ`:
    case `BB`:
    case `BD`:
    case `BF`:
    case `BH`:
    case `BI`:
    case `BJ`:
    case `BM`:
    case `BN`:
    case `BO`:
    case `BS`:
    case `BT`:
    case `BV`:
    case `BW`:
    case `BY`:
    case `BZ`:
    case `CC`:
    case `CD`:
    case `CF`:
    case `CG`:
    case `CI`:
    case `CK`:
    case `CM`:
    case `CV`:
    case `CX`:
    case `DJ`:
    case `DM`:
    case `DO`:
    case `DZ`:
    case `EC`:
    case `EG`:
    case `EH`:
    case `ER`:
    case `ET`:
    case `FJ`:
    case `FK`:
    case `FM`:
    case `GA`:
    case `GD`:
    case `GE`:
    case `GH`:
    case `GL`:
    case `GM`:
    case `GN`:
    case `GQ`:
    case `GT`:
    case `GU`:
    case `GW`:
    case `GY`:
    case `HM`:
    case `HN`:
    case `HT`:
    case `IO`:
    case `IQ`:
    case `IS`:
    case `JM`:
    case `JO`:
    case `KE`:
    case `KG`:
    case `KH`:
    case `KI`:
    case `KM`:
    case `KN`:
    case `KY`:
    case `LA`:
    case `LB`:
    case `LC`:
    case `LK`:
    case `LR`:
    case `LS`:
    case `LY`:
    case `MA`:
    case `MD`:
    case `MG`:
    case `MH`:
    case `ML`:
    case `MM`:
    case `MN`:
    case `MO`:
    case `MP`:
    case `MR`:
    case `MS`:
    case `MU`:
    case `MV`:
    case `MW`:
    case `MZ`:
    case `NA`:
    case `NE`:
    case `NF`:
    case `NG`:
    case `NI`:
    case `NP`:
    case `NR`:
    case `NU`:
    case `OM`:
    case `PA`:
    case `PG`:
    case `PK`:
    case `PM`:
    case `PN`:
    case `PR`:
    case `PS`:
    case `PW`:
    case `PY`:
    case `RW`:
    case `SB`:
    case `SC`:
    case `SD`:
    case `SH`:
    case `SL`:
    case `SN`:
    case `SO`:
    case `SR`:
    case `ST`:
    case `SV`:
    case `SY`:
    case `SZ`:
    case `TC`:
    case `TD`:
    case `TF`:
    case `TG`:
    case `TJ`:
    case `TK`:
    case `TL`:
    case `TM`:
    case `TN`:
    case `TO`:
    case `TR`:
    case `TT`:
    case `TV`:
    case `TZ`:
    case `UG`:
    case `UM`:
    case `US`:
    case `UZ`:
    case `VC`:
    case `VE`:
    case `VG`:
    case `VI`:
    case `VU`:
    case `WF`:
    case `WS`:
    case `YE`:
    case `YT`:
    case `ZM`:
    case `ZW`:
      return 1;
    case `UY`:
      return 41;
    case `VN`:
      return 15;
    case `ZA`:
      return 28;
    default:
      return (console.assert(!1, `Unhandled country code: ${_}`), 1);
  }
}
var _ = {
    0: {},
    1: {
      strSymbol: `$`,
    },
    2: {
      strSymbol: `£`,
    },
    3: {
      strSymbol: `€`,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    4: {
      strSymbol: `CHF`,
    },
    5: {
      strSymbol: `руб.`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ``,
    },
    6: {
      strSymbol: `zł`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    7: {
      strSymbol: `R$`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    8: {
      strSymbol: `¥`,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
    },
    9: {
      strSymbol: `kr`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    10: {
      strSymbol: `Rp`,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `.`,
      strThousandsSeparator: ` `,
    },
    11: {
      strSymbol: `RM`,
    },
    12: {
      strSymbol: `P`,
    },
    13: {
      strSymbol: `S$`,
    },
    14: {
      strSymbol: `฿`,
    },
    15: {
      strSymbol: `₫`,
      bWholeUnitsOnly: !0,
      bSuffixSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    16: {
      strSymbol: `₩`,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
    },
    17: {
      strSymbol: `TL`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    18: {
      strSymbol: `₴`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    19: {
      strSymbol: `Mex$`,
      bSpaceForSymbol: !0,
    },
    20: {
      strSymbol: `CDN$`,
      bSpaceForSymbol: !0,
    },
    21: {
      strSymbol: `A$`,
      bSpaceForSymbol: !0,
    },
    22: {
      strSymbol: `NZ$`,
      bSpaceForSymbol: !0,
    },
    23: {
      strSymbol: `¥`,
      bSpaceForSymbol: !0,
    },
    24: {
      strSymbol: `₹`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
    },
    25: {
      strSymbol: `CLP$`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    26: {
      strSymbol: `S/.`,
    },
    27: {
      strSymbol: `COL$`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    28: {
      strSymbol: `R`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `.`,
      strThousandsSeparator: ` `,
    },
    29: {
      strSymbol: `HK$`,
      bSpaceForSymbol: !0,
    },
    30: {
      strSymbol: `NT$`,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
    },
    31: {
      strSymbol: `SR`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    32: {
      strSymbol: `AED`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    33: {
      strSymbol: `kr`,
      bSpaceForSymbol: !0,
      bSuffixSymbol: !0,
    },
    34: {
      strSymbol: `ARS$`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    35: {
      strSymbol: `₪`,
    },
    36: {
      strSymbol: `Br`,
    },
    37: {
      strSymbol: `₸`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    38: {
      strSymbol: `KD`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    39: {
      strSymbol: `QR`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    40: {
      strSymbol: `₡`,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    41: {
      strSymbol: `$U`,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    42: {
      strSymbol: `лв`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    43: {
      strSymbol: `kn`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    44: {
      strSymbol: `Kč`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    45: {
      strSymbol: `kr.`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    46: {
      strSymbol: `Ft`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    47: {
      strSymbol: `lei`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    48: {},
  },
  _ = {
    strSymbol: ``,
    bSuffixSymbol: !1,
    bSpaceForSymbol: !1,
    bWholeUnitsOnly: !1,
    eCurrency: 0,
    strDecimalSymbol: `.`,
    strThousandsSeparator: `,`,
  };
function _(_) {
  return {
    ..._,
    ..._[_],
    eCurrency: _,
  };
}
function _(_, _) {
  return _(_, _(_));
}
function _(_, _) {
  let {
      strSymbol: _,
      bSuffixSymbol: _,
      bSpaceForSymbol: _,
      bWholeUnitsOnly: _,
      strDecimalSymbol: _,
      strThousandsSeparator: _,
    } = _,
    _ = _ < 0,
    _ = _ && _ % 100 == 0;
  _ && (_ = -_);
  let _ = [];
  for (let _ = 0; _ < 2; _++) (_ || _.push(_ % 10), (_ = Math.floor(_ / 10)));
  !_ && _ && _.push(_);
  let _ = 0;
  do
    (_++ % 3 == 0 && _ > 2 && _ && _.push(_),
      _.push(_ % 10),
      (_ = Math.floor(_ / 10)));
  while (_ > 0);
  let _ = _.reverse().join(``),
    _ = _ ? ` ` : ``,
    _ = _ ? `-` : ``;
  return _ ? `${_}${_}${_}${_}` : `${_}${_}${_}${_}`;
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
    let _ = {
      ..._(_(_.country_code.toUpperCase())),
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
async function _(_, _) {
  let _ = `steam://install/` + _;
  _.IN_CLIENT ? (window.location.href = _) : _(_, _, _);
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
var _ = _(_(), 1);
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
var _ = 5500,
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
