/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { i as e } from "./chunk~f025431ab0.js";
import { t } from "./chunk~0a9efb2121.js";
import {
  G as n,
  In as r,
  Kn as i,
  L as a,
  N as o,
  Ot as s,
  Pt as c,
  Sr as l,
  T as u,
  W as d,
  a as f,
  l as p,
  n as m,
  o as h,
  w as g,
} from "./chunk~d3515eca4e.js";
import {
  c as _,
  i as v,
  l as y,
  n as b,
  r as x,
  t as S,
} from "./chunk~0ef0cd2c00.js";
var C = e(l()),
  w = e(S());
function T(e) {
  let t = window.open(``, `SteamWebChat`, ``);
  if (!t) return;
  let n = !1;
  try {
    n = t.location.href == `about:blank`;
  } catch {}
  if (n) {
    if (e) {
      let n = function (r) {
        let i = c.COMMUNITY_BASE_URL.replace(/(https?:\/\/[^/]*).*$/, `$1`);
        r.source == t &&
          r.data == `FriendsUIReady` &&
          r.origin == i &&
          (t.postMessage(e, c.COMMUNITY_BASE_URL),
          window.removeEventListener(`message`, n));
      };
      window.addEventListener(`message`, n);
    }
    t.location.href = c.COMMUNITY_BASE_URL + `chat/`;
  } else e && t.postMessage(e, c.COMMUNITY_BASE_URL);
  t.focus();
}
var E = x(),
  D = b(),
  O = class extends _ {
    constructor(e) {
      (super(e), d(this));
    }
    BIsExpired() {
      return k.sm_rtTimeCur >= this.m_rtTimeExpires;
    }
    InitFromPHPInviteLinkInfo(e) {
      this.m_ulChatID = e.chat_id;
      let t = new y(e.steamid_sender);
      (t.BIsIndividualAccount() &&
        (this.m_unAccountIDInviter = t.GetAccountID()),
        (this.m_rtTimeExpires = e.time_expires),
        (this.m_bIsBanned = e.banned),
        (this.m_rtKickExpires = e.time_kick_expire),
        e.group_summary &&
          (this.m_ulChatRoomGroupID = e.group_summary.chat_group_id),
        (this.m_bValid = !0),
        (this.m_bReady = !0));
    }
  };
o([a], O.prototype, `InitFromPHPInviteLinkInfo`, null);
var k = class {
  m_bConnectingToClient = !1;
  m_invite;
  m_htmlPreRendered;
  static sm_rtTimeCur;
  constructor(e) {
    (d(this),
      (this.m_invite = new O(e.strInviteCode)),
      e.Invite
        ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
        : this.m_invite.InitInvalid(),
      (this.m_htmlPreRendered = e.render));
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
    T({
      command: `ShowChatRoomGroupInvite`,
      invite_code: this.m_invite.GetInviteCode(),
    });
  }
  ForceLaunchSteamClient() {
    window.location.href = `steam://friends/ShowChatRoomGroupInvite/${this.m_invite.GetInviteCode()}`;
  }
};
o([n], k.prototype, `m_bConnectingToClient`, void 0);
var A = class extends C.Component {
  render() {
    return (0, D.jsx)(`div`, {
      className: `InviteLandingRoot`,
      children: this.props.controller.BIsInviteValid()
        ? (0, D.jsx)(j, { controller: this.props.controller })
        : (0, D.jsx)(M, { controller: this.props.controller }),
    });
  }
};
A = o([v], A);
var j = class extends C.Component {
  constructor(e) {
    (super(e), d(this));
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
    switch (new E.UAParser(navigator.userAgent).getResult().os.name) {
      case `iOS`:
      case `Android`:
      case `BlackBerry`:
        return !0;
    }
    return !1;
  }
  render() {
    let e = this.props.controller.GetInvite(),
      t = this.IsMobileDevice(),
      n = `inviteButton inviteButtonJoinChat`;
    return (
      e.BIsVoiceChatInvite() && (n += ` inviteButtonJoinVoice`),
      (0, D.jsxs)(N, {
        render: this.props.controller.GetPreRenderedHTML(),
        children: [
          (0, D.jsxs)(`div`, {
            className: `inviteLabel inviteLabelButtons`,
            children: [
              !t &&
                (0, D.jsx)(`button`, {
                  className: n,
                  type: `button`,
                  onClick: this.LaunchSteamClient,
                  children: h(`#InviteLanding_OpenInSteam`),
                }),
              (0, D.jsx)(`button`, {
                className: n,
                type: `button`,
                onClick: this.LaunchWebChat,
                children: h(`#InviteLanding_OpenInWebChat`),
              }),
            ],
          }),
          this.m_bTriedToLaunchSteam &&
            (0, D.jsx)(`div`, {
              className: `inviteLabel inviteLabelLaunchPrompt`,
              children: h(`#InviteLanding_OpenInSteam_Help`),
            }),
        ],
      })
    );
  }
};
(o([n], j.prototype, `m_bTriedToLaunchSteam`, void 0),
  o([r], j.prototype, `LaunchWebChat`, null),
  o([r], j.prototype, `LaunchSteamClient`, null),
  (j = o([v], j)));
var M = class extends C.Component {
  render() {
    return (0, D.jsx)(`div`, {
      className: `ChatMessageInvite`,
      children: (0, D.jsx)(`div`, {
        className: `postedExpiredInvite`,
        children: h(`#InviteLanding_ExpiredOrInvalid`),
      }),
    });
  }
};
function N(e) {
  return (0, D.jsxs)(`div`, {
    className: `ChatMessageInvite`,
    children: [
      (0, D.jsx)(`div`, {
        className: `leftInviteContainer`,
        dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML },
      }),
      (0, D.jsxs)(`div`, {
        className: `rightInviteContainer`,
        children: [
          (0, D.jsx)(`div`, {
            className: `inviteLabel`,
            children: p(
              `#bbcode_invite_description`,
              (0, D.jsx)(`span`, {
                dangerouslySetInnerHTML: {
                  __html: e.render.strInviterNameLinkHTML,
                },
              }),
            ),
          }),
          (0, D.jsx)(`div`, {
            className: `groupName`,
            children: e.render.strChatRoomGroupName,
          }),
          e.children,
        ],
      }),
    ],
  });
}
window.AssertMsg = i;
function P() {
  let e = document.querySelectorAll(`.ChatReactRoot`);
  for (let t = 0; t < e.length; t++) {
    let n = e[t],
      r = n.getAttribute(`data-component`);
    switch (r) {
      case `ChatInvite`:
        F(n);
        break;
      default:
        i(!1, `unknown component: "${r}"`);
    }
  }
}
function F(e) {
  let t;
  try {
    t = JSON.parse(e.getAttribute(`data-inviteinfo`));
  } catch {}
  k.sm_rtTimeCur = t.rtTimeCur;
  let n = new k(t);
  w.createRoot(e).render(C.createElement(A, { controller: n }));
}
document.addEventListener(`DOMContentLoaded`, async function () {
  (s(), await I(c.LANGUAGE), P());
});
async function I(e) {
  let n = m.GetLanguageFallback(e),
    r = e === n,
    [i, a] = await Promise.all([
      t(
        Object.assign({
          "../localization/friendsui_arabic.json": () =>
            u(() => import(`./chunk~611c7e5272.js`), [], import.meta.url),
          "../localization/friendsui_brazilian.json": () =>
            u(() => import(`./chunk~6fa8dc40e4.js`), [], import.meta.url),
          "../localization/friendsui_bulgarian.json": () =>
            u(() => import(`./chunk~b8270e605a.js`), [], import.meta.url),
          "../localization/friendsui_czech.json": () =>
            u(() => import(`./chunk~d6d483ec9c.js`), [], import.meta.url),
          "../localization/friendsui_danish.json": () =>
            u(() => import(`./chunk~44cdaf67be.js`), [], import.meta.url),
          "../localization/friendsui_dutch.json": () =>
            u(() => import(`./chunk~a313c4f7cf.js`), [], import.meta.url),
          "../localization/friendsui_english.json": () =>
            u(() => import(`./chunk~167330b13a.js`), [], import.meta.url),
          "../localization/friendsui_finnish.json": () =>
            u(() => import(`./chunk~b29469271c.js`), [], import.meta.url),
          "../localization/friendsui_french.json": () =>
            u(() => import(`./chunk~ea8d469232.js`), [], import.meta.url),
          "../localization/friendsui_german.json": () =>
            u(() => import(`./chunk~9dbda2cb61.js`), [], import.meta.url),
          "../localization/friendsui_greek.json": () =>
            u(() => import(`./chunk~cef16e40de.js`), [], import.meta.url),
          "../localization/friendsui_hungarian.json": () =>
            u(() => import(`./chunk~3eb372895a.js`), [], import.meta.url),
          "../localization/friendsui_indonesian.json": () =>
            u(() => import(`./chunk~a4ed63f85a.js`), [], import.meta.url),
          "../localization/friendsui_italian.json": () =>
            u(() => import(`./chunk~7df28983e3.js`), [], import.meta.url),
          "../localization/friendsui_japanese.json": () =>
            u(() => import(`./chunk~0c6cb5838a.js`), [], import.meta.url),
          "../localization/friendsui_koreana.json": () =>
            u(() => import(`./chunk~dba0f00409.js`), [], import.meta.url),
          "../localization/friendsui_latam.json": () =>
            u(() => import(`./chunk~eaf4e22a72.js`), [], import.meta.url),
          "../localization/friendsui_malay.json": () =>
            u(() => import(`./chunk~e1a25a35a9.js`), [], import.meta.url),
          "../localization/friendsui_norwegian.json": () =>
            u(() => import(`./chunk~0299d42912.js`), [], import.meta.url),
          "../localization/friendsui_polish.json": () =>
            u(() => import(`./chunk~254f79154d.js`), [], import.meta.url),
          "../localization/friendsui_portuguese.json": () =>
            u(() => import(`./chunk~2a397fa087.js`), [], import.meta.url),
          "../localization/friendsui_romanian.json": () =>
            u(() => import(`./chunk~47cbcec16c.js`), [], import.meta.url),
          "../localization/friendsui_russian.json": () =>
            u(() => import(`./chunk~55e3297805.js`), [], import.meta.url),
          "../localization/friendsui_sc_schinese.json": () =>
            u(() => import(`./chunk~6244a153be.js`), [], import.meta.url),
          "../localization/friendsui_schinese.json": () =>
            u(() => import(`./chunk~bfae899e97.js`), [], import.meta.url),
          "../localization/friendsui_spanish.json": () =>
            u(() => import(`./chunk~f842feb9a1.js`), [], import.meta.url),
          "../localization/friendsui_swedish.json": () =>
            u(() => import(`./chunk~b928416503.js`), [], import.meta.url),
          "../localization/friendsui_tchinese.json": () =>
            u(() => import(`./chunk~f5cba0f2ee.js`), [], import.meta.url),
          "../localization/friendsui_thai.json": () =>
            u(() => import(`./chunk~cf9dc2e177.js`), [], import.meta.url),
          "../localization/friendsui_turkish.json": () =>
            u(() => import(`./chunk~a5b92bdb01.js`), [], import.meta.url),
          "../localization/friendsui_ukrainian.json": () =>
            u(() => import(`./chunk~2125dfa447.js`), [], import.meta.url),
          "../localization/friendsui_vietnamese.json": () =>
            u(() => import(`./chunk~a4fb356508.js`), [], import.meta.url),
        }),
        `../localization/friendsui_${e}.json`,
        3,
      ),
      r
        ? {}
        : t(
            Object.assign({
              "../localization/friendsui_arabic.json": () =>
                u(() => import(`./chunk~611c7e5272.js`), [], import.meta.url),
              "../localization/friendsui_brazilian.json": () =>
                u(() => import(`./chunk~6fa8dc40e4.js`), [], import.meta.url),
              "../localization/friendsui_bulgarian.json": () =>
                u(() => import(`./chunk~b8270e605a.js`), [], import.meta.url),
              "../localization/friendsui_czech.json": () =>
                u(() => import(`./chunk~d6d483ec9c.js`), [], import.meta.url),
              "../localization/friendsui_danish.json": () =>
                u(() => import(`./chunk~44cdaf67be.js`), [], import.meta.url),
              "../localization/friendsui_dutch.json": () =>
                u(() => import(`./chunk~a313c4f7cf.js`), [], import.meta.url),
              "../localization/friendsui_english.json": () =>
                u(() => import(`./chunk~167330b13a.js`), [], import.meta.url),
              "../localization/friendsui_finnish.json": () =>
                u(() => import(`./chunk~b29469271c.js`), [], import.meta.url),
              "../localization/friendsui_french.json": () =>
                u(() => import(`./chunk~ea8d469232.js`), [], import.meta.url),
              "../localization/friendsui_german.json": () =>
                u(() => import(`./chunk~9dbda2cb61.js`), [], import.meta.url),
              "../localization/friendsui_greek.json": () =>
                u(() => import(`./chunk~cef16e40de.js`), [], import.meta.url),
              "../localization/friendsui_hungarian.json": () =>
                u(() => import(`./chunk~3eb372895a.js`), [], import.meta.url),
              "../localization/friendsui_indonesian.json": () =>
                u(() => import(`./chunk~a4ed63f85a.js`), [], import.meta.url),
              "../localization/friendsui_italian.json": () =>
                u(() => import(`./chunk~7df28983e3.js`), [], import.meta.url),
              "../localization/friendsui_japanese.json": () =>
                u(() => import(`./chunk~0c6cb5838a.js`), [], import.meta.url),
              "../localization/friendsui_koreana.json": () =>
                u(() => import(`./chunk~dba0f00409.js`), [], import.meta.url),
              "../localization/friendsui_latam.json": () =>
                u(() => import(`./chunk~eaf4e22a72.js`), [], import.meta.url),
              "../localization/friendsui_malay.json": () =>
                u(() => import(`./chunk~e1a25a35a9.js`), [], import.meta.url),
              "../localization/friendsui_norwegian.json": () =>
                u(() => import(`./chunk~0299d42912.js`), [], import.meta.url),
              "../localization/friendsui_polish.json": () =>
                u(() => import(`./chunk~254f79154d.js`), [], import.meta.url),
              "../localization/friendsui_portuguese.json": () =>
                u(() => import(`./chunk~2a397fa087.js`), [], import.meta.url),
              "../localization/friendsui_romanian.json": () =>
                u(() => import(`./chunk~47cbcec16c.js`), [], import.meta.url),
              "../localization/friendsui_russian.json": () =>
                u(() => import(`./chunk~55e3297805.js`), [], import.meta.url),
              "../localization/friendsui_sc_schinese.json": () =>
                u(() => import(`./chunk~6244a153be.js`), [], import.meta.url),
              "../localization/friendsui_schinese.json": () =>
                u(() => import(`./chunk~bfae899e97.js`), [], import.meta.url),
              "../localization/friendsui_spanish.json": () =>
                u(() => import(`./chunk~f842feb9a1.js`), [], import.meta.url),
              "../localization/friendsui_swedish.json": () =>
                u(() => import(`./chunk~b928416503.js`), [], import.meta.url),
              "../localization/friendsui_tchinese.json": () =>
                u(() => import(`./chunk~f5cba0f2ee.js`), [], import.meta.url),
              "../localization/friendsui_thai.json": () =>
                u(() => import(`./chunk~cf9dc2e177.js`), [], import.meta.url),
              "../localization/friendsui_turkish.json": () =>
                u(() => import(`./chunk~a5b92bdb01.js`), [], import.meta.url),
              "../localization/friendsui_ukrainian.json": () =>
                u(() => import(`./chunk~2125dfa447.js`), [], import.meta.url),
              "../localization/friendsui_vietnamese.json": () =>
                u(() => import(`./chunk~a4fb356508.js`), [], import.meta.url),
            }),
            `../localization/friendsui_${n}.json`,
            3,
          ),
      g.Ready(),
    ]);
  f.AddTokens(i, a);
}
