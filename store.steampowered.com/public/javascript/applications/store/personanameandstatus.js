/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, l as r } from "./libraries.js";
import { n as i } from "./enums_epersonastateflag.js";
import { n as a } from "./persona.js";
import { n as o } from "./alternate_icons.js";
import {
  Bs as s,
  Cc as c,
  Io as l,
  Nb as u,
  Va as d,
  Wb as f,
  Wy as p,
  aS as m,
  go as h,
  iS as g,
  io as _,
  oS as v,
  po as y,
  uc as b,
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
          className: c(
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
              className: c(C, E),
              children: `Z`,
            }),
            (0, A.jsx)(`div`, {
              "data-text": `Z`,
              className: c(C, D),
              children: `Z`,
            }),
            (0, A.jsx)(`div`, {
              "data-text": `Z`,
              className: c(C, O),
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
    let l = t.HasStateFlag(512),
      u = t.HasStateFlag(i),
      f = t.m_eGamingDeviceType == 544,
      m = t.m_eGamingDeviceType == 545,
      h = !f && !m && !u && t.HasStateFlag(1024);
    return (0, A.jsxs)(x.Fragment, {
      children: [
        l &&
          (0, A.jsx)(`div`, {
            className: c(n, `da-aiolTzeA-`, `blHJJNodWx8-`, a(t)),
            title: p(`#Platform_Hint_Mobile`),
            ...r,
            children: (0, A.jsx)(o, {}),
          }),
        u &&
          (0, A.jsx)(`div`, {
            className: c(n, `da-aiolTzeA-`, `BcFXA8lWH3E-`, a(t)),
            title: p(`#Platform_Hint_VR`),
            ...r,
            children: (0, A.jsx)(b, {}),
          }),
        h &&
          (0, A.jsx)(`div`, {
            className: c(n, `da-aiolTzeA-`, void 0, a(t)),
            title: p(`#Platform_Hint_BigPicture`),
            ...r,
            children: (0, A.jsx)(d, {}),
          }),
        f &&
          (0, A.jsx)(`div`, {
            className: c(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, a(t)),
            title: p(`#Platform_Hint_SteamDeck`),
            ...r,
            children: (0, A.jsx)(s, {}),
          }),
        m &&
          (0, A.jsx)(`div`, {
            className: c(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, a(t)),
            title: p(`#Platform_Hint_LegionGoS`),
            ...r,
            children: (0, A.jsx)(s, {}),
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
      (0, A.jsx)(`span`, { className: R, children: p(`#User_WantsToPlay`) }),
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
        bHideGameName: d,
        bHideEnhancedRichPresenceLabel: b,
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
      : m(r)
        ? ((W = p(`#PersonaStateBlocked`)), K.push(P))
        : n.is_ingame
          ? ((W =
              !n.is_in_nonsteam_game || i || v(r)
                ? n.GetCurrentGameName()
                : p(`#PersonaStateInNonSteamGame`)),
            !i && !T
              ? (G = n.GetCurrentGameRichPresence())
              : i && n.is_awayOrSnooze && (G = p(`#PersonaStateAway`)))
          : n.m_broadcastAccountId && (W = p(`#PersonaStateWatchingBroadcast`)),
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
          children: (0, A.jsx)(h, {}),
        }))
      : K.push(z),
      T && K.push(ne),
      w && (G = w()),
      (d || !G) && K.push(te));
    let Y = !n.is_ingame && !S,
      X = !b && G,
      Z = W && (!d || !X),
      ie = g(f()?.LAUNCHER_TYPE ?? 0),
      Q = s && !o,
      ae = Q ? s : n.m_strPlayerName,
      $ = !T && (Z || Y) && X;
    return (0, A.jsxs)(`div`, {
      ...H,
      className: c(...K),
      onContextMenu: t,
      children: [
        (0, A.jsxs)(`div`, {
          className: c(M, $ ? N : void 0),
          children: [
            (0, A.jsxs)(`div`, {
              className: c(F, R ? I : void 0),
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
                title: p(`#User_ToggleDoNotDisturb`),
                children: (0, A.jsx)(y, {}),
              }),
            Q &&
              (0, A.jsx)(`span`, {
                className: `-oIKqTeuyo8-`,
                title: p(`#isNickname`),
                children: ` *`,
              }),
            (0, A.jsx)(ee, { persona: n }),
            U,
            (n.m_bPlayerNamePending || n.m_bAvatarPending) &&
              ie &&
              (0, A.jsx)(`div`, {
                className: `qAItuMOYwsU-`,
                title: p(`#SteamChina_PendingPersonaName`),
                children: (0, A.jsx)(_, {}),
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
                  className: c(
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
                        title: p(`#User_GameInfoHidden`),
                        children: (0, A.jsx)(l, {}),
                      }),
                    W,
                  ],
                }),
              X &&
                (0, A.jsxs)(`div`, {
                  className: c(`KzNkmPbkAaI-`, V && `VWRtCEXAYxQ-`, `no-drag`),
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
      ...l
    } = e,
    u = r && !n ? r : t.m_strPlayerName;
  return (0, A.jsx)(`span`, {
    ...l,
    className: c(s, o && `Zhs6svnnbFQ-`, !i && a(t)),
    children: (0, A.jsxs)(`span`, {
      className: F,
      children: [
        u || `\xA0`,
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
