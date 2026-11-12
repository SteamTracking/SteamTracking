/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, l as r } from "./chunk~01cfc309bf.js";
import { n as i } from "./chunk~7e995db925.js";
import { n as a } from "./chunk~a35e3605eb.js";
import { n as o } from "./chunk~e3c69795ea.js";
import {
  Ha as s,
  Jb as c,
  Jy as l,
  Lb as u,
  Lo as d,
  Vs as f,
  _o as p,
  ao as m,
  cS as h,
  dc as g,
  lS as _,
  mo as v,
  uS as y,
  wc as b,
} from "./main.js";
var x = e(t()),
  S = `SF1sJnuMqxw-`,
  C = `rALHh8gNXzk-`,
  w = `BPUdGzLfnOs-`,
  T = `JOLhLnwh07k-`,
  E = `ZNkrEoiqVl8-`,
  D = `QJ-7IJ25nrU-`,
  O = `PxCAsy1vdvA-`,
  k = `mJ-ovG6Q-Nw-`,
  A = n(),
  j = class extends x.Component {
    static get hoverClass() {
      return k;
    }
    render() {
      let {
          persona: e,
          animating: t,
          className: n,
          size: r,
          dim: i,
          ...a
        } = this.props,
        o = ``;
      return (
        r == `medium` ? (o = w) : r == `large` && (o = T),
        (0, A.jsxs)(`div`, {
          className: b(
            S,
            e.online_state,
            n,
            t && `h-MpRJExIDY-`,
            o,
            i && `rum5qK7fcnY-`,
          ),
          ...a,
          children: [
            (0, A.jsx)(`div`, {
              "data-text": `Z`,
              className: b(C, E),
              children: `Z`,
            }),
            (0, A.jsx)(`div`, {
              "data-text": `Z`,
              className: b(C, D),
              children: `Z`,
            }),
            (0, A.jsx)(`div`, {
              "data-text": `Z`,
              className: b(C, O),
              children: `Z`,
            }),
          ],
        })
      );
    }
  };
j = u([r], j);
var ee = r((e) => {
    let { persona: t, className: n, ...r } = e;
    if (!t || !t.is_online) return null;
    let c = t.HasStateFlag(512),
      u = t.HasStateFlag(i),
      d = t.m_eGamingDeviceType == 544,
      p = t.m_eGamingDeviceType == 545,
      m = !d && !p && !u && t.HasStateFlag(1024);
    return (0, A.jsxs)(x.Fragment, {
      children: [
        c &&
          (0, A.jsx)(`div`, {
            className: b(n, `da-aiolTzeA-`, `blHJJNodWx8-`, a(t)),
            title: l(`#Platform_Hint_Mobile`),
            ...r,
            children: (0, A.jsx)(o, {}),
          }),
        u &&
          (0, A.jsx)(`div`, {
            className: b(n, `da-aiolTzeA-`, `BcFXA8lWH3E-`, a(t)),
            title: l(`#Platform_Hint_VR`),
            ...r,
            children: (0, A.jsx)(g, {}),
          }),
        m &&
          (0, A.jsx)(`div`, {
            className: b(n, `da-aiolTzeA-`, void 0, a(t)),
            title: l(`#Platform_Hint_BigPicture`),
            ...r,
            children: (0, A.jsx)(s, {}),
          }),
        d &&
          (0, A.jsx)(`div`, {
            className: b(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, a(t)),
            title: l(`#Platform_Hint_SteamDeck`),
            ...r,
            children: (0, A.jsx)(f, {}),
          }),
        p &&
          (0, A.jsx)(`div`, {
            className: b(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, a(t)),
            title: l(`#Platform_Hint_LegionGoS`),
            ...r,
            children: (0, A.jsx)(f, {}),
          }),
      ],
    });
  }),
  M = `JT7Tc3-HVD8-`,
  N = `j-7wpj1lnTs-`,
  P = `YSmzqRXBp-c-`,
  F = `DiM-YEuAiRQ-`,
  I = `cTbg3n7roHw-`,
  L = `VoqT3Dd8TPE-`,
  te = `nBCm-QvuKr8-`,
  R = `VirJ-To7GvQ-`,
  ne = `cj674wkduhQ-`,
  re = `ne8a3CldZh4-`,
  z = `bTQkmHfshdg-`;
function B(e) {
  return (0, A.jsxs)(x.Fragment, {
    children: [
      (0, A.jsx)(`span`, { className: R, children: l(`#User_WantsToPlay`) }),
      `\xA0–\xA0`,
      e.persona.GetCurrentGameName(),
    ],
  });
}
var V = class extends x.Component {
  render() {
    let {
        className: e,
        onContextMenu: t,
        persona: n,
        eFriendRelationship: r,
        bIsSelf: i,
        bParenthesizeNicknames: o,
        strNickname: s,
        bCompactView: u,
        bHideGameName: f,
        bHideEnhancedRichPresenceLabel: g,
        bHideSnooze: x,
        bHideStatus: S,
        renderStatus: C,
        renderRichPresence: w,
        bHidePersona: T,
        bDNDSet: E,
        bHasPartyBeacon: D,
        bHasGamePrivacy: O,
        bNoMask: k,
        bEllipsisName: R,
        bDropPadding: V,
        ...H
      } = this.props,
      U = null,
      W = null,
      G = null,
      K = [e, void 0, a(n), u ? re : void 0, k ? L : void 0];
    (D || n.has_public_party_beacon
      ? (W = (0, A.jsx)(B, { persona: n }))
      : _(r)
        ? ((W = l(`#PersonaStateBlocked`)), K.push(P))
        : n.is_ingame
          ? ((W =
              !n.is_in_nonsteam_game || i || y(r)
                ? n.GetCurrentGameName()
                : l(`#PersonaStateInNonSteamGame`)),
            !i && !T
              ? (G = n.GetCurrentGameRichPresence())
              : i && n.is_awayOrSnooze && (G = l(`#PersonaStateAway`)))
          : n.m_broadcastAccountId && (W = l(`#PersonaStateWatchingBroadcast`)),
      (W ||= n.GetLocalizedOnlineStatus()),
      C && (W = C()));
    let q = !T && !x;
    (x === !1 && (q = !0),
      n.is_awayOrSnooze && q && (U = (0, A.jsx)(j, { persona: n })));
    let J = (0, A.jsx)(A.Fragment, {});
    (t
      ? (J = (0, A.jsx)(`div`, {
          className: `ContextMenuButton`,
          onClick: t,
          children: (0, A.jsx)(p, {}),
        }))
      : K.push(z),
      T && K.push(ne),
      w && (G = w()),
      (f || !G) && K.push(te));
    let Y = !n.is_ingame && !S,
      X = !g && G,
      Z = W && (!f || !X),
      ie = h(c()?.LAUNCHER_TYPE ?? 0),
      Q = s && !o,
      ae = Q ? s : n.m_strPlayerName,
      $ = !T && (Z || Y) && X;
    return (0, A.jsxs)(`div`, {
      ...H,
      className: b(...K),
      onContextMenu: t,
      children: [
        (0, A.jsxs)(`div`, {
          className: b(M, $ ? N : void 0),
          children: [
            (0, A.jsxs)(`div`, {
              className: b(F, R ? I : void 0),
              children: [
                ae || `\xA0`,
                o &&
                  s &&
                  (0, A.jsxs)(`span`, {
                    className: `eOmjO6XkTx4-`,
                    children: [`(`, s, `)`],
                  }),
              ],
            }),
            E &&
              (0, A.jsx)(`div`, {
                className: `TGKbpc7Wcyk-`,
                title: l(`#User_ToggleDoNotDisturb`),
                children: (0, A.jsx)(v, {}),
              }),
            Q &&
              (0, A.jsx)(`span`, {
                className: `-oIKqTeuyo8-`,
                title: l(`#isNickname`),
                children: ` *`,
              }),
            (0, A.jsx)(ee, { persona: n }),
            U,
            (n.m_bPlayerNamePending || n.m_bAvatarPending) &&
              ie &&
              (0, A.jsx)(`div`, {
                className: `qAItuMOYwsU-`,
                title: l(`#SteamChina_PendingPersonaName`),
                children: (0, A.jsx)(m, {}),
              }),
            J,
          ],
        }),
        !T &&
          (0, A.jsxs)(`div`, {
            className: `_9lhfreYH7b4-`,
            children: [
              (Z || Y) &&
                (0, A.jsxs)(`div`, {
                  className: b(
                    `-rLUGeiOB5k-`,
                    $ ? `j-7wpj1lnTs-` : void 0,
                    `KzNkmPbkAaI-`,
                    V && `VWRtCEXAYxQ-`,
                    `no-drag`,
                  ),
                  children: [
                    O &&
                      (0, A.jsx)(`div`, {
                        className: `RUAwoGhbIvU-`,
                        title: l(`#User_GameInfoHidden`),
                        children: (0, A.jsx)(d, {}),
                      }),
                    W,
                  ],
                }),
              X &&
                (0, A.jsxs)(`div`, {
                  className: b(`KzNkmPbkAaI-`, V && `VWRtCEXAYxQ-`, `no-drag`),
                  children: [G, ` `],
                }),
            ],
          }),
      ],
    });
  }
};
V = u([r], V);
var H = r((e) => {
  let {
      persona: t,
      bParenthesizeNicknames: n,
      strNickname: r,
      bIgnorePersonaStatus: i,
      bDisableColoring: o,
      className: s,
      ...c
    } = e,
    l = r && !n ? r : t.m_strPlayerName;
  return (0, A.jsx)(`span`, {
    ...c,
    className: b(s, o && `Zhs6svnnbFQ-`, !i && a(t)),
    children: (0, A.jsxs)(`span`, {
      className: F,
      children: [
        l || `\xA0`,
        n &&
          r &&
          (0, A.jsxs)(`span`, {
            className: `eOmjO6XkTx4-`,
            children: [`(`, r, `)`],
          }),
      ],
    }),
  });
});
export { V as n, H as t };
