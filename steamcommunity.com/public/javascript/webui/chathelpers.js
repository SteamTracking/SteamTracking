/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { i as e } from "./rolldown-runtime.js?contenthash=Bhk3NnG1";
import { t } from "./_rolldown_dynamic_import_helper.js?contenthash=B8fe511f";
import {
  G as n,
  L as r,
  N as i,
  Nn as a,
  T as o,
  Tt as s,
  Un as c,
  W as l,
  a as u,
  jt as d,
  l as f,
  n as p,
  o as m,
  w as h,
  yr as g,
} from "./localization.js?contenthash=BbczadiP";
import {
  c as _,
  i as v,
  l as y,
  n as b,
  r as x,
  t as S,
} from "./webpackinit.js?contenthash=7c4B_KgN";
var C = e(g()),
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
        let i = d.COMMUNITY_BASE_URL.replace(/(https?:\/\/[^/]*).*$/, `$1`);
        r.source == t &&
          r.data == `FriendsUIReady` &&
          r.origin == i &&
          (t.postMessage(e, d.COMMUNITY_BASE_URL),
          window.removeEventListener(`message`, n));
      };
      window.addEventListener(`message`, n);
    }
    t.location.href = d.COMMUNITY_BASE_URL + `chat/`;
  } else e && t.postMessage(e, d.COMMUNITY_BASE_URL);
  t.focus();
}
var E = x(),
  D = b(),
  O = class extends _ {
    constructor(e) {
      super(e), l(this);
    }
    BIsExpired() {
      return k.sm_rtTimeCur >= this.m_rtTimeExpires;
    }
    InitFromPHPInviteLinkInfo(e) {
      this.m_ulChatID = e.chat_id;
      let t = new y(e.steamid_sender);
      t.BIsIndividualAccount() &&
        (this.m_unAccountIDInviter = t.GetAccountID()),
        (this.m_rtTimeExpires = e.time_expires),
        (this.m_bIsBanned = e.banned),
        (this.m_rtKickExpires = e.time_kick_expire),
        e.group_summary &&
          (this.m_ulChatRoomGroupID = e.group_summary.chat_group_id),
        (this.m_bValid = !0),
        (this.m_bReady = !0);
    }
  };
i([r], O.prototype, `InitFromPHPInviteLinkInfo`, null);
var k = class {
  m_bConnectingToClient = !1;
  m_invite;
  m_htmlPreRendered;
  static sm_rtTimeCur;
  constructor(e) {
    l(this),
      (this.m_invite = new O(e.strInviteCode)),
      e.Invite
        ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
        : this.m_invite.InitInvalid(),
      (this.m_htmlPreRendered = e.render);
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
i([n], k.prototype, `m_bConnectingToClient`, void 0);
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
A = i([v], A);
var j = class extends C.Component {
  constructor(e) {
    super(e), l(this);
  }
  m_bTriedToLaunchSteam = !1;
  LaunchWebChat() {
    this.props.controller.LaunchWebChat();
  }
  LaunchSteamClient() {
    this.props.controller.ForceLaunchSteamClient(),
      window.setTimeout(() => {
        this.m_bTriedToLaunchSteam = !0;
      }, 1e3);
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
                  children: m(`#InviteLanding_OpenInSteam`),
                }),
              (0, D.jsx)(`button`, {
                className: n,
                type: `button`,
                onClick: this.LaunchWebChat,
                children: m(`#InviteLanding_OpenInWebChat`),
              }),
            ],
          }),
          this.m_bTriedToLaunchSteam &&
            (0, D.jsx)(`div`, {
              className: `inviteLabel inviteLabelLaunchPrompt`,
              children: m(`#InviteLanding_OpenInSteam_Help`),
            }),
        ],
      })
    );
  }
};
i([n], j.prototype, `m_bTriedToLaunchSteam`, void 0),
  i([a], j.prototype, `LaunchWebChat`, null),
  i([a], j.prototype, `LaunchSteamClient`, null),
  (j = i([v], j));
var M = class extends C.Component {
  render() {
    return (0, D.jsx)(`div`, {
      className: `ChatMessageInvite`,
      children: (0, D.jsx)(`div`, {
        className: `postedExpiredInvite`,
        children: m(`#InviteLanding_ExpiredOrInvalid`),
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
            children: f(
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
window.AssertMsg = c;
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
        c(!1, `unknown component: "${r}"`);
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
  s(), await I(d.LANGUAGE), P();
});
async function I(e) {
  let n = p.GetLanguageFallback(e),
    r = e === n,
    [i, a] = await Promise.all([
      t(
        Object.assign({
          "../localization/friendsui_arabic.json": () =>
            o(
              () => import(`./friendsui_arabic.js?contenthash=CnZEM91y`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_brazilian.json": () =>
            o(
              () => import(`./friendsui_brazilian.js?contenthash=ChGnBikL`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_bulgarian.json": () =>
            o(
              () => import(`./friendsui_bulgarian.js?contenthash=NzeMeN1U`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_czech.json": () =>
            o(
              () => import(`./friendsui_czech.js?contenthash=DY0U0Ufm`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_danish.json": () =>
            o(
              () => import(`./friendsui_danish.js?contenthash=YKOxxopz`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_dutch.json": () =>
            o(
              () => import(`./friendsui_dutch.js?contenthash=CGapuncu`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_english.json": () =>
            o(
              () => import(`./friendsui_english.js?contenthash=DVg31sHA`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_finnish.json": () =>
            o(
              () => import(`./friendsui_finnish.js?contenthash=DEowrZqi`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_french.json": () =>
            o(
              () => import(`./friendsui_french.js?contenthash=DFcwkjWI`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_german.json": () =>
            o(
              () => import(`./friendsui_german.js?contenthash=DQ9X1MPU`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_greek.json": () =>
            o(
              () => import(`./friendsui_greek.js?contenthash=D5G4ezrZ`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_hungarian.json": () =>
            o(
              () => import(`./friendsui_hungarian.js?contenthash=Bn4GsGt9`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_indonesian.json": () =>
            o(
              () => import(`./friendsui_indonesian.js?contenthash=BdHxBrfS`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_italian.json": () =>
            o(
              () => import(`./friendsui_italian.js?contenthash=Dfv4ZYTz`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_japanese.json": () =>
            o(
              () => import(`./friendsui_japanese.js?contenthash=BUwpM_dp`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_koreana.json": () =>
            o(
              () => import(`./friendsui_koreana.js?contenthash=DQZ8-pXJ`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_latam.json": () =>
            o(
              () => import(`./friendsui_latam.js?contenthash=Dn3i5z6D`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_malay.json": () =>
            o(
              () => import(`./friendsui_malay.js?contenthash=BckesiXu`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_norwegian.json": () =>
            o(
              () => import(`./friendsui_norwegian.js?contenthash=Cbydn4il`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_polish.json": () =>
            o(
              () => import(`./friendsui_polish.js?contenthash=9Q9lFq0e`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_portuguese.json": () =>
            o(
              () => import(`./friendsui_portuguese.js?contenthash=CFYepeor`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_romanian.json": () =>
            o(
              () => import(`./friendsui_romanian.js?contenthash=BRgHQaE4`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_russian.json": () =>
            o(
              () => import(`./friendsui_russian.js?contenthash=BZFw9yAo`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_sc_schinese.json": () =>
            o(
              () => import(`./friendsui_sc_schinese.js?contenthash=DxZJpGQD`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_schinese.json": () =>
            o(
              () => import(`./friendsui_schinese.js?contenthash=D_-9oeb8`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_spanish.json": () =>
            o(
              () => import(`./friendsui_spanish.js?contenthash=0UVtLyWi`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_swedish.json": () =>
            o(
              () => import(`./friendsui_swedish.js?contenthash=CHg9O79L`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_tchinese.json": () =>
            o(
              () => import(`./friendsui_tchinese.js?contenthash=DFe68QuO`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_thai.json": () =>
            o(
              () => import(`./friendsui_thai.js?contenthash=7zuSyyaN`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_turkish.json": () =>
            o(
              () => import(`./friendsui_turkish.js?contenthash=ObGSkyOE`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_ukrainian.json": () =>
            o(
              () => import(`./friendsui_ukrainian.js?contenthash=DKGabtNo`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_vietnamese.json": () =>
            o(
              () => import(`./friendsui_vietnamese.js?contenthash=ChKd0lDP`),
              [],
              import.meta.url,
            ),
        }),
        `../localization/friendsui_${e}.json`,
        3,
      ),
      r
        ? {}
        : t(
            Object.assign({
              "../localization/friendsui_arabic.json": () =>
                o(
                  () => import(`./friendsui_arabic.js?contenthash=CnZEM91y`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_brazilian.json": () =>
                o(
                  () => import(`./friendsui_brazilian.js?contenthash=ChGnBikL`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_bulgarian.json": () =>
                o(
                  () => import(`./friendsui_bulgarian.js?contenthash=NzeMeN1U`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_czech.json": () =>
                o(
                  () => import(`./friendsui_czech.js?contenthash=DY0U0Ufm`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_danish.json": () =>
                o(
                  () => import(`./friendsui_danish.js?contenthash=YKOxxopz`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_dutch.json": () =>
                o(
                  () => import(`./friendsui_dutch.js?contenthash=CGapuncu`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_english.json": () =>
                o(
                  () => import(`./friendsui_english.js?contenthash=DVg31sHA`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_finnish.json": () =>
                o(
                  () => import(`./friendsui_finnish.js?contenthash=DEowrZqi`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_french.json": () =>
                o(
                  () => import(`./friendsui_french.js?contenthash=DFcwkjWI`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_german.json": () =>
                o(
                  () => import(`./friendsui_german.js?contenthash=DQ9X1MPU`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_greek.json": () =>
                o(
                  () => import(`./friendsui_greek.js?contenthash=D5G4ezrZ`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_hungarian.json": () =>
                o(
                  () => import(`./friendsui_hungarian.js?contenthash=Bn4GsGt9`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_indonesian.json": () =>
                o(
                  () =>
                    import(`./friendsui_indonesian.js?contenthash=BdHxBrfS`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_italian.json": () =>
                o(
                  () => import(`./friendsui_italian.js?contenthash=Dfv4ZYTz`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_japanese.json": () =>
                o(
                  () => import(`./friendsui_japanese.js?contenthash=BUwpM_dp`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_koreana.json": () =>
                o(
                  () => import(`./friendsui_koreana.js?contenthash=DQZ8-pXJ`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_latam.json": () =>
                o(
                  () => import(`./friendsui_latam.js?contenthash=Dn3i5z6D`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_malay.json": () =>
                o(
                  () => import(`./friendsui_malay.js?contenthash=BckesiXu`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_norwegian.json": () =>
                o(
                  () => import(`./friendsui_norwegian.js?contenthash=Cbydn4il`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_polish.json": () =>
                o(
                  () => import(`./friendsui_polish.js?contenthash=9Q9lFq0e`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_portuguese.json": () =>
                o(
                  () =>
                    import(`./friendsui_portuguese.js?contenthash=CFYepeor`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_romanian.json": () =>
                o(
                  () => import(`./friendsui_romanian.js?contenthash=BRgHQaE4`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_russian.json": () =>
                o(
                  () => import(`./friendsui_russian.js?contenthash=BZFw9yAo`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_sc_schinese.json": () =>
                o(
                  () =>
                    import(`./friendsui_sc_schinese.js?contenthash=DxZJpGQD`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_schinese.json": () =>
                o(
                  () => import(`./friendsui_schinese.js?contenthash=D_-9oeb8`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_spanish.json": () =>
                o(
                  () => import(`./friendsui_spanish.js?contenthash=0UVtLyWi`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_swedish.json": () =>
                o(
                  () => import(`./friendsui_swedish.js?contenthash=CHg9O79L`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_tchinese.json": () =>
                o(
                  () => import(`./friendsui_tchinese.js?contenthash=DFe68QuO`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_thai.json": () =>
                o(
                  () => import(`./friendsui_thai.js?contenthash=7zuSyyaN`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_turkish.json": () =>
                o(
                  () => import(`./friendsui_turkish.js?contenthash=ObGSkyOE`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_ukrainian.json": () =>
                o(
                  () => import(`./friendsui_ukrainian.js?contenthash=DKGabtNo`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_vietnamese.json": () =>
                o(
                  () =>
                    import(`./friendsui_vietnamese.js?contenthash=ChKd0lDP`),
                  [],
                  import.meta.url,
                ),
            }),
            `../localization/friendsui_${n}.json`,
            3,
          ),
      h.Ready(),
    ]);
  u.AddTokens(i, a);
}
