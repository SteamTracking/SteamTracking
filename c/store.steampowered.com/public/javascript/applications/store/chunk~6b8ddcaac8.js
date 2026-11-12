import { _, _, _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~68b7e78d68.js";
import { _ } from "./chunk~8c66e1c7a5.js";
import { _, _, _ } from "./chunk~4c13037b22.js";
import "./chunk~8681f5c764.js";
import { _, _, _ } from "./chunk~2f085f1384.js";
import { _ } from "./chunk~cd94ddba57.js";
import { _ } from "./chunk~92931c6310.js";
import { _, _ } from "./chunk~af36c62e9f.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~e867464c75.js";
import { _ } from "./chunk~2f8c67b4de.js";
import { _ } from "./chunk~0278ae6236.js";
import { _, _ } from "./chunk~90b9831ad2.js";
import { _, _ } from "./chunk~f162f235ea.js";
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
} from "./main.js";
var _ = class extends Error {
    eResult;
    constructor(_, _) {
      (super(_ ? `EResult ${_}: ${_}` : `EResult ${_}`), (this.eResult = _));
    }
  },
  _ = _(_(), 1);
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
  let { data: _ } = _({
    appid: _,
  });
  return _?.appid || _;
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
var _ = _(_()),
  _ = _(_(), 1),
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
async function _(_, _) {
  throw new _(20, `Owned packages must be seeded by the page`);
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
    retry: !1,
    staleTime: 1 / 0,
  };
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
  _ = `QvYBOAdgkPk-`,
  _ = `ZAn1-qmM-Iw-`,
  _ = `dNQ1ofH4Cbs-`,
  _ = `rmDLW23h1zQ-`,
  _ = `ahykWXj-Rak-`,
  _ = `TxQs7xIpj2A-`,
  _ = `xWg9uSQknuo-`,
  _ = `_2csr6Pw04gI-`,
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
  }, [_, _.bDisableRouting, _]);
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
function _(_) {
  var _,
    _,
    _ = ``;
  if (typeof _ == `string` || typeof _ == `number`) _ += _;
  else if (typeof _ == `object`) {
    if (Array.isArray(_)) {
      var _ = _.length;
      for (_ = 0; _ < _; _++)
        _[_] && (_ = _(_[_])) && (_ && (_ += ` `), (_ += _));
    } else for (_ in _) _[_] && (_ && (_ += ` `), (_ += _));
  }
  return _;
}
function _() {
  for (var _, _, _ = 0, _ = ``, _ = arguments.length; _ < _; _++)
    (_ = arguments[_]) && (_ = _(_)) && (_ && (_ += ` `), (_ += _));
  return _;
}
var _ =
  `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
    `.`,
  );
function _(_) {
  return typeof _ == `string` && _.includes(_);
}
var _ =
  `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
    `.`,
  );
function _(_) {
  return typeof _ == `string` && _.includes(_);
}
function _(_) {
  return typeof _ == `string` && _.startsWith(`data-`);
}
function _(_) {
  var _ = Object.entries(_).filter((_) => {
    var [_] = _;
    return _(_) || _(_);
  });
  return Object.fromEntries(_);
}
function _(_) {
  if (_ == null) return null;
  if (
    (0, _.isValidElement)(_) &&
    typeof _.props == `object` &&
    _.props !== null
  ) {
    var _ = _.props;
    return _(_);
  }
  return typeof _ == `object` && !Array.isArray(_) ? _(_) : null;
}
function _(_) {
  var _ = Object.entries(_).filter((_) => {
    var [_] = _;
    return _(_) || _(_) || _(_);
  });
  return Object.fromEntries(_);
}
function _(_) {
  return _ == null
    ? null
    : (0, _.isValidElement)(_)
      ? _(_.props)
      : typeof _ == `object` && !Array.isArray(_)
        ? _(_)
        : null;
}
var _ = [
  `children`,
  `width`,
  `height`,
  `viewBox`,
  `className`,
  `style`,
  `title`,
  `desc`,
];
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = (0, _.forwardRef)((_, _) => {
    var {
        children: _,
        width: _,
        height: _,
        viewBox: _,
        className: _,
        style: _,
        title: _,
        desc: _,
      } = _,
      _ = _(_, _),
      _ = _ || {
        width: _,
        height: _,
        _: 0,
        _: 0,
      },
      _ = _(`recharts-surface`, _);
    return _.createElement(
      `svg`,
      _({}, _(_), {
        className: _,
        width: _,
        height: _,
        style: _,
        viewBox: `${_._} ${_._} ${_.width} ${_.height}`,
        ref: _,
      }),
      _.createElement(`title`, null, _),
      _.createElement(`desc`, null, _),
      _,
    );
  }),
  _ = [`children`, `className`];
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = _.forwardRef((_, _) => {
    var { children: _, className: _ } = _,
      _ = _(_, _),
      _ = _(`recharts-layer`, _);
    return _.createElement(
      `g`,
      _(
        {
          className: _,
        },
        _(_),
        {
          ref: _,
        },
      ),
      _,
    );
  }),
  _ = (0, _.createContext)(null),
  _ = () => (0, _.useContext)(_);
function _(_) {
  return function () {
    return _;
  };
}
var _ = Math.cos,
  _ = Math.sin,
  _ = Math.sqrt,
  _ = Math._;
_ / 2;
var _ = 2 * _,
  _ = Math._,
  _ = 2 * _,
  _ = 1e-6,
  _ = _ - _;
function _(_) {
  this._ += _[0];
  for (let _ = 1, _ = _.length; _ < _; ++_) this._ += arguments[_] + _[_];
}
function _(_) {
  let _ = Math.floor(_);
  if (!(_ >= 0)) throw Error(`invalid digits: ${_}`);
  if (_ > 15) return _;
  let _ = 10 ** _;
  return function (_) {
    this._ += _[0];
    for (let _ = 1, _ = _.length; _ < _; ++_)
      this._ += Math.round(arguments[_] * _) / _ + _[_];
  };
}
var _ = class {
  constructor(_) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = _ == null ? _ : _(_)));
  }
  moveTo(_, _) {
    this._append`M${(this._x0 = this._x1 = +_)},${(this._y0 = this._y1 = +_)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(_, _) {
    this._append`L${(this._x1 = +_)},${(this._y1 = +_)}`;
  }
  quadraticCurveTo(_, _, _, _) {
    this._append`Q${+_},${+_},${(this._x1 = +_)},${(this._y1 = +_)}`;
  }
  bezierCurveTo(_, _, _, _, _, _) {
    this._append`C${+_},${+_},${+_},${+_},${(this._x1 = +_)},${(this._y1 = +_)}`;
  }
  arcTo(_, _, _, _, _) {
    if (((_ = +_), (_ = +_), (_ = +_), (_ = +_), (_ = +_), _ < 0))
      throw Error(`negative radius: ${_}`);
    let _ = this._x1,
      _ = this._y1,
      _ = _ - _,
      _ = _ - _,
      _ = _ - _,
      _ = _ - _,
      _ = _ * _ + _ * _;
    if (this._x1 === null) this._append`M${(this._x1 = _)},${(this._y1 = _)}`;
    else if (_ > _) {
      if (!(Math.abs(_ * _ - _ * _) > _) || !_)
        this._append`L${(this._x1 = _)},${(this._y1 = _)}`;
      else {
        let _ = _ - _,
          _ = _ - _,
          _ = _ * _ + _ * _,
          _ = _ * _ + _ * _,
          _ = Math.sqrt(_),
          _ = Math.sqrt(_),
          _ = _ * Math.tan((_ - Math.acos((_ + _ - _) / (2 * _ * _))) / 2),
          _ = _ / _,
          _ = _ / _;
        (Math.abs(_ - 1) > _ && this._append`L${_ + _ * _},${_ + _ * _}`,
          this._append`A${_},${_},0,0,${+(_ * _ > _ * _)},${(this._x1 = _ + _ * _)},${(this._y1 = _ + _ * _)}`);
      }
    }
  }
  arc(_, _, _, _, _, _) {
    if (((_ = +_), (_ = +_), (_ = +_), (_ = !!_), _ < 0))
      throw Error(`negative radius: ${_}`);
    let _ = _ * Math.cos(_),
      _ = _ * Math.sin(_),
      _ = _ + _,
      _ = _ + _,
      _ = 1 ^ _,
      _ = _ ? _ - _ : _ - _;
    (this._x1 === null
      ? this._append`M${_},${_}`
      : (Math.abs(this._x1 - _) > _ || Math.abs(this._y1 - _) > _) &&
        this._append`L${_},${_}`,
      _ &&
        (_ < 0 && (_ = (_ % _) + _),
        _ > _
          ? this._append`A${_},${_},0,1,${_},${_ - _},${_ - _}A${_},${_},0,1,${_},${(this._x1 = _)},${(this._y1 = _)}`
          : _ > _ &&
            this._append`A${_},${_},0,${+(_ >= _)},${_},${(this._x1 = _ + _ * Math.cos(_))},${(this._y1 = _ + _ * Math.sin(_))}`));
  }
  rect(_, _, _, _) {
    this._append`M${(this._x0 = this._x1 = +_)},${(this._y0 = this._y1 = +_)}h${(_ = +_)}v${+_}h${-_}Z`;
  }
  toString() {
    return this._;
  }
};
_.prototype;
function _(_) {
  let _ = 3;
  return (
    (_.digits = function (_) {
      if (!arguments.length) return _;
      if (_ == null) _ = null;
      else {
        let _ = Math.floor(_);
        if (!(_ >= 0)) throw RangeError(`invalid digits: ${_}`);
        _ = _;
      }
      return _;
    }),
    () => new _(_)
  );
}
Array.prototype.slice;
function _(_) {
  return typeof _ == `object` && `length` in _ ? _ : Array.from(_);
}
function _(_) {
  this._context = _;
}
_.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (_, _) {
    switch (((_ = +_), (_ = +_), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(_, _) : this._context.moveTo(_, _));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(_, _);
    }
  },
};
function _(_) {
  return new _(_);
}
function _(_) {
  return _[0];
}
function _(_) {
  return _[1];
}
function _(_, _) {
  var _ = _(!0),
    _ = null,
    _ = _,
    _ = null,
    _ = _(_);
  ((_ = typeof _ == `function` ? _ : _ === void 0 ? _ : _(_)),
    (_ = typeof _ == `function` ? _ : _ === void 0 ? _ : _(_)));
  function _(_) {
    var _,
      _ = (_ = _(_)).length,
      _,
      _ = !1,
      _;
    for (_ ?? (_ = _((_ = _()))), _ = 0; _ <= _; ++_)
      (!(_ < _ && _((_ = _[_]), _, _)) === _ &&
        ((_ = !_) ? _.lineStart() : _.lineEnd()),
        _ && _.point(+_(_, _, _), +_(_, _, _)));
    if (_) return ((_ = null), _ + `` || null);
  }
  return (
    (_._ = function (_) {
      return arguments.length
        ? ((_ = typeof _ == `function` ? _ : _(+_)), _)
        : _;
    }),
    (_._ = function (_) {
      return arguments.length
        ? ((_ = typeof _ == `function` ? _ : _(+_)), _)
        : _;
    }),
    (_.defined = function (_) {
      return arguments.length
        ? ((_ = typeof _ == `function` ? _ : _(!!_)), _)
        : _;
    }),
    (_.curve = function (_) {
      return arguments.length ? ((_ = _), _ != null && (_ = _(_)), _) : _;
    }),
    (_.context = function (_) {
      return arguments.length
        ? (_ == null ? (_ = _ = null) : (_ = _((_ = _))), _)
        : _;
    }),
    _
  );
}
function _(_, _, _) {
  var _ = null,
    _ = _(!0),
    _ = null,
    _ = _,
    _ = null,
    _ = _(_);
  ((_ = typeof _ == `function` ? _ : _ === void 0 ? _ : _(+_)),
    (_ = typeof _ == `function` ? _ : _(_ === void 0 ? 0 : +_)),
    (_ = typeof _ == `function` ? _ : _ === void 0 ? _ : _(+_)));
  function _(_) {
    var _,
      _,
      _,
      _ = (_ = _(_)).length,
      _,
      _ = !1,
      _,
      _ = Array(_),
      _ = Array(_);
    for (_ ?? (_ = _((_ = _()))), _ = 0; _ <= _; ++_) {
      if (!(_ < _ && _((_ = _[_]), _, _)) === _) {
        if ((_ = !_)) ((_ = _), _.areaStart(), _.lineStart());
        else {
          for (_.lineEnd(), _.lineStart(), _ = _ - 1; _ >= _; --_)
            _.point(_[_], _[_]);
          (_.lineEnd(), _.areaEnd());
        }
      }
      _ &&
        ((_[_] = +_(_, _, _)),
        (_[_] = +_(_, _, _)),
        _.point(_ ? +_(_, _, _) : _[_], _ ? +_(_, _, _) : _[_]));
    }
    if (_) return ((_ = null), _ + `` || null);
  }
  function _() {
    return _().defined(_).curve(_).context(_);
  }
  return (
    (_._ = function (_) {
      return arguments.length
        ? ((_ = typeof _ == `function` ? _ : _(+_)), (_ = null), _)
        : _;
    }),
    (_._ = function (_) {
      return arguments.length
        ? ((_ = typeof _ == `function` ? _ : _(+_)), _)
        : _;
    }),
    (_._ = function (_) {
      return arguments.length
        ? ((_ = _ == null ? null : typeof _ == `function` ? _ : _(+_)), _)
        : _;
    }),
    (_._ = function (_) {
      return arguments.length
        ? ((_ = typeof _ == `function` ? _ : _(+_)), (_ = null), _)
        : _;
    }),
    (_._ = function (_) {
      return arguments.length
        ? ((_ = typeof _ == `function` ? _ : _(+_)), _)
        : _;
    }),
    (_._ = function (_) {
      return arguments.length
        ? ((_ = _ == null ? null : typeof _ == `function` ? _ : _(+_)), _)
        : _;
    }),
    (_.lineX0 = _.lineY0 =
      function () {
        return _()._(_)._(_);
      }),
    (_.lineY1 = function () {
      return _()._(_)._(_);
    }),
    (_.lineX1 = function () {
      return _()._(_)._(_);
    }),
    (_.defined = function (_) {
      return arguments.length
        ? ((_ = typeof _ == `function` ? _ : _(!!_)), _)
        : _;
    }),
    (_.curve = function (_) {
      return arguments.length ? ((_ = _), _ != null && (_ = _(_)), _) : _;
    }),
    (_.context = function (_) {
      return arguments.length
        ? (_ == null ? (_ = _ = null) : (_ = _((_ = _))), _)
        : _;
    }),
    _
  );
}
var _ = class {
  constructor(_, _) {
    ((this._context = _), (this._ = _));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(_, _) {
    switch (((_ = +_), (_ = +_), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(_, _) : this._context.moveTo(_, _));
        break;
      case 1:
        this._point = 2;
      default:
        this._
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + _) / 2),
              this._y0,
              this._x0,
              _,
              _,
              _,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + _) / 2),
              _,
              this._y0,
              _,
              _,
            );
    }
    ((this._x0 = _), (this._y0 = _));
  }
};
function _(_) {
  return new _(_, !0);
}
function _(_) {
  return new _(_, !1);
}
var _ = {
    draw(_, _) {
      let _ = _(_ / _);
      (_.moveTo(_, 0), _.arc(0, 0, _, 0, _));
    },
  },
  _ = {
    draw(_, _) {
      let _ = _(_ / 5) / 2;
      (_.moveTo(-3 * _, -_),
        _.lineTo(-_, -_),
        _.lineTo(-_, -3 * _),
        _.lineTo(_, -3 * _),
        _.lineTo(_, -_),
        _.lineTo(3 * _, -_),
        _.lineTo(3 * _, _),
        _.lineTo(_, _),
        _.lineTo(_, 3 * _),
        _.lineTo(-_, 3 * _),
        _.lineTo(-_, _),
        _.lineTo(-3 * _, _),
        _.closePath());
    },
  },
  _ = _(1 / 3),
  _ = _ * 2,
  _ = {
    draw(_, _) {
      let _ = _(_ / _),
        _ = _ * _;
      (_.moveTo(0, -_),
        _.lineTo(_, 0),
        _.lineTo(0, _),
        _.lineTo(-_, 0),
        _.closePath());
    },
  },
  _ = {
    draw(_, _) {
      let _ = _(_),
        _ = -_ / 2;
      _.rect(_, _, _, _);
    },
  },
  _ = 0.8908130915292852,
  _ = _(_ / 10) / _((7 * _) / 10),
  _ = _(_ / 10) * _,
  _ = -_(_ / 10) * _,
  _ = {
    draw(_, _) {
      let _ = _(_ * _),
        _ = _ * _,
        _ = _ * _;
      (_.moveTo(0, -_), _.lineTo(_, _));
      for (let _ = 1; _ < 5; ++_) {
        let _ = (_ * _) / 5,
          _ = _(_),
          _ = _(_);
        (_.lineTo(_ * _, -_ * _), _.lineTo(_ * _ - _ * _, _ * _ + _ * _));
      }
      _.closePath();
    },
  },
  _ = _(3),
  _ = {
    draw(_, _) {
      let _ = -_(_ / (_ * 3));
      (_.moveTo(0, _ * 2),
        _.lineTo(-_ * _, -_),
        _.lineTo(_ * _, -_),
        _.closePath());
    },
  },
  _ = -0.5,
  _ = _(3) / 2,
  _ = 1 / _(12),
  _ = (_ / 2 + 1) * 3,
  _ = {
    draw(_, _) {
      let _ = _(_ / _),
        _ = _ / 2,
        _ = _ * _,
        _ = _,
        _ = _ * _ + _,
        _ = -_,
        _ = _;
      (_.moveTo(_, _),
        _.lineTo(_, _),
        _.lineTo(_, _),
        _.lineTo(_ * _ - _ * _, _ * _ + _ * _),
        _.lineTo(_ * _ - _ * _, _ * _ + _ * _),
        _.lineTo(_ * _ - _ * _, _ * _ + _ * _),
        _.lineTo(_ * _ + _ * _, _ * _ - _ * _),
        _.lineTo(_ * _ + _ * _, _ * _ - _ * _),
        _.lineTo(_ * _ + _ * _, _ * _ - _ * _),
        _.closePath());
    },
  };
function _(_, _) {
  let _ = null,
    _ = _(_);
  ((_ = typeof _ == `function` ? _ : _(_ || _)),
    (_ = typeof _ == `function` ? _ : _(_ === void 0 ? 64 : +_)));
  function _() {
    let _;
    if (
      ((_ ||= _ = _()),
      _.apply(this, arguments).draw(_, +_.apply(this, arguments)),
      _)
    )
      return ((_ = null), _ + `` || null);
  }
  return (
    (_.type = function (_) {
      return arguments.length
        ? ((_ = typeof _ == `function` ? _ : _(_)), _)
        : _;
    }),
    (_.size = function (_) {
      return arguments.length
        ? ((_ = typeof _ == `function` ? _ : _(+_)), _)
        : _;
    }),
    (_.context = function (_) {
      return arguments.length ? ((_ = _ ?? null), _) : _;
    }),
    _
  );
}
function _() {}
function _(_, _, _) {
  _._context.bezierCurveTo(
    (2 * _._x0 + _._x1) / 3,
    (2 * _._y0 + _._y1) / 3,
    (_._x0 + 2 * _._x1) / 3,
    (_._y0 + 2 * _._y1) / 3,
    (_._x0 + 4 * _._x1 + _) / 6,
    (_._y0 + 4 * _._y1 + _) / 6,
  );
}
function _(_) {
  this._context = _;
}
_.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        _(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (_, _) {
    switch (((_ = +_), (_ = +_), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(_, _) : this._context.moveTo(_, _));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          ));
      default:
        _(this, _, _);
    }
    ((this._x0 = this._x1),
      (this._x1 = _),
      (this._y0 = this._y1),
      (this._y1 = _));
  },
};
function _(_) {
  return new _(_);
}
function _(_) {
  this._context = _;
}
_.prototype = {
  areaStart: _,
  areaEnd: _,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      case 2:
        (this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath());
        break;
      case 3:
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
    }
  },
  point: function (_, _) {
    switch (((_ = +_), (_ = +_), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = _), (this._y2 = _));
        break;
      case 1:
        ((this._point = 2), (this._x3 = _), (this._y3 = _));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = _),
          (this._y4 = _),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + _) / 6,
            (this._y0 + 4 * this._y1 + _) / 6,
          ));
        break;
      default:
        _(this, _, _);
    }
    ((this._x0 = this._x1),
      (this._x1 = _),
      (this._y0 = this._y1),
      (this._y1 = _));
  },
};
function _(_) {
  return new _(_);
}
function _(_) {
  this._context = _;
}
_.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (_, _) {
    switch (((_ = +_), (_ = +_), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var _ = (this._x0 + 4 * this._x1 + _) / 6,
          _ = (this._y0 + 4 * this._y1 + _) / 6;
        this._line ? this._context.lineTo(_, _) : this._context.moveTo(_, _);
        break;
      case 3:
        this._point = 4;
      default:
        _(this, _, _);
    }
    ((this._x0 = this._x1),
      (this._x1 = _),
      (this._y0 = this._y1),
      (this._y1 = _));
  },
};
function _(_) {
  return new _(_);
}
function _(_) {
  this._context = _;
}
_.prototype = {
  areaStart: _,
  areaEnd: _,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (_, _) {
    ((_ = +_),
      (_ = +_),
      this._point
        ? this._context.lineTo(_, _)
        : ((this._point = 1), this._context.moveTo(_, _)));
  },
};
function _(_) {
  return new _(_);
}
function _(_) {
  return _ < 0 ? -1 : 1;
}
function _(_, _, _) {
  var _ = _._x1 - _._x0,
    _ = _ - _._x1,
    _ = (_._y1 - _._y0) / (_ || (_ < 0 && -0)),
    _ = (_ - _._y1) / (_ || (_ < 0 && -0)),
    _ = (_ * _ + _ * _) / (_ + _);
  return (
    (_(_) + _(_)) * Math.min(Math.abs(_), Math.abs(_), 0.5 * Math.abs(_)) || 0
  );
}
function _(_, _) {
  var _ = _._x1 - _._x0;
  return _ ? ((3 * (_._y1 - _._y0)) / _ - _) / 2 : _;
}
function _(_, _, _) {
  var _ = _._x0,
    _ = _._y0,
    _ = _._x1,
    _ = _._y1,
    _ = (_ - _) / 3;
  _._context.bezierCurveTo(_ + _, _ + _ * _, _ - _, _ - _ * _, _, _);
}
function _(_) {
  this._context = _;
}
_.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        _(this, this._t0, _(this, this._t0));
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (_, _) {
    var _ = NaN;
    if (((_ = +_), (_ = +_), _ !== this._x1 || _ !== this._y1)) {
      switch (this._point) {
        case 0:
          ((this._point = 1),
            this._line
              ? this._context.lineTo(_, _)
              : this._context.moveTo(_, _));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), _(this, _(this, (_ = _(this, _, _))), _));
          break;
        default:
          _(this, this._t0, (_ = _(this, _, _)));
      }
      ((this._x0 = this._x1),
        (this._x1 = _),
        (this._y0 = this._y1),
        (this._y1 = _),
        (this._t0 = _));
    }
  },
};
function _(_) {
  this._context = new _(_);
}
(_.prototype = Object.create(_.prototype)).point = function (_, _) {
  _.prototype.point.call(this, _, _);
};
function _(_) {
  this._context = _;
}
_.prototype = {
  moveTo: function (_, _) {
    this._context.moveTo(_, _);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (_, _) {
    this._context.lineTo(_, _);
  },
  bezierCurveTo: function (_, _, _, _, _, _) {
    this._context.bezierCurveTo(_, _, _, _, _, _);
  },
};
function _(_) {
  return new _(_);
}
function _(_) {
  return new _(_);
}
function _(_) {
  this._context = _;
}
_.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._ = []), (this._ = []));
  },
  lineEnd: function () {
    var _ = this._,
      _ = this._,
      _ = _.length;
    if (_) {
      if (
        (this._line
          ? this._context.lineTo(_[0], _[0])
          : this._context.moveTo(_[0], _[0]),
        _ === 2)
      )
        this._context.lineTo(_[1], _[1]);
      else
        for (var _ = _(_), _ = _(_), _ = 0, _ = 1; _ < _; ++_, ++_)
          this._context.bezierCurveTo(
            _[0][_],
            _[0][_],
            _[1][_],
            _[1][_],
            _[_],
            _[_],
          );
    }
    ((this._line || (this._line !== 0 && _ === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._ = this._ = null));
  },
  point: function (_, _) {
    (this._.push(+_), this._.push(+_));
  },
};
function _(_) {
  var _,
    _ = _.length - 1,
    _,
    _ = Array(_),
    _ = Array(_),
    _ = Array(_);
  for (_[0] = 0, _[0] = 2, _[0] = _[0] + 2 * _[1], _ = 1; _ < _ - 1; ++_)
    ((_[_] = 1), (_[_] = 4), (_[_] = 4 * _[_] + 2 * _[_ + 1]));
  for (
    _[_ - 1] = 2, _[_ - 1] = 7, _[_ - 1] = 8 * _[_ - 1] + _[_], _ = 1;
    _ < _;
    ++_
  )
    ((_ = _[_] / _[_ - 1]), (_[_] -= _), (_[_] -= _ * _[_ - 1]));
  for (_[_ - 1] = _[_ - 1] / _[_ - 1], _ = _ - 2; _ >= 0; --_)
    _[_] = (_[_] - _[_ + 1]) / _[_];
  for (_[_ - 1] = (_[_] + _[_ - 1]) / 2, _ = 0; _ < _ - 1; ++_)
    _[_] = 2 * _[_ + 1] - _[_ + 1];
  return [_, _];
}
function _(_) {
  return new _(_);
}
function _(_, _) {
  ((this._context = _), (this._ = _));
}
_.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._ = this._ = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._ &&
      this._ < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._, this._),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._ = 1 - this._), (this._line = 1 - this._line)));
  },
  point: function (_, _) {
    switch (((_ = +_), (_ = +_), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(_, _) : this._context.moveTo(_, _));
        break;
      case 1:
        this._point = 2;
      default:
        if (this._ <= 0)
          (this._context.lineTo(this._, _), this._context.lineTo(_, _));
        else {
          var _ = this._ * (1 - this._) + _ * this._;
          (this._context.lineTo(_, this._), this._context.lineTo(_, _));
        }
    }
    ((this._ = _), (this._ = _));
  },
};
function _(_) {
  return new _(_, 0.5);
}
function _(_) {
  return new _(_, 0);
}
function _(_) {
  return new _(_, 1);
}
function _(_, _) {
  if ((_ = _.length) > 1)
    for (var _ = 1, _, _, _ = _[_[0]], _, _ = _.length; _ < _; ++_)
      for (_ = _, _ = _[_[_]], _ = 0; _ < _; ++_)
        _[_][1] += _[_][0] = isNaN(_[_][1]) ? _[_][0] : _[_][1];
}
function _(_) {
  for (var _ = _.length, _ = Array(_); --_ >= 0;) _[_] = _;
  return _;
}
function _(_, _) {
  return _[_];
}
function _(_) {
  let _ = [];
  return ((_.key = _), _);
}
function _() {
  var _ = _([]),
    _ = _,
    _ = _,
    _ = _;
  function _(_) {
    var _ = Array.from(_.apply(this, arguments), _),
      _,
      _ = _.length,
      _ = -1,
      _;
    for (let _ of _)
      for (_ = 0, ++_; _ < _; ++_)
        (_[_][_] = [0, +_(_, _[_].key, _, _)]).data = _;
    for (_ = 0, _ = _(_(_)); _ < _; ++_) _[_[_]].index = _;
    return (_(_, _), _);
  }
  return (
    (_.keys = function (_) {
      return arguments.length
        ? ((_ = typeof _ == `function` ? _ : _(Array.from(_))), _)
        : _;
    }),
    (_.value = function (_) {
      return arguments.length
        ? ((_ = typeof _ == `function` ? _ : _(+_)), _)
        : _;
    }),
    (_.order = function (_) {
      return arguments.length
        ? ((_ = _ == null ? _ : typeof _ == `function` ? _ : _(Array.from(_))),
          _)
        : _;
    }),
    (_.offset = function (_) {
      return arguments.length ? ((_ = _ ?? _), _) : _;
    }),
    _
  );
}
function _(_, _) {
  if ((_ = _.length) > 0) {
    for (var _, _, _ = 0, _ = _[0].length, _; _ < _; ++_) {
      for (_ = _ = 0; _ < _; ++_) _ += _[_][_][1] || 0;
      if (_) for (_ = 0; _ < _; ++_) _[_][_][1] /= _;
    }
    _(_, _);
  }
}
function _(_, _) {
  if ((_ = _.length) > 0) {
    for (var _ = 0, _ = _[_[0]], _, _ = _.length; _ < _; ++_) {
      for (var _ = 0, _ = 0; _ < _; ++_) _ += _[_][_][1] || 0;
      _[_][1] += _[_][0] = -_ / 2;
    }
    _(_, _);
  }
}
function _(_, _) {
  if ((_ = _.length) > 0 && (_ = (_ = _[_[0]]).length) > 0) {
    for (var _ = 0, _ = 1, _, _, _; _ < _; ++_) {
      for (var _ = 0, _ = 0, _ = 0; _ < _; ++_) {
        for (
          var _ = _[_[_]],
            _ = _[_][1] || 0,
            _ = (_ - (_[_ - 1][1] || 0)) / 2,
            _ = 0;
          _ < _;
          ++_
        ) {
          var _ = _[_[_]],
            _ = _[_][1] || 0,
            _ = _[_ - 1][1] || 0;
          _ += _ - _;
        }
        ((_ += _), (_ += _ * _));
      }
      ((_[_ - 1][1] += _[_ - 1][0] = _), _ && (_ -= _ / _));
    }
    ((_[_ - 1][1] += _[_ - 1][0] = _), _(_, _));
  }
}
var _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return _ === `__proto__`;
    }
    _.isUnsafeProperty = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      switch (typeof _) {
        case `number`:
        case `symbol`:
          return !1;
        case `string`:
          return _.includes(`.`) || _.includes(`[`) || _.includes(`]`);
      }
    }
    _.isDeepKey = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return typeof _ == `string` || typeof _ == `symbol`
        ? _
        : Object._(_?.valueOf?.(), -0)
          ? `-0`
          : String(_);
    }
    _.toKey = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      let _ = [],
        _ = _.length;
      if (_ === 0) return _;
      let _ = 0,
        _ = ``,
        _ = ``,
        _ = !1;
      for (_.charCodeAt(0) === 46 && (_.push(``), _++); _ < _;) {
        let _ = _[_];
        (_
          ? _ === `\\` && _ + 1 < _
            ? (_++, (_ += _[_]))
            : _ === _
              ? (_ = ``)
              : (_ += _)
          : _
            ? _ === `"` || _ === `'`
              ? (_ = _)
              : _ === `]`
                ? ((_ = !1), _.push(_), (_ = ``))
                : (_ += _)
            : _ === `[`
              ? ((_ = !0), (_ &&= (_.push(_), ``)))
              : _ === `.`
                ? (_ &&= (_.push(_), ``))
                : (_ += _),
          _++);
      }
      return (_ && _.push(_), _);
    }
    _.toPath = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    function _(_, _, _) {
      if (_ == null) return _;
      switch (typeof _) {
        case `string`: {
          if (_.isUnsafeProperty(_)) return _;
          let _ = _[_];
          return _ === void 0 ? (_.isDeepKey(_) ? _(_, _.toPath(_), _) : _) : _;
        }
        case `number`:
        case `symbol`: {
          typeof _ == `number` && (_ = _.toKey(_));
          let _ = _[_];
          return _ === void 0 ? _ : _;
        }
        default: {
          if (Array.isArray(_)) return _(_, _, _);
          if (
            ((_ = Object._(_?.valueOf(), -0) ? `-0` : String(_)),
            _.isUnsafeProperty(_))
          )
            return _;
          let _ = _[_];
          return _ === void 0 ? _ : _;
        }
      }
    }
    function _(_, _, _) {
      if (_.length === 0) return _;
      let _ = _;
      for (let _ = 0; _ < _.length; _++) {
        if (_ == null || _.isUnsafeProperty(_[_])) return _;
        _ = _[_[_]];
      }
      return _ === void 0 ? _ : _;
    }
    _.get = _;
  }),
  _ = _((_, _) => {
    _.exports = _().get;
  }),
  _ = _(_()),
  _ = (_) => (_ === 0 ? 0 : _ > 0 ? 1 : -1),
  _ = (_) => typeof _ == `number` && _ != +_,
  _ = (_) => typeof _ == `string` && _.indexOf(`%`) === _.length - 1,
  _ = (_) => (typeof _ == `number` || _ instanceof Number) && !_(_),
  _ = (_) => _(_) || typeof _ == `string`,
  _ = 0,
  _ = (_) => {
    var _ = ++_;
    return `${_ || ``}${_}`;
  },
  _ = function (_, _) {
    var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      _ = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!_(_) && typeof _ != `string`) return _;
    var _;
    if (_(_)) {
      if (_ == null) return _;
      var _ = _.indexOf(`%`);
      _ = (_ * parseFloat(_.slice(0, _))) / 100;
    } else _ = +_;
    return (_(_) && (_ = _), _ && _ != null && _ > _ && (_ = _), _);
  },
  _ = (_) => {
    if (!Array.isArray(_)) return !1;
    for (var _ = _.length, _ = {}, _ = 0; _ < _; _++)
      if (!_[_[_]]) _[_[_]] = !0;
      else return !0;
    return !1;
  };
function _(_, _, _) {
  return _(_) && _(_) ? _ + _ * (_ - _) : _;
}
function _(_, _, _) {
  if (_ && _.length)
    return _.find(
      (_) => _ && (typeof _ == `function` ? _(_) : (0, _.default)(_, _)) === _,
    );
}
var _ = (_) => _ == null,
  _ = (_) => (_(_) ? _ : `${_.charAt(0).toUpperCase()}${_.slice(1)}`),
  _ = [`type`, `size`, `sizeType`];
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = {
    symbolCircle: _,
    symbolCross: _,
    symbolDiamond: _,
    symbolSquare: _,
    symbolStar: _,
    symbolTriangle: _,
    symbolWye: _,
  },
  _ = Math._ / 180,
  _ = (_) => _[`symbol${_(_)}`] || _,
  _ = (_, _, _) => {
    if (_ === `area`) return _;
    switch (_) {
      case `cross`:
        return (5 * _ * _) / 9;
      case `diamond`:
        return (0.5 * _ * _) / Math.sqrt(3);
      case `square`:
        return _ * _;
      case `star`:
        var _ = 18 * _;
        return (
          1.25 * _ * _ * (Math.tan(_) - Math.tan(_ * 2) * Math.tan(_) ** 2)
        );
      case `triangle`:
        return (Math.sqrt(3) * _ * _) / 4;
      case `wye`:
        return ((21 - 10 * Math.sqrt(3)) * _ * _) / 8;
      default:
        return (Math._ * _ * _) / 4;
    }
  },
  _ = (_, _) => {
    _[`symbol${_(_)}`] = _;
  },
  _ = (_) => {
    var { type: _ = `circle`, size: _ = 64, sizeType: _ = `area` } = _,
      _ = _(
        _({}, _(_, _)),
        {},
        {
          type: _,
          size: _,
          sizeType: _,
        },
      ),
      _ = `circle`;
    typeof _ == `string` && (_ = _);
    var _ = () => {
        var _ = _(_),
          _ = _()
            .type(_)
            .size(_(_, _, _))();
        if (_ !== null) return _;
      },
      { className: _, _: _, _: _ } = _,
      _ = _(_);
    return _ === +_ && _ === +_ && _ === +_
      ? _.createElement(
          `path`,
          _({}, _, {
            className: _(`recharts-symbols`, _),
            transform: `translate(${_}, ${_})`,
            _: _(),
          }),
        )
      : null;
  };
_.registerSymbol = _;
var _ = (_, _) => {
    if (!_ || typeof _ == `function` || typeof _ == `boolean`) return null;
    var _ = _;
    if (
      ((0, _.isValidElement)(_) && (_ = _.props),
      typeof _ != `object` && typeof _ != `function`)
    )
      return null;
    var _ = {};
    return (
      Object.keys(_).forEach((_) => {
        _(_) && (_[_] = _ || ((_) => _[_](_, _)));
      }),
      _
    );
  },
  _ = (_, _, _) => (_) => (_(_, _, _), null),
  _ = (_, _, _) => {
    if (_ === null || (typeof _ != `object` && typeof _ != `function`))
      return null;
    var _ = null;
    return (
      Object.keys(_).forEach((_) => {
        var _ = _[_];
        _(_) && typeof _ == `function` && ((_ ||= {}), (_[_] = _(_, _, _)));
      }),
      _
    );
  },
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_, _) {
      let _ = new Map();
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_],
          _ = _(_);
        _.has(_) || _.set(_, _);
      }
      return Array.from(_.values());
    }
    _.uniqBy = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return _;
    }
    _.identity = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return Number.isSafeInteger(_) && _ >= 0;
    }
    _.isLength = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _();
    function _(_) {
      return _ != null && typeof _ != `function` && _.isLength(_.length);
    }
    _.isArrayLike = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return typeof _ == `object` && !!_;
    }
    _.isObjectLike = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _();
    function _(_) {
      return _.isObjectLike(_) && _.isArrayLike(_);
    }
    _.isArrayLikeObject = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _();
    function _(_) {
      return function (_) {
        return _.get(_, _);
      };
    }
    _.property = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return _ !== null && (typeof _ == `object` || typeof _ == `function`);
    }
    _.isObject = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return _ == null || (typeof _ != `object` && typeof _ != `function`);
    }
    _.isPrimitive = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_, _) {
      return _ === _ || (Number.isNaN(_) && Number.isNaN(_));
    }
    _._ = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    function _(_, _, _) {
      return typeof _ == `function`
        ? _(
            _,
            _,
            function _(_, _, _, _, _, _) {
              let _ = _(_, _, _, _, _, _);
              return _ === void 0 ? _(_, _, _, _) : !!_;
            },
            new Map(),
          )
        : _.isMatch(_, _);
    }
    function _(_, _, _, _) {
      if (_ === _) return !0;
      switch (typeof _) {
        case `object`:
          return _(_, _, _, _);
        case `function`:
          return Object.keys(_).length > 0
            ? _(
                _,
                {
                  ..._,
                },
                _,
                _,
              )
            : _._(_, _);
        default:
          return _.isObject(_) ? typeof _ != `string` || _ === `` : _._(_, _);
      }
    }
    function _(_, _, _, _) {
      if (_ == null) return !0;
      if (Array.isArray(_)) return _(_, _, _, _);
      if (_ instanceof Map) return _(_, _, _, _);
      if (_ instanceof Set) return _(_, _, _, _);
      let _ = Object.keys(_);
      if (_ == null) return _.length === 0;
      if (_.length === 0) return !0;
      if (_ && _.has(_)) return _.get(_) === _;
      _ && _.set(_, _);
      try {
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_];
          if (
            (!_.isPrimitive(_) && !(_ in _)) ||
            (_[_] === void 0 && _[_] !== void 0) ||
            (_[_] === null && _[_] !== null) ||
            !_(_[_], _[_], _, _, _, _)
          )
            return !1;
        }
        return !0;
      } finally {
        _ && _.delete(_);
      }
    }
    function _(_, _, _, _) {
      if (_.size === 0) return !0;
      if (!(_ instanceof Map)) return !1;
      for (let [_, _] of _.entries())
        if (_(_.get(_), _, _, _, _, _) === !1) return !1;
      return !0;
    }
    function _(_, _, _, _) {
      if (_.length === 0) return !0;
      if (!Array.isArray(_)) return !1;
      let _ = new Set();
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_],
          _ = !1;
        for (let _ = 0; _ < _.length; _++) {
          if (_.has(_)) continue;
          let _ = _[_],
            _ = !1;
          if ((_(_, _, _, _, _, _) && (_ = !0), _)) {
            (_.add(_), (_ = !0));
            break;
          }
        }
        if (!_) return !1;
      }
      return !0;
    }
    function _(_, _, _, _) {
      return _.size === 0 || (_ instanceof Set && _([..._], [..._], _, _));
    }
    ((_.isMatchWith = _), (_.isSetMatch = _));
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _();
    function _(_, _) {
      return _.isMatchWith(_, _, () => void 0);
    }
    _.isMatch = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return Object.getOwnPropertySymbols(_).filter((_) =>
        Object.prototype.propertyIsEnumerable.call(_, _),
      );
    }
    _.getSymbols = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return _ == null
        ? _ === void 0
          ? `[object Undefined]`
          : `[object Null]`
        : Object.prototype.toString.call(_);
    }
    _.getTag = _;
  }),
  _ = _((_) => {
    (Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    }),
      (_.argumentsTag = `[object Arguments]`),
      (_.arrayBufferTag = `[object ArrayBuffer]`),
      (_.arrayTag = `[object Array]`),
      (_.bigInt64ArrayTag = `[object BigInt64Array]`),
      (_.bigUint64ArrayTag = `[object BigUint64Array]`),
      (_.booleanTag = `[object Boolean]`),
      (_.dataViewTag = `[object DataView]`),
      (_.dateTag = `[object Date]`),
      (_.errorTag = `[object Error]`),
      (_.float32ArrayTag = `[object Float32Array]`),
      (_.float64ArrayTag = `[object Float64Array]`),
      (_.functionTag = `[object Function]`),
      (_.int16ArrayTag = `[object Int16Array]`),
      (_.int32ArrayTag = `[object Int32Array]`),
      (_.int8ArrayTag = `[object Int8Array]`),
      (_.mapTag = `[object Map]`),
      (_.numberTag = `[object Number]`),
      (_.objectTag = `[object Object]`),
      (_.regexpTag = `[object RegExp]`),
      (_.setTag = `[object Set]`),
      (_.stringTag = `[object String]`),
      (_.symbolTag = `[object Symbol]`),
      (_.uint16ArrayTag = `[object Uint16Array]`),
      (_.uint32ArrayTag = `[object Uint32Array]`),
      (_.uint8ArrayTag = `[object Uint8Array]`),
      (_.uint8ClampedArrayTag = `[object Uint8ClampedArray]`));
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return ArrayBuffer.isView(_) && !(_ instanceof DataView);
    }
    _.isTypedArray = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    function _(_, _) {
      return _(_, void 0, _, new Map(), _);
    }
    function _(_, _, _, _ = new Map(), _ = void 0) {
      let _ = _?.(_, _, _, _);
      if (_ !== void 0) return _;
      if (_.isPrimitive(_)) return _;
      if (_.has(_)) return _.get(_);
      if (Array.isArray(_)) {
        let _ = Array(_.length);
        _.set(_, _);
        for (let _ = 0; _ < _.length; _++) _[_] = _(_[_], _, _, _, _);
        return (
          Object.hasOwn(_, `index`) && (_.index = _.index),
          Object.hasOwn(_, `input`) && (_.input = _.input),
          _
        );
      }
      if (_ instanceof Date) return new Date(_.getTime());
      if (_ instanceof RegExp) {
        let _ = new RegExp(_.source, _.flags);
        return ((_.lastIndex = _.lastIndex), _);
      }
      if (_ instanceof Map) {
        let _ = new Map();
        _.set(_, _);
        for (let [_, _] of _) _.set(_, _(_, _, _, _, _));
        return _;
      }
      if (_ instanceof Set) {
        let _ = new Set();
        _.set(_, _);
        for (let _ of _) _.add(_(_, void 0, _, _, _));
        return _;
      }
      if (typeof Buffer < `u` && Buffer.isBuffer(_)) return _.subarray();
      if (_.isTypedArray(_)) {
        let _ = new (Object.getPrototypeOf(_).constructor)(_.length);
        _.set(_, _);
        for (let _ = 0; _ < _.length; _++) _[_] = _(_[_], _, _, _, _);
        return _;
      }
      if (
        _ instanceof ArrayBuffer ||
        (typeof SharedArrayBuffer < `u` && _ instanceof SharedArrayBuffer)
      )
        return _.slice(0);
      if (_ instanceof DataView) {
        let _ = new DataView(_.buffer.slice(0), _.byteOffset, _.byteLength);
        return (_.set(_, _), _(_, _, _, _, _), _);
      }
      if (typeof File < `u` && _ instanceof File) {
        let _ = new File([_], _.name, {
          type: _.type,
        });
        return (_.set(_, _), _(_, _, _, _, _), _);
      }
      if (_ instanceof Blob) {
        let _ = new Blob([_], {
          type: _.type,
        });
        return (_.set(_, _), _(_, _, _, _, _), _);
      }
      if (_ instanceof Error) {
        let _ = new _.constructor();
        return (
          _.set(_, _),
          (_.message = _.message),
          (_.name = _.name),
          (_.stack = _.stack),
          (_.cause = _.cause),
          _(_, _, _, _, _),
          _
        );
      }
      if (typeof _ == `object` && _(_)) {
        let _ = Object.create(Object.getPrototypeOf(_));
        return (_.set(_, _), _(_, _, _, _, _), _);
      }
      return _;
    }
    function _(_, _, _ = _, _, _) {
      let _ = [...Object.keys(_), ..._.getSymbols(_)];
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_],
          _ = Object.getOwnPropertyDescriptor(_, _);
        (_ == null || _.writable) && (_[_] = _(_[_], _, _, _, _));
      }
    }
    function _(_) {
      switch (_.getTag(_)) {
        case _.argumentsTag:
        case _.arrayTag:
        case _.arrayBufferTag:
        case _.dataViewTag:
        case _.booleanTag:
        case _.dateTag:
        case _.float32ArrayTag:
        case _.float64ArrayTag:
        case _.int8ArrayTag:
        case _.int16ArrayTag:
        case _.int32ArrayTag:
        case _.mapTag:
        case _.numberTag:
        case _.objectTag:
        case _.regexpTag:
        case _.setTag:
        case _.stringTag:
        case _.symbolTag:
        case _.uint8ArrayTag:
        case _.uint8ClampedArrayTag:
        case _.uint16ArrayTag:
        case _.uint32ArrayTag:
          return !0;
        default:
          return !1;
      }
    }
    ((_.cloneDeepWith = _), (_.cloneDeepWithImpl = _), (_.copyProperties = _));
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _();
    function _(_) {
      return _.cloneDeepWithImpl(_, void 0, _, new Map(), void 0);
    }
    _.cloneDeep = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _();
    function _(_) {
      return ((_ = _.cloneDeep(_)), (_) => _.isMatch(_, _));
    }
    _.matches = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _();
    function _(_, _) {
      return _.cloneDeepWith(_, (_, _, _, _) => {
        let _ = _?.(_, _, _, _);
        if (_ !== void 0) return _;
        if (typeof _ == `object`)
          switch (Object.prototype.toString.call(_)) {
            case _.numberTag:
            case _.stringTag:
            case _.booleanTag: {
              let _ = new _.constructor(_?.valueOf());
              return (_.copyProperties(_, _), _);
            }
            case _.argumentsTag: {
              let _ = {};
              return (
                _.copyProperties(_, _),
                (_.length = _.length),
                (_[Symbol.iterator] = _[Symbol.iterator]),
                _
              );
            }
            default:
              return;
          }
      });
    }
    _.cloneDeepWith = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _();
    function _(_) {
      return _.cloneDeepWith(_);
    }
    _.cloneDeep = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = /^(?:0|[1-9]\d*)$/;
    function _(_, _ = 2 ** 53 - 1) {
      switch (typeof _) {
        case `number`:
          return Number.isInteger(_) && _ >= 0 && _ < _;
        case `symbol`:
          return !1;
        case `string`:
          return _.test(_);
      }
    }
    _.isIndex = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _();
    function _(_) {
      return (
        typeof _ == `object` && !!_ && _.getTag(_) === `[object Arguments]`
      );
    }
    _.isArguments = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    function _(_, _) {
      let _;
      if (
        ((_ = Array.isArray(_)
          ? _
          : typeof _ == `string` && _.isDeepKey(_) && _?.[_] == null
            ? _.toPath(_)
            : [_]),
        _.length === 0)
      )
        return !1;
      let _ = _;
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        if (
          (_ == null || !Object.hasOwn(_, _)) &&
          !(
            (Array.isArray(_) || _.isArguments(_)) &&
            _.isIndex(_) &&
            _ < _.length
          )
        )
          return !1;
        _ = _[_];
      }
      return !0;
    }
    _.has = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    function _(_, _) {
      switch (typeof _) {
        case `object`:
          Object._(_?.valueOf(), -0) && (_ = `-0`);
          break;
        case `number`:
          _ = _.toKey(_);
      }
      return (
        (_ = _.cloneDeep(_)),
        function (_) {
          let _ = _.get(_, _);
          return _ === void 0
            ? _.has(_, _)
            : _ === void 0
              ? _ === void 0
              : _.isMatch(_, _);
        }
      );
    }
    _.matchesProperty = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    function _(_) {
      if (_ == null) return _.identity;
      switch (typeof _) {
        case `function`:
          return _;
        case `object`:
          return Array.isArray(_) && _.length === 2
            ? _.matchesProperty(_[0], _[1])
            : _.matches(_);
        case `string`:
        case `symbol`:
        case `number`:
          return _.property(_);
      }
    }
    _.iteratee = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    function _(_, _ = _.identity) {
      return _.isArrayLikeObject(_)
        ? _.uniqBy(Array.from(_), _.iteratee(_))
        : [];
    }
    _.uniqBy = _;
  }),
  _ = _(
    _((_, _) => {
      _.exports = _().uniqBy;
    })(),
  );
function _(_, _, _) {
  return _ === !0
    ? (0, _.default)(_, _)
    : typeof _ == `function`
      ? (0, _.default)(_, _)
      : _;
}
var _ = _((_) => {
    var _ = _(),
      _ = _();
    function _(_, _) {
      return (_ === _ && (_ !== 0 || 1 / _ == 1 / _)) || (_ !== _ && _ !== _);
    }
    var _ = typeof Object._ == `function` ? Object._ : _,
      _ = _.useSyncExternalStore,
      _ = _.useRef,
      _ = _.useEffect,
      _ = _.useMemo,
      _ = _.useDebugValue;
    _.useSyncExternalStoreWithSelector = function (_, _, _, _, _) {
      var _ = _(null);
      if (_.current === null) {
        var _ = {
          hasValue: !1,
          value: null,
        };
        _.current = _;
      } else _ = _.current;
      _ = _(
        function () {
          function _(_) {
            if (!_) {
              if (((_ = !0), (_ = _), (_ = _(_)), _ !== void 0 && _.hasValue)) {
                var _ = _.value;
                if (_(_, _)) return (_ = _);
              }
              return (_ = _);
            }
            if (((_ = _), _(_, _))) return _;
            var _ = _(_);
            return _ !== void 0 && _(_, _) ? ((_ = _), _) : ((_ = _), (_ = _));
          }
          var _ = !1,
            _,
            _,
            _ = _ === void 0 ? null : _;
          return [
            function () {
              return _(_());
            },
            _ === null
              ? void 0
              : function () {
                  return _(_());
                },
          ];
        },
        [_, _, _, _],
      );
      var _ = _(_, _[0], _[1]);
      return (
        _(
          function () {
            ((_.hasValue = !0), (_.value = _));
          },
          [_],
        ),
        _(_),
        _
      );
    };
  }),
  _ = _((_, _) => {
    _.exports = _();
  })(),
  _ = (0, _.createContext)(null),
  _ = (_) => _,
  _ = () => {
    var _ = (0, _.useContext)(_);
    return _ ? _.store.dispatch : _;
  },
  _ = () => {},
  _ = () => _,
  _ = (_, _) => _ === _;
function _(_) {
  var _ = (0, _.useContext)(_);
  return (0, _.useSyncExternalStoreWithSelector)(
    _ ? _.subscription.addNestedSub : _,
    _ ? _.store.getState : _,
    _ ? _.store.getState : _,
    _ ? _ : _,
    _,
  );
}
function _(_, _ = `expected a function, instead received ${typeof _}`) {
  if (typeof _ != `function`) throw TypeError(_);
}
function _(_, _ = `expected an object, instead received ${typeof _}`) {
  if (typeof _ != `object`) throw TypeError(_);
}
function _(
  _,
  _ = `expected all items to be functions, instead received the following types: `,
) {
  if (!_.every((_) => typeof _ == `function`)) {
    let _ = _.map((_) =>
      typeof _ == `function` ? `function ${_.name || `unnamed`}()` : typeof _,
    ).join(`, `);
    throw TypeError(`${_}[${_}]`);
  }
}
var _ = (_) => (Array.isArray(_) ? _ : [_]);
function _(_) {
  let _ = Array.isArray(_[0]) ? _[0] : _;
  return (
    _(
      _,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    _
  );
}
function _(_, _) {
  let _ = [],
    { length: _ } = _;
  for (let _ = 0; _ < _; _++) _.push(_[_].apply(null, _));
  return _;
}
var _ = class {
    constructor(_) {
      this.value = _;
    }
    deref() {
      return this.value;
    }
  },
  _ = typeof WeakRef < `u` ? WeakRef : _,
  _ = 0,
  _ = 1;
function _() {
  return {
    _: _,
    _: void 0,
    _: null,
    _: null,
  };
}
function _(_, _ = {}) {
  let _ = _(),
    { resultEqualityCheck: _ } = _,
    _,
    _ = 0;
  function _() {
    let _ = _,
      { length: _ } = arguments;
    for (let _ = 0, _ = _; _ < _; _++) {
      let _ = arguments[_];
      if (typeof _ == `function` || (typeof _ == `object` && _)) {
        let _ = _._;
        _ === null && (_._ = _ = new WeakMap());
        let _ = _.get(_);
        _ === void 0 ? ((_ = _()), _.set(_, _)) : (_ = _);
      } else {
        let _ = _._;
        _ === null && (_._ = _ = new Map());
        let _ = _.get(_);
        _ === void 0 ? ((_ = _()), _.set(_, _)) : (_ = _);
      }
    }
    let _ = _,
      _;
    if (_._ === _) _ = _._;
    else if (((_ = _.apply(null, arguments)), _++, _)) {
      let _ = _?.deref?.() ?? _;
      (_ != null && _(_, _) && ((_ = _), _ !== 0 && _--),
        (_ =
          (typeof _ == `object` && _) || typeof _ == `function`
            ? new _(_)
            : _));
    }
    return ((_._ = _), (_._ = _), _);
  }
  return (
    (_.clearCache = () => {
      ((_ = _()), _.resetResultsCount());
    }),
    (_.resultsCount = () => _),
    (_.resetResultsCount = () => {
      _ = 0;
    }),
    _
  );
}
function _(_, ..._) {
  let _ =
      typeof _ == `function`
        ? {
            memoize: _,
            memoizeOptions: _,
          }
        : _,
    _ = (..._) => {
      let _ = 0,
        _ = 0,
        _,
        _ = {},
        _ = _.pop();
      (typeof _ == `object` && ((_ = _), (_ = _.pop())),
        _(
          _,
          `createSelector expects an output function after the inputs, but received: [${typeof _}]`,
        ));
      let {
          memoize: _,
          memoizeOptions: _ = [],
          argsMemoize: _ = _,
          argsMemoizeOptions: _ = [],
          devModeChecks: _ = {},
        } = {
          ..._,
          ..._,
        },
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(
          function () {
            return (_++, _.apply(null, arguments));
          },
          ..._,
        ),
        _ = _(
          function () {
            _++;
            let _ = _(_, arguments);
            return ((_ = _.apply(null, _)), _);
          },
          ..._,
        );
      return Object.assign(_, {
        resultFunc: _,
        memoizedResultFunc: _,
        dependencies: _,
        dependencyRecomputations: () => _,
        resetDependencyRecomputations: () => {
          _ = 0;
        },
        lastResult: () => _,
        recomputations: () => _,
        resetRecomputations: () => {
          _ = 0;
        },
        memoize: _,
        argsMemoize: _,
      });
    };
  return (
    Object.assign(_, {
      withTypes: () => _,
    }),
    _
  );
}
var _ = _(_),
  _ = Object.assign(
    (_, _ = _) => {
      _(
        _,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof _}`,
      );
      let _ = Object.keys(_);
      return _(
        _.map((_) => _[_]),
        (..._) => _.reduce((_, _, _) => ((_[_[_]] = _), _), {}),
      );
    },
    {
      withTypes: () => _,
    },
  ),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return typeof _ == `symbol`
        ? 1
        : _ === null
          ? 2
          : _ === void 0
            ? 3
            : _ === _
              ? 0
              : 4;
    }
    _.compareValues = (_, _, _) => {
      if (_ !== _) {
        let _ = _(_),
          _ = _(_);
        if (_ === _ && _ === 0) {
          if (_ < _) return _ === `desc` ? 1 : -1;
          if (_ > _) return _ === `desc` ? -1 : 1;
        }
        return _ === `desc` ? _ - _ : _ - _;
      }
      return 0;
    };
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return typeof _ == `symbol` || _ instanceof Symbol;
    }
    _.isSymbol = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      _ = /^\w*$/;
    function _(_, _) {
      return Array.isArray(_)
        ? !1
        : typeof _ == `number` ||
            typeof _ == `boolean` ||
            _ == null ||
            _.isSymbol(_)
          ? !0
          : (typeof _ == `string` && (_.test(_) || !_.test(_))) ||
            (_ != null && Object.hasOwn(_, _));
    }
    _.isKey = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _(),
      _ = _();
    function _(_, _, _, _) {
      if (_ == null) return [];
      ((_ = _ ? void 0 : _),
        Array.isArray(_) || (_ = Object.values(_)),
        Array.isArray(_) || (_ = _ == null ? [null] : [_]),
        _.length === 0 && (_ = [null]),
        Array.isArray(_) || (_ = _ == null ? [] : [_]),
        (_ = _.map((_) => String(_))));
      let _ = (_, _) => {
          let _ = _;
          for (let _ = 0; _ < _.length && _ != null; ++_) _ = _[_[_]];
          return _;
        },
        _ = (_, _) =>
          _ == null || _ == null
            ? _
            : typeof _ == `object` && `key` in _
              ? Object.hasOwn(_, _.key)
                ? _[_.key]
                : _(_, _.path)
              : typeof _ == `function`
                ? _(_)
                : Array.isArray(_)
                  ? _(_, _)
                  : typeof _ == `object`
                    ? _[_]
                    : _,
        _ = _.map(
          (_) => (
            Array.isArray(_) && _.length === 1 && (_ = _[0]),
            _ == null ||
            typeof _ == `function` ||
            Array.isArray(_) ||
            _.isKey(_)
              ? _
              : {
                  key: _,
                  path: _.toPath(_),
                }
          ),
        );
      return _.map((_) => ({
        original: _,
        criteria: _.map((_) => _(_, _)),
      }))
        .slice()
        .sort((_, _) => {
          for (let _ = 0; _ < _.length; _++) {
            let _ = _.compareValues(_.criteria[_], _.criteria[_], _[_]);
            if (_ !== 0) return _;
          }
          return 0;
        })
        .map((_) => _.original);
    }
    _.orderBy = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_, _ = 1) {
      let _ = [],
        _ = Math.floor(_),
        _ = (_, _) => {
          for (let _ = 0; _ < _.length; _++) {
            let _ = _[_];
            Array.isArray(_) && _ < _ ? _(_, _ + 1) : _.push(_);
          }
        };
      return (_(_, 0), _);
    }
    _.flatten = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    function _(_, _, _) {
      return _.isObject(_) &&
        ((typeof _ == `number` &&
          _.isArrayLike(_) &&
          _.isIndex(_) &&
          _ < _.length) ||
          (typeof _ == `string` && _ in _))
        ? _._(_[_], _)
        : !1;
    }
    _.isIterateeCall = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _(),
      _ = _();
    function _(_, ..._) {
      let _ = _.length;
      return (
        _ > 1 && _.isIterateeCall(_, _[0], _[1])
          ? (_ = [])
          : _ > 2 && _.isIterateeCall(_[0], _[1], _[2]) && (_ = [_[0]]),
        _.orderBy(_, _.flatten(_), [`asc`])
      );
    }
    _.sortBy = _;
  }),
  _ = _(
    _((_, _) => {
      _.exports = _().sortBy;
    })(),
  ),
  _ = (_) => _.legend.settings,
  _ = (_) => _.legend.size,
  _ = _([(_) => _.legend.payload, _], (_, _) => {
    var { itemSorter: _ } = _,
      _ = _.flat(1);
    return _ ? (0, _.default)(_, _) : _;
  }),
  _ = 1;
function _() {
  var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    [_, _] = (0, _.useState)({
      height: 0,
      left: 0,
      top: 0,
      width: 0,
    });
  return [
    _,
    (0, _.useCallback)(
      (_) => {
        if (_ != null) {
          var _ = _.getBoundingClientRect(),
            _ = {
              height: _.height,
              left: _.left,
              top: _.top,
              width: _.width,
            };
          (Math.abs(_.height - _.height) > _ ||
            Math.abs(_.left - _.left) > _ ||
            Math.abs(_.top - _.top) > _ ||
            Math.abs(_.width - _.width) > _) &&
            _({
              height: _.height,
              left: _.left,
              top: _.top,
              width: _.width,
            });
        }
      },
      [_.width, _.height, _.top, _.left, ..._],
    ),
  ];
}
function _(_) {
  return `Minified Redux error #${_}; visit https://redux.js.org/Errors?code=${_} for the full message or use the non-minified dev environment for full errors. `;
}
var _ = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  _ = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  _ = {
    INIT: `@@redux/INIT${_()}`,
    REPLACE: `@@redux/REPLACE${_()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${_()}`,
  };
function _(_) {
  if (typeof _ != `object` || !_) return !1;
  let _ = _;
  for (; Object.getPrototypeOf(_) !== null;) _ = Object.getPrototypeOf(_);
  return Object.getPrototypeOf(_) === _ || Object.getPrototypeOf(_) === null;
}
function _(_, _, _) {
  if (typeof _ != `function`) throw Error(_(2));
  if (
    (typeof _ == `function` && typeof _ == `function`) ||
    (typeof _ == `function` && typeof arguments[3] == `function`)
  )
    throw Error(_(0));
  if (
    (typeof _ == `function` && _ === void 0 && ((_ = _), (_ = void 0)),
    _ !== void 0)
  ) {
    if (typeof _ != `function`) throw Error(_(1));
    return _(_)(_, _);
  }
  let _ = _,
    _ = _,
    _ = new Map(),
    _ = _,
    _ = 0,
    _ = !1;
  function _() {
    _ === _ &&
      ((_ = new Map()),
      _.forEach((_, _) => {
        _.set(_, _);
      }));
  }
  function _() {
    if (_) throw Error(_(3));
    return _;
  }
  function _(_) {
    if (typeof _ != `function`) throw Error(_(4));
    if (_) throw Error(_(5));
    let _ = !0;
    _();
    let _ = _++;
    return (
      _.set(_, _),
      function () {
        if (_) {
          if (_) throw Error(_(6));
          ((_ = !1), _(), _.delete(_), (_ = null));
        }
      }
    );
  }
  function _(_) {
    if (!_(_)) throw Error(_(7));
    if (_.type === void 0) throw Error(_(8));
    if (typeof _.type != `string`) throw Error(_(17));
    if (_) throw Error(_(9));
    try {
      ((_ = !0), (_ = _(_, _)));
    } finally {
      _ = !1;
    }
    return (
      (_ = _).forEach((_) => {
        _();
      }),
      _
    );
  }
  function _(_) {
    if (typeof _ != `function`) throw Error(_(10));
    ((_ = _),
      _({
        type: _.REPLACE,
      }));
  }
  function _() {
    let _ = _;
    return {
      subscribe(_) {
        if (typeof _ != `object` || !_) throw Error(_(11));
        function _() {
          let _ = _;
          _.next && _.next(_());
        }
        return (
          _(),
          {
            unsubscribe: _(_),
          }
        );
      },
      [_]() {
        return this;
      },
    };
  }
  return (
    _({
      type: _.INIT,
    }),
    {
      dispatch: _,
      subscribe: _,
      getState: _,
      replaceReducer: _,
      [_]: _,
    }
  );
}
function _(_) {
  Object.keys(_).forEach((_) => {
    let _ = _[_];
    if (
      _(void 0, {
        type: _.INIT,
      }) === void 0
    )
      throw Error(_(12));
    if (
      _(void 0, {
        type: _.PROBE_UNKNOWN_ACTION(),
      }) === void 0
    )
      throw Error(_(13));
  });
}
function _(_) {
  let _ = Object.keys(_),
    _ = {};
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    typeof _[_] == `function` && (_[_] = _[_]);
  }
  let _ = Object.keys(_),
    _;
  try {
    _(_);
  } catch (_) {
    _ = _;
  }
  return function (_ = {}, _) {
    if (_) throw _;
    let _ = !1,
      _ = {};
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_],
        _ = _[_],
        _ = _[_],
        _ = _(_, _);
      if (_ === void 0) throw (_ && _.type, Error(_(14)));
      ((_[_] = _), (_ ||= _ !== _));
    }
    return ((_ ||= _.length !== Object.keys(_).length), _ ? _ : _);
  };
}
function _(..._) {
  return _.length === 0
    ? (_) => _
    : _.length === 1
      ? _[0]
      : _.reduce(
          (_, _) =>
            (..._) =>
              _(_(..._)),
        );
}
function _(..._) {
  return (_) => (_, _) => {
    let _ = _(_, _),
      _ = () => {
        throw Error(_(15));
      },
      _ = {
        getState: _.getState,
        dispatch: (_, ..._) => _(_, ..._),
      };
    return (
      (_ = _(..._.map((_) => _(_)))(_.dispatch)),
      {
        ..._,
        dispatch: _,
      }
    );
  };
}
function _(_) {
  return _(_) && `type` in _ && typeof _.type == `string`;
}
var _ = Symbol.for(`immer-nothing`),
  _ = Symbol.for(`immer-draftable`),
  _ = Symbol.for(`immer-state`);
function _(_, ..._) {
  throw Error(
    `[Immer] minified error nr: ${_}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var _ = Object.getPrototypeOf;
function _(_) {
  return !!_ && !!_[_];
}
function _(_) {
  return _
    ? _(_) || Array.isArray(_) || !!_[_] || !!_.constructor?.[_] || _(_) || _(_)
    : !1;
}
var _ = Object.prototype.constructor.toString(),
  _ = new WeakMap();
function _(_) {
  if (!_ || typeof _ != `object`) return !1;
  let _ = Object.getPrototypeOf(_);
  if (_ === null || _ === Object.prototype) return !0;
  let _ = Object.hasOwnProperty.call(_, `constructor`) && _.constructor;
  if (_ === Object) return !0;
  if (typeof _ != `function`) return !1;
  let _ = _.get(_);
  return (
    _ === void 0 && ((_ = Function.toString.call(_)), _.set(_, _)), _ === _
  );
}
function _(_, _, _ = !0) {
  _(_) === 0
    ? (_ ? Reflect.ownKeys(_) : Object.keys(_)).forEach((_) => {
        _(_, _[_], _);
      })
    : _.forEach((_, _) => _(_, _, _));
}
function _(_) {
  let _ = _[_];
  return _ ? _.type_ : Array.isArray(_) ? 1 : _(_) ? 2 : _(_) ? 3 : 0;
}
function _(_, _) {
  return _(_) === 2 ? _.has(_) : Object.prototype.hasOwnProperty.call(_, _);
}
function _(_, _, _) {
  let _ = _(_);
  _ === 2 ? _.set(_, _) : _ === 3 ? _.add(_) : (_[_] = _);
}
function _(_, _) {
  return _ === _ ? _ !== 0 || 1 / _ == 1 / _ : _ !== _ && _ !== _;
}
function _(_) {
  return _ instanceof Map;
}
function _(_) {
  return _ instanceof Set;
}
function _(_) {
  return _.copy_ || _.base_;
}
function _(_, _) {
  if (_(_)) return new Map(_);
  if (_(_)) return new Set(_);
  if (Array.isArray(_)) return Array.prototype.slice.call(_);
  let _ = _(_);
  if (_ === !0 || (_ === `class_only` && !_)) {
    let _ = Object.getOwnPropertyDescriptors(_);
    delete _[_];
    let _ = Reflect.ownKeys(_);
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_],
        _ = _[_];
      (_.writable === !1 && ((_.writable = !0), (_.configurable = !0)),
        (_.get || _.set) &&
          (_[_] = {
            configurable: !0,
            writable: !0,
            enumerable: _.enumerable,
            value: _[_],
          }));
    }
    return Object.create(_(_), _);
  }
  {
    let _ = _(_);
    if (_ !== null && _)
      return {
        ..._,
      };
    let _ = Object.create(_);
    return Object.assign(_, _);
  }
}
function _(_, _ = !1) {
  return (
    _(_) ||
      _(_) ||
      !_(_) ||
      (_(_) > 1 &&
        Object.defineProperties(_, {
          set: _,
          add: _,
          clear: _,
          delete: _,
        }),
      Object.freeze(_),
      _ && Object.values(_).forEach((_) => _(_, !0))),
    _
  );
}
function _() {
  _(2);
}
var _ = {
  value: _,
};
function _(_) {
  return typeof _ != `object` || !_ || Object.isFrozen(_);
}
var _ = {};
function _(_) {
  let _ = _[_];
  return (_ || _(0, _), _);
}
var _;
function _() {
  return _;
}
function _(_, _) {
  return {
    drafts_: [],
    parent_: _,
    immer_: _,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function _(_, _) {
  _ &&
    (_(`Patches`),
    (_.patches_ = []),
    (_.inversePatches_ = []),
    (_.patchListener_ = _));
}
function _(_) {
  (_(_), _.drafts_.forEach(_), (_.drafts_ = null));
}
function _(_) {
  _ === _ && (_ = _.parent_);
}
function _(_) {
  return (_ = _(_, _));
}
function _(_) {
  let _ = _[_];
  _.type_ === 0 || _.type_ === 1 ? _.revoke_() : (_.revoked_ = !0);
}
function _(_, _) {
  _.unfinalizedDrafts_ = _.drafts_.length;
  let _ = _.drafts_[0];
  return (
    _ !== void 0 && _ !== _
      ? (_[_].modified_ && (_(_), _(4)),
        _(_) && ((_ = _(_, _)), _.parent_ || _(_, _)),
        _.patches_ &&
          _(`Patches`).generateReplacementPatches_(
            _[_].base_,
            _,
            _.patches_,
            _.inversePatches_,
          ))
      : (_ = _(_, _, [])),
    _(_),
    _.patches_ && _.patchListener_(_.patches_, _.inversePatches_),
    _ === _ ? void 0 : _
  );
}
function _(_, _, _) {
  if (_(_)) return _;
  let _ = _.immer_.shouldUseStrictIteration(),
    _ = _[_];
  if (!_) return (_(_, (_, _) => _(_, _, _, _, _, _), _), _);
  if (_.scope_ !== _) return _;
  if (!_.modified_) return (_(_, _.base_, !0), _.base_);
  if (!_.finalized_) {
    ((_.finalized_ = !0), _.scope_.unfinalizedDrafts_--);
    let _ = _.copy_,
      _ = _,
      _ = !1;
    (_.type_ === 3 && ((_ = new Set(_)), _.clear(), (_ = !0)),
      _(_, (_, _) => _(_, _, _, _, _, _, _), _),
      _(_, _, !1),
      _ &&
        _.patches_ &&
        _(`Patches`).generatePatches_(_, _, _.patches_, _.inversePatches_));
  }
  return _.copy_;
}
function _(_, _, _, _, _, _, _) {
  if (_ == null || (typeof _ != `object` && !_)) return;
  let _ = _(_);
  if (!_ || _) {
    if (_(_)) {
      let _ = _(
        _,
        _,
        _ && _ && _.type_ !== 3 && !_(_.assigned_, _) ? _.concat(_) : void 0,
      );
      if ((_(_, _, _), _(_))) _.canAutoFreeze_ = !1;
      else return;
    } else _ && _.add(_);
    if (_(_) && !_) {
      if (
        (!_.immer_.autoFreeze_ && _.unfinalizedDrafts_ < 1) ||
        (_ && _.base_ && _.base_[_] === _ && _)
      )
        return;
      (_(_, _),
        (!_ || !_.scope_.parent_) &&
          typeof _ != `symbol` &&
          (_(_)
            ? _.has(_)
            : Object.prototype.propertyIsEnumerable.call(_, _)) &&
          _(_, _));
    }
  }
}
function _(_, _, _ = !1) {
  !_.parent_ && _.immer_.autoFreeze_ && _.canAutoFreeze_ && _(_, _);
}
function _(_, _) {
  let _ = Array.isArray(_),
    _ = {
      type_: +!!_,
      scope_: _ ? _.scope_ : _(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: _,
      base_: _,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    },
    _ = _,
    _ = _;
  _ && ((_ = [_]), (_ = _));
  let { revoke: _, proxy: _ } = Proxy.revocable(_, _);
  return ((_.draft_ = _), (_.revoke_ = _), _);
}
var _ = {
    get(_, _) {
      if (_ === _) return _;
      let _ = _(_);
      if (!_(_, _)) return _(_, _, _);
      let _ = _[_];
      return _.finalized_ || !_(_)
        ? _
        : _ === _(_.base_, _)
          ? (_(_), (_.copy_[_] = _(_, _)))
          : _;
    },
    has(_, _) {
      return _ in _(_);
    },
    ownKeys(_) {
      return Reflect.ownKeys(_(_));
    },
    set(_, _, _) {
      let _ = _(_(_), _);
      if (_?.set) return (_.set.call(_.draft_, _), !0);
      if (!_.modified_) {
        let _ = _(_(_), _),
          _ = _?.[_];
        if (_ && _.base_ === _)
          return ((_.copy_[_] = _), (_.assigned_[_] = !1), !0);
        if (_(_, _) && (_ !== void 0 || _(_.base_, _))) return !0;
        (_(_), _(_));
      }
      return (
        (_.copy_[_] === _ && (_ !== void 0 || _ in _.copy_)) ||
          (Number.isNaN(_) && Number.isNaN(_.copy_[_])) ||
          ((_.copy_[_] = _), (_.assigned_[_] = !0)),
        !0
      );
    },
    deleteProperty(_, _) {
      return (
        _(_.base_, _) !== void 0 || _ in _.base_
          ? ((_.assigned_[_] = !1), _(_), _(_))
          : delete _.assigned_[_],
        _.copy_ && delete _.copy_[_],
        !0
      );
    },
    getOwnPropertyDescriptor(_, _) {
      let _ = _(_),
        _ = Reflect.getOwnPropertyDescriptor(_, _);
      return (
        _ && {
          writable: !0,
          configurable: _.type_ !== 1 || _ !== `length`,
          enumerable: _.enumerable,
          value: _[_],
        }
      );
    },
    defineProperty() {
      _(11);
    },
    getPrototypeOf(_) {
      return _(_.base_);
    },
    setPrototypeOf() {
      _(12);
    },
  },
  _ = {};
(_(_, (_, _) => {
  _[_] = function () {
    return ((arguments[0] = arguments[0][0]), _.apply(this, arguments));
  };
}),
  (_.deleteProperty = function (_, _) {
    return _.set.call(this, _, _, void 0);
  }),
  (_.set = function (_, _, _) {
    return _.set.call(this, _[0], _, _, _[0]);
  }));
function _(_, _) {
  let _ = _[_];
  return (_ ? _(_) : _)[_];
}
function _(_, _, _) {
  let _ = _(_, _);
  return _ ? (`value` in _ ? _.value : _.get?.call(_.draft_)) : void 0;
}
function _(_, _) {
  if (!(_ in _)) return;
  let _ = _(_);
  for (; _;) {
    let _ = Object.getOwnPropertyDescriptor(_, _);
    if (_) return _;
    _ = _(_);
  }
}
function _(_) {
  _.modified_ || ((_.modified_ = !0), _.parent_ && _(_.parent_));
}
function _(_) {
  _.copy_ ||= _(_.base_, _.scope_.immer_.useStrictShallowCopy_);
}
var _ = class {
  constructor(_) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !0),
      (this.produce = (_, _, _) => {
        if (typeof _ == `function` && typeof _ != `function`) {
          let _ = _;
          _ = _;
          let _ = this;
          return function (_ = _, ..._) {
            return _.produce(_, (_) => _.call(this, _, ..._));
          };
        }
        (typeof _ != `function` && _(6),
          _ !== void 0 && typeof _ != `function` && _(7));
        let _;
        if (_(_)) {
          let _ = _(this),
            _ = _(_, void 0),
            _ = !0;
          try {
            ((_ = _(_)), (_ = !1));
          } finally {
            _ ? _(_) : _(_);
          }
          return (_(_, _), _(_, _));
        }
        if (!_ || typeof _ != `object`) {
          if (
            ((_ = _(_)),
            _ === void 0 && (_ = _),
            _ === _ && (_ = void 0),
            this.autoFreeze_ && _(_, !0),
            _)
          ) {
            let _ = [],
              _ = [];
            (_(`Patches`).generateReplacementPatches_(_, _, _, _), _(_, _));
          }
          return _;
        }
        _(1, _);
      }),
      (this.produceWithPatches = (_, _) => {
        if (typeof _ == `function`)
          return (_, ..._) => this.produceWithPatches(_, (_) => _(_, ..._));
        let _, _;
        return [
          this.produce(_, _, (_, _) => {
            ((_ = _), (_ = _));
          }),
          _,
          _,
        ];
      }),
      typeof _?.autoFreeze == `boolean` && this.setAutoFreeze(_.autoFreeze),
      typeof _?.useStrictShallowCopy == `boolean` &&
        this.setUseStrictShallowCopy(_.useStrictShallowCopy),
      typeof _?.useStrictIteration == `boolean` &&
        this.setUseStrictIteration(_.useStrictIteration));
  }
  createDraft(_) {
    (_(_) || _(8), _(_) && (_ = _(_)));
    let _ = _(this),
      _ = _(_, void 0);
    return ((_[_].isManual_ = !0), _(_), _);
  }
  finishDraft(_, _) {
    let _ = _ && _[_];
    (_ && _.isManual_) || _(9);
    let { scope_: _ } = _;
    return (_(_, _), _(void 0, _));
  }
  setAutoFreeze(_) {
    this.autoFreeze_ = _;
  }
  setUseStrictShallowCopy(_) {
    this.useStrictShallowCopy_ = _;
  }
  setUseStrictIteration(_) {
    this.useStrictIteration_ = _;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(_, _) {
    let _;
    for (_ = _.length - 1; _ >= 0; _--) {
      let _ = _[_];
      if (_.path.length === 0 && _._ === `replace`) {
        _ = _.value;
        break;
      }
    }
    _ > -1 && (_ = _.slice(_ + 1));
    let _ = _(`Patches`).applyPatches_;
    return _(_) ? _(_, _) : this.produce(_, (_) => _(_, _));
  }
};
function _(_, _) {
  let _ = _(_)
    ? _(`MapSet`).proxyMap_(_, _)
    : _(_)
      ? _(`MapSet`).proxySet_(_, _)
      : _(_, _);
  return ((_ ? _.scope_ : _()).drafts_.push(_), _);
}
function _(_) {
  return (_(_) || _(10, _), _(_));
}
function _(_) {
  if (!_(_) || _(_)) return _;
  let _ = _[_],
    _,
    _ = !0;
  if (_) {
    if (!_.modified_) return _.base_;
    ((_.finalized_ = !0),
      (_ = _(_, _.scope_.immer_.useStrictShallowCopy_)),
      (_ = _.scope_.immer_.shouldUseStrictIteration()));
  } else _ = _(_, !0);
  return (
    _(
      _,
      (_, _) => {
        _(_, _, _(_));
      },
      _,
    ),
    _ && (_.finalized_ = !1),
    _
  );
}
var _ = new _(),
  _ = _.produce,
  _ = _.setUseStrictIteration.bind(_);
function _(_) {
  return _;
}
function _(_, _ = `expected a function, instead received ${typeof _}`) {
  if (typeof _ != `function`) throw TypeError(_);
}
function _(_, _ = `expected an object, instead received ${typeof _}`) {
  if (typeof _ != `object`) throw TypeError(_);
}
function _(
  _,
  _ = `expected all items to be functions, instead received the following types: `,
) {
  if (!_.every((_) => typeof _ == `function`)) {
    let _ = _.map((_) =>
      typeof _ == `function` ? `function ${_.name || `unnamed`}()` : typeof _,
    ).join(`, `);
    throw TypeError(`${_}[${_}]`);
  }
}
var _ = (_) => (Array.isArray(_) ? _ : [_]);
function _(_) {
  let _ = Array.isArray(_[0]) ? _[0] : _;
  return (
    _(
      _,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    _
  );
}
function _(_, _) {
  let _ = [],
    { length: _ } = _;
  for (let _ = 0; _ < _; _++) _.push(_[_].apply(null, _));
  return _;
}
var _ = class {
    constructor(_) {
      this.value = _;
    }
    deref() {
      return this.value;
    }
  },
  _ = typeof WeakRef < `u` ? WeakRef : _,
  _ = 0,
  _ = 1;
function _() {
  return {
    _: _,
    _: void 0,
    _: null,
    _: null,
  };
}
function _(_, _ = {}) {
  let _ = _(),
    { resultEqualityCheck: _ } = _,
    _,
    _ = 0;
  function _() {
    let _ = _,
      { length: _ } = arguments;
    for (let _ = 0, _ = _; _ < _; _++) {
      let _ = arguments[_];
      if (typeof _ == `function` || (typeof _ == `object` && _)) {
        let _ = _._;
        _ === null && (_._ = _ = new WeakMap());
        let _ = _.get(_);
        _ === void 0 ? ((_ = _()), _.set(_, _)) : (_ = _);
      } else {
        let _ = _._;
        _ === null && (_._ = _ = new Map());
        let _ = _.get(_);
        _ === void 0 ? ((_ = _()), _.set(_, _)) : (_ = _);
      }
    }
    let _ = _,
      _;
    if (_._ === _) _ = _._;
    else if (((_ = _.apply(null, arguments)), _++, _)) {
      let _ = _?.deref?.() ?? _;
      (_ != null && _(_, _) && ((_ = _), _ !== 0 && _--),
        (_ =
          (typeof _ == `object` && _) || typeof _ == `function`
            ? new _(_)
            : _));
    }
    return ((_._ = _), (_._ = _), _);
  }
  return (
    (_.clearCache = () => {
      ((_ = _()), _.resetResultsCount());
    }),
    (_.resultsCount = () => _),
    (_.resetResultsCount = () => {
      _ = 0;
    }),
    _
  );
}
function _(_, ..._) {
  let _ =
      typeof _ == `function`
        ? {
            memoize: _,
            memoizeOptions: _,
          }
        : _,
    _ = (..._) => {
      let _ = 0,
        _ = 0,
        _,
        _ = {},
        _ = _.pop();
      (typeof _ == `object` && ((_ = _), (_ = _.pop())),
        _(
          _,
          `createSelector expects an output function after the inputs, but received: [${typeof _}]`,
        ));
      let {
          memoize: _,
          memoizeOptions: _ = [],
          argsMemoize: _ = _,
          argsMemoizeOptions: _ = [],
          devModeChecks: _ = {},
        } = {
          ..._,
          ..._,
        },
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(
          function () {
            return (_++, _.apply(null, arguments));
          },
          ..._,
        ),
        _ = _(
          function () {
            _++;
            let _ = _(_, arguments);
            return ((_ = _.apply(null, _)), _);
          },
          ..._,
        );
      return Object.assign(_, {
        resultFunc: _,
        memoizedResultFunc: _,
        dependencies: _,
        dependencyRecomputations: () => _,
        resetDependencyRecomputations: () => {
          _ = 0;
        },
        lastResult: () => _,
        recomputations: () => _,
        resetRecomputations: () => {
          _ = 0;
        },
        memoize: _,
        argsMemoize: _,
      });
    };
  return (
    Object.assign(_, {
      withTypes: () => _,
    }),
    _
  );
}
var _ = _(_),
  _ = Object.assign(
    (_, _ = _) => {
      _(
        _,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof _}`,
      );
      let _ = Object.keys(_);
      return _(
        _.map((_) => _[_]),
        (..._) => _.reduce((_, _, _) => ((_[_[_]] = _), _), {}),
      );
    },
    {
      withTypes: () => _,
    },
  );
function _(_) {
  return ({ dispatch: _, getState: _ }) =>
    (_) =>
    (_) =>
      typeof _ == `function` ? _(_, _, _) : _(_);
}
var _ = _(),
  _ = _;
((..._) => {
  let _ = _(..._),
    _ = Object.assign(
      (..._) => {
        let _ = _(..._),
          _ = (_, ..._) => _(_(_) ? _(_) : _, ..._);
        return (Object.assign(_, _), _);
      },
      {
        withTypes: () => _,
      },
    );
  return _;
})(_);
var _ =
  typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == `object` ? _ : _.apply(null, arguments);
      };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
var _ = (_) => _ && typeof _.match == `function`;
function _(_, _) {
  function _(..._) {
    if (_) {
      let _ = _(..._);
      if (!_) throw Error(_(0));
      return {
        type: _,
        payload: _.payload,
        ...(`meta` in _ && {
          meta: _.meta,
        }),
        ...(`error` in _ && {
          error: _.error,
        }),
      };
    }
    return {
      type: _,
      payload: _[0],
    };
  }
  return (
    (_.toString = () => `${_}`),
    (_.type = _),
    (_.match = (_) => _(_) && _.type === _),
    _
  );
}
var _ = class _ extends Array {
  constructor(..._) {
    (super(..._), Object.setPrototypeOf(this, _.prototype));
  }
  static get [Symbol.species]() {
    return _;
  }
  concat(..._) {
    return super.concat.apply(this, _);
  }
  prepend(..._) {
    return _.length === 1 && Array.isArray(_[0])
      ? new _(..._[0].concat(this))
      : new _(..._.concat(this));
  }
};
function _(_) {
  return _(_) ? _(_, () => {}) : _;
}
function _(_, _, _) {
  return _.has(_) ? _.get(_) : _.set(_, _(_)).get(_);
}
function _(_) {
  return typeof _ == `boolean`;
}
var _ = () =>
    function (_) {
      let {
          thunk: _ = !0,
          immutableCheck: _ = !0,
          serializableCheck: _ = !0,
          actionCreatorCheck: _ = !0,
        } = _ ?? {},
        _ = new _();
      return (_ && (_(_) ? _.push(_) : _.push(_(_.extraArgument))), _);
    },
  _ = `RTK_autoBatch`,
  _ = () => (_) => ({
    payload: _,
    meta: {
      [_]: !0,
    },
  }),
  _ = (_) => (_) => {
    setTimeout(_, _);
  },
  _ =
    (
      _ = {
        type: `raf`,
      },
    ) =>
    (_) =>
    (..._) => {
      let _ = _(..._),
        _ = !0,
        _ = !1,
        _ = !1,
        _ = new Set(),
        _ =
          _.type === `tick`
            ? queueMicrotask
            : _.type === `raf`
              ? typeof window < `u` && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : _(10)
              : _.type === `callback`
                ? _.queueNotification
                : _(_.timeout),
        _ = () => {
          ((_ = !1), _ && ((_ = !1), _.forEach((_) => _())));
        };
      return Object.assign({}, _, {
        subscribe(_) {
          let _ = _.subscribe(() => _ && _());
          return (
            _.add(_),
            () => {
              (_(), _.delete(_));
            }
          );
        },
        dispatch(_) {
          try {
            return (
              (_ = !_?.meta?.[_]),
              (_ = !_),
              _ && (_ || ((_ = !0), _(_))),
              _.dispatch(_)
            );
          } finally {
            _ = !0;
          }
        },
      });
    },
  _ = (_) =>
    function (_) {
      let { autoBatch: _ = !0 } = _ ?? {},
        _ = new _(_);
      return (_ && _.push(_(typeof _ == `object` ? _ : void 0)), _);
    };
function _(_) {
  let _ = _(),
    {
      reducer: _ = void 0,
      middleware: _,
      devTools: _ = !0,
      duplicateMiddlewareCheck: _ = !0,
      preloadedState: _ = void 0,
      enhancers: _ = void 0,
    } = _ || {},
    _;
  if (typeof _ == `function`) _ = _;
  else if (_(_)) _ = _(_);
  else throw Error(_(1));
  let _;
  _ = typeof _ == `function` ? _(_) : _();
  let _ = _;
  _ &&
    (_ = _({
      trace: !1,
      ...(typeof _ == `object` && _),
    }));
  let _ = _(_(..._)),
    _ = typeof _ == `function` ? _(_) : _(),
    _ = _(..._);
  return _(_, _, _);
}
function _(_) {
  let _ = {},
    _ = [],
    _,
    _ = {
      addCase(_, _) {
        let _ = typeof _ == `string` ? _ : _.type;
        if (!_) throw Error(_(28));
        if (_ in _) throw Error(_(29));
        return ((_[_] = _), _);
      },
      addAsyncThunk(_, _) {
        return (
          _.pending && (_[_.pending.type] = _.pending),
          _.rejected && (_[_.rejected.type] = _.rejected),
          _.fulfilled && (_[_.fulfilled.type] = _.fulfilled),
          _.settled &&
            _.push({
              matcher: _.settled,
              reducer: _.settled,
            }),
          _
        );
      },
      addMatcher(_, _) {
        return (
          _.push({
            matcher: _,
            reducer: _,
          }),
          _
        );
      },
      addDefaultCase(_) {
        return ((_ = _), _);
      },
    };
  return (_(_), [_, _, _]);
}
_(!1);
function _(_) {
  return typeof _ == `function`;
}
function _(_, _) {
  let [_, _, _] = _(_),
    _;
  if (_(_)) _ = () => _(_());
  else {
    let _ = _(_);
    _ = () => _;
  }
  function _(_ = _(), _) {
    let _ = [
      _[_.type],
      ..._.filter(({ matcher: _ }) => _(_)).map(({ reducer: _ }) => _),
    ];
    return (
      _.filter((_) => !!_).length === 0 && (_ = [_]),
      _.reduce((_, _) => {
        if (_) {
          if (_(_)) {
            let _ = _(_, _);
            return _ === void 0 ? _ : _;
          }
          if (_(_)) return _(_, (_) => _(_, _));
          {
            let _ = _(_, _);
            if (_ === void 0) {
              if (_ === null) return _;
              throw Error(
                `A case reducer on a non-draftable value must not return undefined`,
              );
            }
            return _;
          }
        }
        return _;
      }, _)
    );
  }
  return ((_.getInitialState = _), _);
}
var _ = (_, _) => (_(_) ? _.match(_) : _(_));
function _(..._) {
  return (_) => _.some((_) => _(_, _));
}
var _ = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  _ = (_ = 21) => {
    let _ = ``,
      _ = _;
    for (; _--;) _ += _[(Math.random() * 64) | 0];
    return _;
  },
  _ = [`name`, `message`, `stack`, `code`],
  _ = class {
    constructor(_, _) {
      ((this.payload = _), (this.meta = _));
    }
    _type;
  },
  _ = class {
    constructor(_, _) {
      ((this.payload = _), (this.meta = _));
    }
    _type;
  },
  _ = (_) => {
    if (typeof _ == `object` && _) {
      let _ = {};
      for (let _ of _) typeof _[_] == `string` && (_[_] = _[_]);
      return _;
    }
    return {
      message: String(_),
    };
  },
  _ = `External signal was aborted`;
(() => {
  function _(_, _, _) {
    let _ = _(_ + `/fulfilled`, (_, _, _, _) => ({
        payload: _,
        meta: {
          ...(_ || {}),
          arg: _,
          requestId: _,
          requestStatus: `fulfilled`,
        },
      })),
      _ = _(_ + `/pending`, (_, _, _) => ({
        payload: void 0,
        meta: {
          ...(_ || {}),
          arg: _,
          requestId: _,
          requestStatus: `pending`,
        },
      })),
      _ = _(_ + `/rejected`, (_, _, _, _, _) => ({
        payload: _,
        error: ((_ && _.serializeError) || _)(_ || `Rejected`),
        meta: {
          ...(_ || {}),
          arg: _,
          requestId: _,
          rejectedWithValue: !!_,
          requestStatus: `rejected`,
          aborted: _?.name === `AbortError`,
          condition: _?.name === `ConditionError`,
        },
      }));
    function _(_, { signal: _ } = {}) {
      return (_, _, _) => {
        let _ = _?.idGenerator ? _.idGenerator(_) : _(),
          _ = new AbortController(),
          _,
          _;
        function _(_) {
          ((_ = _), _.abort());
        }
        _ &&
          (_.aborted
            ? _(_)
            : _.addEventListener(`abort`, () => _(_), {
                once: !0,
              }));
        let _ = (async function () {
          let _;
          try {
            let _ = _?.condition?.(_, {
              getState: _,
              extra: _,
            });
            if ((_(_) && (_ = await _), _ === !1 || _.signal.aborted))
              throw {
                name: `ConditionError`,
                message: `Aborted due to condition callback returning false.`,
              };
            let _ = new Promise((_, _) => {
              ((_ = () => {
                _({
                  name: `AbortError`,
                  message: _ || `Aborted`,
                });
              }),
                _.signal.addEventListener(`abort`, _));
            });
            (_(
              _(
                _,
                _,
                _?.getPendingMeta?.(
                  {
                    requestId: _,
                    arg: _,
                  },
                  {
                    getState: _,
                    extra: _,
                  },
                ),
              ),
            ),
              (_ = await Promise.race([
                _,
                Promise.resolve(
                  _(_, {
                    dispatch: _,
                    getState: _,
                    extra: _,
                    requestId: _,
                    signal: _.signal,
                    abort: _,
                    rejectWithValue: (_, _) => new _(_, _),
                    fulfillWithValue: (_, _) => new _(_, _),
                  }),
                ).then((_) => {
                  if (_ instanceof _) throw _;
                  return _ instanceof _
                    ? _(_.payload, _, _, _.meta)
                    : _(_, _, _);
                }),
              ])));
          } catch (_) {
            _ = _ instanceof _ ? _(null, _, _, _.payload, _.meta) : _(_, _, _);
          } finally {
            _ && _.signal.removeEventListener(`abort`, _);
          }
          return (
            (_ &&
              !_.dispatchConditionRejection &&
              _.match(_) &&
              _.meta.condition) ||
              _(_),
            _
          );
        })();
        return Object.assign(_, {
          abort: _,
          requestId: _,
          arg: _,
          unwrap() {
            return _.then(_);
          },
        });
      };
    }
    return Object.assign(_, {
      pending: _,
      rejected: _,
      fulfilled: _,
      settled: _(_, _),
      typePrefix: _,
    });
  }
  return ((_.withTypes = () => _), _);
})();
function _(_) {
  if (_.meta && _.meta.rejectedWithValue) throw _.payload;
  if (_.error) throw _.error;
  return _.payload;
}
function _(_) {
  return typeof _ == `object` && !!_ && typeof _.then == `function`;
}
var _ = Symbol.for(`rtk-slice-createasyncthunk`),
  _ = ((_) => (
    (_.reducer = `reducer`),
    (_.reducerWithPrepare = `reducerWithPrepare`),
    (_.asyncThunk = `asyncThunk`),
    _
  ))(_ || {});
function _(_, _) {
  return `${_}/${_}`;
}
function _({ creators: _ } = {}) {
  let _ = _?.asyncThunk?.[_];
  return function (_) {
    let { name: _, reducerPath: _ = _ } = _;
    if (!_) throw Error(_(11));
    let _ =
        (typeof _.reducers == `function` ? _.reducers(_()) : _.reducers) || {},
      _ = Object.keys(_),
      _ = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      _ = {
        addCase(_, _) {
          let _ = typeof _ == `string` ? _ : _.type;
          if (!_) throw Error(_(12));
          if (_ in _.sliceCaseReducersByType) throw Error(_(13));
          return ((_.sliceCaseReducersByType[_] = _), _);
        },
        addMatcher(_, _) {
          return (
            _.sliceMatchers.push({
              matcher: _,
              reducer: _,
            }),
            _
          );
        },
        exposeAction(_, _) {
          return ((_.actionCreators[_] = _), _);
        },
        exposeCaseReducer(_, _) {
          return ((_.sliceCaseReducersByName[_] = _), _);
        },
      };
    _.forEach((_) => {
      let _ = _[_],
        _ = {
          reducerName: _,
          type: _(_, _),
          createNotation: typeof _.reducers == `function`,
        };
      _(_) ? _(_, _, _, _) : _(_, _, _);
    });
    function _() {
      let [_ = {}, _ = [], _ = void 0] =
          typeof _.extraReducers == `function`
            ? _(_.extraReducers)
            : [_.extraReducers],
        _ = {
          ..._,
          ..._.sliceCaseReducersByType,
        };
      return _(_.initialState, (_) => {
        for (let _ in _) _.addCase(_, _[_]);
        for (let _ of _.sliceMatchers) _.addMatcher(_.matcher, _.reducer);
        for (let _ of _) _.addMatcher(_.matcher, _.reducer);
        _ && _.addDefaultCase(_);
      });
    }
    let _ = (_) => _,
      _ = new Map(),
      _ = new WeakMap(),
      _;
    function _(_, _) {
      return ((_ ||= _()), _(_, _));
    }
    function _() {
      return ((_ ||= _()), _.getInitialState());
    }
    function _(_, _ = !1) {
      function _(_) {
        let _ = _[_];
        return (typeof _ > `u` && _ && (_ = _(_, _, _)), _);
      }
      function _(_ = _) {
        return _(
          _(_, _, () => new WeakMap()),
          _,
          () => {
            let _ = {};
            for (let [_, _] of Object.entries(_.selectors ?? {}))
              _[_] = _(_, _, () => _(_, _, _), _);
            return _;
          },
        );
      }
      return {
        reducerPath: _,
        getSelectors: _,
        get selectors() {
          return _(_);
        },
        selectSlice: _,
      };
    }
    let _ = {
      name: _,
      reducer: _,
      actions: _.actionCreators,
      caseReducers: _.sliceCaseReducersByName,
      getInitialState: _,
      ..._(_),
      injectInto(_, { reducerPath: _, ..._ } = {}) {
        let _ = _ ?? _;
        return (
          _.inject(
            {
              reducerPath: _,
              reducer: _,
            },
            _,
          ),
          {
            ..._,
            ..._(_, !0),
          }
        );
      },
    };
    return _;
  };
}
function _(_, _, _, _) {
  function _(_, ..._) {
    let _ = _(_);
    return (typeof _ > `u` && _ && (_ = _()), _(_, ..._));
  }
  return ((_.unwrapped = _), _);
}
var _ = _();
function _() {
  function _(_, _) {
    return {
      _reducerDefinitionType: `asyncThunk`,
      payloadCreator: _,
      ..._,
    };
  }
  return (
    (_.withTypes = () => _),
    {
      reducer(_) {
        return Object.assign(
          {
            [_.name](..._) {
              return _(..._);
            },
          }[_.name],
          {
            _reducerDefinitionType: `reducer`,
          },
        );
      },
      preparedReducer(_, _) {
        return {
          _reducerDefinitionType: `reducerWithPrepare`,
          prepare: _,
          reducer: _,
        };
      },
      asyncThunk: _,
    }
  );
}
function _({ type: _, reducerName: _, createNotation: _ }, _, _) {
  let _, _;
  if (`reducer` in _) {
    if (_ && !_(_)) throw Error(_(17));
    ((_ = _.reducer), (_ = _.prepare));
  } else _ = _;
  _.addCase(_, _)
    .exposeCaseReducer(_, _)
    .exposeAction(_, _ ? _(_, _) : _(_));
}
function _(_) {
  return _._reducerDefinitionType === `asyncThunk`;
}
function _(_) {
  return _._reducerDefinitionType === `reducerWithPrepare`;
}
function _({ type: _, reducerName: _ }, _, _, _) {
  if (!_) throw Error(_(18));
  let {
      payloadCreator: _,
      fulfilled: _,
      pending: _,
      rejected: _,
      settled: _,
      options: _,
    } = _,
    _ = _(_, _, _);
  (_.exposeAction(_, _),
    _ && _.addCase(_.fulfilled, _),
    _ && _.addCase(_.pending, _),
    _ && _.addCase(_.rejected, _),
    _ && _.addMatcher(_.settled, _),
    _.exposeCaseReducer(_, {
      fulfilled: _ || _,
      pending: _ || _,
      rejected: _ || _,
      settled: _ || _,
    }));
}
function _() {}
var _ = `task`,
  _ = `listener`,
  _ = `completed`,
  _ = `cancelled`,
  _ = `task-${_}`,
  _ = `task-${_}`,
  _ = `${_}-${_}`,
  _ = `${_}-${_}`,
  _ = class {
    constructor(_) {
      ((this.code = _), (this.message = `${_} ${_} (reason: ${_})`));
    }
    name = `TaskAbortError`;
    message;
  },
  _ = (_, _) => {
    if (typeof _ != `function`) throw TypeError(_(32));
  },
  _ = () => {},
  _ = (_, _ = _) => (_.catch(_), _),
  _ = (_, _) => (
    _.addEventListener(`abort`, _, {
      once: !0,
    }),
    () => _.removeEventListener(`abort`, _)
  ),
  _ = (_, _) => {
    let _ = _.signal;
    _.aborted ||
      (`reason` in _ ||
        Object.defineProperty(_, "reason", {
          enumerable: !0,
          value: _,
          configurable: !0,
          writable: !0,
        }),
      _.abort(_));
  },
  _ = (_) => {
    if (_.aborted) {
      let { reason: _ } = _;
      throw new _(_);
    }
  };
function _(_, _) {
  let _ = _;
  return new Promise((_, _) => {
    let _ = () => _(new _(_.reason));
    _.aborted ? _() : ((_ = _(_, _)), _.finally(() => _()).then(_, _));
  }).finally(() => {
    _ = _;
  });
}
var _ = async (_, _) => {
    try {
      return (
        await Promise.resolve(),
        {
          status: `ok`,
          value: await _(),
        }
      );
    } catch (_) {
      return {
        status: _ instanceof _ ? `cancelled` : `rejected`,
        error: _,
      };
    } finally {
      _?.();
    }
  },
  _ = (_) => (_) => _(_(_, _).then((_) => (_(_), _))),
  _ = (_) => {
    let _ = _(_);
    return (_) => _(new Promise((_) => setTimeout(_, _)));
  },
  { assign: _ } = Object,
  _ = {},
  _ = `listenerMiddleware`,
  _ = (_, _) => {
    let _ = (_) => _(_, () => _(_, _.reason));
    return (_, _) => {
      _(_, `taskExecutor`);
      let _ = new AbortController();
      _(_);
      let _ = _(
        async () => {
          (_(_), _(_.signal));
          let _ = await _({
            pause: _(_.signal),
            delay: _(_.signal),
            signal: _.signal,
          });
          return (_(_.signal), _);
        },
        () => _(_, _),
      );
      return (
        _?.autoJoin && _.push(_.catch(_)),
        {
          result: _(_)(_),
          cancel() {
            _(_, _);
          },
        }
      );
    };
  },
  _ = (_, _) => {
    let _ = async (_, _) => {
      _(_);
      let _ = () => {},
        _ = [
          new Promise((_, _) => {
            let _ = _({
              predicate: _,
              effect: (_, _) => {
                (_.unsubscribe(), _([_, _.getState(), _.getOriginalState()]));
              },
            });
            _ = () => {
              (_(), _());
            };
          }),
        ];
      _ != null && _.push(new Promise((_) => setTimeout(_, _, null)));
      try {
        let _ = await _(_, Promise.race(_));
        return (_(_), _);
      } finally {
        _();
      }
    };
    return (_, _) => _(_(_, _));
  },
  _ = (_) => {
    let { type: _, actionCreator: _, matcher: _, predicate: _, effect: _ } = _;
    if (_) _ = _(_).match;
    else if (_) ((_ = _.type), (_ = _.match));
    else if (_) _ = _;
    else if (!_) throw Error(_(21));
    return (
      _(_, `options.listener`),
      {
        predicate: _,
        type: _,
        effect: _,
      }
    );
  },
  _ = _(
    (_) => {
      let { type: _, predicate: _, effect: _ } = _(_);
      return {
        _: _(),
        effect: _,
        type: _,
        predicate: _,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(_(22));
        },
      };
    },
    {
      withTypes: () => _,
    },
  ),
  _ = (_, _) => {
    let { type: _, effect: _, predicate: _ } = _(_);
    return Array.from(_.values()).find(
      (_) =>
        (typeof _ == `string` ? _.type === _ : _.predicate === _) &&
        _.effect === _,
    );
  },
  _ = (_) => {
    _.pending.forEach((_) => {
      _(_, _);
    });
  },
  _ = (_, _) => () => {
    for (let _ of _.keys()) _(_);
    _.clear();
  },
  _ = (_, _, _) => {
    try {
      _(_, _);
    } catch (_) {
      setTimeout(() => {
        throw _;
      }, 0);
    }
  },
  _ = _(_(`${_}/add`), {
    withTypes: () => _,
  }),
  _ = _(`${_}/removeAll`),
  _ = _(_(`${_}/remove`), {
    withTypes: () => _,
  }),
  _ = (..._) => {
    console.error(`${_}/error`, ..._);
  },
  _ = (_ = {}) => {
    let _ = new Map(),
      _ = new Map(),
      _ = (_) => {
        let _ = _.get(_) ?? 0;
        _.set(_, _ + 1);
      },
      _ = (_) => {
        let _ = _.get(_) ?? 1;
        _ === 1 ? _.delete(_) : _.set(_, _ - 1);
      },
      { extra: _, onError: _ = _ } = _;
    _(_, `onError`);
    let _ = (_) => (
        (_.unsubscribe = () => _.delete(_._)),
        _.set(_._, _),
        (_) => {
          (_.unsubscribe(), _?.cancelActive && _(_));
        }
      ),
      _ = (_) => {
        let _ = _(_, _) ?? _(_);
        return _(_);
      };
    _(_, {
      withTypes: () => _,
    });
    let _ = (_) => {
      let _ = _(_, _);
      return (_ && (_.unsubscribe(), _.cancelActive && _(_)), !!_);
    };
    _(_, {
      withTypes: () => _,
    });
    let _ = async (_, _, _, _) => {
        let _ = new AbortController(),
          _ = _(_, _.signal),
          _ = [];
        try {
          (_.pending.add(_),
            _(_),
            await Promise.resolve(
              _.effect(
                _,
                _({}, _, {
                  getOriginalState: _,
                  condition: (_, _) => _(_, _).then(Boolean),
                  take: _,
                  delay: _(_.signal),
                  pause: _(_.signal),
                  extra: _,
                  signal: _.signal,
                  fork: _(_.signal, _),
                  unsubscribe: _.unsubscribe,
                  subscribe: () => {
                    _.set(_._, _);
                  },
                  cancelActiveListeners: () => {
                    _.pending.forEach((_, _, _) => {
                      _ !== _ && (_(_, _), _.delete(_));
                    });
                  },
                  cancel: () => {
                    (_(_, _), _.pending.delete(_));
                  },
                  throwIfCancelled: () => {
                    _(_.signal);
                  },
                }),
              ),
            ));
        } catch (_) {
          _ instanceof _ ||
            _(_, _, {
              raisedBy: `effect`,
            });
        } finally {
          (await Promise.all(_), _(_, _), _(_), _.pending.delete(_));
        }
      },
      _ = _(_, _);
    return {
      middleware: (_) => (_) => (_) => {
        if (!_(_)) return _(_);
        if (_.match(_)) return _(_.payload);
        if (_.match(_)) {
          _();
          return;
        }
        if (_.match(_)) return _(_.payload);
        let _ = _.getState(),
          _ = () => {
            if (_ === _) throw Error(_(23));
            return _;
          },
          _;
        try {
          if (((_ = _(_)), _.size > 0)) {
            let _ = _.getState(),
              _ = Array.from(_.values());
            for (let _ of _) {
              let _ = !1;
              try {
                _ = _.predicate(_, _, _);
              } catch (_) {
                ((_ = !1),
                  _(_, _, {
                    raisedBy: `predicate`,
                  }));
              }
              _ && _(_, _, _, _);
            }
          }
        } finally {
          _ = _;
        }
        return _;
      },
      startListening: _,
      stopListening: _,
      clearListeners: _,
    };
  };
function _(_) {
  return `Minified Redux Toolkit error #${_}; visit https://redux-toolkit.js.org/Errors?code=${_} for the full message or use the non-minified dev environment for full errors. `;
}
var _ = _({
    name: `chartLayout`,
    initialState: {
      layoutType: `horizontal`,
      width: 0,
      height: 0,
      margin: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
      },
      scale: 1,
    },
    reducers: {
      setLayout(_, _) {
        _.layoutType = _.payload;
      },
      setChartSize(_, _) {
        ((_.width = _.payload.width), (_.height = _.payload.height));
      },
      setMargin(_, _) {
        ((_.margin.top = _.payload.top ?? 0),
          (_.margin.right = _.payload.right ?? 0),
          (_.margin.bottom = _.payload.bottom ?? 0),
          (_.margin.left = _.payload.left ?? 0));
      },
      setScale(_, _) {
        _.scale = _.payload;
      },
    },
  }),
  { setMargin: _, setLayout: _, setChartSize: _, setScale: _ } = _.actions,
  _ = _.reducer;
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = Math._ / 180,
  _ = (_) => (_ * Math._) / 180,
  _ = (_) => (_ * 180) / Math._,
  _ = (_, _, _, _) => ({
    _: _ + Math.cos(-_ * _) * _,
    _: _ + Math.sin(-_ * _) * _,
  }),
  _ = function (_, _) {
    var _ =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0,
            brushBottom: 0,
          };
    return (
      Math.min(
        Math.abs(_ - (_.left || 0) - (_.right || 0)),
        Math.abs(_ - (_.top || 0) - (_.bottom || 0)),
      ) / 2
    );
  },
  _ = (_, _) => {
    var { _: _, _: _ } = _,
      { _: _, _: _ } = _;
    return Math.sqrt((_ - _) ** 2 + (_ - _) ** 2);
  },
  _ = (_, _) => {
    var { _: _, _: _ } = _,
      { _: _, _: _ } = _,
      _ = _(
        {
          _: _,
          _: _,
        },
        {
          _: _,
          _: _,
        },
      );
    if (_ <= 0)
      return {
        radius: _,
        angle: 0,
      };
    var _ = (_ - _) / _,
      _ = Math.acos(_);
    return (
      _ > _ && (_ = 2 * Math._ - _),
      {
        radius: _,
        angle: _(_),
        angleInRadian: _,
      }
    );
  },
  _ = (_) => {
    var { startAngle: _, endAngle: _ } = _,
      _ = Math.floor(_ / 360),
      _ = Math.floor(_ / 360),
      _ = Math.min(_, _);
    return {
      startAngle: _ - _ * 360,
      endAngle: _ - _ * 360,
    };
  },
  _ = (_, _) => {
    var { startAngle: _, endAngle: _ } = _,
      _ = Math.floor(_ / 360),
      _ = Math.floor(_ / 360);
    return _ + Math.min(_, _) * 360;
  },
  _ = (_, _) => {
    var { _: _, _: _ } = _,
      { radius: _, angle: _ } = _(
        {
          _: _,
          _: _,
        },
        _,
      ),
      { innerRadius: _, outerRadius: _ } = _;
    if (_ < _ || _ > _ || _ === 0) return null;
    var { startAngle: _, endAngle: _ } = _(_),
      _ = _,
      _;
    if (_ <= _) {
      for (; _ > _;) _ -= 360;
      for (; _ < _;) _ += 360;
      _ = _ >= _ && _ <= _;
    } else {
      for (; _ > _;) _ -= 360;
      for (; _ < _;) _ += 360;
      _ = _ >= _ && _ <= _;
    }
    return _
      ? _(
          _({}, _),
          {},
          {
            radius: _,
            angle: _(_, _),
          },
        )
      : null;
  },
  _ = (_) =>
    !(0, _.isValidElement)(_) &&
    typeof _ != `function` &&
    typeof _ != `boolean` &&
    _ != null
      ? _.className
      : ``;
function _(_, _, _) {
  return Array.isArray(_) && _ && _ + _ !== 0 ? _.slice(_, _ + 1) : _;
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_, _, _) {
  return _(_) || _(_)
    ? _
    : _(_)
      ? (0, _.default)(_, _, _)
      : typeof _ == `function`
        ? _(_)
        : _;
}
var _ = (_, _, _, _, _) => {
    var _ = -1,
      _ = _?.length ?? 0;
    if (_ <= 1 || _ == null) return 0;
    if (
      _ === `angleAxis` &&
      _ != null &&
      Math.abs(Math.abs(_[1] - _[0]) - 360) <= 1e-6
    )
      for (var _ = 0; _ < _; _++) {
        var _ = _ > 0 ? _[_ - 1].coordinate : _[_ - 1].coordinate,
          _ = _[_].coordinate,
          _ = _ >= _ - 1 ? _[0].coordinate : _[_ + 1].coordinate,
          _ = void 0;
        if (_(_ - _) !== _(_ - _)) {
          var _ = [];
          if (_(_ - _) === _(_[1] - _[0])) {
            _ = _;
            var _ = _ + _[1] - _[0];
            ((_[0] = Math.min(_, (_ + _) / 2)),
              (_[1] = Math.max(_, (_ + _) / 2)));
          } else {
            _ = _;
            var _ = _ + _[1] - _[0];
            ((_[0] = Math.min(_, (_ + _) / 2)),
              (_[1] = Math.max(_, (_ + _) / 2)));
          }
          var _ = [Math.min(_, (_ + _) / 2), Math.max(_, (_ + _) / 2)];
          if ((_ > _[0] && _ <= _[1]) || (_ >= _[0] && _ <= _[1])) {
            ({ index: _ } = _[_]);
            break;
          }
        } else {
          var _ = Math.min(_, _),
            _ = Math.max(_, _);
          if (_ > (_ + _) / 2 && _ <= (_ + _) / 2) {
            ({ index: _ } = _[_]);
            break;
          }
        }
      }
    else if (_) {
      for (var _ = 0; _ < _; _++)
        if (
          (_ === 0 && _ <= (_[_].coordinate + _[_ + 1].coordinate) / 2) ||
          (_ > 0 &&
            _ < _ - 1 &&
            _ > (_[_].coordinate + _[_ - 1].coordinate) / 2 &&
            _ <= (_[_].coordinate + _[_ + 1].coordinate) / 2) ||
          (_ === _ - 1 && _ > (_[_].coordinate + _[_ - 1].coordinate) / 2)
        ) {
          ({ index: _ } = _[_]);
          break;
        }
    }
    return _;
  },
  _ = (_, _, _) => {
    if (_ && _) {
      var { width: _, height: _ } = _,
        { align: _, verticalAlign: _, layout: _ } = _;
      if (
        (_ === `vertical` || (_ === `horizontal` && _ === `middle`)) &&
        _ !== `center` &&
        _(_[_])
      )
        return _(
          _({}, _),
          {},
          {
            [_]: _[_] + (_ || 0),
          },
        );
      if (
        (_ === `horizontal` || (_ === `vertical` && _ === `center`)) &&
        _ !== `middle` &&
        _(_[_])
      )
        return _(
          _({}, _),
          {},
          {
            [_]: _[_] + (_ || 0),
          },
        );
    }
    return _;
  },
  _ = (_, _) =>
    (_ === `horizontal` && _ === `xAxis`) ||
    (_ === `vertical` && _ === `yAxis`) ||
    (_ === `centric` && _ === `angleAxis`) ||
    (_ === `radial` && _ === `radiusAxis`),
  _ = (_, _, _, _) => {
    if (_) return _.map((_) => _.coordinate);
    var _,
      _,
      _ = _.map(
        (_) => (
          _.coordinate === _ && (_ = !0),
          _.coordinate === _ && (_ = !0),
          _.coordinate
        ),
      );
    return (_ || _.push(_), _ || _.push(_), _);
  },
  _ = (_, _, _) => {
    if (!_) return null;
    var {
      duplicateDomain: _,
      type: _,
      range: _,
      scale: _,
      realScaleType: _,
      isCategorical: _,
      categoricalDomain: _,
      tickCount: _,
      ticks: _,
      niceTicks: _,
      axisType: _,
    } = _;
    if (!_) return null;
    var _ = _ === `scaleBand` && _.bandwidth ? _.bandwidth() / 2 : 2,
      _ = (_ || _) && _ === `category` && _.bandwidth ? _.bandwidth() / _ : 0;
    return (
      (_ =
        _ === `angleAxis` && _ && _.length >= 2 ? _(_[0] - _[1]) * 2 * _ : _),
      _ && (_ || _)
        ? (_ || _ || [])
            .map((_, _) => ({
              coordinate: _(_ ? _.indexOf(_) : _) + _,
              value: _,
              offset: _,
              index: _,
            }))
            .filter((_) => !_(_.coordinate))
        : _ && _
          ? _.map((_, _) => ({
              coordinate: _(_) + _,
              value: _,
              index: _,
              offset: _,
            }))
          : _.ticks && !_ && _ != null
            ? _.ticks(_).map((_, _) => ({
                coordinate: _(_) + _,
                value: _,
                offset: _,
                index: _,
              }))
            : _.domain().map((_, _) => ({
                coordinate: _(_) + _,
                value: _ ? _[_] : _,
                index: _,
                offset: _,
              }))
    );
  },
  _ = 1e-4,
  _ = (_) => {
    var _ = _.domain();
    if (!(!_ || _.length <= 2)) {
      var _ = _.length,
        _ = _.range(),
        _ = Math.min(_[0], _[1]) - _,
        _ = Math.max(_[0], _[1]) + _,
        _ = _(_[0]),
        _ = _(_[_ - 1]);
      (_ < _ || _ > _ || _ < _ || _ > _) && _.domain([_[0], _[_ - 1]]);
    }
  },
  _ = (_, _) => {
    if (!_ || _.length !== 2 || !_(_[0]) || !_(_[1])) return _;
    var _ = Math.min(_[0], _[1]),
      _ = Math.max(_[0], _[1]),
      _ = [_[0], _[1]];
    return (
      (!_(_[0]) || _[0] < _) && (_[0] = _),
      (!_(_[1]) || _[1] > _) && (_[1] = _),
      _[0] > _ && (_[0] = _),
      _[1] < _ && (_[1] = _),
      _
    );
  },
  _ = {
    sign: (_) => {
      var _ = _.length;
      if (!(_ <= 0))
        for (var _ = 0, _ = _[0].length; _ < _; ++_)
          for (var _ = 0, _ = 0, _ = 0; _ < _; ++_) {
            var _ = _(_[_][_][1]) ? _[_][_][0] : _[_][_][1];
            _ >= 0
              ? ((_[_][_][0] = _), (_[_][_][1] = _ + _), (_ = _[_][_][1]))
              : ((_[_][_][0] = _), (_[_][_][1] = _ + _), (_ = _[_][_][1]));
          }
    },
    expand: _,
    none: _,
    silhouette: _,
    wiggle: _,
    positive: (_) => {
      var _ = _.length;
      if (!(_ <= 0))
        for (var _ = 0, _ = _[0].length; _ < _; ++_)
          for (var _ = 0, _ = 0; _ < _; ++_) {
            var _ = _(_[_][_][1]) ? _[_][_][0] : _[_][_][1];
            _ >= 0
              ? ((_[_][_][0] = _), (_[_][_][1] = _ + _), (_ = _[_][_][1]))
              : ((_[_][_][0] = 0), (_[_][_][1] = 0));
          }
    },
  },
  _ = (_, _, _) => {
    var _ = _[_];
    return _()
      .keys(_)
      .value((_, _) => +_(_, _, 0))
      .order(_)
      .offset(_)(_);
  };
function _(_) {
  return _ == null ? void 0 : String(_);
}
var _ = (_) => {
    var { axis: _, ticks: _, offset: _, bandSize: _, entry: _, index: _ } = _;
    if (_.type === `category`) return _[_] ? _[_].coordinate + _ : null;
    var _ = _(_, _.dataKey, _.scale.domain()[_]);
    return _(_) ? null : _.scale(_) - _ / 2 + _;
  },
  _ = (_) => {
    var { numericAxis: _ } = _,
      _ = _.scale.domain();
    if (_.type === `number`) {
      var _ = Math.min(_[0], _[1]),
        _ = Math.max(_[0], _[1]);
      return _ <= 0 && _ >= 0 ? 0 : _ < 0 ? _ : _;
    }
    return _[0];
  },
  _ = (_) => {
    var _ = _.flat(2).filter(_);
    return [Math.min(..._), Math.max(..._)];
  },
  _ = (_) => [_[0] === 1 / 0 ? 0 : _[0], _[1] === -1 / 0 ? 0 : _[1]],
  _ = (_, _, _) => {
    if (_ != null)
      return _(
        Object.keys(_).reduce(
          (_, _) => {
            var { stackedData: _ } = _[_],
              _ = _.reduce(
                (_, _) => {
                  var _ = _(_(_, _, _));
                  return [Math.min(_[0], _[0]), Math.max(_[1], _[1])];
                },
                [1 / 0, -1 / 0],
              );
            return [Math.min(_[0], _[0]), Math.max(_[1], _[1])];
          },
          [1 / 0, -1 / 0],
        ),
      );
  },
  _ = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  _ = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  _ = (_, _, _) => {
    if (_ && _.scale && _.scale.bandwidth) {
      var _ = _.scale.bandwidth();
      if (!_ || _ > 0) return _;
    }
    if (_ && _ && _.length >= 2) {
      for (
        var _ = (0, _.default)(_, (_) => _.coordinate),
          _ = 1 / 0,
          _ = 1,
          _ = _.length;
        _ < _;
        _++
      ) {
        var _ = _[_],
          _ = _[_ - 1];
        _ = Math.min((_.coordinate || 0) - (_.coordinate || 0), _);
      }
      return _ === 1 / 0 ? 0 : _;
    }
    return _ ? void 0 : 0;
  };
function _(_) {
  var {
    tooltipEntrySettings: _,
    dataKey: _,
    payload: _,
    value: _,
    name: _,
  } = _;
  return _(
    _({}, _),
    {},
    {
      dataKey: _,
      payload: _,
      value: _,
      name: _,
    },
  );
}
function _(_, _) {
  if (_) return String(_);
  if (typeof _ == `string`) return _;
}
function _(_, _, _, _, _) {
  return _ === `horizontal` || _ === `vertical`
    ? _ >= _.left &&
      _ <= _.left + _.width &&
      _ >= _.top &&
      _ <= _.top + _.height
      ? {
          _: _,
          _: _,
        }
      : null
    : _
      ? _(
          {
            _: _,
            _: _,
          },
          _,
        )
      : null;
}
var _ = (_, _, _, _) => {
    var _ = _.find((_) => _ && _.index === _);
    if (_) {
      if (_ === `horizontal`)
        return {
          _: _.coordinate,
          _: _._,
        };
      if (_ === `vertical`)
        return {
          _: _._,
          _: _.coordinate,
        };
      if (_ === `centric`) {
        var _ = _.coordinate,
          { radius: _ } = _;
        return _(
          _(_({}, _), _(_._, _._, _, _)),
          {},
          {
            angle: _,
            radius: _,
          },
        );
      }
      var _ = _.coordinate,
        { angle: _ } = _;
      return _(
        _(_({}, _), _(_._, _._, _, _)),
        {},
        {
          angle: _,
          radius: _,
        },
      );
    }
    return {
      _: 0,
      _: 0,
    };
  },
  _ = (_, _) =>
    _ === `horizontal`
      ? _._
      : _ === `vertical`
        ? _._
        : _ === `centric`
          ? _.angle
          : _.radius,
  _ = (_) => _.layout.width,
  _ = (_) => _.layout.height,
  _ = (_) => _.layout.scale,
  _ = (_) => _.layout.margin,
  _ = _(
    (_) => _.cartesianAxis.xAxis,
    (_) => Object.values(_),
  ),
  _ = _(
    (_) => _.cartesianAxis.yAxis,
    (_) => Object.values(_),
  ),
  _ = `data-recharts-item-index`,
  _ = `data-recharts-item-data-key`;
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = (_) => _.brush.height;
function _(_) {
  return _(_).reduce(
    (_, _) =>
      _.orientation === `left` && !_.mirror && !_.hide
        ? _ + (typeof _.width == `number` ? _.width : 60)
        : _,
    0,
  );
}
function _(_) {
  return _(_).reduce(
    (_, _) =>
      _.orientation === `right` && !_.mirror && !_.hide
        ? _ + (typeof _.width == `number` ? _.width : 60)
        : _,
    0,
  );
}
function _(_) {
  return _(_).reduce(
    (_, _) =>
      _.orientation === `top` && !_.mirror && !_.hide ? _ + _.height : _,
    0,
  );
}
function _(_) {
  return _(_).reduce(
    (_, _) =>
      _.orientation === `bottom` && !_.mirror && !_.hide ? _ + _.height : _,
    0,
  );
}
var _ = _([_, _, _, _, _, _, _, _, _, _], (_, _, _, _, _, _, _, _, _, _) => {
    var _ = {
        left: (_.left || 0) + _,
        right: (_.right || 0) + _,
      },
      _ = _(
        _(
          {},
          {
            top: (_.top || 0) + _,
            bottom: (_.bottom || 0) + _,
          },
        ),
        _,
      ),
      _ = _.bottom;
    ((_.bottom += _), (_ = _(_, _, _)));
    var _ = _ - _.left - _.right,
      _ = _ - _.top - _.bottom;
    return _(
      _(
        {
          brushBottom: _,
        },
        _,
      ),
      {},
      {
        width: Math.max(_, 0),
        height: Math.max(_, 0),
      },
    );
  }),
  _ = _(_, (_) => ({
    _: _.left,
    _: _.top,
    width: _.width,
    height: _.height,
  })),
  _ = _(_, _, (_, _) => ({
    _: 0,
    _: 0,
    width: _,
    height: _,
  })),
  _ = (0, _.createContext)(null),
  _ = () => (0, _.useContext)(_) != null,
  _ = (_) => _.brush,
  _ = _([_, _, _], (_, _, _) => ({
    height: _.height,
    _: _(_._) ? _._ : _.left,
    _: _(_._) ? _._ : _.top + _.height + _.brushBottom - (_?.bottom || 0),
    width: _(_.width) ? _.width : _.width,
  })),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_, _, { signal: _, edges: _ } = {}) {
      let _,
        _ = null,
        _ = _ != null && _.includes(`leading`),
        _ = _ == null || _.includes(`trailing`),
        _ = () => {
          _ !== null && (_.apply(_, _), (_ = void 0), (_ = null));
        },
        _ = () => {
          (_ && _(), _());
        },
        _ = null,
        _ = () => {
          (_ != null && clearTimeout(_),
            (_ = setTimeout(() => {
              ((_ = null), _());
            }, _)));
        },
        _ = () => {
          _ !== null && (clearTimeout(_), (_ = null));
        },
        _ = () => {
          (_(), (_ = void 0), (_ = null));
        },
        _ = () => {
          _();
        },
        _ = function (..._) {
          if (_?.aborted) return;
          ((_ = this), (_ = _));
          let _ = _ == null;
          (_(), _ && _ && _());
        };
      return (
        (_.schedule = _),
        (_.cancel = _),
        (_.flush = _),
        _?.addEventListener(`abort`, _, {
          once: !0,
        }),
        _
      );
    }
    _.debounce = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _();
    function _(_, _ = 0, _ = {}) {
      typeof _ != `object` && (_ = {});
      let { leading: _ = !1, trailing: _ = !0, maxWait: _ } = _,
        _ = [, ,];
      (_ && (_[0] = `leading`), _ && (_[1] = `trailing`));
      let _,
        _ = null,
        _ = _.debounce(
          function (..._) {
            ((_ = _.apply(this, _)), (_ = null));
          },
          _,
          {
            edges: _,
          },
        ),
        _ = function (..._) {
          return _ != null &&
            (_ === null && (_ = Date.now()), Date.now() - _ >= _)
            ? ((_ = _.apply(this, _)),
              (_ = Date.now()),
              _.cancel(),
              _.schedule(),
              _)
            : (_.apply(this, _), _);
        };
      return ((_.cancel = _.cancel), (_.flush = () => (_.flush(), _)), _);
    }
    _.debounce = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _();
    function _(_, _ = 0, _ = {}) {
      let { leading: _ = !0, trailing: _ = !0 } = _;
      return _.debounce(_, _, {
        leading: _,
        maxWait: _,
        trailing: _,
      });
    }
    _.throttle = _;
  }),
  _ = _(
    _((_, _) => {
      _.exports = _().throttle;
    })(),
  ),
  _ = (_, _, _) => {
    var { width: _ = `100%`, height: _ = `100%`, aspect: _, maxHeight: _ } = _,
      _ = _(_) ? _ : Number(_),
      _ = _(_) ? _ : Number(_);
    return (
      _ && _ > 0 && (_ ? (_ = _ / _) : _ && (_ = _ * _), _ && _ > _ && (_ = _)),
      {
        calculatedWidth: _,
        calculatedHeight: _,
      }
    );
  },
  _ = {
    width: 0,
    height: 0,
    overflow: `visible`,
  },
  _ = {
    width: 0,
    overflowX: `visible`,
  },
  _ = {
    height: 0,
    overflowY: `visible`,
  },
  _ = {},
  _ = (_) => {
    var { width: _, height: _ } = _,
      _ = _(_),
      _ = _(_);
    return _ && _ ? _ : _ ? _ : _ ? _ : _;
  };
function _(_) {
  var { width: _, height: _, aspect: _ } = _,
    _ = _,
    _ = _;
  return (
    _ === void 0 && _ === void 0
      ? ((_ = `100%`), (_ = `100%`))
      : _ === void 0
        ? (_ = _ && _ > 0 ? void 0 : `100%`)
        : _ === void 0 && (_ = _ && _ > 0 ? void 0 : `100%`),
    {
      width: _,
      height: _,
    }
  );
}
function _(_) {
  return Number.isFinite(_);
}
function _(_) {
  return typeof _ == `number` && _ > 0 && Number.isFinite(_);
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = (0, _.createContext)({
  width: -1,
  height: -1,
});
function _(_) {
  var { children: _, width: _, height: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        width: _,
        height: _,
      }),
      [_, _],
    );
  return _ <= 0 || _ <= 0
    ? null
    : _.createElement(
        _.Provider,
        {
          value: _,
        },
        _,
      );
}
var _ = () => (0, _.useContext)(_),
  _ = (0, _.forwardRef)((_, _) => {
    var {
        aspect: _,
        initialDimension: _ = {
          width: -1,
          height: -1,
        },
        width: _,
        height: _,
        minWidth: _ = 0,
        minHeight: _,
        maxHeight: _,
        children: _,
        debounce: _ = 0,
        _: _,
        className: _,
        onResize: _,
        style: _ = {},
      } = _,
      _ = (0, _.useRef)(null),
      _ = (0, _.useRef)();
    ((_.current = _), (0, _.useImperativeHandle)(_, () => _.current));
    var [_, _] = (0, _.useState)({
        containerWidth: _.width,
        containerHeight: _.height,
      }),
      _ = (0, _.useCallback)((_, _) => {
        _((_) => {
          var _ = Math.round(_),
            _ = Math.round(_);
          return _.containerWidth === _ && _.containerHeight === _
            ? _
            : {
                containerWidth: _,
                containerHeight: _,
              };
        });
      }, []);
    (0, _.useEffect)(() => {
      var _ = (_) => {
        var _,
          { width: _, height: _ } = _[0].contentRect;
        (_(_, _), (_ = _.current) == null || _.call(_, _, _));
      };
      _ > 0 &&
        (_ = (0, _.default)(_, _, {
          trailing: !0,
          leading: !1,
        }));
      var _ = new ResizeObserver(_),
        { width: _, height: _ } = _.current.getBoundingClientRect();
      return (
        _(_, _),
        _.observe(_.current),
        () => {
          _.disconnect();
        }
      );
    }, [_, _]);
    var { containerWidth: _, containerHeight: _ } = _,
      { calculatedWidth: _, calculatedHeight: _ } = _(_, _, {
        width: _,
        height: _,
        aspect: _,
        maxHeight: _,
      });
    return _.createElement(
      `div`,
      {
        _: _ ? `${_}` : void 0,
        className: _(`recharts-responsive-container`, _),
        style: _(
          _({}, _),
          {},
          {
            width: _,
            height: _,
            minWidth: _,
            minHeight: _,
            maxHeight: _,
          },
        ),
        ref: _,
      },
      _.createElement(
        `div`,
        {
          style: _({
            width: _,
            height: _,
          }),
        },
        _.createElement(
          _,
          {
            width: _,
            height: _,
          },
          _,
        ),
      ),
    );
  }),
  _ = (0, _.forwardRef)((_, _) => {
    var _ = _();
    if (_(_.width) && _(_.height)) return _.children;
    var { width: _, height: _ } = _({
        width: _.width,
        height: _.height,
        aspect: _.aspect,
      }),
      { calculatedWidth: _, calculatedHeight: _ } = _(void 0, void 0, {
        width: _,
        height: _,
        aspect: _.aspect,
        maxHeight: _.maxHeight,
      });
    return _(_) && _(_)
      ? _.createElement(
          _,
          {
            width: _,
            height: _,
          },
          _.children,
        )
      : _.createElement(
          _,
          _({}, _, {
            width: _,
            height: _,
            ref: _,
          }),
        );
  }),
  _ = () => {
    var _ = _(),
      _ = _(_),
      _ = _(_),
      _ = _(_)?.padding;
    return !_ || !_ || !_
      ? _
      : {
          width: _.width - _.left - _.right,
          height: _.height - _.top - _.bottom,
          _: _.left,
          _: _.top,
        };
  },
  _ = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  _ = () => _(_) ?? _,
  _ = () => _(_),
  _ = () => _(_),
  _ = () => _((_) => _.layout.margin),
  _ = (_) => _.layout.layoutType,
  _ = () => _(_),
  _ = (_) => {
    var _ = _(),
      _ = _(),
      { width: _, height: _ } = _,
      _ = _(),
      _ = _,
      _ = _;
    return (
      _ && ((_ = _.width > 0 ? _.width : _), (_ = _.height > 0 ? _.height : _)),
      (0, _.useEffect)(() => {
        !_ &&
          _(_) &&
          _(_) &&
          _(
            _({
              width: _,
              height: _,
            }),
          );
      }, [_, _, _, _]),
      null
    );
  },
  _ = _({
    name: `legend`,
    initialState: {
      settings: {
        layout: `horizontal`,
        align: `center`,
        verticalAlign: `middle`,
        itemSorter: `value`,
      },
      size: {
        width: 0,
        height: 0,
      },
      payload: [],
    },
    reducers: {
      setLegendSize(_, _) {
        ((_.size.width = _.payload.width), (_.size.height = _.payload.height));
      },
      setLegendSettings(_, _) {
        ((_.settings.align = _.payload.align),
          (_.settings.layout = _.payload.layout),
          (_.settings.verticalAlign = _.payload.verticalAlign),
          (_.settings.itemSorter = _.payload.itemSorter));
      },
      addLegendPayload: {
        reducer(_, _) {
          _.payload.push(_(_.payload));
        },
        prepare: _(),
      },
      removeLegendPayload: {
        reducer(_, _) {
          var _ = _(_).payload.indexOf(_(_.payload));
          _ > -1 && _.payload.splice(_, 1);
        },
        prepare: _(),
      },
    },
  }),
  {
    setLegendSize: _,
    setLegendSettings: _,
    addLegendPayload: _,
    removeLegendPayload: _,
  } = _.actions,
  _ = _.reducer;
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_) {
  return Array.isArray(_) && _(_[0]) && _(_[1]) ? _.join(` ~ `) : _;
}
var _ = (_) => {
    var {
        separator: _ = ` : `,
        contentStyle: _ = {},
        itemStyle: _ = {},
        labelStyle: _ = {},
        payload: _,
        formatter: _,
        itemSorter: _,
        wrapperClassName: _,
        labelClassName: _,
        label: _,
        labelFormatter: _,
        accessibilityLayer: _ = !1,
      } = _,
      _ = () => {
        if (_ && _.length) {
          var _ = {
              padding: 0,
              margin: 0,
            },
            _ = (_ ? (0, _.default)(_, _) : _).map((_, _) => {
              if (_.type === `none`) return null;
              var _ = _.formatter || _ || _,
                { value: _, name: _ } = _,
                _ = _,
                _ = _;
              if (_) {
                var _ = _(_, _, _, _, _);
                if (Array.isArray(_)) [_, _] = _;
                else if (_ != null) _ = _;
                else return null;
              }
              var _ = _(
                {
                  display: `block`,
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: _.color || `#000`,
                },
                _,
              );
              return _.createElement(
                `li`,
                {
                  className: `recharts-tooltip-item`,
                  key: `tooltip-item-${_}`,
                  style: _,
                },
                _(_)
                  ? _.createElement(
                      `span`,
                      {
                        className: `recharts-tooltip-item-name`,
                      },
                      _,
                    )
                  : null,
                _(_)
                  ? _.createElement(
                      `span`,
                      {
                        className: `recharts-tooltip-item-separator`,
                      },
                      _,
                    )
                  : null,
                _.createElement(
                  `span`,
                  {
                    className: `recharts-tooltip-item-value`,
                  },
                  _,
                ),
                _.createElement(
                  `span`,
                  {
                    className: `recharts-tooltip-item-unit`,
                  },
                  _.unit || ``,
                ),
              );
            });
          return _.createElement(
            `ul`,
            {
              className: `recharts-tooltip-item-list`,
              style: _,
            },
            _,
          );
        }
        return null;
      },
      _ = _(
        {
          margin: 0,
          padding: 10,
          backgroundColor: `#fff`,
          border: `1px solid #ccc`,
          whiteSpace: `nowrap`,
        },
        _,
      ),
      _ = _(
        {
          margin: 0,
        },
        _,
      ),
      _ = !_(_),
      _ = _ ? _ : ``,
      _ = _(`recharts-default-tooltip`, _),
      _ = _(`recharts-tooltip-label`, _);
    _ && _ && _ != null && (_ = _(_, _));
    var _ = _
      ? {
          role: `status`,
          "aria-live": `assertive`,
        }
      : {};
    return _.createElement(
      `div`,
      _(
        {
          className: _,
          style: _,
        },
        _,
      ),
      _.createElement(
        `p`,
        {
          className: _,
          style: _,
        },
        _.isValidElement(_) ? _ : `${_}`,
      ),
      _(),
    );
  },
  _ = `recharts-tooltip-wrapper`,
  _ = {
    visibility: `hidden`,
  };
function _(_) {
  var { coordinate: _, translateX: _, translateY: _ } = _;
  return _(_, {
    [`${_}-right`]: _(_) && _ && _(_._) && _ >= _._,
    [`${_}-left`]: _(_) && _ && _(_._) && _ < _._,
    [`${_}-bottom`]: _(_) && _ && _(_._) && _ >= _._,
    [`${_}-top`]: _(_) && _ && _(_._) && _ < _._,
  });
}
function _(_) {
  var {
    allowEscapeViewBox: _,
    coordinate: _,
    key: _,
    offsetTopLeft: _,
    position: _,
    reverseDirection: _,
    tooltipDimension: _,
    viewBox: _,
    viewBoxDimension: _,
  } = _;
  if (_ && _(_[_])) return _[_];
  var _ = _[_] - _ - (_ > 0 ? _ : 0),
    _ = _[_] + _;
  if (_[_]) return _[_] ? _ : _;
  var _ = _[_];
  return _ == null
    ? 0
    : _[_]
      ? Math.max(_ < _ ? _ : _, _)
      : _ == null
        ? 0
        : _ + _ > _ + _
          ? Math.max(_, _)
          : Math.max(_, _);
}
function _(_) {
  var { translateX: _, translateY: _, useTranslate3d: _ } = _;
  return {
    transform: _
      ? `translate3d(${_}px, ${_}px, 0)`
      : `translate(${_}px, ${_}px)`,
  };
}
function _(_) {
  var {
      allowEscapeViewBox: _,
      coordinate: _,
      offsetTopLeft: _,
      position: _,
      reverseDirection: _,
      tooltipBox: _,
      useTranslate3d: _,
      viewBox: _,
    } = _,
    _,
    _,
    _;
  return (
    _.height > 0 && _.width > 0 && _
      ? ((_ = _({
          allowEscapeViewBox: _,
          coordinate: _,
          key: `x`,
          offsetTopLeft: _,
          position: _,
          reverseDirection: _,
          tooltipDimension: _.width,
          viewBox: _,
          viewBoxDimension: _.width,
        })),
        (_ = _({
          allowEscapeViewBox: _,
          coordinate: _,
          key: `y`,
          offsetTopLeft: _,
          position: _,
          reverseDirection: _,
          tooltipDimension: _.height,
          viewBox: _,
          viewBoxDimension: _.height,
        })),
        (_ = _({
          translateX: _,
          translateY: _,
          useTranslate3d: _,
        })))
      : (_ = _),
    {
      cssProperties: _,
      cssClasses: _({
        translateX: _,
        translateY: _,
        coordinate: _,
      }),
    }
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = class extends _.PureComponent {
    constructor() {
      (super(...arguments),
        _(this, `state`, {
          dismissed: !1,
          dismissedAtCoordinate: {
            _: 0,
            _: 0,
          },
        }),
        _(this, `handleKeyDown`, (_) => {
          _.key === `Escape` &&
            this.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                _: this.props.coordinate?._ ?? 0,
                _: this.props.coordinate?._ ?? 0,
              },
            });
        }));
    }
    componentDidMount() {
      document.addEventListener(`keydown`, this.handleKeyDown);
    }
    componentWillUnmount() {
      document.removeEventListener(`keydown`, this.handleKeyDown);
    }
    componentDidUpdate() {
      this.state.dismissed &&
        (this.props.coordinate?._ !== this.state.dismissedAtCoordinate._ ||
          this.props.coordinate?._ !== this.state.dismissedAtCoordinate._) &&
        (this.state.dismissed = !1);
    }
    render() {
      var {
          active: _,
          allowEscapeViewBox: _,
          animationDuration: _,
          animationEasing: _,
          children: _,
          coordinate: _,
          hasPayload: _,
          isAnimationActive: _,
          offset: _,
          position: _,
          reverseDirection: _,
          useTranslate3d: _,
          viewBox: _,
          wrapperStyle: _,
          lastBoundingBox: _,
          innerRef: _,
          hasPortalFromProps: _,
        } = this.props,
        { cssClasses: _, cssProperties: _ } = _({
          allowEscapeViewBox: _,
          coordinate: _,
          offsetTopLeft: _,
          position: _,
          reverseDirection: _,
          tooltipBox: {
            height: _.height,
            width: _.width,
          },
          useTranslate3d: _,
          viewBox: _,
        }),
        _ = _(
          _(
            {},
            _
              ? {}
              : _(
                  _(
                    {
                      transition: _ && _ ? `transform ${_}ms ${_}` : void 0,
                    },
                    _,
                  ),
                  {},
                  {
                    pointerEvents: `none`,
                    visibility:
                      !this.state.dismissed && _ && _ ? `visible` : `hidden`,
                    position: `absolute`,
                    top: 0,
                    left: 0,
                  },
                ),
          ),
          {},
          {
            visibility: !this.state.dismissed && _ && _ ? `visible` : `hidden`,
          },
          _,
        );
      return _.createElement(
        `div`,
        {
          xmlns: `http://www.w3.org/1999/xhtml`,
          tabIndex: -1,
          className: _,
          style: _,
          ref: _,
        },
        _,
      );
    }
  },
  _ = {
    devToolsEnabled: !1,
    isSsr: !(
      typeof window < `u` &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
  },
  _ = () => _((_) => _.rootProps.accessibilityLayer);
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = {
    curveBasisClosed: _,
    curveBasisOpen: _,
    curveBasis: _,
    curveBumpX: _,
    curveBumpY: _,
    curveLinearClosed: _,
    curveLinear: _,
    curveMonotoneX: _,
    curveMonotoneY: _,
    curveNatural: _,
    curveStep: _,
    curveStepAfter: _,
    curveStepBefore: _,
  },
  _ = (_) => _(_._) && _(_._),
  _ = (_) => _._,
  _ = (_) => _._,
  _ = (_, _) => {
    if (typeof _ == `function`) return _;
    var _ = `curve${_(_)}`;
    return (_ === `curveMonotone` || _ === `curveBump`) && _
      ? _[`${_}${_ === `vertical` ? `Y` : `X`}`]
      : _[_] || _;
  },
  _ = (_) => {
    var {
        type: _ = `linear`,
        points: _ = [],
        baseLine: _,
        layout: _,
        connectNulls: _ = !1,
      } = _,
      _ = _(_, _),
      _ = _ ? _.filter(_) : _,
      _;
    if (Array.isArray(_)) {
      var _ = _ ? _.filter((_) => _(_)) : _,
        _ = _.map((_, _) =>
          _(
            _({}, _),
            {},
            {
              base: _[_],
            },
          ),
        );
      return (
        (_ =
          _ === `vertical`
            ? _()
                ._(_)
                ._(_)
                ._((_) => _.base._)
            : _()
                ._(_)
                ._(_)
                ._((_) => _.base._)),
        _.defined(_).curve(_),
        _(_)
      );
    }
    return (
      (_ =
        _ === `vertical` && _(_)
          ? _()._(_)._(_)._(_)
          : _(_)
            ? _()._(_)._(_)._(_)
            : _()._(_)._(_)),
      _.defined(_).curve(_),
      _(_)
    );
  },
  _ = (_) => {
    var { className: _, points: _, path: _, pathRef: _ } = _;
    if ((!_ || !_.length) && !_) return null;
    var _ = _ && _.length ? _(_) : _;
    return _.createElement(
      `path`,
      _({}, _(_), _(_), {
        className: _(`recharts-curve`, _),
        _: _ === null ? void 0 : _,
        ref: _,
      }),
    );
  },
  _ = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = (_, _, _, _, _, _) => `M${_},${_}v${_}M${_},${_}h${_}`,
  _ = (_) => {
    var {
        _: _ = 0,
        _: _ = 0,
        top: _ = 0,
        left: _ = 0,
        width: _ = 0,
        height: _ = 0,
        className: _,
      } = _,
      _ = _(_, _),
      _ = _(
        {
          _: _,
          _: _,
          top: _,
          left: _,
          width: _,
          height: _,
        },
        _,
      );
    return !_(_) || !_(_) || !_(_) || !_(_) || !_(_) || !_(_)
      ? null
      : _.createElement(
          `path`,
          _({}, _(_), {
            className: _(`recharts-cross`, _),
            _: _(_, _, _, _, _, _),
          }),
        );
  };
function _(_, _, _, _) {
  var _ = _ / 2;
  return {
    stroke: `none`,
    fill: `#ccc`,
    _: _ === `horizontal` ? _._ - _ : _.left + 0.5,
    _: _ === `horizontal` ? _.top + 0.5 : _._ - _,
    width: _ === `horizontal` ? _ : _.width - 1,
    height: _ === `horizontal` ? _.height - 1 : _,
  };
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_, _) {
  var _ = _({}, _),
    _ = _;
  return Object.keys(_).reduce(
    (_, _) => (_[_] === void 0 && _[_] !== void 0 && (_[_] = _[_]), _),
    _,
  );
}
function _() {}
function _(_) {
  return _ != null;
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = (_) => _.replace(/([A-Z])/g, (_) => `-${_.toLowerCase()}`),
  _ = (_, _, _) => _.map((_) => `${_(_)} ${_}ms ${_}`).join(`,`),
  _ = (_, _) =>
    [Object.keys(_), Object.keys(_)].reduce((_, _) =>
      _.filter((_) => _.includes(_)),
    ),
  _ = (_, _) =>
    Object.keys(_).reduce(
      (_, _) =>
        _(
          _({}, _),
          {},
          {
            [_]: _(_, _[_]),
          },
        ),
      {},
    );
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = (_, _, _) => _ + (_ - _) * _,
  _ = (_) => {
    var { from: _, _: _ } = _;
    return _ !== _;
  },
  _ = (_, _, _) => {
    var _ = _((_, _) => {
      if (_(_)) {
        var [_, _] = _(_.from, _._, _.velocity);
        return _(
          _({}, _),
          {},
          {
            from: _,
            velocity: _,
          },
        );
      }
      return _;
    }, _);
    return _ < 1
      ? _(
          (_, _) =>
            _(_)
              ? _(
                  _({}, _),
                  {},
                  {
                    velocity: _(_.velocity, _[_].velocity, _),
                    from: _(_.from, _[_].from, _),
                  },
                )
              : _,
          _,
        )
      : _(_, _, _ - 1);
  };
function _(_, _, _, _, _, _) {
  var _,
    _ = _.reduce(
      (_, _) =>
        _(
          _({}, _),
          {},
          {
            [_]: {
              from: _[_],
              velocity: 0,
              _: _[_],
            },
          },
        ),
      {},
    ),
    _ = () => _((_, _) => _.from, _),
    _ = () => !Object.values(_).filter(_).length,
    _ = null,
    _ = (_) => {
      _ ||= _;
      var _ = (_ - _) / _._;
      ((_ = _(_, _, _)),
        _(_(_(_({}, _), _), _())),
        (_ = _),
        _() || (_ = _.setTimeout(_)));
    };
  return () => (
    (_ = _.setTimeout(_)),
    () => {
      _();
    }
  );
}
function _(_, _, _, _, _, _, _) {
  var _ = null,
    _ = _.reduce(
      (_, _) =>
        _(
          _({}, _),
          {},
          {
            [_]: [_[_], _[_]],
          },
        ),
      {},
    ),
    _,
    _ = (_) => {
      _ ||= _;
      var _ = (_ - _) / _,
        _ = _((_, _) => _(..._, _(_)), _);
      if ((_(_(_(_({}, _), _), _)), _ < 1)) _ = _.setTimeout(_);
      else {
        var _ = _((_, _) => _(..._, _(1)), _);
        _(_(_(_({}, _), _), _));
      }
    };
  return () => (
    (_ = _.setTimeout(_)),
    () => {
      _();
    }
  );
}
var _ = (_, _, _, _, _, _) => {
    var _ = _(_, _);
    return _.isStepper === !0 ? _(_, _, _, _, _, _) : _(_, _, _, _, _, _, _);
  },
  _ = (_, _) => [0, 3 * _, 3 * _ - 6 * _, 3 * _ - 3 * _ + 1],
  _ = (_, _) => _.map((_, _) => _ * _ ** _).reduce((_, _) => _ + _),
  _ = (_, _) => (_) => _(_(_, _), _),
  _ = (_, _) => (_) =>
    _(
      [
        ..._(_, _)
          .map((_, _) => _ * _)
          .slice(1),
        0,
      ],
      _,
    ),
  _ = function () {
    var _,
      _,
      _,
      _,
      _ = [...arguments];
    if (_.length === 1)
      switch (_[0]) {
        case `linear`:
          [_, _, _, _] = [0, 0, 1, 1];
          break;
        case `ease`:
          [_, _, _, _] = [0.25, 0.1, 0.25, 1];
          break;
        case `ease-in`:
          [_, _, _, _] = [0.42, 0, 1, 1];
          break;
        case `ease-out`:
          [_, _, _, _] = [0.42, 0, 0.58, 1];
          break;
        case `ease-in-out`:
          [_, _, _, _] = [0, 0, 0.58, 1];
          break;
        default:
          var _ = _[0].split(`(`);
          _[0] === `cubic-bezier` &&
            _[1].split(`)`)[0].split(`,`).length === 4 &&
            ([_, _, _, _] = _[1]
              .split(`)`)[0]
              .split(`,`)
              .map((_) => parseFloat(_)));
      }
    else _.length === 4 && ([_, _, _, _] = _);
    var _ = _(_, _),
      _ = _(_, _),
      _ = _(_, _),
      _ = (_) => (_ > 1 ? 1 : _ < 0 ? 0 : _),
      _ = (_) => {
        for (var _ = _ > 1 ? 1 : _, _ = _, _ = 0; _ < 8; ++_) {
          var _ = _(_) - _,
            _ = _(_);
          if (Math.abs(_ - _) < 1e-4 || _ < 1e-4) return _(_);
          _ = _(_ - _ / _);
        }
        return _(_);
      };
    return ((_.isStepper = !1), _);
  },
  _ = function () {
    var {
        stiff: _ = 100,
        damping: _ = 8,
        _: _ = 17,
      } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      _ = (_, _, _) => {
        var _ = _ + ((-(_ - _) * _ - _ * _) * _) / 1e3,
          _ = (_ * _) / 1e3 + _;
        return Math.abs(_ - _) < 1e-4 && Math.abs(_) < 1e-4 ? [_, 0] : [_, _];
      };
    return ((_.isStepper = !0), (_._ = _), _);
  },
  _ = (_) => {
    if (typeof _ == `string`)
      switch (_) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return _(_);
        case `spring`:
          return _();
        default:
          if (_.split(`(`)[0] === `cubic-bezier`) return _(_);
      }
    return typeof _ == `function` ? _ : null;
  };
function _(_) {
  var _,
    _ = () => null,
    _ = !1,
    _ = null,
    _ = (_) => {
      if (!_) {
        if (Array.isArray(_)) {
          if (!_.length) return;
          var [_, ..._] = _;
          if (typeof _ == `number`) {
            _ = _.setTimeout(_.bind(null, _), _);
            return;
          }
          (_(_), (_ = _.setTimeout(_.bind(null, _))));
        } else
          (typeof _ == `string` && ((_ = _), _(_)),
            typeof _ == `object` && ((_ = _), _(_)),
            typeof _ == `function` && _());
      }
    };
  return {
    stop: () => {
      _ = !0;
    },
    start: (_) => {
      ((_ = !1), (_ &&= (_(), null)), _(_));
    },
    subscribe: (_) => (
      (_ = _),
      () => {
        _ = () => null;
      }
    ),
    getTimeoutController: () => _,
  };
}
var _ = class {
  setTimeout(_) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      _ = performance.now(),
      _ = null,
      _ = (_) => {
        _ - _ >= _
          ? _(_)
          : typeof requestAnimationFrame == `function` &&
            (_ = requestAnimationFrame(_));
      };
    return (
      (_ = requestAnimationFrame(_)),
      () => {
        cancelAnimationFrame(_);
      }
    );
  }
};
function _() {
  return _(new _());
}
var _ = (0, _.createContext)(_);
function _(_, _) {
  var _ = (0, _.useContext)(_);
  return (0, _.useMemo)(() => _ ?? _(_), [_, _, _]);
}
var _ = {
    begin: 0,
    duration: 1e3,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  _ = {
    _: 0,
  },
  _ = {
    _: 1,
  };
function _(_) {
  var _ = _(_, _),
    {
      isActive: _,
      canBegin: _,
      duration: _,
      easing: _,
      begin: _,
      onAnimationEnd: _,
      onAnimationStart: _,
      children: _,
    } = _,
    _ = _(_.animationId, _.animationManager),
    [_, _] = (0, _.useState)(_ ? _ : _),
    _ = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      _ || _(_);
    }, [_]),
    (0, _.useEffect)(() => {
      if (!_ || !_) return _;
      var _ = _(_, _, _(_), _, _, _.getTimeoutController());
      return (
        _.start([
          _,
          _,
          () => {
            _.current = _();
          },
          _,
          _,
        ]),
        () => {
          (_.stop(), _.current && _.current(), _());
        }
      );
    }, [_, _, _, _, _, _, _, _]),
    _(_._)
  );
}
function _(_) {
  var _ =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : `animation-`,
    _ = (0, _.useRef)(_(_)),
    _ = (0, _.useRef)(_);
  return (_.current !== _ && ((_.current = _(_)), (_.current = _)), _.current);
}
var _ = [`radius`],
  _ = [`radius`];
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = (_, _, _, _, _) => {
    var _ = Math.min(Math.abs(_) / 2, Math.abs(_) / 2),
      _ = _ >= 0 ? 1 : -1,
      _ = _ >= 0 ? 1 : -1,
      _ = +((_ >= 0 && _ >= 0) || (_ < 0 && _ < 0)),
      _;
    if (_ > 0 && _ instanceof Array) {
      for (var _ = [0, 0, 0, 0], _ = 0, _ = 4; _ < _; _++)
        _[_] = _[_] > _ ? _ : _[_];
      ((_ = `M${_},${_ + _ * _[0]}`),
        _[0] > 0 && (_ += `A ${_[0]},${_[0]},0,0,${_},${_ + _ * _[0]},${_}`),
        (_ += `L ${_ + _ - _ * _[1]},${_}`),
        _[1] > 0 &&
          (_ += `A ${_[1]},${_[1]},0,0,${_},
        ${_ + _},${_ + _ * _[1]}`),
        (_ += `L ${_ + _},${_ + _ - _ * _[2]}`),
        _[2] > 0 &&
          (_ += `A ${_[2]},${_[2]},0,0,${_},
        ${_ + _ - _ * _[2]},${_ + _}`),
        (_ += `L ${_ + _ * _[3]},${_ + _}`),
        _[3] > 0 &&
          (_ += `A ${_[3]},${_[3]},0,0,${_},
        ${_},${_ + _ - _ * _[3]}`),
        (_ += `Z`));
    } else if (_ > 0 && _ === +_ && _ > 0) {
      var _ = Math.min(_, _);
      _ = `M ${_},${_ + _ * _}
            A ${_},${_},0,0,${_},${_ + _ * _},${_}
            L ${_ + _ - _ * _},${_}
            A ${_},${_},0,0,${_},${_ + _},${_ + _ * _}
            L ${_ + _},${_ + _ - _ * _}
            A ${_},${_},0,0,${_},${_ + _ - _ * _},${_ + _}
            L ${_ + _ * _},${_ + _}
            A ${_},${_},0,0,${_},${_},${_ + _ - _ * _} Z`;
    } else _ = `M ${_},${_} h ${_} v ${_} h ${-_} Z`;
    return _;
  },
  _ = {
    _: 0,
    _: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  _ = (_) => {
    var _ = _(_, _),
      _ = (0, _.useRef)(null),
      [_, _] = (0, _.useState)(-1);
    (0, _.useEffect)(() => {
      if (_.current && _.current.getTotalLength)
        try {
          var _ = _.current.getTotalLength();
          _ && _(_);
        } catch {}
    }, []);
    var { _: _, _: _, width: _, height: _, radius: _, className: _ } = _,
      {
        animationEasing: _,
        animationDuration: _,
        animationBegin: _,
        isAnimationActive: _,
        isUpdateAnimationActive: _,
      } = _,
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = _(
        (0, _.useMemo)(
          () => ({
            _: _,
            _: _,
            width: _,
            height: _,
            radius: _,
          }),
          [_, _, _, _, _],
        ),
        `rectangle-`,
      );
    if (_ !== +_ || _ !== +_ || _ !== +_ || _ !== +_ || _ === 0 || _ === 0)
      return null;
    var _ = _(`recharts-rectangle`, _);
    if (!_) {
      var _ = _(_),
        { radius: _ } = _,
        _ = _(_, _);
      return _.createElement(
        `path`,
        _({}, _, {
          radius: typeof _ == `number` ? _ : void 0,
          className: _,
          _: _(_, _, _, _, _),
        }),
      );
    }
    var _ = _.current,
      _ = _.current,
      _ = _.current,
      _ = _.current,
      _ = `0px ${_ === -1 ? 1 : _}px`,
      _ = `${_}px 0px`,
      _ = _([`strokeDasharray`], _, typeof _ == `string` ? _ : void 0);
    return _.createElement(
      _,
      {
        animationId: _,
        key: _,
        canBegin: _ > 0,
        duration: _,
        easing: _,
        isActive: _,
        begin: _,
      },
      (_) => {
        var _ = _(_, _, _),
          _ = _(_, _, _),
          _ = _(_, _, _),
          _ = _(_, _, _);
        _.current &&
          ((_.current = _), (_.current = _), (_.current = _), (_.current = _));
        var _ = _
            ? _ > 0
              ? {
                  transition: _,
                  strokeDasharray: _,
                }
              : {
                  strokeDasharray: _,
                }
            : {
                strokeDasharray: _,
              },
          _ = _(_),
          { radius: _ } = _,
          _ = _(_, _);
        return _.createElement(
          `path`,
          _({}, _, {
            radius: typeof _ == `number` ? _ : void 0,
            className: _,
            _: _(_, _, _, _, _),
            ref: _,
            style: _(_({}, _), _.style),
          }),
        );
      },
    );
  };
function _(_) {
  var { _: _, _: _, radius: _, startAngle: _, endAngle: _ } = _;
  return {
    points: [_(_, _, _, _), _(_, _, _, _)],
    _: _,
    _: _,
    radius: _,
    startAngle: _,
    endAngle: _,
  };
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
var _ = (_, _) => _(_ - _) * Math.min(Math.abs(_ - _), 359.999),
  _ = (_) => {
    var {
        _: _,
        _: _,
        radius: _,
        angle: _,
        sign: _,
        isExternal: _,
        cornerRadius: _,
        cornerIsExternal: _,
      } = _,
      _ = _ * (_ ? 1 : -1) + _,
      _ = Math.asin(_ / _) / _,
      _ = _ ? _ : _ + _ * _,
      _ = _(_, _, _, _),
      _ = _(_, _, _, _),
      _ = _ ? _ - _ * _ : _;
    return {
      center: _,
      circleTangency: _,
      lineTangency: _(_, _, _ * Math.cos(_ * _), _),
      theta: _,
    };
  },
  _ = (_) => {
    var {
        _: _,
        _: _,
        innerRadius: _,
        outerRadius: _,
        startAngle: _,
        endAngle: _,
      } = _,
      _ = _(_, _),
      _ = _ + _,
      _ = _(_, _, _, _),
      _ = _(_, _, _, _),
      _ = `M ${_._},${_._}
    A ${_},${_},0,
    ${+(Math.abs(_) > 180)},${+(_ > _)},
    ${_._},${_._}
  `;
    if (_ > 0) {
      var _ = _(_, _, _, _),
        _ = _(_, _, _, _);
      _ += `L ${_._},${_._}
            A ${_},${_},0,
            ${+(Math.abs(_) > 180)},${+(_ <= _)},
            ${_._},${_._} Z`;
    } else _ += `L ${_},${_} Z`;
    return _;
  },
  _ = (_) => {
    var {
        _: _,
        _: _,
        innerRadius: _,
        outerRadius: _,
        cornerRadius: _,
        forceCornerRadius: _,
        cornerIsExternal: _,
        startAngle: _,
        endAngle: _,
      } = _,
      _ = _(_ - _),
      {
        circleTangency: _,
        lineTangency: _,
        theta: _,
      } = _({
        _: _,
        _: _,
        radius: _,
        angle: _,
        sign: _,
        cornerRadius: _,
        cornerIsExternal: _,
      }),
      {
        circleTangency: _,
        lineTangency: _,
        theta: _,
      } = _({
        _: _,
        _: _,
        radius: _,
        angle: _,
        sign: -_,
        cornerRadius: _,
        cornerIsExternal: _,
      }),
      _ = _ ? Math.abs(_ - _) : Math.abs(_ - _) - _ - _;
    if (_ < 0)
      return _
        ? `M ${_._},${_._}
        a${_},${_},0,0,1,${_ * 2},0
        a${_},${_},0,0,1,${-_ * 2},0
      `
        : _({
            _: _,
            _: _,
            innerRadius: _,
            outerRadius: _,
            startAngle: _,
            endAngle: _,
          });
    var _ = `M ${_._},${_._}
    A${_},${_},0,0,${+(_ < 0)},${_._},${_._}
    A${_},${_},0,${+(_ > 180)},${+(_ < 0)},${_._},${_._}
    A${_},${_},0,0,${+(_ < 0)},${_._},${_._}
  `;
    if (_ > 0) {
      var {
          circleTangency: _,
          lineTangency: _,
          theta: _,
        } = _({
          _: _,
          _: _,
          radius: _,
          angle: _,
          sign: _,
          isExternal: !0,
          cornerRadius: _,
          cornerIsExternal: _,
        }),
        {
          circleTangency: _,
          lineTangency: _,
          theta: _,
        } = _({
          _: _,
          _: _,
          radius: _,
          angle: _,
          sign: -_,
          isExternal: !0,
          cornerRadius: _,
          cornerIsExternal: _,
        }),
        _ = _ ? Math.abs(_ - _) : Math.abs(_ - _) - _ - _;
      if (_ < 0 && _ === 0) return `${_}L${_},${_}Z`;
      _ += `L${_._},${_._}
      A${_},${_},0,0,${+(_ < 0)},${_._},${_._}
      A${_},${_},0,${+(_ > 180)},${+(_ > 0)},${_._},${_._}
      A${_},${_},0,0,${+(_ < 0)},${_._},${_._}Z`;
    } else _ += `L${_},${_}Z`;
    return _;
  },
  _ = {
    _: 0,
    _: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  _ = (_) => {
    var _ = _(_, _),
      {
        _: _,
        _: _,
        innerRadius: _,
        outerRadius: _,
        cornerRadius: _,
        forceCornerRadius: _,
        cornerIsExternal: _,
        startAngle: _,
        endAngle: _,
        className: _,
      } = _;
    if (_ < _ || _ === _) return null;
    var _ = _(`recharts-sector`, _),
      _ = _ - _,
      _ = _(_, _, 0, !0),
      _ =
        _ > 0 && Math.abs(_ - _) < 360
          ? _({
              _: _,
              _: _,
              innerRadius: _,
              outerRadius: _,
              cornerRadius: Math.min(_, _ / 2),
              forceCornerRadius: _,
              cornerIsExternal: _,
              startAngle: _,
              endAngle: _,
            })
          : _({
              _: _,
              _: _,
              innerRadius: _,
              outerRadius: _,
              startAngle: _,
              endAngle: _,
            });
    return _.createElement(
      `path`,
      _({}, _(_), {
        className: _,
        _: _,
      }),
    );
  };
function _(_, _, _) {
  var _, _, _, _;
  if (_ === `horizontal`)
    ((_ = _._), (_ = _), (_ = _.top), (_ = _.top + _.height));
  else if (_ === `vertical`)
    ((_ = _._), (_ = _), (_ = _.left), (_ = _.left + _.width));
  else if (_._ != null && _._ != null) {
    if (_ === `centric`) {
      var { _: _, _: _, innerRadius: _, outerRadius: _, angle: _ } = _,
        _ = _(_, _, _, _),
        _ = _(_, _, _, _);
      ((_ = _._), (_ = _._), (_ = _._), (_ = _._));
    } else return _(_);
  }
  return [
    {
      _: _,
      _: _,
    },
    {
      _: _,
      _: _,
    },
  ];
}
var _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _();
    function _(_) {
      return _.isSymbol(_) ? NaN : Number(_);
    }
    _.toNumber = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _();
    function _(_) {
      return _
        ? ((_ = _.toNumber(_)),
          _ === 1 / 0 || _ === -1 / 0
            ? (_ < 0 ? -1 : 1) * Number.MAX_VALUE
            : _ === _
              ? _
              : 0)
        : _ === 0
          ? _
          : 0;
    }
    _.toFinite = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _();
    function _(_, _, _) {
      (_ &&
        typeof _ != `number` &&
        _.isIterateeCall(_, _, _) &&
        (_ = _ = void 0),
        (_ = _.toFinite(_)),
        _ === void 0 ? ((_ = _), (_ = 0)) : (_ = _.toFinite(_)),
        (_ = _ === void 0 ? (_ < _ ? 1 : -1) : _.toFinite(_)));
      let _ = Math.max(Math.ceil((_ - _) / (_ || 1)), 0),
        _ = Array(_);
      for (let _ = 0; _ < _; _++) ((_[_] = _), (_ += _));
      return _;
    }
    _.range = _;
  }),
  _ = _((_, _) => {
    _.exports = _().range;
  });
function _(_, _) {
  return _ == null || _ == null
    ? NaN
    : _ < _
      ? -1
      : _ > _
        ? 1
        : _ >= _
          ? 0
          : NaN;
}
function _(_, _) {
  return _ == null || _ == null
    ? NaN
    : _ < _
      ? -1
      : _ > _
        ? 1
        : _ >= _
          ? 0
          : NaN;
}
function _(_) {
  let _, _, _;
  _.length === 2
    ? ((_ = _ === _ || _ === _ ? _ : _), (_ = _), (_ = _))
    : ((_ = _), (_ = (_, _) => _(_(_), _)), (_ = (_, _) => _(_) - _));
  function _(_, _, _ = 0, _ = _.length) {
    if (_ < _) {
      if (_(_, _) !== 0) return _;
      do {
        let _ = (_ + _) >>> 1;
        _(_[_], _) < 0 ? (_ = _ + 1) : (_ = _);
      } while (_ < _);
    }
    return _;
  }
  function _(_, _, _ = 0, _ = _.length) {
    if (_ < _) {
      if (_(_, _) !== 0) return _;
      do {
        let _ = (_ + _) >>> 1;
        _(_[_], _) <= 0 ? (_ = _ + 1) : (_ = _);
      } while (_ < _);
    }
    return _;
  }
  function _(_, _, _ = 0, _ = _.length) {
    let _ = _(_, _, _, _ - 1);
    return _ > _ && _(_[_ - 1], _) > -_(_[_], _) ? _ - 1 : _;
  }
  return {
    left: _,
    center: _,
    right: _,
  };
}
function _() {
  return 0;
}
function _(_) {
  return _ === null ? NaN : +_;
}
function* _(_, _) {
  if (_ === void 0) for (let _ of _) _ != null && (_ = +_) >= _ && (yield _);
  else {
    let _ = -1;
    for (let _ of _) (_ = _(_, ++_, _)) != null && (_ = +_) >= _ && (yield _);
  }
}
var _ = _(_),
  _ = _.right;
(_.left, _(_).center);
var _ = class extends Map {
  constructor(_, _ = _) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: {
          value: new Map(),
        },
        _key: {
          value: _,
        },
      }),
      _ != null)
    )
      for (let [_, _] of _) this.set(_, _);
  }
  get(_) {
    return super.get(_(this, _));
  }
  has(_) {
    return super.has(_(this, _));
  }
  set(_, _) {
    return super.set(_(this, _), _);
  }
  delete(_) {
    return super.delete(_(this, _));
  }
};
function _({ _intern: _, _key: _ }, _) {
  let _ = _(_);
  return _.has(_) ? _.get(_) : _;
}
function _({ _intern: _, _key: _ }, _) {
  let _ = _(_);
  return _.has(_) ? _.get(_) : (_.set(_, _), _);
}
function _({ _intern: _, _key: _ }, _) {
  let _ = _(_);
  return (_.has(_) && ((_ = _.get(_)), _.delete(_)), _);
}
function _(_) {
  return typeof _ == `object` && _ ? _.valueOf() : _;
}
function _(_ = _) {
  if (_ === _) return _;
  if (typeof _ != `function`) throw TypeError(`compare is not a function`);
  return (_, _) => {
    let _ = _(_, _);
    return _ || _ === 0 ? _ : (_(_, _) === 0) - (_(_, _) === 0);
  };
}
function _(_, _) {
  return (
    (_ == null || !(_ >= _)) - (_ == null || !(_ >= _)) ||
    (_ < _ ? -1 : +(_ > _))
  );
}
var _ = Math.sqrt(50),
  _ = Math.sqrt(10),
  _ = Math.sqrt(2);
function _(_, _, _) {
  let _ = (_ - _) / Math.max(0, _),
    _ = Math.floor(Math.log10(_)),
    _ = _ / 10 ** _,
    _ = _ >= _ ? 10 : _ >= _ ? 5 : _ >= _ ? 2 : 1,
    _,
    _,
    _;
  return (
    _ < 0
      ? ((_ = 10 ** -_ / _),
        (_ = Math.round(_ * _)),
        (_ = Math.round(_ * _)),
        _ / _ < _ && ++_,
        _ / _ > _ && --_,
        (_ = -_))
      : ((_ = 10 ** _ * _),
        (_ = Math.round(_ / _)),
        (_ = Math.round(_ / _)),
        _ * _ < _ && ++_,
        _ * _ > _ && --_),
    _ < _ && 0.5 <= _ && _ < 2 ? _(_, _, _ * 2) : [_, _, _]
  );
}
function _(_, _, _) {
  if (((_ = +_), (_ = +_), (_ = +_), !(_ > 0))) return [];
  if (_ === _) return [_];
  let _ = _ < _,
    [_, _, _] = _ ? _(_, _, _) : _(_, _, _);
  if (!(_ >= _)) return [];
  let _ = _ - _ + 1,
    _ = Array(_);
  if (_) {
    if (_ < 0) for (let _ = 0; _ < _; ++_) _[_] = (_ - _) / -_;
    else for (let _ = 0; _ < _; ++_) _[_] = (_ - _) * _;
  } else if (_ < 0) for (let _ = 0; _ < _; ++_) _[_] = (_ + _) / -_;
  else for (let _ = 0; _ < _; ++_) _[_] = (_ + _) * _;
  return _;
}
function _(_, _, _) {
  return ((_ = +_), (_ = +_), (_ = +_), _(_, _, _)[2]);
}
function _(_, _, _) {
  ((_ = +_), (_ = +_), (_ = +_));
  let _ = _ < _,
    _ = _ ? _(_, _, _) : _(_, _, _);
  return (_ ? -1 : 1) * (_ < 0 ? 1 / -_ : _);
}
function _(_, _) {
  let _;
  if (_ === void 0)
    for (let _ of _)
      _ != null && (_ < _ || (_ === void 0 && _ >= _)) && (_ = _);
  else {
    let _ = -1;
    for (let _ of _)
      (_ = _(_, ++_, _)) != null &&
        (_ < _ || (_ === void 0 && _ >= _)) &&
        (_ = _);
  }
  return _;
}
function _(_, _) {
  let _;
  if (_ === void 0)
    for (let _ of _)
      _ != null && (_ > _ || (_ === void 0 && _ >= _)) && (_ = _);
  else {
    let _ = -1;
    for (let _ of _)
      (_ = _(_, ++_, _)) != null &&
        (_ > _ || (_ === void 0 && _ >= _)) &&
        (_ = _);
  }
  return _;
}
function _(_, _, _ = 0, _ = 1 / 0, _) {
  if (
    ((_ = Math.floor(_)),
    (_ = Math.floor(Math.max(0, _))),
    (_ = Math.floor(Math.min(_.length - 1, _))),
    !(_ <= _ && _ <= _))
  )
    return _;
  for (_ = _ === void 0 ? _ : _(_); _ > _;) {
    if (_ - _ > 600) {
      let _ = _ - _ + 1,
        _ = _ - _ + 1,
        _ = Math.log(_),
        _ = 0.5 * Math.exp((2 * _) / 3),
        _ = 0.5 * Math.sqrt((_ * _ * (_ - _)) / _) * (_ - _ / 2 < 0 ? -1 : 1),
        _ = Math.max(_, Math.floor(_ - (_ * _) / _ + _)),
        _ = Math.min(_, Math.floor(_ + ((_ - _) * _) / _ + _));
      _(_, _, _, _, _);
    }
    let _ = _[_],
      _ = _,
      _ = _;
    for (_(_, _, _), _(_[_], _) > 0 && _(_, _, _); _ < _;) {
      for (_(_, _, _), ++_, --_; _(_[_], _) < 0;) ++_;
      for (; _(_[_], _) > 0;) --_;
    }
    (_(_[_], _) === 0 ? _(_, _, _) : (++_, _(_, _, _)),
      _ <= _ && (_ = _ + 1),
      _ <= _ && (_ = _ - 1));
  }
  return _;
}
function _(_, _, _) {
  let _ = _[_];
  ((_[_] = _[_]), (_[_] = _));
}
function _(_, _, _) {
  if (((_ = Float64Array.from(_(_, _))), (_ = _.length) && !isNaN((_ = +_)))) {
    if (_ <= 0 || _ < 2) return _(_);
    if (_ >= 1) return _(_);
    var _,
      _ = (_ - 1) * _,
      _ = Math.floor(_),
      _ = _(_(_, _).subarray(0, _ + 1));
    return _ + (_(_.subarray(_ + 1)) - _) * (_ - _);
  }
}
function _(_, _, _ = _) {
  if ((_ = _.length) && !isNaN((_ = +_))) {
    if (_ <= 0 || _ < 2) return +_(_[0], 0, _);
    if (_ >= 1) return +_(_[_ - 1], _ - 1, _);
    var _,
      _ = (_ - 1) * _,
      _ = Math.floor(_),
      _ = +_(_[_], _, _);
    return _ + (+_(_[_ + 1], _ + 1, _) - _) * (_ - _);
  }
}
function _(_, _, _) {
  ((_ = +_),
    (_ = +_),
    (_ = (_ = arguments.length) < 2 ? ((_ = _), (_ = 0), 1) : _ < 3 ? 1 : +_));
  for (
    var _ = -1, _ = Math.max(0, Math.ceil((_ - _) / _)) | 0, _ = Array(_);
    ++_ < _;
  )
    _[_] = _ + _ * _;
  return _;
}
function _(_, _) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(_);
      break;
    default:
      this.range(_).domain(_);
  }
  return this;
}
function _(_, _) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      typeof _ == `function` ? this.interpolator(_) : this.range(_);
      break;
    default:
      (this.domain(_),
        typeof _ == `function` ? this.interpolator(_) : this.range(_));
  }
  return this;
}
var _ = Symbol(`implicit`);
function _() {
  var _ = new _(),
    _ = [],
    _ = [],
    _ = _;
  function _(_) {
    let _ = _.get(_);
    if (_ === void 0) {
      if (_ !== _) return _;
      _.set(_, (_ = _.push(_) - 1));
    }
    return _[_ % _.length];
  }
  return (
    (_.domain = function (_) {
      if (!arguments.length) return _.slice();
      ((_ = []), (_ = new _()));
      for (let _ of _) _.has(_) || _.set(_, _.push(_) - 1);
      return _;
    }),
    (_.range = function (_) {
      return arguments.length ? ((_ = Array.from(_)), _) : _.slice();
    }),
    (_.unknown = function (_) {
      return arguments.length ? ((_ = _), _) : _;
    }),
    (_.copy = function () {
      return _(_, _).unknown(_);
    }),
    _.apply(_, arguments),
    _
  );
}
function _() {
  var _ = _().unknown(void 0),
    _ = _.domain,
    _ = _.range,
    _ = 0,
    _ = 1,
    _,
    _,
    _ = !1,
    _ = 0,
    _ = 0,
    _ = 0.5;
  delete _.unknown;
  function _() {
    var _ = _().length,
      _ = _ < _,
      _ = _ ? _ : _,
      _ = _ ? _ : _;
    ((_ = (_ - _) / Math.max(1, _ - _ + _ * 2)),
      _ && (_ = Math.floor(_)),
      (_ += (_ - _ - _ * (_ - _)) * _),
      (_ = _ * (1 - _)),
      _ && ((_ = Math.round(_)), (_ = Math.round(_))));
    var _ = _(_).map(function (_) {
      return _ + _ * _;
    });
    return _(_ ? _.reverse() : _);
  }
  return (
    (_.domain = function (_) {
      return arguments.length ? (_(_), _()) : _();
    }),
    (_.range = function (_) {
      return arguments.length
        ? (([_, _] = _), (_ = +_), (_ = +_), _())
        : [_, _];
    }),
    (_.rangeRound = function (_) {
      return (([_, _] = _), (_ = +_), (_ = +_), (_ = !0), _());
    }),
    (_.bandwidth = function () {
      return _;
    }),
    (_.step = function () {
      return _;
    }),
    (_.round = function (_) {
      return arguments.length ? ((_ = !!_), _()) : _;
    }),
    (_.padding = function (_) {
      return arguments.length ? ((_ = Math.min(1, (_ = +_))), _()) : _;
    }),
    (_.paddingInner = function (_) {
      return arguments.length ? ((_ = Math.min(1, _)), _()) : _;
    }),
    (_.paddingOuter = function (_) {
      return arguments.length ? ((_ = +_), _()) : _;
    }),
    (_.align = function (_) {
      return arguments.length ? ((_ = Math.max(0, Math.min(1, _))), _()) : _;
    }),
    (_.copy = function () {
      return _(_(), [_, _]).round(_).paddingInner(_).paddingOuter(_).align(_);
    }),
    _.apply(_(), arguments)
  );
}
function _(_) {
  var _ = _.copy;
  return (
    (_.padding = _.paddingOuter),
    delete _.paddingInner,
    delete _.paddingOuter,
    (_.copy = function () {
      return _(_());
    }),
    _
  );
}
function _() {
  return _(_.apply(null, arguments).paddingInner(1));
}
function _(_, _, _) {
  ((_.prototype = _.prototype = _), (_.constructor = _));
}
function _(_, _) {
  var _ = Object.create(_.prototype);
  for (var _ in _) _[_] = _[_];
  return _;
}
function _() {}
var _ = 0.7,
  _ = 1 / _,
  _ = `\\s*([+-]?\\d+)\\s*`,
  _ = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  _ = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  _ = /^#([0-9a-f]{3,8})$/,
  _ = RegExp(`^rgb\\(${_},${_},${_}\\)$`),
  _ = RegExp(`^rgb\\(${_},${_},${_}\\)$`),
  _ = RegExp(`^rgba\\(${_},${_},${_},${_}\\)$`),
  _ = RegExp(`^rgba\\(${_},${_},${_},${_}\\)$`),
  _ = RegExp(`^hsl\\(${_},${_},${_}\\)$`),
  _ = RegExp(`^hsla\\(${_},${_},${_},${_}\\)$`),
  _ = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
_(_, _, {
  copy(_) {
    return Object.assign(new this.constructor(), this, _);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _,
  formatHex: _,
  formatHex8: _,
  formatHsl: _,
  formatRgb: _,
  toString: _,
});
function _() {
  return this.rgb().formatHex();
}
function _() {
  return this.rgb().formatHex8();
}
function _() {
  return _(this).formatHsl();
}
function _() {
  return this.rgb().formatRgb();
}
function _(_) {
  var _, _;
  return (
    (_ = (_ + ``).trim().toLowerCase()),
    (_ = _.exec(_))
      ? ((_ = _[1].length),
        (_ = parseInt(_[1], 16)),
        _ === 6
          ? _(_)
          : _ === 3
            ? new _(
                ((_ >> 8) & 15) | ((_ >> 4) & 240),
                ((_ >> 4) & 15) | (_ & 240),
                ((_ & 15) << 4) | (_ & 15),
                1,
              )
            : _ === 8
              ? _(
                  (_ >> 24) & 255,
                  (_ >> 16) & 255,
                  (_ >> 8) & 255,
                  (_ & 255) / 255,
                )
              : _ === 4
                ? _(
                    ((_ >> 12) & 15) | ((_ >> 8) & 240),
                    ((_ >> 8) & 15) | ((_ >> 4) & 240),
                    ((_ >> 4) & 15) | (_ & 240),
                    (((_ & 15) << 4) | (_ & 15)) / 255,
                  )
                : null)
      : (_ = _.exec(_))
        ? new _(_[1], _[2], _[3], 1)
        : (_ = _.exec(_))
          ? new _((_[1] * 255) / 100, (_[2] * 255) / 100, (_[3] * 255) / 100, 1)
          : (_ = _.exec(_))
            ? _(_[1], _[2], _[3], _[4])
            : (_ = _.exec(_))
              ? _(
                  (_[1] * 255) / 100,
                  (_[2] * 255) / 100,
                  (_[3] * 255) / 100,
                  _[4],
                )
              : (_ = _.exec(_))
                ? _(_[1], _[2] / 100, _[3] / 100, 1)
                : (_ = _.exec(_))
                  ? _(_[1], _[2] / 100, _[3] / 100, _[4])
                  : _.hasOwnProperty(_)
                    ? _(_[_])
                    : _ === `transparent`
                      ? new _(NaN, NaN, NaN, 0)
                      : null
  );
}
function _(_) {
  return new _((_ >> 16) & 255, (_ >> 8) & 255, _ & 255, 1);
}
function _(_, _, _, _) {
  return (_ <= 0 && (_ = _ = _ = NaN), new _(_, _, _, _));
}
function _(_) {
  return (
    _ instanceof _ || (_ = _(_)),
    _ ? ((_ = _.rgb()), new _(_._, _._, _._, _.opacity)) : new _()
  );
}
function _(_, _, _, _) {
  return arguments.length === 1 ? _(_) : new _(_, _, _, _ ?? 1);
}
function _(_, _, _, _) {
  ((this._ = +_), (this._ = +_), (this._ = +_), (this.opacity = +_));
}
_(
  _,
  _,
  _(_, {
    brighter(_) {
      return (
        (_ = _ == null ? _ : _ ** +_),
        new _(this._ * _, this._ * _, this._ * _, this.opacity)
      );
    },
    darker(_) {
      return (
        (_ = _ == null ? _ : _ ** +_),
        new _(this._ * _, this._ * _, this._ * _, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new _(_(this._), _(this._), _(this._), _(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this._ &&
        this._ < 255.5 &&
        -0.5 <= this._ &&
        this._ < 255.5 &&
        -0.5 <= this._ &&
        this._ < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: _,
    formatHex: _,
    formatHex8: _,
    formatRgb: _,
    toString: _,
  }),
);
function _() {
  return `#${_(this._)}${_(this._)}${_(this._)}`;
}
function _() {
  return `#${_(this._)}${_(this._)}${_(this._)}${_((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _() {
  let _ = _(this.opacity);
  return `${_ === 1 ? `rgb(` : `rgba(`}${_(this._)}, ${_(this._)}, ${_(this._)}${_ === 1 ? `)` : `, ${_})`}`;
}
function _(_) {
  return isNaN(_) ? 1 : Math.max(0, Math.min(1, _));
}
function _(_) {
  return Math.max(0, Math.min(255, Math.round(_) || 0));
}
function _(_) {
  return ((_ = _(_)), (_ < 16 ? `0` : ``) + _.toString(16));
}
function _(_, _, _, _) {
  return (
    _ <= 0
      ? (_ = _ = _ = NaN)
      : _ <= 0 || _ >= 1
        ? (_ = _ = NaN)
        : _ <= 0 && (_ = NaN),
    new _(_, _, _, _)
  );
}
function _(_) {
  if (_ instanceof _) return new _(_._, _._, _._, _.opacity);
  if ((_ instanceof _ || (_ = _(_)), !_)) return new _();
  if (_ instanceof _) return _;
  _ = _.rgb();
  var _ = _._ / 255,
    _ = _._ / 255,
    _ = _._ / 255,
    _ = Math.min(_, _, _),
    _ = Math.max(_, _, _),
    _ = NaN,
    _ = _ - _,
    _ = (_ + _) / 2;
  return (
    _
      ? ((_ =
          _ === _
            ? (_ - _) / _ + (_ < _) * 6
            : _ === _
              ? (_ - _) / _ + 2
              : (_ - _) / _ + 4),
        (_ /= _ < 0.5 ? _ + _ : 2 - _ - _),
        (_ *= 60))
      : (_ = _ > 0 && _ < 1 ? 0 : _),
    new _(_, _, _, _.opacity)
  );
}
function _(_, _, _, _) {
  return arguments.length === 1 ? _(_) : new _(_, _, _, _ ?? 1);
}
function _(_, _, _, _) {
  ((this._ = +_), (this._ = +_), (this._ = +_), (this.opacity = +_));
}
_(
  _,
  _,
  _(_, {
    brighter(_) {
      return (
        (_ = _ == null ? _ : _ ** +_),
        new _(this._, this._, this._ * _, this.opacity)
      );
    },
    darker(_) {
      return (
        (_ = _ == null ? _ : _ ** +_),
        new _(this._, this._, this._ * _, this.opacity)
      );
    },
    rgb() {
      var _ = (this._ % 360) + (this._ < 0) * 360,
        _ = isNaN(_) || isNaN(this._) ? 0 : this._,
        _ = this._,
        _ = _ + (_ < 0.5 ? _ : 1 - _) * _,
        _ = 2 * _ - _;
      return new _(
        _(_ >= 240 ? _ - 240 : _ + 120, _, _),
        _(_, _, _),
        _(_ < 120 ? _ + 240 : _ - 120, _, _),
        this.opacity,
      );
    },
    clamp() {
      return new _(_(this._), _(this._), _(this._), _(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this._ && this._ <= 1) || isNaN(this._)) &&
        0 <= this._ &&
        this._ <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      let _ = _(this.opacity);
      return `${_ === 1 ? `hsl(` : `hsla(`}${_(this._)}, ${_(this._) * 100}%, ${_(this._) * 100}%${_ === 1 ? `)` : `, ${_})`}`;
    },
  }),
);
function _(_) {
  return ((_ = (_ || 0) % 360), _ < 0 ? _ + 360 : _);
}
function _(_) {
  return Math.max(0, Math.min(1, _ || 0));
}
function _(_, _, _) {
  return (
    (_ < 60
      ? _ + ((_ - _) * _) / 60
      : _ < 180
        ? _
        : _ < 240
          ? _ + ((_ - _) * (240 - _)) / 60
          : _) * 255
  );
}
var _ = (_) => () => _;
function _(_, _) {
  return function (_) {
    return _ + _ * _;
  };
}
function _(_, _, _) {
  return (
    (_ **= +_),
    (_ = _ ** +_ - _),
    (_ = 1 / _),
    function (_) {
      return (_ + _ * _) ** +_;
    }
  );
}
function _(_) {
  return (_ = +_) == 1
    ? _
    : function (_, _) {
        return _ - _ ? _(_, _, _) : _(isNaN(_) ? _ : _);
      };
}
function _(_, _) {
  var _ = _ - _;
  return _ ? _(_, _) : _(isNaN(_) ? _ : _);
}
var _ = (function _(_) {
  var _ = _(_);
  function _(_, _) {
    var _ = _((_ = _(_))._, (_ = _(_))._),
      _ = _(_._, _._),
      _ = _(_._, _._),
      _ = _(_.opacity, _.opacity);
    return function (_) {
      return (
        (_._ = _(_)), (_._ = _(_)), (_._ = _(_)), (_.opacity = _(_)), _ + ``
      );
    };
  }
  return ((_.gamma = _), _);
})(1);
function _(_, _) {
  _ ||= [];
  var _ = _ ? Math.min(_.length, _.length) : 0,
    _ = _.slice(),
    _;
  return function (_) {
    for (_ = 0; _ < _; ++_) _[_] = _[_] * (1 - _) + _[_] * _;
    return _;
  };
}
function _(_) {
  return ArrayBuffer.isView(_) && !(_ instanceof DataView);
}
function _(_, _) {
  for (
    var _ = _ ? _.length : 0,
      _ = _ ? Math.min(_, _.length) : 0,
      _ = Array(_),
      _ = Array(_),
      _ = 0;
    _ < _;
    ++_
  )
    _[_] = _(_[_], _[_]);
  for (; _ < _; ++_) _[_] = _[_];
  return function (_) {
    for (_ = 0; _ < _; ++_) _[_] = _[_](_);
    return _;
  };
}
function _(_, _) {
  var _ = new Date();
  return (
    (_ = +_),
    (_ = +_),
    function (_) {
      return (_.setTime(_ * (1 - _) + _ * _), _);
    }
  );
}
function _(_, _) {
  return (
    (_ = +_),
    (_ = +_),
    function (_) {
      return _ * (1 - _) + _ * _;
    }
  );
}
function _(_, _) {
  var _ = {},
    _ = {},
    _;
  for (_ in ((typeof _ == `object` && _) || (_ = {}),
  (typeof _ == `object` && _) || (_ = {}),
  _))
    _ in _ ? (_[_] = _(_[_], _[_])) : (_[_] = _[_]);
  return function (_) {
    for (_ in _) _[_] = _[_](_);
    return _;
  };
}
var _ = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  _ = new RegExp(_.source, `g`);
function _(_) {
  return function () {
    return _;
  };
}
function _(_) {
  return function (_) {
    return _(_) + ``;
  };
}
function _(_, _) {
  var _ = (_.lastIndex = _.lastIndex = 0),
    _,
    _,
    _,
    _ = -1,
    _ = [],
    _ = [];
  for (_ += ``, _ += ``; (_ = _.exec(_)) && (_ = _.exec(_));)
    ((_ = _.index) > _ &&
      ((_ = _.slice(_, _)), _[_] ? (_[_] += _) : (_[++_] = _)),
      (_ = _[0]) === (_ = _[0])
        ? _[_]
          ? (_[_] += _)
          : (_[++_] = _)
        : ((_[++_] = null),
          _.push({
            _: _,
            _: _(_, _),
          })),
      (_ = _.lastIndex));
  return (
    _ < _.length && ((_ = _.slice(_)), _[_] ? (_[_] += _) : (_[++_] = _)),
    _.length < 2
      ? _[0]
        ? _(_[0]._)
        : _(_)
      : ((_ = _.length),
        function (_) {
          for (var _ = 0, _; _ < _; ++_) _[(_ = _[_])._] = _._(_);
          return _.join(``);
        })
  );
}
function _(_, _) {
  var _ = typeof _,
    _;
  return _ == null || _ === `boolean`
    ? _(_)
    : (_ === `number`
        ? _
        : _ === `string`
          ? (_ = _(_))
            ? ((_ = _), _)
            : _
          : _ instanceof _
            ? _
            : _ instanceof Date
              ? _
              : _(_)
                ? _
                : Array.isArray(_)
                  ? _
                  : (typeof _.valueOf != `function` &&
                        typeof _.toString != `function`) ||
                      isNaN(_)
                    ? _
                    : _)(_, _);
}
function _(_, _) {
  return (
    (_ = +_),
    (_ = +_),
    function (_) {
      return Math.round(_ * (1 - _) + _ * _);
    }
  );
}
function _(_, _) {
  _ === void 0 && ((_ = _), (_ = _));
  for (var _ = 0, _ = _.length - 1, _ = _[0], _ = Array(_ < 0 ? 0 : _); _ < _;)
    _[_] = _(_, (_ = _[++_]));
  return function (_) {
    var _ = Math.max(0, Math.min(_ - 1, Math.floor((_ *= _))));
    return _[_](_ - _);
  };
}
function _(_) {
  return function () {
    return _;
  };
}
function _(_) {
  return +_;
}
var _ = [0, 1];
function _(_) {
  return _;
}
function _(_, _) {
  return (_ -= _ = +_)
    ? function (_) {
        return (_ - _) / _;
      }
    : _(isNaN(_) ? NaN : 0.5);
}
function _(_, _) {
  var _;
  return (
    _ > _ && ((_ = _), (_ = _), (_ = _)),
    function (_) {
      return Math.max(_, Math.min(_, _));
    }
  );
}
function _(_, _, _) {
  var _ = _[0],
    _ = _[1],
    _ = _[0],
    _ = _[1];
  return (
    _ < _ ? ((_ = _(_, _)), (_ = _(_, _))) : ((_ = _(_, _)), (_ = _(_, _))),
    function (_) {
      return _(_(_));
    }
  );
}
function _(_, _, _) {
  var _ = Math.min(_.length, _.length) - 1,
    _ = Array(_),
    _ = Array(_),
    _ = -1;
  for (
    _[_] < _[0] && ((_ = _.slice().reverse()), (_ = _.slice().reverse()));
    ++_ < _;
  )
    ((_[_] = _(_[_], _[_ + 1])), (_[_] = _(_[_], _[_ + 1])));
  return function (_) {
    var _ = _(_, _, 1, _) - 1;
    return _[_](_[_](_));
  };
}
function _(_, _) {
  return _.domain(_.domain())
    .range(_.range())
    .interpolate(_.interpolate())
    .clamp(_.clamp())
    .unknown(_.unknown());
}
function _() {
  var _ = _,
    _ = _,
    _ = _,
    _,
    _,
    _,
    _ = _,
    _,
    _,
    _;
  function _() {
    var _ = Math.min(_.length, _.length);
    return (
      _ !== _ && (_ = _(_[0], _[_ - 1])), (_ = _ > 2 ? _ : _), (_ = _ = null), _
    );
  }
  function _(_) {
    return _ == null || isNaN((_ = +_))
      ? _
      : (_ ||= _(_.map(_), _, _))(_(_(_)));
  }
  return (
    (_.invert = function (_) {
      return _(_((_ ||= _(_, _.map(_), _))(_)));
    }),
    (_.domain = function (_) {
      return arguments.length ? ((_ = Array.from(_, _)), _()) : _.slice();
    }),
    (_.range = function (_) {
      return arguments.length ? ((_ = Array.from(_)), _()) : _.slice();
    }),
    (_.rangeRound = function (_) {
      return ((_ = Array.from(_)), (_ = _), _());
    }),
    (_.clamp = function (_) {
      return arguments.length ? ((_ = _ ? !0 : _), _()) : _ !== _;
    }),
    (_.interpolate = function (_) {
      return arguments.length ? ((_ = _), _()) : _;
    }),
    (_.unknown = function (_) {
      return arguments.length ? ((_ = _), _) : _;
    }),
    function (_, _) {
      return ((_ = _), (_ = _), _());
    }
  );
}
function _() {
  return _()(_, _);
}
function _(_) {
  return Math.abs((_ = Math.round(_))) >= 1e21
    ? _.toLocaleString(`en`).replace(/,/g, ``)
    : _.toString(10);
}
function _(_, _) {
  if (!isFinite(_) || _ === 0) return null;
  var _ = (_ = _ ? _.toExponential(_ - 1) : _.toExponential()).indexOf(`e`),
    _ = _.slice(0, _);
  return [_.length > 1 ? _[0] + _.slice(2) : _, +_.slice(_ + 1)];
}
function _(_) {
  return ((_ = _(Math.abs(_))), _ ? _[1] : NaN);
}
function _(_, _) {
  return function (_, _) {
    for (
      var _ = _.length, _ = [], _ = 0, _ = _[0], _ = 0;
      _ > 0 &&
      _ > 0 &&
      (_ + _ + 1 > _ && (_ = Math.max(1, _ - _)),
      _.push(_.substring((_ -= _), _ + _)),
      !((_ += _ + 1) > _));
    )
      _ = _[(_ = (_ + 1) % _.length)];
    return _.reverse().join(_);
  };
}
function _(_) {
  return function (_) {
    return _.replace(/[0-9]/g, function (_) {
      return _[+_];
    });
  };
}
var _ =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function _(_) {
  if (!(_ = _.exec(_))) throw Error(`invalid format: ` + _);
  var _;
  return new _({
    fill: _[1],
    align: _[2],
    sign: _[3],
    symbol: _[4],
    zero: _[5],
    width: _[6],
    comma: _[7],
    precision: _[8] && _[8].slice(1),
    trim: _[9],
    type: _[10],
  });
}
_.prototype = _.prototype;
function _(_) {
  ((this.fill = _.fill === void 0 ? ` ` : _.fill + ``),
    (this.align = _.align === void 0 ? `>` : _.align + ``),
    (this.sign = _.sign === void 0 ? `-` : _.sign + ``),
    (this.symbol = _.symbol === void 0 ? `` : _.symbol + ``),
    (this.zero = !!_.zero),
    (this.width = _.width === void 0 ? void 0 : +_.width),
    (this.comma = !!_.comma),
    (this.precision = _.precision === void 0 ? void 0 : +_.precision),
    (this.trim = !!_.trim),
    (this.type = _.type === void 0 ? `` : _.type + ``));
}
_.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? `0` : ``) +
    (this.width === void 0 ? `` : Math.max(1, this.width | 0)) +
    (this.comma ? `,` : ``) +
    (this.precision === void 0 ? `` : `.` + Math.max(0, this.precision | 0)) +
    (this.trim ? `~` : ``) +
    this.type
  );
};
function _(_) {
  out: for (var _ = _.length, _ = 1, _ = -1, _; _ < _; ++_)
    switch (_[_]) {
      case `.`:
        _ = _ = _;
        break;
      case `0`:
        (_ === 0 && (_ = _), (_ = _));
        break;
      default:
        if (!+_[_]) break out;
        _ > 0 && (_ = 0);
    }
  return _ > 0 ? _.slice(0, _) + _.slice(_ + 1) : _;
}
var _;
function _(_, _) {
  var _ = _(_, _);
  if (!_) return ((_ = void 0), _.toPrecision(_));
  var _ = _[0],
    _ = _[1],
    _ = _ - (_ = Math.max(-8, Math.min(8, Math.floor(_ / 3))) * 3) + 1,
    _ = _.length;
  return _ === _
    ? _
    : _ > _
      ? _ + Array(_ - _ + 1).join(`0`)
      : _ > 0
        ? _.slice(0, _) + `.` + _.slice(_)
        : `0.` + Array(1 - _).join(`0`) + _(_, Math.max(0, _ + _ - 1))[0];
}
function _(_, _) {
  var _ = _(_, _);
  if (!_) return _ + ``;
  var _ = _[0],
    _ = _[1];
  return _ < 0
    ? `0.` + Array(-_).join(`0`) + _
    : _.length > _ + 1
      ? _.slice(0, _ + 1) + `.` + _.slice(_ + 1)
      : _ + Array(_ - _.length + 2).join(`0`);
}
var _ = {
  "%": (_, _) => (_ * 100).toFixed(_),
  _: (_) => Math.round(_).toString(2),
  _: (_) => _ + ``,
  _: _,
  _: (_, _) => _.toExponential(_),
  _: (_, _) => _.toFixed(_),
  _: (_, _) => _.toPrecision(_),
  _: (_) => Math.round(_).toString(8),
  _: (_, _) => _(_ * 100, _),
  _: _,
  _: _,
  _: (_) => Math.round(_).toString(16).toUpperCase(),
  _: (_) => Math.round(_).toString(16),
};
function _(_) {
  return _;
}
var _ = Array.prototype.map,
  _ = [
    `y`,
    `z`,
    `a`,
    `f`,
    `p`,
    `n`,
    `µ`,
    `m`,
    ``,
    `k`,
    `M`,
    `G`,
    `T`,
    `P`,
    `E`,
    `Z`,
    `Y`,
  ];
function _(_) {
  var _ =
      _.grouping === void 0 || _.thousands === void 0
        ? _
        : _(_.call(_.grouping, Number), _.thousands + ``),
    _ = _.currency === void 0 ? `` : _.currency[0] + ``,
    _ = _.currency === void 0 ? `` : _.currency[1] + ``,
    _ = _.decimal === void 0 ? `.` : _.decimal + ``,
    _ = _.numerals === void 0 ? _ : _(_.call(_.numerals, String)),
    _ = _.percent === void 0 ? `%` : _.percent + ``,
    _ = _.minus === void 0 ? `−` : _.minus + ``,
    _ = _.nan === void 0 ? `NaN` : _.nan + ``;
  function _(_, _) {
    _ = _(_);
    var _ = _.fill,
      _ = _.align,
      _ = _.sign,
      _ = _.symbol,
      _ = _.zero,
      _ = _.width,
      _ = _.comma,
      _ = _.precision,
      _ = _.trim,
      _ = _.type;
    (_ === `n`
      ? ((_ = !0), (_ = `g`))
      : _[_] || (_ === void 0 && (_ = 12), (_ = !0), (_ = `g`)),
      (_ || (_ === `0` && _ === `=`)) && ((_ = !0), (_ = `0`), (_ = `=`)));
    var _ =
        (_ && _.prefix !== void 0 ? _.prefix : ``) +
        (_ === `$`
          ? _
          : _ === `#` && /[boxX]/.test(_)
            ? `0` + _.toLowerCase()
            : ``),
      _ =
        (_ === `$` ? _ : /[%p]/.test(_) ? _ : ``) +
        (_ && _.suffix !== void 0 ? _.suffix : ``),
      _ = _[_],
      _ = /[defgprs%]/.test(_);
    _ =
      _ === void 0
        ? 6
        : /[gprs]/.test(_)
          ? Math.max(1, Math.min(21, _))
          : Math.max(0, Math.min(20, _));
    function _(_) {
      var _ = _,
        _ = _,
        _,
        _,
        _;
      if (_ === `c`) ((_ = _(_) + _), (_ = ``));
      else {
        _ = +_;
        var _ = _ < 0 || 1 / _ < 0;
        if (
          ((_ = isNaN(_) ? _ : _(Math.abs(_), _)),
          _ && (_ = _(_)),
          _ && +_ == 0 && _ !== `+` && (_ = !1),
          (_ = (_ ? (_ === `(` ? _ : _) : _ === `-` || _ === `(` ? `` : _) + _),
          (_ =
            (_ === `s` && !isNaN(_) && _ !== void 0 ? _[8 + _ / 3] : ``) +
            _ +
            (_ && _ === `(` ? `)` : ``)),
          _)
        ) {
          for (_ = -1, _ = _.length; ++_ < _;)
            if (((_ = _.charCodeAt(_)), 48 > _ || _ > 57)) {
              ((_ = (_ === 46 ? _ + _.slice(_ + 1) : _.slice(_)) + _),
                (_ = _.slice(0, _)));
              break;
            }
        }
      }
      _ && !_ && (_ = _(_, 1 / 0));
      var _ = _.length + _.length + _.length,
        _ = _ < _ ? Array(_ - _ + 1).join(_) : ``;
      switch (
        (_ && _ && ((_ = _(_ + _, _.length ? _ - _.length : 1 / 0)), (_ = ``)),
        _)
      ) {
        case `<`:
          _ = _ + _ + _ + _;
          break;
        case `=`:
          _ = _ + _ + _ + _;
          break;
        case `^`:
          _ = _.slice(0, (_ = _.length >> 1)) + _ + _ + _ + _.slice(_);
          break;
        default:
          _ = _ + _ + _ + _;
      }
      return _(_);
    }
    return (
      (_.toString = function () {
        return _ + ``;
      }),
      _
    );
  }
  function _(_, _) {
    var _ = Math.max(-8, Math.min(8, Math.floor(_(_) / 3))) * 3,
      _ = 10 ** -_,
      _ = _(((_ = _(_)), (_.type = `f`), _), {
        suffix: _[8 + _ / 3],
      });
    return function (_) {
      return _(_ * _);
    };
  }
  return {
    format: _,
    formatPrefix: _,
  };
}
var _, _, _;
_({
  thousands: `,`,
  grouping: [3],
  currency: [`$`, ``],
});
function _(_) {
  return ((_ = _(_)), (_ = _.format), (_ = _.formatPrefix), _);
}
function _(_) {
  return Math.max(0, -_(Math.abs(_)));
}
function _(_, _) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(_(_) / 3))) * 3 - _(Math.abs(_)),
  );
}
function _(_, _) {
  return (
    (_ = Math.abs(_)), (_ = Math.abs(_) - _), Math.max(0, _(_) - _(_)) + 1
  );
}
function _(_, _, _, _) {
  var _ = _(_, _, _),
    _;
  switch (((_ = _(_ ?? `,f`)), _.type)) {
    case `s`:
      var _ = Math.max(Math.abs(_), Math.abs(_));
      return (
        _.precision == null && !isNaN((_ = _(_, _))) && (_.precision = _),
        _(_, _)
      );
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      _.precision == null &&
        !isNaN((_ = _(_, Math.max(Math.abs(_), Math.abs(_))))) &&
        (_.precision = _ - (_.type === `e`));
      break;
    case `f`:
    case `%`:
      _.precision == null &&
        !isNaN((_ = _(_))) &&
        (_.precision = _ - (_.type === `%`) * 2);
  }
  return _(_);
}
function _(_) {
  var _ = _.domain;
  return (
    (_.ticks = function (_) {
      var _ = _();
      return _(_[0], _[_.length - 1], _ ?? 10);
    }),
    (_.tickFormat = function (_, _) {
      var _ = _();
      return _(_[0], _[_.length - 1], _ ?? 10, _);
    }),
    (_.nice = function (_) {
      _ ??= 10;
      var _ = _(),
        _ = 0,
        _ = _.length - 1,
        _ = _[_],
        _ = _[_],
        _,
        _,
        _ = 10;
      for (
        _ < _ && ((_ = _), (_ = _), (_ = _), (_ = _), (_ = _), (_ = _));
        _-- > 0;
      ) {
        if (((_ = _(_, _, _)), _ === _)) return ((_[_] = _), (_[_] = _), _(_));
        if (_ > 0) ((_ = Math.floor(_ / _) * _), (_ = Math.ceil(_ / _) * _));
        else if (_ < 0)
          ((_ = Math.ceil(_ * _) / _), (_ = Math.floor(_ * _) / _));
        else break;
        _ = _;
      }
      return _;
    }),
    _
  );
}
function _() {
  var _ = _();
  return (
    (_.copy = function () {
      return _(_, _());
    }),
    _.apply(_, arguments),
    _(_)
  );
}
function _(_) {
  var _;
  function _(_) {
    return _ == null || isNaN((_ = +_)) ? _ : _;
  }
  return (
    (_.invert = _),
    (_.domain = _.range =
      function (_) {
        return arguments.length ? ((_ = Array.from(_, _)), _) : _.slice();
      }),
    (_.unknown = function (_) {
      return arguments.length ? ((_ = _), _) : _;
    }),
    (_.copy = function () {
      return _(_).unknown(_);
    }),
    (_ = arguments.length ? Array.from(_, _) : [0, 1]),
    _(_)
  );
}
function _(_, _) {
  _ = _.slice();
  var _ = 0,
    _ = _.length - 1,
    _ = _[_],
    _ = _[_],
    _;
  return (
    _ < _ && ((_ = _), (_ = _), (_ = _), (_ = _), (_ = _), (_ = _)),
    (_[_] = _.floor(_)),
    (_[_] = _.ceil(_)),
    _
  );
}
function _(_) {
  return Math.log(_);
}
function _(_) {
  return Math.exp(_);
}
function _(_) {
  return -Math.log(-_);
}
function _(_) {
  return -Math.exp(-_);
}
function _(_) {
  return isFinite(_) ? +(`1e` + _) : _ < 0 ? 0 : _;
}
function _(_) {
  return _ === 10 ? _ : _ === Math._ ? Math.exp : (_) => _ ** +_;
}
function _(_) {
  return _ === Math._
    ? Math.log
    : (_ === 10 && Math.log10) ||
        (_ === 2 && Math.log2) ||
        ((_ = Math.log(_)), (_) => Math.log(_) / _);
}
function _(_) {
  return (_, _) => -_(-_, _);
}
function _(_) {
  let _ = _(_, _),
    _ = _.domain,
    _ = 10,
    _,
    _;
  function _() {
    return (
      (_ = _(_)),
      (_ = _(_)),
      _()[0] < 0 ? ((_ = _(_)), (_ = _(_)), _(_, _)) : _(_, _),
      _
    );
  }
  return (
    (_.base = function (_) {
      return arguments.length ? ((_ = +_), _()) : _;
    }),
    (_.domain = function (_) {
      return arguments.length ? (_(_), _()) : _();
    }),
    (_.ticks = (_) => {
      let _ = _(),
        _ = _[0],
        _ = _[_.length - 1],
        _ = _ < _;
      _ && ([_, _] = [_, _]);
      let _ = _(_),
        _ = _(_),
        _,
        _,
        _ = _ == null ? 10 : +_,
        _ = [];
      if (!(_ % 1) && _ - _ < _) {
        if (((_ = Math.floor(_)), (_ = Math.ceil(_)), _ > 0)) {
          for (; _ <= _; ++_)
            for (_ = 1; _ < _; ++_)
              if (((_ = _ < 0 ? _ / _(-_) : _ * _(_)), !(_ < _))) {
                if (_ > _) break;
                _.push(_);
              }
        } else
          for (; _ <= _; ++_)
            for (_ = _ - 1; _ >= 1; --_)
              if (((_ = _ > 0 ? _ / _(-_) : _ * _(_)), !(_ < _))) {
                if (_ > _) break;
                _.push(_);
              }
        _.length * 2 < _ && (_ = _(_, _, _));
      } else _ = _(_, _, Math.min(_ - _, _)).map(_);
      return _ ? _.reverse() : _;
    }),
    (_.tickFormat = (_, _) => {
      if (
        ((_ ??= 10),
        (_ ??= _ === 10 ? `s` : `,`),
        typeof _ != `function` &&
          (!(_ % 1) && (_ = _(_)).precision == null && (_.trim = !0),
          (_ = _(_))),
        _ === 1 / 0)
      )
        return _;
      let _ = Math.max(1, (_ * _) / _.ticks().length);
      return (_) => {
        let _ = _ / _(Math.round(_(_)));
        return (_ * _ < _ - 0.5 && (_ *= _), _ <= _ ? _(_) : ``);
      };
    }),
    (_.nice = () =>
      _(
        _(_(), {
          floor: (_) => _(Math.floor(_(_))),
          ceil: (_) => _(Math.ceil(_(_))),
        }),
      )),
    _
  );
}
function _() {
  let _ = _(_()).domain([1, 10]);
  return ((_.copy = () => _(_, _()).base(_.base())), _.apply(_, arguments), _);
}
function _(_) {
  return function (_) {
    return Math.sign(_) * Math.log1p(Math.abs(_ / _));
  };
}
function _(_) {
  return function (_) {
    return Math.sign(_) * Math.expm1(Math.abs(_)) * _;
  };
}
function _(_) {
  var _ = 1,
    _ = _(_(_), _(_));
  return (
    (_.constant = function (_) {
      return arguments.length ? _(_((_ = +_)), _(_)) : _;
    }),
    _(_)
  );
}
function _() {
  var _ = _(_());
  return (
    (_.copy = function () {
      return _(_, _()).constant(_.constant());
    }),
    _.apply(_, arguments)
  );
}
function _(_) {
  return function (_) {
    return _ < 0 ? -((-_) ** +_) : _ ** +_;
  };
}
function _(_) {
  return _ < 0 ? -Math.sqrt(-_) : Math.sqrt(_);
}
function _(_) {
  return _ < 0 ? -_ * _ : _ * _;
}
function _(_) {
  var _ = _(_, _),
    _ = 1;
  function _() {
    return _ === 1 ? _(_, _) : _ === 0.5 ? _(_, _) : _(_(_), _(1 / _));
  }
  return (
    (_.exponent = function (_) {
      return arguments.length ? ((_ = +_), _()) : _;
    }),
    _(_)
  );
}
function _() {
  var _ = _(_());
  return (
    (_.copy = function () {
      return _(_, _()).exponent(_.exponent());
    }),
    _.apply(_, arguments),
    _
  );
}
function _() {
  return _.apply(null, arguments).exponent(0.5);
}
function _(_) {
  return Math.sign(_) * _ * _;
}
function _(_) {
  return Math.sign(_) * Math.sqrt(Math.abs(_));
}
function _() {
  var _ = _(),
    _ = [0, 1],
    _ = !1,
    _;
  function _(_) {
    var _ = _(_(_));
    return isNaN(_) ? _ : _ ? Math.round(_) : _;
  }
  return (
    (_.invert = function (_) {
      return _.invert(_(_));
    }),
    (_.domain = function (_) {
      return arguments.length ? (_.domain(_), _) : _.domain();
    }),
    (_.range = function (_) {
      return arguments.length
        ? (_.range((_ = Array.from(_, _)).map(_)), _)
        : _.slice();
    }),
    (_.rangeRound = function (_) {
      return _.range(_).round(!0);
    }),
    (_.round = function (_) {
      return arguments.length ? ((_ = !!_), _) : _;
    }),
    (_.clamp = function (_) {
      return arguments.length ? (_.clamp(_), _) : _.clamp();
    }),
    (_.unknown = function (_) {
      return arguments.length ? ((_ = _), _) : _;
    }),
    (_.copy = function () {
      return _(_.domain(), _).round(_).clamp(_.clamp()).unknown(_);
    }),
    _.apply(_, arguments),
    _(_)
  );
}
function _() {
  var _ = [],
    _ = [],
    _ = [],
    _;
  function _() {
    var _ = 0,
      _ = Math.max(1, _.length);
    for (_ = Array(_ - 1); ++_ < _;) _[_ - 1] = _(_, _ / _);
    return _;
  }
  function _(_) {
    return _ == null || isNaN((_ = +_)) ? _ : _[_(_, _)];
  }
  return (
    (_.invertExtent = function (_) {
      var _ = _.indexOf(_);
      return _ < 0
        ? [NaN, NaN]
        : [_ > 0 ? _[_ - 1] : _[0], _ < _.length ? _[_] : _[_.length - 1]];
    }),
    (_.domain = function (_) {
      if (!arguments.length) return _.slice();
      _ = [];
      for (let _ of _) _ != null && !isNaN((_ = +_)) && _.push(_);
      return (_.sort(_), _());
    }),
    (_.range = function (_) {
      return arguments.length ? ((_ = Array.from(_)), _()) : _.slice();
    }),
    (_.unknown = function (_) {
      return arguments.length ? ((_ = _), _) : _;
    }),
    (_.quantiles = function () {
      return _.slice();
    }),
    (_.copy = function () {
      return _().domain(_).range(_).unknown(_);
    }),
    _.apply(_, arguments)
  );
}
function _() {
  var _ = 0,
    _ = 1,
    _ = 1,
    _ = [0.5],
    _ = [0, 1],
    _;
  function _(_) {
    return _ != null && _ <= _ ? _[_(_, _, 0, _)] : _;
  }
  function _() {
    var _ = -1;
    for (_ = Array(_); ++_ < _;) _[_] = ((_ + 1) * _ - (_ - _) * _) / (_ + 1);
    return _;
  }
  return (
    (_.domain = function (_) {
      return arguments.length
        ? (([_, _] = _), (_ = +_), (_ = +_), _())
        : [_, _];
    }),
    (_.range = function (_) {
      return arguments.length
        ? ((_ = (_ = Array.from(_)).length - 1), _())
        : _.slice();
    }),
    (_.invertExtent = function (_) {
      var _ = _.indexOf(_);
      return _ < 0
        ? [NaN, NaN]
        : _ < 1
          ? [_, _[0]]
          : _ >= _
            ? [_[_ - 1], _]
            : [_[_ - 1], _[_]];
    }),
    (_.unknown = function (_) {
      return (arguments.length && (_ = _), _);
    }),
    (_.thresholds = function () {
      return _.slice();
    }),
    (_.copy = function () {
      return _().domain([_, _]).range(_).unknown(_);
    }),
    _.apply(_(_), arguments)
  );
}
function _() {
  var _ = [0.5],
    _ = [0, 1],
    _,
    _ = 1;
  function _(_) {
    return _ != null && _ <= _ ? _[_(_, _, 0, _)] : _;
  }
  return (
    (_.domain = function (_) {
      return arguments.length
        ? ((_ = Array.from(_)), (_ = Math.min(_.length, _.length - 1)), _)
        : _.slice();
    }),
    (_.range = function (_) {
      return arguments.length
        ? ((_ = Array.from(_)), (_ = Math.min(_.length, _.length - 1)), _)
        : _.slice();
    }),
    (_.invertExtent = function (_) {
      var _ = _.indexOf(_);
      return [_[_ - 1], _[_]];
    }),
    (_.unknown = function (_) {
      return arguments.length ? ((_ = _), _) : _;
    }),
    (_.copy = function () {
      return _().domain(_).range(_).unknown(_);
    }),
    _.apply(_, arguments)
  );
}
var _ = new Date(),
  _ = new Date();
function _(_, _, _, _) {
  function _(_) {
    return (_((_ = arguments.length === 0 ? new Date() : new Date(+_))), _);
  }
  return (
    (_.floor = (_) => (_((_ = new Date(+_))), _)),
    (_.ceil = (_) => (_((_ = new Date(_ - 1))), _(_, 1), _(_), _)),
    (_.round = (_) => {
      let _ = _(_),
        _ = _.ceil(_);
      return _ - _ < _ - _ ? _ : _;
    }),
    (_.offset = (_, _) => (
      _((_ = new Date(+_)), _ == null ? 1 : Math.floor(_)),
      _
    )),
    (_.range = (_, _, _) => {
      let _ = [];
      if (
        ((_ = _.ceil(_)),
        (_ = _ == null ? 1 : Math.floor(_)),
        !(_ < _) || !(_ > 0))
      )
        return _;
      let _;
      do (_.push((_ = new Date(+_))), _(_, _), _(_));
      while (_ < _ && _ < _);
      return _;
    }),
    (_.filter = (_) =>
      _(
        (_) => {
          if (_ >= _) for (; _(_), !_(_);) _.setTime(_ - 1);
        },
        (_, _) => {
          if (_ >= _) {
            if (_ < 0) for (; ++_ <= 0;) for (; _(_, -1), !_(_););
            else for (; --_ >= 0;) for (; _(_, 1), !_(_););
          }
        },
      )),
    _ &&
      ((_.count = (_, _) => (
        _.setTime(+_),
        _.setTime(+_),
        _(_),
        _(_),
        Math.floor(_(_, _))
      )),
      (_.every = (_) => (
        (_ = Math.floor(_)),
        !isFinite(_) || !(_ > 0)
          ? null
          : _ > 1
            ? _.filter(
                _ ? (_) => _(_) % _ === 0 : (_) => _.count(0, _) % _ === 0,
              )
            : _
      ))),
    _
  );
}
var _ = _(
  () => {},
  (_, _) => {
    _.setTime(+_ + _);
  },
  (_, _) => _ - _,
);
((_.every = (_) => (
  (_ = Math.floor(_)),
  !isFinite(_) || !(_ > 0)
    ? null
    : _ > 1
      ? _(
          (_) => {
            _.setTime(Math.floor(_ / _) * _);
          },
          (_, _) => {
            _.setTime(+_ + _ * _);
          },
          (_, _) => (_ - _) / _,
        )
      : _
)),
  _.range);
var _ = 1e3,
  _ = _ * 60,
  _ = _ * 60,
  _ = _ * 24,
  _ = _ * 7,
  _ = _ * 30,
  _ = _ * 365,
  _ = _(
    (_) => {
      _.setTime(_ - _.getMilliseconds());
    },
    (_, _) => {
      _.setTime(+_ + _ * _);
    },
    (_, _) => (_ - _) / _,
    (_) => _.getUTCSeconds(),
  );
_.range;
var _ = _(
  (_) => {
    _.setTime(_ - _.getMilliseconds() - _.getSeconds() * _);
  },
  (_, _) => {
    _.setTime(+_ + _ * _);
  },
  (_, _) => (_ - _) / _,
  (_) => _.getMinutes(),
);
_.range;
var _ = _(
  (_) => {
    _.setUTCSeconds(0, 0);
  },
  (_, _) => {
    _.setTime(+_ + _ * _);
  },
  (_, _) => (_ - _) / _,
  (_) => _.getUTCMinutes(),
);
_.range;
var _ = _(
  (_) => {
    _.setTime(
      _ - _.getMilliseconds() - _.getSeconds() * _ - _.getMinutes() * _,
    );
  },
  (_, _) => {
    _.setTime(+_ + _ * _);
  },
  (_, _) => (_ - _) / _,
  (_) => _.getHours(),
);
_.range;
var _ = _(
  (_) => {
    _.setUTCMinutes(0, 0, 0);
  },
  (_, _) => {
    _.setTime(+_ + _ * _);
  },
  (_, _) => (_ - _) / _,
  (_) => _.getUTCHours(),
);
_.range;
var _ = _(
  (_) => _.setHours(0, 0, 0, 0),
  (_, _) => _.setDate(_.getDate() + _),
  (_, _) => (_ - _ - (_.getTimezoneOffset() - _.getTimezoneOffset()) * _) / _,
  (_) => _.getDate() - 1,
);
_.range;
var _ = _(
  (_) => {
    _.setUTCHours(0, 0, 0, 0);
  },
  (_, _) => {
    _.setUTCDate(_.getUTCDate() + _);
  },
  (_, _) => (_ - _) / _,
  (_) => _.getUTCDate() - 1,
);
_.range;
var _ = _(
  (_) => {
    _.setUTCHours(0, 0, 0, 0);
  },
  (_, _) => {
    _.setUTCDate(_.getUTCDate() + _);
  },
  (_, _) => (_ - _) / _,
  (_) => Math.floor(_ / _),
);
_.range;
function _(_) {
  return _(
    (_) => {
      (_.setDate(_.getDate() - ((_.getDay() + 7 - _) % 7)),
        _.setHours(0, 0, 0, 0));
    },
    (_, _) => {
      _.setDate(_.getDate() + _ * 7);
    },
    (_, _) => (_ - _ - (_.getTimezoneOffset() - _.getTimezoneOffset()) * _) / _,
  );
}
var _ = _(0),
  _ = _(1),
  _ = _(2),
  _ = _(3),
  _ = _(4),
  _ = _(5),
  _ = _(6);
(_.range, _.range, _.range, _.range, _.range, _.range, _.range);
function _(_) {
  return _(
    (_) => {
      (_.setUTCDate(_.getUTCDate() - ((_.getUTCDay() + 7 - _) % 7)),
        _.setUTCHours(0, 0, 0, 0));
    },
    (_, _) => {
      _.setUTCDate(_.getUTCDate() + _ * 7);
    },
    (_, _) => (_ - _) / _,
  );
}
var _ = _(0),
  _ = _(1),
  _ = _(2),
  _ = _(3),
  _ = _(4),
  _ = _(5),
  _ = _(6);
(_.range, _.range, _.range, _.range, _.range, _.range, _.range);
var _ = _(
  (_) => {
    (_.setDate(1), _.setHours(0, 0, 0, 0));
  },
  (_, _) => {
    _.setMonth(_.getMonth() + _);
  },
  (_, _) =>
    _.getMonth() - _.getMonth() + (_.getFullYear() - _.getFullYear()) * 12,
  (_) => _.getMonth(),
);
_.range;
var _ = _(
  (_) => {
    (_.setUTCDate(1), _.setUTCHours(0, 0, 0, 0));
  },
  (_, _) => {
    _.setUTCMonth(_.getUTCMonth() + _);
  },
  (_, _) =>
    _.getUTCMonth() -
    _.getUTCMonth() +
    (_.getUTCFullYear() - _.getUTCFullYear()) * 12,
  (_) => _.getUTCMonth(),
);
_.range;
var _ = _(
  (_) => {
    (_.setMonth(0, 1), _.setHours(0, 0, 0, 0));
  },
  (_, _) => {
    _.setFullYear(_.getFullYear() + _);
  },
  (_, _) => _.getFullYear() - _.getFullYear(),
  (_) => _.getFullYear(),
);
((_.every = (_) =>
  !isFinite((_ = Math.floor(_))) || !(_ > 0)
    ? null
    : _(
        (_) => {
          (_.setFullYear(Math.floor(_.getFullYear() / _) * _),
            _.setMonth(0, 1),
            _.setHours(0, 0, 0, 0));
        },
        (_, _) => {
          _.setFullYear(_.getFullYear() + _ * _);
        },
      )),
  _.range);
var _ = _(
  (_) => {
    (_.setUTCMonth(0, 1), _.setUTCHours(0, 0, 0, 0));
  },
  (_, _) => {
    _.setUTCFullYear(_.getUTCFullYear() + _);
  },
  (_, _) => _.getUTCFullYear() - _.getUTCFullYear(),
  (_) => _.getUTCFullYear(),
);
((_.every = (_) =>
  !isFinite((_ = Math.floor(_))) || !(_ > 0)
    ? null
    : _(
        (_) => {
          (_.setUTCFullYear(Math.floor(_.getUTCFullYear() / _) * _),
            _.setUTCMonth(0, 1),
            _.setUTCHours(0, 0, 0, 0));
        },
        (_, _) => {
          _.setUTCFullYear(_.getUTCFullYear() + _ * _);
        },
      )),
  _.range);
function _(_, _, _, _, _, _) {
  let _ = [
    [_, 1, _],
    [_, 5, 5 * _],
    [_, 15, 15 * _],
    [_, 30, 30 * _],
    [_, 1, _],
    [_, 5, 5 * _],
    [_, 15, 15 * _],
    [_, 30, 30 * _],
    [_, 1, _],
    [_, 3, 3 * _],
    [_, 6, 6 * _],
    [_, 12, 12 * _],
    [_, 1, _],
    [_, 2, 2 * _],
    [_, 1, _],
    [_, 1, _],
    [_, 3, 3 * _],
    [_, 1, _],
  ];
  function _(_, _, _) {
    let _ = _ < _;
    _ && ([_, _] = [_, _]);
    let _ = _ && typeof _.range == `function` ? _ : _(_, _, _),
      _ = _ ? _.range(_, +_ + 1) : [];
    return _ ? _.reverse() : _;
  }
  function _(_, _, _) {
    let _ = Math.abs(_ - _) / _,
      _ = _(([, , _]) => _).right(_, _);
    if (_ === _.length) return _.every(_(_ / _, _ / _, _));
    if (_ === 0) return _.every(Math.max(_(_, _, _), 1));
    let [_, _] = _[_ / _[_ - 1][2] < _[_][2] / _ ? _ - 1 : _];
    return _.every(_);
  }
  return [_, _];
}
var [_, _] = _(_, _, _, _, _, _),
  [_, _] = _(_, _, _, _, _, _);
function _(_) {
  if (0 <= _._ && _._ < 100) {
    var _ = new Date(-1, _._, _._, _._, _._, _._, _._);
    return (_.setFullYear(_._), _);
  }
  return new Date(_._, _._, _._, _._, _._, _._, _._);
}
function _(_) {
  if (0 <= _._ && _._ < 100) {
    var _ = new Date(Date.UTC(-1, _._, _._, _._, _._, _._, _._));
    return (_.setUTCFullYear(_._), _);
  }
  return new Date(Date.UTC(_._, _._, _._, _._, _._, _._, _._));
}
function _(_, _, _) {
  return {
    _: _,
    _: _,
    _: _,
    _: 0,
    _: 0,
    _: 0,
    _: 0,
  };
}
function _(_) {
  var _ = _.dateTime,
    _ = _.date,
    _ = _.time,
    _ = _.periods,
    _ = _.days,
    _ = _.shortDays,
    _ = _.months,
    _ = _.shortMonths,
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = {
      _: _,
      _: _,
      _: _,
      _: _,
      _: null,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: null,
      _: null,
      _: _,
      _: _,
      _: _,
      "%": _,
    },
    _ = {
      _: _,
      _: _,
      _: _,
      _: _,
      _: null,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: null,
      _: null,
      _: _,
      _: _,
      _: _,
      "%": _,
    },
    _ = {
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      "%": _,
    };
  ((_._ = _(_, _)),
    (_._ = _(_, _)),
    (_._ = _(_, _)),
    (_._ = _(_, _)),
    (_._ = _(_, _)),
    (_._ = _(_, _)));
  function _(_, _) {
    return function (_) {
      var _ = [],
        _ = -1,
        _ = 0,
        _ = _.length,
        _,
        _,
        _;
      for (_ instanceof Date || (_ = new Date(+_)); ++_ < _;)
        _.charCodeAt(_) === 37 &&
          (_.push(_.slice(_, _)),
          (_ = _[(_ = _.charAt(++_))]) == null
            ? (_ = _ === `e` ? ` ` : `0`)
            : (_ = _.charAt(++_)),
          (_ = _[_]) && (_ = _(_, _)),
          _.push(_),
          (_ = _ + 1));
      return (_.push(_.slice(_, _)), _.join(``));
    };
  }
  function _(_, _) {
    return function (_) {
      var _ = _(1900, void 0, 1),
        _ = _(_, _, (_ += ``), 0),
        _,
        _;
      if (_ != _.length) return null;
      if (`Q` in _) return new Date(_._);
      if (`s` in _) return new Date(_._ * 1e3 + (`L` in _ ? _._ : 0));
      if (
        (_ && !(`Z` in _) && (_._ = 0),
        `p` in _ && (_._ = (_._ % 12) + _._ * 12),
        _._ === void 0 && (_._ = `q` in _ ? _._ : 0),
        `V` in _)
      ) {
        if (_._ < 1 || _._ > 53) return null;
        (`w` in _ || (_._ = 1),
          `Z` in _
            ? ((_ = _(_(_._, 0, 1))),
              (_ = _.getUTCDay()),
              (_ = _ > 4 || _ === 0 ? _.ceil(_) : _(_)),
              (_ = _.offset(_, (_._ - 1) * 7)),
              (_._ = _.getUTCFullYear()),
              (_._ = _.getUTCMonth()),
              (_._ = _.getUTCDate() + ((_._ + 6) % 7)))
            : ((_ = _(_(_._, 0, 1))),
              (_ = _.getDay()),
              (_ = _ > 4 || _ === 0 ? _.ceil(_) : _(_)),
              (_ = _.offset(_, (_._ - 1) * 7)),
              (_._ = _.getFullYear()),
              (_._ = _.getMonth()),
              (_._ = _.getDate() + ((_._ + 6) % 7))));
      } else
        (`W` in _ || `U` in _) &&
          (`w` in _ || (_._ = `u` in _ ? _._ % 7 : +(`W` in _)),
          (_ =
            `Z` in _ ? _(_(_._, 0, 1)).getUTCDay() : _(_(_._, 0, 1)).getDay()),
          (_._ = 0),
          (_._ =
            `W` in _
              ? ((_._ + 6) % 7) + _._ * 7 - ((_ + 5) % 7)
              : _._ + _._ * 7 - ((_ + 6) % 7)));
      return `Z` in _
        ? ((_._ += (_._ / 100) | 0), (_._ += _._ % 100), _(_))
        : _(_);
    };
  }
  function _(_, _, _, _) {
    for (var _ = 0, _ = _.length, _ = _.length, _, _; _ < _;) {
      if (_ >= _) return -1;
      if (((_ = _.charCodeAt(_++)), _ === 37)) {
        if (
          ((_ = _.charAt(_++)),
          (_ = _[_ in _ ? _.charAt(_++) : _]),
          !_ || (_ = _(_, _, _)) < 0)
        )
          return -1;
      } else if (_ != _.charCodeAt(_++)) return -1;
    }
    return _;
  }
  function _(_, _, _) {
    var _ = _.exec(_.slice(_));
    return _ ? ((_._ = _.get(_[0].toLowerCase())), _ + _[0].length) : -1;
  }
  function _(_, _, _) {
    var _ = _.exec(_.slice(_));
    return _ ? ((_._ = _.get(_[0].toLowerCase())), _ + _[0].length) : -1;
  }
  function _(_, _, _) {
    var _ = _.exec(_.slice(_));
    return _ ? ((_._ = _.get(_[0].toLowerCase())), _ + _[0].length) : -1;
  }
  function _(_, _, _) {
    var _ = _.exec(_.slice(_));
    return _ ? ((_._ = _.get(_[0].toLowerCase())), _ + _[0].length) : -1;
  }
  function _(_, _, _) {
    var _ = _.exec(_.slice(_));
    return _ ? ((_._ = _.get(_[0].toLowerCase())), _ + _[0].length) : -1;
  }
  function _(_, _, _) {
    return _(_, _, _, _);
  }
  function _(_, _, _) {
    return _(_, _, _, _);
  }
  function _(_, _, _) {
    return _(_, _, _, _);
  }
  function _(_) {
    return _[_.getDay()];
  }
  function _(_) {
    return _[_.getDay()];
  }
  function _(_) {
    return _[_.getMonth()];
  }
  function _(_) {
    return _[_.getMonth()];
  }
  function _(_) {
    return _[+(_.getHours() >= 12)];
  }
  function _(_) {
    return 1 + ~~(_.getMonth() / 3);
  }
  function _(_) {
    return _[_.getUTCDay()];
  }
  function _(_) {
    return _[_.getUTCDay()];
  }
  function _(_) {
    return _[_.getUTCMonth()];
  }
  function _(_) {
    return _[_.getUTCMonth()];
  }
  function _(_) {
    return _[+(_.getUTCHours() >= 12)];
  }
  function _(_) {
    return 1 + ~~(_.getUTCMonth() / 3);
  }
  return {
    format: function (_) {
      var _ = _((_ += ``), _);
      return (
        (_.toString = function () {
          return _;
        }),
        _
      );
    },
    parse: function (_) {
      var _ = _((_ += ``), !1);
      return (
        (_.toString = function () {
          return _;
        }),
        _
      );
    },
    utcFormat: function (_) {
      var _ = _((_ += ``), _);
      return (
        (_.toString = function () {
          return _;
        }),
        _
      );
    },
    utcParse: function (_) {
      var _ = _((_ += ``), !0);
      return (
        (_.toString = function () {
          return _;
        }),
        _
      );
    },
  };
}
var _ = {
    "-": ``,
    _: ` `,
    0: `0`,
  },
  _ = /^\s*\d+/,
  _ = /^%/,
  _ = /[\\^$*+?|[\]().{}]/g;
function _(_, _, _) {
  var _ = _ < 0 ? `-` : ``,
    _ = (_ ? -_ : _) + ``,
    _ = _.length;
  return _ + (_ < _ ? Array(_ - _ + 1).join(_) + _ : _);
}
function _(_) {
  return _.replace(_, `\\$&`);
}
function _(_) {
  return RegExp(`^(?:` + _.map(_).join(`|`) + `)`, `i`);
}
function _(_) {
  return new Map(_.map((_, _) => [_.toLowerCase(), _]));
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 1));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 1));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 2));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 2));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 2));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 4));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 2));
  return _ ? ((_._ = +_[0] + (+_[0] > 68 ? 1900 : 2e3)), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(_.slice(_, _ + 6));
  return _
    ? ((_._ = _[1] ? 0 : -(_[2] + (_[3] || `00`))), _ + _[0].length)
    : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 1));
  return _ ? ((_._ = _[0] * 3 - 3), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 2));
  return _ ? ((_._ = _[0] - 1), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 2));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 3));
  return _ ? ((_._ = 0), (_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 2));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 2));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 2));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 3));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 6));
  return _ ? ((_._ = Math.floor(_[0] / 1e3)), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_, _ + 1));
  return _ ? _ + _[0].length : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _, _) {
  var _ = _.exec(_.slice(_));
  return _ ? ((_._ = +_[0]), _ + _[0].length) : -1;
}
function _(_, _) {
  return _(_.getDate(), _, 2);
}
function _(_, _) {
  return _(_.getHours(), _, 2);
}
function _(_, _) {
  return _(_.getHours() % 12 || 12, _, 2);
}
function _(_, _) {
  return _(1 + _.count(_(_), _), _, 3);
}
function _(_, _) {
  return _(_.getMilliseconds(), _, 3);
}
function _(_, _) {
  return _(_, _) + `000`;
}
function _(_, _) {
  return _(_.getMonth() + 1, _, 2);
}
function _(_, _) {
  return _(_.getMinutes(), _, 2);
}
function _(_, _) {
  return _(_.getSeconds(), _, 2);
}
function _(_) {
  var _ = _.getDay();
  return _ === 0 ? 7 : _;
}
function _(_, _) {
  return _(_.count(_(_) - 1, _), _, 2);
}
function _(_) {
  var _ = _.getDay();
  return _ >= 4 || _ === 0 ? _(_) : _.ceil(_);
}
function _(_, _) {
  return ((_ = _(_)), _(_.count(_(_), _) + (_(_).getDay() === 4), _, 2));
}
function _(_) {
  return _.getDay();
}
function _(_, _) {
  return _(_.count(_(_) - 1, _), _, 2);
}
function _(_, _) {
  return _(_.getFullYear() % 100, _, 2);
}
function _(_, _) {
  return ((_ = _(_)), _(_.getFullYear() % 100, _, 2));
}
function _(_, _) {
  return _(_.getFullYear() % 1e4, _, 4);
}
function _(_, _) {
  var _ = _.getDay();
  return (
    (_ = _ >= 4 || _ === 0 ? _(_) : _.ceil(_)), _(_.getFullYear() % 1e4, _, 4)
  );
}
function _(_) {
  var _ = _.getTimezoneOffset();
  return (
    (_ > 0 ? `-` : ((_ *= -1), `+`)) +
    _((_ / 60) | 0, `0`, 2) +
    _(_ % 60, `0`, 2)
  );
}
function _(_, _) {
  return _(_.getUTCDate(), _, 2);
}
function _(_, _) {
  return _(_.getUTCHours(), _, 2);
}
function _(_, _) {
  return _(_.getUTCHours() % 12 || 12, _, 2);
}
function _(_, _) {
  return _(1 + _.count(_(_), _), _, 3);
}
function _(_, _) {
  return _(_.getUTCMilliseconds(), _, 3);
}
function _(_, _) {
  return _(_, _) + `000`;
}
function _(_, _) {
  return _(_.getUTCMonth() + 1, _, 2);
}
function _(_, _) {
  return _(_.getUTCMinutes(), _, 2);
}
function _(_, _) {
  return _(_.getUTCSeconds(), _, 2);
}
function _(_) {
  var _ = _.getUTCDay();
  return _ === 0 ? 7 : _;
}
function _(_, _) {
  return _(_.count(_(_) - 1, _), _, 2);
}
function _(_) {
  var _ = _.getUTCDay();
  return _ >= 4 || _ === 0 ? _(_) : _.ceil(_);
}
function _(_, _) {
  return ((_ = _(_)), _(_.count(_(_), _) + (_(_).getUTCDay() === 4), _, 2));
}
function _(_) {
  return _.getUTCDay();
}
function _(_, _) {
  return _(_.count(_(_) - 1, _), _, 2);
}
function _(_, _) {
  return _(_.getUTCFullYear() % 100, _, 2);
}
function _(_, _) {
  return ((_ = _(_)), _(_.getUTCFullYear() % 100, _, 2));
}
function _(_, _) {
  return _(_.getUTCFullYear() % 1e4, _, 4);
}
function _(_, _) {
  var _ = _.getUTCDay();
  return (
    (_ = _ >= 4 || _ === 0 ? _(_) : _.ceil(_)),
    _(_.getUTCFullYear() % 1e4, _, 4)
  );
}
function _() {
  return `+0000`;
}
function _() {
  return `%`;
}
function _(_) {
  return +_;
}
function _(_) {
  return Math.floor(_ / 1e3);
}
var _, _, _;
_({
  dateTime: `%x, %X`,
  date: `%-m/%-d/%Y`,
  time: `%-I:%M:%S %p`,
  periods: [`AM`, `PM`],
  days: [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ],
  shortDays: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
  months: [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ],
  shortMonths: [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ],
});
function _(_) {
  return (
    (_ = _(_)), (_ = _.format), _.parse, (_ = _.utcFormat), _.utcParse, _
  );
}
function _(_) {
  return new Date(_);
}
function _(_) {
  return _ instanceof Date ? +_ : +new Date(+_);
}
function _(_, _, _, _, _, _, _, _, _, _) {
  var _ = _(),
    _ = _.invert,
    _ = _.domain,
    _ = _(`.%L`),
    _ = _(`:%S`),
    _ = _(`%I:%M`),
    _ = _(`%I %p`),
    _ = _(`%a %d`),
    _ = _(`%b %d`),
    _ = _(`%B`),
    _ = _(`%Y`);
  function _(_) {
    return (
      _(_) < _
        ? _
        : _(_) < _
          ? _
          : _(_) < _
            ? _
            : _(_) < _
              ? _
              : _(_) < _
                ? _(_) < _
                  ? _
                  : _
                : _(_) < _
                  ? _
                  : _
    )(_);
  }
  return (
    (_.invert = function (_) {
      return new Date(_(_));
    }),
    (_.domain = function (_) {
      return arguments.length ? _(Array.from(_, _)) : _().map(_);
    }),
    (_.ticks = function (_) {
      var _ = _();
      return _(_[0], _[_.length - 1], _ ?? 10);
    }),
    (_.tickFormat = function (_, _) {
      return _ == null ? _ : _(_);
    }),
    (_.nice = function (_) {
      var _ = _();
      return (
        (_ && typeof _.range == `function`) ||
          (_ = _(_[0], _[_.length - 1], _ ?? 10)),
        _ ? _(_(_, _)) : _
      );
    }),
    (_.copy = function () {
      return _(_, _(_, _, _, _, _, _, _, _, _, _));
    }),
    _
  );
}
function _() {
  return _.apply(
    _(_, _, _, _, _, _, _, _, _, _).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function _() {
  return _.apply(
    _(_, _, _, _, _, _, _, _, _, _).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function _() {
  var _ = 0,
    _ = 1,
    _,
    _,
    _,
    _,
    _ = _,
    _ = !1,
    _;
  function _(_) {
    return _ == null || isNaN((_ = +_))
      ? _
      : _(
          _ === 0
            ? 0.5
            : ((_ = (_(_) - _) * _), _ ? Math.max(0, Math.min(1, _)) : _),
        );
  }
  ((_.domain = function (_) {
    return arguments.length
      ? (([_, _] = _),
        (_ = _((_ = +_))),
        (_ = _((_ = +_))),
        (_ = _ === _ ? 0 : 1 / (_ - _)),
        _)
      : [_, _];
  }),
    (_.clamp = function (_) {
      return arguments.length ? ((_ = !!_), _) : _;
    }),
    (_.interpolator = function (_) {
      return arguments.length ? ((_ = _), _) : _;
    }));
  function _(_) {
    return function (_) {
      var _, _;
      return arguments.length ? (([_, _] = _), (_ = _(_, _)), _) : [_(0), _(1)];
    };
  }
  return (
    (_.range = _(_)),
    (_.rangeRound = _(_)),
    (_.unknown = function (_) {
      return arguments.length ? ((_ = _), _) : _;
    }),
    function (_) {
      return (
        (_ = _), (_ = _(_)), (_ = _(_)), (_ = _ === _ ? 0 : 1 / (_ - _)), _
      );
    }
  );
}
function _(_, _) {
  return _.domain(_.domain())
    .interpolator(_.interpolator())
    .clamp(_.clamp())
    .unknown(_.unknown());
}
function _() {
  var _ = _(_()(_));
  return (
    (_.copy = function () {
      return _(_, _());
    }),
    _.apply(_, arguments)
  );
}
function _() {
  var _ = _(_()).domain([1, 10]);
  return (
    (_.copy = function () {
      return _(_, _()).base(_.base());
    }),
    _.apply(_, arguments)
  );
}
function _() {
  var _ = _(_());
  return (
    (_.copy = function () {
      return _(_, _()).constant(_.constant());
    }),
    _.apply(_, arguments)
  );
}
function _() {
  var _ = _(_());
  return (
    (_.copy = function () {
      return _(_, _()).exponent(_.exponent());
    }),
    _.apply(_, arguments)
  );
}
function _() {
  return _.apply(null, arguments).exponent(0.5);
}
function _() {
  var _ = [],
    _ = _;
  function _(_) {
    if (_ != null && !isNaN((_ = +_)))
      return _((_(_, _, 1) - 1) / (_.length - 1));
  }
  return (
    (_.domain = function (_) {
      if (!arguments.length) return _.slice();
      _ = [];
      for (let _ of _) _ != null && !isNaN((_ = +_)) && _.push(_);
      return (_.sort(_), _);
    }),
    (_.interpolator = function (_) {
      return arguments.length ? ((_ = _), _) : _;
    }),
    (_.range = function () {
      return _.map((_, _) => _(_ / (_.length - 1)));
    }),
    (_.quantiles = function (_) {
      return Array.from(
        {
          length: _ + 1,
        },
        (_, _) => _(_, _ / _),
      );
    }),
    (_.copy = function () {
      return _(_).domain(_);
    }),
    _.apply(_, arguments)
  );
}
function _() {
  var _ = 0,
    _ = 0.5,
    _ = 1,
    _ = 1,
    _,
    _,
    _,
    _,
    _,
    _ = _,
    _,
    _ = !1,
    _;
  function _(_) {
    return isNaN((_ = +_))
      ? _
      : ((_ = 0.5 + ((_ = +_(_)) - _) * (_ * _ < _ * _ ? _ : _)),
        _(_ ? Math.max(0, Math.min(1, _)) : _));
  }
  ((_.domain = function (_) {
    return arguments.length
      ? (([_, _, _] = _),
        (_ = _((_ = +_))),
        (_ = _((_ = +_))),
        (_ = _((_ = +_))),
        (_ = _ === _ ? 0 : 0.5 / (_ - _)),
        (_ = _ === _ ? 0 : 0.5 / (_ - _)),
        (_ = _ < _ ? -1 : 1),
        _)
      : [_, _, _];
  }),
    (_.clamp = function (_) {
      return arguments.length ? ((_ = !!_), _) : _;
    }),
    (_.interpolator = function (_) {
      return arguments.length ? ((_ = _), _) : _;
    }));
  function _(_) {
    return function (_) {
      var _, _, _;
      return arguments.length
        ? (([_, _, _] = _), (_ = _(_, [_, _, _])), _)
        : [_(0), _(0.5), _(1)];
    };
  }
  return (
    (_.range = _(_)),
    (_.rangeRound = _(_)),
    (_.unknown = function (_) {
      return arguments.length ? ((_ = _), _) : _;
    }),
    function (_) {
      return (
        (_ = _),
        (_ = _(_)),
        (_ = _(_)),
        (_ = _(_)),
        (_ = _ === _ ? 0 : 0.5 / (_ - _)),
        (_ = _ === _ ? 0 : 0.5 / (_ - _)),
        (_ = _ < _ ? -1 : 1),
        _
      );
    }
  );
}
function _() {
  var _ = _(_()(_));
  return (
    (_.copy = function () {
      return _(_, _());
    }),
    _.apply(_, arguments)
  );
}
function _() {
  var _ = _(_()).domain([0.1, 1, 10]);
  return (
    (_.copy = function () {
      return _(_, _()).base(_.base());
    }),
    _.apply(_, arguments)
  );
}
function _() {
  var _ = _(_());
  return (
    (_.copy = function () {
      return _(_, _()).constant(_.constant());
    }),
    _.apply(_, arguments)
  );
}
function _() {
  var _ = _(_());
  return (
    (_.copy = function () {
      return _(_, _()).exponent(_.exponent());
    }),
    _.apply(_, arguments)
  );
}
function _() {
  return _.apply(null, arguments).exponent(0.5);
}
var _ = _(_()),
  _ = _({
    scaleBand: () => _,
    scaleDiverging: () => _,
    scaleDivergingLog: () => _,
    scaleDivergingPow: () => _,
    scaleDivergingSqrt: () => _,
    scaleDivergingSymlog: () => _,
    scaleIdentity: () => _,
    scaleImplicit: () => _,
    scaleLinear: () => _,
    scaleLog: () => _,
    scaleOrdinal: () => _,
    scalePoint: () => _,
    scalePow: () => _,
    scaleQuantile: () => _,
    scaleQuantize: () => _,
    scaleRadial: () => _,
    scaleSequential: () => _,
    scaleSequentialLog: () => _,
    scaleSequentialPow: () => _,
    scaleSequentialQuantile: () => _,
    scaleSequentialSqrt: () => _,
    scaleSequentialSymlog: () => _,
    scaleSqrt: () => _,
    scaleSymlog: () => _,
    scaleThreshold: () => _,
    scaleTime: () => _,
    scaleUtc: () => _,
    tickFormat: () => _,
  }),
  _ = (_) => _.chartData,
  _ = _([_], (_) => {
    var _ = _.chartData == null ? 0 : _.chartData.length - 1;
    return {
      chartData: _.chartData,
      computedData: _.computedData,
      dataEndIndex: _,
      dataStartIndex: 0,
    };
  }),
  _ = (_, _, _, _) => (_ ? _(_) : _(_));
function _(_) {
  if (Array.isArray(_) && _.length === 2) {
    var [_, _] = _;
    if (_(_) && _(_)) return !0;
  }
  return !1;
}
function _(_, _, _) {
  return _ ? _ : [Math.min(_[0], _[0]), Math.max(_[1], _[1])];
}
function _(_, _) {
  if (_ && typeof _ != `function` && Array.isArray(_) && _.length === 2) {
    var [_, _] = _,
      _,
      _;
    if (_(_)) _ = _;
    else if (typeof _ == `function`) return;
    if (_(_)) _ = _;
    else if (typeof _ == `function`) return;
    var _ = [_, _];
    if (_(_)) return _;
  }
}
function _(_, _, _) {
  if (_ || _ != null) {
    if (typeof _ == `function` && _ != null)
      try {
        var _ = _(_, _);
        if (_(_)) return _(_, _, _);
      } catch {}
    if (Array.isArray(_) && _.length === 2) {
      var [_, _] = _,
        _,
        _;
      if (_ === `auto`) _ != null && (_ = Math.min(..._));
      else if (_(_)) _ = _;
      else if (typeof _ == `function`)
        try {
          _ != null && (_ = _(_?.[0]));
        } catch {}
      else if (typeof _ == `string` && _.test(_)) {
        var _ = _.exec(_);
        if (_ == null || _ == null) _ = void 0;
        else {
          var _ = +_[1];
          _ = _[0] - _;
        }
      } else _ = _?.[0];
      if (_ === `auto`) _ != null && (_ = Math.max(..._));
      else if (_(_)) _ = _;
      else if (typeof _ == `function`)
        try {
          _ != null && (_ = _(_?.[1]));
        } catch {}
      else if (typeof _ == `string` && _.test(_)) {
        var _ = _.exec(_);
        if (_ == null || _ == null) _ = void 0;
        else {
          var _ = +_[1];
          _ = _[1] + _;
        }
      } else _ = _?.[1];
      var _ = [_, _];
      if (_(_)) return _ == null ? _ : _(_, _, _);
    }
  }
}
var _ = _(
    _((_, _, _) => {
      (function (_) {
        var _ = 1e9,
          _ = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: `2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286`,
          },
          _ = !0,
          _ = `[DecimalError] `,
          _ = _ + `Invalid argument: `,
          _ = _ + `Exponent out of range: `,
          _ = Math.floor,
          _ = Math.pow,
          _ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          _,
          _ = 1e7,
          _ = 7,
          _ = 9007199254740991,
          _ = _(_ / _),
          _ = {};
        ((_.absoluteValue = _.abs =
          function () {
            var _ = new this.constructor(this);
            return ((_._ &&= 1), _);
          }),
          (_.comparedTo = _.cmp =
            function (_) {
              var _,
                _,
                _,
                _,
                _ = this;
              if (((_ = new _.constructor(_)), _._ !== _._)) return _._ || -_._;
              if (_._ !== _._) return (_._ > _._) ^ (_._ < 0) ? 1 : -1;
              for (
                _ = _._.length, _ = _._.length, _ = 0, _ = _ < _ ? _ : _;
                _ < _;
                ++_
              )
                if (_._[_] !== _._[_])
                  return (_._[_] > _._[_]) ^ (_._ < 0) ? 1 : -1;
              return _ === _ ? 0 : (_ > _) ^ (_._ < 0) ? 1 : -1;
            }),
          (_.decimalPlaces = _._ =
            function () {
              var _ = this,
                _ = _._.length - 1,
                _ = (_ - _._) * _;
              if (((_ = _._[_]), _)) for (; _ % 10 == 0; _ /= 10) _--;
              return _ < 0 ? 0 : _;
            }),
          (_.dividedBy = _.div =
            function (_) {
              return _(this, new this.constructor(_));
            }),
          (_.dividedToIntegerBy = _.idiv =
            function (_) {
              var _ = this,
                _ = _.constructor;
              return _(_(_, new _(_), 0, 1), _.precision);
            }),
          (_.equals = _._ =
            function (_) {
              return !this.cmp(_);
            }),
          (_.exponent = function () {
            return _(this);
          }),
          (_.greaterThan = _._ =
            function (_) {
              return this.cmp(_) > 0;
            }),
          (_.greaterThanOrEqualTo = _.gte =
            function (_) {
              return this.cmp(_) >= 0;
            }),
          (_.isInteger = _.isint =
            function () {
              return this._ > this._.length - 2;
            }),
          (_.isNegative = _.isneg =
            function () {
              return this._ < 0;
            }),
          (_.isPositive = _.ispos =
            function () {
              return this._ > 0;
            }),
          (_.isZero = function () {
            return this._ === 0;
          }),
          (_.lessThan = _._ =
            function (_) {
              return this.cmp(_) < 0;
            }),
          (_.lessThanOrEqualTo = _.lte =
            function (_) {
              return this.cmp(_) < 1;
            }),
          (_.logarithm = _.log =
            function (_) {
              var _,
                _ = this,
                _ = _.constructor,
                _ = _.precision,
                _ = _ + 5;
              if (_ === void 0) _ = new _(10);
              else if (((_ = new _(_)), _._ < 1 || _._(_)))
                throw Error(_ + `NaN`);
              if (_._ < 1) throw Error(_ + (_._ ? `NaN` : `-Infinity`));
              return _._(_)
                ? new _(0)
                : ((_ = !1), (_ = _(_(_, _), _(_, _), _)), (_ = !0), _(_, _));
            }),
          (_.minus = _.sub =
            function (_) {
              var _ = this;
              return (
                (_ = new _.constructor(_)),
                _._ == _._ ? _(_, _) : _(_, ((_._ = -_._), _))
              );
            }),
          (_.modulo = _.mod =
            function (_) {
              var _,
                _ = this,
                _ = _.constructor,
                _ = _.precision;
              if (((_ = new _(_)), !_._)) throw Error(_ + `NaN`);
              return _._
                ? ((_ = !1), (_ = _(_, _, 0, 1).times(_)), (_ = !0), _.minus(_))
                : _(new _(_), _);
            }),
          (_.naturalExponential = _.exp =
            function () {
              return _(this);
            }),
          (_.naturalLogarithm = _._ =
            function () {
              return _(this);
            }),
          (_.negated = _.neg =
            function () {
              var _ = new this.constructor(this);
              return ((_._ = -_._ || 0), _);
            }),
          (_.plus = _.add =
            function (_) {
              var _ = this;
              return (
                (_ = new _.constructor(_)),
                _._ == _._ ? _(_, _) : _(_, ((_._ = -_._), _))
              );
            }),
          (_.precision = _._ =
            function (_) {
              var _,
                _,
                _,
                _ = this;
              if (_ !== void 0 && _ !== !!_ && _ !== 1 && _ !== 0)
                throw Error(_ + _);
              if (
                ((_ = _(_) + 1),
                (_ = _._.length - 1),
                (_ = _ * _ + 1),
                (_ = _._[_]),
                _)
              ) {
                for (; _ % 10 == 0; _ /= 10) _--;
                for (_ = _._[0]; _ >= 10; _ /= 10) _++;
              }
              return _ && _ > _ ? _ : _;
            }),
          (_.squareRoot = _.sqrt =
            function () {
              var _,
                _,
                _,
                _,
                _,
                _,
                _,
                _ = this,
                _ = _.constructor;
              if (_._ < 1) {
                if (!_._) return new _(0);
                throw Error(_ + `NaN`);
              }
              for (
                _ = _(_),
                  _ = !1,
                  _ = Math.sqrt(+_),
                  _ == 0 || _ == 1 / 0
                    ? ((_ = _(_._)),
                      (_.length + _) % 2 == 0 && (_ += `0`),
                      (_ = Math.sqrt(_)),
                      (_ = _((_ + 1) / 2) - (_ < 0 || _ % 2)),
                      _ == 1 / 0
                        ? (_ = `5e` + _)
                        : ((_ = _.toExponential()),
                          (_ = _.slice(0, _.indexOf(`e`) + 1) + _)),
                      (_ = new _(_)))
                    : (_ = new _(_.toString())),
                  _ = _.precision,
                  _ = _ = _ + 3;
                ;
              )
                if (
                  ((_ = _),
                  (_ = _.plus(_(_, _, _ + 2)).times(0.5)),
                  _(_._).slice(0, _) === (_ = _(_._)).slice(0, _))
                ) {
                  if (((_ = _.slice(_ - 3, _ + 1)), _ == _ && _ == `4999`)) {
                    if ((_(_, _ + 1, 0), _.times(_)._(_))) {
                      _ = _;
                      break;
                    }
                  } else if (_ != `9999`) break;
                  _ += 4;
                }
              return ((_ = !0), _(_, _));
            }),
          (_.times = _.mul =
            function (_) {
              var _,
                _,
                _,
                _,
                _,
                _,
                _,
                _,
                _,
                _ = this,
                _ = _.constructor,
                _ = _._,
                _ = (_ = new _(_))._;
              if (!_._ || !_._) return new _(0);
              for (
                _._ *= _._,
                  _ = _._ + _._,
                  _ = _.length,
                  _ = _.length,
                  _ < _ &&
                    ((_ = _), (_ = _), (_ = _), (_ = _), (_ = _), (_ = _)),
                  _ = [],
                  _ = _ + _,
                  _ = _;
                _--;
              )
                _.push(0);
              for (_ = _; --_ >= 0;) {
                for (_ = 0, _ = _ + _; _ > _;)
                  ((_ = _[_] + _[_] * _[_ - _ - 1] + _),
                    (_[_--] = (_ % _) | 0),
                    (_ = (_ / _) | 0));
                _[_] = ((_[_] + _) % _) | 0;
              }
              for (; !_[--_];) _.pop();
              return (
                _ ? ++_ : _.shift(),
                (_._ = _),
                (_._ = _),
                _ ? _(_, _.precision) : _
              );
            }),
          (_.toDecimalPlaces = _.todp =
            function (_, _) {
              var _ = this,
                _ = _.constructor;
              return (
                (_ = new _(_)),
                _ === void 0
                  ? _
                  : (_(_, 0, _),
                    _ === void 0 ? (_ = _.rounding) : _(_, 0, 8),
                    _(_, _ + _(_) + 1, _))
              );
            }),
          (_.toExponential = function (_, _) {
            var _,
              _ = this,
              _ = _.constructor;
            return (
              _ === void 0
                ? (_ = _(_, !0))
                : (_(_, 0, _),
                  _ === void 0 ? (_ = _.rounding) : _(_, 0, 8),
                  (_ = _(new _(_), _ + 1, _)),
                  (_ = _(_, !0, _ + 1))),
              _
            );
          }),
          (_.toFixed = function (_, _) {
            var _,
              _,
              _ = this,
              _ = _.constructor;
            return _ === void 0
              ? _(_)
              : (_(_, 0, _),
                _ === void 0 ? (_ = _.rounding) : _(_, 0, 8),
                (_ = _(new _(_), _ + _(_) + 1, _)),
                (_ = _(_.abs(), !1, _ + _(_) + 1)),
                _.isneg() && !_.isZero() ? `-` + _ : _);
          }),
          (_.toInteger = _.toint =
            function () {
              var _ = this,
                _ = _.constructor;
              return _(new _(_), _(_) + 1, _.rounding);
            }),
          (_.toNumber = function () {
            return +this;
          }),
          (_.toPower = _.pow =
            function (_) {
              var _,
                _,
                _,
                _,
                _,
                _,
                _ = this,
                _ = _.constructor,
                _ = 12,
                _ = +(_ = new _(_));
              if (!_._) return new _(_);
              if (((_ = new _(_)), !_._)) {
                if (_._ < 1) throw Error(_ + `Infinity`);
                return _;
              }
              if (_._(_)) return _;
              if (((_ = _.precision), _._(_))) return _(_, _);
              if (
                ((_ = _._), (_ = _._.length - 1), (_ = _ >= _), (_ = _._), !_)
              ) {
                if (_ < 0) throw Error(_ + `NaN`);
              } else if ((_ = _ < 0 ? -_ : _) <= _) {
                for (
                  _ = new _(_), _ = Math.ceil(_ / _ + 4), _ = !1;
                  _ % 2 && ((_ = _.times(_)), _(_._, _)),
                    (_ = _(_ / 2)),
                    _ !== 0;
                )
                  ((_ = _.times(_)), _(_._, _));
                return ((_ = !0), _._ < 0 ? new _(_).div(_) : _(_, _));
              }
              return (
                (_ = _ < 0 && _._[Math.max(_, _)] & 1 ? -1 : 1),
                (_._ = 1),
                (_ = !1),
                (_ = _.times(_(_, _ + _))),
                (_ = !0),
                (_ = _(_)),
                (_._ = _),
                _
              );
            }),
          (_.toPrecision = function (_, _) {
            var _,
              _,
              _ = this,
              _ = _.constructor;
            return (
              _ === void 0
                ? ((_ = _(_)), (_ = _(_, _ <= _.toExpNeg || _ >= _.toExpPos)))
                : (_(_, 1, _),
                  _ === void 0 ? (_ = _.rounding) : _(_, 0, 8),
                  (_ = _(new _(_), _, _)),
                  (_ = _(_)),
                  (_ = _(_, _ <= _ || _ <= _.toExpNeg, _))),
              _
            );
          }),
          (_.toSignificantDigits = _.tosd =
            function (_, _) {
              var _ = this,
                _ = _.constructor;
              return (
                _ === void 0
                  ? ((_ = _.precision), (_ = _.rounding))
                  : (_(_, 1, _), _ === void 0 ? (_ = _.rounding) : _(_, 0, 8)),
                _(new _(_), _, _)
              );
            }),
          (_.toString =
            _.valueOf =
            _.val =
            _.toJSON =
              function () {
                var _ = this,
                  _ = _(_),
                  _ = _.constructor;
                return _(_, _ <= _.toExpNeg || _ >= _.toExpPos);
              }));
        function _(_, _) {
          var _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _ = _.constructor,
            _ = _.precision;
          if (!_._ || !_._) return (_._ || (_ = new _(_)), _ ? _(_, _) : _);
          if (
            ((_ = _._),
            (_ = _._),
            (_ = _._),
            (_ = _._),
            (_ = _.slice()),
            (_ = _ - _),
            _)
          ) {
            for (
              _ < 0
                ? ((_ = _), (_ = -_), (_ = _.length))
                : ((_ = _), (_ = _), (_ = _.length)),
                _ = Math.ceil(_ / _),
                _ = _ > _ ? _ + 1 : _ + 1,
                _ > _ && ((_ = _), (_.length = 1)),
                _.reverse();
              _--;
            )
              _.push(0);
            _.reverse();
          }
          for (
            _ = _.length,
              _ = _.length,
              _ - _ < 0 && ((_ = _), (_ = _), (_ = _), (_ = _)),
              _ = 0;
            _;
          )
            ((_ = ((_[--_] = _[_] + _[_] + _) / _) | 0), (_[_] %= _));
          for (_ && (_.unshift(_), ++_), _ = _.length; _[--_] == 0;) _.pop();
          return ((_._ = _), (_._ = _), _ ? _(_, _) : _);
        }
        function _(_, _, _) {
          if (_ !== ~~_ || _ < _ || _ > _) throw Error(_ + _);
        }
        function _(_) {
          var _,
            _,
            _,
            _ = _.length - 1,
            _ = ``,
            _ = _[0];
          if (_ > 0) {
            for (_ += _, _ = 1; _ < _; _++)
              ((_ = _[_] + ``), (_ = _ - _.length), _ && (_ += _(_)), (_ += _));
            ((_ = _[_]), (_ = _ + ``), (_ = _ - _.length), _ && (_ += _(_)));
          } else if (_ === 0) return `0`;
          for (; _ % 10 == 0;) _ /= 10;
          return _ + _;
        }
        var _ = (function () {
          function _(_, _) {
            var _,
              _ = 0,
              _ = _.length;
            for (_ = _.slice(); _--;)
              ((_ = _[_] * _ + _), (_[_] = (_ % _) | 0), (_ = (_ / _) | 0));
            return (_ && _.unshift(_), _);
          }
          function _(_, _, _, _) {
            var _, _;
            if (_ != _) _ = _ > _ ? 1 : -1;
            else
              for (_ = _ = 0; _ < _; _++)
                if (_[_] != _[_]) {
                  _ = _[_] > _[_] ? 1 : -1;
                  break;
                }
            return _;
          }
          function _(_, _, _) {
            for (var _ = 0; _--;)
              ((_[_] -= _), (_ = +(_[_] < _[_])), (_[_] = _ * _ + _[_] - _[_]));
            for (; !_[0] && _.length > 1;) _.shift();
          }
          return function (_, _, _, _) {
            var _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _ = _.constructor,
              _ = _._ == _._ ? 1 : -1,
              _ = _._,
              _ = _._;
            if (!_._) return new _(_);
            if (!_._) throw Error(_ + `Division by zero`);
            for (
              _ = _._ - _._,
                _ = _.length,
                _ = _.length,
                _ = new _(_),
                _ = _._ = [],
                _ = 0;
              _[_] == (_[_] || 0);
            )
              ++_;
            if (
              (_[_] > (_[_] || 0) && --_,
              (_ =
                _ == null ? (_ = _.precision) : _ ? _ + (_(_) - _(_)) + 1 : _),
              _ < 0)
            )
              return new _(0);
            if (((_ = (_ / _ + 2) | 0), (_ = 0), _ == 1))
              for (_ = 0, _ = _[0], _++; (_ < _ || _) && _--; _++)
                ((_ = _ * _ + (_[_] || 0)),
                  (_[_] = (_ / _) | 0),
                  (_ = (_ % _) | 0));
            else {
              for (
                _ = (_ / (_[0] + 1)) | 0,
                  _ > 1 &&
                    ((_ = _(_, _)),
                    (_ = _(_, _)),
                    (_ = _.length),
                    (_ = _.length)),
                  _ = _,
                  _ = _.slice(0, _),
                  _ = _.length;
                _ < _;
              )
                _[_++] = 0;
              ((_ = _.slice()), _.unshift(0), (_ = _[0]), _[1] >= _ / 2 && ++_);
              do
                ((_ = 0),
                  (_ = _(_, _, _, _)),
                  _ < 0
                    ? ((_ = _[0]),
                      _ != _ && (_ = _ * _ + (_[1] || 0)),
                      (_ = (_ / _) | 0),
                      _ > 1
                        ? (_ >= _ && (_ = _ - 1),
                          (_ = _(_, _)),
                          (_ = _.length),
                          (_ = _.length),
                          (_ = _(_, _, _, _)),
                          _ == 1 && (_--, _(_, _ < _ ? _ : _, _)))
                        : (_ == 0 && (_ = _ = 1), (_ = _.slice())),
                      (_ = _.length),
                      _ < _ && _.unshift(0),
                      _(_, _, _),
                      _ == -1 &&
                        ((_ = _.length),
                        (_ = _(_, _, _, _)),
                        _ < 1 && (_++, _(_, _ < _ ? _ : _, _))),
                      (_ = _.length))
                    : _ === 0 && (_++, (_ = [0])),
                  (_[_++] = _),
                  _ && _[0] ? (_[_++] = _[_] || 0) : ((_ = [_[_]]), (_ = 1)));
              while ((_++ < _ || _[0] !== void 0) && _--);
            }
            return (_[0] || _.shift(), (_._ = _), _(_, _ ? _ + _(_) + 1 : _));
          };
        })();
        function _(_, _) {
          var _,
            _,
            _,
            _,
            _,
            _,
            _ = 0,
            _ = 0,
            _ = _.constructor,
            _ = _.precision;
          if (_(_) > 16) throw Error(_ + _(_));
          if (!_._) return new _(_);
          for (
            _ == null ? ((_ = !1), (_ = _)) : (_ = _), _ = new _(0.03125);
            _.abs().gte(0.1);
          )
            ((_ = _.times(_)), (_ += 5));
          for (
            _ = ((Math.log(_(2, _)) / Math.LN10) * 2 + 5) | 0,
              _ += _,
              _ = _ = _ = new _(_),
              _.precision = _;
            ;
          ) {
            if (
              ((_ = _(_.times(_), _)),
              (_ = _.times(++_)),
              (_ = _.plus(_(_, _, _))),
              _(_._).slice(0, _) === _(_._).slice(0, _))
            ) {
              for (; _--;) _ = _(_.times(_), _);
              return ((_.precision = _), _ == null ? ((_ = !0), _(_, _)) : _);
            }
            _ = _;
          }
        }
        function _(_) {
          for (var _ = _._ * _, _ = _._[0]; _ >= 10; _ /= 10) _++;
          return _;
        }
        function _(_, _, _) {
          if (_ > _.LN10._())
            throw (
              (_ = !0),
              _ && (_.precision = _),
              Error(_ + `LN10 precision limit exceeded`)
            );
          return _(new _(_.LN10), _);
        }
        function _(_) {
          for (var _ = ``; _--;) _ += `0`;
          return _;
        }
        function _(_, _) {
          var _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _ = 1,
            _ = 10,
            _ = _,
            _ = _._,
            _ = _.constructor,
            _ = _.precision;
          if (_._ < 1) throw Error(_ + (_._ ? `NaN` : `-Infinity`));
          if (_._(_)) return new _(0);
          if ((_ == null ? ((_ = !1), (_ = _)) : (_ = _), _._(10)))
            return (_ ?? (_ = !0), _(_, _));
          if (
            ((_ += _),
            (_.precision = _),
            (_ = _(_)),
            (_ = _.charAt(0)),
            (_ = _(_)),
            Math.abs(_) < 0x5543df729c000)
          ) {
            for (; (_ < 7 && _ != 1) || (_ == 1 && _.charAt(1) > 3);)
              ((_ = _.times(_)), (_ = _(_._)), (_ = _.charAt(0)), _++);
            ((_ = _(_)),
              _ > 1
                ? ((_ = new _(`0.` + _)), _++)
                : (_ = new _(_ + `.` + _.slice(1))));
          } else
            return (
              (_ = _(_, _ + 2, _).times(_ + ``)),
              (_ = _(new _(_ + `.` + _.slice(1)), _ - _).plus(_)),
              (_.precision = _),
              _ == null ? ((_ = !0), _(_, _)) : _
            );
          for (
            _ = _ = _ = _(_.minus(_), _.plus(_), _),
              _ = _(_.times(_), _),
              _ = 3;
            ;
          ) {
            if (
              ((_ = _(_.times(_), _)),
              (_ = _.plus(_(_, new _(_), _))),
              _(_._).slice(0, _) === _(_._).slice(0, _))
            )
              return (
                (_ = _.times(2)),
                _ !== 0 && (_ = _.plus(_(_, _ + 2, _).times(_ + ``))),
                (_ = _(_, new _(_), _)),
                (_.precision = _),
                _ == null ? ((_ = !0), _(_, _)) : _
              );
            ((_ = _), (_ += 2));
          }
        }
        function _(_, _) {
          var _, _, _;
          for (
            (_ = _.indexOf(`.`)) > -1 && (_ = _.replace(`.`, ``)),
              (_ = _.search(/e/i)) > 0
                ? (_ < 0 && (_ = _),
                  (_ += +_.slice(_ + 1)),
                  (_ = _.substring(0, _)))
                : _ < 0 && (_ = _.length),
              _ = 0;
            _.charCodeAt(_) === 48;
          )
            ++_;
          for (_ = _.length; _.charCodeAt(_ - 1) === 48;) --_;
          if (((_ = _.slice(_, _)), _)) {
            if (
              ((_ -= _),
              (_ = _ - _ - 1),
              (_._ = _(_ / _)),
              (_._ = []),
              (_ = (_ + 1) % _),
              _ < 0 && (_ += _),
              _ < _)
            ) {
              for (_ && _._.push(+_.slice(0, _)), _ -= _; _ < _;)
                _._.push(+_.slice(_, (_ += _)));
              ((_ = _.slice(_)), (_ = _ - _.length));
            } else _ -= _;
            for (; _--;) _ += `0`;
            if ((_._.push(+_), _ && (_._ > _ || _._ < -_))) throw Error(_ + _);
          } else ((_._ = 0), (_._ = 0), (_._ = [0]));
          return _;
        }
        function _(_, _, _) {
          var _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _ = _._;
          for (_ = 1, _ = _[0]; _ >= 10; _ /= 10) _++;
          if (((_ = _ - _), _ < 0)) ((_ += _), (_ = _), (_ = _[(_ = 0)]));
          else {
            if (((_ = Math.ceil((_ + 1) / _)), (_ = _.length), _ >= _))
              return _;
            for (_ = _ = _[_], _ = 1; _ >= 10; _ /= 10) _++;
            ((_ %= _), (_ = _ - _ + _));
          }
          if (
            (_ !== void 0 &&
              ((_ = _(10, _ - _ - 1)),
              (_ = ((_ / _) % 10) | 0),
              (_ = _ < 0 || _[_ + 1] !== void 0 || _ % _),
              (_ =
                _ < 4
                  ? (_ || _) && (_ == 0 || _ == (_._ < 0 ? 3 : 2))
                  : _ > 5 ||
                    (_ == 5 &&
                      (_ == 4 ||
                        _ ||
                        (_ == 6 &&
                          ((_ > 0 ? (_ > 0 ? _ / _(10, _ - _) : 0) : _[_ - 1]) %
                            10) &
                            1) ||
                        _ == (_._ < 0 ? 8 : 7))))),
            _ < 1 || !_[0])
          )
            return (
              _
                ? ((_ = _(_)),
                  (_.length = 1),
                  (_ = _ - _ - 1),
                  (_[0] = _(10, (_ - (_ % _)) % _)),
                  (_._ = _(-_ / _) || 0))
                : ((_.length = 1), (_[0] = _._ = _._ = 0)),
              _
            );
          if (
            (_ == 0
              ? ((_.length = _), (_ = 1), _--)
              : ((_.length = _ + 1),
                (_ = _(10, _ - _)),
                (_[_] = _ > 0 ? (((_ / _(10, _ - _)) % _(10, _)) | 0) * _ : 0)),
            _)
          )
            for (;;)
              if (_ == 0) {
                (_[0] += _) == _ && ((_[0] = 1), ++_._);
                break;
              } else {
                if (((_[_] += _), _[_] != _)) break;
                ((_[_--] = 0), (_ = 1));
              }
          for (_ = _.length; _[--_] === 0;) _.pop();
          if (_ && (_._ > _ || _._ < -_)) throw Error(_ + _(_));
          return _;
        }
        function _(_, _) {
          var _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _ = _.constructor,
            _ = _.precision;
          if (!_._ || !_._)
            return (_._ ? (_._ = -_._) : (_ = new _(_)), _ ? _(_, _) : _);
          if (
            ((_ = _._),
            (_ = _._),
            (_ = _._),
            (_ = _._),
            (_ = _.slice()),
            (_ = _ - _),
            _)
          ) {
            for (
              _ = _ < 0,
                _
                  ? ((_ = _), (_ = -_), (_ = _.length))
                  : ((_ = _), (_ = _), (_ = _.length)),
                _ = Math.max(Math.ceil(_ / _), _) + 2,
                _ > _ && ((_ = _), (_.length = 1)),
                _.reverse(),
                _ = _;
              _--;
            )
              _.push(0);
            _.reverse();
          } else {
            for (
              _ = _.length, _ = _.length, _ = _ < _, _ && (_ = _), _ = 0;
              _ < _;
              _++
            )
              if (_[_] != _[_]) {
                _ = _[_] < _[_];
                break;
              }
            _ = 0;
          }
          for (
            _ && ((_ = _), (_ = _), (_ = _), (_._ = -_._)),
              _ = _.length,
              _ = _.length - _;
            _ > 0;
            --_
          )
            _[_++] = 0;
          for (_ = _.length; _ > _;) {
            if (_[--_] < _[_]) {
              for (_ = _; _ && _[--_] === 0;) _[_] = _ - 1;
              (--_[_], (_[_] += _));
            }
            _[_] -= _[_];
          }
          for (; _[--_] === 0;) _.pop();
          for (; _[0] === 0; _.shift()) --_;
          return _[0] ? ((_._ = _), (_._ = _), _ ? _(_, _) : _) : new _(0);
        }
        function _(_, _, _) {
          var _,
            _ = _(_),
            _ = _(_._),
            _ = _.length;
          return (
            _
              ? (_ && (_ = _ - _) > 0
                  ? (_ = _.charAt(0) + `.` + _.slice(1) + _(_))
                  : _ > 1 && (_ = _.charAt(0) + `.` + _.slice(1)),
                (_ = _ + (_ < 0 ? `e` : `e+`) + _))
              : _ < 0
                ? ((_ = `0.` + _(-_ - 1) + _),
                  _ && (_ = _ - _) > 0 && (_ += _(_)))
                : _ >= _
                  ? ((_ += _(_ + 1 - _)),
                    _ && (_ = _ - _ - 1) > 0 && (_ = _ + `.` + _(_)))
                  : ((_ = _ + 1) < _ && (_ = _.slice(0, _) + `.` + _.slice(_)),
                    _ &&
                      (_ = _ - _) > 0 &&
                      (_ + 1 === _ && (_ += `.`), (_ += _(_)))),
            _._ < 0 ? `-` + _ : _
          );
        }
        function _(_, _) {
          if (_.length > _) return ((_.length = _), !0);
        }
        function _(_) {
          var _, _, _;
          function _(_) {
            var _ = this;
            if (!(_ instanceof _)) return new _(_);
            if (((_.constructor = _), _ instanceof _))
              ((_._ = _._), (_._ = _._), (_._ = (_ = _._) ? _.slice() : _));
            else {
              if (typeof _ == `number`) {
                if (_ * 0 != 0) throw Error(_ + _);
                if (_ > 0) _._ = 1;
                else if (_ < 0) ((_ = -_), (_._ = -1));
                else {
                  ((_._ = 0), (_._ = 0), (_._ = [0]));
                  return;
                }
                if (_ === ~~_ && _ < 1e7) {
                  ((_._ = 0), (_._ = [_]));
                  return;
                }
                return _(_, _.toString());
              }
              if (typeof _ != `string`) throw Error(_ + _);
              if (
                (_.charCodeAt(0) === 45
                  ? ((_ = _.slice(1)), (_._ = -1))
                  : (_._ = 1),
                _.test(_))
              )
                _(_, _);
              else throw Error(_ + _);
            }
          }
          if (
            ((_.prototype = _),
            (_.ROUND_UP = 0),
            (_.ROUND_DOWN = 1),
            (_.ROUND_CEIL = 2),
            (_.ROUND_FLOOR = 3),
            (_.ROUND_HALF_UP = 4),
            (_.ROUND_HALF_DOWN = 5),
            (_.ROUND_HALF_EVEN = 6),
            (_.ROUND_HALF_CEIL = 7),
            (_.ROUND_HALF_FLOOR = 8),
            (_.clone = _),
            (_.config = _.set = _),
            _ === void 0 && (_ = {}),
            _)
          )
            for (
              _ = [`precision`, `rounding`, `toExpNeg`, `toExpPos`, `LN10`],
                _ = 0;
              _ < _.length;
            )
              _.hasOwnProperty((_ = _[_++])) || (_[_] = this[_]);
          return (_.config(_), _);
        }
        function _(_) {
          if (!_ || typeof _ != `object`) throw Error(_ + `Object expected`);
          var _,
            _,
            _,
            _ = [
              `precision`,
              1,
              _,
              `rounding`,
              0,
              8,
              `toExpNeg`,
              -1 / 0,
              0,
              `toExpPos`,
              0,
              1 / 0,
            ];
          for (_ = 0; _ < _.length; _ += 3)
            if ((_ = _[(_ = _[_])]) !== void 0) {
              if (_(_) === _ && _ >= _[_ + 1] && _ <= _[_ + 2]) this[_] = _;
              else throw Error(_ + _ + `: ` + _);
            }
          if ((_ = _[(_ = `LN10`)]) !== void 0) {
            if (_ == Math.LN10) this[_] = new this(_);
            else throw Error(_ + _ + `: ` + _);
          }
          return this;
        }
        ((_ = _(_)),
          (_.default = _.Decimal = _),
          (_ = new _(1)),
          typeof define == `function` && define.amd
            ? define(function () {
                return _;
              })
            : _ !== void 0 && _.exports
              ? (_.exports = _)
              : ((_ ||=
                  typeof self < `u` && self && self.self == self
                    ? self
                    : Function(`return this`)()),
                (_.Decimal = _)));
      })(_);
    })(),
  ),
  _ = (_) => _,
  _ = {
    "@@functional/placeholder": !0,
  },
  _ = (_) => _ === _,
  _ = (_) =>
    function _() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          _(arguments.length <= 0 ? void 0 : arguments[0]))
        ? _
        : _(...arguments);
    },
  _ = (_, _) =>
    _ === 1
      ? _
      : _(function () {
          var _ = [...arguments],
            _ = _.filter((_) => _ !== _).length;
          return _ >= _
            ? _(..._)
            : _(
                _ - _,
                _(function () {
                  var _ = [...arguments];
                  return _(..._.map((_) => (_(_) ? _.shift() : _)), ..._);
                }),
              );
        }),
  _ = (_) => _(_.length, _),
  _ = (_, _) => {
    for (var _ = [], _ = _; _ < _; ++_) _[_ - _] = _;
    return _;
  },
  _ = _((_, _) =>
    Array.isArray(_)
      ? _.map(_)
      : Object.keys(_)
          .map((_) => _[_])
          .map(_),
  ),
  _ = function () {
    var _ = [...arguments];
    if (!_.length) return _;
    var _ = _.reverse(),
      _ = _[0],
      _ = _.slice(1);
    return function () {
      return _.reduce((_, _) => _(_), _(...arguments));
    };
  },
  _ = (_) => (Array.isArray(_) ? _.reverse() : _.split(``).reverse().join(``)),
  _ = (_) => {
    var _ = null,
      _ = null;
    return function () {
      var _ = [...arguments];
      return (
        (_ && _.every((_, _) => _ === _?.[_])) || ((_ = _), (_ = _(..._))), _
      );
    };
  };
function _(_) {
  return _ === 0
    ? 1
    : Math.floor(new _.default(_).abs().log(10).toNumber()) + 1;
}
function _(_, _, _) {
  for (var _ = new _.default(_), _ = 0, _ = []; _._(_) && _ < 1e5;)
    (_.push(_.toNumber()), (_ = _.add(_)), _++);
  return _;
}
(_((_, _, _) => {
  var _ = +_;
  return _ + _ * (+_ - _);
}),
  _((_, _, _) => {
    var _ = _ - +_;
    return ((_ ||= 1 / 0), (_ - _) / _);
  }),
  _((_, _, _) => {
    var _ = _ - +_;
    return ((_ ||= 1 / 0), Math.max(0, Math.min(1, (_ - _) / _)));
  }));
var _ = (_) => {
    var [_, _] = _,
      [_, _] = [_, _];
    return (_ > _ && ([_, _] = [_, _]), [_, _]);
  },
  _ = (_, _, _) => {
    if (_.lte(0)) return new _.default(0);
    var _ = _(_.toNumber()),
      _ = new _.default(10).pow(_),
      _ = _.div(_),
      _ = _ === 1 ? 0.1 : 0.05,
      _ = new _.default(Math.ceil(_.div(_).toNumber())).add(_).mul(_).mul(_);
    return _
      ? new _.default(_.toNumber())
      : new _.default(Math.ceil(_.toNumber()));
  },
  _ = (_, _, _) => {
    var _ = new _.default(1),
      _ = new _.default(_);
    if (!_.isint() && _) {
      var _ = Math.abs(_);
      _ < 1
        ? ((_ = new _.default(10).pow(_(_) - 1)),
          (_ = new _.default(Math.floor(_.div(_).toNumber())).mul(_)))
        : _ > 1 && (_ = new _.default(Math.floor(_)));
    } else
      _ === 0
        ? (_ = new _.default(Math.floor((_ - 1) / 2)))
        : _ || (_ = new _.default(Math.floor(_)));
    var _ = Math.floor((_ - 1) / 2);
    return _(
      _((_) => _.add(new _.default(_ - _).mul(_)).toNumber()),
      _,
    )(0, _);
  },
  _ = function (_, _, _, _) {
    var _ = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((_ - _) / (_ - 1)))
      return {
        step: new _.default(0),
        tickMin: new _.default(0),
        tickMax: new _.default(0),
      };
    var _ = _(new _.default(_).sub(_).div(_ - 1), _, _),
      _;
    _ <= 0 && _ >= 0
      ? (_ = new _.default(0))
      : ((_ = new _.default(_).add(_).div(2)),
        (_ = _.sub(new _.default(_).mod(_))));
    var _ = Math.ceil(_.sub(_).div(_).toNumber()),
      _ = Math.ceil(new _.default(_).sub(_).div(_).toNumber()),
      _ = _ + _ + 1;
    return _ > _
      ? _(_, _, _, _, _ + 1)
      : (_ < _ &&
          ((_ = _ > 0 ? _ + (_ - _) : _), (_ = _ > 0 ? _ : _ + (_ - _))),
        {
          step: _,
          tickMin: _.sub(new _.default(_).mul(_)),
          tickMax: _.add(new _.default(_).mul(_)),
        });
  };
function _(_) {
  var [_, _] = _,
    _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    _ = Math.max(_, 2),
    [_, _] = _([_, _]);
  if (_ === -1 / 0 || _ === 1 / 0) {
    var _ =
      _ === 1 / 0
        ? [_, ..._(0, _ - 1).map(() => 1 / 0)]
        : [..._(0, _ - 1).map(() => -1 / 0), _];
    return _ > _ ? _(_) : _;
  }
  if (_ === _) return _(_, _, _);
  var { step: _, tickMin: _, tickMax: _ } = _(_, _, _, _, 0),
    _ = _(_, _.add(new _.default(0.1).mul(_)), _);
  return _ > _ ? _(_) : _;
}
function _(_, _) {
  var [_, _] = _,
    _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    [_, _] = _([_, _]);
  if (_ === -1 / 0 || _ === 1 / 0) return [_, _];
  if (_ === _) return [_];
  var _ = Math.max(_, 2),
    _ = _(new _.default(_).sub(_).div(_ - 1), _, 0),
    _ = [..._(new _.default(_), new _.default(_), _), _];
  return (_ === !1 && (_ = _.map((_) => Math.round(_))), _ > _ ? _(_) : _);
}
var _ = _(_),
  _ = _(_),
  _ = (_) => _.rootProps.maxBarSize,
  _ = (_) => _.rootProps.barGap,
  _ = (_) => _.rootProps.barCategoryGap,
  _ = (_) => _.rootProps.barSize,
  _ = (_) => _.rootProps.stackOffset,
  _ = (_) => _.options.chartName,
  _ = (_) => _.rootProps.syncId,
  _ = (_) => _.rootProps.syncMethod,
  _ = (_) => _.options.eventEmitter,
  _ = {
    allowDuplicatedCategory: !0,
    angleAxisId: 0,
    axisLine: !0,
    _: 0,
    _: 0,
    orientation: `outer`,
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickLine: !0,
    tickSize: 8,
    type: `category`,
  },
  _ = {
    allowDataOverflow: !1,
    allowDuplicatedCategory: !0,
    angle: 0,
    axisLine: !0,
    _: 0,
    _: 0,
    orientation: `right`,
    radiusAxisId: 0,
    scale: `auto`,
    stroke: `#ccc`,
    tick: !0,
    tickCount: 5,
    type: `number`,
  },
  _ = (_, _) => {
    if (_ && _) return _ != null && _.reversed ? [_[1], _[0]] : _;
  },
  _ = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    _: _.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: _.reversed,
    scale: _.scale,
    tick: _.tick,
    tickCount: void 0,
    ticks: void 0,
    type: _.type,
    unit: void 0,
  },
  _ = {
    allowDataOverflow: _.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: _.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    _: _.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: _.scale,
    tick: _.tick,
    tickCount: _.tickCount,
    ticks: void 0,
    type: _.type,
    unit: void 0,
  },
  _ = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: _.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    _: _.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: _.scale,
    tick: _.tick,
    tickCount: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
  },
  _ = {
    allowDataOverflow: _.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: _.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    _: _.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: _.scale,
    tick: _.tick,
    tickCount: _.tickCount,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  _ = (_, _) =>
    _.polarAxis.angleAxis[_] == null
      ? _.layout.layoutType === `radial`
        ? _
        : _
      : _.polarAxis.angleAxis[_],
  _ = (_, _) =>
    _.polarAxis.radiusAxis[_] == null
      ? _.layout.layoutType === `radial`
        ? _
        : _
      : _.polarAxis.radiusAxis[_],
  _ = (_) => _.polarOptions,
  _ = _([_, _, _], _),
  _ = _([_, _], (_, _) => {
    if (_ != null) return _(_.innerRadius, _, 0);
  }),
  _ = _([_, _], (_, _) => {
    if (_ != null) return _(_.outerRadius, _, _ * 0.8);
  }),
  _ = _([_], (_) => {
    if (_ == null) return [0, 0];
    var { startAngle: _, endAngle: _ } = _;
    return [_, _];
  }),
  _ = _([_, _], _),
  _ = _([_, _, _], (_, _, _) => {
    if (_ != null && _ != null && _ != null) return [_, _];
  }),
  _ = _([_, _], _),
  _ = _([_, _, _, _, _, _], (_, _, _, _, _, _) => {
    if (
      !(
        (_ !== `centric` && _ !== `radial`) ||
        _ == null ||
        _ == null ||
        _ == null
      )
    ) {
      var { _: _, _: _, startAngle: _, endAngle: _ } = _;
      return {
        _: _(_, _, _ / 2),
        _: _(_, _, _ / 2),
        innerRadius: _,
        outerRadius: _,
        startAngle: _,
        endAngle: _,
        clockWise: !1,
      };
    }
  }),
  _ = (_, _) => _,
  _ = (_, _, _) => _;
function _(_) {
  return _?._;
}
var _ = (_) => {
    var _ = _(_);
    return _ === `horizontal`
      ? `xAxis`
      : _ === `vertical`
        ? `yAxis`
        : _ === `centric`
          ? `angleAxis`
          : `radiusAxis`;
  },
  _ = (_) => _.tooltip.settings.axisId,
  _ = (_) => _(_, _(_), _(_)),
  _ = _([_], (_) => _?.dataKey);
function _(_, _, _) {
  var { chartData: _ = [] } = _,
    { allowDuplicatedCategory: _, dataKey: _ } = _,
    _ = new Map();
  return (
    _.forEach((_) => {
      var _ = _.data ?? _;
      if (_ != null && _.length !== 0) {
        var _ = _(_);
        _.forEach((_, _) => {
          var _ = _ == null || _ ? _ : String(_(_, _, null)),
            _ = _(_, _.dataKey, 0),
            _ = _.has(_) ? _.get(_) : {};
          (Object.assign(_, {
            [_]: _,
          }),
            _.set(_, _));
        });
      }
    }),
    Array.from(_.values())
  );
}
function _(_) {
  return _.stackId != null && _.dataKey != null;
}
var _ = (_, _) =>
  _ === _ ? !0 : _ == null || _ == null ? !1 : _[0] === _[0] && _[1] === _[1];
function _(_, _) {
  return Array.isArray(_) &&
    Array.isArray(_) &&
    _.length === 0 &&
    _.length === 0
    ? !0
    : _ === _;
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = [0, `auto`],
  _ = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: void 0,
    height: 30,
    hide: !0,
    _: 0,
    includeHidden: !1,
    interval: `preserveEnd`,
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: `bottom`,
    padding: {
      left: 0,
      right: 0,
    },
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  _ = (_, _) => _.cartesianAxis.xAxis[_],
  _ = (_, _) => _(_, _) ?? _,
  _ = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: _,
    hide: !0,
    _: 0,
    includeHidden: !1,
    interval: `preserveEnd`,
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: `left`,
    padding: {
      top: 0,
      bottom: 0,
    },
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
    width: 60,
  },
  _ = (_, _) => _.cartesianAxis.yAxis[_],
  _ = (_, _) => _(_, _) ?? _,
  _ = {
    domain: [0, `auto`],
    includeHidden: !1,
    reversed: !1,
    allowDataOverflow: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    _: 0,
    name: ``,
    range: [64, 64],
    scale: `auto`,
    type: `number`,
    unit: ``,
  },
  _ = (_, _) => _.cartesianAxis.zAxis[_] ?? _,
  _ = (_, _, _) => {
    switch (_) {
      case `xAxis`:
        return _(_, _);
      case `yAxis`:
        return _(_, _);
      case `zAxis`:
        return _(_, _);
      case `angleAxis`:
        return _(_, _);
      case `radiusAxis`:
        return _(_, _);
      default:
        throw Error(`Unexpected axis type: ${_}`);
    }
  },
  _ = (_, _, _) => {
    switch (_) {
      case `xAxis`:
        return _(_, _);
      case `yAxis`:
        return _(_, _);
      default:
        throw Error(`Unexpected axis type: ${_}`);
    }
  },
  _ = (_, _, _) => {
    switch (_) {
      case `xAxis`:
        return _(_, _);
      case `yAxis`:
        return _(_, _);
      case `angleAxis`:
        return _(_, _);
      case `radiusAxis`:
        return _(_, _);
      default:
        throw Error(`Unexpected axis type: ${_}`);
    }
  },
  _ = (_) =>
    _.graphicalItems.cartesianItems.some((_) => _.type === `bar`) ||
    _.graphicalItems.polarItems.some((_) => _.type === `radialBar`);
function _(_, _) {
  return (_) => {
    switch (_) {
      case `xAxis`:
        return `xAxisId` in _ && _.xAxisId === _;
      case `yAxis`:
        return `yAxisId` in _ && _.yAxisId === _;
      case `zAxis`:
        return `zAxisId` in _ && _.zAxisId === _;
      case `angleAxis`:
        return `angleAxisId` in _ && _.angleAxisId === _;
      case `radiusAxis`:
        return `radiusAxisId` in _ && _.radiusAxisId === _;
      default:
        return !1;
    }
  };
}
var _ = (_) => _.graphicalItems.cartesianItems,
  _ = _([_, _], _),
  _ = (_, _, _) =>
    _.filter(_).filter((_) => _?.includeHidden === !0 || !_.hide),
  _ = _([_, _, _], _, {
    memoizeOptions: {
      resultEqualityCheck: _,
    },
  }),
  _ = _([_], (_) =>
    _.filter((_) => _.type === `area` || _.type === `bar`).filter(_),
  ),
  _ = (_) => _.filter((_) => !(`stackId` in _) || _.stackId === void 0),
  _ = _([_], _),
  _ = (_) =>
    _.map((_) => _.data)
      .filter(Boolean)
      .flat(1),
  _ = _([_], _, {
    memoizeOptions: {
      resultEqualityCheck: _,
    },
  }),
  _ = (_, _) => {
    var { chartData: _ = [], dataStartIndex: _, dataEndIndex: _ } = _;
    return _.length > 0 ? _ : _.slice(_, _ + 1);
  },
  _ = _([_, _], _),
  _ = (_, _, _) =>
    _?.dataKey == null
      ? _.length > 0
        ? _.map((_) => _.dataKey).flatMap((_) =>
            _.map((_) => ({
              value: _(_, _),
            })),
          )
        : _.map((_) => ({
            value: _,
          }))
      : _.map((_) => ({
          value: _(_, _.dataKey),
        })),
  _ = _([_, _, _], _);
function _(_, _) {
  switch (_) {
    case `xAxis`:
      return _.direction === `x`;
    case `yAxis`:
      return _.direction === `y`;
    default:
      return !1;
  }
}
function _(_) {
  if (_(_) || _ instanceof Date) {
    var _ = Number(_);
    if (_(_)) return _;
  }
}
function _(_) {
  if (Array.isArray(_)) {
    var _ = [_(_[0]), _(_[1])];
    return _(_) ? _ : void 0;
  }
  var _ = _(_);
  if (_ != null) return [_, _];
}
function _(_) {
  return _.map(_).filter(_);
}
function _(_, _, _) {
  return !_ || typeof _ != `number` || _(_) || !_.length
    ? []
    : _(
        _.flatMap((_) => {
          var _ = _(_, _.dataKey),
            _,
            _;
          if ((Array.isArray(_) ? ([_, _] = _) : (_ = _ = _), _(_) && _(_)))
            return [_ - _, _ + _];
        }),
      );
}
var _ = _([_, _, _], _),
  _ = (_, _, _) => {
    var _ = _.reduce(
      (_, _) => (
        _.stackId == null ||
          (_[_.stackId] ?? (_[_.stackId] = []), _[_.stackId].push(_)),
        _
      ),
      {},
    );
    return Object.fromEntries(
      Object.entries(_).map((_) => {
        var [_, _] = _;
        return [
          _,
          {
            stackedData: _(_, _.map(_), _),
            graphicalItems: _,
          },
        ];
      }),
    );
  },
  _ = _([_, _, _], _),
  _ = (_, _, _, _) => {
    var { dataStartIndex: _, dataEndIndex: _ } = _;
    if (_ == null && _ !== `zAxis`) {
      var _ = _(_, _, _);
      if (_ == null || _[0] !== 0 || _[1] !== 0) return _;
    }
  },
  _ = _([_], (_) => _.allowDataOverflow),
  _ = (_) => {
    if (_ == null || !(`domain` in _)) return _;
    if (_.domain != null) return _.domain;
    if (_.ticks != null) {
      if (_.type === `number`) {
        var _ = _(_.ticks);
        return [Math.min(..._), Math.max(..._)];
      }
      if (_.type === `category`) return _.ticks.map(String);
    }
    return _?.domain ?? _;
  },
  _ = _([_], _),
  _ = _([_, _], _),
  _ = _([_, _, _, _], _, {
    memoizeOptions: {
      resultEqualityCheck: _,
    },
  }),
  _ = (_) => _.errorBars,
  _ = (_, _, _) =>
    _.flatMap((_) => _[_._])
      .filter(Boolean)
      .filter((_) => _(_, _)),
  _ = function () {
    var _ = [...arguments].filter(Boolean);
    if (_.length !== 0) {
      var _ = _.flat();
      return [Math.min(..._), Math.max(..._)];
    }
  },
  _ = (_, _, _, _, _) => {
    var _, _;
    if (
      (_.length > 0 &&
        _.forEach((_) => {
          _.forEach((_) => {
            var _ = _[_._]?.filter((_) => _(_, _)),
              _ = _(_, _.dataKey ?? _.dataKey),
              _ = _(_, _, _);
            if (_.length >= 2) {
              var _ = Math.min(..._),
                _ = Math.max(..._);
              ((_ == null || _ < _) && (_ = _),
                (_ == null || _ > _) && (_ = _));
            }
            var _ = _(_);
            _ != null &&
              ((_ = _ == null ? _[0] : Math.min(_, _[0])),
              (_ = _ == null ? _[1] : Math.max(_, _[1])));
          });
        }),
      _?.dataKey != null &&
        _.forEach((_) => {
          var _ = _(_(_, _.dataKey));
          _ != null &&
            ((_ = _ == null ? _[0] : Math.min(_, _[0])),
            (_ = _ == null ? _[1] : Math.max(_, _[1])));
        }),
      _(_) && _(_))
    )
      return [_, _];
  },
  _ = _([_, _, _, _, _], _, {
    memoizeOptions: {
      resultEqualityCheck: _,
    },
  });
function _(_) {
  var { value: _ } = _;
  if (_(_) || _ instanceof Date) return _;
}
var _ = (_, _, _) => {
    var _ = _.map(_).filter((_) => _ != null);
    return _ && (_.dataKey == null || (_.allowDuplicatedCategory && _(_)))
      ? (0, _.default)(0, _.length)
      : _.allowDuplicatedCategory
        ? _
        : Array.from(new Set(_));
  },
  _ = (_) => _.referenceElements.dots,
  _ = (_, _, _) =>
    _.filter((_) => _.ifOverflow === `extendDomain`).filter((_) =>
      _ === `xAxis` ? _.xAxisId === _ : _.yAxisId === _,
    ),
  _ = _([_, _, _], _),
  _ = (_) => _.referenceElements.areas,
  _ = _([_, _, _], _),
  _ = (_) => _.referenceElements.lines,
  _ = _([_, _, _], _),
  _ = (_, _) => {
    var _ = _(_.map((_) => (_ === `xAxis` ? _._ : _._)));
    if (_.length !== 0) return [Math.min(..._), Math.max(..._)];
  },
  _ = _(_, _, _),
  _ = (_, _) => {
    var _ = _(
      _.flatMap((_) => [_ === `xAxis` ? _._ : _._, _ === `xAxis` ? _._ : _._]),
    );
    if (_.length !== 0) return [Math.min(..._), Math.max(..._)];
  },
  _ = _([_, _], _),
  _ = (_, _) => {
    var _ = _(_.map((_) => (_ === `xAxis` ? _._ : _._)));
    if (_.length !== 0) return [Math.min(..._), Math.max(..._)];
  },
  _ = _(_, _(_, _, _), _, (_, _, _) => _(_, _, _)),
  _ = (_, _, _, _, _, _, _, _) =>
    _ ??
    _(
      _,
      (_ === `vertical` && _ === `xAxis`) ||
        (_ === `horizontal` && _ === `yAxis`)
        ? _(_, _, _)
        : _(_, _),
      _.allowDataOverflow,
    ),
  _ = _([_, _, _, _, _, _, _, _], _, {
    memoizeOptions: {
      resultEqualityCheck: _,
    },
  }),
  _ = [0, 1],
  _ = (_, _, _, _, _, _, _) => {
    if ((_ != null && _ != null && _.length !== 0) || _ !== void 0) {
      var { dataKey: _, type: _ } = _,
        _ = _(_, _);
      return _ && _ == null
        ? (0, _.default)(0, _.length)
        : _ === `category`
          ? _(_, _, _)
          : _ === `expand`
            ? _
            : _;
    }
  },
  _ = _([_, _, _, _, _, _, _], _),
  _ = (_, _, _, _, _) => {
    if (_ != null) {
      var { scale: _, type: _ } = _;
      if (_ === `auto`)
        return _ === `radial` && _ === `radiusAxis`
          ? `band`
          : _ === `radial` && _ === `angleAxis`
            ? `linear`
            : _ === `category` &&
                _ &&
                (_.indexOf(`LineChart`) >= 0 ||
                  _.indexOf(`AreaChart`) >= 0 ||
                  (_.indexOf(`ComposedChart`) >= 0 && !_))
              ? `point`
              : _ === `category`
                ? `band`
                : `linear`;
      if (typeof _ == `string`) {
        var _ = `scale${_(_)}`;
        return _ in _ ? _ : `point`;
      }
    }
  },
  _ = _([_, _, _, _, _], _);
function _(_) {
  if (_ != null) {
    if (_ in _) return _[_]();
    var _ = `scale${_(_)}`;
    if (_ in _) return _[_]();
  }
}
function _(_, _, _, _) {
  if (_ != null && _ != null) {
    if (typeof _.scale == `function`) return _.scale.copy().domain(_).range(_);
    var _ = _(_);
    if (_ != null) {
      var _ = _.domain(_).range(_);
      return (_(_), _);
    }
  }
}
var _ = (_, _, _) => {
    var _ = _(_);
    if (_ === `auto` || _ === `linear`) {
      if (
        _ != null &&
        _.tickCount &&
        Array.isArray(_) &&
        (_[0] === `auto` || _[1] === `auto`) &&
        _(_)
      )
        return _(_, _.tickCount, _.allowDecimals);
      if (_ != null && _.tickCount && _.type === `number` && _(_))
        return _(_, _.tickCount, _.allowDecimals);
    }
  },
  _ = _([_, _, _], _),
  _ = (_, _, _, _) => {
    if (
      _ !== `angleAxis` &&
      _?.type === `number` &&
      _(_) &&
      Array.isArray(_) &&
      _.length > 0
    ) {
      var _ = _[0],
        _ = _[0],
        _ = _[1],
        _ = _[_.length - 1];
      return [Math.min(_, _), Math.max(_, _)];
    }
    return _;
  },
  _ = _([_, _, _, _], _),
  _ = _(
    _(_, _, (_, _) => {
      if (_ && _.type === `number`) {
        var _ = 1 / 0,
          _ = Array.from(_(_.map((_) => _.value))).sort((_, _) => _ - _);
        if (_.length < 2) return 1 / 0;
        var _ = _[_.length - 1] - _[0];
        if (_ === 0) return 1 / 0;
        for (var _ = 0; _ < _.length - 1; _++) {
          var _ = _[_ + 1] - _[_];
          _ = Math.min(_, _);
        }
        return _ / _;
      }
    }),
    _,
    _,
    _,
    (_, _, _, _) => _,
    (_, _, _, _, _) => {
      if (!_(_)) return 0;
      var _ = _ === `vertical` ? _.height : _.width;
      if (_ === `gap`) return (_ * _) / 2;
      if (_ === `no-gap`) {
        var _ = _(_, _ * _),
          _ = (_ * _) / 2;
        return _ - _ - ((_ - _) / _) * _;
      }
      return 0;
    },
  ),
  _ = (_, _) => {
    var _ = _(_, _);
    return _ == null || typeof _.padding != `string`
      ? 0
      : _(_, `xAxis`, _, _.padding);
  },
  _ = (_, _) => {
    var _ = _(_, _);
    return _ == null || typeof _.padding != `string`
      ? 0
      : _(_, `yAxis`, _, _.padding);
  },
  _ = _(_, _, (_, _) => {
    if (_ == null)
      return {
        left: 0,
        right: 0,
      };
    var { padding: _ } = _;
    return typeof _ == `string`
      ? {
          left: _,
          right: _,
        }
      : {
          left: (_.left ?? 0) + _,
          right: (_.right ?? 0) + _,
        };
  }),
  _ = _(_, _, (_, _) => {
    if (_ == null)
      return {
        top: 0,
        bottom: 0,
      };
    var { padding: _ } = _;
    return typeof _ == `string`
      ? {
          top: _,
          bottom: _,
        }
      : {
          top: (_.top ?? 0) + _,
          bottom: (_.bottom ?? 0) + _,
        };
  }),
  _ = _([_, _, _, _, (_, _, _) => _], (_, _, _, _, _) => {
    var { padding: _ } = _;
    return _
      ? [_.left, _.width - _.right]
      : [_.left + _.left, _.left + _.width - _.right];
  }),
  _ = _([_, _, _, _, _, (_, _, _) => _], (_, _, _, _, _, _) => {
    var { padding: _ } = _;
    return _
      ? [_.height - _.bottom, _.top]
      : _ === `horizontal`
        ? [_.top + _.height - _.bottom, _.top + _.top]
        : [_.top + _.top, _.top + _.height - _.bottom];
  }),
  _ = (_, _, _, _) => {
    switch (_) {
      case `xAxis`:
        return _(_, _, _);
      case `yAxis`:
        return _(_, _, _);
      case `zAxis`:
        return _(_, _)?.range;
      case `angleAxis`:
        return _(_);
      case `radiusAxis`:
        return _(_, _);
      default:
        return;
    }
  },
  _ = _([_, _], _),
  _ = _([_, _, _, _], _);
_([_, _, _], _);
function _(_, _) {
  return _._ < _._ ? -1 : +(_._ > _._);
}
var _ = (_, _) => _,
  _ = (_, _, _) => _,
  _ = _(_, _, _, (_, _, _) =>
    _.filter((_) => _.orientation === _)
      .filter((_) => _.mirror === _)
      .sort(_),
  ),
  _ = _(_, _, _, (_, _, _) =>
    _.filter((_) => _.orientation === _)
      .filter((_) => _.mirror === _)
      .sort(_),
  ),
  _ = (_, _) => ({
    width: _.width,
    height: _.height,
  }),
  _ = (_, _) => ({
    width: typeof _.width == `number` ? _.width : 60,
    height: _.height,
  }),
  _ = _(_, _, _),
  _ = (_, _, _) => {
    switch (_) {
      case `top`:
        return _.top;
      case `bottom`:
        return _ - _.bottom;
      default:
        return 0;
    }
  },
  _ = (_, _, _) => {
    switch (_) {
      case `left`:
        return _.left;
      case `right`:
        return _ - _.right;
      default:
        return 0;
    }
  },
  _ = _(_, _, _, _, _, (_, _, _, _, _) => {
    var _ = {},
      _;
    return (
      _.forEach((_) => {
        var _ = _(_, _);
        _ ??= _(_, _, _);
        var _ = (_ === `top` && !_) || (_ === `bottom` && _);
        ((_[_._] = _ - Number(_) * _.height), (_ += (_ ? -1 : 1) * _.height));
      }),
      _
    );
  }),
  _ = _(_, _, _, _, _, (_, _, _, _, _) => {
    var _ = {},
      _;
    return (
      _.forEach((_) => {
        var _ = _(_, _);
        _ ??= _(_, _, _);
        var _ = (_ === `left` && !_) || (_ === `right` && _);
        ((_[_._] = _ - Number(_) * _.width), (_ += (_ ? -1 : 1) * _.width));
      }),
      _
    );
  }),
  _ = _(
    [
      _,
      _,
      (_, _) => {
        var _ = _(_, _);
        if (_ != null) return _(_, _.orientation, _.mirror);
      },
      (_, _) => _,
    ],
    (_, _, _, _) => {
      if (_ != null) {
        var _ = _?.[_];
        return _ == null
          ? {
              _: _.left,
              _: 0,
            }
          : {
              _: _.left,
              _: _,
            };
      }
    },
  ),
  _ = _(
    [
      _,
      _,
      (_, _) => {
        var _ = _(_, _);
        if (_ != null) return _(_, _.orientation, _.mirror);
      },
      (_, _) => _,
    ],
    (_, _, _, _) => {
      if (_ != null) {
        var _ = _?.[_];
        return _ == null
          ? {
              _: 0,
              _: _.top,
            }
          : {
              _: _,
              _: _.top,
            };
      }
    },
  ),
  _ = _(_, _, (_, _) => ({
    width: typeof _.width == `number` ? _.width : 60,
    height: _.height,
  })),
  _ = (_, _, _) => {
    switch (_) {
      case `xAxis`:
        return _(_, _).width;
      case `yAxis`:
        return _(_, _).height;
      default:
        return;
    }
  },
  _ = (_, _, _, _) => {
    if (_ != null) {
      var { allowDuplicatedCategory: _, type: _, dataKey: _ } = _,
        _ = _(_, _),
        _ = _.map((_) => _.value);
      if (_ && _ && _ === `category` && _ && _(_)) return _;
    }
  },
  _ = _([_, _, _, _], _),
  _ = (_, _, _, _) => {
    if (_ != null && _.dataKey != null) {
      var { type: _, scale: _ } = _;
      if (_(_, _) && (_ === `number` || _ !== `auto`))
        return _.map((_) => _.value);
    }
  },
  _ = _([_, _, _, _], _),
  _ = _([_, _, _, _, _, _, _, _, _], (_, _, _, _, _, _, _, _, _) => {
    if (_ == null) return null;
    var _ = _(_, _);
    return {
      angle: _.angle,
      interval: _.interval,
      minTickGap: _.minTickGap,
      orientation: _.orientation,
      tick: _.tick,
      tickCount: _.tickCount,
      tickFormatter: _.tickFormatter,
      ticks: _.ticks,
      type: _.type,
      unit: _.unit,
      axisType: _,
      categoricalDomain: _,
      duplicateDomain: _,
      isCategorical: _,
      niceTicks: _,
      range: _,
      realScaleType: _,
      scale: _,
    };
  }),
  _ = (_, _, _, _, _, _, _, _, _) => {
    if (_ != null && _ != null) {
      var _ = _(_, _),
        { type: _, ticks: _, tickCount: _ } = _,
        _ =
          _ === `scaleBand` && typeof _.bandwidth == `function`
            ? _.bandwidth() / 2
            : 2,
        _ = _ === `category` && _.bandwidth ? _.bandwidth() / _ : 0;
      _ =
        _ === `angleAxis` && _ != null && _.length >= 2
          ? _(_[0] - _[1]) * 2 * _
          : _;
      var _ = _ || _;
      return _
        ? _.map((_, _) => ({
            index: _,
            coordinate: _(_ ? _.indexOf(_) : _) + _,
            value: _,
            offset: _,
          })).filter((_) => !_(_.coordinate))
        : _ && _
          ? _.map((_, _) => ({
              coordinate: _(_) + _,
              value: _,
              index: _,
              offset: _,
            }))
          : _.ticks
            ? _.ticks(_).map((_) => ({
                coordinate: _(_) + _,
                value: _,
                offset: _,
              }))
            : _.domain().map((_, _) => ({
                coordinate: _(_) + _,
                value: _ ? _[_] : _,
                index: _,
                offset: _,
              }));
    }
  },
  _ = _([_, _, _, _, _, _, _, _, _], _),
  _ = (_, _, _, _, _, _, _) => {
    if (_ != null && _ != null && _ != null && _[0] !== _[1]) {
      var _ = _(_, _),
        { tickCount: _ } = _,
        _ = 0;
      return (
        (_ = _ === `angleAxis` && _?.length >= 2 ? _(_[0] - _[1]) * 2 * _ : _),
        _ && _
          ? _.map((_, _) => ({
              coordinate: _(_) + _,
              value: _,
              index: _,
              offset: _,
            }))
          : _.ticks
            ? _.ticks(_).map((_) => ({
                coordinate: _(_) + _,
                value: _,
                offset: _,
              }))
            : _.domain().map((_, _) => ({
                coordinate: _(_) + _,
                value: _ ? _[_] : _,
                index: _,
                offset: _,
              }))
      );
    }
  },
  _ = _([_, _, _, _, _, _, _], _),
  _ = _(_, _, (_, _) => {
    if (_ != null && _ != null)
      return _(
        _({}, _),
        {},
        {
          scale: _,
        },
      );
  });
_(
  (_, _, _) => _(_, _),
  _([_, _, _, _], _),
  (_, _) => {
    if (_ != null && _ != null)
      return _(
        _({}, _),
        {},
        {
          scale: _,
        },
      );
  },
);
var _ = _([_, _, _], (_, _, _) => {
    switch (_) {
      case `horizontal`:
        return _.some((_) => _.reversed) ? `right-to-left` : `left-to-right`;
      case `vertical`:
        return _.some((_) => _.reversed) ? `bottom-to-top` : `top-to-bottom`;
      case `centric`:
      case `radial`:
        return `left-to-right`;
      default:
        return;
    }
  }),
  _ = (_) => _.options.defaultTooltipEventType,
  _ = (_) => _.options.validateTooltipEventTypes;
function _(_, _, _) {
  if (_ == null) return _;
  var _ = _ ? `axis` : `item`;
  return _ == null ? _ : _.includes(_) ? _ : _;
}
function _(_, _) {
  return _(_, _(_), _(_));
}
function _(_) {
  return _((_) => _(_, _));
}
var _ = (_, _) => {
    var _,
      _ = Number(_);
    if (!(_(_) || _ == null))
      return _ >= 0
        ? _ == null || (_ = _[_]) == null
          ? void 0
          : _.value
        : void 0;
  },
  _ = (_) => _.tooltip.settings,
  _ = {
    active: !1,
    index: null,
    dataKey: void 0,
    coordinate: void 0,
  },
  _ = _({
    name: `tooltip`,
    initialState: {
      itemInteraction: {
        click: _,
        hover: _,
      },
      axisInteraction: {
        click: _,
        hover: _,
      },
      keyboardInteraction: _,
      syncInteraction: {
        active: !1,
        index: null,
        dataKey: void 0,
        label: void 0,
        coordinate: void 0,
        sourceViewBox: void 0,
      },
      tooltipItemPayloads: [],
      settings: {
        shared: void 0,
        trigger: `hover`,
        axisId: 0,
        active: !1,
        defaultIndex: void 0,
      },
    },
    reducers: {
      addTooltipEntrySettings: {
        reducer(_, _) {
          _.tooltipItemPayloads.push(_(_.payload));
        },
        prepare: _(),
      },
      removeTooltipEntrySettings: {
        reducer(_, _) {
          var _ = _(_).tooltipItemPayloads.indexOf(_(_.payload));
          _ > -1 && _.tooltipItemPayloads.splice(_, 1);
        },
        prepare: _(),
      },
      setTooltipSettingsState(_, _) {
        _.settings = _.payload;
      },
      setActiveMouseOverItemIndex(_, _) {
        ((_.syncInteraction.active = !1),
          (_.keyboardInteraction.active = !1),
          (_.itemInteraction.hover.active = !0),
          (_.itemInteraction.hover.index = _.payload.activeIndex),
          (_.itemInteraction.hover.dataKey = _.payload.activeDataKey),
          (_.itemInteraction.hover.coordinate = _.payload.activeCoordinate));
      },
      mouseLeaveChart(_) {
        ((_.itemInteraction.hover.active = !1),
          (_.axisInteraction.hover.active = !1));
      },
      mouseLeaveItem(_) {
        _.itemInteraction.hover.active = !1;
      },
      setActiveClickItemIndex(_, _) {
        ((_.syncInteraction.active = !1),
          (_.itemInteraction.click.active = !0),
          (_.keyboardInteraction.active = !1),
          (_.itemInteraction.click.index = _.payload.activeIndex),
          (_.itemInteraction.click.dataKey = _.payload.activeDataKey),
          (_.itemInteraction.click.coordinate = _.payload.activeCoordinate));
      },
      setMouseOverAxisIndex(_, _) {
        ((_.syncInteraction.active = !1),
          (_.axisInteraction.hover.active = !0),
          (_.keyboardInteraction.active = !1),
          (_.axisInteraction.hover.index = _.payload.activeIndex),
          (_.axisInteraction.hover.dataKey = _.payload.activeDataKey),
          (_.axisInteraction.hover.coordinate = _.payload.activeCoordinate));
      },
      setMouseClickAxisIndex(_, _) {
        ((_.syncInteraction.active = !1),
          (_.keyboardInteraction.active = !1),
          (_.axisInteraction.click.active = !0),
          (_.axisInteraction.click.index = _.payload.activeIndex),
          (_.axisInteraction.click.dataKey = _.payload.activeDataKey),
          (_.axisInteraction.click.coordinate = _.payload.activeCoordinate));
      },
      setSyncInteraction(_, _) {
        _.syncInteraction = _.payload;
      },
      setKeyboardInteraction(_, _) {
        ((_.keyboardInteraction.active = _.payload.active),
          (_.keyboardInteraction.index = _.payload.activeIndex),
          (_.keyboardInteraction.coordinate = _.payload.activeCoordinate),
          (_.keyboardInteraction.dataKey = _.payload.activeDataKey));
      },
    },
  }),
  {
    addTooltipEntrySettings: _,
    removeTooltipEntrySettings: _,
    setTooltipSettingsState: _,
    setActiveMouseOverItemIndex: _,
    mouseLeaveItem: _,
    mouseLeaveChart: _,
    setActiveClickItemIndex: _,
    setMouseOverAxisIndex: _,
    setMouseClickAxisIndex: _,
    setSyncInteraction: _,
    setKeyboardInteraction: _,
  } = _.actions,
  _ = _.reducer;
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_, _, _) {
  return _ === `axis`
    ? _ === `click`
      ? _.axisInteraction.click
      : _.axisInteraction.hover
    : _ === `click`
      ? _.itemInteraction.click
      : _.itemInteraction.hover;
}
function _(_) {
  return _.index != null;
}
var _ = (_, _, _, _) => {
    if (_ == null) return _;
    var _ = _(_, _, _);
    if (_ == null) return _;
    if (_.active) return _;
    if (_.keyboardInteraction.active) return _.keyboardInteraction;
    if (_.syncInteraction.active && _.syncInteraction.index != null)
      return _.syncInteraction;
    var _ = _.settings.active === !0;
    if (_(_)) {
      if (_)
        return _(
          _({}, _),
          {},
          {
            active: !0,
          },
        );
    } else if (_ != null)
      return {
        active: !0,
        coordinate: void 0,
        dataKey: void 0,
        index: _,
      };
    return _(
      _({}, _),
      {},
      {
        coordinate: _.coordinate,
      },
    );
  },
  _ = (_, _) => {
    var _ = _?.index;
    if (_ == null) return null;
    var _ = Number(_);
    if (!_(_)) return _;
    var _ = 0,
      _ = 1 / 0;
    return (
      _.length > 0 && (_ = _.length - 1), String(Math.max(_, Math.min(_, _)))
    );
  },
  _ = (_, _, _, _, _, _, _, _) => {
    if (_ != null && _ != null) {
      var _ = _[0],
        _ = _ == null ? void 0 : _(_.positions, _);
      if (_ != null) return _;
      var _ = _?.[Number(_)];
      if (_)
        switch (_) {
          case `horizontal`:
            return {
              _: _.coordinate,
              _: (_.top + _) / 2,
            };
          default:
            return {
              _: (_.left + _) / 2,
              _: _.coordinate,
            };
        }
    }
  },
  _ = (_, _, _, _) => {
    if (_ === `axis`) return _.tooltipItemPayloads;
    if (_.tooltipItemPayloads.length === 0) return [];
    var _ =
      _ === `hover`
        ? _.itemInteraction.hover.dataKey
        : _.itemInteraction.click.dataKey;
    return _ == null && _ != null
      ? [_.tooltipItemPayloads[0]]
      : _.tooltipItemPayloads.filter((_) => _.settings?.dataKey === _);
  },
  _ = (_) => _.options.tooltipPayloadSearcher,
  _ = (_) => _.tooltip;
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_, _) {
  return _ ?? _;
}
var _ = (_, _, _, _, _, _, _) => {
    if (_ != null && _ != null) {
      var {
        chartData: _,
        computedData: _,
        dataStartIndex: _,
        dataEndIndex: _,
      } = _;
      return _.reduce((_, _) => {
        var { dataDefinedOnItem: _, settings: _ } = _,
          _ = _(_, _),
          _ = Array.isArray(_) ? _(_, _, _) : _,
          _ = _?.dataKey ?? _,
          _ = _?.nameKey,
          _ =
            _ && Array.isArray(_) && !Array.isArray(_[0]) && _ === `axis`
              ? _(_, _, _)
              : _(_, _, _, _);
        return (
          Array.isArray(_)
            ? _.forEach((_) => {
                var _ = _(
                  _({}, _),
                  {},
                  {
                    name: _.name,
                    unit: _.unit,
                    color: void 0,
                    fill: void 0,
                  },
                );
                _.push(
                  _({
                    tooltipEntrySettings: _,
                    dataKey: _.dataKey,
                    payload: _.payload,
                    value: _(_.payload, _.dataKey),
                    name: _.name,
                  }),
                );
              })
            : _.push(
                _({
                  tooltipEntrySettings: _,
                  dataKey: _,
                  payload: _,
                  value: _(_, _),
                  name: _(_, _) ?? _?.name,
                }),
              ),
          _
        );
      }, []);
    }
  },
  _ = _([_, _, _, _, _], _),
  _ = _(
    [
      _(
        [
          (_) => _.graphicalItems.cartesianItems,
          (_) => _.graphicalItems.polarItems,
        ],
        (_, _) => [..._, ..._],
      ),
      _,
      _([_, _], _),
    ],
    _,
    {
      memoizeOptions: {
        resultEqualityCheck: _,
      },
    },
  ),
  _ = _([_], (_) => _.filter(_)),
  _ = _(
    [
      _([_], _, {
        memoizeOptions: {
          resultEqualityCheck: _,
        },
      }),
      _,
    ],
    _,
  ),
  _ = _([_, _, _], _),
  _ = _([_, _, _], _),
  _ = _([_], _),
  _ = _([_, _([_], (_) => _.allowDataOverflow)], _),
  _ = _([_([_, _([_], (_) => _.filter(_)), _], _), _, _, _], _),
  _ = _([_, _, _([_], _), _, _], _, {
    memoizeOptions: {
      resultEqualityCheck: _,
    },
  }),
  _ = _([_([_, _, _], _), _], _),
  _ = _([_([_, _, _], _), _], _),
  _ = _(
    [
      _,
      _,
      _,
      _,
      _,
      _,
      _([_, _, _, _, _, _([_, _([_([_, _, _], _), _], _), _], _), _, _], _),
    ],
    _,
  ),
  _ = _([_, _, _([_, _, _], _), _], _),
  _ = (_) => _(_, _(_), _(_), !1),
  _ = _([_, _], _),
  _ = _([_, _, _, _], _),
  _ = _(
    [_, _, _, _, _, _([_, _, _, _], _), _([_, _, _, _], _), _],
    (_, _, _, _, _, _, _, _) => {
      if (_) {
        var { type: _ } = _,
          _ = _(_, _);
        if (_) {
          var _ = _ === `scaleBand` && _.bandwidth ? _.bandwidth() / 2 : 2,
            _ = _ === `category` && _.bandwidth ? _.bandwidth() / _ : 0;
          return (
            (_ =
              _ === `angleAxis` && _ != null && _?.length >= 2
                ? _(_[0] - _[1]) * 2 * _
                : _),
            _ && _
              ? _.map((_, _) => ({
                  coordinate: _(_) + _,
                  value: _,
                  index: _,
                  offset: _,
                }))
              : _.domain().map((_, _) => ({
                  coordinate: _(_) + _,
                  value: _ ? _[_] : _,
                  index: _,
                  offset: _,
                }))
          );
        }
      }
    },
  ),
  _ = _([_, _, _], (_, _, _) => _(_.shared, _, _)),
  _ = (_) => _.tooltip.settings.trigger,
  _ = (_) => _.tooltip.settings.defaultIndex,
  _ = _([_, _, _, _], _),
  _ = _([_, _], _),
  _ = _([_, _], _),
  _ = _([_], (_) => {
    if (_) return _.dataKey;
  }),
  _ = _([_, _, _, _], _),
  _ = _([_, _([_, _, _, _, _, _, _, _], _)], (_, _) =>
    _ != null && _.coordinate ? _.coordinate : _,
  ),
  _ = _([_], (_) => _.active),
  _ = _([_([_, _, _, _, _, _, _], _)], (_) => {
    if (_ != null) {
      var _ = _.map((_) => _.payload).filter((_) => _ != null);
      return Array.from(new Set(_));
    }
  });
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = () => _(_),
  _ = () => {
    var _ = _(),
      _ = _(_),
      _ = _(_);
    return _(
      _(
        _({}, _),
        {},
        {
          scale: _,
        },
      ),
      _,
    );
  },
  _ = () => _(_),
  _ = (_, _) => _,
  _ = (_, _, _) => _,
  _ = (_, _, _, _) => _,
  _ = _(_, (_) => (0, _.default)(_, (_) => _.coordinate)),
  _ = _([_, _, _, _], _),
  _ = _([_, _], _),
  _ = (_, _, _) => {
    if (_ != null) {
      var _ = _(_);
      return _ === `axis`
        ? _ === `hover`
          ? _.axisInteraction.hover.dataKey
          : _.axisInteraction.click.dataKey
        : _ === `hover`
          ? _.itemInteraction.hover.dataKey
          : _.itemInteraction.click.dataKey;
    }
  },
  _ = _([_, _, _, _], _),
  _ = _([_, _, _, _, _, _, _, _], _),
  _ = _([_, _], (_, _) => _.coordinate ?? _),
  _ = _(_, _, _),
  _ = _([_, _, _, _, _, _, _], _),
  _ = _([_], (_) => ({
    isActive: _.active,
    activeIndex: _.index,
  })),
  _ = (_, _, _, _, _, _, _, _) => {
    if (_ && _ && _ && _ && _) {
      var _ = _(_.chartX, _.chartY, _, _, _);
      if (_) {
        var _ = _(_(_, _), _, _, _, _),
          _ = _(_, _, _, _);
        return {
          activeIndex: String(_),
          activeCoordinate: _,
        };
      }
    }
  };
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_) {
  var {
      coordinate: _,
      payload: _,
      index: _,
      offset: _,
      tooltipAxisBandSize: _,
      layout: _,
      cursor: _,
      tooltipEventType: _,
      chartName: _,
    } = _,
    _ = _,
    _ = _,
    _ = _;
  if (!_ || !_ || (_ !== `ScatterChart` && _ !== `axis`)) return null;
  var _, _;
  if (_ === `ScatterChart`) ((_ = _), (_ = _));
  else if (_ === `BarChart`) ((_ = _(_, _, _, _)), (_ = _));
  else if (_ === `radial`) {
    var { _: _, _: _, radius: _, startAngle: _, endAngle: _ } = _(_);
    ((_ = {
      _: _,
      _: _,
      startAngle: _,
      endAngle: _,
      innerRadius: _,
      outerRadius: _,
    }),
      (_ = _));
  } else
    ((_ = {
      points: _(_, _, _),
    }),
      (_ = _));
  var _ = typeof _ == `object` && `className` in _ ? _.className : void 0,
    _ = _(
      _(
        _(
          _(
            {
              stroke: `#ccc`,
              pointerEvents: `none`,
            },
            _,
          ),
          _,
        ),
        _(_),
      ),
      {},
      {
        payload: _,
        payloadIndex: _,
        className: _(`recharts-tooltip-cursor`, _),
      },
    );
  return (0, _.isValidElement)(_)
    ? (0, _.cloneElement)(_, _)
    : (0, _.createElement)(_, _);
}
function _(_) {
  var _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return _.createElement(
    _,
    _({}, _, {
      coordinate: _.coordinate,
      index: _.index,
      payload: _.payload,
      offset: _,
      layout: _,
      tooltipAxisBandSize: _,
      chartName: _,
    }),
  );
}
var _ = (0, _.createContext)(null),
  _ = () => (0, _.useContext)(_),
  _ = _(
    _((_, _) => {
      var _ = Object.prototype.hasOwnProperty,
        _ = `~`;
      function _() {}
      Object.create &&
        ((_.prototype = Object.create(null)), new _().__proto__ || (_ = !1));
      function _(_, _, _) {
        ((this._ = _), (this.context = _), (this.once = _ || !1));
      }
      function _(_, _, _, _, _) {
        if (typeof _ != `function`)
          throw TypeError(`The listener must be a function`);
        var _ = new _(_, _ || _, _),
          _ = _ ? _ + _ : _;
        return (
          _._events[_]
            ? _._events[_]._
              ? (_._events[_] = [_._events[_], _])
              : _._events[_].push(_)
            : ((_._events[_] = _), _._eventsCount++),
          _
        );
      }
      function _(_, _) {
        --_._eventsCount === 0 ? (_._events = new _()) : delete _._events[_];
      }
      function _() {
        ((this._events = new _()), (this._eventsCount = 0));
      }
      ((_.prototype.eventNames = function () {
        var _ = [],
          _,
          _;
        if (this._eventsCount === 0) return _;
        for (_ in (_ = this._events))
          _.call(_, _) && _.push(_ ? _.slice(1) : _);
        return Object.getOwnPropertySymbols
          ? _.concat(Object.getOwnPropertySymbols(_))
          : _;
      }),
        (_.prototype.listeners = function (_) {
          var _ = _ ? _ + _ : _,
            _ = this._events[_];
          if (!_) return [];
          if (_._) return [_._];
          for (var _ = 0, _ = _.length, _ = Array(_); _ < _; _++) _[_] = _[_]._;
          return _;
        }),
        (_.prototype.listenerCount = function (_) {
          var _ = _ ? _ + _ : _,
            _ = this._events[_];
          return _ ? (_._ ? 1 : _.length) : 0;
        }),
        (_.prototype.emit = function (_, _, _, _, _, _) {
          var _ = _ ? _ + _ : _;
          if (!this._events[_]) return !1;
          var _ = this._events[_],
            _ = arguments.length,
            _,
            _;
          if (_._) {
            switch ((_.once && this.removeListener(_, _._, void 0, !0), _)) {
              case 1:
                return (_._.call(_.context), !0);
              case 2:
                return (_._.call(_.context, _), !0);
              case 3:
                return (_._.call(_.context, _, _), !0);
              case 4:
                return (_._.call(_.context, _, _, _), !0);
              case 5:
                return (_._.call(_.context, _, _, _, _), !0);
              case 6:
                return (_._.call(_.context, _, _, _, _, _), !0);
            }
            for (_ = 1, _ = Array(_ - 1); _ < _; _++) _[_ - 1] = arguments[_];
            _._.apply(_.context, _);
          } else {
            var _ = _.length,
              _;
            for (_ = 0; _ < _; _++)
              switch (
                (_[_].once && this.removeListener(_, _[_]._, void 0, !0), _)
              ) {
                case 1:
                  _[_]._.call(_[_].context);
                  break;
                case 2:
                  _[_]._.call(_[_].context, _);
                  break;
                case 3:
                  _[_]._.call(_[_].context, _, _);
                  break;
                case 4:
                  _[_]._.call(_[_].context, _, _, _);
                  break;
                default:
                  if (!_)
                    for (_ = 1, _ = Array(_ - 1); _ < _; _++)
                      _[_ - 1] = arguments[_];
                  _[_]._.apply(_[_].context, _);
              }
          }
          return !0;
        }),
        (_.prototype._ = function (_, _, _) {
          return _(this, _, _, _, !1);
        }),
        (_.prototype.once = function (_, _, _) {
          return _(this, _, _, _, !0);
        }),
        (_.prototype.removeListener = function (_, _, _, _) {
          var _ = _ ? _ + _ : _;
          if (!this._events[_]) return this;
          if (!_) return (_(this, _), this);
          var _ = this._events[_];
          if (_._)
            _._ !== _ || (_ && !_.once) || (_ && _.context !== _) || _(this, _);
          else {
            for (var _ = 0, _ = [], _ = _.length; _ < _; _++)
              (_[_]._ !== _ ||
                (_ && !_[_].once) ||
                (_ && _[_].context !== _)) &&
                _.push(_[_]);
            _.length
              ? (this._events[_] = _.length === 1 ? _[0] : _)
              : _(this, _);
          }
          return this;
        }),
        (_.prototype.removeAllListeners = function (_) {
          var _;
          return (
            _
              ? ((_ = _ ? _ + _ : _), this._events[_] && _(this, _))
              : ((this._events = new _()), (this._eventsCount = 0)),
            this
          );
        }),
        (_.prototype.off = _.prototype.removeListener),
        (_.prototype.addListener = _.prototype._),
        (_.prefixed = _),
        (_.EventEmitter = _),
        _ !== void 0 && (_.exports = _));
    })(),
    1,
  ).default,
  _ = new _(),
  _ = `recharts.syncEvent.tooltip`,
  _ = `recharts.syncEvent.brush`;
function _(_, _) {
  if (_) {
    var _ = Number.parseInt(_, 10);
    if (!_(_)) return _?.[_];
  }
}
var _ = _({
    name: `options`,
    initialState: {
      chartName: ``,
      tooltipPayloadSearcher: void 0,
      eventEmitter: void 0,
      defaultTooltipEventType: `axis`,
    },
    reducers: {
      createEventEmitter: (_) => {
        _.eventEmitter ??= Symbol(`rechartsEventEmitter`);
      },
    },
  }),
  _ = _.reducer,
  { createEventEmitter: _ } = _.actions;
function _(_) {
  return _.tooltip.syncInteraction;
}
var _ = _({
    name: `chartData`,
    initialState: {
      chartData: void 0,
      computedData: void 0,
      dataStartIndex: 0,
      dataEndIndex: 0,
    },
    reducers: {
      setChartData(_, _) {
        ((_.chartData = _.payload),
          _.payload == null
            ? ((_.dataStartIndex = 0), (_.dataEndIndex = 0))
            : _.payload.length > 0 &&
              _.dataEndIndex !== _.payload.length - 1 &&
              (_.dataEndIndex = _.payload.length - 1));
      },
      setComputedData(_, _) {
        _.computedData = _.payload;
      },
      setDataStartEndIndexes(_, _) {
        var { startIndex: _, endIndex: _ } = _.payload;
        (_ != null && (_.dataStartIndex = _),
          _ != null && (_.dataEndIndex = _));
      },
    },
  }),
  {
    setChartData: _,
    setDataStartEndIndexes: _,
    setComputedData: _,
  } = _.actions,
  _ = _.reducer,
  _ = [`x`, `y`];
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = () => {};
function _() {
  var _ = _(_),
    _ = _(_),
    _ = _(),
    _ = _(_),
    _ = _(_),
    _ = _(),
    _ = _(),
    _ = _((_) => _.rootProps.className);
  (0, _.useEffect)(() => {
    if (_ == null) return _;
    var _ = (_, _, _) => {
      if (_ !== _ && _ === _) {
        if (_ === `index`) {
          var _;
          if (
            _ &&
            _ != null &&
            (_ = _.payload) != null &&
            _.coordinate &&
            _.payload.sourceViewBox
          ) {
            var _ = _.payload.coordinate,
              { _: _, _: _ } = _,
              _ = _(_, _),
              { _: _, _: _, width: _, height: _ } = _.payload.sourceViewBox,
              _ = _(
                _({}, _),
                {},
                {
                  _: _._ + (_ ? (_ - _) / _ : 0) * _.width,
                  _: _._ + (_ ? (_ - _) / _ : 0) * _.height,
                },
              );
            _(
              _(
                _({}, _),
                {},
                {
                  payload: _(
                    _({}, _.payload),
                    {},
                    {
                      coordinate: _,
                    },
                  ),
                },
              ),
            );
          } else _(_);
        } else if (_ != null) {
          var _;
          typeof _ == `function`
            ? (_ =
                _[
                  _(_, {
                    activeTooltipIndex:
                      _.payload.index == null
                        ? void 0
                        : Number(_.payload.index),
                    isTooltipActive: _.payload.active,
                    activeIndex:
                      _.payload.index == null
                        ? void 0
                        : Number(_.payload.index),
                    activeLabel: _.payload.label,
                    activeDataKey: _.payload.dataKey,
                    activeCoordinate: _.payload.coordinate,
                  })
                ])
            : _ === `value` &&
              (_ = _.find((_) => String(_.value) === _.payload.label));
          var { coordinate: _ } = _.payload;
          if (_ == null || _.payload.active === !1 || _ == null || _ == null)
            _(
              _({
                active: !1,
                coordinate: void 0,
                dataKey: void 0,
                index: null,
                label: void 0,
                sourceViewBox: void 0,
              }),
            );
          else {
            var { _: _, _: _ } = _,
              _ = Math.min(_, _._ + _.width),
              _ = Math.min(_, _._ + _.height),
              _ = {
                _: _ === `horizontal` ? _.coordinate : _,
                _: _ === `horizontal` ? _ : _.coordinate,
              };
            _(
              _({
                active: _.payload.active,
                coordinate: _,
                dataKey: _.payload.dataKey,
                index: String(_.index),
                label: _.payload.label,
                sourceViewBox: _.payload.sourceViewBox,
              }),
            );
          }
        }
      }
    };
    return (
      _._(_, _),
      () => {
        _.off(_, _);
      }
    );
  }, [_, _, _, _, _, _, _, _]);
}
function _() {
  var _ = _(_),
    _ = _(_),
    _ = _();
  (0, _.useEffect)(() => {
    if (_ == null) return _;
    var _ = (_, _, _) => {
      _ !== _ && _ === _ && _(_(_));
    };
    return (
      _._(_, _),
      () => {
        _.off(_, _);
      }
    );
  }, [_, _, _]);
}
function _() {
  var _ = _();
  ((0, _.useEffect)(() => {
    _(_());
  }, [_]),
    _(),
    _());
}
function _(_, _, _, _, _, _) {
  var _ = _((_) => _(_, _, _)),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_)?.active,
    _ = _();
  (0, _.useEffect)(() => {
    if (!_ && _ != null && _ != null) {
      var _ = _({
        active: _,
        coordinate: _,
        dataKey: _,
        index: _,
        label: typeof _ == `number` ? String(_) : _,
        sourceViewBox: _,
      });
      _.emit(_, _, _, _);
    }
  }, [_, _, _, _, _, _, _, _, _, _]);
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_) {
  return _.dataKey;
}
function _(_, _) {
  return _.isValidElement(_)
    ? _.cloneElement(_, _)
    : typeof _ == `function`
      ? _.createElement(_, _)
      : _.createElement(_, _);
}
var _ = [],
  _ = {
    allowEscapeViewBox: {
      _: !1,
      _: !1,
    },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !_.isSsr,
    itemSorter: `name`,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: {
      _: !1,
      _: !1,
    },
    separator: ` : `,
    trigger: `hover`,
    useTranslate3d: !1,
    wrapperStyle: {},
  };
function _(_) {
  var _ = _(_, _),
    {
      active: _,
      allowEscapeViewBox: _,
      animationDuration: _,
      animationEasing: _,
      content: _,
      filterNull: _,
      isAnimationActive: _,
      offset: _,
      payloadUniqBy: _,
      position: _,
      reverseDirection: _,
      useTranslate3d: _,
      wrapperStyle: _,
      cursor: _,
      shared: _,
      trigger: _,
      defaultIndex: _,
      portal: _,
      axisId: _,
    } = _,
    _ = _(),
    _ = typeof _ == `number` ? String(_) : _;
  (0, _.useEffect)(() => {
    _(
      _({
        shared: _,
        trigger: _,
        axisId: _,
        active: _,
        defaultIndex: _,
      }),
    );
  }, [_, _, _, _, _, _]);
  var _ = _(),
    _ = _(),
    _ = _(_),
    { activeIndex: _, isActive: _ } = _((_) => _(_, _, _, _)),
    _ = _((_) => _(_, _, _, _)),
    _ = _((_) => _(_, _, _, _)),
    _ = _((_) => _(_, _, _, _)),
    _ = _,
    _ = _(),
    _ = _ ?? _,
    [_, _] = _([_, _]),
    _ = _ === `axis` ? _ : void 0;
  _(_, _, _, _, _, _);
  var _ = _ ?? _;
  if (_ == null) return null;
  var _ = _ ?? _;
  (_ || (_ = _),
    _ &&
      _.length &&
      (_ = _(
        _.filter((_) => _.value != null && (_.hide !== !0 || _.includeHidden)),
        _,
        _,
      )));
  var _ = _.length > 0,
    _ = _.createElement(
      _,
      {
        allowEscapeViewBox: _,
        animationDuration: _,
        animationEasing: _,
        isAnimationActive: _,
        active: _,
        coordinate: _,
        hasPayload: _,
        offset: _,
        position: _,
        reverseDirection: _,
        useTranslate3d: _,
        viewBox: _,
        wrapperStyle: _,
        lastBoundingBox: _,
        innerRef: _,
        hasPortalFromProps: !!_,
      },
      _(
        _,
        _(
          _({}, _),
          {},
          {
            payload: _,
            label: _,
            active: _,
            coordinate: _,
            accessibilityLayer: _,
          },
        ),
      ),
    );
  return _.createElement(
    _.Fragment,
    null,
    (0, _.createPortal)(_, _),
    _ &&
      _.createElement(_, {
        cursor: _,
        tooltipEventType: _,
        coordinate: _,
        payload: _,
        index: _,
      }),
  );
}
var _ = (_) => null;
_.displayName = `Cell`;
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = class {
  constructor(_) {
    (_(this, `cache`, new Map()), (this.maxSize = _));
  }
  get(_) {
    var _ = this.cache.get(_);
    return (_ !== void 0 && (this.cache.delete(_), this.cache.set(_, _)), _);
  }
  set(_, _) {
    if (this.cache.has(_)) this.cache.delete(_);
    else if (this.cache.size >= this.maxSize) {
      var _ = this.cache.keys().next().value;
      this.cache.delete(_);
    }
    this.cache.set(_, _);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
};
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = _(
    {},
    {
      cacheSize: 2e3,
      enableCache: !0,
    },
  ),
  _ = new _(_.cacheSize),
  _ = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  _ = `recharts_measurement_span`;
function _(_, _) {
  return `${_}|${_.fontSize || ``}|${_.fontFamily || ``}|${_.fontWeight || ``}|${_.fontStyle || ``}|${_.letterSpacing || ``}|${_.textTransform || ``}`;
}
var _ = (_, _) => {
    try {
      var _ = document.getElementById(_);
      (_ ||
        ((_ = document.createElement(`span`)),
        _.setAttribute(`id`, _),
        _.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(_)),
        Object.assign(_.style, _, _),
        (_.textContent = `${_}`));
      var _ = _.getBoundingClientRect();
      return {
        width: _.width,
        height: _.height,
      };
    } catch {
      return {
        width: 0,
        height: 0,
      };
    }
  },
  _ = function (_) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (_ == null || _.isSsr)
      return {
        width: 0,
        height: 0,
      };
    var _ = _.measureText || _;
    if (!_.enableCache) return _(_, _);
    var _ = _(_, _),
      _ = _.get(_);
    if (_) return _;
    var _ = _(_, _);
    return (_.set(_, _), _);
  },
  _ = (_) => {
    var _ = _(_({}, _), _);
    (_.cacheSize !== _.cacheSize && (_ = new _(_.cacheSize)), (_ = _));
  },
  _ = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  _ = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  _ = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  _ = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  _ = {
    _: 96 / 2.54,
    _: 96 / 25.4,
    _: 96 / 72,
    _: 16,
    _: 96,
    _: 96 / 101.6,
    _: 1,
  },
  _ = Object.keys(_),
  _ = `NaN`;
function _(_, _) {
  return _ * _[_];
}
var _ = class _ {
  static parse(_) {
    var [, _, _] = _.exec(_) ?? [];
    return new _(parseFloat(_), _ ?? ``);
  }
  constructor(_, _) {
    ((this.num = _),
      (this.unit = _),
      (this.num = _),
      (this.unit = _),
      _(_) && (this.unit = ``),
      _ !== `` && !_.test(_) && ((this.num = NaN), (this.unit = ``)),
      _.includes(_) && ((this.num = _(_, _)), (this.unit = `px`)));
  }
  add(_) {
    return this.unit === _.unit
      ? new _(this.num + _.num, this.unit)
      : new _(NaN, ``);
  }
  subtract(_) {
    return this.unit === _.unit
      ? new _(this.num - _.num, this.unit)
      : new _(NaN, ``);
  }
  multiply(_) {
    return this.unit !== `` && _.unit !== `` && this.unit !== _.unit
      ? new _(NaN, ``)
      : new _(this.num * _.num, this.unit || _.unit);
  }
  divide(_) {
    return this.unit !== `` && _.unit !== `` && this.unit !== _.unit
      ? new _(NaN, ``)
      : new _(this.num / _.num, this.unit || _.unit);
  }
  toString() {
    return `${this.num}${this.unit}`;
  }
  isNaN() {
    return _(this.num);
  }
};
function _(_) {
  if (_.includes(_)) return _;
  for (var _ = _; _.includes(`*`) || _.includes(`/`);) {
    var [, _, _, _] = _.exec(_) ?? [],
      _ = _.parse(_ ?? ``),
      _ = _.parse(_ ?? ``),
      _ = _ === `*` ? _.multiply(_) : _.divide(_);
    if (_.isNaN()) return _;
    _ = _.replace(_, _.toString());
  }
  for (; _.includes(`+`) || /.-\d+(?:\.\d+)?/.test(_);) {
    var [, _, _, _] = _.exec(_) ?? [],
      _ = _.parse(_ ?? ``),
      _ = _.parse(_ ?? ``),
      _ = _ === `+` ? _.add(_) : _.subtract(_);
    if (_.isNaN()) return _;
    _ = _.replace(_, _.toString());
  }
  return _;
}
var _ = /\(([^()]*)\)/;
function _(_) {
  for (var _ = _, _; (_ = _.exec(_)) != null;) {
    var [, _] = _;
    _ = _.replace(_, _(_));
  }
  return _;
}
function _(_) {
  var _ = _.replace(/\s+/g, ``);
  return ((_ = _(_)), (_ = _(_)), _);
}
function _(_) {
  try {
    return _(_);
  } catch {
    return _;
  }
}
function _(_) {
  var _ = _(_.slice(5, -1));
  return _ === _ ? `` : _;
}
var _ = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
    `fill`,
  ],
  _ = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = /[ \f\n\r\t\v\u2028\u2029]+/,
  _ = (_) => {
    var { children: _, breakAll: _, style: _ } = _;
    try {
      var _ = [];
      return (
        _(_) || (_ = _ ? _.toString().split(``) : _.toString().split(_)),
        {
          wordsWithComputedWidth: _.map((_) => ({
            word: _,
            width: _(_, _).width,
          })),
          spaceWidth: _ ? 0 : _(`\xA0`, _).width,
        }
      );
    } catch {
      return null;
    }
  },
  _ = (_, _, _, _, _) => {
    var { maxLines: _, children: _, style: _, breakAll: _ } = _,
      _ = _(_),
      _ = _,
      _ = function () {
        return (
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
        ).reduce((_, _) => {
          var { word: _, width: _ } = _,
            _ = _[_.length - 1];
          if (_ && (_ == null || _ || _.width + _ + _ < Number(_)))
            (_.words.push(_), (_.width += _ + _));
          else {
            var _ = {
              words: [_],
              width: _,
            };
            _.push(_);
          }
          return _;
        }, []);
      },
      _ = _(_),
      _ = (_) => _.reduce((_, _) => (_.width > _.width ? _ : _));
    if (!_ || _ || !(_.length > _ || _(_).width > Number(_))) return _;
    for (
      var _ = `…`,
        _ = (_) => {
          var _ = _({
              breakAll: _,
              style: _,
              children: _.slice(0, _) + _,
            }).wordsWithComputedWidth,
            _ = _(_);
          return [_.length > _ || _(_).width > Number(_), _];
        },
        _ = 0,
        _ = _.length - 1,
        _ = 0,
        _;
      _ <= _ && _ <= _.length - 1;
    ) {
      var _ = Math.floor((_ + _) / 2),
        [_, _] = _(_ - 1),
        [_] = _(_);
      if ((!_ && !_ && (_ = _ + 1), _ && _ && (_ = _ - 1), !_ && _)) {
        _ = _;
        break;
      }
      _++;
    }
    return _ || _;
  },
  _ = (_) => [
    {
      words: _(_) ? [] : _.toString().split(_),
    },
  ],
  _ = (_) => {
    var {
      width: _,
      scaleToFit: _,
      children: _,
      style: _,
      breakAll: _,
      maxLines: _,
    } = _;
    if ((_ || _) && !_.isSsr) {
      var _,
        _,
        _ = _({
          breakAll: _,
          children: _,
          style: _,
        });
      if (_) {
        var { wordsWithComputedWidth: _, spaceWidth: _ } = _;
        ((_ = _), (_ = _));
      } else return _(_);
      return _(
        {
          breakAll: _,
          children: _,
          maxLines: _,
          style: _,
        },
        _,
        _,
        _,
        _,
      );
    }
    return _(_);
  },
  _ = `#808080`,
  _ = (0, _.forwardRef)((_, _) => {
    var {
        _: _ = 0,
        _: _ = 0,
        lineHeight: _ = `1em`,
        capHeight: _ = `0.71em`,
        scaleToFit: _ = !1,
        textAnchor: _ = `start`,
        verticalAnchor: _ = `end`,
        fill: _ = _,
      } = _,
      _ = _(_, _),
      _ = (0, _.useMemo)(
        () =>
          _({
            breakAll: _.breakAll,
            children: _.children,
            maxLines: _.maxLines,
            scaleToFit: _,
            style: _.style,
            width: _.width,
          }),
        [_.breakAll, _.children, _.maxLines, _, _.style, _.width],
      ),
      { _: _, _: _, angle: _, className: _, breakAll: _ } = _,
      _ = _(_, _);
    if (!_(_) || !_(_) || _.length === 0) return null;
    var _ = _ + (_(_) ? _ : 0),
      _ = _ + (_(_) ? _ : 0),
      _;
    switch (_) {
      case `start`:
        _ = _(`calc(${_})`);
        break;
      case `middle`:
        _ = _(`calc(${(_.length - 1) / 2} * -${_} + (${_} / 2))`);
        break;
      default:
        _ = _(`calc(${_.length - 1} * -${_})`);
    }
    var _ = [];
    if (_) {
      var _ = _[0].width,
        { width: _ } = _;
      _.push(`scale(${_(_) ? _ / _ : 1})`);
    }
    return (
      _ && _.push(`rotate(${_}, ${_}, ${_})`),
      _.length && (_.transform = _.join(` `)),
      _.createElement(
        `text`,
        _({}, _(_), {
          ref: _,
          _: _,
          _,
          className: _(`recharts-text`, _),
          textAnchor: _,
          fill: _.includes(`url`) ? _ : _,
        }),
        _.map((_, _) => {
          var _ = _.words.join(_ ? `` : ` `);
          return _.createElement(
            `tspan`,
            {
              _: _,
              _: _ === 0 ? _ : _,
              key: `${_}-${_}`,
            },
            _,
          );
        }),
      )
    );
  });
_.displayName = `Text`;
var _ = [`labelRef`];
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
var _ = (0, _.createContext)(null),
  _ = (_) => {
    var { _: _, _: _, width: _, height: _, children: _ } = _,
      _ = (0, _.useMemo)(
        () => ({
          _: _,
          _: _,
          width: _,
          height: _,
        }),
        [_, _, _, _],
      );
    return _.createElement(
      _.Provider,
      {
        value: _,
      },
      _,
    );
  },
  _ = () => {
    var _ = (0, _.useContext)(_),
      _ = _();
    return _ || _;
  },
  _ = (0, _.createContext)(null),
  _ = () => {
    var _ = (0, _.useContext)(_),
      _ = _(_);
    return _ || _;
  },
  _ = (_) => {
    var { value: _, formatter: _ } = _,
      _ = _(_.children) ? _ : _.children;
    return typeof _ == `function` ? _(_) : _;
  },
  _ = (_) => _ != null && typeof _ == `function`,
  _ = (_, _) => _(_ - _) * Math.min(Math.abs(_ - _), 360),
  _ = (_, _, _, _, _) => {
    var { offset: _, className: _ } = _,
      {
        _: _,
        _: _,
        innerRadius: _,
        outerRadius: _,
        startAngle: _,
        endAngle: _,
        clockWise: _,
      } = _,
      _ = (_ + _) / 2,
      _ = _(_, _),
      _ = _ >= 0 ? 1 : -1,
      _,
      _;
    switch (_) {
      case `insideStart`:
        ((_ = _ + _ * _), (_ = _));
        break;
      case `insideEnd`:
        ((_ = _ - _ * _), (_ = !_));
        break;
      case `end`:
        ((_ = _ + _ * _), (_ = _));
        break;
      default:
        throw Error(`Unsupported position ${_}`);
    }
    _ = _ <= 0 ? _ : !_;
    var _ = _(_, _, _, _),
      _ = _(_, _, _, _ + (_ ? 1 : -1) * 359),
      _ = `M${_._},${_._}
    A${_},${_},0,1,${+!_},
    ${_._},${_._}`,
      _ = _(_._) ? _(`recharts-radial-line-`) : _._;
    return _.createElement(
      `text`,
      _({}, _, {
        dominantBaseline: `central`,
        className: _(`recharts-radial-bar-label`, _),
      }),
      _.createElement(
        `defs`,
        null,
        _.createElement(`path`, {
          _: _,
          _: _,
        }),
      ),
      _.createElement(
        `textPath`,
        {
          xlinkHref: `#${_}`,
        },
        _,
      ),
    );
  },
  _ = (_, _, _) => {
    var {
        _: _,
        _: _,
        innerRadius: _,
        outerRadius: _,
        startAngle: _,
        endAngle: _,
      } = _,
      _ = (_ + _) / 2;
    if (_ === `outside`) {
      var { _: _, _: _ } = _(_, _, _ + _, _);
      return {
        _: _,
        _: _,
        textAnchor: _ >= _ ? `start` : `end`,
        verticalAnchor: `middle`,
      };
    }
    if (_ === `center`)
      return {
        _: _,
        _: _,
        textAnchor: `middle`,
        verticalAnchor: `middle`,
      };
    if (_ === `centerTop`)
      return {
        _: _,
        _: _,
        textAnchor: `middle`,
        verticalAnchor: `start`,
      };
    if (_ === `centerBottom`)
      return {
        _: _,
        _: _,
        textAnchor: `middle`,
        verticalAnchor: `end`,
      };
    var { _: _, _: _ } = _(_, _, (_ + _) / 2, _);
    return {
      _: _,
      _: _,
      textAnchor: `middle`,
      verticalAnchor: `middle`,
    };
  },
  _ = (_) => `cx` in _ && _(_._),
  _ = (_, _) => {
    var { parentViewBox: _, offset: _, position: _ } = _,
      _;
    _ != null && !_(_) && (_ = _);
    var { _: _, _: _, width: _, height: _ } = _,
      _ = _ >= 0 ? 1 : -1,
      _ = _ * _,
      _ = _ > 0 ? `end` : `start`,
      _ = _ > 0 ? `start` : `end`,
      _ = _ >= 0 ? 1 : -1,
      _ = _ * _,
      _ = _ > 0 ? `end` : `start`,
      _ = _ > 0 ? `start` : `end`;
    if (_ === `top`)
      return _(
        _(
          {},
          {
            _: _ + _ / 2,
            _: _ - _ * _,
            textAnchor: `middle`,
            verticalAnchor: _,
          },
        ),
        _
          ? {
              height: Math.max(_ - _._, 0),
              width: _,
            }
          : {},
      );
    if (_ === `bottom`)
      return _(
        _(
          {},
          {
            _: _ + _ / 2,
            _: _ + _ + _,
            textAnchor: `middle`,
            verticalAnchor: _,
          },
        ),
        _
          ? {
              height: Math.max(_._ + _.height - (_ + _), 0),
              width: _,
            }
          : {},
      );
    if (_ === `left`) {
      var _ = {
        _: _ - _,
        _: _ + _ / 2,
        textAnchor: _,
        verticalAnchor: `middle`,
      };
      return _(
        _({}, _),
        _
          ? {
              width: Math.max(_._ - _._, 0),
              height: _,
            }
          : {},
      );
    }
    if (_ === `right`) {
      var _ = {
        _: _ + _ + _,
        _: _ + _ / 2,
        textAnchor: _,
        verticalAnchor: `middle`,
      };
      return _(
        _({}, _),
        _
          ? {
              width: Math.max(_._ + _.width - _._, 0),
              height: _,
            }
          : {},
      );
    }
    var _ = _
      ? {
          width: _,
          height: _,
        }
      : {};
    return _ === `insideLeft`
      ? _(
          {
            _: _ + _,
            _: _ + _ / 2,
            textAnchor: _,
            verticalAnchor: `middle`,
          },
          _,
        )
      : _ === `insideRight`
        ? _(
            {
              _: _ + _ - _,
              _: _ + _ / 2,
              textAnchor: _,
              verticalAnchor: `middle`,
            },
            _,
          )
        : _ === `insideTop`
          ? _(
              {
                _: _ + _ / 2,
                _: _ + _,
                textAnchor: `middle`,
                verticalAnchor: _,
              },
              _,
            )
          : _ === `insideBottom`
            ? _(
                {
                  _: _ + _ / 2,
                  _: _ + _ - _,
                  textAnchor: `middle`,
                  verticalAnchor: _,
                },
                _,
              )
            : _ === `insideTopLeft`
              ? _(
                  {
                    _: _ + _,
                    _: _ + _,
                    textAnchor: _,
                    verticalAnchor: _,
                  },
                  _,
                )
              : _ === `insideTopRight`
                ? _(
                    {
                      _: _ + _ - _,
                      _: _ + _,
                      textAnchor: _,
                      verticalAnchor: _,
                    },
                    _,
                  )
                : _ === `insideBottomLeft`
                  ? _(
                      {
                        _: _ + _,
                        _: _ + _ - _,
                        textAnchor: _,
                        verticalAnchor: _,
                      },
                      _,
                    )
                  : _ === `insideBottomRight`
                    ? _(
                        {
                          _: _ + _ - _,
                          _: _ + _ - _,
                          textAnchor: _,
                          verticalAnchor: _,
                        },
                        _,
                      )
                    : _ &&
                        typeof _ == `object` &&
                        (_(_._) || _(_._)) &&
                        (_(_._) || _(_._))
                      ? _(
                          {
                            _: _ + _(_._, _),
                            _: _ + _(_._, _),
                            textAnchor: `end`,
                            verticalAnchor: `end`,
                          },
                          _,
                        )
                      : _(
                          {
                            _: _ + _ / 2,
                            _: _ + _ / 2,
                            textAnchor: `middle`,
                            verticalAnchor: `middle`,
                          },
                          _,
                        );
  },
  _ = {
    offset: 5,
  };
function _(_) {
  var _ = _(_, _),
    {
      viewBox: _,
      position: _,
      value: _,
      children: _,
      content: _,
      className: _ = ``,
      textBreakAll: _,
      labelRef: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _ || (_ === `center` ? _ : (_ ?? _));
  if (
    !_ ||
    (_(_) && _(_) && !(0, _.isValidElement)(_) && typeof _ != `function`)
  )
    return null;
  var _ = _(
    _({}, _),
    {},
    {
      viewBox: _,
    },
  );
  if ((0, _.isValidElement)(_)) {
    var { labelRef: _ } = _,
      _ = _(_, _);
    return (0, _.cloneElement)(_, _);
  }
  var _;
  if (typeof _ == `function`) {
    if (((_ = (0, _.createElement)(_, _)), (0, _.isValidElement)(_))) return _;
  } else _ = _(_);
  var _ = _(_),
    _ = _(_);
  if (_ && (_ === `insideStart` || _ === `insideEnd` || _ === `end`))
    return _(_, _, _, _, _);
  var _ = _ ? _(_, _.offset, _.position) : _(_, _);
  return _.createElement(
    _,
    _(
      {
        ref: _,
        className: _(`recharts-label`, _),
      },
      _,
      _,
      {
        breakAll: _,
      },
    ),
    _,
  );
}
_.displayName = `Label`;
var _ = (_, _, _) => {
  if (!_) return null;
  var _ = {
    viewBox: _,
    labelRef: _,
  };
  return _ === !0
    ? _.createElement(
        _,
        _(
          {
            key: `label-implicit`,
          },
          _,
        ),
      )
    : _(_)
      ? _.createElement(
          _,
          _(
            {
              key: `label-implicit`,
              value: _,
            },
            _,
          ),
        )
      : (0, _.isValidElement)(_)
        ? _.type === _
          ? (0, _.cloneElement)(
              _,
              _(
                {
                  key: `label-implicit`,
                },
                _,
              ),
            )
          : _.createElement(
              _,
              _(
                {
                  key: `label-implicit`,
                  content: _,
                },
                _,
              ),
            )
        : _(_)
          ? _.createElement(
              _,
              _(
                {
                  key: `label-implicit`,
                  content: _,
                },
                _,
              ),
            )
          : _ && typeof _ == `object`
            ? _.createElement(
                _,
                _(
                  {},
                  _,
                  {
                    key: `label-implicit`,
                  },
                  _,
                ),
              )
            : null;
};
function _(_) {
  var { label: _, labelRef: _ } = _;
  return _(_, _(), _) || null;
}
var _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return _[_.length - 1];
    }
    _.last = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      return Array.isArray(_) ? _ : Array.from(_);
    }
    _.toArray = _;
  }),
  _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    var _ = _(),
      _ = _(),
      _ = _();
    function _(_) {
      if (_.isArrayLike(_)) return _.last(_.toArray(_));
    }
    _.last = _;
  }),
  _ = _((_, _) => {
    _.exports = _().last;
  }),
  _ = _(_()),
  _ = [`valueAccessor`],
  _ = [`dataKey`, `clockWise`, `id`, `textBreakAll`];
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = (_) => (Array.isArray(_.value) ? (0, _.default)(_.value) : _.value),
  _ = (0, _.createContext)(void 0),
  _ = _.Provider,
  _ = (0, _.createContext)(void 0),
  _ = _.Provider;
function _() {
  return (0, _.useContext)(_);
}
function _() {
  return (0, _.useContext)(_);
}
function _(_) {
  var { valueAccessor: _ = _ } = _,
    _ = _(_, _),
    { dataKey: _, clockWise: _, _: _, textBreakAll: _ } = _,
    _ = _(_, _),
    _ = _(),
    _ = _(),
    _ = _ || _;
  return !_ || !_.length
    ? null
    : _.createElement(
        _,
        {
          className: `recharts-label-list`,
        },
        _.map((_, _) => {
          var _ = _(_) ? _(_, _) : _(_ && _.payload, _),
            _ = _(_)
              ? {}
              : {
                  _: `${_}-${_}`,
                };
          return _.createElement(
            _,
            _(
              {
                key: `label-${_}`,
              },
              _(_),
              _,
              _,
              {
                fill: _.fill ?? _.fill,
                parentViewBox: _.parentViewBox,
                value: _,
                textBreakAll: _,
                viewBox: _.viewBox,
                index: _,
              },
            ),
          );
        }),
      );
}
_.displayName = `LabelList`;
function _(_) {
  var { label: _ } = _;
  return _
    ? _ === !0
      ? _.createElement(_, {
          key: `labelList-implicit`,
        })
      : _.isValidElement(_) || _(_)
        ? _.createElement(_, {
            key: `labelList-implicit`,
            content: _,
          })
        : typeof _ == `object`
          ? _.createElement(
              _,
              _(
                {
                  key: `labelList-implicit`,
                },
                _,
                {
                  type: String(_.type),
                },
              ),
            )
          : null
    : null;
}
var _ = _({
    name: `polarAxis`,
    initialState: {
      radiusAxis: {},
      angleAxis: {},
    },
    reducers: {
      addRadiusAxis(_, _) {
        _.radiusAxis[_.payload._] = _(_.payload);
      },
      removeRadiusAxis(_, _) {
        delete _.radiusAxis[_.payload._];
      },
      addAngleAxis(_, _) {
        _.angleAxis[_.payload._] = _(_.payload);
      },
      removeAngleAxis(_, _) {
        delete _.angleAxis[_.payload._];
      },
    },
  }),
  {
    addRadiusAxis: _,
    removeRadiusAxis: _,
    addAngleAxis: _,
    removeAngleAxis: _,
  } = _.actions,
  _ = _.reducer,
  _ = _((_) => {
    var _ = Symbol.for(`react.element`),
      _ = Symbol.for(`react.portal`),
      _ = Symbol.for(`react.fragment`),
      _ = Symbol.for(`react.strict_mode`),
      _ = Symbol.for(`react.profiler`),
      _ = Symbol.for(`react.provider`),
      _ = Symbol.for(`react.context`),
      _ = Symbol.for(`react.server_context`),
      _ = Symbol.for(`react.forward_ref`),
      _ = Symbol.for(`react.suspense`),
      _ = Symbol.for(`react.suspense_list`),
      _ = Symbol.for(`react.memo`),
      _ = Symbol.for(`react.lazy`);
    function _(_) {
      if (typeof _ == `object` && _) {
        var _ = _.$$typeof;
        switch (_) {
          case _:
            switch (((_ = _.type), _)) {
              case _:
              case _:
              case _:
              case _:
              case _:
                return _;
              default:
                switch (((_ &&= _.$$typeof), _)) {
                  case _:
                  case _:
                  case _:
                  case _:
                  case _:
                  case _:
                    return _;
                  default:
                    return _;
                }
            }
          case _:
            return _;
        }
      }
    }
    _.isFragment = function (_) {
      return _(_) === _;
    };
  }),
  _ = _((_, _) => {
    _.exports = _();
  })(),
  _ = (_) =>
    typeof _ == `string` ? _ : _ ? _.displayName || _.name || `Component` : ``,
  _ = null,
  _ = null,
  _ = (_) => {
    if (_ === _ && Array.isArray(_)) return _;
    var _ = [];
    return (
      _.Children.forEach(_, (_) => {
        _(_) ||
          ((0, _.isFragment)(_)
            ? (_ = _.concat(_(_.props.children)))
            : _.push(_));
      }),
      (_ = _),
      (_ = _),
      _
    );
  };
function _(_, _) {
  var _ = [],
    _ = [];
  return (
    (_ = Array.isArray(_) ? _.map((_) => _(_)) : [_(_)]),
    _(_).forEach((_) => {
      var _ =
        (0, _.default)(_, `type.displayName`) || (0, _.default)(_, `type.name`);
      _.indexOf(_) !== -1 && _.push(_);
    }),
    _
  );
}
var _ = _((_) => {
    Object.defineProperty(_, Symbol.toStringTag, {
      value: `Module`,
    });
    function _(_) {
      if (typeof _ != `object` || !_) return !1;
      if (Object.getPrototypeOf(_) === null) return !0;
      if (Object.prototype.toString.call(_) !== `[object Object]`) {
        let _ = _[Symbol.toStringTag];
        return _ == null ||
          !Object.getOwnPropertyDescriptor(_, Symbol.toStringTag)?.writable
          ? !1
          : _.toString() === `[object ${_}]`;
      }
      let _ = _;
      for (; Object.getPrototypeOf(_) !== null;) _ = Object.getPrototypeOf(_);
      return Object.getPrototypeOf(_) === _;
    }
    _.isPlainObject = _;
  }),
  _ = _((_, _) => {
    _.exports = _().isPlainObject;
  });
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
var _ = (_, _, _, _, _) => {
    var _ = _ - _,
      _ = `M ${_},${_}`;
    return (
      (_ += `L ${_ + _},${_}`),
      (_ += `L ${_ + _ - _ / 2},${_ + _}`),
      (_ += `L ${_ + _ - _ / 2 - _},${_ + _}`),
      (_ += `L ${_},${_} Z`),
      _
    );
  },
  _ = {
    _: 0,
    _: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  _ = (_) => {
    var _ = _(_, _),
      { _: _, _: _, upperWidth: _, lowerWidth: _, height: _, className: _ } = _,
      {
        animationEasing: _,
        animationDuration: _,
        animationBegin: _,
        isUpdateAnimationActive: _,
      } = _,
      _ = (0, _.useRef)(null),
      [_, _] = (0, _.useState)(-1),
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = _(_, `trapezoid-`);
    if (
      ((0, _.useEffect)(() => {
        if (_.current && _.current.getTotalLength)
          try {
            var _ = _.current.getTotalLength();
            _ && _(_);
          } catch {}
      }, []),
      _ !== +_ ||
        _ !== +_ ||
        _ !== +_ ||
        _ !== +_ ||
        _ !== +_ ||
        (_ === 0 && _ === 0) ||
        _ === 0)
    )
      return null;
    var _ = _(`recharts-trapezoid`, _);
    if (!_)
      return _.createElement(
        `g`,
        null,
        _.createElement(
          `path`,
          _({}, _(_), {
            className: _,
            _: _(_, _, _, _, _),
          }),
        ),
      );
    var _ = _.current,
      _ = _.current,
      _ = _.current,
      _ = _.current,
      _ = _.current,
      _ = `0px ${_ === -1 ? 1 : _}px`,
      _ = `${_}px 0px`,
      _ = _([`strokeDasharray`], _, _);
    return _.createElement(
      _,
      {
        animationId: _,
        key: _,
        canBegin: _ > 0,
        duration: _,
        easing: _,
        isActive: _,
        begin: _,
      },
      (_) => {
        var _ = _(_, _, _),
          _ = _(_, _, _),
          _ = _(_, _, _),
          _ = _(_, _, _),
          _ = _(_, _, _);
        _.current &&
          ((_.current = _),
          (_.current = _),
          (_.current = _),
          (_.current = _),
          (_.current = _));
        var _ =
          _ > 0
            ? {
                transition: _,
                strokeDasharray: _,
              }
            : {
                strokeDasharray: _,
              };
        return _.createElement(
          `path`,
          _({}, _(_), {
            className: _,
            _: _(_, _, _, _, _),
            ref: _,
            style: _(_({}, _), _.style),
          }),
        );
      },
    );
  },
  _ = _(_()),
  _ = [`option`, `shapeType`, `propTransformer`, `activeClassName`, `isActive`];
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_, _) {
  return _(_({}, _), _);
}
function _(_, _) {
  return _ === `symbols`;
}
function _(_) {
  var { shapeType: _, elementProps: _ } = _;
  switch (_) {
    case `rectangle`:
      return _.createElement(_, _);
    case `trapezoid`:
      return _.createElement(_, _);
    case `sector`:
      return _.createElement(_, _);
    case `symbols`:
      if (_(_, _)) return _.createElement(_, _);
      break;
    default:
      return null;
  }
}
function _(_) {
  return (0, _.isValidElement)(_) ? _.props : _;
}
function _(_) {
  var {
      option: _,
      shapeType: _,
      propTransformer: _ = _,
      activeClassName: _ = `recharts-active-shape`,
      isActive: _,
    } = _,
    _ = _(_, _),
    _;
  if ((0, _.isValidElement)(_)) _ = (0, _.cloneElement)(_, _(_({}, _), _(_)));
  else if (typeof _ == `function`) _ = _(_);
  else if ((0, _.default)(_) && typeof _ != `boolean`) {
    var _ = _(_, _);
    _ = _.createElement(_, {
      shapeType: _,
      elementProps: _,
    });
  } else {
    var _ = _;
    _ = _.createElement(_, {
      shapeType: _,
      elementProps: _,
    });
  }
  return _
    ? _.createElement(
        _,
        {
          className: _,
        },
        _,
      )
    : _;
}
var _ = (_, _) => {
    var _ = _();
    return (_, _) => (_) => {
      (_?.(_, _, _),
        _(
          _({
            activeIndex: String(_),
            activeDataKey: _,
            activeCoordinate: _.tooltipPosition,
          }),
        ));
    };
  },
  _ = (_) => {
    var _ = _();
    return (_, _) => (_) => {
      (_?.(_, _, _), _(_()));
    };
  },
  _ = (_, _) => {
    var _ = _();
    return (_, _) => (_) => {
      (_?.(_, _, _),
        _(
          _({
            activeIndex: String(_),
            activeDataKey: _,
            activeCoordinate: _.tooltipPosition,
          }),
        ));
    };
  };
function _(_) {
  var { _: _, args: _ } = _,
    _ = _(),
    _ = _();
  return (
    (0, _.useLayoutEffect)(() => {
      if (!_) {
        var _ = _(_);
        return (
          _(_(_)),
          () => {
            _(_(_));
          }
        );
      }
    }, [_, _, _, _]),
    null
  );
}
var _ = () => {};
function _(_) {
  var { legendPayload: _ } = _,
    _ = _(),
    _ = _();
  return (
    (0, _.useLayoutEffect)(
      () =>
        _
          ? _
          : (_(_(_)),
            () => {
              _(_(_));
            }),
      [_, _, _],
    ),
    null
  );
}
function _(_) {
  var { legendPayload: _ } = _,
    _ = _(),
    _ = _(_);
  return (
    (0, _.useLayoutEffect)(
      () =>
        _ !== `centric` && _ !== `radial`
          ? _
          : (_(_(_)),
            () => {
              _(_(_));
            }),
      [_, _, _],
    ),
    null
  );
}
var _ =
  _.useId ??
  (() => {
    var [_] = _.useState(() => _(`uid-`));
    return _;
  });
function _(_, _) {
  var _ = _();
  return _ || (_ ? `${_}-${_}` : _);
}
var _ = (0, _.createContext)(void 0),
  _ = (_) => {
    var { _: _, type: _, children: _ } = _,
      _ = _(`recharts-${_}`, _);
    return _.createElement(
      _.Provider,
      {
        value: _,
      },
      _(_),
    );
  },
  _ = _({
    name: `graphicalItems`,
    initialState: {
      cartesianItems: [],
      polarItems: [],
    },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(_, _) {
          _.cartesianItems.push(_(_.payload));
        },
        prepare: _(),
      },
      replaceCartesianGraphicalItem: {
        reducer(_, _) {
          var { prev: _, next: _ } = _.payload,
            _ = _(_).cartesianItems.indexOf(_(_));
          _ > -1 && (_.cartesianItems[_] = _(_));
        },
        prepare: _(),
      },
      removeCartesianGraphicalItem: {
        reducer(_, _) {
          var _ = _(_).cartesianItems.indexOf(_(_.payload));
          _ > -1 && _.cartesianItems.splice(_, 1);
        },
        prepare: _(),
      },
      addPolarGraphicalItem: {
        reducer(_, _) {
          _.polarItems.push(_(_.payload));
        },
        prepare: _(),
      },
      removePolarGraphicalItem: {
        reducer(_, _) {
          var _ = _(_).polarItems.indexOf(_(_.payload));
          _ > -1 && _.polarItems.splice(_, 1);
        },
        prepare: _(),
      },
    },
  }),
  {
    addCartesianGraphicalItem: _,
    replaceCartesianGraphicalItem: _,
    removeCartesianGraphicalItem: _,
    addPolarGraphicalItem: _,
    removePolarGraphicalItem: _,
  } = _.actions,
  _ = _.reducer;
function _(_) {
  var _ = _(),
    _ = (0, _.useRef)(null);
  return (
    (0, _.useLayoutEffect)(() => {
      (_.current === null
        ? _(_(_))
        : _.current !== _ &&
          _(
            _({
              prev: _.current,
              next: _,
            }),
          ),
        (_.current = _));
    }, [_, _]),
    (0, _.useLayoutEffect)(
      () => () => {
        _.current &&= (_(_(_.current)), null);
      },
      [_],
    ),
    null
  );
}
function _(_) {
  var _ = _();
  return (
    (0, _.useLayoutEffect)(
      () => (
        _(_(_)),
        () => {
          _(_(_));
        }
      ),
      [_, _],
    ),
    null
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = _({
    name: `cartesianAxis`,
    initialState: {
      xAxis: {},
      yAxis: {},
      zAxis: {},
    },
    reducers: {
      addXAxis: {
        reducer(_, _) {
          _.xAxis[_.payload._] = _(_.payload);
        },
        prepare: _(),
      },
      removeXAxis: {
        reducer(_, _) {
          delete _.xAxis[_.payload._];
        },
        prepare: _(),
      },
      addYAxis: {
        reducer(_, _) {
          _.yAxis[_.payload._] = _(_.payload);
        },
        prepare: _(),
      },
      removeYAxis: {
        reducer(_, _) {
          delete _.yAxis[_.payload._];
        },
        prepare: _(),
      },
      addZAxis: {
        reducer(_, _) {
          _.zAxis[_.payload._] = _(_.payload);
        },
        prepare: _(),
      },
      removeZAxis: {
        reducer(_, _) {
          delete _.zAxis[_.payload._];
        },
        prepare: _(),
      },
      updateYAxisWidth(_, _) {
        var { _: _, width: _ } = _.payload,
          _ = _.yAxis[_];
        if (_) {
          var _ = _.widthHistory || [];
          if (
            _.length === 3 &&
            _[0] === _[2] &&
            _ === _[1] &&
            _ !== _.width &&
            Math.abs(_ - _[0]) <= 1
          )
            return;
          var _ = [..._, _].slice(-3);
          _.yAxis[_] = _(
            _({}, _.yAxis[_]),
            {},
            {
              width: _,
              widthHistory: _,
            },
          );
        }
      },
    },
  }),
  {
    addXAxis: _,
    removeXAxis: _,
    addYAxis: _,
    removeYAxis: _,
    addZAxis: _,
    removeZAxis: _,
    updateYAxisWidth: _,
  } = _.actions,
  _ = _.reducer,
  _ = _(
    [
      _([_], (_) => {
        if (_)
          return {
            top: _.top,
            bottom: _.bottom,
            left: _.left,
            right: _.right,
          };
      }),
      _,
      _,
    ],
    (_, _, _) => {
      if (_ && _ != null && _ != null)
        return {
          _: _.left,
          _: _.top,
          width: Math.max(0, _ - _.left - _.right),
          height: Math.max(0, _ - _.top - _.bottom),
        };
    },
  ),
  _ = () => _(_),
  _ = () => _(_),
  _ = [`x`, `y`];
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
function _(_, _) {
  var { _: _, _: _ } = _,
    _ = _(_, _),
    _ = `${_}`,
    _ = parseInt(_, 10),
    _ = `${_}`,
    _ = parseInt(_, 10),
    _ = `${_.height || _.height}`,
    _ = parseInt(_, 10),
    _ = `${_.width || _.width}`,
    _ = parseInt(_, 10);
  return _(
    _(
      _(
        _(_({}, _), _),
        _
          ? {
              _: _,
            }
          : {},
      ),
      _
        ? {
            _: _,
          }
        : {},
    ),
    {},
    {
      height: _,
      width: _,
      name: _.name,
      radius: _.radius,
    },
  );
}
function _(_) {
  return _.createElement(
    _,
    _(
      {
        shapeType: `rectangle`,
        propTransformer: _,
        activeClassName: `recharts-active-bar`,
      },
      _,
    ),
  );
}
var _ = function (_) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (_, _) => {
      if (_(_)) return _;
      var _ = _(_) || _(_);
      return _ ? _(_, _) : (!_ && _(!1), _);
    };
  },
  _ = _({
    name: `errorBars`,
    initialState: {},
    reducers: {
      addErrorBar: (_, _) => {
        var { itemId: _, errorBar: _ } = _.payload;
        (_[_] || (_[_] = []), _[_].push(_));
      },
      replaceErrorBar: (_, _) => {
        var { itemId: _, prev: _, next: _ } = _.payload;
        _[_] &&
          (_[_] = _[_].map((_) =>
            _.dataKey === _.dataKey && _.direction === _.direction ? _ : _,
          ));
      },
      removeErrorBar: (_, _) => {
        var { itemId: _, errorBar: _ } = _.payload;
        _[_] &&
          (_[_] = _[_].filter(
            (_) => _.dataKey !== _.dataKey || _.direction !== _.direction,
          ));
      },
    },
  }),
  { addErrorBar: _, replaceErrorBar: _, removeErrorBar: _ } = _.actions,
  _ = _.reducer,
  _ = [`children`];
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = (0, _.createContext)({
  data: [],
  xAxisId: `xAxis-0`,
  yAxisId: `yAxis-0`,
  dataPointFormatter: () => ({
    _: 0,
    _: 0,
    value: 0,
  }),
  errorBarOffset: 0,
});
function _(_) {
  var { children: _ } = _,
    _ = _(_, _);
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
function _(_, _) {
  var _ = _((_) => _(_, _)),
    _ = _((_) => _(_, _)),
    _ = _?.allowDataOverflow ?? _.allowDataOverflow,
    _ = _?.allowDataOverflow ?? _.allowDataOverflow;
  return {
    needClip: _ || _,
    needClipX: _,
    needClipY: _,
  };
}
function _(_) {
  var { xAxisId: _, yAxisId: _, clipPathId: _ } = _,
    _ = _(),
    { needClipX: _, needClipY: _, needClip: _ } = _(_, _);
  if (!_) return null;
  var { _: _, _: _, width: _, height: _ } = _;
  return _.createElement(
    `clipPath`,
    {
      _: `clipPath-${_}`,
    },
    _.createElement(`rect`, {
      _: _ ? _ : _ - _ / 2,
      _: _ ? _ : _ - _ / 2,
      width: _ ? _ : _ * 2,
      height: _ ? _ : _ * 2,
    }),
  );
}
var _ = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  _ = [`value`, `background`, `tooltipPosition`],
  _ = [`id`],
  _ = [`onMouseEnter`, `onClick`, `onMouseLeave`];
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = (_) => {
  var { dataKey: _, name: _, fill: _, legendType: _, hide: _ } = _;
  return [
    {
      inactive: _,
      dataKey: _,
      type: _,
      color: _,
      value: _(_, _),
      payload: _,
    },
  ];
};
function _(_) {
  var {
    dataKey: _,
    stroke: _,
    strokeWidth: _,
    fill: _,
    name: _,
    hide: _,
    unit: _,
  } = _;
  return {
    dataDefinedOnItem: void 0,
    positions: void 0,
    settings: {
      stroke: _,
      strokeWidth: _,
      fill: _,
      dataKey: _,
      nameKey: void 0,
      name: _(_, _),
      hide: _,
      type: _.tooltipType,
      color: _.fill,
      unit: _,
    },
  };
}
function _(_) {
  var _ = _(_),
    { data: _, dataKey: _, background: _, allOtherBarProps: _ } = _,
    { onMouseEnter: _, onMouseLeave: _, onClick: _ } = _,
    _ = _(_, _),
    _ = _(_, _),
    _ = _(_),
    _ = _(_, _);
  if (!_ || _ == null) return null;
  var _ = _(_);
  return _.createElement(
    _.Fragment,
    null,
    _.map((_, _) => {
      var { value: _, background: _, tooltipPosition: _ } = _,
        _ = _(_, _);
      if (!_) return null;
      var _ = _(_, _),
        _ = _(_, _),
        _ = _(_, _),
        _ = _(
          _(
            _(
              _(
                _(
                  {
                    option: _,
                    isActive: String(_) === _,
                  },
                  _,
                ),
                {},
                {
                  fill: `#eee`,
                },
                _,
              ),
              _,
            ),
            _(_, _, _),
          ),
          {},
          {
            onMouseEnter: _,
            onMouseLeave: _,
            onClick: _,
            dataKey: _,
            index: _,
            className: `recharts-bar-background-rectangle`,
          },
        );
      return _.createElement(
        _,
        _(
          {
            key: `background-bar-${_}`,
          },
          _,
        ),
      );
    }),
  );
}
function _(_) {
  var { showLabels: _, children: _, rects: _ } = _,
    _ = _?.map((_) => {
      var _ = {
        _: _._,
        _: _._,
        width: _.width,
        height: _.height,
      };
      return _(
        _({}, _),
        {},
        {
          value: _.value,
          payload: _.payload,
          parentViewBox: _.parentViewBox,
          viewBox: _,
          fill: _.fill,
        },
      );
    });
  return _.createElement(
    _,
    {
      value: _ ? _ : void 0,
    },
    _,
  );
}
function _(_) {
  var {
      shape: _,
      activeBar: _,
      baseProps: _,
      entry: _,
      index: _,
      dataKey: _,
    } = _,
    _ = _(_),
    _ = _(_),
    _ = _ && String(_) === _ && (_ == null || _ === _),
    _ = _ ? _ : _;
  return _.createElement(
    _,
    _(
      {},
      _,
      {
        name: String(_.name),
      },
      _,
      {
        isActive: _,
        option: _,
        index: _,
        dataKey: _,
      },
    ),
  );
}
function _(_) {
  var { shape: _, baseProps: _, entry: _, index: _, dataKey: _ } = _;
  return _.createElement(
    _,
    _(
      {},
      _,
      {
        name: String(_.name),
      },
      _,
      {
        isActive: !1,
        option: _,
        index: _,
        dataKey: _,
      },
    ),
  );
}
function _(_) {
  var { data: _, props: _ } = _,
    _ = _(_),
    { _: _ } = _,
    _ = _(_, _),
    { shape: _, dataKey: _, activeBar: _ } = _,
    { onMouseEnter: _, onClick: _, onMouseLeave: _ } = _,
    _ = _(_, _),
    _ = _(_, _),
    _ = _(_),
    _ = _(_, _);
  return _
    ? _.createElement(
        _.Fragment,
        null,
        _.map((_, _) =>
          _.createElement(
            _,
            _(
              {
                key: `rectangle-${_?._}-${_?._}-${_?.value}-${_}`,
                className: `recharts-bar-rectangle`,
              },
              _(_, _, _),
              {
                onMouseEnter: _(_, _),
                onMouseLeave: _(_, _),
                onClick: _(_, _),
              },
            ),
            _
              ? _.createElement(_, {
                  shape: _,
                  activeBar: _,
                  baseProps: _,
                  entry: _,
                  index: _,
                  dataKey: _,
                })
              : _.createElement(_, {
                  shape: _,
                  baseProps: _,
                  entry: _,
                  index: _,
                  dataKey: _,
                }),
          ),
        ),
      )
    : null;
}
function _(_) {
  var { props: _, previousRectanglesRef: _ } = _,
    {
      data: _,
      layout: _,
      isAnimationActive: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      onAnimationEnd: _,
      onAnimationStart: _,
    } = _,
    _ = _.current,
    _ = _(_, `recharts-bar-`),
    [_, _] = (0, _.useState)(!1),
    _ = !_,
    _ = (0, _.useCallback)(() => {
      (typeof _ == `function` && _(), _(!1));
    }, [_]),
    _ = (0, _.useCallback)(() => {
      (typeof _ == `function` && _(), _(!0));
    }, [_]);
  return _.createElement(
    _,
    {
      showLabels: _,
      rects: _,
    },
    _.createElement(
      _,
      {
        animationId: _,
        begin: _,
        duration: _,
        isActive: _,
        easing: _,
        onAnimationEnd: _,
        onAnimationStart: _,
        key: _,
      },
      (_) => {
        var _ =
          _ === 1
            ? _
            : _?.map((_, _) => {
                var _ = _ && _[_];
                if (_)
                  return _(
                    _({}, _),
                    {},
                    {
                      _: _(_._, _._, _),
                      _: _(_._, _._, _),
                      width: _(_.width, _.width, _),
                      height: _(_.height, _.height, _),
                    },
                  );
                if (_ === `horizontal`) {
                  var _ = _(0, _.height, _);
                  return _(
                    _({}, _),
                    {},
                    {
                      _: _._ + _.height - _,
                      height: _,
                    },
                  );
                }
                var _ = _(0, _.width, _);
                return _(
                  _({}, _),
                  {},
                  {
                    width: _,
                  },
                );
              });
        return (
          _ > 0 && (_.current = _ ?? null),
          _ == null
            ? null
            : _.createElement(
                _,
                null,
                _.createElement(_, {
                  props: _,
                  data: _,
                }),
              )
        );
      },
    ),
    _.createElement(_, {
      label: _.label,
    }),
    _.children,
  );
}
function _(_) {
  var _ = (0, _.useRef)(null);
  return _.createElement(_, {
    previousRectanglesRef: _,
    props: _,
  });
}
var _ = 0,
  _ = (_, _) => {
    var _ = Array.isArray(_.value) ? _.value[1] : _.value;
    return {
      _: _._,
      _: _._,
      value: _,
      errorVal: _(_, _),
    };
  },
  _ = class extends _.PureComponent {
    render() {
      var {
        hide: _,
        data: _,
        dataKey: _,
        className: _,
        xAxisId: _,
        yAxisId: _,
        needClip: _,
        background: _,
        _: _,
      } = this.props;
      if (_ || _ == null) return null;
      var _ = _(`recharts-bar`, _),
        _ = _;
      return _.createElement(
        _,
        {
          className: _,
          _: _,
        },
        _ &&
          _.createElement(
            `defs`,
            null,
            _.createElement(_, {
              clipPathId: _,
              xAxisId: _,
              yAxisId: _,
            }),
          ),
        _.createElement(
          _,
          {
            className: `recharts-bar-rectangles`,
            clipPath: _ ? `url(#clipPath-${_})` : void 0,
          },
          _.createElement(_, {
            data: _,
            dataKey: _,
            background: _,
            allOtherBarProps: this.props,
          }),
          _.createElement(_, this.props),
        ),
      );
    }
  },
  _ = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    hide: !1,
    isAnimationActive: !_.isSsr,
    legendType: `rect`,
    minPointSize: _,
    xAxisId: 0,
    yAxisId: 0,
  };
function _(_) {
  var {
      xAxisId: _,
      yAxisId: _,
      hide: _,
      legendType: _,
      minPointSize: _,
      activeBar: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      isAnimationActive: _,
    } = _,
    { needClip: _ } = _(_, _),
    _ = _(),
    _ = _(),
    _ = _(_.children, _),
    _ = _((_) => _(_, _, _, _, _._, _));
  if (_ !== `vertical` && _ !== `horizontal`) return null;
  var _,
    _ = _?.[0];
  return (
    (_ =
      _ == null || _.height == null || _.width == null
        ? 0
        : _ === `vertical`
          ? _.height / 2
          : _.width / 2),
    _.createElement(
      _,
      {
        xAxisId: _,
        yAxisId: _,
        data: _,
        dataPointFormatter: _,
        errorBarOffset: _,
      },
      _.createElement(
        _,
        _({}, _, {
          layout: _,
          needClip: _,
          data: _,
          xAxisId: _,
          yAxisId: _,
          hide: _,
          legendType: _,
          minPointSize: _,
          activeBar: _,
          animationBegin: _,
          animationDuration: _,
          animationEasing: _,
          isAnimationActive: _,
        }),
      ),
    )
  );
}
function _(_) {
  var {
      layout: _,
      barSettings: { dataKey: _, minPointSize: _ },
      pos: _,
      bandSize: _,
      xAxis: _,
      yAxis: _,
      xAxisTicks: _,
      yAxisTicks: _,
      stackedData: _,
      displayedData: _,
      offset: _,
      cells: _,
      parentViewBox: _,
    } = _,
    _ = _ === `horizontal` ? _ : _,
    _ = _ ? _.scale.domain() : null,
    _ = _({
      numericAxis: _,
    });
  return _.map((_, _) => {
    var _, _, _, _, _, _;
    _ ? (_ = _(_[_], _)) : ((_ = _(_, _)), Array.isArray(_) || (_ = [_, _]));
    var _ = _(_, _)(_[1], _);
    if (_ === `horizontal`) {
      var [_, _] = [_.scale(_[0]), _.scale(_[1])];
      ((_ = _({
        axis: _,
        ticks: _,
        bandSize: _,
        offset: _.offset,
        entry: _,
        index: _,
      })),
        (_ = _ ?? _ ?? void 0),
        (_ = _.size));
      var _ = _ - _;
      if (
        ((_ = _(_) ? 0 : _),
        (_ = {
          _: _,
          _: _.top,
          width: _,
          height: _.height,
        }),
        Math.abs(_) > 0 && Math.abs(_) < Math.abs(_))
      ) {
        var _ = _(_ || _) * (Math.abs(_) - Math.abs(_));
        ((_ -= _), (_ += _));
      }
    } else {
      var [_, _] = [_.scale(_[0]), _.scale(_[1])];
      if (
        ((_ = _),
        (_ = _({
          axis: _,
          ticks: _,
          bandSize: _,
          offset: _.offset,
          entry: _,
          index: _,
        })),
        (_ = _ - _),
        (_ = _.size),
        (_ = {
          _: _.left,
          _,
          width: _.width,
          height: _,
        }),
        Math.abs(_) > 0 && Math.abs(_) < Math.abs(_))
      ) {
        var _ = _(_ || _) * (Math.abs(_) - Math.abs(_));
        _ += _;
      }
    }
    return _ == null || _ == null || _ == null || _ == null
      ? null
      : _(
          _({}, _),
          {},
          {
            _: _,
            _,
            width: _,
            height: _,
            value: _ ? _ : _[1],
            payload: _,
            background: _,
            tooltipPosition: {
              _: _ + _ / 2,
              _: _ + _ / 2,
            },
            parentViewBox: _,
          },
          _ && _[_] && _[_].props,
        );
  }).filter(Boolean);
}
function _(_) {
  var _ = _(_, _),
    _ = _();
  return _.createElement(
    _,
    {
      _: _._,
      type: `bar`,
    },
    (_) =>
      _.createElement(
        _.Fragment,
        null,
        _.createElement(_, {
          legendPayload: _(_),
        }),
        _.createElement(_, {
          _: _,
          args: _,
        }),
        _.createElement(_, {
          type: `bar`,
          _: _,
          data: void 0,
          xAxisId: _.xAxisId,
          yAxisId: _.yAxisId,
          zAxisId: 0,
          dataKey: _.dataKey,
          stackId: _(_.stackId),
          hide: _.hide,
          barSize: _.barSize,
          minPointSize: _.minPointSize,
          maxBarSize: _.maxBarSize,
          isPanorama: _,
        }),
        _.createElement(
          _,
          _({}, _, {
            _: _,
          }),
        ),
      ),
  );
}
var _ = _.memo(_);
_.displayName = `Bar`;
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = (_, _) => _,
  _ = (_, _, _) => _,
  _ = (_, _, _, _) => _,
  _ = _([_, (_, _, _, _, _) => _], (_, _) =>
    _.filter((_) => _.type === `bar`).find((_) => _._ === _),
  ),
  _ = _([_], (_) => _?.maxBarSize),
  _ = (_, _, _, _, _, _) => _,
  _ = (_, _, _) => {
    var _ = _ ?? _;
    if (!_(_)) return _(_, _, 0);
  },
  _ = _([_, _, _, _, _], (_, _, _, _, _) =>
    _.filter((_) => (_ === `horizontal` ? _.xAxisId === _ : _.yAxisId === _))
      .filter((_) => _.isPanorama === _)
      .filter((_) => _.hide === !1)
      .filter((_) => _.type === `bar`),
  ),
  _ = (_, _, _, _) =>
    _(_) === `horizontal` ? _(_, `yAxis`, _, _) : _(_, `xAxis`, _, _),
  _ = _(
    [
      _,
      _,
      (_, _, _) =>
        _(_) === `horizontal` ? _(_, `xAxis`, _) : _(_, `yAxis`, _),
    ],
    (_, _, _) => {
      var _ = {},
        _ = _.filter(_),
        _ = _.filter((_) => _.stackId == null),
        _ = _.reduce(
          (_, _) => (
            _[_.stackId] || (_[_.stackId] = []),
            _[_.stackId].push(_),
            _
          ),
          _,
        ),
        _ = Object.entries(_).map((_) => {
          var [_, _] = _;
          return {
            stackId: _,
            dataKeys: _.map((_) => _.dataKey),
            barSize: _(_, _, _[0].barSize),
          };
        }),
        _ = _.map((_) => ({
          stackId: void 0,
          dataKeys: [_.dataKey].filter((_) => _ != null),
          barSize: _(_, _, _.barSize),
        }));
      return [..._, ..._];
    },
  ),
  _ = (_, _, _, _, _) => {
    var _ = _(_, _, _, _, _);
    if (_ != null) {
      var _ = _(_),
        _ = _(_),
        { maxBarSize: _ } = _,
        _ = _(_) ? _ : _,
        _,
        _;
      return (
        _ === `horizontal`
          ? ((_ = _(_, `xAxis`, _, _)), (_ = _(_, `xAxis`, _, _)))
          : ((_ = _(_, `yAxis`, _, _)), (_ = _(_, `yAxis`, _, _))),
        _(_, _, !0) ?? _ ?? 0
      );
    }
  },
  _ = (_, _, _, _) => {
    var _ = _(_),
      _,
      _;
    return (
      _ === `horizontal`
        ? ((_ = _(_, `xAxis`, _, _)), (_ = _(_, `xAxis`, _, _)))
        : ((_ = _(_, `yAxis`, _, _)), (_ = _(_, `yAxis`, _, _))),
      _(_, _)
    );
  };
function _(_, _, _, _, _) {
  var _ = _.length;
  if (!(_ < 1)) {
    var _ = _(_, _, 0, !0),
      _,
      _ = [];
    if (_(_[0].barSize)) {
      var _ = !1,
        _ = _ / _,
        _ = _.reduce((_, _) => _ + (_.barSize || 0), 0);
      ((_ += (_ - 1) * _),
        _ >= _ && ((_ -= (_ - 1) * _), (_ = 0)),
        _ >= _ && _ > 0 && ((_ = !0), (_ *= 0.9), (_ = _ * _)));
      var _ = {
        offset: (((_ - _) / 2) | 0) - _,
        size: 0,
      };
      _ = _.reduce((_, _) => {
        var _ = {
            stackId: _.stackId,
            dataKeys: _.dataKeys,
            position: {
              offset: _.offset + _.size + _,
              size: _ ? _ : (_.barSize ?? 0),
            },
          },
          _ = [..._, _];
        return ((_ = _[_.length - 1].position), _);
      }, _);
    } else {
      var _ = _(_, _, 0, !0);
      _ - 2 * _ - (_ - 1) * _ <= 0 && (_ = 0);
      var _ = (_ - 2 * _ - (_ - 1) * _) / _;
      _ > 1 && (_ >>= 0);
      var _ = _(_) ? Math.min(_, _) : _;
      _ = _.reduce(
        (_, _, _) => [
          ..._,
          {
            stackId: _.stackId,
            dataKeys: _.dataKeys,
            position: {
              offset: _ + (_ + _) * _ + (_ - _) / 2,
              size: _,
            },
          },
        ],
        _,
      );
    }
    return _;
  }
}
var _ = _(
    [
      _,
      _,
      (_, _, _, _) => _(_, `xAxis`, _, _),
      (_, _, _, _) => _(_, `yAxis`, _, _),
      (_, _, _, _) => _(_, `xAxis`, _, _),
      (_, _, _, _) => _(_, `yAxis`, _, _),
      _(
        [
          _([_, _, _, _, _, _, _], (_, _, _, _, _, _, _) => {
            var _ = _(_) ? _ : _,
              _ = _(_, _, _ === _ ? _ : _, _, _);
            return (
              _ !== _ &&
                _ != null &&
                (_ = _.map((_) =>
                  _(
                    _({}, _),
                    {},
                    {
                      position: _(
                        _({}, _.position),
                        {},
                        {
                          offset: _.position.offset - _ / 2,
                        },
                      ),
                    },
                  ),
                )),
              _
            );
          }),
          _,
        ],
        (_, _) => {
          if (_ != null && _ != null) {
            var _ = _.find(
              (_) =>
                _.stackId === _.stackId &&
                _.dataKey != null &&
                _.dataKeys.includes(_.dataKey),
            );
            if (_ != null) return _.position;
          }
        },
      ),
      _,
      _,
      _,
      _([_, _], (_, _) => {
        var _ = _(_);
        if (_ && _ != null && _ != null) {
          var { stackId: _ } = _;
          if (_ != null) {
            var _ = _[_];
            if (_) {
              var { stackedData: _ } = _;
              if (_) return _.find((_) => _.key === _);
            }
          }
        }
      }),
      _,
      _,
    ],
    (_, _, _, _, _, _, _, _, _, _, _, _, _) => {
      var { chartData: _, dataStartIndex: _, dataEndIndex: _ } = _;
      if (
        !(
          _ == null ||
          _ == null ||
          _ == null ||
          (_ !== `horizontal` && _ !== `vertical`) ||
          _ == null ||
          _ == null ||
          _ == null ||
          _ == null ||
          _ == null
        )
      ) {
        var { data: _ } = _,
          _ = _ != null && _.length > 0 ? _ : _?.slice(_, _ + 1);
        if (_ != null)
          return _({
            layout: _,
            barSettings: _,
            pos: _,
            parentViewBox: _,
            bandSize: _,
            xAxis: _,
            yAxis: _,
            xAxisTicks: _,
            yAxisTicks: _,
            stackedData: _,
            displayedData: _,
            offset: _,
            cells: _,
          });
      }
    },
  ),
  _ = (_) => {
    var { chartData: _ } = _,
      _ = _(),
      _ = _();
    return (
      (0, _.useEffect)(
        () =>
          _
            ? () => {}
            : (_(_(_)),
              () => {
                _(_(void 0));
              }),
        [_, _, _],
      ),
      null
    );
  },
  _ = {
    _: 0,
    _: 0,
    width: 0,
    height: 0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  _ = _({
    name: `brush`,
    initialState: _,
    reducers: {
      setBrushSettings(_, _) {
        return _.payload == null ? _ : _.payload;
      },
    },
  }),
  { setBrushSettings: _ } = _.actions,
  _ = _.reducer;
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
_(
  class _ {
    static create(_) {
      return new _(_);
    }
    constructor(_) {
      this.scale = _;
    }
    get domain() {
      return this.scale.domain;
    }
    get range() {
      return this.scale.range;
    }
    get rangeMin() {
      return this.range()[0];
    }
    get rangeMax() {
      return this.range()[1];
    }
    get bandwidth() {
      return this.scale.bandwidth;
    }
    apply(_) {
      var { bandAware: _, position: _ } =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (_ !== void 0) {
        if (_)
          switch (_) {
            case `start`:
              return this.scale(_);
            case `middle`:
              var _ = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(_) + _;
            case `end`:
              var _ = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(_) + _;
            default:
              return this.scale(_);
          }
        if (_) {
          var _ = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(_) + _;
        }
        return this.scale(_);
      }
    }
    isInRange(_) {
      var _ = this.range(),
        _ = _[0],
        _ = _[_.length - 1];
      return _ <= _ ? _ >= _ && _ <= _ : _ >= _ && _ <= _;
    }
  },
  `EPS`,
  1e-4,
);
function _(_) {
  return ((_ % 180) + 180) % 180;
}
var _ = function (_) {
    var { width: _, height: _ } = _,
      _ =
        (_(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0) *
          Math._) /
        180,
      _ = Math.atan(_ / _),
      _ = _ > _ && _ < Math._ - _ ? _ / Math.sin(_) : _ / Math.cos(_);
    return Math.abs(_);
  },
  _ = _({
    name: `referenceElements`,
    initialState: {
      dots: [],
      areas: [],
      lines: [],
    },
    reducers: {
      addDot: (_, _) => {
        _.dots.push(_.payload);
      },
      removeDot: (_, _) => {
        var _ = _(_).dots.findIndex((_) => _ === _.payload);
        _ !== -1 && _.dots.splice(_, 1);
      },
      addArea: (_, _) => {
        _.areas.push(_.payload);
      },
      removeArea: (_, _) => {
        var _ = _(_).areas.findIndex((_) => _ === _.payload);
        _ !== -1 && _.areas.splice(_, 1);
      },
      addLine: (_, _) => {
        _.lines.push(_.payload);
      },
      removeLine: (_, _) => {
        var _ = _(_).lines.findIndex((_) => _ === _.payload);
        _ !== -1 && _.lines.splice(_, 1);
      },
    },
  }),
  {
    addDot: _,
    removeDot: _,
    addArea: _,
    removeArea: _,
    addLine: _,
    removeLine: _,
  } = _.actions,
  _ = _.reducer,
  _ = (0, _.createContext)(void 0),
  _ = (_) => {
    var { children: _ } = _,
      [_] = (0, _.useState)(`${_(`recharts`)}-clip`),
      _ = _();
    if (_ == null) return null;
    var { _: _, _: _, width: _, height: _ } = _;
    return _.createElement(
      _.Provider,
      {
        value: _,
      },
      _.createElement(
        `defs`,
        null,
        _.createElement(
          `clipPath`,
          {
            _: _,
          },
          _.createElement(`rect`, {
            _: _,
            _: _,
            height: _,
            width: _,
          }),
        ),
      ),
      _,
    );
  };
function _(_, _) {
  for (var _ in _)
    if (
      {}.hasOwnProperty.call(_, _) &&
      (!{}.hasOwnProperty.call(_, _) || _[_] !== _[_])
    )
      return !1;
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _) && !{}.hasOwnProperty.call(_, _))
      return !1;
  return !0;
}
function _(_, _, _) {
  if (_ < 1) return [];
  if (_ === 1 && _ === void 0) return _;
  for (var _ = [], _ = 0; _ < _.length; _ += _)
    if (_ === void 0 || _(_[_]) === !0) _.push(_[_]);
    else return;
  return _;
}
function _(_, _, _) {
  return _(
    {
      width: _.width + _.width,
      height: _.height + _.height,
    },
    _,
  );
}
function _(_, _, _) {
  var _ = _ === `width`,
    { _: _, _: _, width: _, height: _ } = _;
  return _ === 1
    ? {
        start: _ ? _ : _,
        end: _ ? _ + _ : _ + _,
      }
    : {
        start: _ ? _ + _ : _ + _,
        end: _ ? _ : _,
      };
}
function _(_, _, _, _, _) {
  if (_ * _ < _ * _ || _ * _ > _ * _) return !1;
  var _ = _();
  return _ * (_ - (_ * _) / 2 - _) >= 0 && _ * (_ + (_ * _) / 2 - _) <= 0;
}
function _(_, _) {
  return _(_, _ + 1);
}
function _(_, _, _, _, _) {
  for (
    var _ = (_ || []).slice(),
      { start: _, end: _ } = _,
      _ = 0,
      _ = 1,
      _ = _,
      _ = function () {
        var _ = _?.[_];
        if (_ === void 0)
          return {
            _: _(_, _),
          };
        var _ = _,
          _,
          _ = () => (_ === void 0 && (_ = _(_, _)), _),
          _ = _.coordinate,
          _ = _ === 0 || _(_, _, _, _, _);
        (_ || ((_ = 0), (_ = _), (_ += 1)),
          _ && ((_ = _ + _ * (_() / 2 + _)), (_ += _)));
      },
      _;
    _ <= _.length;
  )
    if (((_ = _()), _)) return _._;
  return [];
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_, _, _, _, _) {
  for (
    var _ = (_ || []).slice(),
      _ = _.length,
      { start: _ } = _,
      { end: _ } = _,
      _ = function (_) {
        var _ = _[_],
          _,
          _ = () => (_ === void 0 && (_ = _(_, _)), _);
        if (_ === _ - 1) {
          var _ = _ * (_.coordinate + (_ * _()) / 2 - _);
          _[_] = _ = _(
            _({}, _),
            {},
            {
              tickCoord: _ > 0 ? _.coordinate - _ * _ : _.coordinate,
            },
          );
        } else
          _[_] = _ = _(
            _({}, _),
            {},
            {
              tickCoord: _.coordinate,
            },
          );
        _(_, _.tickCoord, _, _, _) &&
          ((_ = _.tickCoord - _ * (_() / 2 + _)),
          (_[_] = _(
            _({}, _),
            {},
            {
              isShow: !0,
            },
          )));
      },
      _ = _ - 1;
    _ >= 0;
    _--
  )
    _(_);
  return _;
}
function _(_, _, _, _, _, _) {
  var _ = (_ || []).slice(),
    _ = _.length,
    { start: _, end: _ } = _;
  if (_) {
    var _ = _[_ - 1],
      _ = _(_, _ - 1),
      _ = _ * (_.coordinate + (_ * _) / 2 - _);
    ((_[_ - 1] = _ =
      _(
        _({}, _),
        {},
        {
          tickCoord: _ > 0 ? _.coordinate - _ * _ : _.coordinate,
        },
      )),
      _(_, _.tickCoord, () => _, _, _) &&
        ((_ = _.tickCoord - _ * (_ / 2 + _)),
        (_[_ - 1] = _(
          _({}, _),
          {},
          {
            isShow: !0,
          },
        ))));
  }
  for (
    var _ = _ ? _ - 1 : _,
      _ = function (_) {
        var _ = _[_],
          _,
          _ = () => (_ === void 0 && (_ = _(_, _)), _);
        if (_ === 0) {
          var _ = _ * (_.coordinate - (_ * _()) / 2 - _);
          _[_] = _ = _(
            _({}, _),
            {},
            {
              tickCoord: _ < 0 ? _.coordinate - _ * _ : _.coordinate,
            },
          );
        } else
          _[_] = _ = _(
            _({}, _),
            {},
            {
              tickCoord: _.coordinate,
            },
          );
        _(_, _.tickCoord, _, _, _) &&
          ((_ = _.tickCoord + _ * (_() / 2 + _)),
          (_[_] = _(
            _({}, _),
            {},
            {
              isShow: !0,
            },
          )));
      },
      _ = 0;
    _ < _;
    _++
  )
    _(_);
  return _;
}
function _(_, _, _) {
  var {
    tick: _,
    ticks: _,
    viewBox: _,
    minTickGap: _,
    orientation: _,
    interval: _,
    tickFormatter: _,
    unit: _,
    angle: _,
  } = _;
  if (!_ || !_.length || !_) return [];
  if (_(_) || _.isSsr) return _(_, _(_) ? _ : 0) ?? [];
  var _ = [],
    _ = _ === `top` || _ === `bottom` ? `width` : `height`,
    _ =
      _ && _ === `width`
        ? _(_, {
            fontSize: _,
            letterSpacing: _,
          })
        : {
            width: 0,
            height: 0,
          },
    _ = (_, _) => {
      var _ = typeof _ == `function` ? _(_.value, _) : _.value;
      return _ === `width`
        ? _(
            _(_, {
              fontSize: _,
              letterSpacing: _,
            }),
            _,
            _,
          )
        : _(_, {
            fontSize: _,
            letterSpacing: _,
          })[_];
    },
    _ = _.length >= 2 ? _(_[1].coordinate - _[0].coordinate) : 1,
    _ = _(_, _, _);
  return _ === `equidistantPreserveStart`
    ? _(_, _, _, _, _)
    : ((_ =
        _ === `preserveStart` || _ === `preserveStartEnd`
          ? _(_, _, _, _, _, _ === `preserveStartEnd`)
          : _(_, _, _, _, _)),
      _.filter((_) => _.isShow));
}
var _ = (_) => {
    var {
        ticks: _,
        label: _,
        labelGapWithTick: _ = 5,
        tickSize: _ = 0,
        tickMargin: _ = 0,
      } = _,
      _ = 0;
    if (_) {
      Array.from(_).forEach((_) => {
        if (_) {
          var _ = _.getBoundingClientRect();
          _.width > _ && (_ = _.width);
        }
      });
      var _ = _ ? _.getBoundingClientRect().width : 0,
        _ = _ + _,
        _ = _ + _ + _ + (_ ? _ : 0);
      return Math.round(_);
    }
    return 0;
  },
  _ = [`axisLine`, `width`, `height`, `className`, `hide`, `ticks`],
  _ = [`viewBox`],
  _ = [`viewBox`];
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = {
  _: 0,
  _: 0,
  width: 0,
  height: 0,
  viewBox: {
    _: 0,
    _: 0,
    width: 0,
    height: 0,
  },
  orientation: `bottom`,
  ticks: [],
  stroke: `#666`,
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: `preserveEnd`,
};
function _(_) {
  var {
    _: _,
    _: _,
    width: _,
    height: _,
    orientation: _,
    mirror: _,
    axisLine: _,
    otherSvgProps: _,
  } = _;
  if (!_) return null;
  var _ = _(
    _(_({}, _), _(_)),
    {},
    {
      fill: `none`,
    },
  );
  if (_ === `top` || _ === `bottom`) {
    var _ = +((_ === `top` && !_) || (_ === `bottom` && _));
    _ = _(
      _({}, _),
      {},
      {
        _: _,
        _: _ + _ * _,
        _: _ + _,
        _: _ + _ * _,
      },
    );
  } else {
    var _ = +((_ === `left` && !_) || (_ === `right` && _));
    _ = _(
      _({}, _),
      {},
      {
        _: _ + _ * _,
        _: _,
        _: _ + _ * _,
        _: _ + _,
      },
    );
  }
  return _.createElement(
    `line`,
    _({}, _, {
      className: _(
        `recharts-cartesian-axis-line`,
        (0, _.default)(_, `className`),
      ),
    }),
  );
}
function _(_, _, _, _, _, _, _, _, _) {
  var _,
    _,
    _,
    _,
    _,
    _,
    _ = _ ? -1 : 1,
    _ = _.tickSize || _,
    _ = _(_.tickCoord) ? _.tickCoord : _.coordinate;
  switch (_) {
    case `top`:
      ((_ = _ = _.coordinate),
        (_ = _ + +!_ * _),
        (_ = _ - _ * _),
        (_ = _ - _ * _),
        (_ = _));
      break;
    case `left`:
      ((_ = _ = _.coordinate),
        (_ = _ + +!_ * _),
        (_ = _ - _ * _),
        (_ = _ - _ * _),
        (_ = _));
      break;
    case `right`:
      ((_ = _ = _.coordinate),
        (_ = _ + +_ * _),
        (_ = _ + _ * _),
        (_ = _ + _ * _),
        (_ = _));
      break;
    default:
      ((_ = _ = _.coordinate),
        (_ = _ + +_ * _),
        (_ = _ + _ * _),
        (_ = _ + _ * _),
        (_ = _));
  }
  return {
    line: {
      _: _,
      _: _,
      _: _,
      _: _,
    },
    tick: {
      _: _,
      _: _,
    },
  };
}
function _(_, _) {
  switch (_) {
    case `left`:
      return _ ? `start` : `end`;
    case `right`:
      return _ ? `end` : `start`;
    default:
      return `middle`;
  }
}
function _(_, _) {
  switch (_) {
    case `left`:
    case `right`:
      return `middle`;
    case `top`:
      return _ ? `start` : `end`;
    default:
      return _ ? `end` : `start`;
  }
}
function _(_) {
  var { option: _, tickProps: _, value: _ } = _,
    _,
    _ = _(_.className, `recharts-cartesian-axis-tick-value`);
  if (_.isValidElement(_))
    _ = _.cloneElement(
      _,
      _(
        _({}, _),
        {},
        {
          className: _,
        },
      ),
    );
  else if (typeof _ == `function`)
    _ = _(
      _(
        _({}, _),
        {},
        {
          className: _,
        },
      ),
    );
  else {
    var _ = `recharts-cartesian-axis-tick-value`;
    (typeof _ != `boolean` && (_ = _(_, _?.className)),
      (_ = _.createElement(
        _,
        _({}, _, {
          className: _,
        }),
        _,
      )));
  }
  return _;
}
function _(_) {
  var {
      ticks: _ = [],
      tick: _,
      tickLine: _,
      stroke: _,
      tickFormatter: _,
      unit: _,
      padding: _,
      tickTextProps: _,
      orientation: _,
      mirror: _,
      _: _,
      _: _,
      width: _,
      height: _,
      tickSize: _,
      tickMargin: _,
      fontSize: _,
      letterSpacing: _,
      getTicksConfig: _,
      events: _,
    } = _,
    _ = _(
      _(
        _({}, _),
        {},
        {
          ticks: _,
        },
      ),
      _,
      _,
    ),
    _ = _(_, _),
    _ = _(_, _),
    _ = _(_),
    _ = _(_),
    _ = {};
  typeof _ == `object` && (_ = _);
  var _ = _(
      _({}, _),
      {},
      {
        fill: `none`,
      },
      _,
    ),
    _ = _.map((_, _) => {
      var { line: _, tick: _ } = _(_, _, _, _, _, _, _, _, _),
        _ = _(
          _(
            _(
              _(
                {
                  textAnchor: _,
                  verticalAnchor: _,
                },
                _,
              ),
              {},
              {
                stroke: `none`,
                fill: _,
              },
              _,
            ),
            _,
          ),
          {},
          {
            index: _,
            payload: _,
            visibleTicksCount: _.length,
            tickFormatter: _,
            padding: _,
          },
          _,
        );
      return _.createElement(
        _,
        _(
          {
            className: `recharts-cartesian-axis-tick`,
            key: `tick-${_.value}-${_.coordinate}-${_.tickCoord}`,
          },
          _(_, _, _),
        ),
        _ &&
          _.createElement(
            `line`,
            _({}, _, _, {
              className: _(
                `recharts-cartesian-axis-tick-line`,
                (0, _.default)(_, `className`),
              ),
            }),
          ),
        _ &&
          _.createElement(_, {
            option: _,
            tickProps: _,
            value: `${typeof _ == `function` ? _(_.value, _) : _.value}${_ || ``}`,
          }),
      );
    });
  return _.length > 0
    ? _.createElement(
        `g`,
        {
          className: `recharts-cartesian-axis-ticks`,
        },
        _,
      )
    : null;
}
var _ = (0, _.forwardRef)((_, _) => {
    var {
        axisLine: _,
        width: _,
        height: _,
        className: _,
        hide: _,
        ticks: _,
      } = _,
      _ = _(_, _),
      [_, _] = (0, _.useState)(``),
      [_, _] = (0, _.useState)(``),
      _ = (0, _.useRef)(null);
    (0, _.useImperativeHandle)(_, () => ({
      getCalculatedWidth: () =>
        _({
          ticks: _.current,
          label: _.labelRef?.current,
          labelGapWithTick: 5,
          tickSize: _.tickSize,
          tickMargin: _.tickMargin,
        }),
    }));
    var _ = (0, _.useCallback)(
      (_) => {
        if (_) {
          var _ = _.getElementsByClassName(
            `recharts-cartesian-axis-tick-value`,
          );
          _.current = _;
          var _ = _[0];
          if (_) {
            var _ = window.getComputedStyle(_),
              _ = _.fontSize,
              _ = _.letterSpacing;
            (_ !== _ || _ !== _) && (_(_), _(_));
          }
        }
      },
      [_, _],
    );
    return _ || (_ != null && _ <= 0) || (_ != null && _ <= 0)
      ? null
      : _.createElement(
          _,
          {
            className: _(`recharts-cartesian-axis`, _),
            ref: _,
          },
          _.createElement(_, {
            _: _._,
            _: _._,
            width: _,
            height: _,
            orientation: _.orientation,
            mirror: _.mirror,
            axisLine: _,
            otherSvgProps: _(_),
          }),
          _.createElement(_, {
            ticks: _,
            tick: _.tick,
            tickLine: _.tickLine,
            stroke: _.stroke,
            tickFormatter: _.tickFormatter,
            unit: _.unit,
            padding: _.padding,
            tickTextProps: _.tickTextProps,
            orientation: _.orientation,
            mirror: _.mirror,
            _: _._,
            _: _._,
            width: _.width,
            height: _.height,
            tickSize: _.tickSize,
            tickMargin: _.tickMargin,
            fontSize: _,
            letterSpacing: _,
            getTicksConfig: _,
            events: _,
          }),
          _.createElement(
            _,
            {
              _: _._,
              _: _._,
              width: _.width,
              height: _.height,
            },
            _.createElement(_, {
              label: _.label,
              labelRef: _.labelRef,
            }),
            _.children,
          ),
        );
  }),
  _ = _.memo(_, (_, _) => {
    var { viewBox: _ } = _,
      _ = _(_, _),
      { viewBox: _ } = _,
      _ = _(_, _);
    return _(_, _) && _(_, _);
  }),
  _ = _.forwardRef((_, _) => {
    var _ = _(_, _);
    return _.createElement(
      _,
      _({}, _, {
        ref: _,
      }),
    );
  });
_.displayName = `CartesianAxis`;
var _ = [`x1`, `y1`, `x2`, `y2`, `key`],
  _ = [`offset`],
  _ = [`xAxisId`, `yAxisId`],
  _ = [`xAxisId`, `yAxisId`];
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = (_) => {
  var { fill: _ } = _;
  if (!_ || _ === `none`) return null;
  var { fillOpacity: _, _: _, _: _, width: _, height: _, _: _ } = _;
  return _.createElement(`rect`, {
    _: _,
    _: _,
    _: _,
    width: _,
    height: _,
    stroke: `none`,
    fill: _,
    fillOpacity: _,
    className: `recharts-cartesian-grid-bg`,
  });
};
function _(_, _) {
  var _;
  if (_.isValidElement(_)) _ = _.cloneElement(_, _);
  else if (typeof _ == `function`) _ = _(_);
  else {
    var { _: _, _: _, _: _, _: _, key: _ } = _,
      _ = _(_(_, _)),
      { offset: _ } = _,
      _ = _(_, _);
    _ = _.createElement(
      `line`,
      _({}, _, {
        _: _,
        _: _,
        _: _,
        _: _,
        fill: `none`,
        key: _,
      }),
    );
  }
  return _;
}
function _(_) {
  var { _: _, width: _, horizontal: _ = !0, horizontalPoints: _ } = _;
  if (!_ || !_ || !_.length) return null;
  var { xAxisId: _, yAxisId: _ } = _,
    _ = _(_, _),
    _ = _.map((_, _) =>
      _(
        _,
        _(
          _({}, _),
          {},
          {
            _: _,
            _: _,
            _: _ + _,
            _: _,
            key: `line-${_}`,
            index: _,
          },
        ),
      ),
    );
  return _.createElement(
    `g`,
    {
      className: `recharts-cartesian-grid-horizontal`,
    },
    _,
  );
}
function _(_) {
  var { _: _, height: _, vertical: _ = !0, verticalPoints: _ } = _;
  if (!_ || !_ || !_.length) return null;
  var { xAxisId: _, yAxisId: _ } = _,
    _ = _(_, _),
    _ = _.map((_, _) =>
      _(
        _,
        _(
          _({}, _),
          {},
          {
            _: _,
            _: _,
            _: _,
            _: _ + _,
            key: `line-${_}`,
            index: _,
          },
        ),
      ),
    );
  return _.createElement(
    `g`,
    {
      className: `recharts-cartesian-grid-vertical`,
    },
    _,
  );
}
function _(_) {
  var {
    horizontalFill: _,
    fillOpacity: _,
    _: _,
    _: _,
    width: _,
    height: _,
    horizontalPoints: _,
    horizontal: _ = !0,
  } = _;
  if (!_ || !_ || !_.length) return null;
  var _ = _.map((_) => Math.round(_ + _ - _)).sort((_, _) => _ - _);
  _ !== _[0] && _.unshift(0);
  var _ = _.map((_, _) => {
    var _ = _[_ + 1] ? _[_ + 1] - _ : _ + _ - _;
    if (_ <= 0) return null;
    var _ = _ % _.length;
    return _.createElement(`rect`, {
      key: `react-${_}`,
      _: _,
      _: _,
      height: _,
      width: _,
      stroke: `none`,
      fill: _[_],
      fillOpacity: _,
      className: `recharts-cartesian-grid-bg`,
    });
  });
  return _.createElement(
    `g`,
    {
      className: `recharts-cartesian-gridstripes-horizontal`,
    },
    _,
  );
}
function _(_) {
  var {
    vertical: _ = !0,
    verticalFill: _,
    fillOpacity: _,
    _: _,
    _: _,
    width: _,
    height: _,
    verticalPoints: _,
  } = _;
  if (!_ || !_ || !_.length) return null;
  var _ = _.map((_) => Math.round(_ + _ - _)).sort((_, _) => _ - _);
  _ !== _[0] && _.unshift(0);
  var _ = _.map((_, _) => {
    var _ = _[_ + 1] ? _[_ + 1] - _ : _ + _ - _;
    if (_ <= 0) return null;
    var _ = _ % _.length;
    return _.createElement(`rect`, {
      key: `react-${_}`,
      _: _,
      _: _,
      width: _,
      height: _,
      stroke: `none`,
      fill: _[_],
      fillOpacity: _,
      className: `recharts-cartesian-grid-bg`,
    });
  });
  return _.createElement(
    `g`,
    {
      className: `recharts-cartesian-gridstripes-vertical`,
    },
    _,
  );
}
var _ = (_, _) => {
    var { xAxis: _, width: _, height: _, offset: _ } = _;
    return _(
      _(
        _(
          _(_({}, _), _),
          {},
          {
            ticks: _(_, !0),
            viewBox: {
              _: 0,
              _: 0,
              width: _,
              height: _,
            },
          },
        ),
      ),
      _.left,
      _.left + _.width,
      _,
    );
  },
  _ = (_, _) => {
    var { yAxis: _, width: _, height: _, offset: _ } = _;
    return _(
      _(
        _(
          _(_({}, _), _),
          {},
          {
            ticks: _(_, !0),
            viewBox: {
              _: 0,
              _: 0,
              width: _,
              height: _,
            },
          },
        ),
      ),
      _.top,
      _.top + _.height,
      _,
    );
  },
  _ = {
    horizontal: !0,
    vertical: !0,
    horizontalPoints: [],
    verticalPoints: [],
    stroke: `#ccc`,
    fill: `none`,
    verticalFill: [],
    horizontalFill: [],
    xAxisId: 0,
    yAxisId: 0,
  };
function _(_) {
  var _ = _(),
    _ = _(),
    _ = _(),
    _ = _(
      _({}, _(_, _)),
      {},
      {
        _: _(_._) ? _._ : _.left,
        _: _(_._) ? _._ : _.top,
        width: _(_.width) ? _.width : _.width,
        height: _(_.height) ? _.height : _.height,
      },
    ),
    {
      xAxisId: _,
      yAxisId: _,
      _: _,
      _: _,
      width: _,
      height: _,
      syncWithTicks: _,
      horizontalValues: _,
      verticalValues: _,
    } = _,
    _ = _(),
    _ = _((_) => _(_, `xAxis`, _, _)),
    _ = _((_) => _(_, `yAxis`, _, _));
  if (
    !_(_) ||
    _ <= 0 ||
    !_(_) ||
    _ <= 0 ||
    !_(_) ||
    _ !== +_ ||
    !_(_) ||
    _ !== +_
  )
    return null;
  var _ = _.verticalCoordinatesGenerator || _,
    _ = _.horizontalCoordinatesGenerator || _,
    { horizontalPoints: _, verticalPoints: _ } = _;
  if ((!_ || !_.length) && typeof _ == `function`) {
    var _ = _ && _.length,
      _ = _(
        {
          yAxis: _
            ? _(
                _({}, _),
                {},
                {
                  ticks: _ ? _ : _.ticks,
                },
              )
            : void 0,
          width: _,
          height: _,
          offset: _,
        },
        _ ? !0 : _,
      );
    Array.isArray(_) && (_ = _);
  }
  if ((!_ || !_.length) && typeof _ == `function`) {
    var _ = _ && _.length,
      _ = _(
        {
          xAxis: _
            ? _(
                _({}, _),
                {},
                {
                  ticks: _ ? _ : _.ticks,
                },
              )
            : void 0,
          width: _,
          height: _,
          offset: _,
        },
        _ ? !0 : _,
      );
    Array.isArray(_) && (_ = _);
  }
  return _.createElement(
    `g`,
    {
      className: `recharts-cartesian-grid`,
    },
    _.createElement(_, {
      fill: _.fill,
      fillOpacity: _.fillOpacity,
      _: _._,
      _: _._,
      width: _.width,
      height: _.height,
      _: _._,
    }),
    _.createElement(
      _,
      _({}, _, {
        horizontalPoints: _,
      }),
    ),
    _.createElement(
      _,
      _({}, _, {
        verticalPoints: _,
      }),
    ),
    _.createElement(
      _,
      _({}, _, {
        offset: _,
        horizontalPoints: _,
        xAxis: _,
        yAxis: _,
      }),
    ),
    _.createElement(
      _,
      _({}, _, {
        offset: _,
        verticalPoints: _,
        xAxis: _,
        yAxis: _,
      }),
    ),
  );
}
_.displayName = `CartesianGrid`;
var _ = [`dangerouslySetInnerHTML`, `ticks`],
  _ = [`id`],
  _ = [`domain`],
  _ = [`domain`];
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
function _(_) {
  var _ = _();
  return (
    (0, _.useLayoutEffect)(
      () => (
        _(_(_)),
        () => {
          _(_(_));
        }
      ),
      [_, _],
    ),
    null
  );
}
var _ = (_) => {
    var { xAxisId: _, className: _ } = _,
      _ = _(_),
      _ = _(),
      _ = `xAxis`,
      _ = _((_) => _(_, _, _, _)),
      _ = _((_) => _(_, _, _, _)),
      _ = _((_) => _(_, _)),
      _ = _((_) => _(_, _)),
      _ = _((_) => _(_, _));
    if (_ == null || _ == null || _ == null) return null;
    var { dangerouslySetInnerHTML: _, ticks: _ } = _,
      _ = _(_, _),
      { _: _ } = _,
      _ = _(_, _);
    return _.createElement(
      _,
      _({}, _, _, {
        scale: _,
        _: _._,
        _: _._,
        width: _.width,
        height: _.height,
        className: _(`recharts-${_} ${_}`, _),
        viewBox: _,
        ticks: _,
      }),
    );
  },
  _ = {
    allowDataOverflow: _.allowDataOverflow,
    allowDecimals: _.allowDecimals,
    allowDuplicatedCategory: _.allowDuplicatedCategory,
    height: _.height,
    hide: !1,
    mirror: _.mirror,
    orientation: _.orientation,
    padding: _.padding,
    reversed: _.reversed,
    scale: _.scale,
    tickCount: _.tickCount,
    type: _.type,
    xAxisId: 0,
  },
  _ = _.memo(
    (_) => {
      var _ = _(_, _);
      return _.createElement(
        _.Fragment,
        null,
        _.createElement(_, {
          interval: _.interval ?? `preserveEnd`,
          _: _.xAxisId,
          scale: _.scale,
          type: _.type,
          padding: _.padding,
          allowDataOverflow: _.allowDataOverflow,
          domain: _.domain,
          dataKey: _.dataKey,
          allowDuplicatedCategory: _.allowDuplicatedCategory,
          allowDecimals: _.allowDecimals,
          tickCount: _.tickCount,
          includeHidden: _.includeHidden ?? !1,
          reversed: _.reversed,
          ticks: _.ticks,
          height: _.height,
          orientation: _.orientation,
          mirror: _.mirror,
          hide: _.hide,
          unit: _.unit,
          name: _.name,
          angle: _.angle ?? 0,
          minTickGap: _.minTickGap ?? 5,
          tick: _.tick ?? !0,
          tickFormatter: _.tickFormatter,
        }),
        _.createElement(_, _),
      );
    },
    (_, _) => {
      var { domain: _ } = _,
        _ = _(_, _),
        { domain: _ } = _;
      return _(_, _(_, _))
        ? Array.isArray(_) &&
          _.length === 2 &&
          Array.isArray(_) &&
          _.length === 2
          ? _[0] === _[0] && _[1] === _[1]
          : _(
              {
                domain: _,
              },
              {
                domain: _,
              },
            )
        : !1;
    },
  );
_.displayName = `XAxis`;
var _ = [`dangerouslySetInnerHTML`, `ticks`],
  _ = [`id`],
  _ = [`domain`],
  _ = [`domain`];
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
function _(_) {
  var _ = _();
  return (
    (0, _.useLayoutEffect)(
      () => (
        _(_(_)),
        () => {
          _(_(_));
        }
      ),
      [_, _],
    ),
    null
  );
}
var _ = (_) => {
    var { yAxisId: _, className: _, width: _, label: _ } = _,
      _ = (0, _.useRef)(null),
      _ = (0, _.useRef)(null),
      _ = _(_),
      _ = _(),
      _ = _(),
      _ = `yAxis`,
      _ = _((_) => _(_, _, _, _)),
      _ = _((_) => _(_, _)),
      _ = _((_) => _(_, _)),
      _ = _((_) => _(_, _, _, _)),
      _ = _((_) => _(_, _));
    if (
      ((0, _.useLayoutEffect)(() => {
        if (
          !(_ !== `auto` || !_ || _(_) || (0, _.isValidElement)(_) || _ == null)
        ) {
          var _ = _.current;
          if (_) {
            var _ = _.getCalculatedWidth();
            Math.round(_.width) !== Math.round(_) &&
              _(
                _({
                  _: _,
                  width: _,
                }),
              );
          }
        }
      }, [_, _, _, _, _, _, _]),
      _ == null || _ == null || _ == null)
    )
      return null;
    var { dangerouslySetInnerHTML: _, ticks: _ } = _,
      _ = _(_, _),
      { _: _ } = _,
      _ = _(_, _);
    return _.createElement(
      _,
      _({}, _, _, {
        ref: _,
        labelRef: _,
        scale: _,
        _: _._,
        _: _._,
        tickTextProps:
          _ === `auto`
            ? {
                width: void 0,
              }
            : {
                width: _,
              },
        width: _.width,
        height: _.height,
        className: _(`recharts-${_} ${_}`, _),
        viewBox: _,
        ticks: _,
      }),
    );
  },
  _ = {
    allowDataOverflow: _.allowDataOverflow,
    allowDecimals: _.allowDecimals,
    allowDuplicatedCategory: _.allowDuplicatedCategory,
    hide: !1,
    mirror: _.mirror,
    orientation: _.orientation,
    padding: _.padding,
    reversed: _.reversed,
    scale: _.scale,
    tickCount: _.tickCount,
    type: _.type,
    width: _.width,
    yAxisId: 0,
  },
  _ = _.memo(
    (_) => {
      var _ = _(_, _);
      return _.createElement(
        _.Fragment,
        null,
        _.createElement(_, {
          interval: _.interval ?? `preserveEnd`,
          _: _.yAxisId,
          scale: _.scale,
          type: _.type,
          domain: _.domain,
          allowDataOverflow: _.allowDataOverflow,
          dataKey: _.dataKey,
          allowDuplicatedCategory: _.allowDuplicatedCategory,
          allowDecimals: _.allowDecimals,
          tickCount: _.tickCount,
          padding: _.padding,
          includeHidden: _.includeHidden ?? !1,
          reversed: _.reversed,
          ticks: _.ticks,
          width: _.width,
          orientation: _.orientation,
          mirror: _.mirror,
          hide: _.hide,
          unit: _.unit,
          name: _.name,
          angle: _.angle ?? 0,
          minTickGap: _.minTickGap ?? 5,
          tick: _.tick ?? !0,
          tickFormatter: _.tickFormatter,
        }),
        _.createElement(_, _),
      );
    },
    (_, _) => {
      var { domain: _ } = _,
        _ = _(_, _),
        { domain: _ } = _;
      return _(_, _(_, _))
        ? Array.isArray(_) &&
          _.length === 2 &&
          Array.isArray(_) &&
          _.length === 2
          ? _[0] === _[0] && _[1] === _[1]
          : _(
              {
                domain: _,
              },
              {
                domain: _,
              },
            )
        : !1;
    },
  );
_.displayName = `YAxis`;
var _ = _((_) => {
  var _ = _();
  (_.useSyncExternalStore, _.useRef, _.useEffect, _.useMemo, _.useDebugValue);
});
_((_, _) => {
  _.exports = _();
})();
function _(_) {
  _();
}
function _() {
  let _ = null,
    _ = null;
  return {
    clear() {
      ((_ = null), (_ = null));
    },
    notify() {
      _(() => {
        let _ = _;
        for (; _;) (_.callback(), (_ = _.next));
      });
    },
    get() {
      let _ = [],
        _ = _;
      for (; _;) (_.push(_), (_ = _.next));
      return _;
    },
    subscribe(_) {
      let _ = !0,
        _ = (_ = {
          callback: _,
          next: null,
          prev: _,
        });
      return (
        _.prev ? (_.prev.next = _) : (_ = _),
        function () {
          _ &&
            _ !== null &&
            ((_ = !1),
            _.next ? (_.next.prev = _.prev) : (_ = _.prev),
            _.prev ? (_.prev.next = _.next) : (_ = _.next));
        }
      );
    },
  };
}
var _ = {
  notify() {},
  get: () => [],
};
function _(_, _) {
  let _,
    _ = _,
    _ = 0,
    _ = !1;
  function _(_) {
    _();
    let _ = _.subscribe(_),
      _ = !1;
    return () => {
      _ || ((_ = !0), _(), _());
    };
  }
  function _() {
    _.notify();
  }
  function _() {
    _.onStateChange && _.onStateChange();
  }
  function _() {
    return _;
  }
  function _() {
    (_++, _ || ((_ = _ ? _.addNestedSub(_) : _.subscribe(_)), (_ = _())));
  }
  function _() {
    (_--, _ && _ === 0 && (_(), (_ = void 0), _.clear(), (_ = _)));
  }
  function _() {
    _ || ((_ = !0), _());
  }
  function _() {
    _ && ((_ = !1), _());
  }
  let _ = {
    addNestedSub: _,
    notifyNestedSubs: _,
    handleChangeWrapper: _,
    isSubscribed: _,
    trySubscribe: _,
    tryUnsubscribe: _,
    getListeners: () => _,
  };
  return _;
}
var _ =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  _ = typeof navigator < `u` && navigator.product === `ReactNative`,
  _ = _ || _ ? _.useLayoutEffect : _.useEffect,
  _ = Symbol.for(`react-redux-context`),
  _ = typeof globalThis < `u` ? globalThis : {};
function _() {
  if (!_.createContext) return {};
  let _ = (_[_] ??= new Map()),
    _ = _.get(_.createContext);
  return (_ || ((_ = _.createContext(null)), _.set(_.createContext, _)), _);
}
var _ = _();
function _(_) {
  let { children: _, context: _, serverState: _, store: _ } = _,
    _ = _.useMemo(() => {
      let _ = _(_);
      return {
        store: _,
        subscription: _,
        getServerState: _ ? () => _ : void 0,
      };
    }, [_, _]),
    _ = _.useMemo(() => _.getState(), [_]);
  _(() => {
    let { subscription: _ } = _;
    return (
      (_.onStateChange = _.notifyNestedSubs),
      _.trySubscribe(),
      _ !== _.getState() && _.notifyNestedSubs(),
      () => {
        (_.tryUnsubscribe(), (_.onStateChange = void 0));
      }
    );
  }, [_, _]);
  let _ = _ || _;
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
var _ = _,
  _ = _([(_, _) => _, _, _, _, _, _, _, _], _),
  _ = (_) => {
    var _ = _.currentTarget.getBoundingClientRect(),
      _ = _.width / _.currentTarget.offsetWidth,
      _ = _.height / _.currentTarget.offsetHeight;
    return {
      chartX: Math.round((_.clientX - _.left) / _),
      chartY: Math.round((_.clientY - _.top) / _),
    };
  },
  _ = _(`mouseClick`),
  _ = _();
_.startListening({
  actionCreator: _,
  effect: (_, _) => {
    var _ = _.payload,
      _ = _(_.getState(), _(_));
    _?.activeIndex != null &&
      _.dispatch(
        _({
          activeIndex: _.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: _.activeCoordinate,
        }),
      );
  },
});
var _ = _(`mouseMove`),
  _ = _();
_.startListening({
  actionCreator: _,
  effect: (_, _) => {
    var _ = _.payload,
      _ = _.getState(),
      _ = _(_, _.tooltip.settings.shared),
      _ = _(_, _(_));
    _ === `axis` &&
      (_?.activeIndex == null
        ? _.dispatch(_())
        : _.dispatch(
            _({
              activeIndex: _.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: _.activeCoordinate,
            }),
          ));
  },
});
function _(_, _) {
  return _ instanceof HTMLElement
    ? `HTMLElement <${_.tagName} class="${_.className}">`
    : _ === window
      ? `global.window`
      : _;
}
var _ = {
    accessibilityLayer: !0,
    barCategoryGap: `10%`,
    barGap: 4,
    barSize: void 0,
    className: void 0,
    maxBarSize: void 0,
    stackOffset: `none`,
    syncId: void 0,
    syncMethod: `index`,
  },
  _ = _({
    name: `rootProps`,
    initialState: _,
    reducers: {
      updateOptions: (_, _) => {
        ((_.accessibilityLayer = _.payload.accessibilityLayer),
          (_.barCategoryGap = _.payload.barCategoryGap),
          (_.barGap = _.payload.barGap ?? _.barGap),
          (_.barSize = _.payload.barSize),
          (_.maxBarSize = _.payload.maxBarSize),
          (_.stackOffset = _.payload.stackOffset),
          (_.syncId = _.payload.syncId),
          (_.syncMethod = _.payload.syncMethod),
          (_.className = _.payload.className));
      },
    },
  }),
  _ = _.reducer,
  { updateOptions: _ } = _.actions,
  _ = _({
    name: `polarOptions`,
    initialState: null,
    reducers: {
      updatePolarOptions: (_, _) => _.payload,
    },
  }),
  { updatePolarOptions: _ } = _.actions,
  _ = _.reducer,
  _ = _(`keyDown`),
  _ = _(`focus`),
  _ = _();
(_.startListening({
  actionCreator: _,
  effect: (_, _) => {
    var _ = _.getState();
    if (_.rootProps.accessibilityLayer !== !1) {
      var { keyboardInteraction: _ } = _.tooltip,
        _ = _.payload;
      if (_ === `ArrowRight` || _ === `ArrowLeft` || _ === `Enter`) {
        var _ = Number(_(_, _(_))),
          _ = _(_);
        if (_ === `Enter`) {
          var _ = _(_, `axis`, `hover`, String(_.index));
          _.dispatch(
            _({
              active: !_.active,
              activeIndex: _.index,
              activeDataKey: _.dataKey,
              activeCoordinate: _,
            }),
          );
        } else {
          var _ = _(_) === `left-to-right` ? 1 : -1,
            _ = _ + (_ === `ArrowRight` ? 1 : -1) * _;
          if (!(_ == null || _ >= _.length || _ < 0)) {
            var _ = _(_, `axis`, `hover`, String(_));
            _.dispatch(
              _({
                active: !0,
                activeIndex: _.toString(),
                activeDataKey: void 0,
                activeCoordinate: _,
              }),
            );
          }
        }
      }
    }
  },
}),
  _.startListening({
    actionCreator: _,
    effect: (_, _) => {
      var _ = _.getState();
      if (_.rootProps.accessibilityLayer !== !1) {
        var { keyboardInteraction: _ } = _.tooltip;
        if (!_.active && _.index == null) {
          var _ = `0`,
            _ = _(_, `axis`, `hover`, String(_));
          _.dispatch(
            _({
              activeDataKey: void 0,
              active: !0,
              activeIndex: _,
              activeCoordinate: _,
            }),
          );
        }
      }
    },
  }));
var _ = _(`externalEvent`),
  _ = _();
_.startListening({
  actionCreator: _,
  effect: (_, _) => {
    if (_.payload.handler != null) {
      var _ = _.getState(),
        _ = {
          activeCoordinate: _(_),
          activeDataKey: _(_),
          activeIndex: _(_),
          activeLabel: _(_),
          activeTooltipIndex: _(_),
          isTooltipActive: _(_),
        };
      _.payload.handler(_, _.payload.reactEvent);
    }
  },
});
var _ = _(
    [_([_], (_) => _.tooltipItemPayloads), _, (_, _, _) => _, (_, _, _) => _],
    (_, _, _, _) => {
      var _ = _.find((_) => _.settings.dataKey === _);
      if (_ != null) {
        var { positions: _ } = _;
        if (_ != null) return _(_, _);
      }
    },
  ),
  _ = _(`touchMove`),
  _ = _();
_.startListening({
  actionCreator: _,
  effect: (_, _) => {
    var _ = _.payload,
      _ = _.getState(),
      _ = _(_, _.tooltip.settings.shared);
    if (_ === `axis`) {
      var _ = _(
        _,
        _({
          clientX: _.touches[0].clientX,
          clientY: _.touches[0].clientY,
          currentTarget: _.currentTarget,
        }),
      );
      _?.activeIndex != null &&
        _.dispatch(
          _({
            activeIndex: _.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: _.activeCoordinate,
          }),
        );
    } else if (_ === `item`) {
      var _ = _.touches[0],
        _ = document.elementFromPoint(_.clientX, _.clientY);
      if (!_ || !_.getAttribute) return;
      var _ = _.getAttribute(_),
        _ = _.getAttribute(`data-recharts-item-data-key`) ?? void 0,
        _ = _(_.getState(), _, _);
      _.dispatch(
        _({
          activeDataKey: _,
          activeIndex: _,
          activeCoordinate: _,
        }),
      );
    }
  },
});
var _ = _({
    brush: _,
    cartesianAxis: _,
    chartData: _,
    errorBars: _,
    graphicalItems: _,
    layout: _,
    legend: _,
    options: _,
    polarAxis: _,
    polarOptions: _,
    referenceElements: _,
    rootProps: _,
    tooltip: _,
  }),
  _ = function (_) {
    var _ =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `Chart`;
    return _({
      reducer: _,
      preloadedState: _,
      middleware: (_) =>
        _({
          serializableCheck: !1,
        }).concat([
          _.middleware,
          _.middleware,
          _.middleware,
          _.middleware,
          _.middleware,
        ]),
      enhancers: (_) => {
        var _ = _;
        return (
          typeof _ == `function` && (_ = _()),
          _.concat(
            _({
              type: `raf`,
            }),
          )
        );
      },
      devTools: _.devToolsEnabled && {
        serialize: {
          replacer: _,
        },
        name: `recharts-${_}`,
      },
    });
  };
function _(_) {
  var { preloadedState: _, children: _, reduxStoreName: _ } = _,
    _ = _(),
    _ = (0, _.useRef)(null);
  if (_) return _;
  _.current ??= _(_, _);
  var _ = _;
  return _.createElement(
    _,
    {
      context: _,
      store: _.current,
    },
    _,
  );
}
function _(_) {
  var { layout: _, margin: _ } = _,
    _ = _(),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      _ || (_(_(_)), _(_(_)));
    }, [_, _, _, _]),
    null
  );
}
function _(_) {
  var _ = _();
  return (
    (0, _.useEffect)(() => {
      _(_(_));
    }, [_, _]),
    null
  );
}
var _ = [`children`];
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
var _ = {
    width: `100%`,
    height: `100%`,
    display: `block`,
  },
  _ = (0, _.forwardRef)((_, _) => {
    var _ = _(),
      _ = _(),
      _ = _();
    if (!_(_) || !_(_)) return null;
    var { children: _, otherAttributes: _, title: _, desc: _ } = _,
      _ = typeof _.tabIndex == `number` ? _.tabIndex : _ ? 0 : void 0,
      _ = typeof _.role == `string` ? _.role : _ ? `application` : void 0;
    return _.createElement(
      _,
      _({}, _, {
        title: _,
        desc: _,
        role: _,
        tabIndex: _,
        width: _,
        height: _,
        style: _,
        ref: _,
      }),
      _,
    );
  }),
  _ = (_) => {
    var { children: _ } = _,
      _ = _(_);
    if (!_) return null;
    var { width: _, height: _, _: _, _: _ } = _;
    return _.createElement(
      _,
      {
        width: _,
        height: _,
        _: _,
        _: _,
      },
      _,
    );
  },
  _ = (0, _.forwardRef)((_, _) => {
    var { children: _ } = _,
      _ = _(_, _);
    return _()
      ? _.createElement(_, null, _)
      : _.createElement(
          _,
          _(
            {
              ref: _,
            },
            _,
          ),
          _,
        );
  });
function _() {
  var _ = _(),
    [_, _] = (0, _.useState)(null),
    _ = _(_);
  return (
    (0, _.useEffect)(() => {
      if (_ != null) {
        var _ = _.getBoundingClientRect().width / _.offsetWidth;
        _(_) && _ !== _ && _(_(_));
      }
    }, [_, _, _]),
    _
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
var _ = () => (_(), null);
function _(_) {
  if (typeof _ == `number`) return _;
  if (typeof _ == `string`) {
    var _ = parseFloat(_);
    if (!Number.isNaN(_)) return _;
  }
  return 0;
}
var _ = (0, _.forwardRef)((_, _) => {
    var _ = (0, _.useRef)(null),
      [_, _] = (0, _.useState)({
        containerWidth: _(_.style?.width),
        containerHeight: _(_.style?.height),
      }),
      _ = (0, _.useCallback)((_, _) => {
        _((_) => {
          var _ = Math.round(_),
            _ = Math.round(_);
          return _.containerWidth === _ && _.containerHeight === _
            ? _
            : {
                containerWidth: _,
                containerHeight: _,
              };
        });
      }, []),
      _ = (0, _.useCallback)(
        (_) => {
          if ((typeof _ == `function` && _(_), _ != null)) {
            var { width: _, height: _ } = _.getBoundingClientRect();
            _(_, _);
            var _ = new ResizeObserver((_) => {
              var { width: _, height: _ } = _[0].contentRect;
              _(_, _);
            });
            (_.observe(_), (_.current = _));
          }
        },
        [_, _],
      );
    return (
      (0, _.useEffect)(
        () => () => {
          _.current?.disconnect();
        },
        [_],
      ),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(_, {
          width: _.containerWidth,
          height: _.containerHeight,
        }),
        _.createElement(
          `div`,
          _(
            {
              ref: _,
            },
            _,
          ),
        ),
      )
    );
  }),
  _ = (0, _.forwardRef)((_, _) => {
    var { width: _, height: _ } = _,
      [_, _] = (0, _.useState)({
        containerWidth: _(_),
        containerHeight: _(_),
      }),
      _ = (0, _.useCallback)((_, _) => {
        _((_) => {
          var _ = Math.round(_),
            _ = Math.round(_);
          return _.containerWidth === _ && _.containerHeight === _
            ? _
            : {
                containerWidth: _,
                containerHeight: _,
              };
        });
      }, []),
      _ = (0, _.useCallback)(
        (_) => {
          if ((typeof _ == `function` && _(_), _ != null)) {
            var { width: _, height: _ } = _.getBoundingClientRect();
            _(_, _);
          }
        },
        [_, _],
      );
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(_, {
        width: _.containerWidth,
        height: _.containerHeight,
      }),
      _.createElement(
        `div`,
        _(
          {
            ref: _,
          },
          _,
        ),
      ),
    );
  }),
  _ = (0, _.forwardRef)((_, _) => {
    var { width: _, height: _ } = _;
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(_, {
        width: _,
        height: _,
      }),
      _.createElement(
        `div`,
        _(
          {
            ref: _,
          },
          _,
        ),
      ),
    );
  }),
  _ = (0, _.forwardRef)((_, _) => {
    var { width: _, height: _ } = _;
    return _(_) || _(_)
      ? _.createElement(
          _,
          _({}, _, {
            ref: _,
          }),
        )
      : _.createElement(
          _,
          _({}, _, {
            ref: _,
          }),
        );
  });
function _(_) {
  return _ === !0 ? _ : _;
}
var _ = (0, _.forwardRef)((_, _) => {
    var {
        children: _,
        className: _,
        height: _,
        onClick: _,
        onContextMenu: _,
        onDoubleClick: _,
        onMouseDown: _,
        onMouseEnter: _,
        onMouseLeave: _,
        onMouseMove: _,
        onMouseUp: _,
        onTouchEnd: _,
        onTouchMove: _,
        onTouchStart: _,
        style: _,
        width: _,
        responsive: _,
        dispatchTouchEvents: _ = !0,
      } = _,
      _ = (0, _.useRef)(null),
      _ = _(),
      [_, _] = (0, _.useState)(null),
      [_, _] = (0, _.useState)(null),
      _ = _(),
      _ = _(),
      _ = _?.width > 0 ? _.width : _,
      _ = _?.height > 0 ? _.height : _,
      _ = (0, _.useCallback)(
        (_) => {
          (_(_),
            typeof _ == `function` && _(_),
            _(_),
            _(_),
            _ != null && (_.current = _));
        },
        [_, _, _, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          (_(_(_)),
            _(
              _({
                handler: _,
                reactEvent: _,
              }),
            ));
        },
        [_, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          (_(_(_)),
            _(
              _({
                handler: _,
                reactEvent: _,
              }),
            ));
        },
        [_, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          (_(_()),
            _(
              _({
                handler: _,
                reactEvent: _,
              }),
            ));
        },
        [_, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          (_(_(_)),
            _(
              _({
                handler: _,
                reactEvent: _,
              }),
            ));
        },
        [_, _],
      ),
      _ = (0, _.useCallback)(() => {
        _(_());
      }, [_]),
      _ = (0, _.useCallback)(
        (_) => {
          _(_(_.key));
        },
        [_],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _(
            _({
              handler: _,
              reactEvent: _,
            }),
          );
        },
        [_, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _(
            _({
              handler: _,
              reactEvent: _,
            }),
          );
        },
        [_, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _(
            _({
              handler: _,
              reactEvent: _,
            }),
          );
        },
        [_, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _(
            _({
              handler: _,
              reactEvent: _,
            }),
          );
        },
        [_, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _(
            _({
              handler: _,
              reactEvent: _,
            }),
          );
        },
        [_, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          (_ && _(_(_)),
            _(
              _({
                handler: _,
                reactEvent: _,
              }),
            ));
        },
        [_, _, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _(
            _({
              handler: _,
              reactEvent: _,
            }),
          );
        },
        [_, _],
      ),
      _ = _(_);
    return _.createElement(
      _.Provider,
      {
        value: _,
      },
      _.createElement(
        _.Provider,
        {
          value: _,
        },
        _.createElement(
          _,
          {
            width: _ ?? _?.width,
            height: _ ?? _?.height,
            className: _(`recharts-wrapper`, _),
            style: _(
              {
                position: `relative`,
                cursor: `default`,
                width: _,
                height: _,
              },
              _,
            ),
            onClick: _,
            onContextMenu: _,
            onDoubleClick: _,
            onFocus: _,
            onKeyDown: _,
            onMouseDown: _,
            onMouseEnter: _,
            onMouseLeave: _,
            onMouseMove: _,
            onMouseUp: _,
            onTouchEnd: _,
            onTouchMove: _,
            onTouchStart: _,
            ref: _,
          },
          _.createElement(_, null),
          _,
        ),
      ),
    );
  }),
  _ = [
    `width`,
    `height`,
    `responsive`,
    `children`,
    `className`,
    `style`,
    `compact`,
    `title`,
    `desc`,
  ];
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = (0, _.forwardRef)((_, _) => {
  var {
      width: _,
      height: _,
      responsive: _,
      children: _,
      className: _,
      style: _,
      compact: _,
      title: _,
      desc: _,
    } = _,
    _ = _(_(_, _));
  return _
    ? _.createElement(
        _.Fragment,
        null,
        _.createElement(_, {
          width: _,
          height: _,
        }),
        _.createElement(
          _,
          {
            otherAttributes: _,
            title: _,
            desc: _,
          },
          _,
        ),
      )
    : _.createElement(
        _,
        {
          className: _,
          style: _,
          width: _,
          height: _,
          responsive: _,
          onClick: _.onClick,
          onMouseLeave: _.onMouseLeave,
          onMouseEnter: _.onMouseEnter,
          onMouseMove: _.onMouseMove,
          onMouseDown: _.onMouseDown,
          onMouseUp: _.onMouseUp,
          onContextMenu: _.onContextMenu,
          onDoubleClick: _.onDoubleClick,
          onTouchStart: _.onTouchStart,
          onTouchMove: _.onTouchMove,
          onTouchEnd: _.onTouchEnd,
        },
        _.createElement(
          _,
          {
            otherAttributes: _,
            title: _,
            desc: _,
            ref: _,
          },
          _.createElement(_, null, _),
        ),
      );
});
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
var _ = {
    accessibilityLayer: !0,
    layout: `horizontal`,
    stackOffset: `none`,
    barCategoryGap: `10%`,
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5,
    },
    reverseStackOrder: !1,
    syncMethod: `index`,
    responsive: !1,
  },
  _ = (0, _.forwardRef)(function (_, _) {
    var _ = _(_.categoricalChartProps, _),
      {
        chartName: _,
        defaultTooltipEventType: _,
        validateTooltipEventTypes: _,
        tooltipPayloadSearcher: _,
        categoricalChartProps: _,
      } = _,
      _ = {
        chartName: _,
        defaultTooltipEventType: _,
        validateTooltipEventTypes: _,
        tooltipPayloadSearcher: _,
        eventEmitter: void 0,
      };
    return _.createElement(
      _,
      {
        preloadedState: {
          options: _,
        },
        reduxStoreName: _._ ?? _,
      },
      _.createElement(_, {
        chartData: _.data,
      }),
      _.createElement(_, {
        layout: _.layout,
        margin: _.margin,
      }),
      _.createElement(_, {
        accessibilityLayer: _.accessibilityLayer,
        barCategoryGap: _.barCategoryGap,
        maxBarSize: _.maxBarSize,
        stackOffset: _.stackOffset,
        barGap: _.barGap,
        barSize: _.barSize,
        syncId: _.syncId,
        syncMethod: _.syncMethod,
        className: _.className,
      }),
      _.createElement(
        _,
        _({}, _, {
          ref: _,
        }),
      ),
    );
  }),
  _ = [`axis`, `item`],
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
      return (
        _ !== `IR` && console.assert(!1, `Unhandled country code: ${_}`), 1
      );
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
function _(_) {
  let _ = _?.jsondata?.read_more_link;
  if (!_) return;
  let _ = _(_).toLocaleLowerCase();
  return _ ? [_] : void 0;
}
function _(_, _) {
  return _(_, _(_));
}
function _(_, _) {
  if (!_) return ``;
  if (!_(_)) return _(_);
  let _ = _(_, _) ? _(_) : _;
  return (_.IN_CLIENT ? `steam://openurl_external/` : ``) + _;
}
function _(_, _, _) {
  let _ = _.toLowerCase().startsWith(`http`) ? _ : `http://` + _;
  return (0, _.jsx)(_, {
    url: _,
    event: _,
    children: _ || _,
  });
}
var _ = (_) => {
  let { url: _, event: _, className: _, style: _ } = _,
    _ = _(_);
  _ = _(_, _);
  let _ = _(_) ? `noopener nofollow` : void 0,
    _ =
      typeof _.children == `string` &&
      _.children.length > 0 &&
      _ &&
      !_.startsWith(`steam://`)
        ? _(_)
        : void 0;
  return (0, _.jsx)(_, {
    toolTipContent: _,
    direction: `top`,
    children: (0, _.jsx)(_, {
      className: _,
      href: _,
      rel: _,
      _: _._,
      style: _,
      children: _.children,
    }),
  });
};
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
var _ = {};
((_.arabic = () =>
  _(() => import(`./chunk~dab13398e5.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./chunk~dab1246145.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./chunk~4bdff36891.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./chunk~2545b0937f.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./chunk~dd0ba56211.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./chunk~3082dc6760.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./chunk~5d62d6ca8b.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./chunk~4f95d7925a.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./chunk~11a8bb7eb1.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./chunk~edd1a7534c.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./chunk~3f51d22cb3.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./chunk~670fab083e.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./chunk~13e12dd392.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./chunk~adba104c1f.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./chunk~4eec58f087.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./chunk~bba5046be4.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./chunk~ea21cd4d57.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./chunk~308b243181.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./chunk~5ac43a3563.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./chunk~4f755de70e.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./chunk~24c4d88bb0.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./chunk~12e32dc158.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./chunk~826f71c3ec.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./chunk~c4ad2ce98c.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./chunk~4471e18869.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./chunk~2c71f9094b.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./chunk~e0ccea11c6.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./chunk~4e11e578eb.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./chunk~6b7e311b97.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./chunk~19221a0d49.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./chunk~89f3b39bfb.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./chunk~bdb7ec474f.js`), [], import.meta.url)));
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
  };
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
