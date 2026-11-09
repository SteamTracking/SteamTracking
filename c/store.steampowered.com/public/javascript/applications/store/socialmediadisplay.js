import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./partnereventshared.module.js";
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
} from "./main.js";
var _ = _(_(), 1),
  _ = `m6H2njbbWSs-`,
  _ = `BgrsKgSro1E-`,
  _ = `z0NFw8S8xoo-`,
  _ = `V6ZJUZpOph0-`,
  _ = `t-0XbUHeOaw-`,
  _ = {
    discord_server: 5,
    youtube: 1,
    facebook: 2,
    twitter: 3,
    twitch: 4,
    reddit: 10,
    instagram: 11,
    tumblr: 12,
    _: 6,
    qqlink: 18,
    qqchannel: 23,
    bilibili: 8,
    weibo: 9,
    wechat: 17,
    tieba: 13,
    tiktok: 14,
    douyin: 19,
    bluesky: 20,
    mastodon: 21,
    threads: 22,
    _: 7,
    telegram: 15,
    linkedin: 16,
    rednote: 24,
  };
function _(_) {
  return _[_] ?? 0;
}
var _ = new Map(Object.entries(_).map(([_, _]) => [_, _]));
function _(_) {
  return _.get(_);
}
var _ = _();
function _(_) {
  let { appid: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      appid: _,
    }),
  });
}
function _(_) {
  let { appid: _ } = _,
    { data: _ } = _({
      appid: _,
    });
  return !_ || _.length == 0
    ? null
    : (0, _.jsx)(_, {
        strTitle: _(`#EventDisplay_SocialTitle`),
        _: `` + _,
        rgSocialMedia: _,
      });
}
function _(_) {
  return (0, _.useMemo)(
    () =>
      _
        ? _.map((_) => {
            let _ = _(_.type);
            return _ == 6 || _ == 17
              ? {
                  link_type: _,
                  text: _.link,
                }
              : {
                  link_type: _,
                  url: _.link,
                };
          })
        : [],
    [_],
  );
}
function _(_) {
  let { gidClanEvent: _, rgSocial: _, bIsCreatorHomeEvent: _ } = _,
    _ = _(_);
  if (_.length == 0) return null;
  let _ = _(
    _ ? `#EventDisplay_Sale_SocialTitle_Dev` : `#EventDisplay_Sale_SocialTitle`,
  );
  return (0, _.jsx)(_, {
    strTitle: _,
    _: _,
    rgSocialMedia: _,
  });
}
function _(_) {
  let { strTitle: _, _: _, rgSocialMedia: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _(_, `EventEditorTextTitle`),
        children: _,
      }),
      (0, _.jsx)(_, {
        _: _,
        rgSocialMedia: _,
      }),
    ],
  });
}
var _ = [6, 23, 18, 8, 9, 19, 24];
function _(_) {
  let { _: _, rgSocialMedia: _, className: _ } = _,
    _ = _.EREALM === _.k_ESteamRealmChina;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    children: _.filter((_) => !_ || _.includes(_.link_type || 0)).map((_) =>
      _.url
        ? (0, _.jsx)(
            _,
            {
              social: _,
            },
            `app_social_link_` + _ + `_` + _.link_type,
          )
        : (0, _.jsx)(
            _,
            {
              social: _,
            },
            `app_social_text_` + _ + `_` + _.link_type + `_` + _.text,
          ),
    ),
  });
}
function _(_) {
  let { social: _ } = _;
  return _.url
    ? (0, _.jsx)(`a`, {
        href: _(_.url, !0),
        target: _.IN_CLIENT ? void 0 : `_blank`,
        rel: `noopener noreferrer`,
        children: (0, _.jsx)(_, {
          toolTipContent: _.url,
          children: (0, _.jsx)(_, {
            social: _,
          }),
        }),
      })
    : null;
}
function _(_) {
  let { social: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _.text,
        children: (0, _.jsx)(_, {
          social: _,
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.text,
      }),
    ],
  });
}
function _(_) {
  let { social: _ } = _;
  return (0, _.jsx)(_, {
    linkType: _.link_type || 0,
    className: _,
  });
}
var _ = {
  1: _,
  2: _,
  3: _,
  4: _,
  5: _,
  6: _,
  18: _,
  23: _,
  7: _,
  8: _,
  9: _,
  10: _,
  11: _,
  12: _,
  13: _,
  14: _,
  15: _,
  16: _,
  17: _,
  19: _,
  20: _,
  21: _,
  22: _,
  24: _,
};
function _(_) {
  let { linkType: _, ..._ } = _,
    _ = _[_];
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : null;
}
export { _, _, _, _, _, _ };
