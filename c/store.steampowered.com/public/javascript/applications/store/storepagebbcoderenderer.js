import { _, _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./clanimagemodels.js";
import { _ } from "./image.js";
import { _, _, _, _, _, _ } from "./basicbbcodeparser.js";
import { _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _({
    Separator: () => _,
    "Size-1": () => _,
    "Size-2": () => _,
    "Size-3": () => _,
    "Size-4": () => _,
    default: () => _,
  }),
  _ = `vNNhEahPBA0-`,
  _ = `cG3Bl0aMLsI-`,
  _ = `sTGfTmWlAtM-`,
  _ = `SaUen44WwpY-`,
  _ = `KZc7C2EnUyw-`,
  _ = {
    Separator: _,
    "Size-1": `cG3Bl0aMLsI-`,
    "Size-2": `sTGfTmWlAtM-`,
    "Size-3": `SaUen44WwpY-`,
    "Size-4": `KZc7C2EnUyw-`,
  },
  _ = _();
function _(_) {
  let { orientation: _ = `horizontal`, size: _ = `1`, ..._ } = _;
  return (0, _.jsx)(`div`, {
    role: `separator`,
    "aria-orientation": _,
    ..._(
      {
        ..._,
        size: _,
        className: _,
      },
      _,
    ),
  });
}
var _ = [
  ..._,
  {
    prop: `size`,
    className: (_) => _[`Size-${_}`],
    responsive: !0,
  },
  {
    prop: `color`,
    cssProperty: (_) => [`--separator-color`, _(_)],
  },
];
function _(_, _) {
  return {
    store_page_asset_url: `${_.BASE_URL_SHARED_CDN}store_item_assets/steam/apps/${_}/%s?t=${_}`,
  };
}
var _ = _.createContext({
  store_page_asset_url: ``,
});
function _(_) {
  let _ =
    _.store_page_asset_url === void 0
      ? _(_.appid, _.app_last_modified)
      : {
          store_page_asset_url: _.store_page_asset_url,
        };
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
var _ = () => _.useContext(_);
function _() {
  let { store_page_asset_url: _ } = _();
  return _.useCallback(
    (_) => {
      if (_) {
        if (_.startsWith(`{STEAM_APP_IMAGE}/`)) {
          let _ = _.replace(_ + `/`, ``);
          return _.replace(`%s`, _);
        }
        return _;
      }
    },
    [_],
  );
}
var _ = `Ni6YiwQWBXM-`,
  _ = `JH6u-fBBvEI-`,
  _ = `ebS1BwVurMY-`;
function _(_) {
  return new _(new _());
}
function _(_) {
  let _ = new Map([
    ...Array.from(_.entries()),
    [
      `img`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `sup`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `h6`,
      {
        Constructor: _,
        autocloses: !1,
        skipFollowingNewline: !0,
      },
    ],
  ]);
  return (
    _ &&
      _.set(`url`, {
        Constructor: _,
        autocloses: !1,
      }),
    _
  );
}
function _(_) {
  return (0, _.jsx)(`sup`, {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`h6`, {
    children: _.children,
  });
}
function _(_) {
  let _ = _(_(_.args));
  return (
    !_ && typeof _.children == `string` && _(_.children) && (_ = _(_.children)),
    _
      ? (0, _.jsx)(_, {
          href: _,
          children: _.children,
        })
      : _.children || ``
  );
}
function _(_) {
  let { text: _, languageOverride: _, bBypassLinkFilter: _ } = _,
    [_] = (0, _.useState)(new _(_(_), _, _ || 0));
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.ParseBBCode(_, {}, !0),
  });
}
function _(_) {
  let { showErrorInfo: _ } = _.context,
    _ = _(),
    _ = _.args.alt ?? ``;
  if (_.args.mp4 || _.args.webm) {
    let _ = _(_.args.webm),
      _ = _(_.args.mp4),
      _ = _(_.args.poster),
      _ = _() || _();
    return (0, _.jsxs)(`video`, {
      className: _,
      poster: _,
      "aria-label": _,
      autoPlay: !0,
      muted: !0,
      loop: !0,
      playsInline: !0,
      onClick: (_) => {
        let _ = _.currentTarget;
        _.paused ? _.play() : _.pause();
      },
      children: [
        _ &&
          !_ &&
          (0, _.jsx)(`source`, {
            src: _,
            type: `video/webm`,
          }),
        _ &&
          !_.IN_CLIENT &&
          (0, _.jsx)(`source`, {
            src: _,
            type: `video/mp4`,
          }),
      ],
    });
  }
  {
    let _ = _(_.args.src);
    return _
      ? (0, _.jsx)(_, {
          className: _,
          src: _,
        })
      : (0, _.jsx)(`img`, {
          className: _,
          src: _,
          alt: _,
        });
  }
}
