import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _ } from "./throbber.js";
import { _ } from "./partnereventdialog.module.js";
import { _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext({
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
function _(_) {
  let { section: _, rewardDef: _, language: _ } = _,
    _ = _(_.appid ?? 0, _.community_item_type ?? 0),
    [_] = _(() => [!!_.rewards?.show_reward_item_name]),
    _;
  switch (_.community_class) {
    case 14:
    case 15:
      _ = `${_.COMMUNITY_BASE_URL}my/edit/avatar`;
      break;
    case 1:
      _ = `${_.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
      break;
    case 3:
    case 8:
      _ = `${_.COMMUNITY_BASE_URL}my/edit/background`;
      break;
    case 13:
      _ = `${_.COMMUNITY_BASE_URL}my/edit/miniprofile`;
      break;
    case 11:
      _ = `${_.COMMUNITY_BASE_URL}chat`;
  }
  return (0, _.jsxs)(`a`, {
    href: _,
    children: [
      (0, _.jsx)(_, {
        appid: _.appid ?? 0,
        community_item_type: _.community_item_type ?? 0,
      }),
      !!_ &&
        (0, _.jsx)(`span`, {
          children: _?.item_name,
        }),
    ],
  });
}
export { _, _, _, _, _, _ };
