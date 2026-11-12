import { _ } from "./chunk~f025431ab0.js";
import { _ } from "./chunk~0a9efb2121.js";
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
} from "./chunk~d3515eca4e.js";
import { _, _, _, _, _, _ } from "./chunk~0ef0cd2c00.js";
var _ = _(_()),
  _ = _(_());
function _(_) {
  let _ = window.open(``, `SteamWebChat`, ``);
  if (!_) return;
  let _ = !1;
  try {
    _ = _.location.href == `about:blank`;
  } catch {}
  if (_) {
    if (_) {
      let _ = function (_) {
        let _ = _.COMMUNITY_BASE_URL.replace(/(https?:\/\/[^/]*).*$/, `$1`);
        _.source == _ &&
          _.data == `FriendsUIReady` &&
          _.origin == _ &&
          (_.postMessage(_, _.COMMUNITY_BASE_URL),
          window.removeEventListener(`message`, _));
      };
      window.addEventListener(`message`, _);
    }
    _.location.href = _.COMMUNITY_BASE_URL + `chat/`;
  } else _ && _.postMessage(_, _.COMMUNITY_BASE_URL);
  _.focus();
}
var _ = _(),
  _ = _(),
  _ = class extends _ {
    constructor(_) {
      (super(_), _(this));
    }
    BIsExpired() {
      return _.sm_rtTimeCur >= this.m_rtTimeExpires;
    }
    InitFromPHPInviteLinkInfo(_) {
      this.m_ulChatID = _.chat_id;
      let _ = new _(_.steamid_sender);
      (_.BIsIndividualAccount() &&
        (this.m_unAccountIDInviter = _.GetAccountID()),
        (this.m_rtTimeExpires = _.time_expires),
        (this.m_bIsBanned = _.banned),
        (this.m_rtKickExpires = _.time_kick_expire),
        _.group_summary &&
          (this.m_ulChatRoomGroupID = _.group_summary.chat_group_id),
        (this.m_bValid = !0),
        (this.m_bReady = !0));
    }
  };
_([_], _.prototype, `InitFromPHPInviteLinkInfo`, null);
var _ = class {
  m_bConnectingToClient = !1;
  m_invite;
  m_htmlPreRendered;
  static sm_rtTimeCur;
  constructor(_) {
    (_(this),
      (this.m_invite = new _(_.strInviteCode)),
      _.Invite
        ? this.m_invite.InitFromPHPInviteLinkInfo(_.Invite)
        : this.m_invite.InitInvalid(),
      (this.m_htmlPreRendered = _.render));
  }
  BIsInviteValid() {
    return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
  }
  GetInvite() {
    return this.m_invite;
  }
  BIsConnectingToClient() {
    return this.m_bConnectingToClient;
  }
  GetPreRenderedHTML() {
    return this.m_htmlPreRendered;
  }
  LaunchWebChat() {
    _({
      command: `ShowChatRoomGroupInvite`,
      invite_code: this.m_invite.GetInviteCode(),
    });
  }
  ForceLaunchSteamClient() {
    window.location.href = `steam://friends/ShowChatRoomGroupInvite/${this.m_invite.GetInviteCode()}`;
  }
};
_([_], _.prototype, `m_bConnectingToClient`, void 0);
var _ = class extends _.Component {
  render() {
    return (0, _.jsx)(`div`, {
      className: `InviteLandingRoot`,
      children: this.props.controller.BIsInviteValid()
        ? (0, _.jsx)(_, {
            controller: this.props.controller,
          })
        : (0, _.jsx)(_, {
            controller: this.props.controller,
          }),
    });
  }
};
_ = _([_], _);
var _ = class extends _.Component {
  constructor(_) {
    (super(_), _(this));
  }
  m_bTriedToLaunchSteam = !1;
  LaunchWebChat() {
    this.props.controller.LaunchWebChat();
  }
  LaunchSteamClient() {
    (this.props.controller.ForceLaunchSteamClient(),
      window.setTimeout(() => {
        this.m_bTriedToLaunchSteam = !0;
      }, 1e3));
  }
  IsMobileDevice() {
    switch (new _.UAParser(navigator.userAgent).getResult()._.name) {
      case `iOS`:
      case `Android`:
      case `BlackBerry`:
        return !0;
    }
    return !1;
  }
  render() {
    let _ = this.props.controller.GetInvite(),
      _ = this.IsMobileDevice(),
      _ = `inviteButton inviteButtonJoinChat`;
    return (
      _.BIsVoiceChatInvite() && (_ += ` inviteButtonJoinVoice`),
      (0, _.jsxs)(_, {
        render: this.props.controller.GetPreRenderedHTML(),
        children: [
          (0, _.jsxs)(`div`, {
            className: `inviteLabel inviteLabelButtons`,
            children: [
              !_ &&
                (0, _.jsx)(`button`, {
                  className: _,
                  type: `button`,
                  onClick: this.LaunchSteamClient,
                  children: _(`#InviteLanding_OpenInSteam`),
                }),
              (0, _.jsx)(`button`, {
                className: _,
                type: `button`,
                onClick: this.LaunchWebChat,
                children: _(`#InviteLanding_OpenInWebChat`),
              }),
            ],
          }),
          this.m_bTriedToLaunchSteam &&
            (0, _.jsx)(`div`, {
              className: `inviteLabel inviteLabelLaunchPrompt`,
              children: _(`#InviteLanding_OpenInSteam_Help`),
            }),
        ],
      })
    );
  }
};
(_([_], _.prototype, `m_bTriedToLaunchSteam`, void 0),
  _([_], _.prototype, `LaunchWebChat`, null),
  _([_], _.prototype, `LaunchSteamClient`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
  render() {
    return (0, _.jsx)(`div`, {
      className: `ChatMessageInvite`,
      children: (0, _.jsx)(`div`, {
        className: `postedExpiredInvite`,
        children: _(`#InviteLanding_ExpiredOrInvalid`),
      }),
    });
  }
};
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: `ChatMessageInvite`,
    children: [
      (0, _.jsx)(`div`, {
        className: `leftInviteContainer`,
        dangerouslySetInnerHTML: {
          __html: _.render.strAvatarHTML,
        },
      }),
      (0, _.jsxs)(`div`, {
        className: `rightInviteContainer`,
        children: [
          (0, _.jsx)(`div`, {
            className: `inviteLabel`,
            children: _(
              `#bbcode_invite_description`,
              (0, _.jsx)(`span`, {
                dangerouslySetInnerHTML: {
                  __html: _.render.strInviterNameLinkHTML,
                },
              }),
            ),
          }),
          (0, _.jsx)(`div`, {
            className: `groupName`,
            children: _.render.strChatRoomGroupName,
          }),
          _.children,
        ],
      }),
    ],
  });
}
window.AssertMsg = _;
function _() {
  let _ = document.querySelectorAll(`.ChatReactRoot`);
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_],
      _ = _.getAttribute(`data-component`);
    switch (_) {
      case `ChatInvite`:
        _(_);
        break;
      default:
        _(!1, `unknown component: "${_}"`);
    }
  }
}
function _(_) {
  let _;
  try {
    _ = JSON.parse(_.getAttribute(`data-inviteinfo`));
  } catch {}
  _.sm_rtTimeCur = _.rtTimeCur;
  let _ = new _(_);
  _.createRoot(_).render(
    _.createElement(_, {
      controller: _,
    }),
  );
}
document.addEventListener(`DOMContentLoaded`, async function () {
  (_(), await _(_.LANGUAGE), _());
});
async function _(_) {
  let _ = _.GetLanguageFallback(_),
    _ = _ === _,
    [_, _] = await Promise.all([
      _(
        Object.assign({
          "../localization/friendsui_arabic.json": () =>
            _(() => import(`./chunk~611c7e5272.js`), [], import.meta.url),
          "../localization/friendsui_brazilian.json": () =>
            _(() => import(`./chunk~6fa8dc40e4.js`), [], import.meta.url),
          "../localization/friendsui_bulgarian.json": () =>
            _(() => import(`./chunk~b8270e605a.js`), [], import.meta.url),
          "../localization/friendsui_czech.json": () =>
            _(() => import(`./chunk~d6d483ec9c.js`), [], import.meta.url),
          "../localization/friendsui_danish.json": () =>
            _(() => import(`./chunk~44cdaf67be.js`), [], import.meta.url),
          "../localization/friendsui_dutch.json": () =>
            _(() => import(`./chunk~a313c4f7cf.js`), [], import.meta.url),
          "../localization/friendsui_english.json": () =>
            _(() => import(`./chunk~167330b13a.js`), [], import.meta.url),
          "../localization/friendsui_finnish.json": () =>
            _(() => import(`./chunk~b29469271c.js`), [], import.meta.url),
          "../localization/friendsui_french.json": () =>
            _(() => import(`./chunk~ea8d469232.js`), [], import.meta.url),
          "../localization/friendsui_german.json": () =>
            _(() => import(`./chunk~9dbda2cb61.js`), [], import.meta.url),
          "../localization/friendsui_greek.json": () =>
            _(() => import(`./chunk~cef16e40de.js`), [], import.meta.url),
          "../localization/friendsui_hungarian.json": () =>
            _(() => import(`./chunk~3eb372895a.js`), [], import.meta.url),
          "../localization/friendsui_indonesian.json": () =>
            _(() => import(`./chunk~a4ed63f85a.js`), [], import.meta.url),
          "../localization/friendsui_italian.json": () =>
            _(() => import(`./chunk~7df28983e3.js`), [], import.meta.url),
          "../localization/friendsui_japanese.json": () =>
            _(() => import(`./chunk~0c6cb5838a.js`), [], import.meta.url),
          "../localization/friendsui_koreana.json": () =>
            _(() => import(`./chunk~dba0f00409.js`), [], import.meta.url),
          "../localization/friendsui_latam.json": () =>
            _(() => import(`./chunk~eaf4e22a72.js`), [], import.meta.url),
          "../localization/friendsui_malay.json": () =>
            _(() => import(`./chunk~e1a25a35a9.js`), [], import.meta.url),
          "../localization/friendsui_norwegian.json": () =>
            _(() => import(`./chunk~0299d42912.js`), [], import.meta.url),
          "../localization/friendsui_polish.json": () =>
            _(() => import(`./chunk~254f79154d.js`), [], import.meta.url),
          "../localization/friendsui_portuguese.json": () =>
            _(() => import(`./chunk~2a397fa087.js`), [], import.meta.url),
          "../localization/friendsui_romanian.json": () =>
            _(() => import(`./chunk~47cbcec16c.js`), [], import.meta.url),
          "../localization/friendsui_russian.json": () =>
            _(() => import(`./chunk~55e3297805.js`), [], import.meta.url),
          "../localization/friendsui_sc_schinese.json": () =>
            _(() => import(`./chunk~6244a153be.js`), [], import.meta.url),
          "../localization/friendsui_schinese.json": () =>
            _(() => import(`./chunk~bfae899e97.js`), [], import.meta.url),
          "../localization/friendsui_spanish.json": () =>
            _(() => import(`./chunk~f842feb9a1.js`), [], import.meta.url),
          "../localization/friendsui_swedish.json": () =>
            _(() => import(`./chunk~b928416503.js`), [], import.meta.url),
          "../localization/friendsui_tchinese.json": () =>
            _(() => import(`./chunk~f5cba0f2ee.js`), [], import.meta.url),
          "../localization/friendsui_thai.json": () =>
            _(() => import(`./chunk~cf9dc2e177.js`), [], import.meta.url),
          "../localization/friendsui_turkish.json": () =>
            _(() => import(`./chunk~a5b92bdb01.js`), [], import.meta.url),
          "../localization/friendsui_ukrainian.json": () =>
            _(() => import(`./chunk~2125dfa447.js`), [], import.meta.url),
          "../localization/friendsui_vietnamese.json": () =>
            _(() => import(`./chunk~a4fb356508.js`), [], import.meta.url),
        }),
        `../localization/friendsui_${_}.json`,
        3,
      ),
      _
        ? {}
        : _(
            Object.assign({
              "../localization/friendsui_arabic.json": () =>
                _(() => import(`./chunk~611c7e5272.js`), [], import.meta.url),
              "../localization/friendsui_brazilian.json": () =>
                _(() => import(`./chunk~6fa8dc40e4.js`), [], import.meta.url),
              "../localization/friendsui_bulgarian.json": () =>
                _(() => import(`./chunk~b8270e605a.js`), [], import.meta.url),
              "../localization/friendsui_czech.json": () =>
                _(() => import(`./chunk~d6d483ec9c.js`), [], import.meta.url),
              "../localization/friendsui_danish.json": () =>
                _(() => import(`./chunk~44cdaf67be.js`), [], import.meta.url),
              "../localization/friendsui_dutch.json": () =>
                _(() => import(`./chunk~a313c4f7cf.js`), [], import.meta.url),
              "../localization/friendsui_english.json": () =>
                _(() => import(`./chunk~167330b13a.js`), [], import.meta.url),
              "../localization/friendsui_finnish.json": () =>
                _(() => import(`./chunk~b29469271c.js`), [], import.meta.url),
              "../localization/friendsui_french.json": () =>
                _(() => import(`./chunk~ea8d469232.js`), [], import.meta.url),
              "../localization/friendsui_german.json": () =>
                _(() => import(`./chunk~9dbda2cb61.js`), [], import.meta.url),
              "../localization/friendsui_greek.json": () =>
                _(() => import(`./chunk~cef16e40de.js`), [], import.meta.url),
              "../localization/friendsui_hungarian.json": () =>
                _(() => import(`./chunk~3eb372895a.js`), [], import.meta.url),
              "../localization/friendsui_indonesian.json": () =>
                _(() => import(`./chunk~a4ed63f85a.js`), [], import.meta.url),
              "../localization/friendsui_italian.json": () =>
                _(() => import(`./chunk~7df28983e3.js`), [], import.meta.url),
              "../localization/friendsui_japanese.json": () =>
                _(() => import(`./chunk~0c6cb5838a.js`), [], import.meta.url),
              "../localization/friendsui_koreana.json": () =>
                _(() => import(`./chunk~dba0f00409.js`), [], import.meta.url),
              "../localization/friendsui_latam.json": () =>
                _(() => import(`./chunk~eaf4e22a72.js`), [], import.meta.url),
              "../localization/friendsui_malay.json": () =>
                _(() => import(`./chunk~e1a25a35a9.js`), [], import.meta.url),
              "../localization/friendsui_norwegian.json": () =>
                _(() => import(`./chunk~0299d42912.js`), [], import.meta.url),
              "../localization/friendsui_polish.json": () =>
                _(() => import(`./chunk~254f79154d.js`), [], import.meta.url),
              "../localization/friendsui_portuguese.json": () =>
                _(() => import(`./chunk~2a397fa087.js`), [], import.meta.url),
              "../localization/friendsui_romanian.json": () =>
                _(() => import(`./chunk~47cbcec16c.js`), [], import.meta.url),
              "../localization/friendsui_russian.json": () =>
                _(() => import(`./chunk~55e3297805.js`), [], import.meta.url),
              "../localization/friendsui_sc_schinese.json": () =>
                _(() => import(`./chunk~6244a153be.js`), [], import.meta.url),
              "../localization/friendsui_schinese.json": () =>
                _(() => import(`./chunk~bfae899e97.js`), [], import.meta.url),
              "../localization/friendsui_spanish.json": () =>
                _(() => import(`./chunk~f842feb9a1.js`), [], import.meta.url),
              "../localization/friendsui_swedish.json": () =>
                _(() => import(`./chunk~b928416503.js`), [], import.meta.url),
              "../localization/friendsui_tchinese.json": () =>
                _(() => import(`./chunk~f5cba0f2ee.js`), [], import.meta.url),
              "../localization/friendsui_thai.json": () =>
                _(() => import(`./chunk~cf9dc2e177.js`), [], import.meta.url),
              "../localization/friendsui_turkish.json": () =>
                _(() => import(`./chunk~a5b92bdb01.js`), [], import.meta.url),
              "../localization/friendsui_ukrainian.json": () =>
                _(() => import(`./chunk~2125dfa447.js`), [], import.meta.url),
              "../localization/friendsui_vietnamese.json": () =>
                _(() => import(`./chunk~a4fb356508.js`), [], import.meta.url),
            }),
            `../localization/friendsui_${_}.json`,
            3,
          ),
      _.Ready(),
    ]);
  _.AddTokens(_, _);
}
